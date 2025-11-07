// pages/solucoes/plataformas-digitais.js

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, CheckCircle2, Target, TrendingUp, Zap } from 'lucide-react';

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

  return (
    <>
      <Head>
        <title>Plataformas Digitais | Synapse B2B</title>
        <meta name="description" content="Transformamos sites institucionais em plataformas de aceleração de receita que educam, qualificam e convertem 24/7." />
      </Head>

      {/* ====================================================================== */}
      {/* Hero Section                                                         */}
      {/* ====================================================================== */}
      {/* A classe 'short-hero' existe em globals.css e está correta */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Plataformas de Aceleração de Receita</h1>
          <p className="hero-subheadline">
            Não construímos sites. Construímos motores de receita que operam 24/7.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema (Reutilizando truths-grid)                                */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Seu site gera tráfego. Mas não gera receita.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 3rem'}}>
            A maioria das empresas B2B tem um site institucional bonito. E completamente inútil para o time comercial.
          </p>
          
          {/* Reutilização do componente .truths-grid-revolutionary de globals.css */}
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Leads chegam sem contexto</h3>
              <p>Seu time comercial gasta horas qualificando prospects que não entendem o produto, não têm budget ou não são decisores.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Conteúdo genérico</h3>
              <p>Seu site mostra "o que você faz" em vez de "o problema que você resolve". Cliente confuso não compra.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Ativo subutilizado</h3>
              <p>Você gastou R$20-50k em um site que funciona como cartão de visita digital. Deveria ser seu melhor vendedor.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A Solução (Reutilizando pillar-grid)                                 */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Nossa abordagem: 30% Institucional, 70% Motor de Receita</h2>
            <p className="lead-text">Cada página, palavra e CTA são desenhados para mover o cliente ideal pela jornada de compra.</p>
          </div>

          {/* Reutilização do componente .pillar-grid-revolutionary de globals.css (reduzido para 3 colunas) */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Target size={28} />
                </div>
                <h3 className="pillar-card-title">Arquitetura de Conversão</h3>
                <p className="pillar-card-description">Páginas estruturadas por jornada do comprador (awareness → consideration → decision). Cada seção responde uma objeção específica.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <TrendingUp size={28} />
                </div>
                <h3 className="pillar-card-title">Qualificação Inteligente</h3>
                <p className="pillar-card-description">Conteúdo que educa o prospect sobre o problema antes de apresentar a solução. Lead que chega já entende o valor.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Zap size={28} />
                </div>
                <h3 className="pillar-card-title">Motor 24/7</h3>
                <p className="pillar-card-description">Seu melhor pitch de vendas acessível a qualquer hora. Time comercial recebe leads educados, não apenas contatos frios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Resultado (Bloco de destaque customizado)                            */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado</h2>
          {/* Este bloco é similar ao .decision-block, mas com fundo diferente. Está correto. */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.1), rgba(56, 197, 177, 0.05))',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
            textAlign: 'center'
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
      {/* Prova: Exemplos Reais (Grid customizado via JSX Style)               */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Plataformas Que Construímos</h2>
            <p className="lead-text">Cada uma com arquitetura estratégica única, adaptada ao contexto do negócio.</p>
          </div>

          <div className="platforms-grid">
            {/* Plataforma 1: Synapse B2B */}
            <div className="platform-card">
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
            <div className="platform-card">
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
            <div className="platform-card">
              <h3>Versão Holística</h3>
              <p className="platform-description">Primeira plataforma de CareOps Integrativo do Brasil. Educação de mercado sobre categoria nova + ROI tangível (5.8x).</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> 3 verticais com jornadas distintas (Hospitais, Empresas, Escolas)</li>
                <li><CheckCircle2 size={16} /> História da fundadora como prova viva</li>
                <li><CheckCircle2 size={16} /> Métricas validadas pela UFMG</li>
              </ul>
              <a href="https://versaoholistica.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Plataforma 4: AORKIA */}
            <div className="platform-card">
              <h3>AORKIA</h3>
              <p className="platform-description">Narrativa de urgência para produto invisível (backup SaaS). Ativa medo da perda antes de apresentar solução técnica.</p>
              <ul className="platform-highlights">
                <li><CheckCircle2 size={16} /> Ancoragem em parceria global (Keepit)</li>
                <li><CheckCircle2 size={16} /> ROI tangível (custo de parada vs investimento)</li>
                <li><CheckCircle2 size={16} /> Compliance como gatilho (LGPD + Ransomware)</li>
              </ul>
              <a href="https://www.aorkia.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{marginTop: 'auto'}}>
                <span>Ver Plataforma</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Plataforma 5: Póvoas & Partners */}
            <div className="platform-card">
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
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Se ele não educa, não qualifica e não converte, você está desperdiçando o ativo digital mais importante do seu negócio.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Transformar Meu Site em Motor de Receita</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>Primeira conversa: 21 minutos para avaliar seu ativo digital atual e mapear oportunidades de conversão.</p>
        </div>
      </section>

      {/* CSS Específico para esta página */}
      <style jsx>{`
        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 4rem; /* AJUSTADO: para 4rem */
        }
        .platform-card {
          background-color: var(--color-card-bg); /* AJUSTADO: para --color-card-bg */
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
          display: flex; /* Adicionado para alinhar botão ao fundo */
          flex-direction: column; /* Adicionado para alinhar botão ao fundo */
        }
        .platform-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 150, 132, 0.15); /* Mantido shadow simples do usuário */
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
          text-align: left;
          margin-bottom: 2rem;
        }
        .platform-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: var(--color-text);
        }
        .platform-highlights svg {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        @media (max-width: 768px) {
          .platforms-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}