import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { HomeExperience } from "@/components/home-experience";
import { SiteFooter } from "@/components/site-footer";
import { faqs } from "@/lib/faqs";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/site";

// Diz ao Google qual é o endereço principal da página inicial (com www).
export const metadata: Metadata = pageMetadata({
  path: "/",
  description:
    "Modelação 3D e Realidade Aumentada para marcas de mobiliário e interiores. Os seus produtos, no espaço de quem os vai escolher.",
});

// Dados estruturados (schema.org) para o Google e para os motores de pesquisa com IA.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-icon.png`,
      email: CONTACT_EMAIL,
      slogan: "Do ecrã. Para a vida.",
      address: { "@type": "PostalAddress", addressLocality: "Porto", addressCountry: "PT" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-PT",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      name: "Modelação 3D e Realidade Aumentada para mobiliário",
      serviceType: "Modelação 3D e Realidade Aumentada",
      description:
        "Criamos modelos 3D de mobiliário a partir de fotografias e medidas e integramo-los na página do produto, com visualização 3D e Realidade Aumentada diretamente no navegador.",
      provider: { "@id": `${SITE_URL}/#organization` },
      audience: { "@type": "BusinessAudience", name: "Marcas e lojas de mobiliário e interiores" },
      areaServed: "PT",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="conteudo">
        <HomeExperience />
      </main>
      <SiteFooter />
    </>
  );
}
