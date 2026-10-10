import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const trustPoints = ['Sem instalar aplicações', 'iOS e Android', 'Shopify, WooCommerce e mais']

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,oklch(0.98_0.012_80/0.6),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 text-center md:pt-28">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-foreground" aria-hidden="true" />
          Realidade Aumentada para mobiliário
        </p>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          <em className="text-muted-foreground">Eleve</em> a experiência de compra dos seus
          clientes.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
          Ajudamos marcas de mobiliário a aumentar conversões e reduzir devoluções através de
          Realidade Aumentada nativa.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#contacto"
            className="group inline-flex h-13 items-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_12px_32px_-10px_oklch(0.27_0.025_55/0.55)] transition-all hover:bg-primary/90"
          >
            Agendar Demonstração
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-13 items-center rounded-full border border-border px-8 text-base text-foreground transition-colors hover:bg-muted"
          >
            Ver demonstração
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-1.5">
              <Check className="size-3.5 text-foreground" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
