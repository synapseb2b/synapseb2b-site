// pages/pilares/ativos-digitais/plataformas-digitais.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Monitor,
  MousePointerClick
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DADOS ---
const platformsData = [
  {
    id: 'synapse',
    title: 'Synapse B2B',
    tagline: 'A Engenharia de Receita na Prática',
    description: 'Plataforma própria que demonstra o método: 4 pilares de Engenharia de Receita traduzidos em narrativa que converte fundadores B2B.',
    highlights: ['Texto rotativo no hero', 'Cases por resultado', 'CTA contextual'],
    link: 'https://www.synapseb2b.com/',
    image: '/cases/synapse-b2b-home.png', 
    color: '#009684' 
  },
  {
    id: 'exclusiva',
    title: 'Exclusiva Engenharias',
    tagline: 'Hub Multidisciplinar Industrial',
    description: 'Hub que traduz competências técnicas dispersas em proposta de valor unificada para decisores industriais.',
    highlights: ['Simulador de orçamento', 'Segmentação por setor', 'Foco em continuidade'],
    link: 'https://exclusivaengenharias.com/',
    image: '/cases/exclusiva-home.png', 
    color: '#FFC107' 
  },
  {
    id: 'versao-holistica',
    title: 'Versão Holística',
    tagline: 'Pioneirismo em CareOps',
    description: 'Primeira plataforma de CareOps Integrativo do Brasil. Educação de mercado sobre categoria nova + ROI tangível (5.8x).',
    highlights: ['3 verticais distintas', 'História viva', 'Métricas validadas'],
    link: 'https://versaoholistica.com.br/',
    image: '/cases/vh-home.png', 
    color: '#00FF7F' 
  },
  {
    id: 'aorkia',
    title: 'AORKIA',
    tagline: 'Segurança e Backup SaaS',
    description: 'Narrativa de urgência para produto invisível. Ativa medo da perda antes de apresentar solução técnica.',
    highlights: ['Ancoragem em líder global', 'ROI de risco', 'Compliance como gatilho'],
    link: 'https://www.aorkia.com/',
    image: '/cases/aorkia-home.png', 
    color: '#00FFA3' 
  },
  {
    id: 'povoas',
    title: 'Póvoas & Partners',
    tagline: 'Ecossistema Omnicanal',
    description: 'Transformação de PDF estático em plataforma multi-entrada com 12 parceiros estratégicos visíveis.',
    highlights: ['6 portais de entrada', 'Transferência de autoridade', 'Analytics por vertical'],
    link: 'https://povoas.synapseb2b.com/',
    image: '/cases/povoas-home.png', 
    color: '#FF8C00' 
  }
];

