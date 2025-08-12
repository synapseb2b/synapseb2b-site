import { ScanLine, GitPullRequest, ShieldCheck, ArrowRight, Eye } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ContatoPage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Contato | Diagnóstico Estratégico - Synapse B2B</title>
        <meta name="description" content="Comece com um diagnóstico estratégico rápido, claro e focado em revelar onde estão as alavancas de crescimento que o mercado ainda não percebe." />
        <meta property="og:title" content="Contato | Diagnóstico Estratégico - Synapse B2B" />
        <meta property="og:description" content="Comece com um diagnóstico estratégico rápido, claro e focado em revelar onde estão as alavancas de crescimento que o mercado ainda não percebe." />
        <link rel="canonical" href="https://synapseb2b.com/contato" />
      </Head>

      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="synapse-line synapse-line-top"></div>
 
      <section 
        className="hero modern-hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-headline">
              O próximo passo para tornar sua solução impossível de ignorar.
            </h1>
            <p className="hero-subheadline">
              Comece com um diagnóstico estratégico rápido, claro e focado em revelar onde estão as alavancas de crescimento que o mercado ainda não percebe.
            </p>
          </div>
        </div>
        
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
          >
            <source src="/video/video_home_metodologia.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="conversa"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Em 21 minutos, clareza sobre o que mais importa agora.</h2>
            <div className="section-content">
              <div className="benefits-grid">
                <div className="benefit-item glass-card-contrast">
                  <ScanLine className="benefit-icon" />
                  <h4>Raio-X estratégico imediato</h4>
                  <p>Análise objetiva dos principais gargalos e oportunidades no seu Go-to-Market.</p>
                </div>
                <div className="benefit-item glass-card-contrast">
                  <GitPullRequest className="benefit-icon" />
                  <h4>2 alavancas prioritárias</h4>
                  <p>Pontos que podem gerar impacto direto e mensurável em curto prazo.</p>
                </div>
                <div className="benefit-item glass-card-contrast">
                  <ShieldCheck className="benefit-icon" />
                  <h4>Sem roteiro de venda</h4>
                  <p>100% voltado a entregar valor, independente de seguir ou não com a Synapse B2B.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>
      
      <section 
        className="section section-darker modern-section"
        id="porque-diagnostico"
      >
        <div className="container">
          <div className="text-center mb-2">
            <div className="section-content">
              <div className="highlight-box">
                <p className="lead-text">
                  A maioria das empresas técnicas investe tempo e recursos tentando corrigir sintomas, não causas. Um diagnóstico estratégico bem conduzido é o atalho para investir energia no que realmente transforma seu resultado — e começar a ser percebido de forma diferente pelo mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="agenda"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Reserve seu horário agora</h2>
            <p className="lead-text" style={{maxWidth: '800px', margin: '1rem auto 3rem auto'}}>
              As vagas para diagnóstico são limitadas semanalmente para garantir atenção total a cada negócio. Escolha um horário disponível no calendário abaixo.
            </p>
            <div className="calendar-container">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XscLHMxtGRcre8_fN-LLjWYyDxLgcm-BUKqXpbdx5eEun7o5mMmrpqo8wj6kvgTSeFpSw-Md-?gv=true"
                style={{ border: 'none' }}
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="yes"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* ==========================================================================
           ESTILOS PARA A PÁGINA DE CONTATO
           ========================================================================== */
        
        /* Seção "O que você leva" */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }
        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 2rem;
          text-align: center;
        }
        .benefit-icon {
          width: 50px;
          height: 50px;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
        }
        .benefit-item h4 {
          font-size: 1.3rem;
          color: var(--base-color);
          margin-bottom: 1rem;
        }
        .benefit-item p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--base-color-light);
        }

        /* Seção "Por que começar" */
        .highlight-box {
          max-width: 800px;
          margin: 0 auto;
          padding: 2.5rem;
          background-color: rgba(0, 255, 224, 0.05);
          border: 1px solid rgba(0, 255, 224, 0.1);
          border-radius: 16px;
        }

        /* Seção "Agenda" */
        .calendar-container {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Ajustes de Responsividade */
        @media (max-width: 992px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}