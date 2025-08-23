// pages/fundacao-estrategica.js (VERSÃO CORRIGIDA E COMPLETA)

import Layout from '../components/Layout';
import FundacaoEstrategicaForm from '../components/FundacaoEstrategicaForm';
import Head from 'next/head';

export default function PaginaFundacaoEstrategica() {
  return (
    <Layout>
      <Head>
        <title>Fundação Estratégica | Synapse B2B</title>
        <meta name="robots" content="noindex" />
        
        {/* CORREÇÃO: Link do Google Fonts corrigido para carregar as 3 fontes necessárias */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="container py-8 md:py-16">
        
        {/* MELHORIA: Mini Hero adicionada */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fundação Estratégica</h1>
          <p className="text-lg text-gray-400">
            Este é o nosso portal de alinhamento para o novo site da Exclusiva Engenharias. Suas respostas aqui são o ponto de partida para construirmos juntos um ativo digital de alta performance.
          </p>
        </div>

        <FundacaoEstrategicaForm />
        
      </main>
    </Layout>
  );
}