export default function PlataformasDigitais() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % platformsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + platformsData.length) % platformsData.length);
  };

  const setIndex = (index) => {
    setActiveIndex(index);
  }

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

  // Dimensões do card para animação
  const cardWidth = isMobile ? 300 : 800; 
  const cardHeight = isMobile ? 550 : 450; 
  const xOffset = isMobile ? 320 : 650; 

  return (
    <>
      <Head>
        <title>Plataformas Digitais | Synapse B2B</title>
        <meta name="description" content="Transformamos sites institucionais em plataformas de aceleração de receita que educam, qualificam e convertem 24/7." />
      </Head>

      {/* HERO */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
             <Monitor size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Plataformas de Aceleração de Receita</h1>
          <p className="hero-subheadline lead-text">
            Não construímos sites. Construímos motores de receita que operam 24/7.
          </p>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Seu site gera tráfego. Mas não gera receita.</h2>
          <p className="lead-text">
            A maioria das empresas B2B tem um site institucional bonito. E completamente inútil para o time comercial.
          </p>
          
          <div className="truths-grid-revolutionary">
            {[
              { num: '1.', title: 'Leads sem contexto', text: 'Seu time gasta horas qualificando prospects que não entendem o produto.' },
              { num: '2.', title: 'Conteúdo genérico', text: 'Seu site mostra "o que você faz" em vez de "o problema que resolve".' },
              { num: '3.', title: 'Ativo subutilizado', text: 'Um investimento alto que funciona apenas como cartão de visita digital.' }
            ].map((item, i) => (
              <div key={i} className="glass-card-premium">
                <h3 className="truth-card-title" style={{marginBottom: '0.5rem', color: 'var(--color-accent)'}}>{item.num}</h3>
                <h3 className="truth-card-title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A SOLUÇÃO */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Nossa abordagem: 30% Institucional, 70% Motor de Receita</h2>

          <div className="pillar-grid-revolutionary">
            {[
              { icon: Layers, title: 'Arquitetura de Conversão', text: 'Páginas estruturadas pela jornada do comprador. Cada seção responde uma objeção.' },
              { icon: TrendingUp, title: 'Qualificação Inteligente', text: 'Conteúdo que educa sobre o problema antes da solução. Lead chega pronto.' },
              { icon: Zap, title: 'Motor 24/7', text: 'Seu melhor pitch acessível a qualquer hora. Leads educados, não frios.' }
            ].map((item, i) => (
              <div key={i} className="glass-card-premium">
                  <div className="pillar-icon-wrapper"><item.icon size={28} /></div>
                  <h3 className="pillar-card-title">{item.title}</h3>
                  <p className="pillar-card-description">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O RESULTADO */}
       <section className="section-solid">
        <div className="container reveal-up">
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 className="section-title" style={{fontSize: '2rem'}}>O Resultado</h2>
            <p className="lead-text" style={{fontWeight: 600, color: 'var(--color-heading)', marginBottom: '1rem'}}>
              Seu time comercial para de perder tempo com leads frios e passa a ter conversas estratégicas com prospects que já entendem seu valor.
            </p>
            <p>
              Custo de aquisição diminui. Velocidade de fechamento aumenta. Receita se torna previsível.
            </p>
          </div>
        </div>
      </section>
      
{/* 3D BROWSER CAROUSEL */}
      <section className="section-with-gradient-glow" style={{paddingBottom: '6rem', overflow: 'hidden'}}>
        <div className="container">
          <div className="text-center mb-10 reveal-up">
            <h2 className="section-title">Plataformas Que Construímos</h2>
            <p className="lead-text">Explore nossos cases. Clique ou arraste para navegar.</p>
          </div>

          {/* ÁREA DO CARROSSEL */}
          <div className="carousel-3d-container" style={{
            position: 'relative', 
            height: isMobile ? '500px' : '550px', 
            perspective: '1200px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            width: '100%' // Garante largura total
          }}>
            
            {/* Botões de Navegação - Posicionados nas EXTREMIDADES */}
            <div style={{
                position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)',
                zIndex: 200, display: 'flex', justifyContent: 'space-between', pointerEvents: 'none',
                padding: isMobile ? '0 5px' : '0 20px', width: '100%'
            }}>
                <button onClick={prevSlide} aria-label="Anterior" style={{
                   background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.3)', color: 'white',
                   width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center',
                   justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)', pointerEvents: 'all'
                }}>
                  <ChevronLeft size={32} />
                </button>
                
                <button onClick={nextSlide} aria-label="Próximo" style={{
                   background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.3)', color: 'white',
                   width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center',
                   justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)', pointerEvents: 'all'
                }}>
                  <ChevronRight size={32} />
                </button>
            </div>

            {/* Track 3D */}
            <div style={{
              position: 'relative', width: '100%', height: '100%', display: 'flex',
              justifyContent: 'center', alignItems: 'center', transformStyle: 'preserve-3d'
            }}>
              {platformsData.map((platform, index) => {
                let position = index - activeIndex;
                if (position < -2) position += platformsData.length;
                if (position > 2) position -= platformsData.length;

                const total = platformsData.length;
                const r = (index - activeIndex + total) % total; 
                let dist = r;
                if (r > total / 2) dist = r - total; 

                const isActive = dist === 0;
                const isVisible = Math.abs(dist) <= 2; 

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={platform.id}
                    onClick={() => setIndex(index)}
                    initial={false}
                    animate={{
                      x: dist * xOffset,
                      scale: isActive ? 1 : 0.85,
                      rotateY: dist * -15,
                      zIndex: isActive ? 100 : 10 - Math.abs(dist),
                      opacity: isActive ? 1 : 0.4,
                      filter: isActive ? 'brightness(1)' : 'brightness(0.5) blur(3px)'
                    }}
                    transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                    style={{
                      position: 'absolute',
                      width: isMobile ? '85vw' : `${cardWidth}px`, // Mobile usa 85% da largura da tela
                      height: `${cardHeight}px`,
                      borderRadius: '12px',
                      boxShadow: isActive 
                        ? `0 30px 60px -15px ${platform.color}40`
                        : '0 10px 30px rgba(0,0,0,0.8)',
                      cursor: 'pointer',
                      border: isActive ? `2px solid ${platform.color}` : '1px solid rgba(255,255,255,0.1)',
                      overflow: 'hidden',
                      background: '#111'
                    }}
                  >
                    {/* Barra de Navegador Fake */}
                    <div style={{
                      height: '30px', background: 'rgba(255,255,255,0.05)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                      alignItems: 'center', padding: '0 1rem', gap: '6px'
                    }}>
                       <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ff5f56'}}></div>
                       <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                       <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#009684'}}></div>
                    </div>

                    {/* Imagem - Ajuste Mobile para 'Cover' focado no Topo */}
                    <div style={{position: 'relative', width: '100%', height: 'calc(100% - 30px)'}}>
                      <div style={{
                         width: '100%', height: '100%', 
                         backgroundImage: `url(${platform.image})`,
                         backgroundSize: 'cover', // Cover garante preenchimento
                         backgroundPosition: 'top center', // Foca no Hero da imagem
                         backgroundRepeat: 'no-repeat'
                      }} />
                      
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, width: '100%',
                        padding: '2rem 1rem 1rem', background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                        textAlign: 'center'
                      }}>
                        <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                          {platform.title}
                        </h3>
                        {isActive && (
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', color: platform.color, fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.5rem'}}>
                            <MousePointerClick size={14} /> Ver Detalhes
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DETALHES DO CASE */}
          <div style={{maxWidth: '900px', margin: '0 auto', minHeight: '300px'}}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card-premium"
              >
                 <div style={{
                   position: 'absolute', top: 0, left: 0, width: '100%', height: '4px',
                   background: `linear-gradient(90deg, transparent, ${platformsData[activeIndex].color}, transparent)`
                 }} />

                 <div style={{width: '100%'}}>
                   <h3 style={{fontSize: '2.2rem', color: 'var(--color-heading)', marginBottom: '0.5rem'}}>
                     {platformsData[activeIndex].title}
                   </h3>
                   <p style={{color: platformsData[activeIndex].color, fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 600}}>
                     {platformsData[activeIndex].tagline}
                   </p>

                   <p className="lead-text" style={{marginBottom: '2.5rem'}}>
                     {platformsData[activeIndex].description}
                   </p>

                   <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem'}}>
                      {platformsData[activeIndex].highlights.map((highlight, i) => (
                        <span key={i} style={{
                          background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', 
                          borderRadius: '50px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)',
                          display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)'
                        }}>
                          <CheckCircle2 size={14} color={platformsData[activeIndex].color} />
                          {highlight}
                        </span>
                      ))}
                   </div>

                   <Link 
                     href={platformsData[activeIndex].link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-primary btn-large"
                     style={{
                       boxShadow: `0 0 20px ${platformsData[activeIndex].color}30`,
                       border: `1px solid ${platformsData[activeIndex].color}`
                     }}
                   >
                     <span>Visitar Plataforma</span>
                     <ExternalLink size={18} />
                   </Link>
                 </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Seu site deveria ser seu melhor vendedor.
          </h2>
          <p className="lead-text">
            Se ele não educa, não qualifica e não converte, você está desperdiçando o ativo digital mais importante do seu negócio.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Transformar Meu Site em Motor de Receita</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.9, marginTop: '1.5rem'}}>Primeira conversa: 21 minutos para avaliar seu ativo digital atual e mapear oportunidades de conversão.</p>
        </div>
      </section>
    </>
  );
}