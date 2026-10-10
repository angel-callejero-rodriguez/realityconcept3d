import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Os meus clientes precisam de instalar alguma aplicação?',
    a: 'Não. A experiência de AR abre diretamente no navegador do telemóvel (Safari no iPhone e Chrome no Android), com um único toque no botão da página de produto.',
  },
  {
    q: 'Com que plataformas de e-commerce funciona?',
    a: 'Shopify, WooCommerce, Magento, PrestaShop, Wix e sites desenvolvidos à medida. Se a sua loja aceita um pequeno bloco de HTML, é compatível.',
  },
  {
    q: 'Preciso de ter modelos 3D dos meus produtos?',
    a: 'Não é necessário. A nossa equipa cria os modelos 3D a partir de fotografias, fichas técnicas e amostras de materiais. Se já tiver ficheiros 3D, também os podemos otimizar.',
  },
  {
    q: 'A tecnologia torna o meu site mais lento?',
    a: 'Não. Os modelos são alojados na nossa infraestrutura e só são carregados quando o cliente ativa a experiência de AR. O tempo de carregamento da sua página mantém-se inalterado.',
  },
  {
    q: 'Quanto tempo demora a implementação?',
    a: 'Depende do número de produtos e da complexidade dos materiais. Na demonstração apresentamos um plano e calendário concretos para o seu catálogo.',
  },
  {
    q: 'Como funciona o preço?',
    a: 'Trabalhamos com propostas à medida, de acordo com a dimensão do catálogo e o nível de detalhe pretendido. Agende uma demonstração para receber uma proposta sem compromisso.',
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-sm text-muted-foreground">Perguntas frequentes</p>
          <h2
            id="faq-title"
            className="mt-3 text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl"
          >
            Tudo o que precisa de saber.
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-border first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
