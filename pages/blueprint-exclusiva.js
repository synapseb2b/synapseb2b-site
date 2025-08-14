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
          <source src="/video/Framework_GTM_SynapseB2B.mp4" type="video/mp4" />
        </video>
        <div className="form-page-video-overlay"></div>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* MINI HERO PADRONIZADO E INSPIRADOR */}
        <section 
          className="section section-dark" 
          style={{ 
            paddingTop: '10rem', 
            paddingBottom: '4rem', 
            minHeight: 'auto' 
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
      </div>
    </>
  );
}