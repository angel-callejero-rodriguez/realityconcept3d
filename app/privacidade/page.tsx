import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a Reality Concept 3D recolhe, utiliza e protege os seus dados pessoais.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updated="10 de outubro de 2026"
      intro="A Reality Concept 3D respeita a sua privacidade e trata os seus dados pessoais em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento (UE) 2016/679) e a legislação portuguesa aplicável."
      sections={[
        {
          title: 'Dados que recolhemos',
          paragraphs: [
            'Através do formulário de contacto recolhemos: nome, nome da empresa, email profissional, website da loja, dimensão do catálogo e a mensagem que nos enviar.',
            'Recolhemos ainda dados técnicos anónimos de navegação, apenas com o seu consentimento, conforme descrito na Política de Cookies.',
          ],
        },
        {
          title: 'Finalidades e fundamento',
          paragraphs: [
            'Utilizamos os seus dados para responder ao seu pedido, agendar demonstrações e enviar propostas comerciais. O fundamento é o seu consentimento e as diligências pré-contratuais a seu pedido.',
          ],
        },
        {
          title: 'Conservação',
          paragraphs: [
            'Os dados são conservados apenas pelo período necessário às finalidades indicadas ou até que retire o seu consentimento, salvo obrigação legal de conservação.',
          ],
        },
        {
          title: 'Partilha de dados',
          paragraphs: [
            'Não vendemos os seus dados. Podemos partilhá-los apenas com prestadores de serviços (por exemplo, alojamento e email) que atuam em nosso nome e estão sujeitos a obrigações de confidencialidade e segurança.',
          ],
        },
        {
          title: 'Os seus direitos',
          paragraphs: [
            'Pode, a qualquer momento, exercer os direitos de acesso, retificação, apagamento, limitação, portabilidade e oposição, bem como retirar o seu consentimento, enviando um email para rodriguez@realityconcept3d.com.',
            'Tem ainda o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).',
          ],
        },
        {
          title: 'Segurança',
          paragraphs: [
            'Aplicamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acesso, alteração ou divulgação não autorizados, incluindo comunicações cifradas (HTTPS).',
          ],
        },
      ]}
    />
  )
}
