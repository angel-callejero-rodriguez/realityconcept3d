"use client";

import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import type { ModelKind } from "./model-viewer";
import { SERVER_MODEL_ID, viewerUrl } from "@/lib/rc3d";

export function ExperienceDialog({
  kind,
  onClose,
}: {
  kind: ModelKind;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  
  // Como agora usamos a iFrame, precisamos de saber quando ela acaba de carregar
  // para removermos uma cor de fundo de "loading" ou mostrar a interface.
  const [isLoaded, setIsLoaded] = useState(false);
  const serverUrl = viewerUrl(SERVER_MODEL_ID[kind]);

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    
    element?.showModal();
    
    // Trava o scroll do site por trás da janela
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    // Atualiza o URL (opcional, para partilha de links)
    const url = new URL(window.location.href);
    url.hash = "modelos";
    url.searchParams.set("modelo", kind);
    window.history.replaceState(null, "", url.toString());

    return () => {
      document.body.style.overflow = overflow;
      element?.close();
      if (previousFocus?.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [kind]);

  return (
    <dialog
      ref={dialog}
      className="experience-dialog"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        // Se clicar fora da área branca, fecha a janela
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="experience-title"
      style={{
        width: '100%',
        maxWidth: '1200px',
        maxHeight: '90vh',
        padding: '0',
        borderRadius: '24px',
        border: 'none',
        backgroundColor: '#F5F5F5',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="experience-inner" style={{ height: '85vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* CABEÇALHO DO DIÁLOGO */}
        <div style={{ 
          padding: '24px 32px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          backgroundColor: '#F5F5F5',
          zIndex: 10
        }}>
          <div className="experience-heading" style={{ margin: 0 }}>
            <span className="eyebrow" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', color: '#B0543D', display: 'block', marginBottom: '8px' }}>
              REALITY CONCEPT / LIVE EXPERIENCE
            </span>
            <h2 id="experience-title" style={{ margin: '0 0 4px 0', fontSize: '2rem', color: '#111' }}>
              Uma nova perspetiva.
            </h2>
            <p style={{ margin: 0, color: '#666', fontSize: '1rem' }}>
              Rode a peça e descubra cada detalhe.
            </p>
          </div>
          
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Fechar visualizador"
            style={{
              background: 'white',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#111',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* A IFRAME UNIVERSAL (Substitui o ModelViewer) */}
        <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', backgroundColor: '#eeeeee' }}>
          {!isLoaded && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
              A carregar experiência 3D...
            </div>
          )}
          
          <iframe
            src={serverUrl}
            onLoad={() => setIsLoaded(true)}
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease'
            }}
            allow="xr-spatial-tracking; camera; autoplay; fullscreen"
            title={`Visualizador 3D - ${kind}`}
          />
        </div>

        {/* RODAPÉ E CRÉDITOS */}
        <div style={{ 
          padding: '16px 32px', 
          backgroundColor: '#F5F5F5', 
          borderTop: '1px solid #E5E5E5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* O crédito de cada modelo aparece dentro do visualizador (vem do registo do servidor) */}
          <p className="demo-credit" style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>
            Modelo de demonstração
          </p>

          {/* Botão de fallback caso o cliente queira abrir o site do servidor à parte */}
          <a
            href={serverUrl}
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', alignItems: 'center', gap: '6px', 
              fontSize: '0.8rem', color: '#111', textDecoration: 'none',
              fontWeight: 500
            }}
          >
            Abrir em ecrã inteiro <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </dialog>
  );
}