'use client'

import { useSyncExternalStore, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'rc3d-cookie-consent'

function subscribe() {
  return () => {}
}

export function CookieBanner() {
  const stored = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(STORAGE_KEY),
    () => 'ssr',
  )
  const [dismissed, setDismissed] = useState(false)

  if (stored !== null || dismissed) return null

  const choose = (value: 'accepted' | 'essential') => {
    localStorage.setItem(STORAGE_KEY, value)
    setDismissed(true)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-popover/95 p-5 shadow-2xl backdrop-blur-xl"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Utilizamos cookies essenciais para o funcionamento do site e, com o seu consentimento,
        cookies de análise para melhorar a sua experiência. Saiba mais na nossa{' '}
        <Link href="/cookies" className="text-foreground underline underline-offset-4">
          Política de Cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose('essential')}
          className="h-9 rounded-full border border-border px-4 text-sm hover:bg-muted"
        >
          Apenas essenciais
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="h-9 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Aceitar todos
        </button>
      </div>
    </div>
  )
}
