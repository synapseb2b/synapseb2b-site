// pages/solucoes/plataformas-digitais.js
// Versão: Cinematic Cascade Scroll + Expansão Interativa
// Design: Premium Dark Glassmorphism com Framer Motion
// CORREÇÃO DE BUILD: Importação de 'Link' adicionada

import Head from 'next/head';
import Link from 'next/link'; // <-- IMPORTAÇÃO CORRIGIDA AQUI
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Zap, 
  ChevronDown, 
  Monitor, 
  MousePointerClick 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dados das Plataformas para a Cascata
const platformsData = [
  {
    id: 'synapse',
    title: 'Synapse B2B',
    tagline: 'A Engenharia de Receita na Prática',
    description: 'Plataforma própria que demonstra o método: 4 pilares de Engenharia de Receita traduzidos em narrativa que converte fundadores B2B.',
    highlights: [
      'Texto rotativo no hero (6 variações de valor)',
      'Cases estruturados por resultado tangível',
      'CTA contextual em cada seção'
    ],
    link: 'https://www.synapseb2b.com/',
    // Gradiente sutil para diferenciar visualmente (ciano)
    gradient: 'linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(0, 0, 0, 0))'
  },
  {
    id: 'exclusiva',
    title: 'Exclusiva Engenharias',
    tagline: 'Hub Multidisciplinar Industrial',
    description: 'Hub que traduz competências técnicas dispersas em proposta de valor unificada para decisores industriais.',
    highlights: [
      'Simulador de orçamento integrado',
      'Segmentação por setor (6 verticais)',
      'Cases com foco em continuidade operacional'
    ],
    link: 'https://exclusivaengenharias.com/',
    // Gradiente sutil (amarelo/gold)
    gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(0, 0, 0, 0))'
  },
  {
    id: 'versao-holistica',
    title: 'Versão Holística',
    tagline: 'Pioneirismo em CareOps Integrativo',
    description: 'Primeira plataforma de CareOps Integrativo do Brasil. Educação de mercado sobre categoria nova + ROI tangível (5.8x).',
    highlights: [
      '3 verticais com jornadas distintas',
      'História da fundadora como prova viva',
      'Métricas validadas pela UFMG'
    ],
    link: 'https://versaoholistica.com.br/',
    // Gradiente sutil (verde)
    gradient: 'linear-gradient(135deg, rgba(0, 255, 127, 0.05), rgba(0, 0, 0, 0))'
  },
  {
    id: 'aorkia',
    title: 'AORKIA',
    tagline: 'Segurança e Backup SaaS',
    description: 'Narrativa de urgência para produto invisível (backup SaaS). Ativa medo da perda antes de apresentar solução técnica.',
    highlights: [
      'Ancoragem em parceria global (Keepit)',
      'ROI tangível (custo de parada vs investimento)',
      'Compliance como gatilho'
    ],
    link: 'https://www.aorkia.com/',
    // Gradiente sutil (laranja)
    gradient: 'linear-gradient(135deg, rgba(255, 69, 0, 0.05), rgba(0, 0, 0, 0))'
  },
  {
    id: 'povoas',
    title: 'Póvoas & Partners',
    tagline: 'Ecossistema Omnicanal',
    description: 'Ecossistema que transforma PDF estático em plataforma multi-entrada com 12 parceiros estratégicos visíveis.',
    highlights: [
      '6 portais de entrada (1 por serviço)',
      'Transferência de credibilidade para parceiros',
      'Analytics de comportamento por vertical'
    ],
    link: 'https://povoas.synapseb2b.com/',
    // Gradiente sutil (roxo)
    gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.05), rgba(0, 0, 0, 0))'
  }
];

