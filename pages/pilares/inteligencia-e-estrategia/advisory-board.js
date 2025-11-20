// pages/pilares/inteligencia-e-estrategia/advisory-board.js
// Design: Premium Glassmorphism + Mini Hero Video

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

      {/* MINI HERO */}
      <section className="hero-section short-hero" style={{minHeight: '60vh'}}>
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), #000)'}}></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
             <ShieldCheck size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Decisões de Alto Impacto<br/>Exigem Validação Sênior</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
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

      <div className="section-divider-glow"></div>

      {/* PROBLEMA */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto">
            <h2 className="section-title">A solidão da cadeira de CEO.</h2>
            <p className="lead-text mb-4" style={{maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center'}}>
              Pivô estratégico, entrada de investidor, expansão internacional ou reestruturação. Decisões que definem o futuro da empresa muitas vezes são tomadas com informação incompleta e viés interno.
            </p>
          </div>
          
          <div className="glass-card mt-4 text-center" style={{maxWidth: '900px', margin: '0 auto'}}>
             <h3 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>A Solução: Segunda Opinião Qualificada</h3>
             <p style={{marginBottom: '1rem'}}>Advisory não é consultoria genérica. É acesso direto a executivos que já navegaram suas decisões em escala 10x maior.</p>
             <p>Validamos hipóteses, questionamos premissas e trazemos <strong>pattern recognition</strong> de mercado para reduzir seu risco.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* MOMENTOS DE APLICAÇÃO */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center" style={{marginBottom: '4rem'}}>Momentos de Aplicação</h2>
          
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem'}}>
            
            {[
              { icon: LineChart, title: 'Rodadas de Investimento', text: 'Valuation, estrutura do deck, preparação para due diligence e negociação.' },
              { icon: Briefcase, title: 'Fusões e Aquisições', text: 'Due diligence comercial, análise de sinergias e plano de integração.' },
              { icon: Globe, title: 'Expansão de Mercado', text: 'Internacionalização, abertura de novas verticais ou canais indiretos.' },
              { icon: Lightbulb, title: 'Gestão de Crise', text: 'Reestruturação urgente, pivô de modelo de negócio ou guerra de preços.' }
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
            Transforme incerteza em clareza estratégica.
          </h2>
          <p className="cta-support-text" style={{margin: '0 auto 2rem'}}>Sessões avulsas ou pacotes trimestrais.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Validar Minha Decisão</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
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
      `}</style>
    </>
  );
}