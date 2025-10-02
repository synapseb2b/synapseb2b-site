// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Eye, Zap, Search, Lightbulb, Ban, TrendingUp, Wrench, HeartPulse, CheckCircle } from 'lucide-react';

export default function HomePage() {
  // Hook para animações de scroll-reveal
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
      { threshold: 0.2 } // Anima quando 20% do elemento está visível
    );

    document.querySelectorAll('.reveal-up, .reveal-fade').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Escalar Negócios B2B</title>
        <meta name="description" content="Traduzimos a complexidade técnica em uma Engenharia de Receita clara e executável. Transformamos seu potencial em performance de mercado." />
      </Head>

      {/* ===== HERO DE ALTO IMPACTO ===== */}
      <section className="hero-genius">
        <div className="rotating-text-background">
          <p>ENGENHARIA DE RECEITA • CORTEX GTM™ • PERFORMANCE B2B •</p>
        </div>
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="reveal-up">
            <h1 className="hero-headline-part1">Sua empresa tem potencial.</h1>
            <h2 className="hero-headline-part2">Nós projetamos a receita.</h2>
          </div>
          <p className="hero-subheadline reveal-up" data-delay="1">
            Muitas empresas B2B possuem uma genialidade técnica inquestionável, mas lutam para traduzi-la em uma narrativa clara que o mercado compreenda e compre. O resultado? Ciclos de venda longos, objeções e potencial de receita desperdiçado.
          </p>
          <div className="hero-ctas reveal-fade" data-delay="2">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Inicie seu Diagnóstico de Receita</span>
              <ArrowRight />
            </Link>
            <Link href="#impacto" className="btn btn-secondary-contrast">
              <span>Veja a Engenharia em Ação</span>
              <Eye />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 2: O PROBLEMA (com fundo de imagem) ===== */}
      <section id="problema" className="section-immersive" style={{ '--bg-image': 'url(/image/Nos_somos_o_neurotransmissor_do_crescimento_B2B.png)' }}>
        <div className="section-overlay"></div>
        <div className="container text-center">
          <div className="reveal-up">
            <h2 className="section-title">O mercado não compra o que não entende.</h2>
            <p className="lead-text">Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado perceber seu valor. O desafio vai além da linguagem técnica:</p>
          </div>
          <div className="problem-list-three">
            <div className="problem-item-square glass-card-contrast reveal-fade" data-delay="0">
              <div className="problem-icon"><Ban /></div>
              <p>Mensagens que não conectam com decisores.</p>
            </div>
            <div className="problem-item-square glass-card-contrast reveal-fade" data-delay="1">
              <div className="problem-icon"><TrendingUp /></div>
              <p>Estratégias comerciais desalinhadas com o processo real de compra.</p>
            </div>
            <div className="problem-item-square glass-card-contrast reveal-fade" data-delay="2">
              <div className="problem-icon"><Wrench /></div>
              <p>Falta de integração entre marketing, vendas e produto.</p>
            </div>
          </div>
          <div className="highlight-box reveal-up" data-delay="1">
            <p>No B2B, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.</p>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 3: NOSSA RESPOSTA (com fundo de imagem) ===== */}
      <section id="solucao" className="section-immersive" style={{ '--bg-image': 'url(/image/Plataforma.png)' }}>
        <div className="section-overlay"></div>
        <div className="container text-center">
          <div className="reveal-up">
            <h2 className="section-title">A Engenharia por Trás da Clareza</h2>
            <p className="lead-text">Resolver o gargalo entre um produto genial e a receita que ele gera exige mais do que táticas de marketing. Exige um método. Exige engenharia. Por isso, criamos o <strong>Cortex GTM™</strong>.</p>
          </div>
          <div className="engineering-steps">
            <div className="step-card reveal-fade" data-delay="0">
              <div className="step-icon-wrapper"><Search /></div>
              <h3>1. Diagnóstico Profundo</h3>
              <p>Mapeamos o problema crítico, o perfil do comprador ideal (ICP) e os Jobs-to-be-Done para ter um raio-x preciso do seu mercado.</p>
            </div>
            <div className="step-card reveal-fade" data-delay="1">
              <div className="step-icon-wrapper"><Lightbulb /></div>
              <h3>2. Arquitetura da Clareza</h3>
              <p>Desenhamos sua narrativa estratégica e definimos sua categoria, transformando clareza em vantagem competitiva.</p>
            </div>
            <div className="step-card reveal-fade" data-delay="22">
              <div className="step-icon-wrapper"><Zap /></div>
              <h3>3. Ativação da Receita</h3>
              <p>Traduzimos a estratégia em ativos que geram lucro, eliminam o risco da compra e ativam os canais de aceleração.</p>
            </div>
          </div>
          <div className="reveal-fade" data-delay="1">
            <Link href="/metodologia" className="btn btn-primary" style={{ marginTop: '3rem' }}>
              <Eye />
              <span>Conheça a Metodologia em Detalhes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* As seções 4, 5 e 6 podem ser adicionadas aqui, seguindo o mesmo padrão de `section-immersive` e `reveal-up` para manter a consistência. */}

    </>
  );
}
