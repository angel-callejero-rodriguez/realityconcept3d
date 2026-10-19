"use client";

import { useRef, useState } from "react";
import { Rotate3D, X } from "lucide-react";
import { ModelViewer, type ModelKind } from "./model-viewer";

export function InteractiveProduct({
  kind = "atelier",
  id,
  className = "",
}: {
  kind?: ModelKind;
  id: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const activateButton = useRef<HTMLButtonElement>(null);
  function deactivate() {
    setActive(false);
    requestAnimationFrame(() =>
      activateButton.current?.focus({ preventScroll: true }),
    );
  }
  return (
    <div
      className={`interactive-product ${active ? "is-active" : ""} ${className}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && active) {
          event.stopPropagation();
          deactivate();
        }
      }}
    >
      <ModelViewer kind={kind} id={id} interactive={active} />
      {!active && (
        <button
          ref={activateButton}
          className="product-activate"
          aria-label="Ativar modelo 3D da poltrona"
          onClick={() => {
            setActive(true);
            requestAnimationFrame(() =>
              document.getElementById(id)?.focus({ preventScroll: true }),
            );
          }}
        >
          <span>
            <Rotate3D size={16} /> Clique para explorar em 3D
          </span>
        </button>
      )}
      {active && (
        <div className="product-controls">
          <span>
            <Rotate3D size={15} /> Arraste para rodar
          </span>
          <button onClick={deactivate} aria-label="Terminar interação 3D">
            <X size={14} /> Terminar
          </button>
        </div>
      )}
    </div>
  );
}
