import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Marcar uma demonstração",
  description:
    "Conte-nos sobre o seu catálogo e descubra o que o 3D e a Realidade Aumentada podem trazer à sua marca.",
};
export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="contact-page">
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
