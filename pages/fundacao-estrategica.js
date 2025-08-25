import Head from 'next/head';
import FundacaoEstrategicaForm from '../components/FundacaoEstrategicaForm';

export default function FundacaoEstrategicaPage() {
  return (
    <>
      <Head>
        <title>Fundação Estratégica – Exclusiva Engenharias</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Vídeo de fundo para toda a página (seguindo o padrão) */}
      <div className="form-page-video-background">
        <video autoPlay muted loop playsInline>
          <source src="/video/Framework_GTM_SynapseB2B.mp4" type="video/mp4" />
        </video>
        <div className="form-page-video-overlay"></div>
      </div>

      {/* Conteúdo principal da página que ficará sobre o vídeo */}
      <main className="form-page-content">
        
        {/* a) A Hero precisa ser exatamente da mesma forma que a página de referência */}
        <section 
          className="section section-dark" 
          style={{ 
            minHeight: '50vh',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <div className="container text-center">
            <h1 className="hero-headline" style={{ fontSize: '2.8rem' }}>
              Fundação Estratégica
            </h1>
            <p className="hero-subheadline" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0 auto' }}>
              Este é o portal de alinhamento para o novo site. Suas validações aqui são a base para construirmos juntos um ativo digital de alto impacto.
            </p>
          </div>
        </section>

        {/* Seção que renderiza o formulário */}
        <section className="section section-dark" style={{ paddingTop: '0' }}>
          <div className="container">
            {/* b) Seguir as boas práticas da página de referência */}
            <FundacaoEstrategicaForm />
          </div>
        </section>
      </main>
    </>
  );
}