import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { findDemo } from "@/lib/demos";
import { RC3D_ORIGIN } from "@/lib/rc3d";

// Demo privada: nunca indexada, nunca em menus. O token chega por email à loja.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Demonstração privada",
  robots: { index: false, follow: false },
};

export default async function DemoPage(props: PageProps<"/demo/[token]">) {
  const { token } = await props.params;
  const demo = findDemo(token);
  if (!demo) notFound();

  return (
    <main
      id="conteudo"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 16px 64px" }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "#B0543D",
          margin: "0 0 8px",
        }}
      >
        DEMONSTRAÇÃO PRIVADA PARA {demo.store.toUpperCase()}
      </p>
      <h1 style={{ margin: "0 0 8px", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
        {demo.product} em 3D e na sua sala
      </h1>
      <p style={{ margin: "0 0 32px", color: "#555", maxWidth: 640 }}>
        Rode a peça com o dedo ou o rato. No telemóvel, toque no ícone de AR
        para a ver no tamanho real, no seu espaço. Esta página é privada e foi
        feita só para a {demo.store}.
      </p>

      {/* O mesmo código que a loja colaria no seu site: */}
      <div
        data-rc3d-embed={demo.model}
        aria-label={`Visualizador 3D — ${demo.product}`}
        style={{ height: "min(70vh, 620px)" }}
      />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
        <button type="button" className="rc3d-btn button" data-model={demo.model}>
          Ver em ecrã inteiro
        </button>
      </div>

      <section style={{ marginTop: 48, maxWidth: 640 }}>
        <h2 style={{ fontSize: "1.2rem", margin: "0 0 8px" }}>
          Como ficaria no vosso site
        </h2>
        <p style={{ margin: "0 0 12px", color: "#555" }}>
          Uma linha de código na página do produto. Funciona em WooCommerce,
          Squarespace ou qualquer site que aceite HTML.
        </p>
        <pre
          style={{
            background: "#f2f0ea",
            padding: 16,
            borderRadius: 8,
            overflowX: "auto",
            fontSize: 13,
          }}
        >
          {`<script src="${RC3D_ORIGIN}/widget.js" defer></script>\n<button class="rc3d-btn" data-model="${demo.model}">Ver em 3D</button>`}
        </pre>
      </section>

      <Script src={`${RC3D_ORIGIN}/widget.js`} strategy="afterInteractive" />
    </main>
  );
}
