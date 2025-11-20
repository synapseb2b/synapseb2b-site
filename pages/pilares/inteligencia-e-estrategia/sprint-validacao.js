// pages/pilares/inteligencia-e-estrategia/sprint-validacao.js
// Design: Premium Glassmorphism (Igual Plataformas Digitais) + Mini Hero Video

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
        <meta name="description" content="Valide sua tese de mercado em 30 dias antes de investir OPEX." />
      </Head>

      {/* MINI HERO COM VIDEO */}
      <section className="hero-section short-hero" style={{minHeight: '60vh'}}>
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), #000)'}}></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
             <Zap size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">A Verdade Antes do Investimento</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            30 dias para validar ou invalidar sua tese de mercado com dados reais.
          </p>
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
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container reveal-up">
          <div className="grid-2-col">
            <div className="text-content">
              <h2 className="section-title">O Risco Invisível</h2>
              <p className="lead-text">Você está prestes a apostar alto em uma hipótese não testada.</p>
              <p style={{marginBottom: '2rem', color: 'var(--color-text)'}}>
                Lançar produto novo, entrar em novo mercado ou pivotar o modelo exige investimento pesado em estrutura.
              </p>
              
              <div className="glass-card" style={{borderColor: 'rgba(255, 50, 50, 0.3)', background: 'rgba(255, 0, 0, 0.05)'}}>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <AlertTriangle size={32} style={{color: '#ff5555'}} />
                    <p style={{margin: 0}}><strong>Dado Crítico:</strong> 70% das iniciativas B2B falham por falta de aderência real ao mercado, não por execução ruim.</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 style={{fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem'}}>A Solução: Teste Controlado</h3>
              <p style={{marginBottom: '1rem'}}>O Sprint de Validação é um protocolo de <strong>30 dias</strong> que testa sua tese com prospects reais antes de você comprometer OPEX.</p>
              <p>Usamos técnicas de Lean B2B e Customer Development para extrair sinais claros de compra ou rejeição, transformando intuição em evidência.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ENTREGÁVEIS (GRID IDÊNTICO AO DA REFERÊNCIA) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center" style={{marginBottom: '4rem'}}>O Que Você Recebe</h2>
          
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { icon: Search, title: 'Validação de ICP', text: 'Confirmação se o perfil alvo realmente tem a dor, a urgência e o budget para sua solução.' },
              { icon: Zap, title: 'Teste de Proposta', text: 'Reação real do mercado à sua oferta. Descobrimos o que faz os olhos do cliente brilharem.' },
              { icon: Database, title: 'Precificação Validada', text: 'Identificação da faixa de preço que o mercado aceita pagar e modelos de cobrança preferidos.' },
              { icon: FileCheck, title: 'Go/No-Go Report', text: 'Uma decisão binária baseada em evidência: Acelerar, Pivotar ou Abortar a iniciativa.' }
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem', color: 'var(--color-primary)'}}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="pillar-card-title" style={{fontSize: '1.4rem', marginBottom: '1rem'}}>{item.title}</h3>
                  <p className="pillar-card-description">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset'}}>
            Melhor descobrir a verdade em 30 dias do que em 12 meses.
          </h2>
          <p className="cta-support-text" style={{margin: '0 auto 2rem'}}>Investimento único pré-fixado. Sem surpresas.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Solicitar Escopo do Sprint</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* ESTILOS GLOBAIS DO GLASS CARD (PADRÃO REFERÊNCIA) */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          padding: 2.5rem;
        }
        .glass-card:hover {
           transform: translateY(-5px);
           border-color: var(--color-primary);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2);
        }
        
        /* Grid Layouts */
        .grid-2-col {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        @media (max-width: 900px) {
          .grid-2-col { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </>
  );
}