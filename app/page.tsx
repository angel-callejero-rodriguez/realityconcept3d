import { SiteHeader } from "@/components/site-header";
import { HomeExperience } from "@/components/home-experience";
import { SiteFooter } from "@/components/site-footer";

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
