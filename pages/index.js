import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Zap, Wrench, HeartPulse, Ban, ArrowRight, CheckCircle, Eye, Users, Lightbulb } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Intersection Observer para animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' } // Ajustado para melhor detecção
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Mouse tracking para efeitos parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 1024) { // Ativar apenas em telas maiores
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Escalar Negócios B2B</title>
        <meta name="description" content="Traduzimos a complexidade técnica de empresas de tecnologia e engenharia em uma Engenharia de Receita clara e executável. Transformamos seu potencial em performance de mercado." />
        <meta property="og:title" content="Synapse B2B | Engenharia de Receita para Escalar Negócios B2B" />
        <meta property="og:description" content="Traduzimos a complexidade técnica de empresas de tecnologia e engenharia em uma Engenharia de Receita clara e executável. Transformamos seu potencial em performance de mercado." />
      </Head>

      {/* Fundo com gradiente e partículas */}
      <div className="main-background">
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Seção Hero */}
      <section 
        ref={heroRef}
        className="hero modern-hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div 
            className="hero-content"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          >
            <h1 className="hero-headline" data-animate id="hero-title">
              Sua empresa tem potencial. Nós projetamos a receita.
            </h1>
            <p className="hero-subheadline" data-animate id="hero-sub">
              Muitas empresas B2B possuem uma genialidade técnica inquestionável, mas lutam para traduzi-la em uma narrativa clara que o mercado compreenda e compre. O resultado? Ciclos de venda longos, objeções e potencial de receita desperdiçado. Nós construímos a clareza, os ativos e a aceleração que transformam esse potencial em lucro.
            </p>
            <div className="hero-ctas modern-ctas" data-animate id="hero-ctas" style={{ marginBottom: '2rem' }}>
              <button 
                onClick={() => scrollToSection('crescimento')}
                className="btn btn-primary btn-modern btn-white-text"
              >
                <span>Inicie seu Diagnóstico de Receita</span>
                <ArrowRight className="btn-icon" />
              </button>
              <button 
                onClick={() => scrollToSection('impacto')}
                className="btn btn-secondary-contrast btn-modern"
              >
                <Eye className="btn-icon" />
                <span>Veja a Engenharia em Ação</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/Video_Home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Bloco 2: O problema que resolvemos */}
      <section className="section section-dark modern-section" id="problema">
        <div className="container text-center">
            <h2 className="section-title" data-animate id="problem-title">O mercado não compra o que não entende.</h2>
            <p className="lead-text" data-animate id="problem-lead1">
              Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado perceber seu valor. O desafio vai além da linguagem técnica:
            </p>
            <div className="problem-grid-dynamic">
              <div className="problem-card glass-card-contrast" data-animate id="problem-card1">
                  <div className="problem-icon"><Ban /></div>
                  <p>Mensagens que não conectam com decisores.</p>
              </div>
              <div className="problem-card glass-card-contrast" data-animate id="problem-card2">
                  <div className="problem-icon"><TrendingUp /></div>
                  <p>Estratégias comerciais desalinhadas com o processo real de compra.</p>
              </div>
              <div className="problem-card glass-card-contrast" data-animate id="problem-card3">
                  <div className="problem-icon"><Wrench /></div>
                  <p>Falta de integração entre marketing, vendas e produto.</p>
              </div>
            </div>
            <div className="highlight-box" data-animate id="problem-highlight">
              <p>
                No <strong>B2B</strong>, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.
              </p>
            </div>
        </div>
      </section>

      {/* Bloco 3: Nossa Resposta - A Engenharia de Receita */}
      <section className="section section-light modern-section" id="solucao">
        <div className="container text-center">
          <h2 className="section-title" data-animate id="sol-title">A Engenharia por Trás da Clareza</h2>
          <p className="lead-text" data-animate id="sol-lead">
            Resolver o gargalo entre um produto genial e a receita que ele gera exige mais do que táticas de marketing. Exige um método. Exige engenharia.
          </p>
          <p className="lead-text" data-animate id="sol-lead2">
            Por isso, criamos o <strong>Cortex GTM™</strong>, nosso framework proprietário que integra a ciência do comportamento humano com a disciplina dos modelos de negócio mais validados do mundo.
          </p>
          <div className="solution-timeline">
            <div className="solution-step" data-animate id="sol-step1">
              <div className="solution-icon"><Search /></div>
              <h3>1. Diagnóstico Profundo</h3>
              <p>Vamos ao núcleo do seu negócio e do seu cliente. Mapeamos o problema crítico, o perfil do comprador ideal (ICP) e os Jobs-to-be-Done para ter um raio-x preciso do seu mercado.</p>
            </div>
            <div className="solution-step" data-animate id="sol-step2">
              <div className="solution-icon"><Lightbulb /></div>
              <h3>2. Arquitetura da Clareza</h3>
              <p>Com o diagnóstico, construímos sua tese de mercado. Desenhamos sua narrativa estratégica e definimos sua categoria. A clareza se torna sua maior vantagem competitiva.</p>
            </div>
            <div className="solution-step" data-animate id="sol-step3">
              <div className="solution-icon"><Zap /></div>
              <h3>3. Ativação da Receita</h3>
              <p>Traduzimos a estratégia em ativos que geram lucro. Construímos as provas de valor que eliminam o risco da compra e ativamos os canais que conectam sua solução aos clientes certos.</p>
            </div>
          </div>
          <div className="hero-ctas modern-ctas" style={{ marginTop: '3rem' }} data-animate id="sol-cta">
            <Link href="/metodologia" className="btn btn-primary btn-modern">
              <Eye className="btn-icon" />
              <span>Conheça a Metodologia em Detalhes</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Bloco 4: A Prova do Impacto */}
      <section className="section section-darker modern-section" id="impacto">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title" data-animate id="impact-title">A Engenharia de Receita em Ação</h2>
            <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }} data-animate id="impact-lead">
              Não executamos projetos. Construímos teses de negócio e ativamos seu potencial de receita. Veja a profundidade da nossa engenharia através de transformações reais.
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card glass-card-contrast" data-animate id="impact-card1">
              <div className="impact-header">
                <Wrench className="impact-icon" />
                <h3>De Operações Fragmentadas a Hub de Engenharia de Alta Performance</h3>
              </div>
              <div className="impact-body">
                  <h4>O Desafio:</h4>
                  <p>Uma empresa familiar com clientes de grande porte (Iveco, FPT) e operações isoladas, sem uma narrativa de marca que refletisse sua real capacidade técnica.</p>
                  <h4>A Engenharia Aplicada:</h4>
                  <p>Imersão profunda com o Cortex GTM™ para unificar operações sob uma nova tese de mercado, redefinindo categoria, posicionamento e culminando no rebatismo da marca.</p>
                  <h4>A Transformação:</h4>
                  <p>Contratos ampliados para posições de CRO as a Service e Advisory Board, consolidando a Synapse como parceira estratégica de longo prazo.</p>
              </div>
            </div>
            <div className="impact-card glass-card-contrast" data-animate id="impact-card2">
              <div className="impact-header">
                <HeartPulse className="impact-icon" />
                <h3>De Inovação Complexa a uma Nova Categoria de Mercado em Saúde</h3>
              </div>
              <div className="impact-body">
                <h4>O Desafio:</h4>
                <p>Uma HealthTech com uma solução genial, mas com uma proposta de valor complexa que clientes e investidores não compreendiam, travando o potencial de escala.</p>
                <h4>A Engenharia Aplicada:</h4>
                <p>Criação de uma nova categoria de mercado – "CareOps Integrativo" – e cristalização da oferta em uma tese de investimento com potencial de ROI superior a 6 para 1 para hospitais.</p>
                <h4>A Transformação:</h4>
                <p>Clareza estratégica total, com ativos de comunicação prontos para acelerar a tração de mercado e comprovar o valor da solução para decisores C-level.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 5: Nossas Soluções */}
      <section className="section section-light modern-section" id="crescimento">
        <div className="container text-center">
          <h2 className="section-title" data-animate id="growth-title">Sua Engenharia de Receita Sob Medida</h2>
          <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }} data-animate id="growth-lead">
            Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.
          </p>
          <div className="solutions-grid-dynamic">
            <div className="solution-card-dynamic glass-card" data-animate id="growth-card1">
              <h3>Precisa Validar Rápido?</h3>
              <h4>Sprint de Validação Comercial</h4>
              <p>Sprints ágeis para responder à pergunta crítica: existe demanda real e pagante para sua oferta?</p>
              <ul className="solution-features">
                <li><CheckCircle /> Análise de Risco vs. Oportunidade</li>
                <li><CheckCircle /> Teste de Narrativa e Oferta</li>
                <li><CheckCircle /> Decisão Go/No-Go Baseada em Dados</li>
              </ul>
            </div>
            <div className="solution-card-dynamic glass-card" data-animate id="growth-card2">
              <h3>Pronto para Escalar Agora?</h3>
              <h4>Go-To-Market Completo</h4>
              <p>Do diagnóstico à execução, instalamos e operamos sua máquina de receita para um crescimento sustentável.</p>
              <ul className="solution-features">
                <li><CheckCircle /> Diagnóstico Profundo Cortex GTM™</li>
                <li><CheckCircle /> Arquitetura da Clareza e Ativos</li>
                <li><CheckCircle /> Ativação e Aceleração de Canais</li>
              </ul>
            </div>
            <div className="solution-card-dynamic glass-card" data-animate id="growth-card3">
              <h3>Busca Liderança Sênior?</h3>
              <h4>Diretoria de Receita sob Demanda</h4>
              <p>Inteligência C-level para decisões críticas e tração comercial, sem aumentar seu headcount.</p>
              <ul className="solution-features">
                <li><CheckCircle /> Planejamento Estratégico Contínuo</li>
                <li><CheckCircle /> Gestão de Funil, Metas e KPIs</li>
                <li><CheckCircle /> Mentoria para a Liderança</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bloco 6: Chamada final */}
      <section className="section section-darker modern-section final-cta" id="chamada-final">
        <div className="container text-center">
          <h2 className="section-title" data-animate id="final-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="lead-text" data-animate id="final-lead">
            Com metodologia proprietária e atuação integrada, transformamos complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.
          </p>
          <div className="final-ctas" data-animate id="final-ctas">
            <Link href="/contato" className="btn btn-primary btn-modern btn-large btn-white-text">
              <span>Fale com a Synapse B2B</span>
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

