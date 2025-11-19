// pages/cases/aorkia.js
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
  GitBranch, 
  LineChart,
  ShieldCheck, 
  Zap,
  Gem,
  XCircle
} from 'lucide-react';

export default function AorkiaCase() {

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
    height: '100%', // Garante altura igual em grids
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
        <title>Case AORKIA | Synapse B2B</title>
        <meta name="description" content="De zero a parceiro oficial em 45 dias. Como validamos o método Synapse entrando em um mercado dominado por gigantes sem histórico prévio." /> 
      </Head>

      {/* ====================================================================== */}
      {/* HERO                                                                   */}
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
            <ShieldCheck size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          </div>

          <h1 className="section-title" style={{textTransform: 'none'}}>
            De Zero a Parceiro Oficial <br/>em 45 Dias
          </h1>
          <p className="hero-subheadline wider-on-desktop" style={{textAlign: 'center'}}>
            Como uma startup sem histórico entrou em mercado técnico dominado por gigantes e fechou 1.200+ usuários na primeira venda.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O CONTEXTO                                                    */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up" style={{background: '#050505'}}>
        <div className="container text-center">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            
            <h2 className="section-title" style={{marginBottom: '0.5rem'}}>O Ponto de Partida:</h2>
            <h2 className="section-title" style={{fontSize: '2.5rem', color: 'var(--color-primary)', marginTop: 0}}>Engenharia de Receita na Prática</h2>
            
            <p className="lead-text" style={{marginBottom: '3rem', opacity: 0.9, textAlign: 'center'}}>
              Este case é a prova definitiva do método. A AORKIA foi fundada para validar a Engenharia de Receita "dentro de casa", aplicando o método no próprio negócio, sem rede de segurança.
            </p>

            {/* Card Premium: Cenário Adverso */}
            <div className="glass-card-premium" style={cardStyle}>
              <h3 style={{color: 'var(--color-heading)', fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center'}}>O Cenário Adverso</h3>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem'}}>
                Entrar no mercado de Cyber Resilience (Backup SaaS) dominado por gigantes como Veeam e Acronis.
              </p>
              
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
                 <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'inline-block', textAlign: 'left'}}>
                  <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ef4444'}}><XCircle size={20}/> Zero base de clientes</li>
                  <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ef4444'}}><XCircle size={20}/> Zero reconhecimento de marca</li>
                  <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#ef4444'}}><XCircle size={20}/> Budget de marketing limitado</li>
                  <li style={{marginBottom: '0', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-primary)'}}><Target size={20}/> <strong>Meta:</strong> Provar tração em 45 dias</li>
                </ul>
              </div>

              <p style={{fontStyle: 'italic', color: 'var(--color-text)', opacity: 0.8, fontSize: '1.1rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
                "A única vantagem competitiva era uma parceria técnica com a Keepit (Líder Global). Mas parceria técnica sem método comercial é irrelevante."
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: A SOLUÇÃO (TIMELINE & FASES)                                  */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up" style={{paddingTop: '5rem'}}>
        <div className="container text-center">
          <h2 className="section-title">A Solução (Timeline)</h2>
          <p className="lead-text" style={{textAlign: 'center'}}>Velocidade de Execução: 45 Dias</p>
          
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
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>Ancoragem</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem', opacity: 0.7}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>Urgência</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem', opacity: 0.7}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>Tração</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem', opacity: 0.7}}>15 dias</div> 
            </div>
          </div>

          {/* GRID DE FASES (FULL WIDTH - 1 COLUNA) */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '4rem'}}>
            
            {/* FASE 1 - Card Premium */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>Fase 1: Engenharia de Autoridade</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center'}}>Estratégia: Transferência de Credibilidade</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '600px', margin: '0 auto'}}>
                  <div style={{background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)', fontSize: '0.9rem', textTransform: 'uppercase'}}>De:</strong>
                      <p style={{fontSize: '1.1rem', margin: 0, color: 'var(--color-text)', opacity: 0.7}}>"Revendedor de backup Keepit"</p>
                  </div>
                   <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-primary)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '0.9rem', textTransform: 'uppercase'}}>Para:</strong>
                      <p style={{fontSize: '1.2rem', margin: 0, color: 'var(--color-heading)', fontWeight: 600}}>"Parceiro Oficial Keepit — Líder Global em Backup SaaS"</p>
                  </div>
              </div>

              <p style={{marginTop: '2rem', fontSize: '1rem', maxWidth: '700px', marginInline: 'auto', lineHeight: 1.6, textAlign: 'center'}}>
                Decisores B2B não compram de startups desconhecidas por medo do risco. Ao ancorar na Keepit, transferimos credibilidade e reduzimos a barreira de entrada.
              </p>
            </div>

            {/* FASE 2 - Card Premium */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><Zap size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>Fase 2: Arquitetura de Risco</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center'}}>Entrega: Narrativa de Risco Tangível</p>
              
               <div style={{background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)', width: '100%', maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center'}}>
                  <strong style={{display: 'block', marginBottom: '1rem', color: 'var(--color-heading)', fontSize: '1.2rem'}}>A Nova Narrativa:</strong>
                  <p style={{fontSize: '1.25rem', margin: 0, color: 'var(--color-primary)', fontFamily: 'Montserrat, sans-serif', fontWeight: 500}}>
                    "Seu Google Workspace NÃO faz backup. O que acontece se você for hackeado hoje?"
                  </p>
              </div>

              <div className="case-image-wrapper" style={{margin: '0 auto 2rem', maxWidth: '800px', ...imageGlowStyle}}>
                <Image 
                  src="/cases/aorkia-home.png" 
                  alt="Homepage AORKIA com headline de urgência"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: 'auto', borderRadius: '12px' }}
                />
              </div>
            </div>

            {/* FASE 3 - Card Premium */}
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}><Gem size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem', textAlign: 'center'}}>Fase 3: Plataforma + Canal</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center'}}>Resultado: Primeira venda 1.200+ usuários</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid var(--color-primary)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '1rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>O Que Fizemos</strong>
                      <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center'}}>
                        <li style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Plataforma focada em risco</li>
                        <li style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Outbound para CISOs</li>
                        <li style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Pitch: "Seguro contra Ransomware"</li>
                      </ul>
                  </div>

                   <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid var(--color-accent)', textAlign: 'center'}}>
                      <strong style={{display: 'block', marginBottom: '1rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Resultado (Dia 45)</strong>
                      <p style={{fontSize: '1.1rem', margin: 0, color: 'var(--color-text)'}}>
                        Primeira venda enterprise fechada em 45 dias: <br/>
                        <span style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-heading)', display: 'block', marginTop: '1rem'}}>1.200+ usuários</span>
                      </p>
                  </div>
              </div>

               <div className="case-image-wrapper" style={{marginTop: '3rem', maxWidth: '800px', ...imageGlowStyle}}>
                  <Image 
                    src="/cases/aorkia-backup-saas-estrategico.png"
                    alt="Página de soluções AORKIA"
                    width={1000}
                    height={500}
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
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
          <h2 className="section-title">Resultados</h2>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem', marginTop: '-1rem', fontWeight: 300, textAlign: 'center'}}>
            Transformação em 45 Dias
          </h3>

          <div className="comparison-grid" style={{
            maxWidth: '900px', 
            margin: '0 auto 5rem',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            background: 'var(--color-card-bg)',
            padding: '3rem'
          }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center'}}>
              <div style={{textAlign: 'right'}}>
                <h4 style={{color: 'var(--color-text)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Antes</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', lineHeight: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                  <li style={{opacity: 0.7}}>Zero histórico</li>
                  <li style={{opacity: 0.7}}>Ideia no papel</li>
                  <li style={{opacity: 0.7}}>Sem tração comercial</li>
                  <li style={{opacity: 0.7}}>Competindo com gigantes</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)', opacity: 0.5}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-heading)', lineHeight: 2, fontWeight: 500}}>
                  <li>Parceiro Oficial Keepit</li>
                  <li>Plataforma de conversão ativa</li>
                  <li>1ª Venda (1.200 usuários)</li>
                  <li>Diferenciação clara (Urgência)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem', fontWeight: 300, textAlign: 'center'}}>
            Números em Destaque
          </h3>
          <div className="truths-grid-revolutionary" style={{justifyContent: 'center'}}> 
            <div className="glass-card-premium" style={cardStyle}>
              <h3 className="truth-card-title" style={{fontSize: '3.5rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>1.200+</h3> 
              <p style={{fontSize: '1.1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '1px'}}>usuários 1ª venda</p> 
            </div>
            <div className="glass-card-premium" style={cardStyle}>
              <h3 className="truth-card-title" style={{fontSize: '3.5rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>45</h3> 
              <p style={{fontSize: '1.1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '1px'}}>dias</p> 
            </div>
            <div className="glass-card-premium" style={cardStyle}>
              <h3 className="truth-card-title" style={{fontSize: '3.5rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>100%</h3> 
              <p style={{fontSize: '1.1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '1px'}}>método validado</p> 
            </div>
          </div>

          <div style={{marginTop: '5rem', padding: '2rem', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '16px', display: 'inline-block', textAlign: 'center'}}>
            <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '1rem'}}>
              Métrica que Realmente Importa
            </h3>
            <p style={{fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0}}>
              De zero para receita em 45 dias. 
            </p>
          </div>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: VOZ DO CLIENTE (A PROVA DEFINITIVA)                          */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">A Prova Definitiva</h2> 
          
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
                "Qualquer consultor pode vender método. Eu apliquei o meu no meu próprio negócio, sob condições extremas: zero histórico, mercado dominado por gigantes, 45 dias de prazo. Resultado: Parceiro Oficial Keepit + primeira venda de 1.200+ usuários. Não é teoria. É Engenharia de Receita validada com pele no jogo."
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem'}}>
              <Image
                src="/cases/Julio-Figueiredo.jpg" 
                alt="Júlio Figueiredo"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Júlio Figueiredo 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0, fontSize: '0.9rem'}}>Founder & CRO - Synapse B2B<br/>Founder & CRO - AORKIA</p> 
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: LEARNINGS ESTRATÉGICOS                                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow section-truths-revolutionary reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Learnings Estratégicos</h2>
          <p className="lead-text" style={{marginBottom: '4rem', textAlign: 'center'}}>O Que Este Caso Ensina</p>
          
          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}>
                <ShieldCheck size={32} />
              </div>
              <h3 className="truth-card-title" style={{textAlign: 'center', fontSize: '1.2rem'}}>Histórico Não é Pré-Requisito</h3> 
              <p style={{textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.6}}>Quando você não tem credibilidade própria, transfira credibilidade de quem tem. "Se o líder global escolheu a AORKIA, você pode confiar."</p>
            </div>
            
            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}>
                <Zap size={32} />
              </div>
              <h3 className="truth-card-title" style={{textAlign: 'center', fontSize: '1.2rem'}}>Ative a Dor Antes da Solução</h3> 
              <p style={{textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.6}}>Cliente não acorda pensando "preciso de backup". Acorda pensando em "risco". Fazer sentir a dor financeira <strong>antes</strong> da perda.</p>
            </div>

            <div className="glass-card-premium" style={cardStyle}>
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem', marginInline: 'auto'}}>
                <Gem size={32} />
              </div>
              <h3 className="truth-card-title" style={{textAlign: 'center', fontSize: '1.2rem'}}>Método Exige Pele no Jogo</h3> 
              <p style={{textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.6}}>Não foi consultoria. Foi laboratório pessoal. Metodologia não testada no próprio negócio do criador é teoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: CTA FINAL                                                    */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary" style={{padding: '8rem 0'}}>
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none', fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center'}}>
            Você Também Está Entrando em Mercado <br/>
            Competitivo sem Histórico?
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center'}}>
            Zero track record não é sentença de morte.
            É oportunidade de fazer diferente desde o início.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.7, marginTop: '2rem', fontSize: '0.9rem', textAlign: 'center'}}>
            Primeira conversa: 21 minutos para estruturar tração acelerada no seu negócio.
          </p>

          {/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '4rem', textAlign: 'center'}}>
            <p style={{marginBottom: '0.8rem', opacity: 0.8}}>Prefere estudar o case aorkia?</p> 
            <Link href="/pdf/synapse-case-aorkia.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem', padding: '0.8rem 2rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Global para Hover Effect (Receita Exata) */}
      <style jsx global>{`
        .glass-card-premium {
           transition: all 0.4s ease;
           border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card-premium:hover {
           transform: translateY(-5px);
           border-color: var(--color-primary);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2); /* Glow */
        }
      `}</style>
    </>
  );
}