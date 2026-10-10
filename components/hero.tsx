import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const trustPoints = ['Sem instalar aplicações', 'iOS e Android', 'Shopify, WooCommerce e mais']

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center md:pt-32">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          Realidade Aumentada para mobiliário
        </p>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl leading-[1.05] font-bold tracking-tighter md:text-7xl">
          Eleve a experiência de compra dos seus clientes.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Ajudamos marcas de mobiliário a aumentar conversões e reduzir devoluções através de
          Realidade Aumentada nativa.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#contacto"
            className="group inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_oklch(0.7_0.2_258/0.5),0_8px_30px_-6px_oklch(0.6_0.22_258/0.6)] transition-all hover:brightness-110"
          >
            Agendar Demonstração
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-12 items-center rounded-lg border border-border bg-card px-7 text-base font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ver demonstração
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-1.5">
              <Check className="size-3.5 text-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
