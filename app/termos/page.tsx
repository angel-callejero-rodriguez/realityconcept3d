import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description: 'Termos e condições de utilização dos serviços Reality Concept 3D.',
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Serviço"
      updated="10 de outubro de 2026"
      intro="Os presentes Termos de Serviço regulam a utilização do website e a contratação dos serviços de modelação 3D e Realidade Aumentada prestados pela Reality Concept 3D. Ao utilizar o nosso website ou contratar os nossos serviços, aceita estes termos."
      sections={[
        {
          title: 'Serviços',
          paragraphs: [
            'A Reality Concept 3D presta serviços B2B de criação de modelos 3D de produtos de mobiliário e decoração, alojamento desses modelos e disponibilização de experiências de Realidade Aumentada integráveis em lojas online.',
            'O âmbito, prazos e preço de cada projeto são definidos numa proposta comercial escrita, que prevalece sobre estes termos em caso de conflito.',
          ],
        },
        {
          title: 'Obrigações do cliente',
          paragraphs: [
            'O cliente compromete-se a fornecer informação correta e completa sobre os produtos (fotografias, medidas, materiais e acabamentos) e garante que detém os direitos necessários sobre esses conteúdos.',
          ],
        },
        {
          title: 'Propriedade intelectual',
          paragraphs: [
            'Os direitos sobre as marcas, designs e produtos do cliente permanecem integralmente do cliente. A tecnologia, software e ferramentas de visualização da Reality Concept 3D permanecem propriedade da Reality Concept 3D.',
            'As condições de licença e utilização dos modelos 3D produzidos são definidas na proposta comercial de cada projeto.',
          ],
        },
        {
          title: 'Pagamentos',
          paragraphs: [
            'Os valores, modalidades e prazos de pagamento são indicados na proposta comercial. Os preços apresentados não incluem IVA, salvo indicação em contrário.',
          ],
        },
        {
          title: 'Disponibilidade e responsabilidade',
          paragraphs: [
            'Envidamos todos os esforços razoáveis para garantir a disponibilidade contínua do serviço, sem prejuízo de interrupções para manutenção ou motivos alheios ao nosso controlo.',
            'A Reality Concept 3D não é responsável por danos indiretos, lucros cessantes ou perda de dados decorrentes da utilização do serviço, nos limites permitidos pela lei aplicável.',
          ],
        },
        {
          title: 'Confidencialidade',
          paragraphs: [
            'Ambas as partes comprometem-se a manter confidencial toda a informação comercial e técnica não pública partilhada no âmbito da relação contratual.',
          ],
        },
        {
          title: 'Alterações',
          paragraphs: [
            'Podemos atualizar estes termos periodicamente. A versão em vigor está sempre disponível nesta página, com a respetiva data de atualização.',
          ],
        },
        {
          title: 'Lei aplicável e resolução de litígios',
          paragraphs: [
            'Estes termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio, as partes procurarão primeiro uma solução amigável, sendo competentes os tribunais portugueses.',
          ],
        },
      ]}
    />
  )
}
