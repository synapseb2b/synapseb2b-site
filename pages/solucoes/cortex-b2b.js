// pages/solucoes/cortex-b2b.js
// Copy refinada para focar no cliente, no sistema (não nos ingredientes) e na nova oferta de alto volume.

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap, TrendingUp, CheckCircle2, Network, Layers, GitBranch, ShieldCheck } from 'lucide-react'; // Ícones atualizados

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
        <title>Cortex B2B™ | O Raio-X do seu Motor de Receita B2B | Synapse B2B</title>
        <meta name="description" content="O Cortex B2B™ é nosso meta-framework proprietário de diagnóstico. Decodifica 20 anos de experiência operacional em um blueprint acionável." />
      </Head>

      {/* ====================================================================== */}
      {/* Seção 1: Hero Section                                                */}
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
          <h1 className="section-title">O Raio-X do seu Motor de Receita B2B</h1>
          <p className="hero-subheadline wider-on-desktop">
            O Cortex B2B™ é nosso meta-framework proprietário de diagnóstico. Ele decodifica 20 anos de experiência operacional em um blueprint acionável que mostra *exatamente* onde está o gargalo e qual alavanca puxar.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Quero meu Diagnóstico Cortex B2B (R$ 2.100)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
           <p className="cta-support-text" style={{opacity: 0.9, fontSize: '1rem', marginTop: '1.5rem'}}>
            Pagamento único. O primeiro passo para parar de improvisar.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 2: O Problema que Resolvemos (Tática vs. Sistema)              */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Você não tem um "problema de vendas". <br/>Você tem um "problema de sistema".</h2>
          <p className="lead-text" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>
            A maioria das empresas B2B tenta consertar *sintomas* (pipeline vazio, CAC alto) com *táticas* (mais SDRs, mais anúncios). O Cortex B2B™ foi criado para encontrar a *causa-raiz* sistêmica.
          </p>

          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Expertise Não Escala</h3>
              <p>A expertise de 20 anos de um CRO sênior não pode ser replicada para toda a equipe. O Cortex B2B™ codifica essa expertise em um sistema que escala.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Táticas Isoladas Queimam Caixa</h3>
              <p>Contratar SDRs sem um GTM claro ou investir em anúncios sem uma narrativa validada é queimar caixa. O Cortex B2B™ constrói o sistema *antes* de escalar o esforço.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Diagnóstico Genérico é Inútil</h3>
              <p>Um relatório "padrão" não resolve um problema complexo. O Cortex B2B™ é um meta-framework que se adapta à sua operação e entrega um plano acionável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 3: Como Funciona (O Processo)                                  */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Como o Cortex B2B™ Opera</h2>
            <p className="lead-text">Inteligência Artificial especializada + Meta-Framework proprietário = Diagnóstico 360º.</p>
          </div>

          <div className="cortex-process">
            {/* Passo 1 */}
            <div className="cortex-step">
              <div className="cortex-step-number">1</div>
              <div className="cortex-step-content">
                <h3>Ingestão de Inteligência</h3>
                <p>Você faz o upload dos seus materiais estratégicos: pitch deck, DRE, playbooks de vendas, roadmaps de produto e qualquer dado disponível que enriqueça a análise.</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="cortex-step">
              <div className="cortex-step-number">2</div>
              <div className="cortex-step-content">
                <h3>Processamento Multi-Dimensional</h3>
                <p>Nosso sistema aplica as 5 lentes analíticas (GTM, Arquitetura de Decisão, Escala, Valor e Ecossistema) simultaneamente para encontrar os gargalos e as oportunidades ocultas.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="cortex-step">
              <div className="cortex-step-number">3</div>
              <div className="cortex-step-content">
                <h3>Geração do Raio-X</h3>
                <p>O sistema gera o "Raio-X": um blueprint acionável em 4 blocos que entrega clareza imediata sobre o que precisa ser feito, em qual ordem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>
      
      {/* ====================================================================== */}
      {/* Seção 4: O Raio-X (O Que Você Recebe)                                */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Raio-X: O Que Você Recebe</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 2rem'}}>
            Um blueprint acionável, não um PDF teórico. Este é o seu plano de engenharia.
          </p>

          <div style={{
            maxWidth: '900px',
            margin: '3rem auto',
            textAlign: 'center'
          }}>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              display: 'inline-block', 
              textAlign: 'left' 
            }}>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', background: 'var(--color-card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                <CheckCircle2 size={24} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong style={{color: 'var(--color-heading)', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem'}}>Bloco 1: Diagnóstico de Maturidade 360º</strong>
                  Estágio atual do negócio sob 5 lentes + Gaps críticos priorizados por severidade, urgência e impacto.
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', background: 'var(--color-card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                <CheckCircle2 size={24} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong style={{color: 'var(--color-heading)', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem'}}>Bloco 2: Mapa de Recomendação Priorizado</strong>
                  Qual frente ativar primeiro (Sprint, GTM, CRO fracionado, etc.) com justificativa técnica e matriz de impacto vs. esforço.
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', background: 'var(--color-card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                <CheckCircle2 size={24} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong style={{color: 'var(--color-heading)', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem'}}>Bloco 3: Blueprint Estratégico</strong>
                  ICP refinado, Proposta de Valor otimizada, Canais validados, Modelo de precificação baseado em valor e Estratégia de ecossistema.
                </div>
              </li>
              <li style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--color-card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                <CheckCircle2 size={24} style={{color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px'}} />
                <div>
                  <strong style={{color: 'var(--color-heading)', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem'}}>Bloco 4: Roteiro 90 Dias</strong>
                  Ações priorizadas por impacto, Métricas de validação, KPIs de sucesso e Quick wins para gerar momentum.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 5: As 5 Lentes Analíticas                                      */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow section-pillars-revolutionary">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">As 5 Lentes Analíticas do Cortex</h2>
            <p className="lead-text">Cada negócio é analisado sob múltiplas perspectivas integradas para uma visão 360º.</p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', alignItems: 'stretch'}}>
            
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper"><Target size={28} /></div>
                <h3 className="pillar-card-title">Lente 1: Engenharia de GTM</h3>
                <p className="pillar-card-description">Desenhamos sua <strong>categoria</strong> de mercado e seu <strong>posicionamento</strong>. Aplicamos modelos estratégicos para garantir que o mercado veja sua solução não como "melhor", mas como "a única".</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper"><Brain size={28} /></div>
                <h3 className="pillar-card-title">Lente 2: Arquitetura de Decisão</h3>
                <p className="pillar-card-description">Traduzimos sua complexidade técnica em narrativa. Usamos <strong>Neurociência Aplicada</strong> e modelos narrativos para criar <strong>urgência</strong> e focar na "dor invisível" (Aversão à Perda).</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper"><GitBranch size={28} /></div>
                <h3 className="pillar-card-title">Lente 3: Orquestração de Escala</h3>
                <p className="pillar-card-description">Instalamos o "motor" de receita. Implementamos uma <strong>arquitetura de receita (RevOps)</strong> e <strong>frameworks de qualificação de elite</strong> para criar um playbook de vendas que funciona sem depender de "vendedores-heróis".</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper"><Layers size={28} /></div>
                <h3 className="pillar-card-title">Lente 4: Economia de Valor</h3>
                <p className="pillar-card-description">Construímos os ativos que provam seu valor <strong>antes</strong> da venda. Usamos <strong>modelos de habilitação do comprador</strong> para criar as ferramentas (Calculadoras de ROI, Simuladores) que aceleram a decisão.</p>
              </div>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper"><ShieldCheck size={28} /></div>
                <h3 className="pillar-card-title">Lente 5: Ecossistema & "Skin in the Game"</h3>
                <p className="pillar-card-description">Usamos nossa experiência operacional para validar a teoria na prática. O <strong>Case AORKIA</strong> é a prova definitiva: o próprio fundador aplicou o Cortex B2B™ no próprio negócio, validando o método em 45 dias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 6: Casos de Uso Ideais (COM ATUALIZAÇÃO "EM BREVE")            */}
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

          {/* Bloco "Também Aplicável" (COM ATUALIZAÇÃO ESTRATÉGICA) */}
          <div style={{
            maxWidth: '800px',
            margin: '4rem auto 0',
            padding: '2rem',
            background: 'rgba(0, 0, 0, 0.2)', // Fundo neutro
            borderLeft: '4px solid var(--color-border)',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem'}}>Também Aplicável em:</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'inline-block', 
              textAlign: 'left' 
            }}>
              <li style={{marginBottom: '0.75rem'}}>→ <strong>Founders & C-Level:</strong> Segunda opinião estratégica estruturada para validação de hipóteses críticas.</li>
              
              {/* INFORMAÇÃO ESTRATÉGICA "EM BREVE" INSERIDA AQUI */}
              <li style={{marginBottom: '0.75rem'}}>
                → <strong>Ecossistemas de Investimento (EM BREVE):</strong> Estamos finalizando o modelo de licenciamento do Cortex B2B™ para VCs, Aceleradoras e Consultorias que precisam analisar <strong>grandes volumes</strong> de empresas (como o caso da investidor.vc) com um sistema de diagnóstico padronizado e escalável.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 7: CTA Final                                                   */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Pare de Adivinhar. Comece a Engenheirar.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            O Cortex B2B™ é o primeiro passo para parar de improvisar. É o "raio-X" que permite ao engenheiro trabalhar.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Quero meu Diagnóstico Cortex B2B (R$ 2.100)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem'}}>
            Você recebe o diagnóstico 360º completo para executar por conta própria ou conosco. A decisão é sua.
          </p>
        </div>
      </section>

      {/* CSS Específico da Página (Minimalista, pois usa classes globais) */}
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
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
          gap: 2rem;
          background: var(--color-card-bg); /* Reutilizando a cor do card */
          border: 1px solid var(--color-border); /* Reutilizando a borda */
          border-radius: 12px;
          padding: 2rem;
        }
        .cortex-step-number {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); /* Ajuste no gradiente */
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
        
        /* Ajuste para alinhar cards da Seção 5 (Lentes) */
        .pillar-grid-revolutionary {
          align-items: stretch;
        }
        .pillar-card-revolutionary {
          display: flex;
          flex-direction: column;
        }
        .pillar-card-content {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}