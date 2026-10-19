"use client";

import { CheckCircle2 } from "lucide-react";
import { InteractiveProduct } from "./interactive-product";

export function Hero() {
  return (
    <section className="hero-opening" aria-labelledby="hero-title">
      <div className="page-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            MODELAÇÃO 3D E REALIDADE AUMENTADA PARA MOBILIÁRIO
          </p>
          <h1 id="hero-title">
            Os seus móveis, vistos de todos os ângulos. No espaço de quem os vai
            escolher.
          </h1>
          <p className="hero-description">
            Das fotografias do seu catálogo a uma experiência interativa.
            Criamos os modelos 3D e integramos a Realidade Aumentada na sua
            loja, com cada detalhe aprovado por si.
          </p>
          <div className="button-row">
            <a href="/contacto" className="button button-primary">
              Marcar uma demo
            </a>
            <a href="#modelos" className="button button-secondary">
              Experimentar um modelo ao vivo
            </a>
          </div>
          <ul className="hero-assurances">
            {[
              "Modelação feita pela nossa equipa",
              "Aprova cada detalhe",
              "Integração na sua loja",
              "3D e AR no navegador",
              "iPhone e Android compatíveis",
            ].map((text) => (
              <li key={text}>
                <CheckCircle2 size={14} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <InteractiveProduct id="hero-model" />
        </div>
      </div>
    </section>
  );
}
