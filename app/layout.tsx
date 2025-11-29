import type { Metadata } from 'next'
import './globals.css'
import MainNavbar from '@/components/Navbar'
import { TransitionProvider } from '@/components/TransitionProvider'
import { I18nProvider } from '@/lib/i18n'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Sivory Design - Pergolas Crafted to Perfection',
  description: 'Premium pergola design and construction with years of experience in creating beautiful outdoor spaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <I18nProvider>
          <SmoothScroll>
            <TransitionProvider>
              <MainNavbar />
              <main>
                {children}
              </main>
            </TransitionProvider>
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  )
}
