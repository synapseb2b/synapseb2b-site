// pages/solucoes/plataformas-digitais.js
// Versão: Cinematic Cascade Scroll + Expansão Interativa
// Design: Premium Dark Glassmorphism com Framer Motion
// CORREÇÃO: Importação de 'Link' adicionada

import Head from 'next/head';
import Image from 'next/image'; // Também pode ser necessário se usar o componente Image
import Link from 'next/link'; // <--- IMPORTAÇÃO CORRIGIDA AQUI
import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// --- DADOS DAS PLATAFORMAS (Com imagens mapeadas) ---
const platformsData = [
  {
    id: 'synapse',
    title: 'Synapse B2B',
    tagline: 'A Engenharia de Receita na Prática',
    description: 'Plataforma própria que demonstra o método: 4 pilares de Engenharia de Receita traduzidos em narrativa que converte fundadores B2B.',
    highlights: ['Texto rotativo no hero', 'Cases por resultado', 'CTA contextual'],
    link: 'https://www.synapseb2b.com/',
    image: '/cases/versao-holistica-home.png', // Placeholder (Use um print da home da Synapse se tiver)
    color: '#00E5FF' // Ciano
  },
  {
    id: 'exclusiva',
    title: 'Exclusiva Engenharias',
    tagline: 'Hub Multidisciplinar Industrial',
    description: 'Hub que traduz competências técnicas dispersas em proposta de valor unificada para decisores industriais.',
    highlights: ['Simulador de orçamento', 'Segmentação por setor', 'Foco em continuidade'],
    link: 'https://exclusivaengenharias.com/',
    image: '/cases/exclusivaengenharias-home.png',
    color: '#FFD700' // Gold
  },
  {
    id: 'versao-holistica',
    title: 'Versão Holística',
    tagline: 'Pioneirismo em CareOps',
    description: 'Primeira plataforma de CareOps Integrativo do Brasil. Educação de mercado sobre categoria nova + ROI tangível (5.8x).',
    highlights: ['3 verticais distintas', 'História viva', 'Métricas validadas'],
    link: 'https://versaoholistica.com.br/',
    image: '/cases/versao-holistica-home.png',
    color: '#00FF7F' // Spring Green
  },
  {
    id: 'aorkia',
    title: 'AORKIA',
    tagline: 'Segurança e Backup SaaS',
    description: 'Narrativa de urgência para produto invisível. Ativa medo da perda antes de apresentar solução técnica.',
    highlights: ['Ancoragem em líder global', 'ROI de risco', 'Compliance como gatilho'],
    link: 'https://www.aorkia.com/',
    image: '/cases/aorkia-home.png',
    color: '#FF4500' // Orange Red
  },
  {
    id: 'povoas',
    title: 'Póvoas & Partners',
    tagline: 'Ecossistema Omnicanal',
    description: 'Transformação de PDF estático em plataforma multi-entrada com 12 parceiros estratégicos visíveis.',
    highlights: ['6 portais de entrada', 'Transferência de autoridade', 'Analytics por vertical'],
    link: 'https://povoas.synapseb2b.com/',
    image: '/cases/versao-holistica-home.png', // Placeholder (Use print da Povoas se tiver)
    color: '#9370DB' // Purple
  }
];

