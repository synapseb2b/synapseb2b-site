// pages/pilares/inteligencia-e-estrategia/gtm-completo.js
// Design: Premium Glassmorphism + Mini Hero Video

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Target, Layers, Map, Users, Repeat, BarChart } from 'lucide-react';

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
        <meta name="description" content="Arquitetura de Receita completa. Do ICP à retenção." />
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
             <Target size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Arquitetura de Receita,<br/>Não Apenas Estratégia</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            O blueprint completo do seu motor comercial: do ICP à retenção.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Corrigir Arquitetura Agora</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* PROBLEMA */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto mb-5">
            <h2 className="section-title">Estratégia sem execução é alucinação.</h2>
            <p className="lead-text" style={{textAlign: 'center', margin: '0 auto 2rem', maxWidth: '800px'}}>
              Você tem um GTM no papel, mas na prática o CAC explode, o ciclo se arrasta e a receita oscila. O problema: seu GTM é uma colcha de retalhos de táticas, não um sistema integrado.
            </p>
          </div>

          <div className="glass-card mt-4 text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h3 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>A Solução: Engenharia Aplicada</h3>
            <p>Construímos a arquitetura completa: posicionamento que diferencia, ICP matematicamente definido, canais validados por ROI e processos que escalam sem depender de heróis. GTM vira máquina, não aposta.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* OS 5 BLOCOS (GRID PREMIUM) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center" style={{marginBottom: '4rem'}}>Os 5 Blocos da Arquitetura</h2>
          
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            {[
              { num: '01', title: 'Posicionamento', text: 'Onde você compete (e onde não). Definição clara do seu terreno.' },
              { num: '02', title: 'ICP & Segmentação', text: 'Perfil exato de quem compra, por que compra e os gatilhos econômicos.' },
              { num: '03', title: 'Distribuição', text: 'Canais ideais baseados em unit economics. Inbound vs Outbound.' },
              { num: '04', title: 'Sales Arch', text: 'Processo, ferramentas (Stack), playbooks e rituais de gestão.' },
              { num: '05', title: 'Retenção', text: 'Sistema para Net Revenue Retention superior a 110%.' }
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{position: 'relative', overflow: 'hidden', padding: '3rem 2rem'}}>
                  <span style={{
                    position: 'absolute', top: '0px', right: '10px', 
                    fontSize: '5rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', 
                    lineHeight: 1
                  }}>
                    {item.num}
                  </span>
                  <h3 className="pillar-card-title" style={{fontSize: '1.5rem', marginBottom: '1rem', position: 'relative'}}>{item.title}</h3>
                  <p className="pillar-card-description" style={{position: 'relative'}}>{item.text}</p>
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
            Pare de consertar sintomas. Corrija a arquitetura.
          </h2>
          <p className="cta-support-text" style={{margin: '0 auto 2rem'}}>Setup estratégico + % sobre receita incremental gerada.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Desenhar Meu GTM</span>
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