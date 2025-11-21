// pages/pilares/inteligencia-e-estrategia/sprint-validacao.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

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

      {/* MINI HERO (Padronizado pelo Global CSS) */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
             <Zap size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">A Verdade Antes do Investimento</h1>
          <p className="hero-subheadline lead-text">
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

{/* O PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">O Risco Invisível</h2>
          <p className="lead-text">Você está prestes a apostar alto em uma hipótese não testada.</p>
          
          {/* Grid de Contraste: Cenário vs Dado */}
          <div className="pillar-grid-revolutionary">
            
            {/* Card 1: O Cenário */}
            <div className="glass-card-premium" style={{alignItems: 'flex-start', textAlign: 'left'}}>
              <h3 style={{fontSize: '1.4rem', marginBottom: '1rem'}}>A Aposta Cega</h3>
              <p>Lançar um produto novo, entrar em um novo mercado ou pivotar o modelo de negócio exige um investimento pesado em estrutura (OPEX) e tempo.</p>
              <p>Muitos fundadores tomam essa decisão baseados apenas na intuição ou no feedback de "amigos do mercado".</p>
            </div>

            {/* Card 2: O Alerta (Visualmente destacado) */}
            <div className="glass-card-premium" style={{border: '1px solid var(--color-accent)', background: 'rgba(56, 197, 177, 0.05)'}}>
                <div className="pillar-icon-wrapper">
                   <AlertTriangle size={40} style={{color: 'var(--color-accent)'}} />
                </div>
                <h3 style={{fontSize: '3rem', color: 'var(--color-heading)', lineHeight: 1, margin: '0.5rem 0'}}>70%</h3>
                <p style={{fontSize: '1.1rem'}}>Das iniciativas B2B falham.</p>
                <p style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '1rem'}}>
                  A causa não é execução ruim. É <strong>falta de aderência real ao mercado</strong> (No Market Need).
                </p>
            </div>

          </div>

          <div style={{marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0', textAlign: 'center'}}>
             <h3 style={{marginBottom: '1rem'}}>A Solução: Teste Controlado</h3>
             <p>O Sprint de Validação é um protocolo de <strong>30 dias</strong> que transforma intuição em evidência. Testamos sua tese com prospects reais antes de você escalar o investimento.</p>
          </div>

        </div>
      </section>

      {/* ENTREGÁVEIS (GRID) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">O Que Você Recebe</h2>
          
          <div className="pillar-grid-revolutionary">
            {[
              { icon: Search, title: 'Validação de ICP', text: 'Confirmação se o perfil alvo realmente tem a dor, a urgência e o budget para sua solução.' },
              { icon: Zap, title: 'Teste de Proposta', text: 'Reação real do mercado à sua oferta. Descobrimos o que faz os olhos do cliente brilharem.' },
              { icon: Database, title: 'Precificação Validada', text: 'Identificação da faixa de preço que o mercado aceita pagar e modelos de cobrança preferidos.' },
              { icon: FileCheck, title: 'Go/No-Go Report', text: 'Uma decisão binária baseada em evidência: Acelerar, Pivotar ou Abortar a iniciativa.' }
            ].map((item, i) => (
              <div key={i} className="glass-card-premium">
                  <div className="pillar-icon-wrapper">
                    <item.icon size={32} />
                  </div>
                  <h3 className="pillar-card-title">{item.title}</h3>
                  <p className="pillar-card-description">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Melhor descobrir a verdade em 30 dias do que em 12 meses.
          </h2>
          <p className="lead-text">Investimento único pré-fixado. Sem surpresas.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Solicitar Escopo do Sprint</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}