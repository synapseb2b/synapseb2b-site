// pages/cases/aorkia.js
// REFATORADO: Alinhamento Central Total + Estética Plataformas + PDF Corrigido

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Target,
  ShieldCheck, 
  Zap,
  Gem,
  XCircle,
  TrendingUp
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
      {/* HERO SECTION (Copy Preservada)                                         */}
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
            <ShieldCheck size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          </div>

          <h1 className="hero-headline">
            De Zero a Parceiro Oficial <br/>em 45 Dias
          </h1>
          <p className="hero-subheadline lead-text">
            Como uma startup sem histórico entrou em mercado técnico dominado por gigantes e fechou 1.200+ usuários na primeira venda.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O CONTEXTO (Alinhamento Central)                              */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          <h2 className="section-title">O Ponto de Partida: Engenharia de Receita na Prática</h2>
          
          <p className="lead-text">
            Este case é a prova definitiva do método. A AORKIA foi fundada para validar a Engenharia de Receita "dentro de casa", aplicando o método no próprio negócio, sem rede de segurança.
          </p>

          {/* Card Cenário Adverso */}
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>O Cenário Adverso</h3>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
              Entrar no mercado de Cyber Resilience (Backup SaaS) dominado por gigantes como Veeam e Acronis.
            </p>
            
            <div style={{
              background: 'rgba(0,0,0,0.2)', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '1px solid var(--color-border)', 
              width: '100%', 
              maxWidth: '600px', 
              margin: '0 auto 2rem'
            }}>
               {/* Lista Centralizada */}
               <ul style={{
                 padding: 0, 
                 margin: 0, 
                 display: 'flex', 
                 flexDirection: 'column', 
                 gap: '1rem',
                 alignItems: 'center' // Centraliza horizontalmente
               }}>
                <li style={{color: '#ef4444', display: 'flex', alignItems: 'center', gap: '10px'}}><XCircle size={20}/> Zero base de clientes</li>
                <li style={{color: '#ef4444', display: 'flex', alignItems: 'center', gap: '10px'}}><XCircle size={20}/> Zero reconhecimento de marca</li>
                <li style={{color: '#ef4444', display: 'flex', alignItems: 'center', gap: '10px'}}><XCircle size={20}/> Budget de marketing limitado</li>
                <li style={{color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '10px'}}><Target size={20}/> <strong>Meta:</strong> Provar tração em 45 dias</li>
              </ul>
            </div>

            <p style={{fontStyle: 'italic', opacity: 0.8, fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto'}}>
              "A única vantagem competitiva era uma parceria técnica com a Keepit (Líder Global). Mas parceria técnica sem método comercial é irrelevante."
            </p>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: A SOLUÇÃO (Visual Rico + Centralizado)                        */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title">A Solução (Timeline)</h2>
          <p className="lead-text">Velocidade de Execução: 45 Dias</p>
          
          {/* Timeline Visual */}
          <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '90%', 
            maxWidth: '800px',
            margin: '2rem auto 4rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            {['Ancoragem', 'Urgência', 'Tração'].map((step, i) => (
              <div key={i} style={{textAlign: 'center', position: 'relative', flex: 1}}>
                <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
                <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>{step}</div>
                <div style={{color: 'var(--color-text-muted)', fontSize: '0.85rem'}}>15 dias</div> 
              </div>
            ))}
          </div>

          {/* GRID DE FASES */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '4rem'}}>
            
            {/* FASE 1 - AGORA CENTRALIZADA */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title">Fase 1: Engenharia de Autoridade</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Estratégia: Transferência de Credibilidade</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '600px', margin: '0 auto', alignItems: 'center'}}>
                  
                  {/* Card "DE" */}
                  <div style={{
                    background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', 
                    border: '1px solid var(--color-border)', width: '100%', textAlign: 'center'
                  }}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7}}>De (Percepção Anterior)</strong>
                      <p style={{fontSize: '1.1rem', margin: 0, opacity: 0.8}}>"Revendedor de backup Keepit"</p>
                  </div>

                   {/* Seta visual */}
                   <ArrowRight size={24} style={{transform: 'rotate(90deg)', color: 'var(--color-text-muted)'}} />

                   {/* Card "PARA" */}
                   <div style={{
                     background: 'rgba(0, 150, 132, 0.1)', padding: '1.5rem', borderRadius: '12px', 
                     border: '1px solid var(--color-primary)', width: '100%', textAlign: 'center'
                   }}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '0.9rem', textTransform: 'uppercase'}}>Para (Nova Autoridade)</strong>
                      <p style={{fontSize: '1.2rem', margin: 0, color: 'var(--color-heading)', fontWeight: 600}}>"Parceiro Oficial Keepit — Líder Global"</p>
                  </div>
              </div>

              <p style={{marginTop: '2rem', fontSize: '1rem', maxWidth: '700px', lineHeight: 1.6, marginInline: 'auto'}}>
                Decisores B2B não compram de startups desconhecidas por medo do risco. Ao ancorar na Keepit, transferimos credibilidade e reduzimos a barreira de entrada.
              </p>
            </div>

            {/* FASE 2 - COM JANELA DE BROWSER */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Zap size={32} /></div>
              <h3 className="pillar-card-title">Fase 2: Arquitetura de Risco</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Entrega: Narrativa de Risco Tangível</p>
              
               <div style={{background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)', width: '100%', maxWidth: '700px', margin: '0 auto 2rem'}}>
                  <strong style={{display: 'block', marginBottom: '1rem', color: 'var(--color-heading)', fontSize: '1.2rem'}}>A Nova Narrativa:</strong>
                  <p style={{fontSize: '1.25rem', margin: 0, color: 'var(--color-primary)', fontFamily: 'Montserrat, sans-serif', fontWeight: 500}}>
                    "Seu Google Workspace NÃO faz backup. O que acontece se você for hackeado hoje?"
                  </p>
              </div>

              {/* Imagem com Estilo Browser */}
              <div style={{
                margin: '0 auto 2rem', 
                maxWidth: '800px',
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.3)',
                overflow: 'hidden',
                background: '#111'
              }}>
                {/* Barra de Navegador */}
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
                  src="/cases/aorkia-home.png" 
                  alt="Homepage AORKIA com headline de urgência"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* FASE 3 - CENTRALIZADO + BROWSER */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Gem size={32} /></div>
              <h3 className="pillar-card-title">Fase 3: Plataforma + Canal</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Resultado: Primeira venda 1.200+ usuários</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px', margin: '0 auto', alignItems: 'center'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '1rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>O Que Fizemos</strong>
                      <ul style={{padding: 0, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center'}}>
                        <li style={{display: 'flex', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Plataforma focada em risco</li>
                        <li style={{display: 'flex', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Outbound para CISOs</li>
                        <li style={{display: 'flex', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Pitch: "Seguro contra Ransomware"</li>
                      </ul>
                  </div>

                   <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '2rem', borderRadius: '12px', borderTop: '4px solid var(--color-accent)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '1rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Resultado (Dia 45)</strong>
                      <p style={{fontSize: '1.1rem', margin: 0}}>
                        Primeira venda enterprise fechada: <br/>
                        <span style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-heading)', display: 'block', marginTop: '0.5rem'}}>1.200+ usuários</span>
                      </p>
                  </div>
              </div>

               {/* Imagem com Estilo Browser */}
               <div style={{
                 marginTop: '3rem', 
                 maxWidth: '800px',
                 marginInline: 'auto',
                 borderRadius: '12px', 
                 border: '1px solid rgba(255,255,255,0.1)',
                 boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.3)',
                 overflow: 'hidden',
                 background: '#111'
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
                    src="/cases/aorkia-backup-saas-estrategico.png"
                    alt="Página de soluções AORKIA"
                    width={1000}
                    height={500}
                    quality={100}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 3: ANTES / DEPOIS & RESULTADOS                                   */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <h2 className="section-title">Resultados</h2>

          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto 4rem'}}>
            <h3 style={{marginBottom: '2rem'}}>Transformação em 45 Dias</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center', width: '100%'}}>
              <div style={{textAlign: 'center'}}>
                <h4 style={{color: 'var(--color-text-muted)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem'}}>Antes</h4>
                <ul style={{opacity: 0.7, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <li>Zero histórico</li>
                  <li>Ideia no papel</li>
                  <li>Sem tração comercial</li>
                  <li>Competindo com gigantes</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)', opacity: 0.5}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'center'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem'}}>Depois</h4>
                <ul style={{fontWeight: 500, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <li>Parceiro Oficial Keepit</li>
                  <li>Plataforma ativa</li>
                  <li>1ª Venda (1.200 usuários)</li>
                  <li>Diferenciação clara</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="section-title" style={{fontSize: '1.8rem', marginBottom: '3rem'}}>
            Números em Destaque
          </h3>
          <div className="truths-grid-revolutionary"> 
            <div className="glass-card-premium">
              <h3 style={{fontSize: '3.5rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>1.200+</h3> 
              <p style={{fontSize: '1.1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '1px'}}>usuários 1ª venda</p> 
            </div>
            <div className="glass-card-premium">
              <h3 style={{fontSize: '3.5rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>45</h3> 
              <p style={{fontSize: '1.1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '1px'}}>dias</p> 
            </div>
            <div className="glass-card-premium">
              <h3 style={{fontSize: '3.5rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>100%</h3> 
              <p style={{fontSize: '1.1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '1px'}}>método validado</p> 
            </div>
          </div>

          <div style={{marginTop: '4rem', padding: '2rem', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '16px', display: 'inline-block'}}>
            <h3 style={{fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '1rem'}}>
              Métrica que Realmente Importa
            </h3>
            <p style={{fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0}}>
              De zero para receita em 45 dias. 
            </p>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: VOZ DO CLIENTE (A PROVA DEFINITIVA)                          */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <h2 className="section-title">A Prova Definitiva</h2> 
          
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <blockquote>
              <p style={{fontSize: '1.25rem', fontFamily: "'Inter', sans-serif", color: '#e0e0e0', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300, fontStyle: 'italic'}}>
                "Qualquer consultor pode vender método. Eu apliquei o meu no meu próprio negócio, sob condições extremas: zero histórico, mercado dominado por gigantes, 45 dias de prazo. Resultado: Parceiro Oficial Keepit + primeira venda de 1.200+ usuários. Não é teoria. É Engenharia de Receita validada com pele no jogo."
              </p>
            </blockquote>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem'}}>
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
                <p style={{margin: 0, fontSize: '0.9rem'}}>Founder & CRO - Synapse B2B<br/>Founder & CRO - AORKIA</p> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: LEARNINGS ESTRATÉGICOS                                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title">Learnings Estratégicos</h2>
          <p className="lead-text">O Que Este Caso Ensina</p>
          
          <div className="truths-grid-revolutionary">
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <h3 className="truth-card-title">Histórico Não é Pré-Requisito</h3> 
              <p>Quando você não tem credibilidade própria, transfira credibilidade de quem tem. "Se o líder global escolheu a AORKIA, você pode confiar."</p>
            </div>
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper">
                <Zap size={32} />
              </div>
              <h3 className="truth-card-title">Ative a Dor Antes da Solução</h3> 
              <p>Cliente não acorda pensando "preciso de backup". Acorda pensando em "risco". Fazer sentir a dor financeira <strong>antes</strong> da perda.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper">
                <Gem size={32} />
              </div>
              <h3 className="truth-card-title">Método Exige Pele no Jogo</h3> 
              <p>Não foi consultoria. Foi laboratório pessoal. Metodologia não testada no próprio negócio do criador é teoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: CTA FINAL + PDF                                              */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>

        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Você Também Está Entrando em Mercado <br/>
            Competitivo sem Histórico?
          </h2>
          <p className="lead-text">
            Zero track record não é sentença de morte.
            É oportunidade de fazer diferente desde o início.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.7, marginTop: '2rem', fontSize: '0.9rem'}}>
            Primeira conversa: 21 minutos para estruturar tração acelerada no seu negócio.
          </p>

          {/* Link de Download do PDF Corrigido */}
          <div id="download-pdf" style={{marginTop: '4rem'}}>
            <p style={{marginBottom: '0.8rem', opacity: 0.8}}>Prefere estudar o case aorkia?</p> 
            
            {/* NOTA IMPORTANTE: O arquivo deve estar em public/pdf/synapse-case-aorkia.pdf */}
            <a 
              href="/pdf/synapse-case-aorkia.pdf" 
              download
              className="btn" 
              style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}
              target="_blank"
              rel="noopener noreferrer"
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