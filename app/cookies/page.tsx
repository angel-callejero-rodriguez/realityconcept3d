import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Informação sobre a utilização de cookies no website da Reality Concept 3D.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      updated="10 de outubro de 2026"
      intro="Esta política explica o que são cookies, quais utilizamos e como pode gerir as suas preferências."
      sections={[
        {
          title: "O que são cookies",
          paragraphs: [
            "Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um website. Permitem que o site funcione corretamente e lembre as suas preferências.",
          ],
        },
        {
          title: "Cookies essenciais",
          paragraphs: [
            "Necessários ao funcionamento do site, como guardar a sua escolha de consentimento de cookies. Não requerem consentimento e não podem ser desativados.",
          ],
        },
        {
          title: "Cookies de análise",
          paragraphs: [
            "Utilizados apenas com o seu consentimento, para compreender de forma agregada e anónima como os visitantes utilizam o site e melhorar a experiência.",
          ],
        },
        {
          title: "Gerir preferências",
          paragraphs: [
            "Pode alterar a sua escolha a qualquer momento através de “Preferências de cookies”, no rodapé do site. Pode também apagar os dados de navegação deste site no seu navegador.",
          ],
        },
      ]}
    />
  );
}
