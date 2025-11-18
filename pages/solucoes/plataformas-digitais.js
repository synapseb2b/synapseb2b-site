// pages/solucoes/plataformas-digitais.js
// Versão Final Otimizada: Texto Ajustado + Design Premium (Glassmorphism) + Alinhamento Central Total

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, CheckCircle2, Layers, Target, TrendingUp, Zap } from 'lucide-react';

export default function PlataformasDigitais() {
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
        <title>Plataformas Digitais | Synapse B2B</title>
        <meta name="description" content="Transformamos sites institucionais em plataformas de aceleração de receita que educam, qualificam e convertem 24/7." />
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
          <h1 className="section-title">Plataformas de Aceleração de Receita</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            Não construímos sites. Construímos motores de receita que operam 24/7.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema (Design Premium + Centralizado)                           */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Seu site gera tráfego. Mas não gera receita.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center'}}>
            A maioria das empresas B2B tem um site institucional bonito. E completamente inútil para o time comercial.
          </p>
          
          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            <div className="truth-card-revolutionary" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Leads chegam sem contexto</h3>
              <p style={{textAlign: 'center'}}>Seu time comercial gasta horas qualificando prospects que não entendem o produto, não têm budget ou não são decisores.</p>
            </div>
            
            <div className="truth-card-revolutionary" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Conteúdo genérico</h3>
              <p style={{textAlign: 'center'}}>Seu site mostra "o que você faz" em vez de "o problema que você resolve". Cliente confuso não compra.</p>
            </div>

            <div className="truth-card-revolutionary" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Ativo subutilizado</h3>
              <p style={{textAlign: 'center'}}>Você gastou R$20-50k em um site que funciona como cartão de visita digital. Deveria ser seu melhor vendedor.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A Solução (Design Premium + Texto Ajustado)                          */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Nossa abordagem: 30% Institucional, 70% Motor de Receita</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Cada página, palavra e CTA são desenhados para mover o cliente ideal pela jornada de compra.</p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div className="pillar-card-revolutionary" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Layers size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Arquitetura de Conversão</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Páginas estruturadas por jornada do comprador (awareness → consideration → decision). Cada seção responde uma objeção específica.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Qualificação Inteligente</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Conteúdo que educa o prospect sobre o problema antes de apresentar a solução. Lead que chega já entende o valor.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Zap size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Motor 24/7</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Seu melhor pitch de vendas acessível a qualquer hora. Time comercial recebe leads qualificados e educados, não contatos frios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Resultado (Design Case/Blockquote)                                   */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado</h2>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
            textAlign: 'center',
            backdropFilter: 'blur(5px)'
          }}>
            <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 600}}>
              Seu time comercial para de perder tempo com leads frios e passa a ter conversas estratégicas com prospects que já entendem seu valor.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.8'}}>
              Custo de aquisição diminui. Velocidade de fechamento aumenta. Receita se torna previsível.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Prova: Exemplos Reais (Design Premium + Centralizado)                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Plataformas Que Construímos</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Cada uma com arquitetura estratégica única, adaptada ao contexto do negócio.</p>
          </div>

          <div className="platforms-grid">
            {/* Plataforma 1: Synapse B2B */}
            <div className="platform-card" style={cardStyle}>
              <h3>Synapse B2B</h3>
              <p className="platform-description">Plataforma própria que demonstra o método: 4 pilares de Engenharia de Receita traduzidos em narrativa que converte fundadores B2B.</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> Texto rotativo no hero (6 variações de valor)</li>
                <li><CheckCircle2 size={16} /> Cases estruturados por resultado tangível</li>
                <li><CheckCircle2 size={16} /> CTA contextual em cada seção</li>
              </ul>
              <a href="https://www.synapseb2b.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Plataforma 2: Exclusiva Engenharias */}
            <div className="platform-card" style={cardStyle}>
              <h3>Exclusiva Engenharias</h3>
              <p className="platform-description">Hub multidisciplinar que traduz competências técnicas dispersas em proposta de valor unificada para decisores industriais.</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> Simulador de orçamento integrado</li>
                <li><CheckCircle2 size={16} /> Segmentação por setor (6 verticais)</li>
                <li><CheckCircle2 size={16} /> Cases com foco em continuidade operacional</li>
              </ul>
              <a href="https://exclusivaengenharias.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Plataforma 3: Versão Holística */}
            <div className="platform-card" style={cardStyle}>
              <h3>Versão Holística</h3>
              <p className="platform-description">Primeira plataforma de CareOps Integrativo do Brasil. Educação de mercado sobre categoria nova + ROI tangível (5.8x).</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> 3 verticais com jornadas distintas</li>
                <li><CheckCircle2 size={16} /> História da fundadora como prova viva</li>
                <li><CheckCircle2 size={16} /> Métricas validadas pela UFMG</li>
              </ul>
              <a href="https://versaoholistica.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Plataforma 4: AORKIA */}
            <div className="platform-card" style={cardStyle}>
              <h3>AORKIA</h3>
              <p className="platform-description">Narrativa de urgência para produto invisível (backup SaaS). Ativa medo da perda antes de apresentar solução técnica.</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> Ancoragem em parceria global (Keepit)</li>
                <li><CheckCircle2 size={16} /> ROI tangível (custo de parada vs investimento)</li>
                <li><CheckCircle2 size={16} /> Compliance como gatilho</li>
              </ul>
              <a href="https://www.aorkia.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Plataforma 5: Póvoas & Partners */}
            <div className="platform-card" style={cardStyle}>
              <h3>Póvoas & Partners</h3>
              <p className="platform-description">Ecossistema omnicanal que transforma PDF estático em plataforma multi-entrada com 12 parceiros estratégicos visíveis.</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> 6 portais de entrada (1 por serviço)</li>
                <li><CheckCircle2 size={16} /> Transferência de credibilidade para parceiros</li>
                <li><CheckCircle2 size={16} /> Analytics de comportamento por vertical</li>
              </ul>
              <a href="https://povoas.synapseb2b.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
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
            Seu site deveria ser seu melhor vendedor.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            Se ele não educa, não qualifica e não converte, você está desperdiçando o ativo digital mais importante do seu negócio.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Transformar Meu Site em Motor de Receita</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>Primeira conversa: 21 minutos para avaliar seu ativo digital atual e mapear oportunidades de conversão.</p>
        </div>
      </section>

      {/* CSS Específico para ajustar o grid */}
      <style jsx>{`
        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        .platform-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          color: var(--color-heading);
          margin-bottom: 1rem;
        }
        .platform-description {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .platform-highlights {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center; /* Centraliza a lista */
          gap: 0.75rem;
        }
        .platform-highlights li {
          display: flex;
          align-items: center; /* Centraliza icone e texto */
          gap: 10px;
          font-size: 0.9rem;
          color: var(--color-text);
        }
        .platform-highlights svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}