import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Créditos" };
export default function CreditsPage() {
  return (
    <LegalPage
      title="Créditos"
      updated="17 de outubro de 2026"
      intro="Os modelos apresentados neste site são demonstrações da tecnologia. Não representam projetos de clientes ou trabalhos de modelação realizados pela Reality Concept 3D."
      sections={[
        {
          title: "Poltrona em couro — Mid Century Lounge Chair",
          paragraphs: [
            "Modelo de Kuutti Siitonen, disponibilizado pela Poly Haven sob Creative Commons Zero 1.0 (CC0). Texturas 2K otimizadas e intensidade de reflexos e normais ajustada para apresentação em estúdio.",
          ],
          links: [
            {
              label: "Modelo e autoria",
              href: "https://polyhaven.com/a/mid_century_lounge_chair",
            },
            { label: "Licença CC0", href: "https://polyhaven.com/license" },
          ],
        },
        {
          title: "Mesa em pedra e metal — Coffee Table Round 01",
          paragraphs: [
            "Modelo de Ulan Cabanilla, disponibilizado pela Poly Haven sob Creative Commons Zero 1.0 (CC0). Texturas 2K otimizadas para utilização na web.",
          ],
          links: [
            {
              label: "Modelo e autoria",
              href: "https://polyhaven.com/a/coffee_table_round_01",
            },
            { label: "Licença CC0", href: "https://polyhaven.com/license" },
          ],
        },
        {
          title: "Poltrona — Sheen Chair",
          paragraphs: [
            "Modelo de Eric Chadwick, Wayfair, LLC (2020). Disponibilizado sob Creative Commons Zero 1.0 (CC0), através da biblioteca Khronos glTF Sample Assets. Inclui os acabamentos Mango Velvet e Peacock Velvet, com cores ajustadas para esta demonstração.",
            "Origem: Khronos glTF Sample Assets.",
          ],
          links: [
            {
              label: "Modelo e autoria",
              href: "https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/SheenChair",
            },
            {
              label: "Licença CC0",
              href: "https://creativecommons.org/publicdomain/zero/1.0/",
            },
          ],
        },
        {
          title: "Cadeira de escritório — Office Chair Modern",
          paragraphs: [
            "Modelo de thethieme, disponibilizado sob Creative Commons Attribution 4.0 (CC BY 4.0). O ficheiro foi preservado a partir da biblioteca de demonstração original do site.",
            "O modelo mantém a geometria e os materiais originais.",
          ],
          links: [
            {
              label: "Modelo de thethieme no Sketchfab",
              href: "https://sketchfab.com/3d-models/office-chair-modern-675f34f7304e4d92812a41e9750539aa",
            },
            {
              label: "Licença CC BY 4.0",
              href: "https://creativecommons.org/licenses/by/4.0/",
            },
          ],
        },
        {
          title: "Mesa circular — arquivo",
          paragraphs: [
            "Modelo preservado da biblioteca de demonstração original da Reality Concept 3D. Apresentado exclusivamente como exemplo de visualização interativa.",
          ],
        },
        {
          title: "Direção visual",
          paragraphs: [
            "A pré-visualização de loja é ilustrativa. A apresentação de estúdio utiliza os mesmos modelos 3D das experiências interativas. A experiência de AR ao vivo utiliza a câmara e o espaço real do visitante, em dispositivos compatíveis.",
          ],
        },
      ]}
    />
  );
}
