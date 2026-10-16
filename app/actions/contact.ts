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

  // Envio real do email através do Web3Forms
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      cache: 'no-store', // 1. ISTO RESOLVE O PROBLEMA DE CACHE DO NEXT.JS
      body: JSON.stringify({
        access_key: '457992ff-aa59-4127-adbc-0e447992e5d3', 
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

    const data = await response.json();

    // 2. ISTO AVISA SE O WEB3FORMS BLOQUEAR
    if (!data.success) {
      return { status: 'error', message: `Erro no servidor: ${data.message}` };
    }

  } catch (error) {
    return { status: 'error', message: 'Falha na ligação à internet.' };
  }

  return {
    status: 'success',
    message: `Obrigado, ${name.split(' ')[0]}! Recebemos o seu pedido e responderemos em até 24 horas úteis.`,
  }
}
