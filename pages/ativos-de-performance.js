// pages/ativos-de-performance.js
// Pilar 2: Ativos de Performance (Infraestrutura Digital)
// Atualizado com todos os 9 projetos

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
  MousePointerClick,
  Calculator,
  BarChart,
  Layout
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DADOS DO CARROSSEL (9 PROJETOS) ---
const platformsData = [
  {
    id: 'vh-healthhub',
    title: 'VH health.hub',
    tagline: 'Plataforma CareOps com Design System Premium',
    description: 'Redesign completo de ecossistema digital para healthtech pioneira em gestão integrada de saúde. Área de Clientes protegida, formulário multi-step com qualificação automática de leads e design system premium inspirado em Awwwards.',
    highlights: [
      'React 18 + TypeScript + Supabase Auth',
      'Área de Clientes com autenticação dupla',
      'Formulário inteligente com score de qualificação'
    ],
    link: 'https://versaoholistica.com.br/',
    image: '/cases/vh-healthhub-home.png',
    color: '#2A9D8F'
  },
  {
    id: 'exclusiva-engenharias',
    title: 'Exclusiva Engenharias',
    tagline: 'Site Institucional B2B com Simulador de Obras',
    description: 'Plataforma digital B2B para empresa de engenharia multidisciplinar. Simulador de custos de obras com cálculo baseado em SINAPI-MG, exportação para PDF e 13 páginas especializadas.',
    highlights: [
      'Simulador de Obras com cálculo SINAPI-MG',
      'SEO: react-snap para pré-renderização',
      '13 páginas especializadas'
    ],
    link: 'https://exclusivaengenharias.com/',
    image: '/cases/exclusiva-home.png',
    color: '#1a2744'
  },
  {
    id: 'tottec-backoffice',
    title: 'TOTTEC',
    tagline: 'Landing Page B2B com Calculadora de ROI',
    description: 'Landing page institucional para empresa de BackOffice as a Service no setor educacional. Calculadora de ROI interativa com lógica de negócio customizada e copy consultiva focada em dor/solução.',
    highlights: [
      'Calculadora de ROI com projeção em tempo real',
      'Hero com vídeo institucional',
      'Copy consultivo para gestores educacionais'
    ],
    link: 'https://tottec.synapseb2b.com/',
    image: '/cases/tottec-home.png',
    color: '#2B5A7C'
  },
  {
    id: 'mrjob-hub',
    title: 'Mr. Job Hub de Negócios',
    tagline: 'Plataforma Institucional com Widget Conversacional',
    description: 'Ecossistema digital para hub de negócios com widget conversacional proprietário "Synapse Concierge" para qualificação de leads. Arquitetura orientada por dados de 7 case studies.',
    highlights: [
      'Widget Synapse Concierge com roteamento WhatsApp',
      '7 case studies como single source of truth',
      'Animações cinematográficas Ken Burns + parallax'
    ],
    link: 'https://mrjobcoworking.com',
    image: '/cases/mrjob-home.png',
    color: '#269249'
  },
  {
    id: 'giornata-empresas',
    title: 'Giornata Empresas',
    tagline: 'Landing Page com Diagnóstico Interativo de Liquidez',
    description: 'Landing page de alta conversão para consultoria financeira corporativa. Widget interativo de diagnóstico de liquidez com resultados personalizados e design system inspirado em Private Banking.',
    highlights: [
      'Widget de Diagnóstico interativo 3 etapas',
      'Design system Private Banking (Brown/Gold)',
      'Framer Motion: stagger, parallax, shimmer'
    ],
    link: 'https://giornata.synapseb2b.com/',
    image: '/cases/giornata-home.png',
    color: '#B8965C'
  },
  {
    id: 'minimim-discovery',
    title: 'Mini Mim - Mascotes Virtuais',
    tagline: 'Plataforma Interativa de Quiz com Design Imersivo',
    description: 'Landing page premium para venda de mascotes virtuais 3D. Sistema de quiz interativo que recomenda personagens baseado no perfil da marca. Design dark theme com glassmorphism e partículas animadas.',
    highlights: [
      'Quiz interativo com algoritmo de matching',
      'Dark theme com glow effects e partículas',
      'Arquitetura de estados fluida'
    ],
    link: 'https://minimim.synapseb2b.com/',
    image: '/cases/minimim-home.png',
    color: '#F97316'
  },
  {
    id: 'vida-nova-odonto',
    title: 'Vida Nova Odonto',
    tagline: 'Landing Page Premium com Estética Médica',
    description: 'Landing page institucional para clínica odontológica com design system exclusivo inspirado em clínicas internacionais. Modal de pré-atendimento inteligente integrado ao WhatsApp e galeria antes/depois interativa.',
    highlights: [
      'Design system surgical blue + titanium + gold',
      'Modal de pré-atendimento multistep',
      'Galeria antes/depois com hover/tap'
    ],
    link: 'https://vidanovaodonto.com.br/',
    image: '/cases/vidanovaodonto-home.png',
    color: '#0A2540'
  },
  {
    id: 'josias-eduardo-consultor',
    title: 'Josias Eduardo Pereira',
    tagline: 'Landing Page Premium com Design Executivo',
    description: 'Landing page de alta conversão para consultor empresarial com 35 anos de experiência. Design system exclusivo em paleta gold/navy com glass morphism e tipografia mista.',
    highlights: [
      'Design system executivo gold/navy',
      'Tipografia mista: Playfair Display + Inter',
      'Micro-interações: hover-lift, scroll animations'
    ],
    link: 'https://josias.synapseb2b.com/',
    image: '/cases/josias-home.png',
    color: '#C9A048'
  },
  {
    id: 'skippers-bilingue',
    title: "Escola Skipper's Bilíngue",
    tagline: 'Plataforma Educacional com Design Emocional',
    description: 'Ecossistema digital para escola bilíngue com Área do Aluno protegida, blog dinâmico e componentes narrativos que traduzem a proposta pedagógica em experiência visual.',
    highlights: [
      'Área do Aluno com autenticação e dashboard',
      'SEO local: 1º lugar "Escola Bilíngue Sete Lagoas"',
      'Design emocional com micro-interações'
    ],
    link: 'https://skippersbilingue.com.br/',
    image: '/cases/skippers-home.png',
    color: '#7B3DB5'
  }
];

