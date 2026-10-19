import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  links?: { label: string; href: string }[];
};
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="legal-main">
        <a href="/" className="text-link">
          <ArrowLeft size={15} />
          Voltar ao início
        </a>
        <h1>{title}</h1>
        <p className="legal-updated">Última atualização: {updated}</p>
        <p className="legal-intro">{intro}</p>
        <div className="legal-sections">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2>
                {i + 1}. {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {section.links && (
                <div className="legal-source-links">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="legal-contact">
          Questões sobre este documento? Contacte-nos através de{" "}
          <a href="mailto:rodriguez@realityconcept3d.com">
            rodriguez@realityconcept3d.com
          </a>
          .
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
