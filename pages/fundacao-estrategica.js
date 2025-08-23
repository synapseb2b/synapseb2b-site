// pages/fundacao-estrategica.js

import Layout from '../foundation/components/Layout'; // Assumindo que seu Layout está aqui
import FundacaoEstrategicaForm from '../components/FundacaoEstrategicaForm'; // Importa o formulário que criamos
import Head from 'next/head';

export default function PaginaFundacaoEstrategica() {
  return (
    <Layout>
      <Head>
        <title>Fundação Estratégica | Synapse B2B</title>
        <meta name="robots" content="noindex" /> 
      </Head>
      
      <main className="container py-12">
        <FundacaoEstrategicaForm />
      </main>
    </Layout>
  );
}