// pages/inteligencia-e-estrategia.js
// Pilar 1: Inteligência e Estratégia

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Target, Gem, Users, CheckCircle2, Layers, GitBranch } from 'lucide-react';

export default function InteligenciaEstrategia() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Inteligência e Estratégia | Synapse B2B</title>
        <meta name="description" content="Arquitetura Analítica de Receita. Direção clara, correção de rota e governança executiva para empresas B2B." />
      </Head>

      {/* ====================================================================== */}
      {/* HERO                                                                   */}
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
          <h1 className="hero-headline">Inteligência e Estratégia</h1>
          <p className="hero-subheadline lead-text">
            Arquitetura Analítica de Receita. Direção clara, correção de rota e governança executiva.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CONTEXTO / PROBLEMA                                                    */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto mb-5">
            <h2 className="section-title">O problema não é falta de esforço. É falta de direção.</h2>
            <p className="lead-text">
              Sua empresa é tecnicamente superior, mas o mercado não paga por isso. A receita oscila, o CAC explode e cada venda exige convencimento desproporcional. O diagnóstico é claro: falta engenharia no processo comercial.
            </p>
          </div>

          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h3 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>A Solução: Método, Não Improviso</h3>
            <p>
              Unimos a direção estratégica do GTM à agilidade da validação científica do Growth Marketing. O resultado: um mapa claro de onde e como jogar — e os playbooks para executar com autonomia.
            </p>
            <p style={{marginTop: '1rem', fontStyle: 'italic', opacity: 0.8}}>
              O entregável não é um PDF. São Playbooks de Execução que garantem replicabilidade e retiram o fundador do gargalo operacional.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 4 FRENTES DE ATUAÇÃO                                                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">As 4 Frentes de Atuação</h2>
          <p className="lead-text">Do diagnóstico ao suporte executivo contínuo.</p>
          
          <div className="pillar-grid-revolutionary">
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><CheckCircle2 size={32} /></div>
              <h3 className="pillar-card-title">Diagnóstico de Maturidade B2B</h3>
              <p className="pillar-card-description">
                Análise técnica e imparcial dos processos atuais para identificar gargalos de receita e falhas estruturais de posicionamento. O "Raio-X" que revela onde a estratégia falha na prática.
              </p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Target size={32} /></div>
              <h3 className="pillar-card-title">Blueprint de Go-To-Market</h3>
              <p className="pillar-card-description">
                Plano diretor que define o perfil de cliente ideal (ICP), segmentação de mercado e a arquitetura de canais mais eficiente para o seu ticket médio. Estratégia que vira execução.
              </p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Gem size={32} /></div>
              <h3 className="pillar-card-title">Narrativa de Valor Autoritativa</h3>
              <p className="pillar-card-description">
                Reestruturação da mensagem comercial para evidenciar o problema crítico que a empresa resolve, eliminando a comparação por preço e estabelecendo autoridade imediata.
              </p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Users size={32} /></div>
              <h3 className="pillar-card-title">Advisory Board & Mentoria</h3>
              <p className="pillar-card-description">
                Suporte executivo sênior para momentos de expansão, mudança de modelo de negócio ou destravamento de canais, garantindo disciplina na execução da estratégia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CORTEX B2B™ (Destaque)                                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="glass-card-premium card-wide" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="pillar-icon-wrapper premium-glow">
              <Layers size={32} />
            </div>
            <h3>Cortex B2B™</h3>
            <p className="lead-text" style={{marginBottom: '1.5rem'}}>
              O núcleo de nossas decisões é baseado em ciência e dados.
            </p>
            <p>
              Utilizamos um meta-framework proprietário que processa o negócio sob múltiplas lentes: <strong>GTM, Growth Marketing e Neurociência</strong>. Esse "Raio-X" estratégico decodifica padrões de 20 anos de experiência para identificar a alavanca exata de crescimento.
            </p>
            <div style={{marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid var(--color-primary)'}}>
              <p style={{margin: 0}}>
                <strong>Integração GTM + Growth:</strong> Definimos o mapa (onde e como jogar) e aplicamos método científico para otimizar todo o ciclo de vida do cliente — da aquisição à retenção. O objetivo é transformar tráfego em monetização real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* COMO FUNCIONA                                                          */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Como Funciona</h2>
          
          <div className="truths-grid-revolutionary">
            
            <div className="glass-card-premium">
              <span style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', display: 'block', marginBottom: '1rem'}}>01</span>
              <h3 className="truth-card-title">Diagnóstico</h3>
              <p>Imersão nos processos atuais. Identificamos os gargalos reais — não os sintomas — e mapeamos as alavancas de maior impacto.</p>
            </div>
            
            <div className="glass-card-premium">
              <span style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', display: 'block', marginBottom: '1rem'}}>02</span>
              <h3 className="truth-card-title">Arquitetura</h3>
              <p>Desenhamos o Blueprint completo: ICP, canais, narrativa, processos e métricas. Tudo documentado em Playbooks executáveis.</p>
            </div>

            <div className="glass-card-premium card-wide">
              <span style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', display: 'block', marginBottom: '1rem'}}>03</span>
              <h3 className="truth-card-title">Governança</h3>
              <p>Acompanhamento sênior na implementação. Garantimos que o playbook seja seguido, os dados estejam limpos e a cultura de alta performance seja instalada. O fundador sai do gargalo operacional.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA FINAL                                                              */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Pronto para retomar o controle sobre a trajetória de receita?
          </h2>
          <p className="lead-text">
            O primeiro passo é um diagnóstico. 21 minutos para entender onde está o gargalo.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Executivo</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{marginTop: '1rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem'}}>
            Uma conversa de negócios. Sem pressão de vendas, apenas alinhamento estratégico.
          </p>
        </div>
      </section>
    </>
  );
}