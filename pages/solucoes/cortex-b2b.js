// pages/solucoes/cortex-b2b.js

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap, TrendingUp, CheckCircle2, Network } from 'lucide-react';

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
        <meta name="description" content="Meta-framework proprietário que reúne os maiores frameworks globais de GTM e aceleração de receita + 20 anos de experiência em ecossistemas B2B para diagnóstico 360º de negócios complexos." />
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
            Meta-framework de inteligência estratégica que condensa 20 anos de experiência em ecossistemas B2B + maiores frameworks globais de GTM em diagnóstico 360º de 10 minutos.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Gênese do Cortex                                                     */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="section-title">A Gênese do Cortex B2B™</h2>
            <p className="lead-text" style={{maxWidth: '800px', margin: '0 auto'}}>
              Nasceu da necessidade de codificar duas décadas de experiência operacional em ecossistemas B2B de alta complexidade.
            </p>
          </div>

          {/* Bloco de Gênese - Padrão de destaque */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.03))',
            border: '1px solid var(--color-primary-accent)', 
            borderRadius: '16px',
            textAlign: 'center' // AJUSTE 5: Centralizado
          }}>
            <h3 style={{color: 'var(--color-heading)', fontSize: '1.3rem', marginBottom: '1.5rem'}}>Do Conhecimento Tácito ao Sistema Replicável</h3>
            
            {/* AJUSTE 2: Copy Ecossistemas */}
            <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Após 20 anos liderando receita em Ecossistemas como <strong>TOTVS, Microsoft, Salesforce, Dell, Google e Keepit</strong>, tornou-se evidente um padrão: empresas tecnicamente superiores travavam por falta de clareza estratégica.
            </p>

            <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
              A solução exigia mais que frameworks isolados. Era necessário um <strong>meta-framework</strong> que integrasse:
            </p>

            {/* AJUSTE 5: Lista centralizada (bloco) mas texto alinhado à esquerda (interno) */}
            <ul style={{
              listStyle: 'none', 
              padding: 0, 
              marginBottom: '1.5rem', 
              display: 'inline-block', 
              textAlign: 'left'
            }}>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Maiores frameworks globais</strong> de Go-To-Market, aceleração de receita e gestão de negócios B2B</span>
              </li>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Neurociência aplicada</strong> ao comportamento de compra e arquitetura de decisão em ambientes corporativos</span>
              </li>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Andragogia empresarial</strong> sobre como adultos aprendem, processam informação complexa e tomam decisões em contextos B2B</span>
              </li>
              <li style={{display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <span><strong>Experiência operacional</strong> acumulada em construção e escala de motores de receita em múltiplos segmentos e geografias</span>
              </li>
            </ul>

            {/* AJUSTE 1: Copy decodifica */}
            <p style={{lineHeight: '1.8', fontWeight: 500, color: 'var(--color-heading)'}}>
              O resultado: <strong>Cortex B2B™</strong> — um sistema de inteligência que decodifica negócios B2B complexos com a profundidade de 20 anos de experiência, mas em 10 minutos.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Evolução (Timeline)                                                  */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="section-title">De Ferramenta Interna a Inteligência Escalável</h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="evolution-timeline">
              {/* Fase 1: Origem */}
              <div className="timeline-phase">
                <div className="timeline-marker">Origem</div>
                <div className="timeline-content">
                  <h4>Ferramenta Proprietária Interna</h4>
                  <p>Criado inicialmente para servir clientes da Synapse B2B. Foco primário: diagnóstico de Go-To-Market para empresas tecnicamente complexas que precisavam traduzir potencial em receita previsível.</p>
                </div>
              </div>

              {/* Fase 2: Expansão */}
              <div className="timeline-phase">
                <div className="timeline-marker">Expansão</div>
                <div className="timeline-content">
                  <h4>Diagnóstico 360º Multi-Dimensional</h4>
                  <p>Evolução para análise completa além de GTM: arquitetura financeira, maturidade operacional, dependências sistêmicas, economia de valor, capital relacional e ecossistema de parceiros.</p>
                </div>
              </div>

              {/* Fase 3: Presente */}
              <div className="timeline-phase">
                <div className="timeline-marker">Presente</div>
                <div className="timeline-content">
                  <h4>Sistema de Inteligência Universal B2B</h4>
                  <p>Aplicável a qualquer negócio B2B: empresas em platô de crescimento, startups buscando aceleração, organizações diversificando canais de receita, ecossistemas de investimento validando teses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema                                                           */}
      {/* ====================================================================== */}
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

      {/* ====================================================================== */}
      {/* Como Funciona                                                        */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Como o Cortex B2B™ Opera</h2>
            <p className="lead-text">Meta-framework + IA especializada = Diagnóstico 360º com profundidade de 20 anos de experiência.</p>
          </div>

          <div className="cortex-process">
            {/* Passo 1 */}
            <div className="cortex-step">
              <div className="cortex-step-number">1</div>
              <div className="cortex-step-content">
                <h3>Ingestão de Inteligência de Negócio</h3>
                <p>Upload de materiais estratégicos: pitch deck, DRE, fluxo de caixa, apresentações comerciais, métricas operacionais, propostas de valor, análises de concorrência, relatórios de pipeline, contratos-tipo, playbooks de vendas, roadmaps de produto — qualquer combinação disponível que enriqueça a base de conhecimento.</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="cortex-step">
              <div className="cortex-step-number">2</div>
              <div className="cortex-step-content">
                <h3>Processamento Multi-Dimensional</h3>
                <p>Sistema aplica 5 lentes analíticas simultaneamente: Engenharia de GTM, Arquitetura de Decisão, Orquestração de Escala, Economia de Valor, Ecossistema & Capital Relacional.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="cortex-step">
              <div className="cortex-step-number">3</div>
              <div className="cortex-step-content">
                <h3>Diagnóstico Estruturado 360º</h3>
                {/* AJUSTE 3: Copy Relatório 4 blocos */}
                <p>Relatório em 4 blocos: Diagnóstico de Maturidade, Mapa de Recomendação Priorizado, Blueprint Estratégico, Plano de Ações priorizadas por impacto + Métricas de validação + KPIs de sucesso + Quick wins para gerar momentum (objetivos tangíveis, não aspiracionais)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* As 5 Lentes                                                          */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">As 5 Lentes Analíticas do Cortex</h2>
            <p className="lead-text">Cada negócio é analisado sob múltiplas perspectivas integradas simultaneamente para visão 360º completa.</p>
          </div>

          {/* Grid de 5 colunas */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {/* Lente 1 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Target size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 1: Engenharia de GTM</h3>
                <p className="pillar-card-description">Avalia clareza de valor, ICP, proposta de valor, canais de aquisição, modelo de vendas, arquitetura de pricing. Identifica gaps estruturais no motor comercial.</p>
              </div>
            </div>

            {/* Lente 2 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Brain size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 2: Arquitetura de Decisão</h3>
                <p className="pillar-card-description">Analisa como a narrativa atual facilita ou trava a decisão do comprador. Identifica objeções não resolvidas, fricção cognitiva e gaps de buyer enablement.</p>
              </div>
            </div>

            {/* Lente 3 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <TrendingUp size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 3: Orquestração de Escala</h3>
                <p className="pillar-card-description">Avalia maturidade operacional, governança financeira, dependência de founder, concentração de clientes. Define capacidade de escala e próxima fase de crescimento.</p>
              </div>
            </div>

            {/* Lente 4 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Zap size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 4: Economia de Valor</h3>
                <p className="pillar-card-description">Valida modelo de precificação, analisa captura de valor vs entrega, identifica oportunidades de expansão (upsell/cross-sell) não exploradas e otimização de LTV.</p>
              </div>
            </div>

            {/* Lente 5 (Nova) */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Network size={28} />
                </div>
                <h3 className="pillar-card-title">Lente 5: Ecossistema & Capital Relacional</h3>
                <p className="pillar-card-description">Mapeia qualidade de relacionamentos estratégicos, maturidade de parcerias e canais indiretos, dependência de key accounts, capital social acumulado e estratégia de expansão via ecossistema.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Resultado                                                          */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado: Diagnóstico 360º Acionável</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 2rem'}}>
            Não é opinião. Não é checklist genérico. É análise estruturada sob 5 lentes com recomendações priorizadas por impacto.
          </p>

          {/* Bloco de Entregáveis - Padrão de destaque */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.1), rgba(56, 197, 177, 0.05))',
            border: '1px solid var(--color-primary-accent)',
            borderRadius: '16px',
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
            textAlign: 'center' // AJUSTE 5: Centralizado
          }}>
            <h3 style={{color: 'var(--color-heading)', marginBottom: '2rem', textAlign: 'center'}}>O Que Você Recebe:</h3>
            {/* AJUSTE 5: Lista centralizada (bloco) mas texto alinhado à esquerda (interno) */}
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              display: 'inline-block', 
              textAlign: 'left' 
            }}>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 1: Diagnóstico de Maturidade 360º</strong><br/>
                  Estágio atual do negócio sob 5 lentes + Gaps críticos priorizados por severidade, urgência e impacto potencial
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 2: Mapa de Recomendação Priorizado</strong><br/>
                  {/* AJUSTE 4: Copy Mapa de Recomendação */}
                  Qual frente ativar primeiro (Sprint de Validação, GTM completo, CRO fracionado, Plataforma de Aceleração, Ativação de Ecossistema ou Frente Personalizada) com justificativa técnica e matriz de impacto vs esforço
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 3: Blueprint Estratégico</strong><br/>
                  ICP refinado + Proposta de valor otimizada + Canais de aquisição validados + Modelo de precificação baseado em valor + Estratégia de parcerias e ecossistema
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <CheckCircle2 size={20} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong>Bloco 4: Roteiro 90 Dias</strong><br/>
                  Ações priorizadas por impacto + Métricas de validação + KPIs de sucesso + Quick wins para gerar momentum (objetivos tangíveis, não aspiracionais)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Casos de Uso Ideais                                                  */}
      {/* ====================================================================== */}
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

          {/* Bloco "Também Aplicável" */}
          <div style={{
            maxWidth: '800px',
            margin: '4rem auto 0',
            padding: '2rem',
            background: 'rgba(0, 150, 132, 0.05)',
            borderLeft: '4px solid var(--color-primary)',
            borderRadius: '8px',
            textAlign: 'center' // AJUSTE 5: Centralizado
          }}>
            <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem'}}>Também Aplicável em:</h4>
            {/* AJUSTE 5: Lista centralizada (bloco) mas texto alinhado à esquerda (interno) */}
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'inline-block', 
              textAlign: 'left' 
            }}>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Advisory & Consultoria:</strong> Economiza 20-30h/mês em análise manual de pitch decks e diagnósticos estratégicos</li>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Ecossistemas de Investimento:</strong> Triagem estruturada de dezenas de startups com consistência metodológica</li>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Founders & C-Level:</strong> Segunda opinião estratégica estruturada para validação de hipóteses críticas</li>
            </ul>
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
            20 Anos de Experiência. 5 Lentes. 10 Minutos de Diagnóstico.
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
          /* AJUSTE 5: Centralizado (desktop) */
          display: flex;
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
          gap: 2rem;
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

        /* Estilos da Nova Seção: Evolução */
        .evolution-timeline {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .timeline-phase {
          display: grid;
          grid-template-columns: 120px 1fr;
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
          background: linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.02));
          border: 1px solid var(--color-primary-accent);
          border-radius: 12px;
          text-align: center; /* AJUSTE 5: Centralizado */
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
             /* Estilos de centralização movidos para desktop */
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