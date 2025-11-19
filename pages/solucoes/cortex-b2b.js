// pages/solucoes/cortex-b2b.js
// Versão Final: Sem Preços + Design Premium Unificado + Alinhamento Central

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap, TrendingUp, CheckCircle2, Network, Layers, GitBranch, ShieldCheck } from 'lucide-react';

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

  // Estilo Premium (Glassmorphism) com Hover
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
        <title>Cortex B2B™ | O Raio-X do seu Motor de Receita B2B | Synapse B2B</title>
        <meta name="description" content="O Cortex B2B™ é nosso meta-framework proprietário de diagnóstico. Decodifica 20 anos de experiência operacional em um método acionável." />
      </Head>

      {/* Hero Section */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), #000)'}}></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Brain size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="section-title">O Raio-X do seu Motor de Receita B2B</h1>
          <p className="hero-subheadline wider-on-desktop" style={{textAlign: 'center'}}>
            O Cortex B2B™ é nosso meta-framework proprietário de diagnóstico. Ele decodifica 20 anos de experiência operacional em um <strong>método acionável</strong> que mostra *exatamente* onde está o gargalo e qual alavanca puxar.
          </p>
          <div className="hero-ctas" style={{justifyContent: 'center'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Quero meu Diagnóstico Cortex B2B</span> {/* Preço Removido */}
              <ArrowRight size={20} />
            </Link>
          </div>
           <p className="cta-support-text" style={{opacity: 0.9, fontSize: '1rem', marginTop: '1.5rem', textAlign: 'center'}}>
            O primeiro passo para parar de improvisar. {/* Texto ajustado */}
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* O Problema */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Você não tem um "problema de vendas". <br/>Você tem um "problema de sistema".</h2>
          <p className="lead-text" style={{maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center'}}>
            A maioria das empresas B2B tenta consertar *sintomas* (pipeline vazio, CAC alto) com *táticas* (mais SDRs, mais anúncios). O Cortex B2B™ foi criado para encontrar a *causa-raiz* sistêmica.
          </p>

          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            
            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Expertise Não Escala</h3>
              <p style={{textAlign: 'center'}}>A expertise de 20 anos de um CRO sênior não pode ser replicada para toda a equipe. O Cortex B2B™ codifica essa expertise em um <strong>método que escala</strong>.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Táticas Isoladas Queimam Caixa</h3>
              <p style={{textAlign: 'center'}}>Contratar SDRs sem um GTM claro ou investir em anúncios sem uma narrativa validada é queimar caixa. O Cortex B2B™ <strong>estrutura o método</strong> *antes* de escalar o esforço.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Diagnóstico Genérico é Inútil</h3>
              <p style={{textAlign: 'center'}}>Um relatório "padrão" não resolve um problema complexo. O Cortex B2B™ é um meta-framework que se adapta à sua operação e entrega um plano acionável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Como Funciona */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Como o Cortex B2B™ Opera</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Inteligência Artificial especializada + Meta-Framework proprietário = Diagnóstico 360º.</p>
          </div>

          <div className="cortex-process" style={{display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto'}}>
            <div className="cortex-step glass-card-hover" style={cardStyle}>
              <div className="cortex-step-number" style={{margin: '0 auto 1rem'}}>1</div>
              <div className="cortex-step-content">
                <h3 style={{textAlign: 'center'}}>Ingestão de Inteligência</h3>
                <p style={{textAlign: 'center'}}>Você faz o upload dos seus materiais estratégicos: pitch deck, DRE, playbooks de vendas, roadmaps de produto e qualquer dado disponível que enriqueça a análise.</p>
              </div>
            </div>

            <div className="cortex-step glass-card-hover" style={cardStyle}>
              <div className="cortex-step-number" style={{margin: '0 auto 1rem'}}>2</div>
              <div className="cortex-step-content">
                <h3 style={{textAlign: 'center'}}>Processamento Multi-Dimensional</h3>
                <p style={{textAlign: 'center'}}>Nosso sistema aplica as 5 lentes analíticas (GTM, Arquitetura de Decisão, Escala, Valor e Ecossistema) simultaneamente para encontrar os gargalos e as oportunidades ocultas.</p>
              </div>
            </div>

            <div className="cortex-step glass-card-hover" style={cardStyle}>
              <div className="cortex-step-number" style={{margin: '0 auto 1rem'}}>3</div>
              <div className="cortex-step-content">
                <h3 style={{textAlign: 'center'}}>Geração do Raio-X</h3>
                <p style={{textAlign: 'center'}}><strong>O Cortex gera</strong> o "Raio-X": um blueprint acionável em 4 blocos que entrega clareza imediata sobre o que precisa ser feito, em qual ordem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>
      
      {/* O Raio-X */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Raio-X: O Que Você Recebe</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center'}}>
            Um blueprint acionável, não um PDF teórico. Este é o seu plano de engenharia.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            
            <div className="glass-card-hover" style={cardStyle}>
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} color="var(--color-primary)"/></div>
                <strong style={{color: 'var(--color-heading)', fontSize: '1.3rem', display: 'block', marginBottom: '1rem'}}>Bloco 1: Diagnóstico de Maturidade 360º</strong>
                <p style={{fontSize: '1rem', color: 'var(--color-text)', textAlign: 'center'}}>Estágio atual do negócio sob 5 lentes + Gaps críticos priorizados por severidade, urgência e impacto.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} color="var(--color-primary)"/></div>
                <strong style={{color: 'var(--color-heading)', fontSize: '1.3rem', display: 'block', marginBottom: '1rem'}}>Bloco 2: Mapa de Recomendação Priorizado</strong>
                <p style={{fontSize: '1rem', color: 'var(--color-text)', textAlign: 'center'}}>Qual frente ativar primeiro (Sprint, GTM, CRO fracionado, etc.) com justificativa técnica e matriz de impacto vs. esforço.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} color="var(--color-primary)"/></div>
                <strong style={{color: 'var(--color-heading)', fontSize: '1.3rem', display: 'block', marginBottom: '1rem'}}>Bloco 3: Blueprint Estratégico</strong>
                <p style={{fontSize: '1rem', color: 'var(--color-text)', textAlign: 'center'}}>ICP refinado, Proposta de Valor otimizada, Canais validados, Modelo de precificação baseado em valor e Estratégia de ecossistema.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} color="var(--color-primary)"/></div>
                <strong style={{color: 'var(--color-heading)', fontSize: '1.3rem', display: 'block', marginBottom: '1rem'}}>Bloco 4: Roteiro 90 Dias</strong>
                <p style={{fontSize: '1rem', color: 'var(--color-text)', textAlign: 'center'}}>Ações priorizadas por impacto, Métricas de validação, KPIs de sucesso e Quick wins para gerar momentum.</p>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* As 5 Lentes */}
      <section className="section-with-gradient-glow section-pillars-revolutionary">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">As 5 Lentes Analíticas do Cortex</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Cada negócio é analisado sob múltiplas perspectivas integradas para uma visão 360º.</p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'stretch', gap: '2rem'}}>
            
            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Target size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Lente 1: Engenharia de GTM</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Desenhamos sua <strong>categoria</strong> de mercado e seu <strong>posicionamento</strong>. Aplicamos modelos estratégicos para garantir que o mercado veja sua solução não como "melhor", mas como "a única".</p>
              </div>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Brain size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Lente 2: Arquitetura de Decisão</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Traduzimos sua complexidade técnica em narrativa. Usamos <strong>Neurociência Aplicada</strong> e modelos narrativos para criar <strong>urgência</strong> e focar na "dor invisível" (Aversão à Perda).</p>
              </div>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><GitBranch size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Lente 3: Orquestração de Escala</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Instalamos o "motor" de receita. Implementamos uma arquitetura de receita (RevOps) e frameworks de qualificação de elite para criar um <strong>método de vendas replicável que funciona sem depender de pessoas específicas.</strong></p>
              </div>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Layers size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Lente 4: Economia de Valor</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Construímos os ativos que provam seu valor <strong>antes</strong> da venda. Usamos <strong>modelos de habilitação do comprador</strong> para criar as ferramentas (Calculadoras de ROI, Simuladores) que aceleram a decisão.</p>
              </div>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><ShieldCheck size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Lente 5: Ecossistema & "Skin in the Game"</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Usamos nossa experiência operacional para validar a teoria na prática. O <strong>Case AORKIA</strong> é a prova definitiva: o próprio fundador aplicou o Cortex B2B™ no próprio negócio, validando o método em 45 dias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Casos de Uso */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Casos de Uso Ideais</h2>
          <p className="lead-text" style={{marginBottom: '3rem', textAlign: 'center'}}>O Cortex B2B™ foi projetado para três cenários de alta complexidade estratégica.</p>

          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            <div className="glass-card-hover" style={cardStyle}>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Empresas em Platô de Crescimento</h3>
              <p style={{textAlign: 'center'}}>Receita estagnou há 2-3 trimestres. Fórmula que funcionou até aqui não funciona mais. Precisa identificar qual alavanca puxar sem queimar caixa testando hipóteses aleatórias.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Startups Buscando Aceleração</h3>
              <p style={{textAlign: 'center'}}>Product-market fit validado, mas crescimento é errático. Ciclo de vendas longo, CAC alto, narrativa confusa. Precisa de clareza estratégica antes de escalar esforço comercial.</p>
            </div>

            <div className="glass-card-hover" style={cardStyle}>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Diversificação de Canais de Receita</h3>
              <p style={{textAlign: 'center'}}>Dependência excessiva de um canal ou segmento. Quer validar novos ICPs, testar novos canais, explorar modelos adjacentes. Precisa de diagnóstico rápido de viabilidade antes de comprometer recursos.</p>
            </div>
          </div>

          {/* Bloco "Também Aplicável" */}
          <div style={{
            maxWidth: '800px',
            margin: '4rem auto 0',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{color: 'var(--color-heading)', marginBottom: '1.5rem'}}>Também Aplicável em:</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <li>→ <strong>Founders & C-Level:</strong> Segunda opinião estratégica estruturada para validação de hipóteses críticas.</li>
              
              <li>
                → <strong>Ecossistemas de Investimento (EM BREVE):</strong> Estamos finalizando o modelo de licenciamento do Cortex B2B™ para VCs, Aceleradoras e Consultorias que precisam analisar <strong>grandes volumes</strong> de empresas (como o caso da investidor.vc) com um método de diagnóstico padronizado e escalável.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CTA Final */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Pare de Adivinhar. Comece a Aplicar Engenharia.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            O Cortex B2B™ é o primeiro passo para parar de improvisar. É o "raio-X" que permite ao engenheiro trabalhar.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Quero meu Diagnóstico Cortex B2B</span> {/* Preço Removido */}
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>
            Você recebe o diagnóstico 360º completo para executar por conta própria ou conosco. A decisão é sua.
          </p>
        </div>
      </section>

      {/* CSS Global para o Hover Effect (Importante) */}
      <style jsx global>{`
        .glass-card-hover {
           transition: all 0.4s ease;
           border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card-hover:hover {
           transform: translateY(-8px);
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
      `}</style>
    </>
  );
}