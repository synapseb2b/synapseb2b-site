// pages/solucoes/cortex-b2b.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap, CheckCircle2, Layers, GitBranch, ShieldCheck } from 'lucide-react';

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
        <meta name="description" content="O Cortex B2B™ é nosso meta-framework proprietário de diagnóstico. Decodifica 20 anos de experiência operacional em um método acionável." />
      </Head>

      {/* ====================================================================== */}
      {/* Hero Section (Padronizado)                                           */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
            <Brain size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">O Raio-X do seu Motor de Receita B2B</h1>
          <p className="hero-subheadline lead-text">
            Decodifica 20 anos de experiência B2B em um <strong>método acionável</strong> que mostra *exatamente* onde está o gargalo e qual alavanca puxar.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Quero meu Diagnóstico Cortex B2B</span>
              <ArrowRight size={20} />
            </Link>
          </div>
           <p style={{opacity: 0.9, fontSize: '1rem', marginTop: '1.5rem'}}>
            O primeiro passo para parar de improvisar.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* O Problema                                                           */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Você não tem um "problema de vendas". <br/>Você tem um "problema de método".</h2>
          <p className="lead-text">
            Empresas B2B consertam sintomas (pipeline vazio, CAC alto) com táticas (SDRs, anúncios). O Cortex B2B™ encontra a causa-raiz.
          </p>

          <div className="truths-grid-revolutionary">
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">1. Expertise Não Escala</h3>
              <p>Expertise de 20 anos não pode ser replicada manualmente. O Cortex B2B™ codifica esse conhecimento em um <strong>método que escala</strong>.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">2. Táticas Isoladas Queimam Caixa</h3>
              <p>Contratar SDRs sem GTM claro é queimar caixa. O Cortex B2B™ <strong>estrutura o método</strong> *antes* de escalar esforço.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">3. Diagnóstico Genérico é Inútil</h3>
              <p>Um relatório "padrão" não resolve um problema complexo. O Cortex B2B™ é um meta-framework que se adapta à sua operação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Como Funciona                                                        */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Como o Cortex B2B™ Opera</h2>
          <p className="lead-text">IA especializada + Meta-Framework proprietário = Diagnóstico 360º</p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px', margin: '0 auto'}}>
            
            <div className="glass-card-premium" style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
              <div style={{
                flexShrink: 0, width: '48px', height: '48px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: 'white'
              }}>1</div>
              <div style={{flex: 1, minWidth: '250px'}}>
                <h3>Ingestão de Inteligência</h3>
                <p>Upload de materiais estratégicos: pitch deck, DRE, playbooks, roadmaps e dados relevantes.</p>
              </div>
            </div>

            <div className="glass-card-premium" style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
              <div style={{
                flexShrink: 0, width: '48px', height: '48px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: 'white'
              }}>2</div>
              <div style={{flex: 1, minWidth: '250px'}}>
                <h3>Processamento Multi-Dimensional</h3>
                <p>Aplicamos 5 lentes analíticas simultaneamente: GTM, Arquitetura de Decisão, Escala, Valor e Ecossistema. Resultado: gargalos e oportunidades ocultas mapeados.</p>
              </div>
            </div>

            <div className="glass-card-premium" style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
              <div style={{
                flexShrink: 0, width: '48px', height: '48px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: '700', color: 'white'
              }}>3</div>
              <div style={{flex: 1, minWidth: '250px'}}>
                <h3>Geração do Raio-X</h3>
                <p><strong>O Cortex gera</strong> o "Raio-X": um blueprint acionável em 4 blocos que entrega clareza imediata sobre o que precisa ser feito, em qual ordem.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ====================================================================== */}
      {/* O Raio-X                                                             */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">O Raio-X: O Que Você Recebe</h2>
          <p className="lead-text">Blueprint acionável, não PDF teórico.</p>

          <div className="pillar-grid-revolutionary">
            
            <div className="glass-card-premium">
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} style={{color: 'var(--color-primary)'}}/></div>
                <h3 className="pillar-card-title">Bloco 1: Diagnóstico de Maturidade 360º</h3>
                <p>Estágio atual sob 5 lentes + Gaps priorizados por impacto.</p>
            </div>

            <div className="glass-card-premium">
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} style={{color: 'var(--color-primary)'}}/></div>
                <h3 className="pillar-card-title">Bloco 2: Mapa de Recomendação Priorizado</h3>
                <p>Qual frente ativar primeiro (Sprint, GTM, CRO fracionado, etc.) com justificativa técnica e matriz de impacto vs. esforço.</p>
            </div>

            <div className="glass-card-premium">
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} style={{color: 'var(--color-primary)'}}/></div>
                <h3 className="pillar-card-title">Bloco 3: Blueprint Estratégico</h3>
                <p>ICP refinado, Proposta de Valor otimizada, Canais validados, Precificação por valor.</p>
            </div>

            <div className="glass-card-premium">
                <div style={{marginBottom: '1rem'}}><CheckCircle2 size={32} style={{color: 'var(--color-primary)'}}/></div>
                <h3 className="pillar-card-title">Bloco 4: Roteiro 90 Dias</h3>
                <p>Ações priorizadas por impacto, Métricas de validação, KPIs de sucesso e Quick wins para gerar momentum.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* As 5 Lentes                                                          */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">As 5 Lentes Analíticas do Cortex</h2>
          <p className="lead-text">Cada negócio é analisado sob múltiplas perspectivas integradas para uma visão 360º.</p>

          <div className="pillar-grid-revolutionary">
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Target size={28} /></div>
              <h3 className="pillar-card-title">Lente 1: Engenharia de GTM</h3>
              <p className="pillar-card-description">Desenhamos sua <strong>categoria</strong> de mercado e seu <strong>posicionamento</strong>. Aplicamos modelos estratégicos para garantir que o mercado veja sua solução como "a única".</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Brain size={28} /></div>
              <h3 className="pillar-card-title">Lente 2: Arquitetura de Decisão</h3>
              <p className="pillar-card-description">Traduzimos sua complexidade técnica em narrativa. Usamos <strong>Neurociência Aplicada</strong> para criar <strong>urgência</strong> e focar na "dor invisível".</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><GitBranch size={28} /></div>
              <h3 className="pillar-card-title">Lente 3: Orquestração de Escala</h3>
              <p className="pillar-card-description">Instalamos o motor de receita: arquitetura RevOps + frameworks de qualificação para criar <strong>método replicável</strong>.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Layers size={28} /></div>
              <h3 className="pillar-card-title">Lente 4: Economia de Valor</h3>
              <p className="pillar-card-description">Construímos os ativos que provam seu valor <strong>antes</strong> da venda. Calculadoras de ROI e simuladores que aceleram a decisão.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><ShieldCheck size={28} /></div>
              <h3 className="pillar-card-title">Lente 5: Ecossistema</h3>
              <p className="pillar-card-description">Validamos teoria na prática. Prova: fundador aplicou o Cortex B2B™ no próprio negócio (Case AORKIA), validando o método em 45 dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Casos de Uso                                                         */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Casos de Uso Ideais</h2>
          <p className="lead-text">O Cortex B2B™ foi projetado para cenários de alta complexidade estratégica.</p>

          {/* GRID COM 3 ITENS (O 3º será centralizado automaticamente pelo CSS Global) */}
          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <h3 className="truth-card-title">Empresas em Platô</h3>
              <p>Receita estagnada há trimestres. A fórmula antiga parou de funcionar. O Cortex identifica qual alavanca puxar sem queimar caixa em testes aleatórios.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">Startups em Aceleração</h3>
              <p>Product-market fit validado, mas o crescimento é errático. O Cortex estrutura a máquina de vendas antes de você escalar o time comercial.</p>
            </div>

            {/* Este card agora é o último do grid, então o CSS Global vai centralizá-lo */}
            <div className="glass-card-premium">
              <h3 className="truth-card-title">Diversificação de Canais</h3>
              <p>Dependência excessiva de uma única fonte de leads. O Cortex diagnostica a viabilidade de novos canais antes de comprometer recursos.</p>
            </div>
          </div>

          {/* Bloco "Também Aplicável" - FORA DO GRID para não interferir na contagem */}
          {/* Ajustado para alinhamento central total */}
          <div className="glass-card-premium card-wide" style={{marginTop: '3rem', textAlign: 'center', alignItems: 'center'}}>
             <h4 style={{color: 'var(--color-heading)', marginBottom: '2rem', fontSize: '1.3rem', width: '100%'}}>
               Também Aplicável em:
             </h4>
             
             <div style={{
               display: 'grid', 
               gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
               gap: '2rem', 
               width: '100%',
               justifyItems: 'center' // Garante que os itens do grid fiquem no centro das células
             }}>
                {/* Item A */}
                <div style={{
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '1.5rem', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centraliza conteúdo interno
                    textAlign: 'center'    // Centraliza texto
                }}>
                  <strong style={{color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Founders & C-Level</strong>
                  <p style={{fontSize: '0.95rem', margin: 0}}>Segunda opinião estratégica (Sparring) para validação de hipóteses críticas antes de tomadas de decisão.</p>
                </div>
                
                {/* Item B */}
                <div style={{
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '1.5rem', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centraliza conteúdo interno
                    textAlign: 'center'    // Centraliza texto
                }}>
                  <strong style={{color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Ecossistemas de Investimento</strong>
                  <p style={{fontSize: '0.95rem', margin: 0}}>Método de diagnóstico padronizado para análise de maturidade de portfólio e Due Diligence.</p>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA Final                                                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Pare de Adivinhar. Comece a Aplicar Engenharia.
          </h2>
          <p className="lead-text">
            O Cortex B2B™ é o primeiro passo para parar de improvisar. É o "raio-X" que permite ao engenheiro trabalhar.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Quero meu Diagnóstico Cortex B2B</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.9, marginTop: '1.5rem'}}>
            Você recebe o diagnóstico 360º completo para executar por conta própria ou conosco. A decisão é sua.
          </p>
        </div>
      </section>
    </>
  );
}