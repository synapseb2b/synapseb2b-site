// pages/fundacao-estrategica.js (VERSÃO CORRIGIDA)

import Layout from '../components/Layout';
import FundacaoEstrategicaForm from '../components/FundacaoEstrategicaForm';
import Head from 'next/head';

export default function PaginaFundacaoEstrategica() {
  return (
    <Layout>
      <Head>
        {/* --- CORREÇÃO 1: Head adaptado conforme o Blueprint --- */}
        <title>Fundação Estratégica | Synapse B2B & Exclusiva Engenharias</title>
        <meta name="description" content="Portal de alinhamento para o novo site da Exclusiva Engenharias." />
        <meta property="og:title" content="Fundação Estratégica | Synapse B2B & Exclusiva Engenharias" />
        <meta property="og:description" content="Portal de alinhamento para o novo site da Exclusiva Engenharias." />
        <meta property="og:image" content="https://www.synapseb2b.com/image/og-image-synapse.png" /> {/* Exemplo de imagem OG */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="noindex, nofollow" />

        {/* --- CORREÇÃO 5: Link do Google Fonts corrigido para carregar as 3 fontes --- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="container py-12">
        <FundacaoEstrategicaForm />
      </main>
    </Layout>
  );
}