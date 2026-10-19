"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, QrCode, Rotate3D, Smartphone, X } from "lucide-react";
import type { ModelViewerElement } from "@google/model-viewer";
import QRCode from "qrcode";
import { ModelViewer, type ModelKind } from "./model-viewer";

export function ExperienceDialog({
  kind,
  onClose,
}: {
  kind: ModelKind;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewer = useRef<ModelViewerElement | null>(null);
  const qrClose = useRef<HTMLButtonElement>(null);
  const arButton = useRef<HTMLButtonElement>(null);
  const [ready, setReady] = useState(false);
  const [qr, setQr] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [arError, setArError] = useState("");
  const [variant, setVariant] = useState("Mango Velvet");
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    element?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const url = new URL(window.location.href);
    url.hash = "modelos";
    url.searchParams.set("modelo", kind);
    QRCode.toDataURL(url.toString(), {
      width: 280,
      margin: 2,
      color: { dark: "#252720", light: "#ffffff" },
    })
      .then(setQr)
      .catch(() =>
        setArError("Abra este site no seu telemóvel para experimentar."),
      );
    return () => {
      document.body.style.overflow = overflow;
      element?.close();
      if (previousFocus?.isConnected)
        previousFocus.focus({ preventScroll: true });
    };
  }, [kind]);
  useEffect(() => {
    if (showQr) qrClose.current?.focus();
  }, [showQr]);
  function closeQR() {
    setShowQr(false);
    requestAnimationFrame(() => arButton.current?.focus());
  }
  async function startAR() {
    if (viewer.current?.canActivateAR) {
      try {
        await viewer.current.activateAR();
      } catch {
        setArError(
          "Não foi possível iniciar a AR neste dispositivo. Experimente abrir no Safari ou Chrome do telemóvel.",
        );
        setShowQr(true);
      }
    } else setShowQr(true);
  }
  return (
    <dialog
      ref={dialog}
      className="experience-dialog"
      onCancel={(event) => {
        event.preventDefault();
        if (showQr) closeQR();
        else onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="experience-title"
    >
      <div className="experience-inner">
        <div inert={showQr}>
          <div className="experience-top">
            <span className="eyebrow">REALITY CONCEPT / LIVE EXPERIENCE</span>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Fechar visualizador"
            >
              <X />
            </button>
          </div>
          <div className="experience-heading">
            <h2 id="experience-title">Uma nova perspetiva.</h2>
            <p>Rode a peça e descubra cada detalhe.</p>
          </div>
          <ModelViewer
            kind={kind}
            variant={variant}
            className="dialog-model"
            onReady={(value) => {
              viewer.current = value;
              setReady(true);
            }}
          />
          <div className="experience-toolbar">
            <span className="viewer-hint">
              <Rotate3D size={18} /> Arraste para rodar
            </span>
            {kind === "lounge" && (
              <div className="swatches" aria-label="Acabamento da poltrona">
                <button
                  className={`swatch swatch-rust ${variant === "Mango Velvet" ? "selected" : ""}`}
                  onClick={() => setVariant("Mango Velvet")}
                  aria-label="Veludo terracota"
                  aria-pressed={variant === "Mango Velvet"}
                />
                <button
                  className={`swatch swatch-green ${variant === "Peacock Velvet" ? "selected" : ""}`}
                  onClick={() => setVariant("Peacock Velvet")}
                  aria-label="Veludo verde"
                  aria-pressed={variant === "Peacock Velvet"}
                />
              </div>
            )}
            <button
              ref={arButton}
              className="solid-button"
              onClick={startAR}
              disabled={!ready}
            >
              <Smartphone size={17} />
              Ver no meu espaço
              <ArrowUpRight size={16} />
            </button>
          </div>
          <p className="demo-credit">
            Modelo de demonstração ·{" "}
            {kind === "atelier"
              ? "Mid Century Lounge Chair — Kuutti Siitonen / Poly Haven, CC0"
              : kind === "lounge"
                ? "Sheen Chair — Wayfair / Eric Chadwick, CC0"
                : kind === "cadeira"
                  ? "Office Chair Modern — thethieme, CC BY 4.0"
                  : "Coffee Table Round 01 — Poly Haven, CC0"}
          </p>
        </div>
        {showQr && (
          <div className="qr-panel">
            <button
              ref={qrClose}
              className="icon-button qr-close"
              onClick={closeQR}
              aria-label="Fechar código QR"
            >
              <X size={20} />
            </button>
            <QrCode size={24} />
            <h3>Do ecrã para a sua sala.</h3>
            <p>
              Leia o código com a câmara do telemóvel.
              <br />
              Abra a experiência e toque em “Ver no meu espaço”.
            </p>
            {qr && (
              <img
                src={qr}
                alt="Código QR para abrir este modelo no telemóvel"
                width={200}
                height={200}
              />
            )}
            <p className="qr-note">
              AR em dispositivos compatíveis. Sem instalar aplicações.
            </p>
            {arError && <p role="status">{arError}</p>}
          </div>
        )}
      </div>
    </dialog>
  );
}