export default function AtivosDePerformance() {
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

  const cardWidth = isMobile ? 300 : 800; 
  const cardHeight = isMobile ? 550 : 450; 
  const xOffset = isMobile ? 320 : 650; 

  return (
    <>
      <Head>
        <title>Ativos de Performance | Synapse B2B</title>
        <meta name="description" content="Infraestrutura digital que educa, qualifica e vende 24/7. Plataformas de conversão e apps estratégicos de receita." />
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
          <h1 className="hero-headline">Ativos de Performance</h1>
          <p className="hero-subheadline lead-text">
            A Engenharia da Conversão. Infraestrutura digital que educa, qualifica e vende 24/7.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Avaliar Meu Ativo Digital</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center max-w-800 mx-auto mb-5">
            <h2 className="section-title">Não construímos sites institucionais.</h2>
            <p className="lead-text">
              Projetamos a infraestrutura digital que serve como o principal ativo de vendas da empresa. Traduzimos a complexidade da sua solução em uma experiência digital que educa o mercado e reduz o ciclo de venda.
            </p>
          </div>

          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <h3 className="truth-card-title" style={{marginBottom: '0.5rem', color: 'var(--color-accent)'}}>1.</h3>
              <h3 className="truth-card-title">Leads sem contexto</h3>
              <p>Seu time gasta horas qualificando prospects que não entendem o produto. Cada venda exige explicação do zero.</p>
            </div>
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title" style={{marginBottom: '0.5rem', color: 'var(--color-accent)'}}>2.</h3>
              <h3 className="truth-card-title">ROI abstrato</h3>
              <p>O valor da sua solução é grande, mas o cliente não visualiza. Ele ouve sobre ROI, mas não sente.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title" style={{marginBottom: '0.5rem', color: 'var(--color-accent)'}}>3.</h3>
              <h3 className="truth-card-title">Ativo subutilizado</h3>
              <p>Você investiu alto em um site que funciona apenas como cartão de visita digital. Ele não vende sozinho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AS 2 FRENTES */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Duas Frentes de Atuação</h2>
          <p className="lead-text">Tecnologia a serviço da autoridade e da geração de demanda qualificada.</p>

          <div className="pillar-grid-revolutionary" style={{maxWidth: '900px', margin: '0 auto'}}>
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Layout size={32} /></div>
              <h3 className="pillar-card-title">Plataformas de Conversão</h3>
              <p className="pillar-card-description">
                Interfaces focadas em Qualificação e Educação, garantindo que o prospect chegue à reunião comercial consciente do valor da solução. Não construímos sites — projetamos máquinas de demanda qualificada.
              </p>
              <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px'}}>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.8}}>
                  <strong>Entregável:</strong> Arquitetura de conversão + Design de jornada + Desenvolvimento completo.
                </p>
              </div>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Calculator size={32} /></div>
              <h3 className="pillar-card-title">Apps Estratégicos de Receita</h3>
              <p className="pillar-card-description">
                Calculadoras de ROI, simuladores de viabilidade e dashboards que tornam o benefício técnico tangível para o decisor financeiro. Ferramentas que aceleram o ciclo de venda.
              </p>
              <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px'}}>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.8}}>
                  <strong>Entregável:</strong> Ferramenta interativa proprietária integrada à sua estratégia de vendas.
                </p>
              </div>
            </div>

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
            <div style={{marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div style={{textAlign: 'center'}}>
                <span style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)'}}>24/7</span>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.8}}>Operação contínua</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <span style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)'}}>-40%</span>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.8}}>Ciclo de venda</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <span style={{fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)'}}>+3x</span>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.8}}>Leads qualificados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARROSSEL 3D */}
      <section className="section-with-gradient-glow" style={{paddingBottom: '6rem', overflow: 'hidden'}}>
        <div className="container">
          <div className="text-center mb-10 reveal-up">
            <h2 className="section-title">Plataformas Que Construímos</h2>
            <p className="lead-text">9 projetos. Explore nossos cases.</p>
          </div>

          <div className="carousel-3d-container" style={{
            position: 'relative', 
            height: isMobile ? '500px' : '550px', 
            perspective: '1200px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            width: '100%'
          }}>
            
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

            <div style={{
              position: 'relative', width: '100%', height: '100%', display: 'flex',
              justifyContent: 'center', alignItems: 'center', transformStyle: 'preserve-3d'
            }}>
              {platformsData.map((platform, index) => {
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
                      width: isMobile ? '85vw' : `${cardWidth}px`,
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
                    <div style={{
                      height: '30px', background: 'rgba(255,255,255,0.05)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                      alignItems: 'center', padding: '0 1rem', gap: '6px'
                    }}>
                       <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ff5f56'}}></div>
                       <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                       <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#009684'}}></div>
                    </div>

                    <div style={{position: 'relative', width: '100%', height: 'calc(100% - 30px)'}}>
                      <div style={{
                         width: '100%', height: '100%', 
                         backgroundImage: `url(${platform.image})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'top center',
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

      {/* QUANDO CONTRATAR */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Quando Contratar</h2>
          <p className="lead-text">Para situações onde a demonstração de valor trava a venda.</p>

          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><CheckCircle2 size={32} /></div>
              <h3 className="truth-card-title">Site não gera demanda qualificada</h3>
              <p>Você tem tráfego, mas os leads chegam frios. Seu time comercial perde horas educando do zero.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><CheckCircle2 size={32} /></div>
              <h3 className="truth-card-title">Cliente precisa "sentir" o valor</h3>
              <p>ROI é grande mas abstrato. Você explica em 40 slides e o cliente ainda não visualiza.</p>
            </div>

            <div className="glass-card-premium card-wide">
              <div className="pillar-icon-wrapper premium-glow"><CheckCircle2 size={32} /></div>
              <h3 className="truth-card-title">Ciclo de vendas longo demais</h3>
              <p>Se a decisão leva meses, o ativo digital certo acelera ao eliminar a dúvida técnica antes da reunião. O prospect chega educado, não convencido — a venda flui.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Seu ativo digital deveria ser seu melhor vendedor.
          </h2>
          <p className="lead-text">
            Se ele não educa, não qualifica e não converte, você está desperdiçando o investimento mais escalável do seu negócio.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Transformar Meu Ativo Digital</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{marginTop: '1rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem'}}>
            Primeira conversa: 21 minutos para avaliar seu ativo atual e mapear oportunidades de conversão.
          </p>
        </div>
      </section>
    </>
  );
}