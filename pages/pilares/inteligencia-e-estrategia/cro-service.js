// pages/pilares/inteligencia-e-estrategia/cro-service.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, BarChart, Briefcase, UserCheck, AlertTriangle, XCircle } from 'lucide-react';

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
          <h2 className="section-title">Founder-led sales tem limite.</h2>
          <p className="lead-text">
             Você ainda lidera vendas porque "ninguém vende como o fundador". Mas isso se tornou o gargalo do crescimento.
          </p>

          <div className="truths-grid-revolutionary" style={{marginTop: '3rem'}}>
             
{/* O Dilema (Refatorado) */}
             <div className="glass-card-premium" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
               
               {/* Cabeçalho do Card */}
               <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem'}}>
                 <div style={{marginBottom: '0.8rem', opacity: 0.7}}>
                    <AlertTriangle size={32} color="var(--color-text-muted)" />
                 </div>
                 <h3 className="truth-card-title" style={{color: 'var(--color-text-muted)', marginBottom: '0.5rem'}}>O Dilema Atual</h3>
                 <p style={{fontSize: '0.95rem', maxWidth: '90%'}}>
                   Para escalar, você precisa sair da operação. Mas as opções tradicionais falham:
                 </p>
               </div>

               {/* Lista Visual Organizada */}
               <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}}>
                 
                 {/* Item 1 */}
                 <div style={{
                   display: 'flex', 
                   alignItems: 'flex-start', 
                   gap: '12px', 
                   textAlign: 'left', 
                   padding: '1rem', 
                   borderRadius: '8px', 
                   background: 'rgba(255,255,255,0.03)', 
                   border: '1px solid rgba(255,255,255,0.05)'
                 }}>
                   <XCircle size={20} style={{color: '#ef4444', marginTop: '3px', flexShrink: 0}} />
                   <div>
                     <strong style={{display: 'block', color: '#e0e0e0', marginBottom: '4px', fontSize: '1rem'}}>VP Sales Jr</strong>
                     <span style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.4'}}>
                       Barato, mas sem bagagem estratégica. Comete erros básicos que custam caro ao caixa.
                     </span>
                   </div>
                 </div>

                 {/* Item 2 */}
                 <div style={{
                   display: 'flex', 
                   alignItems: 'flex-start', 
                   gap: '12px', 
                   textAlign: 'left', 
                   padding: '1rem', 
                   borderRadius: '8px', 
                   background: 'rgba(255,255,255,0.03)', 
                   border: '1px solid rgba(255,255,255,0.05)'
                 }}>
                   <XCircle size={20} style={{color: '#ef4444', marginTop: '3px', flexShrink: 0}} />
                   <div>
                     <strong style={{display: 'block', color: '#e0e0e0', marginBottom: '4px', fontSize: '1rem'}}>CRO Sênior de Mercado</strong>
                     <span style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.4'}}>
                       Custo inviável (R$ 1M+/ano entre Salário e Equity) para o estágio atual da operação.
                     </span>
                   </div>
                 </div>

               </div>
             </div>

             {/* A Solução Synapse */}
             <div className="glass-card-premium" style={{border: '1px solid var(--color-primary)', background: 'rgba(0, 150, 132, 0.05)'}}>
               <h3 className="truth-card-title" style={{color: '#fff'}}>A Solução Fracionada</h3>
               <p style={{marginBottom: '1rem'}}><strong>Experiência de multinacional aplicada ao seu negócio.</strong></p>
               <p>Nós assumimos a cadeira de liderança executiva (Interim VP/CRO). Estruturamos o time, instalamos rituais de gestão, implementamos cultura de dados e garantimos a execução.</p>
               <p style={{marginTop: '1rem', fontWeight: 700, color: 'var(--color-primary)'}}>
                 Você ganha tempo para focar em produto e visão.
               </p>
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