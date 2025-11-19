// pages/cases/versao-holistica.js
// Versão Final Otimizada: Tom de Engenharia + Design Premium Unificado + Alinhamento Central

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download,
  CheckCircle2, 
  Target,
  Layers, 
  BrainCircuit,
  Gem,
  TrendingUp,
  LineChart,
  ShieldCheck,
  XCircle
} from 'lucide-react';

export default function VersaoHolisticaCase() {

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
    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Estilo Premium (Glassmorphism) - Padrão Cases
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    height: '100%', 
    transition: 'all 0.4s ease'
  };

  const imageGlowStyle = {
    borderRadius: '12px', 
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 0 40px rgba(0, 229, 255, 0.15)',
    margin: '0 auto'
  };

  return (
    <>
      <Head>
        <title>Case Versão Holística | Synapse B2B</title>
        <meta name="description" content="De metodologia validada para categoria de mercado. R$ 500k captados e oceano azul criado em 90 dias." /> 
      </Head>

      {/* ====================================================================== */}
      {/* HERO: O IMPACTO IMEDIATO                                               */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero" style={{position: 'relative', overflow: 'hidden'}}> 
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), #000)'}}></div>
        </div>

        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 1
        }}></div>

        <div className="container hero-content text-center page-hero-padding reveal-up" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Layers size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          </div>

          <h1 className="section-title" style={{textTransform: 'none'}}>
            De Metodologia Validada para <br/>Categoria de Mercado
          </h1>
          <p className="hero-subheadline wider-on-desktop" style={{textAlign: 'center'}}>
            ROI de 5.8x provado pela UFMG. Pitch que não convertia. <br/>90 dias depois: R$ 500k captados e oceano azul criado.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O PARADOXO DA INOVAÇÃO                                      */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up" style={{background: '#050505'}}>
        <div className="container text-center">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="section-title">O Gargalo da Inovação</h2>
            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem', marginTop: '-1rem', fontWeight: 300}}>Quando Genialidade Técnica Trava Receita</h3>
            
            <p className="lead-text" style={{marginBottom: '2rem', opacity: 0.9}}>
              A Versão Holística tinha tudo para escalar: metodologia com validação científica (UFMG), ROI comprovado de 5.8x em pacientes crônicos, parcerias com hospitais de referência.
            </p>
            <p style={{fontWeight: 600, marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Menos uma coisa: <strong>clareza de negócio</strong>.</p>

            <div className="glass-card-premium" style={cardStyle}>
              <h3 style={{color: 'var(--color-heading)', fontSize: '1.8rem', marginBottom: '1rem'}}>O Pitch que Confundia Investidores</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text)'}}>Pitch de 15 minutos. Decisores saíam impressionados, mas confusos:</p>

              <div style={{
                background: 'rgba(0,0,0,0.2)', 
                padding: '2rem', 
                borderRadius: '12px', 
                border: '1px solid var(--color-border)', 
                width: '100%', 
                maxWidth: '600px', 
                margin: '0 auto 2rem',
                textAlign: 'center'
              }}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px'}}>O Padrão Invisível</h4>
                <ul style={{listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left'}}> 
                  <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> "É consultoria ou software?"</li>
                  <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> ROI comprovado mas não comunicado</li>
                  <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Pitch para quem aprecia (clínicos) vs quem aprova orçamento (CFOs)</li>
                  <li style={{marginBottom: '0', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> História de superação pessoal desconectada da tese comercial</li>
                </ul>
              </div>
              
              <p style={{color: 'var(--color-text)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', margin: '0 auto', maxWidth: '700px'}}> 
                "Isabella vendia humanização do cuidado para diretores clínicos apaixonados. Mas quem aprovava o orçamento eram CFOs pressionados por custo. A conversa acontecia no canal errado."
              </p>
            </div>

            <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '3rem', fontSize: '1.2rem'}}>
              Insight cruel: Inovação sem clareza não é vantagem competitiva. É desvantagem comercial.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: DA COMPLEXIDADE PARA CATEGORIA (TIMELINE)                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Engenharia de Categoria: Transformando Complexidade em Autoridade</h2>
          <p className="lead-text">Timeline: Transformação em 90 Dias</p>
          
          {/* Timeline Visual */}
          <div className="case-timeline-visual" style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '90%', 
            maxWidth: '800px',
            margin: '4rem auto 6rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>Validação</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem', opacity: 0.7}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>Categoria</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem', opacity: 0.7}}>30 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>Captação</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem', opacity: 0.7}}>45 dias</div> 
            </div>
          </div>

          {/* GRID DE FASES (FULL WIDTH / 1 COLUNA) */}
          <div className="pillar-grid-revolutionary" style={{
            gridTemplateColumns: '1fr', 
            gap: '4rem',
            marginTop: '2rem'
          }}>
            
            {/* FASE 1 */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><Target size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>FASE 1: Validação Comercial</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 15 dias | Ferramenta: Mapeamento de Decisão</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto', textAlign: 'center'}}>
                Decodificamos o processo decisório real nos hospitais.
              </p>
              
              <ul style={{listStyle: 'none', padding: 0, margin: '0 auto 2rem', color: 'var(--color-text)', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> <strong>Decisor real:</strong> CFO (não clínico)</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> <strong>Objeção:</strong> "Mais uma consultoria"</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> <strong>Gatilho:</strong> ROI tangível</li>
              </ul>

              <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)', maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
                <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>O Ajuste de Canal:</strong>
                <p style={{fontSize: '1rem', margin: 0, color: 'var(--color-text)'}}>
                  Mudamos a conversa de "cuidado humanizado" para <strong>"redução de custo de paciente de alto valor em 5.8x"</strong>.
                </p>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><Layers size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>FASE 2: Criação de Categoria</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 30 dias | Entrega: Oceano Azul</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem', textAlign: 'center'}}>
                Não reposicionamos a empresa. Criamos a categoria.
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem', alignItems: 'center'}}>
                <div style={{background: 'rgba(0,0,0,0.2)', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid var(--color-border)'}}>
                  <strong>Antes:</strong> "Cuidado Farmacêutico"
                </div>
                <ArrowRight size={24} style={{color: 'var(--color-primary)', transform: 'rotate(90deg)'}} />
                <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid var(--color-primary)'}}>
                  <strong>Depois:</strong> "CareOps Integrativo: Nova Arquitetura de Cuidado ao Paciente Crônico"
                </div>
              </div>

               <h4 style={{color: 'var(--color-heading)', fontSize: '1.1rem', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>Estrutura:</h4>
               <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center'}}>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Atenção Farmacêutica + Dados</li>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> 5.8x redução de custo</li>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> 3 verticais claras</li>
               </ul>
               
               <div style={{marginTop: '2rem', textAlign: 'center'}}>
                 <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="btn-case-revolutionary" style={{fontSize: '1rem'}}>
                   Ver a categoria <ArrowRight size={18} />
                 </a>
               </div>
            </div>

            {/* FASE 3 */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><BrainCircuit size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>FASE 3: Plataforma + Captação</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 45 dias | Resultado: R$ 500k captados</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto', textAlign: 'center'}}>
                 Com a clareza estabelecida, materializamos a nova tese em ativos executáveis: Pitch Deck estruturado e Plataforma Digital de conversão.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '700px', margin: '0 auto'}}>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem'}}>
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>ETAPA 1 — Fundação</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '1rem'}}>
                      <li>Plataforma de Arquitetura</li>
                      <li>ROI de 5.8x como centro</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>ETAPA 2 — Expansão (G-Ops)</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '1rem'}}>
                      <li>Interoperabilidade sistêmica</li>
                      <li>Analytics de ROI em tempo real</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{background: 'rgba(0, 150, 132, 0.15)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)', textAlign: 'center'}}>
                    <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Resultado Imediato</h4>
                    <p style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0}}>R$ 500k captados (Compete Minas) em 45 dias.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 3: ANTES / DEPOIS                                              */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">O Resultado da Engenharia</h2>

          <div className="comparison-grid" style={{
            maxWidth: '900px', 
            margin: '3rem auto',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            background: 'var(--color-card-bg)',
            padding: '3rem'
          }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center'}}>
              <div style={{textAlign: 'right'}}>
                <h4 style={{color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Antes</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', lineHeight: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                  <li>Pitch de 15 minutos confuso</li>
                  <li>"O que vocês fazem?"</li>
                  <li>ROI validado mas não comunicado</li>
                  <li>Modelo disperso sem hierarquia</li>
                  <li>Zero investimento captado</li>
                  <li>História isolada da proposta</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)', opacity: 0.5}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-heading)', lineHeight: 2, fontWeight: 500}}>
                  <li>Pitch de 3 minutos cristalino</li>
                  <li>"Quando começamos?"</li>
                  <li>ROI como diferenciação central</li>
                  <li>3 verticais + camada G-Ops</li>
                  <li>R$ 500k captados</li>
                  <li>História como prova viva</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          <div className="truths-grid-revolutionary" style={{justifyContent: 'center'}}>
            <div className="glass-card-premium" style={cardStyle}>
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>R$ 500k</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>captados</p> 
            </div>
            <div className="glass-card-premium" style={cardStyle}>
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>5.8x</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>ROI validado</p> 
            </div>
            <div className="glass-card-premium" style={cardStyle}>
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>90</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias do diagnóstico à captação</p> 
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', marginTop: '5rem'}}>
            MÉTRICA QUE REALMENTE IMPORTA 
          </h3>
          <p className="lead-text" style={{color: 'var(--color-heading)', fontStyle: 'italic'}}>
            De complexo para inevitável. De "vamos pensar" para cheque de R$ 500k.
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            Categoria que antes não existia.
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: O TRABALHO CONTINUA (NOVA SEÇÃO DE DETALHES EM CARDS)       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Da Captação para Tração de Mercado</h2>
          <p className="lead-text" style={{marginBottom: '3rem'}}>
            Com categoria criada e R$ 500k captados, o foco mudou de validar tese para gerar tração.
          </p>
          <p className="lead-text" style={{fontSize: '1rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '-2rem', marginBottom: '3rem'}}>
            Status Atual: Advisory Board (até dezembro/2025)
          </p>

          {/* Cards Destacados para as Frentes (Grid Horizontal) */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
            
            {/* Frente 1: Card Destacado */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><Target size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>Frente 1: Validação de Mercado</h3>
              <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>Participação ativa em eventos de Negócios e Tecnologia.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-primary)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Objetivos</strong>
                      <p style={{fontSize: '0.9rem', margin: 0, color: 'var(--color-text)'}}>Testar pitches, identificar objeções, refinar narrativa com feedback real e conectar com decisores.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-accent)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Resultado Prático</strong>
                      <p style={{fontSize: '0.9rem', margin: 0, color: 'var(--color-text)'}}>Cada evento é laboratório de validação. Pitch evolui com base em perguntas reais de CFOs.</p>
                  </div>
              </div>
            </div>

            {/* Frente 2: Card Destacado */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>Frente 2: Governança Estratégica</h3>
              <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>Atuação como Advisory Board para guiar decisões críticas.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-primary)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Decisões Críticas</strong>
                      <p style={{fontSize: '0.9rem', margin: 0, color: 'var(--color-text)'}}>Priorização de verticais (Hospitais vs Empresas), estratégia de parcerias e modelagem de receita.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-accent)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Princípio</strong>
                      <p style={{fontSize: '0.9rem', margin: 0, color: 'var(--color-text)'}}>Decisões de alto impacto não podem ser baseadas em intuição quando você tem R$ 500k para investir.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: VOZ DO CLIENTE (ATUALIZADO)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">VOZ DO CLIENTE</h2>
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle at top, rgba(0, 150, 132, 0.15), transparent 70%)',
            textAlign: 'center',
            padding: '4rem 2rem',
            margin: '0 auto',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.35rem', fontFamily: "'Inter', sans-serif", color: '#e0e0e0', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300, fontStyle: 'italic'}}>
                "A Synapse B2B nos deu o que nenhuma aceleradora havia entregue: <strong>clareza</strong>. Eles conectaram nossa expertise técnica com a linguagem que hospitais e investidores precisavam ouvir. Saímos de 'solução complexa' para 'nova categoria'. O resultado? R$ 500k captados. E agora continuam ao nosso lado como Advisory Board, guiando as decisões que vão transformar investimento em tração real."
              </p>
            </blockquote>

            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                src="/cases/Isabella-Albuquerque.jpg"
                alt="Isabella Albuquerque"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Isabella Albuquerque 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0}}>CEO & Founder - Versão Holística</p>
              </div>
            </div>

             <div style={{marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <span className="case-card-tag-rev">R$ 500k captados</span>
                <span className="case-card-tag-rev">Advisory Board ativo</span>
             </div>
             
             <div style={{marginTop: '2rem'}}>
               <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="btn-case-revolutionary" style={{fontSize: '0.9rem'}}>
                 Ver a plataforma funcionando <ArrowRight size={16} />
               </a>
             </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: A LIÇÃO DE CATEGORIA (CTA FINAL)                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary" style={{padding: '8rem 0'}}>
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <Gem size={64} style={{color: 'var(--color-primary)', marginBottom: '2rem', margin: '0 auto', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Sua solução também é inovadora mas ninguém investe?</h2>
          
          <p className="lead-text" style={{fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '3rem', fontWeight: 600, textAlign: 'center'}}>
            Você não precisa de mais validação técnica. Você precisa de clareza de categoria + governança de execução.
          </p>
          
          <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'left', display: 'inline-block'}}>
             <ul style={{listStyle: 'none', padding: 0, fontSize: '1.2rem', color: 'var(--color-text)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Metodologia validada mas pitch que não converte</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Produto tecnicamente superior perdendo para narrativas mais simples</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Investidores impressionados mas sem cheque</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Você vende features, não impacto de negócio</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Você captou mas não sabe qual vertical atacar primeiro</li>
             </ul>
          </div>

          <div className="section-cta" style={{marginTop: '3rem'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '2rem', fontSize: '0.9rem'}}>
            Vamos traduzir sua inovação em tese investível — e depois em tração real.<br/>
            Primeira conversa: 21 minutos para mapear sua narrativa de captação e estratégia de escala.
          </p>

          {/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.8rem', opacity: 0.8}}>Prefere estudar o caso antes?</p>
            <Link href="/pdf/synapse-case-versaoholistica.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem', padding: '0.8rem 2rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Estilos específicos (CSS-in-JS) */}
      <style jsx>{`
         .glass-card-premium {
           transition: all 0.4s ease;
           border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card-premium:hover {
           transform: translateY(-5px);
           border-color: var(--color-primary);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2); /* Glow */
        }
         .case-phases-grid {
            /* Ajustes específicos se necessário */
         }
         .comparison-row:last-child {
            border-bottom: none;
         }
         @media (max-width: 900px) {
            .pillar-grid-revolutionary {
               grid-template-columns: 1fr !important;
            }
         }
      `}</style>
    </>
  );
}