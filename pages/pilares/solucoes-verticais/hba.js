// pages/hba.js
// Versão: Health Business Architecture - Foco em Legado e Autoridade
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
        <meta name="description" content="Transforme sua autoridade médica em um ecossistema de negócios escalável. Engenharia de Receita para profissionais de saúde que buscam legado." />
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
            Sua expertise clínica já é uma referência.<br/>
            Agora, ela precisa se tornar um legado.
          </h1>
          <p className="hero-subheadline wider-on-desktop" style={{textAlign: 'center'}}>
            Transforme sua autoridade médica em um <strong>Ecossistema de Negócios</strong> escalável. Implementamos a <strong>Health Business Architecture™</strong> para diversificar suas fontes de receita e expandir seu impacto além do consultório.
          </p>
          <div className="hero-ctas" style={{justifyContent: 'center'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Avaliar Potencial do meu Ecossistema</span>
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
          <h2 className="section-title">O Dilema da Excelência Técnica</h2>
          <p className="lead-text" style={{maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center'}}>
            Grandes profissionais atingem um ponto onde o sucesso clínico cria uma complexidade operacional que limita a expansão do patrimônio.
          </p>

          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            
            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>A Agenda como Limite</h3>
              <p style={{textAlign: 'center'}}>Você atingiu o topo da performance clínica, mas seu crescimento financeiro ainda está limitado às 24 horas do dia. Escalar exige ir além da venda de horas.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Ativos Subutilizados</h3>
              <p style={{textAlign: 'center'}}>Sua base de pacientes confia cegamente em você. Essa confiança é um ativo valioso que poderia gerar receita recorrente através de produtos e serviços complementares, mas hoje está inativa.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>A Exaustão do Modelo Tradicional</h3>
              <p style={{textAlign: 'center'}}>Anos dedicados a uma rotina que exige sua presença física integral. O sucesso clínico trouxe reconhecimento, mas consolidou um modelo que drena sua energia e limita sua liberdade de tempo.</p>
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
              Nossa metodologia proprietária para transformar consultórios em empresas de saúde de alto valor.
            </p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            {/* Pilar 1 */}
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Gem size={28} /></div>
              <h3 className="pillar-card-title" style={{textAlign: 'center'}}>1. Produtização da Expertise</h3>
              <p className="pillar-card-description" style={{textAlign: 'center'}}>Transformamos seus anos de estudo e prática em <strong>Protocolos Proprietários</strong> e <strong>Programas de Acompanhamento</strong>. Deixe de vender apenas consultas e passe a vender a sua metodologia única de tratamento.</p>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Layers size={28} /></div>
              <h3 className="pillar-card-title" style={{textAlign: 'center'}}>2. Diversificação de Canais</h3>
              <p className="pillar-card-description" style={{textAlign: 'center'}}>Criamos novas linhas de receita que orbitam sua autoridade: seu <strong>Selo de Qualidade</strong> (Licenciamento), programas de <strong>Educação</strong> (Mentorias) e <strong>Monitoramento Contínuo</strong> (Outcomes de pacientes).</p>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Briefcase size={28} /></div>
              <h3 className="pillar-card-title" style={{textAlign: 'center'}}>3. Governança de Excelência</h3>
              <p className="pillar-card-description" style={{textAlign: 'center'}}>Estruturamos processos que garantem o "Padrão Ouro" do seu atendimento. Permitimos que uma equipe multidisciplinar entregue resultados com a sua assinatura de qualidade, escalando sua reputação.</p>
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
          <h2 className="section-title">A Evolução do Modelo de Negócio</h2>
          
          <div className="glass-card-hover" style={{
            ...cardStyle,
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
          }}>
            <div style={{marginBottom: '2rem'}}>
              <TrendingUp size={48} style={{color: 'var(--color-primary)', margin: '0 auto 1rem'}} />
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', lineHeight: '1.8', fontWeight: 600}}>
                De: Prática Clínica Tradicional<br/>
                <span style={{opacity: 0.6, fontSize: '1rem', fontWeight: 400}}>Excelência focada na consulta, mas limitada pelo tempo e presença física.</span>
              </p>
            </div>
            
            <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem'}}>
              <p style={{fontSize: '1.4rem', color: 'var(--color-primary)', lineHeight: '1.8', fontWeight: 700}}>
                Para: Ecossistema de Negócios Escalável<br/>
                <span style={{color: 'var(--color-text)', fontSize: '1.1rem', fontWeight: 400}}>Receita recorrente, metodologia proprietária e valor de marca que transcende o fundador.</span>
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
            Você construiu um nome. Agora vamos construir um império.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            A Engenharia de Receita aplicada à saúde é para profissionais que não se contentam apenas com a medicina tradicional. É para quem quer deixar uma marca.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Desenhar meu Health Business</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>
            Exclusivo para clínicas e negócios de saúde já consolidados que buscam o próximo nível de expansão.
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