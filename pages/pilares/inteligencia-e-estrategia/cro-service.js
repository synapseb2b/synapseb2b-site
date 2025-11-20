// pages/pilares/inteligencia-e-estrategia/cro-service.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

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
             <Briefcase size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Liderança C-Level<br/>Sem o Custo Integral</h1>
          <p className="hero-subheadline lead-text">
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

      {/* PROBLEMA vs SOLUÇÃO */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          {/* Usando o grid global para layout responsivo automático */}
          <div className="pillar-grid-revolutionary" style={{marginTop: '0', alignItems: 'center'}}>
             
             {/* Coluna Esquerda: Texto */}
             <div style={{textAlign: 'center', padding: '2rem'}}>
               <h2 className="section-title" style={{textAlign: 'center'}}>Founder-led sales tem limite.</h2>
               <p className="lead-text" style={{marginBottom: '1.5rem'}}>Você ainda lidera vendas porque "ninguém vende como o fundador". Mas isso trava seu crescimento.</p>
               <p>Escalar exige profissionalização, foco estratégico e tirar o gargalo (você) da operação. O dilema: contratar um VP Sales Jr. é arriscado, e um CRO sênior custa R$ 1M+/ano.</p>
             </div>

             {/* Coluna Direita: Card Solução */}
             <div className="glass-card-premium">
               <h3 style={{marginBottom: '1rem'}}>A Solução Fracionada</h3>
               <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}><strong>Experiência de multinacional aplicada ao seu negócio.</strong></p>
               <p style={{marginBottom: '1rem'}}>Assumimos a liderança executiva do comercial: estruturamos o time, instalamos rituais de gestão, implementamos cultura de dados e garantimos a execução do playbook.</p>
               <p style={{color: 'var(--color-primary)', fontWeight: 600}}>Você ganha tempo para focar em produto e visão.</p>
             </div>

          </div>
        </div>
      </section>

      {/* ESCOPO (GRID) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Escopo de Atuação</h2>
          
          <div className="pillar-grid-revolutionary">
            
            {[
              { icon: Users, title: 'Liderança do Time', text: 'Gestão direta de vendas, marketing e CS. Feedback e cobrança.' },
              { icon: TrendingUp, title: 'Processos', text: 'Playbooks, SLAs entre áreas e rituais de performance semanal.' },
              { icon: BarChart, title: 'Cultura de Dados', text: 'Dashboards confiáveis, forecasting preciso e análise de pipeline.' },
              { icon: UserCheck, title: 'Talentos', text: 'Coaching, contratação e capacitação técnica do time.' },
              { icon: Briefcase, title: 'Ponte Estratégica', text: 'Alinhamento contínuo entre Board/Sócios e a Execução na ponta.' }
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
            Libere o fundador. Profissionalize a receita.
          </h2>
          <p className="lead-text">Retainer mensal + variável sobre performance.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Conversar com um Diretor</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}