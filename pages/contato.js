import Head from 'next/head';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Agende seu Diagnóstico Estratégico | Synapse B2B</title>
        <meta name="description" content="Agende um diagnóstico estratégico gratuito e dê o primeiro passo para transformar sua complexidade técnica em sua maior vantagem competitiva." />
      </Head>
 
      {/* Hero do Contato */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Vamos Construir seu Próximo Salto de Crescimento.</h1>
            <p>
              O primeiro passo é um diagnóstico preciso. Agende sua sessão estratégica gratuita abaixo.
            </p>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.2,
          background: 'linear-gradient(135deg, #000000 0%, #e6e9ecff 100%)'
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Seção Principal de Agendamento */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', color: '#FFFFFF' }}>
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XscLHMxtGRcre8_fN-LLjWYyDxLgcm-BUKqXpbdx5eEun7o5mMmrpqo8wj6kvgTSeFpSw-Md-?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="700" 
                frameBorder="0"
              ></iframe>
            </div>
            
        </div>
      </section>
    </>
  );
}