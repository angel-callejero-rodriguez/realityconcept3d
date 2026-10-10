import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: {
    default: 'Reality Concept 3D — Realidade Aumentada para Mobiliário de Luxo',
    template: '%s | Reality Concept 3D',
  },
  description:
    'Realidade Aumentada nativa para lojas de mobiliário e decoração de luxo. Os seus clientes testam os móveis em casa, sem instalar aplicações. Mais vendas, menos devoluções.',
  keywords: [
    'realidade aumentada',
    'AR mobiliário',
    'modelação 3D',
    'loja de móveis',
    'decoração de luxo',
    'e-commerce',
  ],
  openGraph: {
    title: 'Reality Concept 3D',
    description:
      'Ajudamos marcas de mobiliário a duplicar vendas e reduzir devoluções com Realidade Aumentada nativa.',
    locale: 'pt_PT',
    type: 'website',
    images: ['/images/demo-poster.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#e9e0d3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
