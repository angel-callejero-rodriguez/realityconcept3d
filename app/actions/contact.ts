'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'company' | 'email' | 'message' | 'consent', string>>
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (formData.get('website_url')) {
    return { status: 'success', message: 'Obrigado! Entraremos em contacto em breve.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const consent = formData.get('consent') === 'on'

  const errors: ContactState['errors'] = {}
  if (name.length < 2 || name.length > 100) errors.name = 'Indique o seu nome.'
  if (company.length < 2 || company.length > 120) errors.company = 'Indique o nome da sua loja ou marca.'
  if (!EMAIL_REGEX.test(email) || email.length > 200) errors.email = 'Indique um email válido.'
  if (message.length > 2000) errors.message = 'A mensagem é demasiado longa.'
  if (!consent) errors.consent = 'É necessário aceitar a Política de Privacidade.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Verifique os campos assinalados.', errors }
  }

  // Envio real do email através do Web3Forms com segurança Anti-Bot
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Origin': 'https://realityconcept3d.com',
        'Referer': 'https://realityconcept3d.com/'
      },
      body: JSON.stringify({
        access_key: '1db4675d-8922-474e-ba38-f2c1c5ce8e49', 
        subject: `Novo Pedido de Demo - ${company}`,
        from_name: 'Site Reality Concept 3D',
        name: name,
        email: email, 
        message: `
Pedido recebido do site!

NOME: ${name}
EMPRESA: ${company}
EMAIL DE CONTACTO: ${email}
SITE DA LOJA: ${String(formData.get('store') ?? 'Não preenchido')}
Nº PRODUTOS: ${String(formData.get('catalog') ?? 'Não selecionado')}

MENSAGEM:
${message || 'Sem mensagem adicional.'}
        `,
      }),
    });

    if (!response.ok) {
      return { status: 'error', message: `O Web3Forms falhou (HTTP ${response.status}).` };
    }

    const data = await response.json();

    if (!data.success) {
      return { status: 'error', message: `O Web3Forms recusou: ${data.message}` };
    }

  } catch (error: any) {
    return { status: 'error', message: `Erro Vercel: ${error.message}` };
  }

  return {
    status: 'success',
    message: `Obrigado, ${name.split(' ')[0]}! Recebemos o seu pedido e responderemos em até 24 horas úteis.`,
  }
}
