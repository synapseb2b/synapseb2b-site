// pages/fundacao-estrategica.js

import Head from 'next/head';
import FundacaoEstrategicaForm from '../components/FundacaoEstrategicaForm';

export default function FundacaoEstrategicaPage() {
  return (
    <>
      <Head>
        <title>Fundação Estratégica – Exclusiva Engenharias</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Vídeo de fundo para toda a página */}
      <div className="form-page-video-background">
        <video autoPlay muted loop playsInline>
          <source src="/video/Framework_GTM_SynapseB2B.mp4" type="video/mp4" />
        </video>
        <div className="form-page-video-overlay"></div>
      </div>

      {/* Conteúdo principal da página */}
      <main className="form-page-content">
        
        <section 
          className="section section-dark" 
          style={{ 
            minHeight: '30vh',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <div className="container text-center">
            <h1 className="hero-headline" style={{ fontSize: '2.8rem' }}>
              Formulário Fundação Estratégica
            </h1>
            {/* --- CORREÇÃO (a): O parágrafo de subtítulo foi removido. --- */}
          </div>
        </section>

        {/* Seção que renderiza o formulário */}
        <section className="section section-dark" style={{ paddingTop: '0' }}>
          <div className="container">
            <FundacaoEstrategicaForm />
          </div>
        </section>
      </main>
    </>
  );
}