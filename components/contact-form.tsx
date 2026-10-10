'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const inputClass =
  'h-11 w-full rounded-lg border border-input bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/20 aria-invalid:border-destructive'

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
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
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
      >
        <CheckCircle2 className="size-10" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="font-semibold text-3xl tracking-tight">Pedido recebido</h3>
        <p className="max-w-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const e = state.errors ?? {}

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nome" error={e.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="O seu nome"
            className={inputClass}
            aria-invalid={!!e.name}
            aria-describedby={e.name ? 'name-error' : undefined}
          />
        </Field>
        <Field id="company" label="Loja / Marca" error={e.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            placeholder="Nome da empresa"
            className={inputClass}
            aria-invalid={!!e.company}
            aria-describedby={e.company ? 'company-error' : undefined}
          />
        </Field>
      </div>

      <Field id="email" label="Email profissional" error={e.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="nome@empresa.com"
          className={inputClass}
          aria-invalid={!!e.email}
          aria-describedby={e.email ? 'email-error' : undefined}
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
          <select id="catalog" name="catalog" defaultValue="" className={cn(inputClass, 'appearance-none')}>
            <option value="" disabled>
              Selecione
            </option>
            <option value="1-50">1 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="201-1000">201 – 1000</option>
            <option value="1000+">Mais de 1000</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="Mensagem" optional error={e.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Conte-nos um pouco sobre a sua loja e os seus objetivos."
          className={cn(inputClass, 'h-auto resize-none py-3')}
          aria-invalid={!!e.message}
        />
      </Field>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website_url">Não preencher</label>
        <input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 shrink-0 accent-white"
            aria-invalid={!!e.consent}
            aria-describedby={e.consent ? 'consent-error' : undefined}
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
        {e.consent && (
          <p id="consent-error" className="text-xs text-destructive">
            {e.consent}
          </p>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {pending ? (
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
