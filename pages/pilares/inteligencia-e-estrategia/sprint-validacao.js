// pages/pilares/inteligencia-e-estrategia/sprint-validacao.js

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Zap, Search, Database, FileCheck, AlertTriangle } from 'lucide-react';

export default function SprintValidacao() {
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
    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Sprint de Validação Comercial | Synapse B2B</title>
        <meta name="description" content="Valide sua tese de mercado em 30 dias antes de investir OPEX. Dados reais, risco mitigado." />
      </Head>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-overlay-static"></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div className="icon-badge"><Zap size={32} /></div>
          <h1 className="hero-headline">A Verdade Antes do Investimento</h1>
          <p className="hero-subheadline">30 dias para validar ou invalidar sua tese de mercado com dados reais.</p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Iniciar Validação Agora</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* O PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="grid-2-col">
            <div className="text-content">
              <h2 className="section-title">O Risco Invisível</h2>
              <p className="lead-text">Você está prestes a apostar alto em uma hipótese não testada.</p>
              <p>Lançar produto novo, entrar em novo mercado ou pivotar o modelo exige investimento pesado em estrutura.</p>
              <div className="alert-box">
                <AlertTriangle size={24} className="text-primary" />
                <p><strong>Dado Crítico:</strong> 70% das iniciativas B2B falham por falta de aderência real ao mercado, não por execução ruim.</p>
              </div>
            </div>
            <div className="glass-card-premium">
              <h3>A Solução: Teste Controlado</h3>
              <p>O Sprint de Validação é um protocolo de <strong>30 dias</strong> que testa sua tese com prospects reais antes de você comprometer OPEX.</p>
              <p>Usamos técnicas de Lean B2B e Customer Development para extrair sinais claros de compra ou rejeição, transformando intuição em evidência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="section-solid section-darker">
        <div className="container reveal-up">
          <h2 className="section-title text-center">O Que Você Recebe</h2>
          <div className="features-grid">
            <div className="glass-card-premium feature-card">
              <Search size={32} className="text-primary" />
              <h4>Validação de ICP</h4>
              <p>Confirmação se o perfil alvo realmente tem a dor, a urgência e o budget para sua solução.</p>
            </div>
            <div className="glass-card-premium feature-card">
              <Zap size={32} className="text-primary" />
              <h4>Teste de Proposta de Valor</h4>
              <p>Reação real do mercado à sua oferta. Descobrimos o que faz os olhos do cliente brilharem.</p>
            </div>
            <div className="glass-card-premium feature-card">
              <Database size={32} className="text-primary" />
              <h4>Precificação Validada</h4>
              <p>Identificação da faixa de preço que o mercado aceita pagar e modelos de cobrança preferidos.</p>
            </div>
            <div className="glass-card-premium feature-card">
              <FileCheck size={32} className="text-primary" />
              <h4>Go/No-Go Report</h4>
              <p>Uma decisão binária baseada em evidência: Acelerar, Pivotar ou Abortar a iniciativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Melhor descobrir a verdade em 30 dias do que em 12 meses.</h2>
          <p className="cta-support-text">Investimento único pré-fixado. Sem surpresas.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Solicitar Escopo do Sprint</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-overlay-static {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, rgba(0,150,132,0.15) 0%, rgba(10,10,10,1) 70%);
          z-index: 1; pointer-events: none;
        }
        .icon-badge {
          display: inline-flex; padding: 1rem; background: rgba(255,255,255,0.05);
          border-radius: 50%; margin-bottom: 1.5rem; color: var(--color-primary);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .grid-2-col {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 3rem;
        }
        .feature-card { text-align: left; align-items: flex-start; gap: 1rem; }
        .feature-card h4 { color: var(--color-heading); font-family: 'Montserrat', sans-serif; font-size: 1.2rem; margin: 1rem 0 0.5rem; }
        .alert-box {
          background: rgba(255, 50, 50, 0.1); border-left: 4px solid #ff3333;
          padding: 1.5rem; margin-top: 2rem; display: flex; gap: 1rem; align-items: flex-start;
          border-radius: 0 8px 8px 0;
        }
        @media (max-width: 900px) {
          .grid-2-col { grid-template-columns: 1fr; gap: 2rem; }
        }
        .glass-card-premium {
          background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 2.5rem;
          display: flex; flex-direction: column;
        }
        .hero-headline { font-size: 3rem; line-height: 1.2; margin-bottom: 1.5rem; color: var(--color-heading); }
        .hero-subheadline { font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.9; }
      `}</style>
    </>
  );
}