// pages/pilares/inteligencia-e-estrategia/advisory-board.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe, Lightbulb, LineChart, Briefcase } from 'lucide-react';

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
        <meta name="description" content="Sparring executivo para decisões de alto impacto." />
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
             <ShieldCheck size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Decisões de Alto Impacto<br/>Exigem Validação Sênior</h1>
          <p className="hero-subheadline lead-text">
            Sparring executivo para momentos críticos do negócio.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Sessão de Board</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">A solidão da cadeira de CEO.</h2>
          <p className="lead-text">
            Pivô estratégico, entrada de investidor, expansão internacional ou reestruturação. Decisões que definem o futuro da empresa muitas vezes são tomadas com informação incompleta e viés interno.
          </p>
          
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
             <h3 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>A Solução: Segunda Opinião Qualificada</h3>
             <p style={{marginBottom: '1rem'}}>Advisory não é consultoria genérica. É acesso direto a executivos que já navegaram suas decisões em escala 10x maior.</p>
             <p>Validamos hipóteses, questionamos premissas e trazemos <strong>pattern recognition</strong> de mercado para reduzir seu risco.</p>
          </div>
        </div>
      </section>

      {/* MOMENTOS DE APLICAÇÃO */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Momentos de Aplicação</h2>
          
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
            
            {[
              { icon: LineChart, title: 'Rodadas de Investimento', text: 'Valuation, estrutura do deck, preparação para due diligence e negociação.' },
              { icon: Briefcase, title: 'Fusões e Aquisições', text: 'Due diligence comercial, análise de sinergias e plano de integração.' },
              { icon: Globe, title: 'Expansão de Mercado', text: 'Internacionalização, abertura de novas verticais ou canais indiretos.' },
              { icon: Lightbulb, title: 'Gestão de Crise', text: 'Reestruturação urgente, pivô de modelo de negócio ou guerra de preços.' }
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
            Transforme incerteza em clareza estratégica.
          </h2>
          <p className="lead-text">Sessões avulsas ou pacotes trimestrais.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Validar Minha Decisão</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}