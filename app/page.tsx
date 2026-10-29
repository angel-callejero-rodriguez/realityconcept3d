import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { HomeExperience } from "@/components/home-experience";
import { SiteFooter } from "@/components/site-footer";

// Diz ao Google qual é o endereço principal da página inicial (com www).
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <HomeExperience />
      </main>
      <SiteFooter />
    </>
  );
}
