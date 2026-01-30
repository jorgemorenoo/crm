import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ServiceWorkerRegister } from '@/components/pwa/ServiceWorkerRegister'
import { InstallBanner } from '@/components/pwa/InstallBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: '77 CRM | Pipeline de Vendas integrado com AI',
  description: '77 CRM para gestão completa de Leads, exclusivo para uso interno da empresa.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: '77 CRM | Pipeline de Vendas integrado com AI',
    description: '77 CRM para gestão completa de Leads, exclusivo para uso interno da empresa.',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: '77 CRM Logo',
      },
    ],
  },
}

/**
 * Componente React `RootLayout`.
 *
 * @param {{ children: ReactNode; }} {
  children,
} - Parâmetro `{
  children,
}`.
 * @returns {Element} Retorna um valor do tipo `Element`.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[var(--color-bg)] text-[var(--color-text-primary)]`}>
        <ServiceWorkerRegister />
        <InstallBanner />
        {children}
      </body>
    </html>
  )
}
