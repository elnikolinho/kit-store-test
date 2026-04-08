import type { Metadata } from 'next'
import { Inter, EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: '--font-engravers',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Comeback Kits | Vintage & Retro Jerseys',
  description: 'Premium vintage jerseys, custom merch, and expert jersey repair & reprinting services. Bring your classic kits back to life.',
  keywords: ['vintage jerseys', 'retro jerseys', 'jersey repair', 'jersey reprinting', 'sports merchandise'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
