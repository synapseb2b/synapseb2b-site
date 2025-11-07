// pages/solucoes/apps.js

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

  return (
    <>
      <Head>
        <title>Apps Estratégicos | Synapse B2B</title>
        <meta name="description" content="Ferramentas interativas proprietárias que aceleram decisão de compra: calculadoras de ROI, simuladores e ROI builders que provam valor antes da venda." />
      </Head>

      {/* Hero Section */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Zap size={48} style={{color: 'var(--color-primary)'}} />
          </div>
          <h1 className="section-title">Apps Estratégicos</h1>
          <p className="hero-subheadline">
            Ferramentas que provam seu valor antes da venda. Cliente sente o ROI, não apenas ouve sobre ele.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* O Problema */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Ciclo de vendas longo = Cliente não visualiza o valor.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 3rem'}}>
            Vendas B2B complexas morrem na objeção invisível: "Preciso ver funcionando antes de comprar."
          </p>
          
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Apresentação ao vivo não escala</h3>
              <p>Cada venda exige demo customizada de 1 hora. Vendedor explica, cliente esquece. ROI fica abstrato.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">"Preciso ver na prática"</h3>
              <p>Objeção constante. Cliente quer sentir o valor, não ouvir sobre ele. Mas POC demorado trava o ciclo.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Argumento não se replica</h3>
              <p>Seu melhor vendedor fecha porque sabe demonstrar valor. Junior não sabe. Crescimento travado em talento individual.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* A Solução */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Ferramentas Que Se Tornam o Centro da Sua Argumentação de Valor</h2>
            <p className="lead-text">Apps proprietários que tornam seu ROI tangível em 30 segundos.</p>
          </div>

          <div className="pillar-grid-revolutionary">
            {/* Tipo 1 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Calculator size={28} />
                </div>
                <h3 className="pillar-card-title">Calculadoras de ROI</h3>
                <p className="pillar-card-description">Cliente insere seus dados reais (custo atual, volume, frequência). Sistema retorna economia estimada em 10 segundos. Prova valor antes da venda.</p>
              </div>
            </div>

            {/* Tipo 2 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <BarChart size={28} />
                </div>
                <h3 className="pillar-card-title">Simuladores de Cenários</h3>
                <p className="pillar-card-description">Cliente testa diferentes configurações e vê impacto em tempo real. "E se eu aumentar volume em 30%?" Sistema recalcula. Cliente visualiza escala.</p>
              </div>
            </div>

            {/* Tipo 3 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <TrendingUp size={28} />
                </div>
                <h3 className="pillar-card-title">Dashboards de Valor</h3>
                <p className="pillar-card-description">Após a venda, cliente vê ROI documentado mês a mês. Prova valor continuamente, reduz churn, facilita upsell.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Exemplos Reais */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Exemplos Reais de Apps Estratégicos</h2>
            <p className="lead-text">Ferramentas construídas para resolver objeções específicas de clientes reais.</p>
          </div>

          <div className="apps-examples">
            {/* Exemplo 1: Simulador de Orçamento */}
            <div className="app-example-card">
              <div className="app-example-header">
                <Calculator size={24} style={{color: 'var(--color-primary)'}} />
                <h3>Simulador de Orçamento</h3>
                <span className="app-tag">Exclusiva Engenharias</span>
              </div>
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
            <div className="app-example-card">
              <div className="app-example-header">
                <BarChart size={24} style={{color: 'var(--color-primary)'}} />
                <h3>Calculadora de Savings</h3>
                <span className="app-tag">TSimples (Logística)</span>
              </div>
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
            <div className="app-example-card">
              <div className="app-example-header">
                <TrendingUp size={24} style={{color: 'var(--color-primary)'}} />
                <h3>Dashboard de Impacto</h3>
                <span className="app-tag">Versão Holística (Healthtech)</span>
              </div>
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

      {/* Quando Contratar */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Quando Contratar um App Estratégico</h2>
          <p className="lead-text" style={{marginBottom: '3rem'}}>Não é para todo negócio. É para situações onde demonstração de valor trava a venda.</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(10, 10, 10, 0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <CheckCircle2 size={24} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
              <p style={{color: 'var(--color-text)', lineHeight: '1.7'}}>
                <strong style={{color: 'var(--color-heading)'}}>Venda depende de demo ao vivo</strong><br/>
                Se cada fechamento exige apresentação customizada de 1h+, app escala seu argumento.
              </p>
            </div>

            <div style={{
              background: 'rgba(10, 10, 10, 0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <CheckCircle2 size={24} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
              <p style={{color: 'var(--color-text)', lineHeight: '1.7'}}>
                <strong style={{color: 'var(--color-heading)'}}>Cliente precisa "sentir" valor</strong><br/>
                ROI é grande mas abstrato. Ferramenta torna tangível em 30 segundos.
              </p>
            </div>

            <div style={{
              background: 'rgba(10, 10, 10, 0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <CheckCircle2 size={24} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
              <p style={{color: 'var(--color-text)', lineHeight: '1.7'}}>
                <strong style={{color: 'var(--color-heading)'}}>Ciclo de vendas longo</strong><br/>
                Se decisão leva 3-6 meses, ferramenta acelera ao eliminar objeção "preciso ver funcionando".
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Seu melhor argumento de vendas deveria ser uma ferramenta.</h2>
          <p className="lead-text">
            Se você explica ROI em 40 slides e cliente ainda não visualiza, você precisa de um app que prove valor em 30 segundos.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Construir Meu App Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text">Primeira conversa: 21 minutos para identificar qual ferramenta acelera sua conversão.</p>
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
        .app-example-card {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
        }
        .app-example-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .app-example-header h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          color: var(--color-heading);
          flex: 1;
        }
        .app-tag {
          font-size: 0.8rem;
          color: var(--color-primary);
          background: rgba(0, 150, 132, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          border: 1px solid var(--color-primary);
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