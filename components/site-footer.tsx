import Link from 'next/link'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Empresa',
    links: [
      { href: '/#vantagens', label: 'Vantagens' },
      { href: '/#como-funciona', label: 'Como funciona' },
      { href: '/#faq', label: 'Perguntas frequentes' },
      { href: '/#contacto', label: 'Agendar demonstração' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/termos', label: 'Termos de Serviço' },
      { href: '/privacidade', label: 'Política de Privacidade' },
      { href: '/cookies', label: 'Política de Cookies' },
      { href: 'https://www.livroreclamacoes.pt', label: 'Livro de Reclamações', external: true },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Realidade Aumentada nativa para marcas de mobiliário e decoração de luxo.
            </p>
            <a
              href="mailto:rodriguez@realityconcept3d.com"
              className="w-fit text-sm text-foreground underline-offset-4 hover:underline"
            >
              rodriguez@realityconcept3d.com
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-medium">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Reality Concept 3D. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/termos" className="hover:text-foreground">
              Termos
            </Link>
            <Link href="/privacidade" className="hover:text-foreground">
              Privacidade
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
