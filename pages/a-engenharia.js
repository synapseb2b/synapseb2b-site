// PÁGINA: A ENGENHARIA (a-engenharia.js)
// Copy final aprovada, focada no meta-sistema proprietário (Cortex B2B™).

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Target, Brain, GitBranch, Gem, ShieldCheck, Zap, Layers, LineChart } from 'lucide-react'; // Ícones relevantes

export default function AEngenhariaPage() {
  useEffect(() => {
    // Lógica de animação (fade-in)
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
        <title>A Arquitetura da Engenharia de Receita | Synapse B2B</title>
        <meta name="description" content="Veja o meta-sistema e os frameworks que usamos para construir motores de receita B2B de alta complexidade." />
      </Head>

      {/* ====================================================================== */}
      {/* Seção 1: Hero                                                        */}
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
            <h1 className="section-title" style={{fontSize: '3.2rem'}}>A Arquitetura da Engenharia de Receita</h1>
            <p className="hero-subheadline wider-on-desktop">
              Você viu os <em>sintomas</em> e os <em>pilares</em>. Agora, veja o <em>meta-sistema</em> que usamos para construir motores de receita B2B de alta complexidade.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
                <span>Agendar Diagnóstico Estratégico (21min)</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 2: O Foco (Tática vs. Sistema)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up text-center">
          <div className="narrative-block">
            <h2 className="section-title">O Foco: Tática vs. Sistema</h2>
            <p className="narrative-text">
              O crescimento em B2B falha quando táticas (anúncios, prospecção) e estratégias (planejamento, posicionamento) não estão conectadas por um <strong>sistema</strong>.
            </p>
            <p className="narrative-text">
              A Engenharia de Receita não é uma tática isolada. É o <strong>meta-sistema</strong> que orquestra todas as frentes. É a arquitetura que garante que cada esforço contribua para um único fim: receita previsível.
            </p>
            <p className="narrative-text">
              Nossa competência não é opinar. É construir este sistema.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 3: O Sistema (O Cortex B2B™)                                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow section-pillars-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O "Cérebro" da Operação: Conheça o Cortex B2B™</h2>
          <p className="lead-text">
            Nosso meta-framework proprietário decodifica seu negócio sob 5 lentes estratégicas. É assim que encontramos as alavancas de crescimento que outros não veem.
          </p>
          
          {/* Reutilizando a classe .pillar-grid-revolutionary do globals.css */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', alignItems: 'stretch'}}>
            
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper"><Target size={28} /></div>
                <h3 className="pillar-card-title">Lente 1: Engenharia de Go-To-Market</h3>
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
                <p className="pillar-card-description">Instalamos o "motor" de receita. Implementamos uma <strong>arquitetura de receita (RevOps)</strong> e <strong>frameworks de qualificação de elite</strong> para criar um playbook que funciona sem "vendedores-heróis".</p>
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
      {/* Seção 4: A Prova (Execução > Teoria)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up text-center">
          <div className="narrative-block">
            <h2 className="section-title">Frameworks não bastam. É preciso execução na linha de frente.</h2>
            <p className="narrative-text">
              O Cortex B2B™ é o nosso blueprint, mas a engenharia de verdade acontece na execução.
            </p>
            <p className="narrative-text" style={{
              color: 'var(--color-heading)', 
              fontWeight: 600, 
              fontSize: '1.2rem', 
              borderLeft: '4px solid var(--color-primary)', 
              paddingLeft: '1.5rem', 
              textAlign: 'left', 
              maxWidth: '700px', 
              margin: '2rem auto'
            }}>
              Nossa tese é simples: "Não entregamos teoria em PDFs."
            </p>
            <p className="narrative-text">
              Lideramos a execução nos primeiros 90-180 dias. Atuamos como seu CRO fracionado, rodamos o Sprint de Validação e entregamos o sistema funcionando — não apenas o plano.
            </p>
            <p className="narrative-text">
              É por isso que atrelamos nosso sucesso financeiro ao seu.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 5: CTA Final (Alinhado com a Home)                             */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Pronto para o Raio-X?
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            O primeiro passo da engenharia é o diagnóstico. Vamos aplicar as 5 lentes do Cortex B2B™ na sua operação.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agende sua Sessão de Diagnóstico (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.8, marginTop: '1.5rem'}}>
            Primeira conversa: 21 minutos. Sem pressão. Só clareza.
          </p>
        </div>
      </section>

      {/* --- ESTILOS JSX - Usados para os blocos de narrativa --- */}
      <style jsx>{`
        .narrative-block {
          max-width: 800px;
          margin: 0 auto;
        }
        .narrative-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          text-align: left; /* Padrão de leitura para texto corrido */
        }
        /* Centraliza o parágrafo de tese */
        .narrative-block .section-title + .narrative-text {
          text-align: center;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.2rem;
        }
        .narrative-text strong {
          color: var(--color-heading);
          font-weight: 600;
        }

        /* Ajuste para alinhar cards da Seção 3 perfeitamente */
        .pillar-grid-revolutionary {
          align-items: stretch; /* Faz os cards terem a mesma altura */
        }
        .pillar-card-revolutionary {
          display: flex; /* Permite que o conteúdo cresça */
          flex-direction: column;
        }
        .pillar-card-content {
          flex-grow: 1; /* Faz o conteúdo preencher o card */
        }
      `}</style>
    </>
  );
}