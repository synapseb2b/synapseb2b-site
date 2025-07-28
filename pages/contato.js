import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Vamos Construir seu Próximo Salto de Crescimento | Synapse B2B</title>
        <meta name="description" content="Agende um diagnóstico estratégico de 21 minutos e dê o primeiro passo para transformar sua complexidade técnica em sua maior vantagem competitiva." />
      </Head>
 
      {/* Hero do Contato */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Vamos Construir seu Próximo Salto de Crescimento.</h1>
            <h2>Agende um diagnóstico estratégico de 21 minutos.</h2>
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

      {/* Seção Principal de Contato Reorganizada */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            
            {/* Coluna de Contato Direto */}
            <div>
              <div style={{ 
                backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                padding: '2rem', 
                borderRadius: '12px',
                border: '1px solid rgba(100, 255, 218, 0.2)'
              }}>
                <h3 style={{ color: '#64FFDA', marginBottom: '1.5rem' }}>Canais de Contato</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#F8F9FA', marginBottom: '0.5rem' }}>E-mail</h4>
                  <a href="mailto:contato@synapseb2b.com" style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
                    contato@synapseb2b.com
                  </a>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#F8F9FA', marginBottom: '0.5rem' }}>WhatsApp</h4>
                  <a href="https://wa.me/553139586192" target="_blank" rel="noopener noreferrer" style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
                    +55 (31) 3958-6192
                  </a>
                </div>
                
                <div>
                  <h4 style={{ color: '#F8F9FA', marginBottom: '0.5rem' }}>LinkedIn</h4>
                  <a href="https://linkedin.com/company/synapse-b2b" target="_blank" rel="noopener noreferrer" style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
                    /company/synapseb2b
                  </a>
                </div>
              </div>

              <div style={{
                backgroundColor: '#1E2A3A',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                marginTop: '2rem'
              }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Resposta Garantida</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Respondemos todas as consultas em até 24 horas. 
                  Para urgências, use nosso WhatsApp.
                </p>
              </div>
            </div>

            {/* Coluna "O que esperar" */}
            <div>
              <h2 style={{ color: '#64FFDA', marginBottom: '1.5rem' }}>O que Esperar da Consulta</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Análise Gratuita (30 min)</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                      Avaliação inicial dos seus desafios de GTM
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Insights Personalizados</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                      Recomendações específicas para sua empresa
                    </p>
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Roadmap Inicial</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                      Próximos passos para acelerar seu crescimento
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                  <div>
                    <strong style={{ color: '#F8F9FA' }}>Sem Compromisso</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                      Consulta 100% gratuita e sem obrigações
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="section section-darker">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Perguntas Frequentes sobre a Consulta</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card" style={{ textAlign: 'left' }}>
                <h3>A consulta é realmente gratuita?</h3>
                <p>Sim, 100% gratuita. É nossa forma de conhecer sua empresa e avaliar se há fit para trabalharmos juntos.</p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Quanto tempo dura a consulta?</h3>
                <p>Geralmente 30 minutos focados. Tempo suficiente para entender seus desafios e dar insights valiosos.</p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Preciso me preparar para a consulta?</h3>
                <p>Apenas tenha em mente seus principais desafios de GTM e métricas atuais (se disponíveis).</p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Vocês atendem empresas de qualquer porte?</h3>
                <p>Focamos em empresas B2B com receita a partir de R$ 1M e produtos de alta complexidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}