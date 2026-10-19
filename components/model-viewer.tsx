"use client";

import { createElement, useEffect, useRef, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";
import { RotateCcw } from "lucide-react";

export type ModelKind = "atelier" | "lounge" | "mesa" | "cadeira";
export const modelInfo = {
  atelier: {
    src: "/models/atelier-chair.glb",
    name: "Poltrona em couro e madeira",
    poster: "/images/atelier-chair-poster.webp",
    orbit: "-28deg 77deg 110%",
  },
  lounge: {
    src: "/models/lounge.glb",
    name: "Poltrona em veludo",
    poster: "/images/lounge-poster.webp",
    orbit: "-28deg 76deg 105%",
  },
  mesa: {
    src: "/models/coffee-table.glb",
    name: "Mesa circular",
    poster: "/images/coffee-table-poster.webp",
    orbit: "25deg 65deg 105%",
  },
  cadeira: {
    src: "/models/cadeira.glb",
    name: "Cadeira de escritório",
    poster: "/images/cadeira-poster.webp",
    orbit: "-28deg 76deg 105%",
  },
};

export function ModelViewer({
  kind = "lounge",
  variant = "Mango Velvet",
  interactive = true,
  onReady,
  className = "",
  id,
}: {
  kind?: ModelKind;
  variant?: string;
  interactive?: boolean;
  onReady?: (viewer: ModelViewerElement) => void;
  className?: string;
  id?: string;
}) {
  const ref = useRef<ModelViewerElement>(null);
  const callbackRef = useRef(onReady);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  callbackRef.current = onReady;
  useEffect(() => {
    let alive = true;
    const viewer = ref.current;
    setLoaded(false);
    setFailed(false);
    const load = () => {
      if (alive && viewer) {
        setLoaded(true);
        callbackRef.current?.(viewer);
      }
    };
    const error = () => {
      if (alive) setFailed(true);
    };
    viewer?.addEventListener("load", load);
    viewer?.addEventListener("error", error);
    import("@google/model-viewer").catch(error);
    if (viewer?.loaded) load();
    return () => {
      alive = false;
      viewer?.removeEventListener("load", load);
      viewer?.removeEventListener("error", error);
    };
  }, [kind, retry]);
  const model = modelInfo[kind];
  return (
    <div
      className={`model-wrap ${loaded ? "model-loaded" : ""} ${failed ? "model-failed" : ""} ${className}`}
    >
      <img
        className="model-static-poster"
        src={
          kind === "lounge" && variant === "Peacock Velvet"
            ? "/images/lounge-green-poster.webp"
            : model.poster
        }
        alt=""
        aria-hidden="true"
        width={1000}
        height={1000}
        fetchPriority={id === "hero-model" ? "high" : "auto"}
      />
      {createElement(
        "model-viewer",
        {
          key: `${kind}-${retry}`,
          ref,
          id,
          src: retry ? `${model.src}?retry=${retry}` : model.src,
          alt: interactive
            ? `Modelo 3D interativo — ${model.name}. Arraste para rodar e use as setas do teclado para explorar.`
            : `Apresentação 3D — ${model.name}.`,
          "camera-controls": interactive ? "" : undefined,
          "touch-action": "pan-y",
          "disable-zoom": "",
          tabIndex: interactive ? 0 : -1,
          inert: !interactive,
          "disable-pan": "",
          "camera-orbit": model.orbit,
          "min-camera-orbit": "auto 35deg 80%",
          "max-camera-orbit": "auto 100deg 150%",
          "field-of-view": "30deg",
          "shadow-intensity": "1",
          "shadow-softness": "1",
          exposure: ".8",
          "environment-image": "neutral",
          "interaction-prompt": "none",
          "variant-name": kind === "lounge" ? variant : undefined,
          ar: "",
          "ar-modes": "webxr scene-viewer quick-look",
          "ar-scale": "fixed",
          loading: "eager",
          reveal: "auto",
          style: { width: "100%", height: "100%" },
        },
        createElement("span", { slot: "ar-button" }),
        createElement("span", { slot: "progress-bar" }),
      )}
      {!loaded && !failed && (
        <span className="model-loading" role="status">
          <span />A preparar a experiência
        </span>
      )}
      {failed && (
        <div className="model-error" role="alert">
          <p>Não foi possível carregar o modelo.</p>
          <button className="text-link" onClick={() => setRetry(retry + 1)}>
            <RotateCcw size={14} /> Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
}
