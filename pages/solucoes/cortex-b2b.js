// pages/solucoes/cortex-b2b.js

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap, TrendingUp, CheckCircle2 } from 'lucide-react'; // FileText removido

export default function CortexB2B() {
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
        <title>Cortex B2B™ | Sistema de Diagnóstico Estratégico | Synapse B2B</title>
        <meta name="description" content="Sistema proprietário que decodifica negócios complexos em diagnósticos estratégicos acionáveis através de Engenharia de Receita, Neurociência e Orquestração de Escala." />
      </Head>

      {/* ====================================================================== */}
      {/* Hero Section                                                         */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Brain size={48} style={{color: 'var(--color-primary)'}} />
          </div>
          <h1 className="section-title">Cortex B2B™</h1>
          <p className="hero-subheadline">
            Sistema de inteligência que transforma análise manual de 7 horas em diagnóstico estratégico de 10 minutos.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema (Reutilizando truths-grid)                                */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Diagnóstico estratégico não deveria ser artesanal.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 3rem'}}>
            Mas hoje, analisar um negócio complexo exige dezenas de horas de trabalho manual.
          </p>
          
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Análise manual consome tempo</h3>
              <p>Ler pitch decks, cruzar dados financeiros, extrair métricas, estruturar insights. 5-7 horas por análise. Não escala.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Qualidade depende de expertise</h3>
              <p>Só quem tem 20+ anos de experiência identifica os gaps críticos rapidamente. Junior não vê. IA genérica também não.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Diagnóstico sem framework é opinião</h3>
              <p>Sem metodologia proprietária, cada consultor analisa diferente. Resultado inconsistente, não replicável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A Solução (Componente customizado .cortex-process)                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Como o Cortex B2B™ Funciona</h2>
            <p className="lead-text">Framework proprietário + IA especializada = Diagnóstico em 10 minutos com profundidade de 20 anos de experiência.</p>
          </div>

          <div className="cortex-process">
            {/* Passo 1 */}
            <div className="cortex-step">
              <div className="cortex-step-number">1</div>
              <div className="cortex-step-content">
                <h3>Upload de Documentos</h3>
                <p>Pitch deck + DRE + Fluxo de caixa + Apresentações comerciais (qualquer combinação).</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="cortex-step">
              <div className="cortex-step-number">2</div>
              <div className="cortex-step-content">
                <h3>Processamento Inteligente</h3>
                <p>Sistema extrai métricas-chave, identifica gaps estruturais, compara contra benchmarks de mercado.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="cortex-step">
              <div className="cortex-step-number">3</div>
              <div className="cortex-step-content">
                <h3>Diagnóstico Estruturado</h3>
                <p>Relatório completo em 4 blocos: Diagnóstico GTM, Mapa de Recomendação, Blueprint Estratégico, Roteiro 90 dias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* As 4 Lentes do Cortex (Reutilizando pillar-grid)                     */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">As 4 Lentes Analíticas do Cortex</h2>
            <p className="lead-text">Cada negócio é analisado sob múltiplas perspectivas integradas.</p>
          </div>

          <div className="pillar-grid-revolutionary">
            {/* Lente 1 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Target size={28} />
                </div>
                <h3 className="pillar-card-title">Engenharia de GTM</h3>
                <p className="pillar-card-description">Avalia clareza de valor, ICP, proposta de valor, canais de aquisição, modelo de vendas. Identifica gaps estruturais no motor comercial.</p>
              </div>
            </div>

            {/* Lente 2 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Brain size={28} />
                </div>
                <h3 className="pillar-card-title">Arquitetura de Decisão</h3>
                <p className="pillar-card-description">Analisa como a narrativa atual facilita ou trava a decisão do comprador. Identifica objeções não resolvidas e fricção cognitiva.</p>
              </div>
            </div>

            {/* Lente 3 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <TrendingUp size={28} />
                </div>
                <h3 className="pillar-card-title">Orquestração de Escala</h3>
                <p className="pillar-card-description">Avalia maturidade operacional, governança financeira, dependência de founder, concentração de clientes. Define próxima fase de crescimento.</p>
              </div>
            </div>

            {/* Lente 4 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Zap size={28} />
                </div>
                <h3 className="pillar-card-title">Economia de Valor</h3>
                <p className="pillar-card-description">Valida modelo de precificação, analisa captura de valor, identifica oportunidades de upsell/cross-sell não exploradas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Resultado (Bloco de Entregáveis)                                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado: Diagnóstico Acionável</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 2rem'}}>
            Não é opinião. Não é checklist genérico. É análise estruturada com recomendações priorizadas.
          </p>

          {/* Bloco de Entregáveis */}
          <div style={{
            backgroundColor: 'var(--color-card-bg)', // AJUSTADO
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
            textAlign: 'left'
          }}>
            <h3 style={{color: 'var(--color-heading)', marginBottom: '2rem', textAlign: 'center'}}>O Que Você Recebe:</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 1: Diagnóstico de Maturidade</strong><br/>
                  Estágio atual do negócio + Gaps críticos por pilar (Clareza, Sistema, Governança, Ativos)
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 2: Mapa de Recomendação</strong><br/>
                  Qual frente ativar primeiro (GTM, CRO fracionado, Sprint de Validação, etc) com justificativa técnica
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 3: Blueprint Estratégico</strong><br/>
                  ICP definido + Proposta de valor revisada + Canais de aquisição + Modelo de precificação otimizado
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 4: Roteiro 90 Dias</strong><br/>
                  Ações priorizadas + Métricas de validação + KPIs de sucesso (objetivos tangíveis, não wishful thinking)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Aplicações (Reutilizando truths-grid)                                */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Onde o Cortex B2B™ Se Aplica</h2>
          <p className="lead-text" style={{marginBottom: '3rem'}}>Nasceu focado em Go-To-Market, mas a profundidade analítica permite adaptação para múltiplos contextos.</p>

          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title">Advisory & Consultoria</h3>
              <p>Advisors/consultores que analisam negócios manualmente economizam 20-30h/mês. Análise de pitch deck + financeiro + comercial em 10 minutos.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title">Ecossistemas de Investimento</h3>
              <p>Fundos/aceleradoras que precisam triar dezenas de startups rapidamente. Diagnóstico estruturado substitui primeira análise manual de viabilidade.</p>
            </div>

            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title">Founders & C-Level</h3>
              <p>CEOs que precisam de segunda opinião estruturada sobre estratégia GTM, precificação ou próxima fase de crescimento. Self-service em 15 minutos.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA Final (ATUALIZADO para padrão revolutionary)                     */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Diagnóstico estratégico não deveria ser artesanal.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Se você gasta 5-7 horas analisando cada negócio manualmente, está operando como artesão quando poderia operar como fábrica.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Conhecer o Cortex B2B™</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para entender seu caso de uso e avaliar fit mútuo.
          </p>
        </div>
      </section>

      {/* CSS Específico */}
      <style jsx>{`
        .cortex-process {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .cortex-step {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          background-color: var(--color-card-bg); /* AJUSTADO */
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
        }
        .cortex-step-number {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }
        .cortex-step-content h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          color: var(--color-heading);
          margin-bottom: 0.75rem;
        }
        .cortex-step-content p {
          color: var(--color-text);
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .cortex-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}