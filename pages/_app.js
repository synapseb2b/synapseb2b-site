import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Escalar Negócios B2B™</title>
        <meta name="description" content="Transformamos expertise técnica em receita previsível para empresas B2B de alta complexidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        
        {/* Meta tags para SEO */}
        <meta property="og:title" content="Synapse B2B | Engenharia de Receita para Escalar Negócios B2B" />
        <meta property="og:description" content="Transformamos expertise técnica em receita previsível para empresas B2B de alta complexidade" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Preload das fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* Scripts do Google Analytics */}
      <Script 
        strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-Y1HMBX253J" 
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y1HMBX253J');
        `}
      </Script>
    </>
  )
}
