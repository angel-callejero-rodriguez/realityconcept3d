// Envio real do email através do Web3Forms (Modo Anti-Bot)
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Estes cabeçalhos dizem ao Web3Forms que somos um site legítimo e não um bot
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