export default function PlataformasDigitais() {
  const [activeIndex, setActiveIndex] = useState(1); // Começa no segundo item (Exclusiva)
  
  // Navegação
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % platformsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + platformsData.length) % platformsData.length);
  };

  // Define o índice clicado como ativo
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

  // Estilo Glassmorphism Base
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
      {/* HERO                                                                   */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), #000)'}}></div>
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
      {/* O PROBLEMA                                                             */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Seu site gera tráfego. Mas não gera receita.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center'}}>
            A maioria das empresas B2B tem um site institucional bonito. E completamente inútil para o time comercial.
          </p>
          
          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            {[
              { num: '1.', title: 'Leads sem contexto', text: 'Seu time gasta horas qualificando prospects que não entendem o produto.' },
              { num: '2.', title: 'Conteúdo genérico', text: 'Seu site mostra "o que você faz" em vez de "o problema que resolve".' },
              { num: '3.', title: 'Ativo subutilizado', text: 'Um investimento alto que funciona apenas como cartão de visita digital.' }
            ].map((item, i) => (
              <div key={i} className="truth-card-revolutionary" style={{...glassStyle, padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>{item.num}</span>
                <h3 className="truth-card-title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A SOLUÇÃO                                                              */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Nossa abordagem: 30% Institucional, 70% Motor de Receita</h2>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { icon: Layers, title: 'Arquitetura de Conversão', text: 'Páginas estruturadas pela jornada do comprador. Cada seção responde uma objeção.' },
              { icon: TrendingUp, title: 'Qualificação Inteligente', text: 'Conteúdo que educa sobre o problema antes da solução. Lead chega pronto.' },
              { icon: Zap, title: 'Motor 24/7', text: 'Seu melhor pitch acessível a qualquer hora. Leads educados, não frios.' }
            ].map((item, i) => (
              <div key={i} className="pillar-card-revolutionary" style={{...glassStyle, padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><item.icon size={28} /></div>
                  <h3 className="pillar-card-title">{item.title}</h3>
                  <p className="pillar-card-description">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O RESULTADO                                                            */}
      {/* ====================================================================== */}
       <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <div style={{
            ...glassStyle, 
            padding: '3rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <h2 className="section-title" style={{fontSize: '2rem', marginBottom: '1.5rem'}}>O Resultado</h2>
            <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: 600}}>
              Seu time comercial para de perder tempo com leads frios e passa a ter conversas estratégicas com prospects que já entendem seu valor.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)'}}>
              Custo de aquisição diminui. Velocidade de fechamento aumenta. Receita se torna previsível.
            </p>
          </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>


      {/* ====================================================================== */}
      {/* 3D COVERFLOW CAROUSEL (O EFEITO "UAU")                                 */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow" style={{paddingBottom: '6rem', overflow: 'hidden'}}>
        <div className="container">
          <div className="text-center mb-10 reveal-up">
            <h2 className="section-title">Plataformas Que Construímos</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Explore nossos cases. Clique ou arraste para navegar.</p>
          </div>

          {/* ÁREA DO CARROSSEL 3D */}
          <div className="carousel-3d-container" style={{
            position: 'relative', 
            height: '500px', // Altura da área de rotação
            perspective: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            
            {/* Botões de Navegação */}
            <button onClick={prevSlide} className="carousel-nav-btn left" aria-label="Anterior">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextSlide} className="carousel-nav-btn right" aria-label="Próximo">
              <ChevronRight size={32} />
            </button>

            {/* Os Cards */}
            <div className="carousel-track-3d" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transformStyle: 'preserve-3d'
            }}>
              {platformsData.map((platform, index) => {
                // Calcular a posição relativa ao ativo
                let position = index - activeIndex;
                
                // Lógica de loop infinito visual
                if (position < -2) position += platformsData.length;
                if (position > 2) position -= platformsData.length;

                // Ajuste fino para quando o index ativo é o primeiro ou último
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
                      x: dist * 320, // Espaçamento horizontal (Desktop)
                      scale: isActive ? 1.1 : 0.8,
                      rotateY: dist * -25, // Rotação 3D
                      zIndex: isActive ? 100 : 10 - Math.abs(dist),
                      opacity: isActive ? 1 : 0.5,
                      filter: isActive ? 'brightness(1)' : 'brightness(0.4) blur(2px)'
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    style={{
                      position: 'absolute',
                      width: '380px', // Largura do Card
                      height: '450px', // Altura do Card
                      background: `url(${platform.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top center',
                      borderRadius: '20px',
                      boxShadow: isActive 
                        ? `0 20px 50px -10px ${platform.color}66` // Glow colorido ativo
                        : '0 10px 20px rgba(0,0,0,0.5)',
                      cursor: 'pointer',
                      border: isActive ? `2px solid ${platform.color}` : '1px solid rgba(255,255,255,0.1)',
                      overflow: 'hidden'
                    }}
                    className="carousel-card-3d"
                  >
                    {/* Overlay para legibilidade */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      padding: '2rem 1rem 1rem',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                      textAlign: 'center'
                    }}>
                      <h3 style={{fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
                        {platform.title}
                      </h3>
                      {isActive && (
                        <span style={{color: platform.color, fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase'}}>
                          Ver Detalhes
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ÁREA DE DETALHES SINCRONIZADA */}
          <div className="active-platform-details" style={{maxWidth: '900px', margin: '0 auto', minHeight: '300px'}}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  ...glassStyle,
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                 {/* Efeito de Glow de fundo */}
                 <div style={{
                   position: 'absolute', top: 0, left: 0, width: '100%', height: '5px',
                   background: `linear-gradient(90deg, transparent, ${platformsData[activeIndex].color}, transparent)`
                 }} />

                 <div className="details-content text-center">
                   <h3 style={{fontSize: '2.2rem', color: 'var(--color-heading)', marginBottom: '0.5rem'}}>
                     {platformsData[activeIndex].title}
                   </h3>
                   <p style={{color: platformsData[activeIndex].color, fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 600}}>
                     {platformsData[activeIndex].tagline}
                   </p>

                   <p style={{fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text)', marginBottom: '2.5rem', maxWidth: '700px', marginInline: 'auto'}}>
                     {platformsData[activeIndex].description}
                   </p>

                   <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem'}}>
                      {platformsData[activeIndex].highlights.map((highlight, i) => (
                        <span key={i} style={{
                          background: 'rgba(255,255,255,0.05)', 
                          padding: '0.5rem 1rem', 
                          borderRadius: '50px', 
                          fontSize: '0.9rem',
                          border: '1px solid rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <CheckCircle2 size={14} color={platformsData[activeIndex].color} />
                          {highlight}
                        </span>
                      ))}
                   </div>

                   <a 
                     href={platformsData[activeIndex].link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-primary btn-large"
                     style={{
                       boxShadow: `0 0 20px ${platformsData[activeIndex].color}40`,
                       border: `1px solid ${platformsData[activeIndex].color}`
                     }}
                   >
                     <span>Visitar Plataforma</span>
                     <ExternalLink size={18} />
                   </a>
                 </div>
              </motion.div>
            </AnimatePresence>
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

      {/* CSS para o Carrossel 3D Responsivo */}
      <style jsx global>{`
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 200;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        .carousel-nav-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }
        .carousel-nav-btn.left { left: 0; }
        .carousel-nav-btn.right { right: 0; }

        /* Responsividade do Carrossel */
        @media (max-width: 768px) {
          .carousel-3d-container {
            height: 400px !important;
          }
          .carousel-card-3d {
            width: 280px !important;
            height: 350px !important;
          }
          /* No mobile, a lógica JS de espaçamento (320px) pode ficar larga.
             Idealmente ajustaríamos o 'dist * 320' para 'dist * 150' via JS detectando mobile,
             ou aceitamos que o overflow hidden cuida do resto. */
        }
      `}</style>
    </>
  );
}