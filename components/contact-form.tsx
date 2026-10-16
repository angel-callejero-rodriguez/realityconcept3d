'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const inputClass =
  'h-11 w-full rounded-lg border border-input bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/20 aria-invalid:border-destructive'

function Field({
  id,
  label,
  optional,
  children,
}: {
  id: string
  label: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-foreground">
        {label}
        {optional && <span className="text-muted-foreground"> (opcional)</span>}
      </label>
      {children}
    </div>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('pending')

    const formData = new FormData(event.currentTarget)
    
    // Adicionar a chave diretamente no formulário visual
    formData.append("access_key", "1db4675d-8922-474e-ba38-f2c1c5ce8e49")
    // Assunto do email
    formData.append("subject", `Novo Pedido de Demo: ${formData.get("company")}`)
    // De onde vem
    formData.append("from_name", "Site Reality Concept 3D")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Ocorreu um erro ao enviar.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Falha na ligação. Tente novamente.')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
      >
        <CheckCircle2 className="size-10 text-green-500" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="font-semibold text-3xl tracking-tight">Pedido recebido!</h3>
        <p className="max-w-sm leading-relaxed text-muted-foreground">
          Obrigado pelo seu contacto. Entraremos em contacto consigo em menos de 24 horas úteis.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      
      {/* Campo Honeypot para evitar Spam de Bots */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nome">
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="O seu nome"
            className={inputClass}
          />
        </Field>
        <Field id="company" label="Loja / Marca">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            placeholder="Nome da empresa"
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="email" label="Email profissional">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="nome@empresa.com"
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="store" label="Website da loja" optional>
          <input
            id="store"
            name="store"
            type="url"
            autoComplete="url"
            placeholder="https://"
            className={inputClass}
          />
        </Field>
        <Field id="catalog" label="Nº de produtos">
          <select id="catalog" name="catalog" required defaultValue="" className={cn(inputClass, 'appearance-none')}>
            <option value="" disabled>Selecione</option>
            <option value="1-50">1 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="201-1000">201 – 1000</option>
            <option value="1000+">Mais de 1000</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="Mensagem" optional>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Conte-nos um pouco sobre a sua loja e os seus objetivos."
          className={cn(inputClass, 'h-auto resize-none py-3')}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-4 shrink-0 accent-white"
          />
          <span>
            Li e aceito a{' '}
            <Link href="/privacidade" className="text-foreground underline underline-offset-4">
              Política de Privacidade
            </Link>{' '}
            e os{' '}
            <Link href="/termos" className="text-foreground underline underline-offset-4">
              Termos de Serviço
            </Link>
            .
          </span>
        </label>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-destructive font-semibold">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'pending'}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {status === 'pending' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />A enviar…
          </>
        ) : (
          <>
            Agendar Demonstração
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
