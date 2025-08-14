import Head from 'next/head';
import BlueprintForm from '../components/BlueprintForm';

export default function BlueprintPage() {
  return (
    <>
      <Head>
        <title>Blueprint Estratégico – Exclusiva Engenharias</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Vídeo de fundo para toda a página */}
      <div className="form-page-video-background">
        <video autoPlay muted loop playsInline>
          {/* Corrigido para usar o novo vídeo vertical */}
          <source src="/video/Framework_GTM_SynapseB2B.mp4" type="video/mp4" />
        </video>
        <div className="form-page-video-overlay"></div>
      </div>

      {/* Conteúdo principal da página que ficará sobre o vídeo */}
      <main className="form-page-content">
        {/* MINI HERO CORRIGIDO PARA CENTRALIZAR */}
        <section 
          className="section section-dark" 
          style={{ 
            minHeight: '50vh', // Aumentado para melhor respiro
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <div className="container text-center">
            <h1 className="hero-headline" style={{ fontSize: '2.8rem' }}>
              Blueprint Estratégico
            </h1>
            <p className="hero-subheadline" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0 auto' }}>
              É preciso traduzir complexidade em clareza e ações que transformam atenção em resultado.
            </p>
          </div>
        </section>

        {/* Seção que renderiza o formulário */}
        <section className="section section-dark" style={{ paddingTop: '0' }}>
          <div className="container">
            <BlueprintForm />
          </div>
        </section>
      </main>
    </>
  );
}