// pages/solucoes/cortex-b2b.js

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

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
        <title>Cortex B2B™ | Meta-Framework de Inteligência Estratégica | Synapse B2B</title>
        <meta name="description" content="Meta-framework proprietário que reúne os maiores frameworks globais de GTM, 20 anos de experiência em ecossistemas B2B e neurociência aplicada para diagnóstico 360º de negócios complexos." />
      </Head>

      {/* HERO */}
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
            Meta-framework de inteligência estratégica que condensa 20 anos de experiência em ecossistemas B2B + maiores frameworks globais de GTM em diagnóstico 360º de 10 minutos.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* GÊNESE DO CORTEX */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="section-title">A Gênese do Cortex B2B™</h2>
            <p className="lead-text" style={{maxWidth: '800px', margin: '0 auto'}}>
              Nasceu da necessidade de codificar duas décadas de experiência operacional em ecossistemas B2B de alta complexidade.
            </p>
          </div>

          {/* AJUSTE DE PADRÃO: Aplicado gradiente e borda de contraste */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.03))',
            border: '1px solid var(--color-primary-accent)',
            borderRadius: '16px',
            textAlign: 'left'
          }}>
            <h3 style={{color: 'var(--color-heading)', fontSize: '1.3rem', marginBottom: '1.5rem'}}>Do Conhecimento Tácito ao Sistema Replicável</h3>
            
            <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Após 20 anos liderando receita em empresas como <strong>Google Cloud, Microsoft, Dell, TOTVS, Salesforce, Dynatrace e Keepit</strong>, tornou-se evidente um padrão: empresas tecnicamente superiores travavam por falta de clareza estratégica.
            </p>

            <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              A solução exigia mais que frameworks isolados. Era necessário um <strong>meta-framework</strong> que integrasse:
            </p>

            <ul style={{listStyle: 'none', padding: 0, marginBottom: '1.5rem'}}>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Frameworks Globais de GTM:</strong> Challenger Sale, Strategic Narrative, Category Design, Positioning (April Dunford), Jobs-to-be-Done</span>
              </li>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Neurociência Aplicada:</strong> Arquitetura de decisão humana, redução de fricção cognitiva, ativação de Sistema 1 vs Sistema 2</span>
              </li>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Andragogia:</strong> Como adultos aprendem, processam informação complexa e tomam decisões em contextos corporativos</span>
              </li>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Orquestração de Escala:</strong> Science of Scaling, Founder-Led Growth, Revenue Predictability, Dual-Track Revenue</span>
              </li>
            </ul>

            <p style={{lineHeight: '1.8', fontWeight: 500, color: 'var(--color-heading)'}}>
              O resultado: <strong>Cortex B2B™</strong> — um sistema de inteligência que diagnostica negócios B2B complexos com a profundidade de 20 anos de experiência, mas em 10 minutos.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* EVOLUÇÃO */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="section-title">De Ferramenta Interna a Inteligência Escalável</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="evolution-timeline">
              <div className="timeline-phase">
                <div className="timeline-marker">Fase 1</div>
                <div className="timeline-content">
                  <h4>Nascimento (2023)</h4>
                  <p>Criado para servir clientes da Synapse B2B. Foco: diagnóstico de Go-To-Market para empresas tecnicamente complexas.</p>
                </div>
              </div>

              <div className="timeline-phase">
                <div className="timeline-marker">Fase 2</div>
                <div className="timeline-content">
                  <h4>Expansão (2024)</h4>
                  <p>Upgrades permitiram diagnóstico 360º além de GTM: análise financeira, maturidade operacional, arquitetura de escala, economia de valor.</p>
                </div>
              </div>

              <div className="timeline-phase">
                <div className="timeline-marker">Fase 3</div>
                <div className="timeline-content">
                  <h4>Presente (2025)</h4>
                  <p>Sistema de inteligência aplicável a qualquer negócio B2B: empresas em platô de crescimento, startups buscando aceleração, organizações diversificando canais de receita.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* O PROBLEMA */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Problema que Resolvemos</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 3rem'}}>
            Diagnóstico estratégico não deveria exigir 5-7 horas de trabalho artesanal por negócio.
          </p>
          
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Análise Manual Consome Tempo</h3>
              <p>Ler pitch decks, cruzar dados financeiros, extrair métricas, estruturar insights. 5-7 horas por análise. Não escala.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Expertise Não Replica</h3>
              <p>Só quem tem 20+ anos de experiência identifica gaps críticos rapidamente. Junior não vê. IA genérica também não.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Sem Framework é Opinião</h3>
              <p>Sem metodologia proprietária, cada consultor analisa diferente. Resultado inconsistente, não replicável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* COMO FUNCIONA */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Como o Cortex B2B™ Opera</h2>
            <p className="lead-text">Meta-framework + IA especializada = Diagnóstico 360º com profundidade de 20 anos de experiência.</p>
          </div>

          <div className="cortex-process">
            <div className="cortex-step">
              <div className="cortex-step-number">1</div>
              <div className="cortex-step-content">
                <h3>Ingestão de Dados</h3>
                <p>Upload de pitch deck, DRE, fluxo de caixa, apresentações comerciais, métricas operacionais (qualquer combinação disponível).</p>
              </div>
            </div>

            <div className="cortex-step">
              <div className="cortex-step-number">2</div>
              <div className="cortex-step-content">
                <h3>Processamento Multi-Camada</h3>
                <p>Sistema aplica 4 lentes analíticas simultaneamente: Engenharia de GTM, Arquitetura de Decisão, Orquestração de Escala, Economia de Valor.</p>
              </div>
            </div>

            <div className="cortex-step">
              <div className="cortex-step-number">3</div>
              <div className="cortex-step-content">
                <h3>Diagnóstico Estruturado</h3>
                <p>Relatório em 4 blocos: Diagnóstico de Maturidade, Mapa de Recomendação Priorizado, Blueprint Estratégico, Roteiro 90 Dias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* AS 4 LENTES */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">As 4 Lentes Analíticas do Cortex</h2>
            <p className="lead-text">Cada negócio é analisado sob múltiplas perspectivas integradas simultaneamente.</p>
          </div>

          <div className="pillar-grid-revolutionary">
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Target size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 1: Engenharia de GTM</h3>
                <p className="pillar-card-description">Avalia clareza de valor, ICP, proposta de valor, canais de aquisição, modelo de vendas. Identifica gaps estruturais no motor comercial. Base: Challenger Sale, Strategic Narrative, Category Design.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Brain size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 2: Arquitetura de Decisão</h3>
                <p className="pillar-card-description">Analisa como a narrativa atual facilita ou trava a decisão do comprador. Identifica objeções não resolvidas e fricção cognitiva. Base: Neurociência Aplicada, Jobs-to-be-Done, Buyer Enablement.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <TrendingUp size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 3: Orquestração de Escala</h3>
                <p className="pillar-card-description">Avalia maturidade operacional, governança financeira, dependência de founder, concentração de clientes. Define próxima fase de crescimento. Base: Science of Scaling, Founder-Led Growth, Dual-Track Revenue.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Zap size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 4: Economia de Valor</h3>
                <p className="pillar-card-description">Valida modelo de precificação, analisa captura de valor, identifica oportunidades de upsell/cross-sell não exploradas. Base: Value-Based Pricing, Customer Lifetime Value Optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* O RESULTADO */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado: Diagnóstico 360º Acionável</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 2rem'}}>
            Não é opinião. Não é checklist genérico. É análise estruturada sob 4 lentes com recomendações priorizadas por impacto.
          </p>

          {/* AJUSTE DE PADRÃO: Aplicado gradiente e borda de contraste */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.02))',
            border: '1px solid var(--color-primary-accent)',
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
                  Estágio atual do negócio sob 4 lentes + Gaps críticos priorizados por severidade e urgência
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 2: Mapa de Recomendação</strong><br/>
                  Qual frente ativar primeiro (GTM completo, Sprint de Validação, CRO fracionado, Plataforma de Aceleração) com justificativa técnica e matriz de impacto
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 3: Blueprint Estratégico</strong><br/>
                  ICP refinado + Proposta de valor otimizada + Canais de aquisição validados + Modelo de precificação baseado em valor (não em custo)
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 4: Roteiro 90 Dias</strong><br/>
                  Ações priorizadas por impacto + Métricas de validação + KPIs de sucesso (objetivos tangíveis, não aspiracionais)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CASOS DE USO */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Casos de Uso Ideais</h2>
          <p className="lead-text" style={{marginBottom: '3rem'}}>O Cortex B2B™ foi projetado para três cenários de alta complexidade estratégica.</p>

          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title">Empresas em Platô de Crescimento</h3>
              <p>Receita estagnou há 2-3 trimestres. Fórmula que funcionou até aqui não funciona mais. Precisa identificar qual alavanca puxar sem queimar caixa testando hipóteses aleatórias.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title">Startups Buscando Aceleração</h3>
              <p>Product-market fit validado, mas crescimento é errático. Ciclo de vendas longo, CAC alto, narrativa confusa. Precisa de clareza estratégica antes de escalar esforço comercial.</p>
            </div>

            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title">Diversificação de Canais de Receita</h3>
              <p>Dependência excessiva de um canal ou segmento. Quer validar novos ICPs, testar novos canais, explorar modelos adjacentes. Precisa de diagnóstico rápido de viabilidade antes de comprometer recursos.</p>
            </div>
          </div>

          {/* Bloco 'Também Aplicável' - Estilo de citação mantido (não é um card padrão) */}
          <div style={{
            maxWidth: '800px',
            margin: '4rem auto 0',
            padding: '2rem',
            background: 'rgba(0, 150, 132, 0.05)',
            borderLeft: '4px solid var(--color-primary)',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem'}}>Também Aplicável em:</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Advisory & Consultoria:</strong> Economiza 20-30h/mês em análise manual de pitch decks</li>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Ecossistemas de Investimento:</strong> Triagem estruturada de dezenas de startups em escala</li>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Founders & C-Level:</strong> Segunda opinião estratégica estruturada em 15 minutos (self-service)</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CTA FINAL */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            20 Anos de Experiência. 10 Minutos de Diagnóstico.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Se você gasta 5-7 horas analisando negócios manualmente ou está em platô de crescimento sem clareza sobre qual alavanca puxar, o Cortex B2B™ foi feito para você.
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

      {/* CSS */}
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
          /* AJUSTE DE PADRÃO: Aplicado gradiente e borda de contraste */
          background: linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.02));
          border: 1px solid var(--color-primary-accent);
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

        .evolution-timeline {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .timeline-phase {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2rem;
          align-items: start;
        }
        .timeline-marker {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          text-align: center;
        }
        .timeline-content {
          padding: 1.5rem;
          /* AJUSTE DE PADRÃO: Aplicado gradiente e borda de contraste */
          background: linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.02));
          border: 1px solid var(--color-primary-accent);
          border-radius: 12px;
        }
        .timeline-content h4 {
          color: var(--color-heading);
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }
        .timeline-content p {
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .cortex-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .timeline-phase {
            grid-template-columns: 1fr;
          }
          .timeline-marker {
            width: fit-content;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}