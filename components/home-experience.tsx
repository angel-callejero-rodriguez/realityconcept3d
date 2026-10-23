"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Camera, Expand, QrCode, TrendingUp, TrendingDown } from "lucide-react";
import dynamic from "next/dynamic";
import { Hero } from "./hero";
import { RoiCalculator } from "./roi-calculator";
import { InteractiveProduct } from "./interactive-product";
import type { ModelKind } from "./model-viewer";

const ExperienceDialog = dynamic(
  () => import("./experience-dialog").then((module) => module.ExperienceDialog),
  { ssr: false },
);

const steps = [
  {
    title: "Partilhe o seu produto",
    text: "Envie fotografias de vários ângulos, medidas e referências de materiais. O seu catálogo é o nosso ponto de partida.",
  },
  {
    title: "Nós criamos a versão 3D",
    text: "Trabalhamos a forma, as texturas e os acabamentos. A sua equipa revê e aprova o modelo antes da publicação.",
  },
  {
    title: "A experiência entra na sua loja",
    text: "Integramos o visualizador na página do produto. O cliente roda a peça e experimenta-a no seu espaço com AR.",
  },
];

const faqs = [
  [
    "Preciso de ter modelos 3D?",
    "Não. Podemos começar com fotografias, medidas e referências dos materiais. Se já tiver ficheiros 3D, avaliamos a geometria e preparamo-los para funcionar no navegador.",
  ],
  [
    "Quanto tempo demora um projeto?",
    "O calendário depende do número de produtos, da complexidade e dos acabamentos. Depois de conhecer as peças, enviamos uma proposta com as etapas e os prazos de entrega.",
  ],
  [
    "Funciona na minha loja online?",
    "A experiência pode ser incorporada em Shopify, WooCommerce ou num website à medida. Avaliamos a sua plataforma e tratamos da integração durante o projeto.",
  ],
  [
    "Posso rever o modelo antes de publicar?",
    "Sim. A aprovação faz parte do processo: revê a forma, os materiais e os detalhes antes de a experiência ficar disponível para os seus clientes.",
  ],
  [
    "Como avaliamos o impacto?",
    "Podemos definir um piloto com uma seleção de produtos e comparar a interação e a conversão ao longo do tempo. Os resultados dependem do catálogo, do tráfego e da implementação.",
  ],
  [
    "É preciso instalar uma aplicação?",
    "O visualizador 3D funciona diretamente no navegador. A Realidade Aumentada está disponível em dispositivos iPhone e Android compatíveis; a disponibilidade depende do sistema e do navegador.",
  ],
];

