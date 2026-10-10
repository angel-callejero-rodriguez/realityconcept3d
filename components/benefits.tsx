import { Feather, ShieldCheck, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Integração rápida',
    description:
      'Nós tratamos da modelação 3D dos seus produtos e entregamos um botão "Ver em sua casa" pronto a usar. Funciona com Shopify, WooCommerce, Magento ou qualquer site — sem equipa técnica do seu lado.',
  },
  {
    icon: ShieldCheck,
    title: 'Aumenta a confiança na compra',
    description:
      'O cliente vê o sofá, a mesa ou o candeeiro à escala real no seu próprio espaço. Menos dúvidas sobre medidas, cores e acabamentos significa mais encomendas e clientes mais satisfeitos.',
  },
  {
    icon: Feather,
    title: 'Zero peso no site da sua loja',
    description:
      'Os modelos 3D são servidos a partir da nossa infraestrutura e carregados apenas quando o cliente os pede. A velocidade da sua loja e o seu SEO ficam exatamente como estão.',
  },
]

export function Benefits() {
  return (
    <section id="vantagens" aria-labelledby="vantagens-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">Vantagens</p>
          <h2
            id="vantagens-title"
            className="mt-3 text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl"
          >
            Uma experiência de showroom, diretamente na casa do seu cliente.
          </h2>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="flex flex-col rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:bg-card"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background">
                <benefit.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-xl font-medium tracking-tight">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
