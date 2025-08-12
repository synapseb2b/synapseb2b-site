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

  // Animações de entrada e revelação
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
        {/* Meta OG/Twitter para modernidade/SEO técnico */}
        <meta property="og:title" content="Receita Previsível para Produtos Complexos | Synapse B2B" />
        <meta
          property="og:description"
          content="Aceleramos negócios B2B complexos, traduzindo genialidade técnica em crescimento previsível."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* SVG Filter para efeito impressionista (pinceladas sutis) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <filter id="impressionist" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feComponentTransfer in="mono" result="soft">
            <feFuncA type="table" tableValues="0 0 0.02 0.05 0.08 0.12 0.06 0.03 0" />
          </feComponentTransfer>
          <feGaussianBlur in="soft" stdDeviation="1.2" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="overlay" />
        </filter