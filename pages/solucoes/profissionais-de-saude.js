// pages/profissionais-de-saude.js
// Versão: Health Business Architecture - Foco no Negócio
// Design: Premium Dark Glassmorphism (Receita Exata) + Alinhamento Central

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { 
  ArrowRight, 
  Activity, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Target, 
  Stethoscope,
  Briefcase,
  Gem
} from 'lucide-react';

export default function HealthBusiness() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Estilo Premium (Glassmorphism) - Estado Padrão (Default)
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    height: '100%',
    transition: 'all 0.4s ease'
  };

  return (
    <>
      <Head>
        <title>Health Business Architecture™ | Synapse B2B</title>
        <meta name="description" content="Transforme sua clínica em um ecossistema de receita recorrente. Engenharia de Receita aplicada a negócios de saúde que querem escalar além da agenda do dono." />
      </Head>

      {/* ====================================================================== */}
      {/* HERO SECTION                                                           */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), #000)'}}></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Activity size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="section-title">
            Sua Clínica Não Pode Ser<br/>
            Refém das Suas Mãos
          </h1>
          <p className="hero-subheadline wider-on-desktop" style={{textAlign: 'center'}}>
            Transforme sua prática clínica em um <strong>Health Business</strong> escalável. Implementamos a <strong>Health Business Architecture™</strong> para criar receita recorrente e valor de marca que independe da sua agenda.
          </p>
          <div className="hero-ctas" style={{justifyContent: 'center'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Avaliar Maturidade do Meu Negócio</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O PROBLEMA (SINTOMAS)                                                  */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">O "Teto de Vidro" da Saúde</h2>
          <p className="lead-text" style={{maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center'}}>
            A maioria das clínicas atinge um platô perigoso: faturamento alto, margem apertada e dependência total da presença física dos sócios.
          </p>

          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            
            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>A Armadilha da "Agenda Cheia"</h3>
              <p style={{textAlign: 'center'}}>Agenda lotada não é sinal de sucesso, é sinal de gargalo. Se você não tem tempo para pensar o negócio, você é apenas um funcionário caro da sua própria empresa.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Ativos Ociosos</h3>
              <p style={{textAlign: 'center'}}>Salas vazias, equipamentos caros parados e base de pacientes inativa. Você tem um "banco de dados" valioso (seus pacientes), mas não tem um método para monetizá-lo recorrentemente.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Venda de "Hora" vs. "Resultado"</h3>
              <p style={{textAlign: 'center'}}>Enquanto você vender consultas ou procedimentos isolados, seu faturamento estará limitado às 24h do dia. O dinheiro real está na venda de Protocolos e Jornadas.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A SOLUÇÃO: Health Business Architecture™                               */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Health Business Architecture™</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>
              Nossa metodologia proprietária para transformar consultórios em empresas de saúde.
            </p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            {/* Pilar 1 */}
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Gem size={28} /></div>
              <h3 className="pillar-card-title" style={{textAlign: 'center'}}>1. Produtização do Conhecimento</h3>
              <p className="pillar-card-description" style={{textAlign: 'center'}}>Transformamos sua expertise técnica em produtos escaláveis: Protocolos Proprietários, Programas de Acompanhamento e Certificações. Deixe de vender tempo, comece a vender sua propriedade intelectual.</p>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Layers size={28} /></div>
              <h3 className="pillar-card-title" style={{textAlign: 'center'}}>2. Ecossistema de Receita</h3>
              <p className="pillar-card-description" style={{textAlign: 'center'}}>Diversificação inteligente. Implementamos linhas de receita adjacentes: tecnologia embarcada, suplementação/produtos próprios e modelos de assinatura (Membership) para garantir LTV.</p>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Briefcase size={28} /></div>
              <h3 className="pillar-card-title" style={{textAlign: 'center'}}>3. Governança Clínica</h3>
              <p className="pillar-card-description" style={{textAlign: 'center'}}>Estruturamos a operação para que ela rode sem você. Padronização de processos comerciais e técnicos para que outros profissionais entreguem a sua qualidade.</p>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O RESULTADO (Estilo Case)                                              */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Novo Modelo de Negócio</h2>
          
          <div className="glass-card-hover" style={{
            ...cardStyle,
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
          }}>
            <div style={{marginBottom: '2rem'}}>
              <TrendingUp size={48} style={{color: 'var(--color-primary)', margin: '0 auto 1rem'}} />
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', lineHeight: '1.8', fontWeight: 600}}>
                De: "Clínica do Dr. Fulano"<br/>
                <span style={{opacity: 0.6, fontSize: '1rem', fontWeight: 400}}>Faturamento limitado, risco alto, sem valor de exit.</span>
              </p>
            </div>
            
            <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem'}}>
              <p style={{fontSize: '1.4rem', color: 'var(--color-primary)', lineHeight: '1.8', fontWeight: 700}}>
                Para: Health Business & Tech<br/>
                <span style={{color: 'var(--color-text)', fontSize: '1.1rem', fontWeight: 400}}>Receita recorrente, metodologia proprietária, valuation auditável.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA FINAL                                                              */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Sua expertise merece ser um negócio, não apenas um emprego.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            A <strong>Health Business Architecture™</strong> é o método para médicos e empresários da saúde que querem construir legado e patrimônio, não apenas agenda cheia.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Desenhar meu Health Business</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>
            Diagnóstico exclusivo para clínicas e negócios de saúde com faturamento acima de R$ 2M/ano.
          </p>
        </div>
      </section>

      {/* CSS Global para o Hover Effect (Receita Exata) */}
      <style jsx global>{`
        .glass-card-hover {
           transition: all 0.4s ease;
           border: 1px solid rgba(255, 255, 255, 0.05);
        }
        /* Estado Ativo/Hover (O "Efeito Uau") */
        .glass-card-hover:hover {
           transform: translateY(-5px);
           border-color: var(--color-primary);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2); /* Glow */
        }
        .cortex-step-number {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); 
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }
      `}</style>
    </>
  );
}