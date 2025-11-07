// pages/a-synapse.js (VERSÃO REVISADA E OTIMIZADA)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Target, Users, TrendingUp, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function ASynapsePage() {
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
        <title>A Synapse | Quem Somos e Por Que Existimos</title>
        <meta name="description" content="Nossa tese sobre o mercado B2B, quem somos de verdade, para quem servimos (e para quem não servimos)." />
      </Head>

      {/* ====================================================================== */}
      {/* HERO                                                                 */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <h1 className="section-title">A Synapse B2B</h1>
            <p className="hero-subheadline wider-on-desktop">
              Não somos consultoria. Não somos agência. Somos engenharia de receita.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* NOSSA TESE                                                           */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="thesis-block">
            <h2 className="section-title text-center">Nossa Tese Sobre o Mercado B2B</h2>
            <div className="thesis-content">
              <p className="thesis-statement">O mercado B2B brasileiro opera com uma falha sistêmica: empresas tecnicamente excelentes perdem porque não conseguem traduzir complexidade em decisão rápida.</p>
              
              {/* --- Bloco Refatorado: Usando .truths-grid-revolutionary --- */}
              <div className="truths-grid-revolutionary" style={{margin: '3rem 0'}}>
                <div className="truth-card-revolutionary text-left">
                  <h3 className="truth-card-title" style={{textAlign: 'left'}}>O Problema Não é Produto</h3>
                  <p>90% das empresas B2B que nos procuram têm produto validado, clientes satisfeitos e equipe competente. O problema nunca é o produto.</p>
                </div>
                
                <div className="truth-card-revolutionary text-left">
                  <h3 className="truth-card-title" style={{textAlign: 'left'}}>O Problema é Sistema</h3>
                  <p>Crescimento depende de networking heroico. Ciclo de vendas é longo. Narrativa é confusa. Time comercial explica <em>features</em> ao invés de resolver problemas.</p>
                </div>
                
                <div className="truth-card-revolutionary text-left">
                  <h3 className="truth-card-title" style={{textAlign: 'left'}}>A Solução é Engenharia</h3>
                  <p>Receita previsível não vem de "vendedores excepcionais". Vem de instalar um sistema que qualquer vendedor mediano executa com excelência.</p>
                </div>
              </div>

              <p className="thesis-conclusion">A Synapse B2B existe para instalar esse sistema. Não vendemos consultoria. Instalamos o motor de receita, executamos na linha de frente até validar, e entregamos o playbook para você escalar sozinho.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* QUEM SOMOS DE VERDADE                                                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Quem Somos de Verdade</h2>
          <div className="about-content">
            <div className="founder-block">
              <h3>Júlio Figueiredo</h3>
              <p className="founder-role">Founder & Chief Revenue Architect</p>
              <p>Mais de 20 anos liderando receita em ecossistemas B2B de alta complexidade: TOTVS, Google Cloud, Microsoft, Dell, Salesforce, Dynatrace, Keepit. Construiu e escalou operações de receita do zero em múltiplos segmentos.</p>
              <p>A Synapse B2B nasceu de uma frustração pessoal: ver empresas tecnicamente superiores perderem para concorrentes medíocres com narrativas mais simples. A tese era clara: <strong>o mercado não compra o melhor produto, compra a melhor clareza</strong>.</p>
            </div>

            <div className="dna-block">
              <h3>Nosso DNA</h3>
              <ul className="dna-list">
                <li><CheckCircle2 size={20} /> <strong>Operadores, não teóricos:</strong> Executamos na linha de frente. Não entregamos slides.</li>
                <li><CheckCircle2 size={20} /> <strong>Cientistas, não criativos:</strong> Baseamos decisões em frameworks validados e neurociência aplicada, não em "achismos".</li>
                <li><CheckCircle2 size={20} /> <strong>Construtores, não consultores:</strong> Construímos ativos (plataformas, ferramentas, processos) que geram receita enquanto você dorme.</li>
                <li><CheckCircle2 size={20} /> <strong>Parceiros, não fornecedores:</strong> Skin in the Game. Ganhamos quando você ganha.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* PARA QUEM SERVIMOS (E NÃO SERVIMOS)                                  */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Para Quem Servimos (e Para Quem Não Servimos)</h2>
          <p className="lead-text text-center">Transparência radical sobre fit. Não trabalhamos com todo mundo.</p>
          
          <div className="fit-matrix">
            <div className="fit-column fit-yes">
              <h3><CheckCircle2 size={24} /> Fit Ideal</h3>
              <ul>
                <li>Produto validado, mas receita imprevisível</li>
                <li>Crescimento dependente de heroísmo comercial</li>
                <li>Founders técnicos ou CEOs sobrecarregados com vendas</li>
                <li>Empresas que vendem complexidade sem clareza</li>
                <li>Ciclo de vendas longo (60+ dias)</li>
                <li>Time de vendas explica <em>features</em>, não problemas</li>
                <li>Disposição para executar junto (não delegar e esquecer)</li>
                <li>Mindset de construir sistema, não de contratar mágica</li>
              </ul>
            </div>

            <div className="fit-column fit-no">
              <h3><XCircle size={24} /> Não Servimos Para</h3>
              <ul>
                <li>Empresas que querem "só mais um site"</li>
                <li>Quem busca resultado instantâneo sem sistema</li>
                <li>Clientes que querem delegar 100% e não se envolver</li>
                <li>Produtos em validação (ainda sem product-market fit)</li>
                <li>Empresas com caixa para menos de 6 meses</li>
                <li>Quem quer consultoria tradicional (relatórios sem execução)</li>
                <li>Organizações que não acreditam em dados e frameworks</li>
                <li>Empresas que crescem bem sozinhas (não precisa de nós)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* COMO ESCOLHEMOS PROJETOS (Refatorado com pillar-grid)                 */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Como Escolhemos Projetos</h2>
          <div className="selection-criteria">
            <div className="criteria-intro">
              <p>Não aceitamos todos os projetos que nos procuram. Avaliamos fit mútuo em três dimensões:</p>
            </div>

            {/* --- Bloco Refatorado: Usando .pillar-grid-revolutionary --- */}
            <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', margin: '3rem 0'}}>
              <div className="pillar-card-revolutionary">
                <div className="pillar-card-content">
                  <div className="pillar-icon-wrapper"><Target size={28} /></div>
                  <h3 className="pillar-card-title">1. Fit Estratégico</h3>
                  <p className="pillar-card-description">Seu desafio está na nossa zona de genialidade? Conseguimos gerar impacto real em 90 dias? Se a resposta for "talvez", não começamos.</p>
                </div>
              </div>

              <div className="pillar-card-revolutionary">
                <div className="pillar-card-content">
                  <div className="pillar-icon-wrapper"><Users size={28} /></div>
                  <h3 className="pillar-card-title">2. Fit Cultural</h3>
                  <p className="pillar-card-description">Alinhamento de valores, velocidade de execução e abertura para desafiar premissas. Se você quer um fornecedor passivo, não somos o fit.</p>
                </div>
              </div>

              <div className="pillar-card-revolutionary">
                <div className="pillar-card-content">
                  <div className="pillar-icon-wrapper"><TrendingUp size={28} /></div>
                  <h3 className="pillar-card-title">3. Fit de Modelo</h3>
                  <p className="pillar-card-description">Nosso modelo é Give First + Skin in the Game. Se não faz sentido amarrar remuneração a receita nova gerada, não é o projeto certo para nós.</p>
                </div>
              </div>
            </div>

            <div className="criteria-conclusion">
              <AlertCircle size={20} />
              <p>Se houver dúvida sobre fit em qualquer dimensão, nossa resposta padrão é "não agora". Preferimos dizer não do que comprometer resultado.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* NOSSA DEFINIÇÃO DE PARCERIA (Refatorado com pillar-grid)             */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="partnership-block">
            <h2 className="section-title text-center">Nossa Definição de Parceria</h2>
            <div className="partnership-content">
              <p className="partnership-lead">Você não é nosso cliente. Você é nosso parceiro de construção.</p>
              
              {/* --- Bloco Refatorado: Usando .pillar-grid-revolutionary --- */}
              <div className="pillar-grid-revolutionary" style={{margin: '3rem 0'}}>
                <div className="pillar-card-revolutionary">
                  <div className="pillar-card-content">
                    <h3 className="pillar-card-title" style={{marginTop: '0'}}>Transparência Radical</h3>
                    <p className="pillar-card-description">Você vê tudo: processo, dados, decisões, sucessos e fracassos. Sem caixa-preta.</p>
                  </div>
                </div>
                
                <div className="pillar-card-revolutionary">
                  <div className="pillar-card-content">
                    <h3 className="pillar-card-title" style={{marginTop: '0'}}>Execução Conjunta</h3>
                    <p className="pillar-card-description">Não fazemos "para você". Fazemos "com você". Seu time aprende executando junto.</p>
                  </div>
                </div>
                
                <div className="pillar-card-revolutionary">
                  <div className="pillar-card-content">
                    <h3 className="pillar-card-title" style={{marginTop: '0'}}>Autonomia como Meta</h3>
                    <p className="pillar-card-description">Sucesso não é renovar contrato. Sucesso é você operar o sistema sem precisar de nós.</p>
                  </div>
                </div>

                <div className="pillar-card-revolutionary">
                  <div className="pillar-card-content">
                    <h3 className="pillar-card-title" style={{marginTop: '0'}}>Pele no Jogo</h3>
                    <p className="pillar-card-description">Amarramos remuneração a resultado. Se não gerar receita nova, não ganhamos. Simples.</p>
                  </div>
                </div>
              </div>

              <p className="partnership-conclusion">Se isso não faz sentido para você, não somos o parceiro certo. E está tudo bem.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA FINAL (Refatorado com padrão revolutionary)                        */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Vamos Descobrir Se Existe Fit?
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Primeira conversa: 21 minutos de diagnóstico estratégico. Zero pressão de vendas. Só avaliação honesta de fit mútuo.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.8, marginTop: '1.5rem'}}>
            Se não houver fit, diremos na primeira conversa. Se houver, construímos juntos.
          </p>
        </div>
      </section>

      {/* CSS Otimizado (Muitos blocos foram removidos e substituídos por classes globais) */}
      <style jsx>{`
        .thesis-block, .about-content, .fit-matrix, .selection-criteria, .partnership-block {
          max-width: 1000px;
          margin: 0 auto;
        }

        .thesis-content {
          text-align: left;
        }
        .thesis-statement {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--color-heading);
          font-weight: 500;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(0, 150, 132, 0.05);
          border-left: 4px solid var(--color-primary);
          border-radius: 8px;
        }
        .thesis-conclusion {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
          font-size: 1.1rem;
          line-height: 1.8;
          font-weight: 500;
        }

        .founder-block, .dna-block {
          margin-bottom: 3rem;
        }
        .founder-block h3, .dna-block h3 {
          font-size: 1.5rem;
          color: var(--color-heading);
          margin-bottom: 0.5rem;
        }
        .founder-role {
          color: var(--color-accent);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        .founder-block p, .dna-block p {
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .dna-list {
          list-style: none;
          padding: 0;
        }
        .dna-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .dna-list svg {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .fit-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        .fit-column {
          padding: 2.5rem;
          border-radius: 12px;
        }
        .fit-yes {
          background: rgba(0, 150, 132, 0.05);
          border: 1px solid var(--color-primary);
        }
        .fit-no {
          background-color: var(--color-card-bg); /* AJUSTADO */
          border: 1px solid var(--color-border);
        }
        .fit-column h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: var(--color-heading);
        }
        .fit-yes h3 {
          color: var(--color-primary);
        }
        .fit-column ul {
          list-style: none;
          padding: 0;
        }
        .fit-column li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .fit-column li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }

        .criteria-intro {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }
        .criteria-conclusion {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(0, 150, 132, 0.05);
          border-left: 4px solid var(--color-primary);
          border-radius: 8px;
          margin-top: 3rem;
        }
        .criteria-conclusion svg {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .partnership-content {
          text-align: center;
        }
        .partnership-lead {
          font-size: 1.3rem;
          color: var(--color-heading);
          font-weight: 500;
          margin-bottom: 3rem;
        }
        .partnership-conclusion {
          margin-top: 3rem;
          font-size: 1.1rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .fit-matrix {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}