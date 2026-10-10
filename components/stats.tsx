const stats = [
  { value: 'Mais conversões', label: 'nas páginas de produto com Realidade Aumentada' },
  { value: 'Menos devoluções', label: 'por tamanho ou estilo errado' },
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
            <dd className="order-1 text-balance font-serif text-3xl leading-tight tracking-tight md:text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
