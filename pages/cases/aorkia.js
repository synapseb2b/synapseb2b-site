// pages/cases/aorkia.js
// REFATORADO: Estética "Plataformas Digitais" + Download Correto

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
        <meta name="description" content="De zero a parceiro oficial em 45 dias. Validação de Engenharia de Receita em mercado técnico." /> 
      </Head>

      {/* ====================================================================== */}
      {/* HERO SECTION                                                           */}
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
            Como uma startup sem histórico entrou em um mercado dominado por gigantes e fechou 1.200+ usuários na primeira venda.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CONTEXTO & DESAFIO (Estilo Grid Limpo)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          <h2 className="section-title">O Desafio: Davi contra Golias</h2>
          <p className="lead-text">
            A AORKIA nasceu para validar a Engenharia de Receita "com pele no jogo". Sem rede de segurança, entramos no mercado de Cyber Resilience dominado por marcas bilionárias.
          </p>

          <div className="truths-grid-revolutionary">
             <div className="glass-card-premium">
                <div className="pillar-icon-wrapper"><XCircle size={32} color="#ef4444"/></div>
                <h3 className="truth-card-title">Zero Histórico</h3>
                <p>Nenhuma base de clientes prévia para fazer upsell. Começamos do zero absoluto.</p>
             </div>

             <div className="glass-card-premium">
                <div className="pillar-icon-wrapper"><XCircle size={32} color="#ef4444"/></div>
                <h3 className="truth-card-title">Mercado Saturado</h3>
                <p>Competindo contra Veeam e Acronis, que possuem orçamentos de marketing infinitos.</p>
             </div>

             <div className="glass-card-premium">
                <div className="pillar-icon-wrapper"><Target size={32} color="var(--color-primary)"/></div>
                <h3 className="truth-card-title">A Meta</h3>
                <p>Provar tração real e fechar um contrato Enterprise em apenas 45 dias.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* A SOLUÇÃO: 3 FASES (Visual Rico)                                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">A Engenharia da Solução</h2>
          <p className="lead-text">Execução cirúrgica em 3 etapas para criar autoridade instantânea.</p>
          
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '4rem'}}>
            
            {/* FASE 1 */}
            <div className="glass-card-premium">
               <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', width: '100%'}}>
                  <div>
                     <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
                     <h3 className="pillar-card-title" style={{textAlign: 'left'}}>Fase 1: Engenharia de Autoridade</h3>
                     <p style={{textAlign: 'left', marginBottom: '1.5rem'}}>
                       Decisores não compram risco. Usamos a estratégia de <strong>Transferência de Credibilidade</strong>.
                     </p>
                     
                     <div style={{display: 'flex', gap: '1rem', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.6}}>
                           <XCircle size={20} color="#ef4444"/> 
                           <span>De: "Revendedor desconhecido"</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                           <CheckCircle2 size={20} color="var(--color-primary)"/> 
                           <span style={{fontWeight: 700, color: '#fff'}}>Para: "Parceiro Oficial Keepit — Líder Global"</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* FASE 2 */}
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><Zap size={32} /></div>
               <h3 className="pillar-card-title">Fase 2: Arquitetura de Risco</h3>
               <p className="lead-text" style={{fontSize: '1rem', marginBottom: '2rem'}}>
                  Mudamos o pitch de "Tecnologia de Backup" para "Seguro contra Ransomware".
               </p>

               {/* Imagem Estilizada como na página Plataformas */}
               <div style={{
                 width: '100%', 
                 maxWidth: '800px', 
                 margin: '0 auto 2rem',
                 borderRadius: '12px', 
                 border: '1px solid rgba(255,255,255,0.1)',
                 boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.3)',
                 overflow: 'hidden',
                 position: 'relative'
               }}>
                  {/* Barra de Navegador Fake */}
                  <div style={{
                    height: '24px', background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', padding: '0 1rem', gap: '6px'
                  }}>
                     <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'#ff5f56'}}></div>
                     <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                     <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'#009684'}}></div>
                  </div>
                  <Image 
                    src="/cases/aorkia-home.png" 
                    alt="Homepage AORKIA"
                    width={1000}
                    height={500}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
               </div>
               <p style={{fontSize: '0.9rem', opacity: 0.7}}>
                 Headline focada na dor latente: "Seu Google Workspace NÃO faz backup."
               </p>
            </div>

            {/* FASE 3 */}
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><Gem size={32} /></div>
               <h3 className="pillar-card-title">Fase 3: Tração & Venda</h3>
               <p style={{textAlign: 'center', marginBottom: '2rem'}}>
                 Resultado da combinação: Plataforma de Risco + Outbound Especializado.
               </p>
               
               <div className="truths-grid-revolutionary" style={{marginTop: '1rem', gap: '1.5rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px'}}>
                     <strong style={{color: 'var(--color-primary)', fontSize: '2.5rem', display: 'block', lineHeight: 1}}>45</strong>
                     <span style={{fontSize: '0.9rem', textTransform: 'uppercase'}}>Dias até o fechamento</span>
                  </div>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px'}}>
                     <strong style={{color: 'var(--color-primary)', fontSize: '2.5rem', display: 'block', lineHeight: 1}}>1.200+</strong>
                     <span style={{fontSize: '0.9rem', textTransform: 'uppercase'}}>Usuários na 1ª Venda</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* RESULTADOS (Grid Comparativo)                                          */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <h2 className="section-title">Transformação Real</h2>

          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center', width: '100%'}}>
              <div style={{textAlign: 'right'}}>
                <h4 style={{color: 'var(--color-text-muted)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem'}}>Antes</h4>
                <ul style={{listStyle: 'none', padding: 0, opacity: 0.7, display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <li>Ideia no papel</li>
                  <li>Sem validação comercial</li>
                  <li>Startup desconhecida</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)', opacity: 0.5}}>
                <ArrowRight size={24} />
              </div>

              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, fontWeight: 600, display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <li>Parceiro Oficial Keepit</li>
                  <li>1.200+ usuários ativos</li>
                  <li>Receita recorrente (SaaS)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Métrica Destaque */}
          <div style={{marginTop: '3rem', textAlign: 'center'}}>
             <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 2rem', borderRadius: '50px',
                border: '1px solid var(--color-primary)',
                background: 'rgba(0, 150, 132, 0.1)'
             }}>
                <TrendingUp size={24} color="var(--color-primary)" />
                <span style={{fontSize: '1.1rem', fontWeight: 600, color: '#fff'}}>Métrica chave: De zero a Enterprise em 6 semanas.</span>
             </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* PROVA SOCIAL (Quote)                                                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <blockquote style={{border: 'none', padding: 0}}>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '2rem', color: '#e0e0e0'}}>
                "Qualquer consultor pode vender método. Eu apliquei o meu no meu próprio negócio, sob condições extremas. Resultado: Parceiro Oficial Keepit + primeira venda de 1.200+ usuários. Não é teoria. É Engenharia de Receita validada com pele no jogo."
              </p>
              <footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                 <Image 
                   src="/cases/Julio-Figueiredo.jpg" 
                   alt="Júlio Figueiredo" 
                   width={60} 
                   height={60} 
                   style={{borderRadius: '50%', border: '2px solid var(--color-primary)'}}
                 />
                 <div style={{textAlign: 'left'}}>
                    <strong style={{display: 'block', color: '#fff'}}>Júlio Figueiredo</strong>
                    <span style={{fontSize: '0.9rem', color: 'var(--color-text-muted)'}}>Founder AORKIA & Synapse B2B</span>
                 </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA FINAL + DOWNLOAD                                                   */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          
          <h2 className="section-title">Você Também Está Entrando em Mercado Competitivo?</h2>
          <p className="lead-text">
            Zero track record não é sentença de morte. É oportunidade de fazer diferente.
          </p>
          
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* BOTÃO DE DOWNLOAD CORRIGIDO */}
          <div style={{marginTop: '4rem', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            <p style={{marginBottom: '1rem', opacity: 0.7, fontSize: '0.9rem'}}>Quer os detalhes técnicos deste case?</p>
            
            {/* O atributo 'download' força o download sem sair da página (se mesmo domínio) */}
            <a 
              href="/pdf/synapse-case-aorkia.pdf" 
              download="Synapse-Case-AORKIA.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn" 
              style={{
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: '0.9rem',
                padding: '12px 24px'
              }}
            >
              <span>Download PDF do Case</span>
              <Download size={18} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}