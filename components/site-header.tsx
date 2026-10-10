'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/#vantagens', label: 'Vantagens' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contacto"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-flex"
          >
            Agendar Demonstração
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-9 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegação móvel"
        className={cn('border-t border-border md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              Agendar Demonstração
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
