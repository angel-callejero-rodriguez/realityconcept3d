const stats = [
  { value: 'Até 2×', label: 'mais conversões nas páginas de produto com AR' },
  { value: '−40%', label: 'menos devoluções por tamanho ou estilo errado' },
  { value: '100%', label: 'compatível com iPhone e Android, direto no navegador' },
  { value: '1 toque', label: 'para ver o móvel em casa, sem apps' },
]

export function Stats() {
  return (
    <section aria-label="Resultados" className="border-y border-border bg-card/30">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col gap-2 px-6 py-10">
            <dt className="order-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-serif text-4xl tracking-tight md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