export default function PlataformasDigitais() {
  const [expandedId, setExpandedId] = useState(null);

  // Lógica de expansão (Accordion)
  const togglePlatform = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Estilo Base Glassmorphism (Reutilizável)
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <Head>
        <title>Plataformas Digitais | Synapse B2B</title>
        <meta name="description" content="Transformamos sites institucionais em plataformas de aceleração de receita que educam, qualificam e convertem 24/7." />
      </Head>

      {/* ====================================================================== */}
      {/* Hero Section                                                         */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), #000)'}}></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
             <Monitor size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="section-title">Plataformas de Aceleração de Receita</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            Não construímos sites. Construímos motores de receita que operam 24/7.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema (Cards Glassmorphism)                                     */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Seu site gera tráfego. Mas não gera receita.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center'}}>
            A maioria das empresas B2B tem um site institucional bonito. E completamente inútil para o time comercial.
          </p>
          
          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            {/* Card 1 */}
            <div className="truth-card-revolutionary" style={{...glassStyle, padding: '2.5rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title">Leads chegam sem contexto</h3>
              <p>Seu time comercial gasta horas qualificando prospects que não entendem o produto, não têm budget ou não são decisores.</p>
            </div>
            
            {/* Card 2 */}
            <div className="truth-card-revolutionary" style={{...glassStyle, padding: '2.5rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title">Conteúdo genérico</h3>
              <p>Seu site mostra "o que você faz" em vez de "o problema que você resolve". Cliente confuso não compra.</p>
            </div>

            {/* Card 3 */}
            <div className="truth-card-revolutionary" style={{...glassStyle, padding: '2.5rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title">Ativo subutilizado</h3>
              <p>Você gastou R$20-50k em um site que funciona como cartão de visita digital. Deveria ser seu melhor vendedor.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A Solução (Cards Glassmorphism)                                      */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Nossa abordagem: 30% Institucional, 70% Motor de Receita</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Cada página, palavra e CTA são desenhados para mover o cliente ideal pela jornada de compra.</p>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div className="pillar-card-revolutionary" style={{...glassStyle, padding: '2.5rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Layers size={28} /></div>
                <h3 className="pillar-card-title">Arquitetura de Conversão</h3>
                <p className="pillar-card-description">Páginas estruturadas por jornada do comprador (awareness → consideration → decision). Cada seção responde uma objeção específica.</p>
            </div>

            <div className="pillar-card-revolutionary" style={{...glassStyle, padding: '2.5rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title">Qualificação Inteligente</h3>
                <p className="pillar-card-description">Conteúdo que educa o prospect sobre o problema antes de apresentar a solução. Lead que chega já entende o valor.</p>
            </div>

            <div className="pillar-card-revolutionary" style={{...glassStyle, padding: '2.5rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Zap size={28} /></div>
                <h3 className="pillar-card-title">Motor 24/7</h3>
                <p className="pillar-card-description">Seu melhor pitch de vendas acessível a qualquer hora. Time comercial recebe leads qualificados e educados, não contatos frios.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O RESULTADO (BLOCKQUOTE PREMIUM)                                      */}
      {/* ====================================================================== */}
       <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado</h2>
          
          <div style={{
            ...glassStyle, // Reuso do estilo Glass
            padding: '3rem',
            maxWidth: '900px',
            margin: '3rem auto',
          }}>
            <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 600}}>
              Seu time comercial para de perder tempo com leads frios e passa a ter conversas estratégicas com prospects que já entendem seu valor.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.8'}}>
              Custo de aquisição diminui. Velocidade de fechamento aumenta. Receita se torna previsível.
            </p>
          </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>


      {/* ====================================================================== */}
      {/* PORTFÓLIO EM CASCATA (CINEMATIC SCROLL)                                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow" style={{paddingBottom: '8rem'}}>
        <div className="container">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title">Plataformas Que Construímos</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Clique nos cards para explorar a estratégia de cada plataforma.</p>
          </div>

          {/* Container da Cascata */}
          <div className="cascade-container" style={{display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
            
            {platformsData.map((platform, index) => {
              const isOpen = expandedId === platform.id;
              
              return (
                <motion.div
                  key={platform.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }}
                  onClick={() => togglePlatform(platform.id)}
                  style={{
                    ...glassStyle, // Aplica o estilo base Glassmorphism
                    padding: 0, // Padding controlado internamente
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  className="platform-cascade-item"
                >
                  {/* HEADER DO CARD (Emulando "Capa" da Plataforma) */}
                  <motion.div 
                    layout="position"
                    style={{
                      padding: '2.5rem',
                      background: platform.gradient, // Gradiente individual
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom: isOpen ? '1px solid rgba(255,255,255,0.1)' : 'none'
                    }}
                  >
                    <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'Montserrat, sans-serif', color: 'var(--color-heading)'}}>
                      {platform.title}
                    </h3>
                    <p style={{fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '1.5rem', fontWeight: 600}}>
                      {platform.tagline}
                    </p>
                    
                    {/* Ícone de expansão animado */}
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} style={{color: 'var(--color-text)', opacity: 0.7}} />
                    </motion.div>
                    
                    {!isOpen && (
                       <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        style={{fontSize: '0.8rem', marginTop: '1rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px'}}
                       >
                         <MousePointerClick size={14} /> Clique para ver detalhes
                       </motion.p>
                    )}
                  </motion.div>

                  {/* CONTEÚDO EXPANDIDO (Accordion) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}
                      >
                        <div style={{padding: '3rem 2rem', textAlign: 'center'}}>
                          <p style={{fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text)', marginBottom: '2.5rem', maxWidth: '800px', marginInline: 'auto'}}>
                            {platform.description}
                          </p>
                          
                          {/* Highlights */}
                          <div style={{marginBottom: '3rem'}}>
                            <h4 style={{fontSize: '1rem', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem'}}>Destaques da Estratégia</h4>
                            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                              {platform.highlights.map((highlight, i) => (
                                <li key={i} style={{display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text)', fontSize: '1rem'}}>
                                  <CheckCircle2 size={18} color="var(--color-primary)" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Link Externo */}
                          <a 
                            href={platform.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary btn-large btn-cta-pulse"
                            style={{display: 'inline-flex', alignItems: 'center', gap: '10px'}}
                            onClick={(e) => e.stopPropagation()} // Evita fechar o card ao clicar no link
                          >
                            <span>Visitar Plataforma</span>
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA Final                                                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Seu site deveria ser seu melhor vendedor.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            Se ele não educa, não qualifica e não converte, você está desperdiçando o ativo digital mais importante do seu negócio.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Transformar Meu Site em Motor de Receita</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>Primeira conversa: 21 minutos para avaliar seu ativo digital atual e mapear oportunidades de conversão.</p>
        </div>
      </section>

      {/* CSS para garantir comportamento correto de hover */}
      <style jsx global>{`
        .platform-cascade-item {
           transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .platform-cascade-item:hover {
          border-color: var(--color-primary) !important;
          transform: scale(1.01) !important; /* Efeito sutil de elevação */
        }
      `}</style>
    </>
  );
}