// pages/pilares/inteligencia-e-estrategia/advisory-board.js
// CORREÇÃO APLICADA: Importação do ícone 'Handshake' adicionada para corrigir o erro de build.

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// AQUI ESTAVA O ERRO: Faltava importar o Handshake
import { ArrowRight, ShieldCheck, Globe, Lightbulb, Handshake, LineChart } from 'lucide-react';

export default function AdvisoryBoard() {
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
        <title>Advisory Board Estratégico | Synapse B2B</title>
        <meta name="description" content="Sparring executivo para decisões de alto impacto. Validação sênior para pivôs, M&A e expansão." />
      </Head>

      <section className="hero-section">
        <div className="hero-overlay-static"></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div className="icon-badge"><ShieldCheck size={32} /></div>
          <h1 className="hero-headline">Decisões de Alto Impacto<br/>Exigem Validação Sênior</h1>
          <p className="hero-subheadline">Sparring executivo para momentos críticos do negócio.</p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Sessão de Board</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto">
            <h2 className="section-title">A solidão da cadeira de CEO.</h2>
            <p className="lead-text mb-4">Pivô estratégico, entrada de investidor, expansão internacional ou reestruturação. Decisões que definem o futuro da empresa muitas vezes são tomadas com informação incompleta e viés interno.</p>
          </div>
          
          <div className="glass-card-premium mt-4">
            <div className="advisory-solution-content text-center">
               <h3 className="text-primary mb-2">A Solução: Segunda Opinião Qualificada</h3>
               <p>Advisory não é consultoria genérica. É acesso direto a executivos que já navegaram suas decisões em escala 10x maior.</p>
               <p>Validamos hipóteses, questionamos premissas e trazemos <strong>pattern recognition</strong> de mercado para reduzir seu risco.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-solid section-darker">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Momentos de Aplicação</h2>
          <div className="moments-grid">
            
            <div className="moment-card">
              <LineChart size={32} className="icon-moment"/>
              <h4>Rodadas de Investimento</h4>
              <p>Valuation, estrutura do deck, preparação para due diligence e negociação.</p>
            </div>

            <div className="moment-card">
              {/* Este componente causava o erro pois não estava importado */}
              <Handshake size={32} className="icon-moment"/>
              <h4>Fusões e Aquisições (M&A)</h4>
              <p>Due diligence comercial, análise de sinergias e plano de integração.</p>
            </div>

            <div className="moment-card">
              <Globe size={32} className="icon-moment"/>
              <h4>Expansão de Mercado</h4>
              <p>Internacionalização, abertura de novas verticais ou canais indiretos.</p>
            </div>

            <div className="moment-card">
               <Lightbulb size={32} className="icon-moment"/>
               <h4>Gestão de Crise e Pivôs</h4>
               <p>Reestruturação urgente, pivô de modelo de negócio ou guerra de preços.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Transforme incerteza em clareza estratégica.</h2>
          <p className="cta-support-text">Sessões avulsas ou pacotes trimestrais.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Validar Minha Decisão</span>
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
        .mb-4 { margin-bottom: 2rem; }
        .mb-2 { margin-bottom: 1rem; }
        .mt-4 { margin-top: 3rem; }
        .text-primary { color: var(--color-primary); }

        .moments-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem; margin-top: 3rem;
        }
        .moment-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.1); padding: 2rem; border-radius: 16px;
          text-align: center; transition: all 0.3s ease;
        }
        .moment-card:hover { border-color: var(--color-primary); transform: translateY(-5px); }
        .icon-moment { color: var(--color-primary); margin-bottom: 1rem; }
        .moment-card h4 { font-family: 'Montserrat', sans-serif; margin-bottom: 0.8rem; color: var(--color-heading); }
        
        .glass-card-premium {
          background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 3rem;
        }
        .hero-headline { font-size: 3rem; line-height: 1.2; margin-bottom: 1.5rem; color: var(--color-heading); }
        .hero-subheadline { font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.9; }
      `}</style>
    </>
  );
}