// pages/cases/versao-holistica.js
// Versão Final Otimizada - Alinhamento Central Rigoroso + Ajustes de Texto e Imagem

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

        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Layers size={48} style={{color: 'var(--color-primary)'}} />
          </div>

          <h1 className="section-title">
            De Metodologia Validada para <br/>Categoria de Mercado
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            ROI de 5.8x provado pela UFMG. Pitch que não convertia. <br/>90 dias depois: R$ 500k captados e oceano azul criado.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O PARADOXO DA INOVAÇÃO                                      */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center"> {/* Centralizado */}
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="section-title">O Paradoxo da Inovação</h2>
            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem', marginTop: '-1rem'}}>Quando Genialidade Técnica Trava Receita</h3>
            
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              A Versão Holística tinha tudo para escalar: metodologia com validação científica (UFMG), ROI comprovado de 5.8x em pacientes crônicos, parcerias com hospitais de referência.
            </p>
            <p style={{fontWeight: 600, marginBottom: '3rem'}}>Menos uma coisa: <strong>clareza de negócio</strong>.</p>

            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem'}}>O Pitch que Confundia Investidores</h3>
            <p>Pitch de 15 minutos. Decisores saíam impressionados, mas confusos:</p>

            <div style={{
              background: 'rgba(0, 150, 132, 0.08)',
              border: '2px solid var(--color-primary)',
              borderRadius: '12px',
              padding: '2rem',
              margin: '2rem 0'
            }}>
              <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem'}}>O Padrão Invisível:</h4>
              <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}> 
                <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> "É consultoria ou software?"</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> ROI comprovado mas não comunicado</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Pitch para quem aprecia (clínicos) vs quem aprova orçamento (CFOs)</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> História de superação pessoal desconectada da tese comercial</li>
              </ul>
            </div>
            
            <p style={{color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem', margin: '2rem 0', textAlign: 'center', borderLeft: 'none', borderTop: '4px solid var(--color-primary)', paddingTop: '1.5rem'}}> {/* Ajuste visual para centralizado */}
              "Isabella vendia humanização do cuidado para diretores clínicos apaixonados. Mas quem aprovava o orçamento eram CFOs pressionados por custo. A conversa acontecia no canal errado."
            </p>

            <p><strong>Resultado:</strong> Hospitais interessados, sem conversão. Ciclos infinitos. Impossibilidade de captar.</p>
            <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '1rem'}}>
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
          <h2 className="section-title">Da Complexidade para Categoria</h2>
          <p className="lead-text">Timeline: Transformação em 90 Dias</p>
          
          {/* Timeline Visual */}
          <div className="case-timeline-visual" style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '90%', 
            maxWidth: '800px',
            margin: '3rem auto 5rem', 
            borderTop: '2px solid var(--color-border)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Validação</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Categoria</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>30 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Captação</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>45 dias</div> 
            </div>
          </div>

          {/* Grid de Fases (Horizontal) */}
          <div className="pillar-grid-revolutionary" style={{
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            
            {/* FASE 1 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><Target size={28} /></div>
                <h3 className="pillar-card-title">FASE 1: Validação Comercial</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 15 dias | Ferramenta: Mapeamento de Decisão</p>
                
                <p className="pillar-card-description">
                  Decodificamos o processo decisório real nos hospitais.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Decisor real:</strong> CFO (não clínico)</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Objeção:</strong> "Mais uma consultoria"</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Gatilho:</strong> ROI tangível</li>
                </ul>

                <div style={{marginTop: '1.5rem', padding: '1rem', background: 'var(--color-card-bg-hover)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>O Ajuste de Canal:</strong>
                  <p style={{fontSize: '0.9rem', margin: 0}}>
                    Mudamos a conversa de "cuidado humanizado" para <strong>"redução de custo de paciente de alto valor em 5.8x"</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><Layers size={28} /></div>
                <h3 className="pillar-card-title">FASE 2: Criação de Categoria</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 30 dias | Entrega: Oceano Azul</p>
                
                <p className="pillar-card-description">
                  Não reposicionamos a empresa. Criamos a categoria.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Antes:</strong> "Cuidado Farmacêutico"</li>
                  <li style={{marginBottom: '0.5rem', textAlign: 'center'}}>• <strong>Depois:</strong> "CareOps Integrativo: Nova Arquitetura de Cuidado ao Paciente Crônico"</li>
                </ul>

                 <h4 style={{color: 'var(--color-heading)', fontSize: '1rem', marginTop: '1rem', marginBottom: '0.5rem'}}>Estrutura:</h4>
                 <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                   <li style={{marginBottom: '0.5rem'}}>✔ Atenção Farmacêutica + Dados</li>
                   <li style={{marginBottom: '0.5rem'}}>✔ 5.8x redução de custo</li>
                   <li>✔ 3 verticais claras</li>
                 </ul>
                 
                 <div style={{marginTop: '1.5rem'}}>
                   <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="btn-case-revolutionary" style={{fontSize: '0.9rem'}}>
                     Ver a categoria <ArrowRight size={16} />
                   </a>
                 </div>
              </div>
            </div>

            {/* FASE 3 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><BrainCircuit size={28} /></div>
                <h3 className="pillar-card-title">FASE 3: Plataforma + Captação</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 45 dias | Resultado: R$ 500k captados</p>
                
                <p className="pillar-card-description">
                   Com a clareza estabelecida, materializamos a nova tese em ativos executáveis: Pitch Deck estruturado e Plataforma Digital de conversão.
                </p>

                <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1rem', width: '100%'}}>
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '0.95rem'}}>ETAPA 1 — Fundação:</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <li>• Plataforma de Arquitetura</li>
                      <li>• ROI de 5.8x como centro</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '0.95rem'}}>ETAPA 2 — Expansão (G-Ops):</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <li>• Interoperabilidade sistêmica</li>
                      <li>• Analytics de ROI em tempo real</li>
                    </ul>
                  </div>
                  
                  <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1rem', borderRadius: '12px', marginTop: '0.5rem', border: '1px solid var(--color-primary)'}}>
                      <h4 style={{color: 'var(--color-heading)', marginBottom: '0.25rem', fontSize: '0.9rem'}}>Resultado Imediato:</h4>
                      <p style={{fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)'}}>R$ 500k captados (Compete Minas) em 45 dias.</p>
                  </div>

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
          <h2 className="section-title">Transformação de Narrativa</h2>

          <div className="comparison-grid" style={{
            maxWidth: '900px', 
            margin: '3rem auto',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            background: 'var(--color-card-bg)',
            padding: '2rem'
          }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center'}}>
              <div style={{textAlign: 'right'}}> {/* Antes alinhado à direita para espelhar */}
                <h4 style={{color: 'var(--color-text)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Antes</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                  <li style={{marginBottom: '0.5rem'}}>Pitch de 15 minutos confuso <XCircle size={16} style={{display: 'inline', marginLeft: '8px', color: '#ef4444'}}/></li>
                  <li style={{marginBottom: '0.5rem'}}>"O que vocês fazem?" <XCircle size={16} style={{display: 'inline', marginLeft: '8px', color: '#ef4444'}}/></li>
                  <li style={{marginBottom: '0.5rem'}}>ROI validado mas não comunicado <XCircle size={16} style={{display: 'inline', marginLeft: '8px', color: '#ef4444'}}/></li>
                  <li style={{marginBottom: '0.5rem'}}>Modelo disperso sem hierarquia <XCircle size={16} style={{display: 'inline', marginLeft: '8px', color: '#ef4444'}}/></li>
                  <li style={{marginBottom: '0.5rem'}}>Zero investimento captado <XCircle size={16} style={{display: 'inline', marginLeft: '8px', color: '#ef4444'}}/></li>
                  <li>História isolada da proposta <XCircle size={16} style={{display: 'inline', marginLeft: '8px', color: '#ef4444'}}/></li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)'}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'left'}}> {/* Depois alinhado à esquerda */}
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-heading)', lineHeight: 1.8, fontWeight: 500}}>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Pitch de 3 minutos cristalino</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> "Quando começamos?"</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> ROI como diferenciação central</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> 3 verticais + camada G-Ops</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> R$ 500k captados</li>
                  <li><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> História como prova viva</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          <div className="truths-grid-revolutionary" style={{justifyContent: 'center'}}>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>R$ 500k</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>captados</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>5.8x</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>ROI validado</p> 
            </div>
            <div className="truth-card-revolutionary">
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
        <div className="container text-center"> {/* Centralizado */}
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
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><Target size={28} /></div>
                <h3 className="pillar-card-title">Frente 1: Validação de Mercado</h3>
                <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>Participação ativa em eventos de Negócios e Tecnologia.</p>
                
                {/* Blocos visuais melhorados para a Frente 1 */}
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
            </div>

            {/* Frente 2: Card Destacado */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><ShieldCheck size={28} /></div>
                <h3 className="pillar-card-title">Frente 2: Governança Estratégica</h3>
                <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>Atuação como Advisory Board para guiar decisões críticas.</p>
                
                 {/* Blocos visuais melhorados para a Frente 2 */}
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

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: VOZ DO CLIENTE (ATUALIZADO)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center"> {/* Centralizado */}
          <h2 className="section-title">VOZ DO CLIENTE</h2>
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle, rgba(0, 150, 132, 0.05), transparent 80%)',
            textAlign: 'center',
            padding: '3rem',
            margin: '0 auto'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.1rem', fontFamily: "'Inter', sans-serif", color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic'}}>
                "A Synapse B2B nos deu o que nenhuma aceleradora havia entregue: <strong>clareza</strong>. Eles conectaram nossa expertise técnica com a linguagem que hospitais e investidores precisavam ouvir. Saímos de 'solução complexa' para 'nova categoria'. O resultado? R$ 500k captados. E agora continuam ao nosso lado como Advisory Board, guiando as decisões que vão transformar investimento em tração real."
              </p>
            </blockquote>

            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              {/* IMAGEM CORRIGIDA PARA JPG */}
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

             <div style={{marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
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
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <Gem size={48} style={{color: 'var(--color-primary)', marginBottom: '1.5rem', margin: '0 auto'}} />
          <h2 className="section-title">Sua solução também é inovadora mas ninguém investe?</h2>
          
          <p className="lead-text" style={{fontSize: '1.3rem', color: 'var(--color-heading)', margin: '2rem auto 3rem', fontWeight: 600, textAlign: 'center'}}>
            Você não precisa de mais validação técnica. Você precisa de clareza de categoria + governança de execução.
          </p>
          
          <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'left', display: 'inline-block'}}>
             <ul style={{listStyle: 'none', padding: 0, fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Metodologia validada mas pitch que não converte</li>
               <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Produto tecnicamente superior perdendo para narrativas mais simples</li>
               <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Investidores impressionados mas sem cheque</li>
               <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Você vende features, não impacto de negócio</li>
               <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Você captou mas não sabe qual vertical atacar primeiro</li>
             </ul>
          </div>

          <div className="section-cta" style={{marginTop: '3rem'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Vamos traduzir sua inovação em tese investível — e depois em tração real.<br/>
            Primeira conversa: 21 minutos para mapear sua narrativa de captação e estratégia de escala.
          </p>

          {/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.5rem'}}>Prefere estudar o caso antes?</p>
            <Link href="/pdf/synapse-case-versaoholistica.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}