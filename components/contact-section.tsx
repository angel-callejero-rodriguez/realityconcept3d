import { Clock, Mail, MonitorPlay } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

const details = [
  {
    icon: MonitorPlay,
    title: 'Demonstração de 30 minutos',
    text: 'Mostramos a AR com produtos reais e analisamos o potencial para o seu catálogo.',
  },
  {
    icon: Clock,
    title: 'Resposta em 24 horas úteis',
    text: 'Um especialista entra em contacto para marcar o dia e hora que lhe for mais conveniente.',
  },
  {
    icon: Mail,
    title: 'Prefere email?',
    text: 'rodriguez@realityconcept3d.com',
    href: 'mailto:rodriguez@realityconcept3d.com',
  },
]

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm text-muted-foreground">Contacto</p>
          <h2
            id="contacto-title"
            className="mt-3 text-balance font-semibold text-4xl leading-tight tracking-tight md:text-5xl"
          >
            Veja os seus próprios produtos em Realidade Aumentada.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Agende uma demonstração gratuita e sem compromisso. Preparamos uma peça do seu catálogo
            para que veja o resultado antes de decidir.
          </p>

          <ul className="mt-12 flex flex-col gap-8">
            {details.map((d) => (
              <li key={d.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                  <d.icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{d.title}</h3>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block break-all text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {d.text}
                    </a>
                  ) : (
                    <p className="mt-1 leading-relaxed text-muted-foreground">{d.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card/60 p-6 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
