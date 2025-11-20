// pages/pilares/inteligencia-e-estrategia/gtm-completo.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

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
             <Target size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Arquitetura de Receita,<br/>Não Apenas Estratégia</h1>
          <p className="hero-subheadline lead-text">
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

      {/* PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto mb-5">
            <h2 className="section-title">Estratégia sem execução é alucinação.</h2>
            <p className="lead-text">
              Você tem um GTM no papel, mas na prática o CAC explode, o ciclo se arrasta e a receita oscila. O problema: seu GTM é uma colcha de retalhos de táticas, não um sistema integrado.
            </p>
          </div>

          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h3 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>A Solução: Engenharia Aplicada</h3>
            <p>Construímos a arquitetura completa: posicionamento que diferencia, ICP matematicamente definido, canais validados por ROI e processos que escalam sem depender de heróis. GTM vira máquina, não aposta.</p>
          </div>
        </div>
      </section>

      {/* OS 5 BLOCOS (GRID PREMIUM) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Os 5 Blocos da Arquitetura</h2>
          
          <div className="pillar-grid-revolutionary">
            
            {[
              { num: '01', title: 'Posicionamento', text: 'Onde você compete (e onde não). Definição clara do seu terreno.' },
              { num: '02', title: 'ICP & Segmentação', text: 'Perfil exato de quem compra, por que compra e os gatilhos econômicos.' },
              { num: '03', title: 'Distribuição', text: 'Canais ideais baseados em unit economics. Inbound vs Outbound.' },
              { num: '04', title: 'Sales Arch', text: 'Processo, ferramentas (Stack), playbooks e rituais de gestão.' },
              { num: '05', title: 'Retenção', text: 'Sistema para Net Revenue Retention superior a 110%.' }
            ].map((item, i) => (
              <div key={i} className="glass-card-premium" style={{position: 'relative', overflow: 'hidden', padding: '3rem 2rem'}}>
                  {/* Mantido inline style apenas para o efeito decorativo do número de fundo */}
                  <span style={{
                    position: 'absolute', top: '0px', right: '10px', 
                    fontSize: '5rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', 
                    lineHeight: 1, pointerEvents: 'none'
                  }}>
                    {item.num}
                  </span>
                  <h3 className="pillar-card-title" style={{position: 'relative', zIndex: 1}}>{item.title}</h3>
                  <p className="pillar-card-description" style={{position: 'relative', zIndex: 1}}>{item.text}</p>
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
            Pare de consertar sintomas. Corrija a arquitetura.
          </h2>
          <p className="lead-text">Setup estratégico + % sobre receita incremental gerada.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Desenhar Meu GTM</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}