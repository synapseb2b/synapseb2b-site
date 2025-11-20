// pages/pilares/inteligencia-e-estrategia/cro-service.js

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
        <meta name="description" content="Liderança executiva de vendas sem o custo full-time. Profissionalize sua máquina de receita." />
      </Head>

      <section className="hero-section">
        <div className="hero-overlay-static"></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div className="icon-badge"><Briefcase size={32} /></div>
          <h1 className="hero-headline">Liderança C-Level<br/>Sem o Custo Integral</h1>
          <p className="hero-subheadline">Governança executiva sênior para construir e operar sua máquina de receita.</p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Contratar Liderança Fracionada</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      <section className="section-solid">
        <div className="container reveal-up">
          <div className="grid-split">
             <div className="content-left">
               <h2 className="section-title">Founder-led sales tem limite.</h2>
               <p className="lead-text">Você ainda lidera vendas porque "ninguém vende como o fundador". Mas isso trava seu crescimento.</p>
               <p>Escalar exige profissionalização, foco estratégico e tirar o gargalo (você) da operação. O dilema: contratar um VP Sales Jr. é arriscado, e um CRO sênior custa R$ 1M+/ano.</p>
             </div>
             <div className="content-right glass-card-premium">
               <h3>A Solução Fracionada</h3>
               <p className="mb-4"><strong>Experiência de multinacional aplicada ao seu negócio.</strong></p>
               <p>Assumimos a liderança executiva do comercial: estruturamos o time, instalamos rituais de gestão, implementamos cultura de dados e garantimos a execução do playbook.</p>
               <p className="text-primary mt-2">Você ganha tempo para focar em produto e visão.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="section-solid section-darker">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Escopo de Atuação</h2>
          <div className="scope-list">
            
            <div className="scope-item">
              <div className="scope-icon"><Users size={24}/></div>
              <div>
                <h4>Liderança do Time</h4>
                <p>Gestão direta de vendas, marketing e CS. Feedback e cobrança.</p>
              </div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><TrendingUp size={24}/></div>
              <div>
                <h4>Implementação de Processos</h4>
                <p>Playbooks, SLAs entre áreas e rituais de performance semanal.</p>
              </div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><BarChart size={24}/></div>
              <div>
                <h4>Cultura de Dados</h4>
                <p>Dashboards confiáveis, forecasting preciso e análise de pipeline.</p>
              </div>
            </div>

            <div className="scope-item">
              <div className="scope-icon"><UserCheck size={24}/></div>
              <div>
                <h4>Desenvolvimento de Talentos</h4>
                <p>Coaching, contratação e capacitação técnica do time.</p>
              </div>
            </div>

             <div className="scope-item">
              <div className="scope-icon"><Briefcase size={24}/></div>
              <div>
                <h4>Ponte Estratégica</h4>
                <p>Alinhamento contínuo entre Board/Sócios e a Execução na ponta.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Libere o fundador. Profissionalize a receita.</h2>
          <p className="cta-support-text">Retainer mensal + variável sobre performance.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Conversar com um Diretor</span>
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
        .grid-split { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .scope-list {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem; margin-top: 3rem;
        }
        .scope-item {
          display: flex; gap: 1.5rem; align-items: flex-start;
          background: rgba(255,255,255,0.02); padding: 2rem; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05); transition: 0.3s;
        }
        .scope-item:hover { background: rgba(255,255,255,0.05); border-color: var(--color-primary); }
        .scope-icon {
          color: var(--color-primary); background: rgba(0,150,132,0.1);
          padding: 10px; border-radius: 8px;
        }
        .scope-item h4 { font-family: 'Montserrat', sans-serif; margin-bottom: 0.5rem; color: var(--color-heading); }
        
        @media (max-width: 900px) {
          .grid-split { grid-template-columns: 1fr; gap: 2rem; }
        }

        .glass-card-premium {
          background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 2.5rem;
        }
        .hero-headline { font-size: 3rem; line-height: 1.2; margin-bottom: 1.5rem; color: var(--color-heading); }
        .hero-subheadline { font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.9; }
        .text-primary { color: var(--color-primary); }
        .mb-4 { margin-bottom: 1.5rem; }
        .mt-2 { margin-top: 1rem; }
      `}</style>
    </>
  );
}