export function HomeExperience() {
  const [model, setModel] = useState<ModelKind | null>(null);

  useEffect(() => {
    const incoming = new URLSearchParams(window.location.search).get("modelo");
    if (
      incoming === "atelier" ||
      incoming === "lounge" ||
      incoming === "mesa" ||
      incoming === "cadeira"
    )
      setModel(incoming as ModelKind);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function closeModel() {
    setModel(null);
    const url = new URL(window.location.href);
    if (url.searchParams.has("modelo")) {
      url.searchParams.delete("modelo");
      window.history.replaceState(null, "", url.toString());
    }
  }

  return (
    <>
      <Hero />
      <section
        id="introducao"
        className="benefits-section section-block"
        aria-labelledby="benefits-title"
      >
        <div className="page-container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">PORQUÊ 3D E AR</p>
            <h2 id="benefits-title">
              Mais detalhe para quem escolhe.
              <br />
              Mais possibilidades para a sua marca.
            </h2>
            <p>
              Uma imagem deixa perguntas por responder. O 3D aproxima os
              materiais, revela a forma e leva cada peça ao espaço do cliente.
            </p>
          </div>
          <div className="benefit-grid" data-reveal>
            {[
              [
                "360°",
                "Uma peça, todos os ângulos",
                "Explore a forma e os materiais em 3D.",
              ],
              [
                "1:1",
                "Uma ideia real da escala",
                "Experimente a peça no seu espaço com AR.",
              ],
              [
                "0 apps",
                "Do primeiro clique à experiência",
                "Diretamente no navegador, em dispositivos compatíveis.",
              ],
            ].map(([value, title, description]) => (
              <article className="benefit-card" key={value}>
                <p className="benefit-value">{value}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          
          {/* Novas Caixas de Conversão e Devoluções */}
          <div className="grid gap-6 sm:grid-cols-2 mt-12" data-reveal>
            
            {/* Caixa: Mais Conversões */}
            <article 
              className="benefit-card" 
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "3rem 2rem"
              }}
            >
              <div 
                style={{ 
                  backgroundColor: "rgba(74, 222, 128, 0.1)", 
                  padding: "1rem", 
                  borderRadius: "50%", 
                  marginBottom: "1.5rem",
                  color: "#4ade80"
                }}
              >
                <TrendingUp size={36} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Mais Conversões</h3>
              <p style={{ color: "#a1a1aa", lineHeight: "1.6" }}>
                Os clientes compram com mais confiança quando podem interagir, 
                rodar e experimentar o produto no seu próprio espaço em tamanho real.
              </p>
            </article>

            {/* Caixa: Menos Devoluções */}
            <article 
              className="benefit-card" 
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "3rem 2rem"
              }}
            >
              <div 
                style={{ 
                  backgroundColor: "rgba(248, 113, 113, 0.1)", 
                  padding: "1rem", 
                  borderRadius: "50%", 
                  marginBottom: "1.5rem",
                  color: "#f87171"
                }}
              >
                <TrendingDown size={36} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Menos Devoluções</h3>
              <p style={{ color: "#a1a1aa", lineHeight: "1.6" }}>
                A Realidade Aumentada alinha as expectativas com a realidade. 
                O que o cliente vê em 3D, é exatamente o que recebe em casa.
              </p>
            </article>

          </div>

        </div>
      </section>
      
      <section
        id="como-funciona"
        className="process-section section-block"
        aria-labelledby="process-title"
      >
        <div className="page-container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">COMO FUNCIONA</p>
            <h2 id="process-title">O seu produto. A nossa próxima criação.</h2>
          </div>
          <div className="process-grid">
            {steps.map((step, i) => (
              <article className="process-card" key={step.title} data-reveal>
                <span className="step-number">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <a href="/contacto" className="button button-secondary">
              Planear o meu projeto <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      <RoiCalculator />
      
      <section
        id="modelos"
        className="comparison-section section-block"
        aria-labelledby="comparison-title"
      >
        <div className="page-container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">DA IMAGEM À EXPERIÊNCIA</p>
            <h2 id="comparison-title">
              A mesma peça. Uma nova forma de a descobrir.
            </h2>
            <p>
              Veja a diferença entre uma imagem fixa e um produto que pode
              explorar. Clique no modelo para começar.
            </p>
          </div>
          <div className="comparison-grid" data-reveal>
            <figure>
              <div className="comparison-visual photo-visual">
                <span className="visual-label">
                  <Camera size={14} /> Imagem estática
                </span>
                <img
                  src="/images/atelier-chair-poster.webp"
                  width={1000}
                  height={1000}
                  alt="Vista fixa de uma poltrona em couro castanho e madeira"
                  loading="lazy"
                />
              </div>
              <figcaption>Uma imagem. Um único ângulo.</figcaption>
            </figure>
            <figure>
              <div className="comparison-visual live-visual">
                <span className="visual-label">
                  <Expand size={14} /> Com a Reality Concept
                </span>
                <InteractiveProduct id="comparison-model" />
                <button
                  className="comparison-expand"
                  aria-label="Abrir modelo 3D em ecrã completo"
                  onClick={() => setModel("cadeiracouro")}
                >
                  <Expand size={17} />
                </button>
                <button
                  className="comparison-ar"
                  onClick={() => setModel("cadeiracouro")}
                >
                  <QrCode size={16} /> Ver no meu espaço
                </button>
              </div>
              <figcaption>
                Rode, descubra os detalhes e experimente com AR.
              </figcaption>
            </figure>
          </div>
          <div className="section-action">
            <button
              className="button button-secondary"
              onClick={() => setModel("cadeiracouro")}
            >
              Abrir a experiência completa <ArrowRight size={16} />
            </button>
          </div>
          <p className="model-credit">
            Modelo de demonstração · <a href="/creditos">Créditos e licença</a>
          </p>
        </div>
      </section>
      
      <section
        id="faq"
        className="faq-section section-block"
        aria-labelledby="faq-title"
      >
        <div className="page-container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Tudo o que precisa de saber.</h2>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ArrowDown size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      <section
        id="contacto"
        className="final-cta section-block"
        aria-labelledby="cta-title"
      >
        <div className="page-container" data-reveal>
          <p className="eyebrow">DÊ UMA NOVA DIMENSÃO À SUA MARCA</p>
          <h2 id="cta-title">
            O próximo produto que ganha vida
            <br />
            pode ser o seu.
          </h2>
          <p>
            Uma primeira conversa para conhecer o catálogo, explorar a
            tecnologia e definir o próximo passo.
          </p>
          <div className="button-row">
            <a href="/contacto" className="button button-primary">
              Marcar uma demo
            </a>
            <a href="#modelos" className="button button-dark-outline">
              Experimentar um modelo ao vivo
            </a>
          </div>
        </div>
      </section>
      
      {model && <ExperienceDialog kind={model} onClose={closeModel} />}
    </>
  );
}