// pages/cases/aorkia.js
// Versão Final Otimizada - Padrão "Skin in the Game" e Validação Rápida

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
  ShieldCheck, // Ícone principal (Segurança/Credibilidade)
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

  return (
    <>
      <Head>
        <title>Case AORKIA | Synapse B2B</title>
        <meta name="description" content="De zero a parceiro oficial em 45 dias. Como validamos o método Synapse entrando em um mercado dominado por gigantes sem histórico prévio." /> 
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
            <ShieldCheck size={48} style={{color: 'var(--color-primary)'}} />
          </div>

          <h1 className="section-title">
            DE ZERO A PARCEIRO OFICIAL <br/>EM 45 DIAS
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            Como uma startup sem histórico entrou em mercado técnico dominado por gigantes e fechou 1.200+ usuários na primeira venda.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O CONTEXTO (SKIN IN THE GAME)                               */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <h2 className="section-title text-center">O Ponto de Partida: Skin in the Game Total</h2>
            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'center', marginTop: '-1rem'}}>Validação sob Pressão Máxima</h3>
            
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              Este case é a prova definitiva do método. A AORKIA foi criada para aplicar Engenharia de Receita no próprio negócio, sem rede de segurança.
            </p>

            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem'}}>O Cenário Adverso</h3>
            <p>Entrar no mercado de Cyber Resilience (Backup SaaS) dominado por gigantes como Veeam e Acronis, com:</p>

            <div style={{
              background: 'rgba(0, 150, 132, 0.08)',
              border: '2px solid var(--color-primary)',
              borderRadius: '12px',
              padding: '2rem',
              margin: '2rem 0'
            }}>
              <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem'}}>As Restrições do Projeto:</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><XCircle size={18} color="#ef4444"/> Zero base de clientes</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><XCircle size={18} color="#ef4444"/> Zero reconhecimento de marca</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><XCircle size={18} color="#ef4444"/> Budget de marketing limitado</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Target size={18} color="var(--color-primary)"/> <strong>Meta:</strong> Provar tração em 45 dias</li>
              </ul>
            </div>
            
            <p style={{color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem', margin: '2rem 0'}}>
              "A única vantagem competitiva era uma parceria técnica com a Keepit (Líder Global). Mas parceria técnica sem motor de vendas é irrelevante. Precisávamos transformar o selo de parceiro em máquina de conversão."
            </p>

            <p><strong>O Desafio:</strong> Como competir sem track record?</p>
            <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '1rem'}}>
              A Resposta: Não compete. Transfere credibilidade e ativa a dor latente.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: A SOLUÇÃO (TIMELINE)                                        */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title text-center">A Solução (Timeline)</h2>
          <p className="lead-text text-center">Velocidade de Execução: 45 Dias</p>
          
          {/* Timeline Visual Simplificado */}
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
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Ancoragem</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Urgência</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Tração</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
            
            {/* FASE 1: Ancoragem de Autoridade */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><ShieldCheck size={28} /></div>
                <h3 className="pillar-card-title">FASE 1: Ancoragem de Autoridade (15 dias)</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Estratégia: Transferência de Credibilidade</p>
                
                <p className="pillar-card-description">
                  Reposicionamos a marca antes mesmo de lançar:
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>De:</strong> "Revendedor de backup Keepit"</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Para:</strong> "Parceiro Oficial Keepit — Líder Global em Backup SaaS"</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Lógica:</strong> "Se o líder global escolheu a AORKIA no Brasil, você pode confiar."</li>
                </ul>

                <div style={{marginTop: '1.5rem', padding: '1.5rem', background: 'var(--color-card-bg-hover)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>Por que funcionou:</strong>
                  <p style={{fontSize: '0.9rem', margin: 0}}>
                    Decisores B2B não compram de startups desconhecidas por medo do risco. Ao ancorar na Keepit, removemos o risco da equação. Vendemos a segurança do fabricante, com a agilidade local da AORKIA.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2: Ativação de Urgência */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Zap size={28} /></div>
                <h3 className="pillar-card-title">FASE 2: Ativação de Urgência (15 dias)</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Entrega: Narrativa de Risco Tangível</p>
                
                <p className="pillar-card-description">
                  Mudamos a conversa de "tecnologia" para "prejuízo financeiro".
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• Eliminamos jargão técnico ("Imutabilidade", "RPO/RTO").</li>
                  <li style={{marginBottom: '0.5rem'}}>• Focamos na dor invisível: "Seu Google Workspace NÃO faz backup. O que acontece se você for hackeado hoje?"</li>
                </ul>

                <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                  <Image 
                    src="/cases/aorkia-home-urgencia.png"
                    alt="Homepage AORKIA com headline de urgência"
                    width={1000}
                    height={500}
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '200px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                  />
                </div>
                 
                 <h4 style={{color: 'var(--color-heading)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem'}}>Insight-Chave:</h4>
                 <p style={{fontSize: '0.9rem', margin: 0}}>
                    Backup é um produto que só importa quando é tarde demais. A estratégia foi fazer o cliente sentir a dor financeira da parada <strong>antes</strong> dela acontecer.
                 </p>
              </div>
            </div>

            {/* FASE 3: Plataforma + Canal */}
            <div className="pillar-card-revolutionary" style={{gridColumn: '1 / -1'}}> {/* Ocupa largura total */}
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Gem size={28} /></div>
                <h3 className="pillar-card-title">FASE 3: Plataforma + Canal (15 dias)</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Resultado: Primeira venda 1.200+ usuários</p>
                
                <p className="pillar-card-description" style={{fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-heading)'}}>
                  Execução comercial agressiva baseada na nova narrativa.
                </p>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem', width: '100%'}}>
                  
                  {/* Ação */}
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>O Que Fizemos:</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.95rem'}}>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Plataforma de Conversão:</strong> Lançamos aorkia.com com arquitetura focada em risco, prova social e ROI.</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Canal Outbound:</strong> Estruturamos prospecção ativa focada em CISOs e Diretores de TI.</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Pitch de Venda:</strong> "Seguro contra Ransomware" e "Compliance LGPD", não apenas "Backup".</li>
                    </ul>
                     <div className="case-image-wrapper" style={{marginTop: '1.5rem'}}>
                        <Image 
                          src="/cases/aorkia-solucoes.png"
                          alt="Página de soluções AORKIA"
                          width={1000}
                          height={500}
                          quality={100}
                          style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '200px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                        />
                      </div>
                  </div>

                  {/* Resultado */}
                  <div>
                    <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--color-primary)'}}>
                      <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem'}}>Resultado Imediato (Dia 45):</h4>
                      <p style={{fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)'}}>Primeira venda enterprise fechada: 1.200+ usuários.</p>
                      <p style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.5rem'}}>Uma empresa nacional confiou seus dados críticos a uma startup com 45 dias de vida.</p>
                    </div>

                    <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem'}}>Por que compraram?</h4>
                    <p style={{fontSize: '0.95rem'}}>Não compraram "backup". Compraram <strong>paz de espírito regulatória</strong> (LGPD) e a garantia de um líder global (Keepit), operacionalizada por especialistas locais (AORKIA).</p>
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
          <h2 className="section-title">Resultados</h2>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem', marginTop: '-1rem'}}>
            TRANSFORMAÇÃO EM 45 DIAS
          </h3>

          {/* Tabela de Antes/Depois */}
          <div className="comparison-grid" style={{
            maxWidth: '900px', 
            margin: '0 auto 5rem',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            background: 'var(--color-card-bg)',
            padding: '2rem'
          }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center'}}>
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-text)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Antes</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', lineHeight: 1.8}}>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Zero histórico</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Ideia no papel</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Sem tração comercial</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Competindo com gigantes</li>
                  <li><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Método não testado sob pressão</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)'}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-heading)', lineHeight: 1.8, fontWeight: 500}}>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Parceiro Oficial Keepit</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Plataforma de conversão ativa</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> 1ª Venda (1.200 usuários)</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Diferenciação clara (Urgência)</li>
                  <li><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Validação em campo</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          {/* Reutilizando o grid de "3 Verdades" para os "Números" */}
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>1.200+</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>usuários 1ª venda</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>45</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>100%</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>método validado</p> 
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', marginTop: '5rem'}}>
            MÉTRICA QUE REALMENTE IMPORTA 
          </h3>
          <p className="lead-text" style={{color: 'var(--color-heading)', fontStyle: 'italic'}}>
            De zero para receita em 45 dias. 
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            Prova de que o método funciona sob as condições mais adversas possíveis (zero histórico).
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: VOZ DO CLIENTE (A PROVA DEFINITIVA)                          */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <h2 className="section-title text-center">A PROVA DEFINITIVA</h2> 
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle, rgba(0, 150, 132, 0.05), transparent 80%)',
            textAlign: 'center',
            padding: '3rem'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.8rem', fontFamily: "'Montserrat', sans-serif", color: 'var(--color-heading)', lineHeight: 1.4, marginBottom: '2.5rem'}}>
                "Qualquer consultor pode vender método. Eu apliquei o meu no meu próprio negócio, sob condições extremas: zero histórico, mercado dominado por gigantes, 45 dias de prazo. Resultado: Parceiro Oficial Keepit + primeira venda de 1.200+ usuários. Não é teoria. É Engenharia de Receita validada com pele no jogo."
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                src="/cases/julio_figueiredo.png"
                alt="Júlio Figueiredo"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Júlio Figueiredo 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0}}>Founder & CRO - Synapse B2B<br/>Founder & CRO - AORKIA</p> 
              </div>
            </div>

            <ul style={{listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem', flexWrap: 'wrap'}}>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                AORKIA criada em 2024
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Validação em 45 dias
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Skin in the Game
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: LEARNINGS ESTRATÉGICOS                                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow section-truths-revolutionary reveal-up">
        <div className="container">
          <h2 className="section-title text-center">Learnings Estratégicos</h2>
          <p className="lead-text text-center">O QUE ESTE CASO ENSINA</p>
          
          {/* Reutilizando o grid de "3 Verdades" para os "3 Insights" */}
          <div className="truths-grid-revolutionary">
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <ShieldCheck size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 1: HISTÓRICO NÃO É PRÉ-REQUISITO</h3> 
              <p>AORKIA tinha zero clientes. Mas tinha parceria com líder global.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Quando você não tem credibilidade própria, transfira credibilidade de quem tem. "Se o líder global escolheu a AORKIA, você pode confiar."</p>
            </div>
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Zap size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 2: ATIVE A DOR ANTES DA SOLUÇÃO</h3> 
              <p>Cliente não acorda pensando "preciso de backup". Acorda pensando em "risco".</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Estratégia:</strong> Fazer sentir a dor ANTES da perda. "Quanto custa sua empresa parada 48h?". Urgência não existe naturalmente; é criada.</p>
            </div>

            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Gem size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 3: MÉTODO EXIGE PELE NO JOGO</h3> 
              <p>Não foi consultoria. Foi laboratório pessoal.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Metodologia não testada no próprio negócio do criador é teoria. Este case prova que funciona quando há risco real envolvido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: CTA FINAL                                                    */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            VOCÊ TAMBÉM ESTÁ ENTRANDO EM MERCADO 
            <br/>
            COMPETITIVO SEM HISTÓRICO? 
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem'}}>
            Zero track record não é sentença de morte.
            É oportunidade de fazer diferente desde o início.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para estruturar tração acelerada no seu negócio.
            Zero pressão. Apenas clareza estratégica. 
          </p>

          {/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.5rem'}}>Prefere estudar o case aorkia?</p> 
            <Link href="/pdf/synapse-case-aorkia.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}