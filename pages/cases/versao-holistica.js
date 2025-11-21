// pages/cases/versao-holistica.js
// REFATORADO: Alinhamento Central + Estética Plataformas + Browser Window + PDF

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

  return (
    <>
      <Head>
        <title>Case Versão Holística | Synapse B2B</title>
        <meta name="description" content="De metodologia validada para categoria de mercado. R$ 500k captados e oceano azul criado em 90 dias." /> 
      </Head>

      {/* ====================================================================== */}
      {/* HERO: O IMPACTO IMEDIATO                                               */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero"> 
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
            <Layers size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          </div>

          <h1 className="hero-headline">
            De Metodologia Validada para <br/>Categoria de Mercado
          </h1>
          <p className="hero-subheadline lead-text">
            ROI de 5.8x provado pela UFMG. Pitch que não convertia. <br/>90 dias depois: R$ 500k captados e oceano azul criado.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O PROBLEMA (Centralizado)                                     */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          <h2 className="section-title">O Gargalo da Inovação</h2>
          <p className="lead-text" style={{fontWeight: 600, color: 'var(--color-accent)'}}>Quando Genialidade Técnica Trava Receita</p>
          
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
              A Versão Holística tinha tudo para escalar: metodologia com validação científica (UFMG), ROI comprovado de 5.8x em pacientes crônicos, parcerias com hospitais de referência.
            </p>
            <p style={{fontWeight: 700, marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Menos uma coisa: <strong>clareza de negócio</strong>.</p>

            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>O Pitch que Confundia Investidores</h3>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>Pitch de 15 minutos. Decisores saíam impressionados, mas confusos.</p>

            <div style={{
              background: 'rgba(0,0,0,0.2)', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '1px solid var(--color-border)', 
              width: '100%', 
              maxWidth: '700px', 
              margin: '0 auto 2rem'
            }}>
              <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px'}}>O Padrão Invisível</h4>
              
              <ul style={{
                padding: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem'
              }}> 
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><XCircle size={20} color="#ef4444"/> "É consultoria ou software?"</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><XCircle size={20} color="#ef4444"/> ROI comprovado mas não comunicado</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><XCircle size={20} color="#ef4444"/> Pitch para clínicos vs CFOs (Financeiro)</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><XCircle size={20} color="#ef4444"/> História pessoal desconectada da tese</li>
              </ul>
            </div>
            
            <p style={{fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', maxWidth: '700px', marginInline: 'auto'}}> 
              "Isabella vendia humanização do cuidado para diretores clínicos apaixonados. Mas quem aprovava o orçamento eram CFOs pressionados por custo. A conversa acontecia no canal errado."
            </p>
          </div>

          <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '3rem', fontSize: '1.2rem', textAlign: 'center'}}>
            Insight cruel: Inovação sem clareza não é vantagem competitiva. É desvantagem comercial.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: DA COMPLEXIDADE PARA CATEGORIA (TIMELINE)                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title">Engenharia de Categoria: Transformando Complexidade em Autoridade</h2>
          <p className="lead-text">Timeline: Transformação em 90 Dias</p>
          
          {/* Timeline Visual Centralizada */}
          <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '90%', 
            maxWidth: '800px',
            margin: '4rem auto 6rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            {[
                { title: 'Validação', time: '15 dias' },
                { title: 'Categoria', time: '30 dias' },
                { title: 'Captação', time: '45 dias' }
            ].map((item, i) => (
                <div key={i} style={{textAlign: 'center', position: 'relative', flex: 1}}>
                    <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
                    <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>{item.title}</div>
                    <div style={{color: 'var(--color-text-muted)', fontSize: '0.85rem'}}>{item.time}</div> 
                </div>
            ))}
          </div>

          {/* GRID DE FASES (Centralizado) */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '4rem'}}>
            
            {/* FASE 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Target size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 1: Validação Comercial</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 15 dias | Ferramenta: Mapeamento de Decisão</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto'}}>
                Decodificamos o processo decisório real nos hospitais.
              </p>
              
              <ul style={{padding: 0, margin: '0 auto 2rem', fontSize: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> <strong>Decisor real:</strong> CFO (não clínico)</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> <strong>Objeção:</strong> "Mais uma consultoria"</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> <strong>Gatilho:</strong> ROI tangível</li>
              </ul>

              <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)', maxWidth: '700px', margin: '0 auto'}}>
                <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>O Ajuste de Canal:</strong>
                <p style={{fontSize: '1rem', margin: 0}}>
                  Mudamos a conversa de "cuidado humanizado" para <strong>"redução de custo de paciente de alto valor em 5.8x"</strong>.
                </p>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Layers size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 2: Criação de Categoria</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 30 dias | Entrega: Oceano Azul</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem'}}>
                Não reposicionamos a empresa. Criamos a categoria.
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem', alignItems: 'center', width: '100%'}}>
                <div style={{
                    background: 'rgba(0,0,0,0.2)', padding: '1rem 2rem', borderRadius: '8px', 
                    border: '1px solid var(--color-border)', width: '100%', maxWidth: '600px'
                }}>
                  <strong>Antes:</strong> "Cuidado Farmacêutico"
                </div>
                
                <ArrowRight size={24} style={{color: 'var(--color-primary)', transform: 'rotate(90deg)'}} />
                
                <div style={{
                    background: 'rgba(0, 150, 132, 0.1)', padding: '1rem 2rem', borderRadius: '8px', 
                    border: '1px solid var(--color-primary)', width: '100%', maxWidth: '600px'
                }}>
                  <strong>Depois:</strong> "CareOps Integrativo: Nova Arquitetura de Cuidado ao Paciente Crônico"
                </div>
              </div>

               {/* Imagem estilo Browser */}
               <div style={{
                 width: '100%', maxWidth: '800px', margin: '0 auto 2.5rem',
                 borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                 boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.2)',
                 overflow: 'hidden', background: '#111'
               }}>
                  <div style={{
                    height: '30px', background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', padding: '0 1rem', gap: '6px'
                  }}>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ff5f56'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#009684'}}></div>
                  </div>
                  <Image 
                    src="/cases/vh-home.png"
                    alt="Plataforma Versão Holística"
                    width={1000}
                    height={500}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

               <h4 style={{color: 'var(--color-heading)', fontSize: '1.1rem', marginTop: '1rem', marginBottom: '1rem'}}>Estrutura da Solução:</h4>
               <ul style={{padding: 0, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center'}}>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Atenção Farmacêutica + Dados</li>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> 5.8x redução de custo</li>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> 3 verticais claras</li>
               </ul>
               
               <div style={{marginTop: '2rem'}}>
                 <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="btn" style={{fontSize: '1rem'}}>
                   Ver a categoria <ArrowRight size={18} />
                 </a>
               </div>
            </div>

            {/* FASE 3 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><BrainCircuit size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 3: Plataforma + Captação</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 45 dias | Resultado: R$ 500k captados</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto'}}>
                 Com a clareza estabelecida, materializamos a nova tese em ativos executáveis: Pitch Deck estruturado e Plataforma Digital de conversão.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '700px', margin: '0 auto', alignItems: 'center'}}>
                
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', width: '100%'}}>
                  <div style={{flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px'}}>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>ETAPA 1 — Fundação</h4>
                    <ul style={{padding: 0, fontSize: '1rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center'}}>
                      <li>Plataforma de Arquitetura</li>
                      <li>ROI de 5.8x como centro</li>
                    </ul>
                  </div>
                  <div style={{flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px'}}>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>ETAPA 2 — Expansão</h4>
                    <ul style={{padding: 0, fontSize: '1rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center'}}>
                      <li>Interoperabilidade sistêmica</li>
                      <li>Analytics de ROI em tempo real</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{background: 'rgba(0, 150, 132, 0.15)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)', width: '100%'}}>
                    <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Resultado Imediato</h4>
                    <p style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0}}>R$ 500k captados (Compete Minas) em 45 dias.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 3: ANTES / DEPOIS & RESULTADOS                                   */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">O Resultado da Engenharia</h2>

          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '3rem auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center', width: '100%'}}>
              <div style={{textAlign: 'center'}}>
                <h4 style={{color: 'var(--color-text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Antes</h4>
                <ul style={{padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.7, listStyle: 'none'}}>
                  <li>Pitch de 15 minutos confuso</li>
                  <li>"O que vocês fazem?"</li>
                  <li>ROI validado mas não comunicado</li>
                  <li>Modelo disperso sem hierarquia</li>
                  <li>Zero investimento captado</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)', opacity: 0.5}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'center'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Depois</h4>
                <ul style={{padding: 0, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', listStyle: 'none'}}>
                  <li>Pitch de 3 minutos cristalino</li>
                  <li>"Quando começamos?"</li>
                  <li>ROI como diferenciação central</li>
                  <li>3 verticais + camada G-Ops</li>
                  <li>R$ 500k captados</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="section-title" style={{fontSize: '1.8rem', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          <div className="truths-grid-revolutionary" style={{justifyContent: 'center'}}>
            <div className="glass-card-premium">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>R$ 500k</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>captados</p> 
            </div>
            <div className="glass-card-premium">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>5.8x</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>ROI validado</p> 
            </div>
            <div className="glass-card-premium">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>90</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias do diagnóstico à captação</p> 
            </div>
          </div>

          <div style={{marginTop: '5rem', padding: '2rem', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '16px', display: 'inline-block'}}>
            <h3 style={{fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '1rem'}}>
              Métrica que Realmente Importa
            </h3>
            <p className="lead-text" style={{fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0}}>
              De complexo para inevitável. De "vamos pensar" para cheque de R$ 500k.
            </p>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: O TRABALHO CONTINUA                                           */}
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

          {/* Cards Destacados para as Frentes */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            
            {/* Frente 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Target size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>Frente 1: Validação de Mercado</h3>
              <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>Participação ativa em eventos de Negócios e Tecnologia.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', alignItems: 'center'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Objetivos</strong>
                      <p style={{fontSize: '0.9rem', margin: 0}}>Testar pitches, identificar objeções, refinar narrativa com feedback real e conectar com decisores.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-accent)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Resultado Prático</strong>
                      <p style={{fontSize: '0.9rem', margin: 0}}>Cada evento é laboratório de validação. Pitch evolui com base em perguntas reais de CFOs.</p>
                  </div>
              </div>
            </div>

            {/* Frente 2 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>Frente 2: Governança Estratégica</h3>
              <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>Atuação como Advisory Board para guiar decisões críticas.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', alignItems: 'center'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Decisões Críticas</strong>
                      <p style={{fontSize: '0.9rem', margin: 0}}>Priorização de verticais (Hospitais vs Empresas), estratégia de parcerias e modelagem de receita.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', borderTop: '3px solid var(--color-accent)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)'}}>Princípio</strong>
                      <p style={{fontSize: '0.9rem', margin: 0}}>Decisões de alto impacto não podem ser baseadas em intuição quando você tem R$ 500k para investir.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: VOZ DO CLIENTE                                                */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">VOZ DO CLIENTE</h2>
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <blockquote style={{border: 'none', padding: 0}}>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '2rem', color: '#e0e0e0'}}>
                "A Synapse B2B nos deu o que nenhuma aceleradora havia entregue: <strong>clareza</strong>. Eles conectaram nossa expertise técnica com a linguagem que hospitais e investidores precisavam ouvir. Saímos de 'solução complexa' para 'nova categoria'. O resultado? R$ 500k captados. E agora continuam ao nosso lado como Advisory Board, guiando as decisões que vão transformar investimento em tração real."
              </p>
              
              <footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem'}}>
                 <Image 
                   src="/cases/Isabella-Albuquerque.jpg" 
                   alt="Isabella Albuquerque" 
                   width={60} 
                   height={60} 
                   style={{borderRadius: '50%', border: '2px solid var(--color-primary)'}}
                 />
                 <div style={{textAlign: 'left'}}>
                    <strong style={{display: 'block', color: '#fff'}}>Isabella Albuquerque</strong>
                    <span style={{fontSize: '0.9rem', color: 'var(--color-text-muted)'}}>CEO & Founder - Versão Holística</span>
                 </div>
              </footer>
            </blockquote>

             <div style={{marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', border: '1px solid var(--color-primary)'}}>R$ 500k captados</span>
                <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', border: '1px solid var(--color-primary)'}}>Advisory Board ativo</span>
             </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: CTA FINAL + PDF                                               */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <Gem size={64} style={{color: 'var(--color-primary)', marginBottom: '2rem', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Sua solução também é inovadora mas ninguém investe?</h2>
          
          <p className="lead-text" style={{fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '3rem', fontWeight: 600, textAlign: 'center'}}>
            Você não precisa de mais validação técnica. Você precisa de clareza de categoria + governança de execução.
          </p>
          
          <div style={{maxWidth: '700px', margin: '0 auto', display: 'inline-block'}}>
             <ul style={{padding: 0, fontSize: '1.2rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Metodologia validada mas pitch que não converte</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Produto tecnicamente superior perdendo para narrativas mais simples</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Investidores impressionados mas sem cheque</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Você vende features, não impacto de negócio</li>
             </ul>
          </div>

          <div className="section-cta" style={{marginTop: '3rem'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.9, marginTop: '2rem', fontSize: '0.9rem'}}>
            Vamos traduzir sua inovação em tese investível — e depois em tração real.<br/>
            Primeira conversa: 21 minutos para mapear sua narrativa de captação e estratégia de escala.
          </p>

          {/* Link de Download do PDF */}
          <div id="download-pdf" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.8rem', opacity: 0.8}}>Prefere estudar o caso antes?</p>
            <a 
              href="/pdf/synapse-case-versaoholistica.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn" 
              style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}
            >
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}