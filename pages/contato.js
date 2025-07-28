import Head from 'next/head';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Agende seu Diagnóstico Estratégico | Synapse B2B</title>
        <meta name="description" content="Agende um diagnóstico estratégico gratuito e dê o primeiro passo para transformar sua complexidade técnica em sua maior vantagem competitiva." />
      </Head>
 
      {/* Hero do Contato Otimizado */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Vamos Construir seu Próximo Salto de Crescimento.</h1>
            <p>
              O primeiro passo para transformar sua complexidade técnica em sua maior vantagem competitiva é um diagnóstico preciso. Agende sua sessão estratégica gratuita abaixo.
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
          background: 'linear-gradient(135deg, #000000 0%, #0A192F 100%)'
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

      {/* Seção Principal de Agendamento Otimizada */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

            {/* Cabeçalho de Valor */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <h2 style={{ color: '#64FFDA', marginBottom: '1.5rem' }}>
                Seu Diagnóstico de 21 Minutos: <br /> O Que Esperar
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.75rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Análise Rápida e Focada</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Avaliação dos seus principais desafios de Go-to-Market.</p>
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.75rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Identificação de Alavancas</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Identificaremos 1 ou 2 alavancas de crescimento de alto impacto imediato.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.75rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Sem Compromisso</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Diagnóstico 100% gratuito, focado em entregar valor, não em vender.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Container do Widget com Ajuste Estético */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '12px' }}>
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XscLHMxtGRcre8_fN-LLjWYyDxLgcm-BUKqXpbdx5eEun7o5mMmrpqo8wj6kvgTSeFpSw-Md-?gv=true" 
                    style={{ border: 0, width: '100%', height: '600px' }} 
                    frameBorder="0"
                ></iframe>
            </div>

        </div>
      </section>
    </>
  );
}