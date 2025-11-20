// pages/pilares/inteligencia-e-estrategia/gtm-completo.js

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Target, Layers, Map, Users, Repeat } from 'lucide-react';

export default function GTMCompleto() {
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
        <title>Go-To-Market Completo | Synapse B2B</title>
        <meta name="description" content="Arquitetura de Receita completa. Do ICP à retenção, transformamos estratégia em engenharia de crescimento." />
      </Head>

      <section className="hero-section">
        <div className="hero-overlay-static"></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div className="icon-badge"><Target size={32} /></div>
          <h1 className="hero-headline">Arquitetura de Receita,<br/>Não Apenas Estratégia</h1>
          <p className="hero-subheadline">O blueprint completo do seu motor comercial: do ICP à retenção.</p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Corrigir Arquitetura Agora</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto mb-5">
            <h2 className="section-title">Estratégia sem execução é alucinação corporativa.</h2>
            <p className="lead-text">Você tem um GTM no papel, mas na prática o CAC explode, o ciclo se arrasta e a receita oscila.</p>
            <p>O problema: seu GTM é uma colcha de retalhos de táticas, não um sistema integrado.</p>
          </div>

          <div className="glass-card-premium mt-4 text-center">
            <h3 className="text-primary mb-2">A Solução: Engenharia Aplicada</h3>
            <p>Construímos a arquitetura completa: posicionamento que diferencia, ICP matematicamente definido, canais validados por ROI e processos que escalam sem depender de heróis. GTM vira máquina, não aposta.</p>
          </div>
        </div>
      </section>

      <section className="section-solid section-darker">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Os 5 Blocos da Arquitetura</h2>
          <div className="blocks-grid">
            
            <div className="block-item">
              <span className="block-number">01</span>
              <h4>Posicionamento & Categoria</h4>
              <p>Onde você compete (e onde não). Definição clara do seu terreno.</p>
            </div>

            <div className="block-item">
               <span className="block-number">02</span>
               <h4>ICP & Segmentação</h4>
               <p>Perfil exato de quem compra, por que compra e os gatilhos econômicos.</p>
            </div>

            <div className="block-item">
               <span className="block-number">03</span>
               <h4>Modelo de Distribuição</h4>
               <p>Canais ideais baseados em unit economics. Inbound vs Outbound vs Channel.</p>
            </div>

            <div className="block-item">
               <span className="block-number">04</span>
               <h4>Arquitetura de Vendas</h4>
               <p>Processo, ferramentas (Stack), playbooks e rituais de gestão.</p>
            </div>

             <div className="block-item">
               <span className="block-number">05</span>
               <h4>Retenção & Expansão</h4>
               <p>Sistema para Net Revenue Retention superior a 110%.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Pare de consertar sintomas. Corrija a arquitetura.</h2>
          <p className="cta-support-text">Setup estratégico + % sobre receita incremental gerada.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Desenhar Meu GTM</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-overlay-static {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, rgba(0,150,132,0.10) 0%, rgba(10,10,10,1) 60%);
          z-index: 1; pointer-events: none;
        }
        .icon-badge {
          display: inline-flex; padding: 1rem; background: rgba(255,255,255,0.05);
          border-radius: 50%; margin-bottom: 1.5rem; color: var(--color-primary);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .max-w-800 { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mb-5 { margin-bottom: 3rem; }
        .mt-4 { margin-top: 2rem; }
        .text-primary { color: var(--color-primary); }
        
        .blocks-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem; margin-top: 3rem;
        }
        .block-item {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1);
          padding: 2rem; border-radius: 12px; position: relative; overflow: hidden;
          transition: all 0.3s ease;
        }
        .block-item:hover { border-color: var(--color-primary); transform: translateY(-5px); }
        .block-number {
          font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.03);
          position: absolute; top: -10px; right: 10px;
        }
        .block-item h4 { font-family: 'Montserrat', sans-serif; font-size: 1.4rem; margin-bottom: 1rem; color: var(--color-heading); }
        
        .glass-card-premium {
          background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 2.5rem;
        }
        .hero-headline { font-size: 3rem; line-height: 1.2; margin-bottom: 1.5rem; color: var(--color-heading); }
        .hero-subheadline { font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.9; }
      `}</style>
    </>
  );
}