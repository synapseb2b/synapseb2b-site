// pages/solucoes/apps.js
// Versão Final Otimizada: Textos Ajustados + Design Premium (Glassmorphism) + Alinhamento Central Total

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Calculator, BarChart, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

export default function AppsEstrategicos() {
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

  // Estilo Premium (Glassmorphism) - Padrão Cases
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
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  return (
    <>
      <Head>
        <title>Apps Estratégicos | Synapse B2B</title>
        <meta name="description" content="Ferramentas interativas proprietárias que aceleram decisão de compra: calculadoras de ROI, simuladores e ROI builders que provam valor antes da venda." />
      </Head>

      {/* ====================================================================== */}
      {/* Hero Section                                                         */}
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
            <Zap size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="section-title">Apps Estratégicos</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            Ferramentas que provam seu valor antes da venda. Cliente sente o ROI, não apenas ouve sobre ele.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema (Design Premium + Texto Ajustado)                         */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Ciclo de vendas longo = Cliente não visualiza o valor.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center'}}>
            Vendas B2B complexas morrem na objeção invisível: "Preciso ver funcionando antes de comprar."
          </p>
          
          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            <div className="truth-card-revolutionary" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Apresentação ao vivo não escala</h3>
              <p style={{textAlign: 'center'}}>Cada venda exige demo customizada de 1 hora. Vendedor explica, cliente esquece. ROI fica abstrato.</p>
            </div>
            
            <div className="truth-card-revolutionary" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>"Preciso ver na prática"</h3>
              <p style={{textAlign: 'center'}}>Objeção constante. Cliente quer sentir o valor, não ouvir sobre ele. Mas POC demorado trava o ciclo.</p>
            </div>

            <div className="truth-card-revolutionary" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Argumento não se replica</h3>
              <p style={{textAlign: 'center'}}>Seu melhor vendedor fecha porque sabe demonstrar valor. Junior não consegue. Crescimento depende de conhecimento tácito, não de método.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A Solução (Design Premium + Centralizado)                            */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Ferramentas Que Se Tornam o Centro da Sua Argumentação de Valor</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Apps proprietários que tornam seu ROI tangível em 30 segundos.</p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {/* Tipo 1 */}
            <div className="pillar-card-revolutionary" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Calculator size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Calculadoras de ROI</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Cliente insere seus dados reais (custo atual, volume, frequência). Sistema retorna economia estimada em 10 segundos. Prova valor antes da venda.</p>
              </div>
            </div>

            {/* Tipo 2 */}
            <div className="pillar-card-revolutionary" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><BarChart size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Simuladores de Cenários</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Cliente testa diferentes configurações e vê impacto em tempo real. "E se eu aumentar volume em 30%?" Sistema recalcula. Cliente visualiza escala.</p>
              </div>
            </div>

            {/* Tipo 3 */}
            <div className="pillar-card-revolutionary" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Dashboards de Valor</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Após a venda, cliente vê ROI documentado mês a mês. Prova valor continuamente, reduz churn, facilita upsell.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Exemplos Reais (Design Premium + Centralizado)                       */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Exemplos Reais de Apps Estratégicos</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Ferramentas construídas para resolver objeções específicas de clientes reais.</p>
          </div>

          <div className="apps-examples">
            {/* Exemplo 1: Simulador de Orçamento */}
            <div className="app-example-card" style={cardStyle}>
              <div className="app-example-header">
                <Calculator size={32} style={{color: 'var(--color-primary)'}} />
                <h3 style={{margin: 0}}>Simulador de Orçamento</h3>
              </div>
              <span className="app-tag" style={{marginBottom: '1.5rem'}}>Exclusiva Engenharias</span>
              
              <p className="app-description">
                <strong>Problema:</strong> Cliente industrial não sabia quanto custaria obra multidisciplinar. Ligava, esperava orçamento manual de 5 dias, desistia.
              </p>
              <p className="app-description">
                <strong>Solução:</strong> Ferramenta que retorna faixa de investimento em 10 segundos. Cliente insere: tipo de projeto, área, complexidade, disciplinas. Sistema calcula.
              </p>
              <p className="app-description">
                <strong>Resultado:</strong> Lead já chega na conversa com expectativa calibrada. Zero tempo perdido com prospects fora de budget.
              </p>
            </div>

            {/* Exemplo 2: Calculadora de Savings */}
            <div className="app-example-card" style={cardStyle}>
              <div className="app-example-header">
                <BarChart size={32} style={{color: 'var(--color-primary)'}} />
                <h3 style={{margin: 0}}>Calculadora de Savings</h3>
              </div>
              <span className="app-tag" style={{marginBottom: '1.5rem'}}>TSimples (Logística)</span>

              <p className="app-description">
                <strong>Problema:</strong> Cliente B2B não acreditava em economia de 15-25% em fretes. Queria "ver para crer", mas POC demorado travava decisão.
              </p>
              <p className="app-description">
                <strong>Solução:</strong> Calculadora web gratuita. Cliente insere: gasto mensal com fretes, número de notas, transportadoras usadas. Sistema retorna economia estimada.
              </p>
              <p className="app-description">
                <strong>Resultado:</strong> Ferramenta viral que gera leads qualificados. Cliente que usa a calculadora já está convencido do potencial de saving.
              </p>
            </div>

            {/* Exemplo 3: Dashboard de Impacto */}
            <div className="app-example-card" style={cardStyle}>
              <div className="app-example-header">
                <TrendingUp size={32} style={{color: 'var(--color-primary)'}} />
                <h3 style={{margin: 0}}>Dashboard de Impacto</h3>
              </div>
              <span className="app-tag" style={{marginBottom: '1.5rem'}}>Versão Holística (Healthtech)</span>

              <p className="app-description">
                <strong>Problema:</strong> Hospital pagava pela plataforma mas CFO não via ROI tangível mês a mês. Risco de churn alto.
              </p>
              <p className="app-description">
                <strong>Solução:</strong> Dashboard que mostra em tempo real: redução de readmissões, economia por paciente crônico, adesão medicamentosa. Métricas atualizadas continuamente.
              </p>
              <p className="app-description">
                <strong>Resultado:</strong> CFO apresenta dashboard em reuniões de board. ROI documentado = renovação garantida + upsell facilitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Quando Contratar (Design Premium + Texto Ajustado)                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Quando Contratar um App Estratégico</h2>
          <p className="lead-text" style={{marginBottom: '3rem', textAlign: 'center'}}>Não é para todo negócio. É para situações onde demonstração de valor trava a venda.</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={cardStyle}>
              <CheckCircle2 size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
              <p style={{color: 'var(--color-text)', lineHeight: '1.7', textAlign: 'center'}}>
                <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>Venda depende de demo ao vivo</strong>
                Se cada fechamento exige apresentação customizada de 1h+, app codifica e escala seu argumento.
              </p>
            </div>

            <div style={cardStyle}>
              <CheckCircle2 size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
              <p style={{color: 'var(--color-text)', lineHeight: '1.7', textAlign: 'center'}}>
                <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>Cliente precisa "sentir" valor</strong>
                ROI é grande mas abstrato. Ferramenta torna tangível em 30 segundos.
              </p>
            </div>

            <div style={cardStyle}>
              <CheckCircle2 size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
              <p style={{color: 'var(--color-text)', lineHeight: '1.7', textAlign: 'center'}}>
                <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>Ciclo de vendas longo</strong>
                Se decisão leva 3-6 meses, ferramenta acelera ao eliminar objeção "preciso ver funcionando".
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA Final                                                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Seu melhor argumento de vendas deveria ser uma ferramenta.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            Se você explica ROI em 40 slides e cliente ainda não visualiza, você precisa de um app que prove valor em 30 segundos.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Construir Meu App Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>Primeira conversa: 21 minutos para identificar qual ferramenta acelera sua conversão.</p>
        </div>
      </section>

      {/* CSS Específico */}
      <style jsx>{`
        .apps-examples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .app-example-header {
          display: flex;
          flex-direction: column; /* Vertical para centralizar */
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .app-example-header h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          color: var(--color-heading);
        }
        .app-tag {
          font-size: 0.8rem;
          color: var(--color-primary);
          background: rgba(0, 150, 132, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          border: 1px solid var(--color-primary);
          display: inline-block; /* Para centralizar */
        }
        .app-description {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .app-description:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .apps-examples {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}