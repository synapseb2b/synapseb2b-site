import Head from 'next/head';
import SurveyForm from '../components/SurveyForm';

export default function SurveyPage() {
  return (
    <>
      <Head>
        <title>Pesquisa de Copy | Synapse B2B</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="form-page-video-background">
        <video autoPlay muted loop playsInline>
          <source src="/video/video_home_metodologia.mp4" type="video/mp4" />
        </video>
        <div className="form-page-video-overlay"></div>
      </div>

      <main className="form-page-content">
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
              Nos ajude a construir nossa mensagem
            </h1>
            <p className="hero-subheadline" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0 auto' }}>
              Sua percepção é um ativo valioso para nós. Agradecemos por dedicar alguns minutos para nos ajudar a refinar a forma como comunicamos nosso valor.
            </p>
          </div>
        </section>

        <section className="section section-dark" style={{ paddingTop: '0' }}>
          <div className="container">
            <SurveyForm />
          </div>
        </section>
      </main>
    </>
  );
}