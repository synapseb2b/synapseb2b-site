import Head from 'next/head';
import Script from 'next/script'; // Importe o componente Script do Next.js

export default function Contato() {
  return (
    <>
      <Head>
        <title>Agende seu Diagnóstico Estratégico | Synapse B2B</title>
        <meta name="description" content="Agende um diagnóstico estratégico de 21 minutos e dê o primeiro passo para transformar sua complexidade técnica em sua maior vantagem competitiva." />
      </Head>

      {/* Script do Zcal - Carregado de forma otimizada */}
      <Script 
        src="https://static.zcal.co/embed/v1/embed.js" 
        strategy="lazyOnload" 
      />
 
      {/* Hero do Contato */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Vamos Construir seu Próximo Salto de Crescimento.</h1>
            <h2>Agende seu diagnóstico estratégico de 21 minutos.</h2>
            <p>
              O primeiro passo para transformar sua complexidade técnica em sua maior vantagem competitiva.
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

      {/* Seção Principal de Agendamento */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

            {/* Coluna "O que esperar" - Agora como um cabeçalho de valor */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <h2 style={{ color: '#64FFDA', marginBottom: '1.5rem' }}>Seu Diagnóstico de 21 Minutos: O Que Esperar</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.75rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Análise Rápida (21 min)</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Avaliação focada dos seus principais desafios de Go-to-Market.</p>
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

            {/* Widget de Agendamento Zcal */}
            <div className="zcal-inline-widget">
                <a href="https://zcal.co/i/20R_uDNW">Diagnóstico Estratégico GTM - 21 Minutos | SYNAPSE B2B - Schedule a meeting</a>
            </div>

        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="section section-darker">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Perguntas Frequentes sobre o Diagnóstico</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card" style={{ textAlign: 'left' }}>
                <h3>O diagnóstico é realmente gratuito?</h3>
                <p>Sim, 100% gratuito. É nossa forma de entregar valor primeiro e avaliar se há um alinhamento estratégico para uma parceria.</p>
              </div>
              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Quanto tempo dura?</h3>
                <p>Exatos 21 minutos. Respeitamos seu tempo. O objetivo é máxima densidade de valor no menor tempo possível.</p>
              </div>
              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Preciso me preparar?</h3>
                <p>Apenas tenha clareza sobre seu principal desafio de crescimento atual. Nós cuidamos do resto.</p>
              </div>
              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Qual o perfil de empresa ideal?</h3>
                <p>Focamos em empresas B2B de alta complexidade, tipicamente com um produto/serviço já validado, que buscam escalar sua receita de forma previsível.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}