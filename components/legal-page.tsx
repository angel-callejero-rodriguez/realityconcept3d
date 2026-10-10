import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export type LegalSection = { title: string; paragraphs: string[] }

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar ao início
        </Link>
        <h1 className="mt-8 font-semibold text-5xl tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {updated}</p>
        <p className="mt-10 leading-relaxed text-muted-foreground">{intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2 className="text-lg font-medium tracking-tight">
                {i + 1}. {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card/50 p-6 text-sm leading-relaxed text-muted-foreground">
          Questões sobre este documento? Contacte-nos através de{' '}
          <a
            href="mailto:rodriguez@realityconcept3d.com"
            className="text-foreground underline underline-offset-4"
          >
            rodriguez@realityconcept3d.com
          </a>
          .
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
