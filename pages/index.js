import { Target, BarChart, Search, ClipboardCheck, TrendingUp } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const parallaxRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animações de entrada
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('[data-reveal]');

    if (!prefersReduced && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      els.forEach((el) => el.classList.add('revealed'));
    }
  }, []);

  // Parallax sutil no background da Hero
  useEffect(() => {
    const node = parallaxRef.current;
    if (!node) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const y = window.scrollY * 0.15;
      node.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Receita Previsível para Produtos Complexos | Synapse B2B</title>
        <meta
          name="description"
          content="Somos a Plataforma de Aceleração de Negócios B2B que cria a ponte entre sua genialidade técnica e a receita previsível que ela merece."
        />
        <meta property="og:title" content="Receita Previsível para Produtos Complexos | Synapse B2B" />
        <meta
          property="og:description"
          content="Aceleramos negócios B2B complexos, traduzindo genialidade técnica em crescimento previsível."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* SVG Filter para efeito impressionista */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <filter id="impressionist" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feComponentTransfer in="mono" result="soft">
            <feFuncA type="table" tableValues="0 0 0.02 0.05 0.08 0.12 0.06 0.03 0" />
          </feComponentTransfer>
          <feGaussianBlur in="soft" stdDeviation="1.2" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="overlay" />
        </filter>
      </svg>

      {/* Seção Hero */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-content fade-in-up" data-reveal>
            <h1>
              <span>Seu produto é genial.</span>
              <span>Por que a receita não é?</span>
            </h1>
            <p className="hero-subheadline">
              <span className="subheadline-statement">Produtos geniais morrem todos os dias.</span>
              <span className="subheadline-negation">Não por falha técnica.</span>
              <span className="subheadline-thesis text-highlight">Mas por uma fatal falha de tradução.</span>
            </p>
            <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
              <button onClick={() => scrollToSection('framework')} className="btn btn-primary">
                Conheça o Framework GTM Ignition™
              </button>
              <Link href="/contato" className="btn btn-diagnostic">
                Agendar Diagnóstico Direto
              </Link>
            </div>
          </div>
        </div>

        {/* Camadas visuais: vídeo + overlay */}
        <div
          ref={parallaxRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            opacity: 0.25,
            background: 'linear-gradient(135deg, #000000 0%, #0A192F 100%)',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/image/Plataforma.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.2) contrast(1.05)' }}
          >
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              filter: 'url(#impressionist)',
              opacity: 0.9,
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(transparent 60%, rgba(0,0,0,0.25)), repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
              opacity: 0.35,
              animation: 'grainMove 12s linear infinite',
            }}
          />
        </div>
      </section>

      {/* ... restante das seções exatamente como no código anterior, preservando imagens e vídeo ... */}

      {/* Estilos locais */}
      <style jsx>{`
        @keyframes grainMove {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-10%, -10%, 0);
          }
        }
        [data-reveal] {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
          transition: opacity 700ms cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </>
  );
}