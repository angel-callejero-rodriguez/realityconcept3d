const steps = [
  {
    number: '01',
    title: 'Envia-nos o catálogo',
    description:
      'Fotografias, medidas e acabamentos dos seus produtos. Não precisa de ficheiros 3D — nós criamos tudo.',
  },
  {
    number: '02',
    title: 'Modelamos em 3D fotorrealista',
    description:
      'Cada peça é recriada com texturas, materiais e dimensões exatas, e validada por si antes de ficar online.',
  },
  {
    number: '03',
    title: 'Ativamos na sua loja',
    description:
      'Adicionamos o botão de AR às páginas de produto. Os seus clientes apontam o telemóvel e colocam o móvel em casa.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">Como funciona</p>
          <h2
            id="como-funciona-title"
            className="mt-3 text-balance font-semibold text-4xl leading-tight tracking-tight md:text-5xl"
          >
            Do catálogo à Realidade Aumentada, sem esforço da sua equipa.
          </h2>

          <ol className="mt-12 flex flex-col">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-6 border-t border-border py-8 last:pb-0">
                <span className="font-mono text-sm text-muted-foreground">{step.number}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <img
            src="/images/ar-showcase.png"
            alt="Mão a segurar um telemóvel que mostra um sofá em Realidade Aumentada num espaço da sala que, na vida real, está vazio"
            className="aspect-[4/5] size-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
