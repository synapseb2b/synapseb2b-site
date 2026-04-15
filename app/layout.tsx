import type { Metadata, Viewport } from 'next'
import { inter, montserrat } from '@/lib/fonts'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, GA_ID } from '@/lib/constants'
import { generateJsonLd } from '@/lib/metadata'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { LenisProvider } from '@/lib/lenis'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Engenharia de Receita`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'engenharia de receita',
    'consultoria B2B',
    'posicionamento estratégico',
    'vendas B2B',
    'arquitetura comercial',
    'CORTEX B2B',
    'Synapse B2B',
    'consultoria de vendas',
    'revenue engineering',
    'go-to-market B2B',
    'consultoria estratégica',
    'receita previsível',
    'playbook comercial',
    'narrativa de valor',
    'posicionamento de marca B2B',
    'cliente ideal B2B',
    'sistema de receita',
    'Júlio Figueiredo',
    'consultoria empresarial',
    'growth B2B',
  ],
  authors: [{ name: 'Júlio Figueiredo' }],
  creator: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Engenharia de Receita para empresas B2B`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synapse B2B - Engenharia de Receita',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Engenharia de Receita`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#040c1f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = generateJsonLd()

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <LenisProvider>
          <NoiseOverlay />
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LenisProvider>

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
