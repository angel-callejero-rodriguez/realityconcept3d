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
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '457992ff-aa59-4127-adbc-0e447992e5d3', // A tua chave inserida aqui
        subject: `Novo Pedido de Demo - ${company}`,
        from_name: 'Site Reality Concept 3D',
        replyto: email,
        name: name,
        email: email,
        message: `
Recebeste um novo pedido de demonstração através do site!

DADOS DO CLIENTE:
Nome: ${name}
Empresa/Loja: ${company}
Email: ${email}

DETALHES DA LOJA:
Website: ${String(formData.get('store') ?? 'Não preenchido')}
Nº de Produtos: ${String(formData.get('catalog') ?? 'Não selecionado')}

MENSAGEM:
${message || 'Sem mensagem adicional.'}
        `,
      }),
    });
  } catch (error) {
    return { status: 'error', message: 'Ocorreu um erro ao enviar. Tente novamente.' }
  }

  return {
    status: 'success',
    message: `Obrigado, ${name.split(' ')[0]}! Recebemos o seu pedido e responderemos em até 24 horas úteis.`,
  }
}
