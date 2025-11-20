// pages/pilares/inteligencia-e-estrategia/cro-service.js
// Design: Premium Glassmorphism + Mini Hero Video

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, BarChart, Briefcase, UserCheck } from 'lucide-react';

export default function CroService() {
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
        <title>CRO as a Service | Synapse B2B</title>
        <meta name="description" content="Liderança executiva de vendas sem o custo full-time." />
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
             <Briefcase size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Liderança C-Level<br/>Sem o Custo Integral</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            Governança executiva sênior para construir e operar sua máquina de receita.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Contratar Liderança Fracionada</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* PROBLEMA vs SOLUÇÃO */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container reveal-up">
          <div className="grid-split" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
             <div className="content-left">
               <h2 className="section-title">Founder-led sales tem limite.</h2>
               <p className="lead-text">Você ainda lidera vendas porque "ninguém vende como o fundador". Mas isso trava seu crescimento.</p>
               <p style={{color: 'var(--color-text)'}}>Escalar exige profissionalização, foco estratégico e tirar o gargalo (você) da operação. O dilema: contratar um VP Sales Jr. é arriscado, e um CRO sênior custa R$ 1M+/ano.</p>
             </div>
             <div className="content-right glass-card">
               <h3 style={{color: '#fff', marginBottom: '1rem'}}>A Solução Fracionada</h3>
               <p className="mb-4" style={{fontSize: '1.1rem'}}><strong>Experiência de multinacional aplicada ao seu negócio.</strong></p>
               <p style={{marginBottom: '1rem'}}>Assumimos a liderança executiva do comercial: estruturamos o time, instalamos rituais de gestão, implementamos cultura de dados e garantimos a execução do playbook.</p>
               <p style={{color: 'var(--color-primary)', fontWeight: 600}}>Você ganha tempo para focar em produto e visão.</p>
             </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ESCOPO (GRID) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center" style={{marginBottom: '4rem'}}>Escopo de Atuação</h2>
          
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            {[
              { icon: Users, title: 'Liderança do Time', text: 'Gestão direta de vendas, marketing e CS. Feedback e cobrança.' },
              { icon: TrendingUp, title: 'Processos', text: 'Playbooks, SLAs entre áreas e rituais de performance semanal.' },
              { icon: BarChart, title: 'Cultura de Dados', text: 'Dashboards confiáveis, forecasting preciso e análise de pipeline.' },
              { icon: UserCheck, title: 'Talentos', text: 'Coaching, contratação e capacitação técnica do time.' },
              { icon: Briefcase, title: 'Ponte Estratégica', text: 'Alinhamento contínuo entre Board/Sócios e a Execução na ponta.' }
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
            Libere o fundador. Profissionalize a receita.
          </h2>
          <p className="cta-support-text" style={{margin: '0 auto 2rem'}}>Retainer mensal + variável sobre performance.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Conversar com um Diretor</span>
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
        @media (max-width: 900px) {
          .grid-split { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}