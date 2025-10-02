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
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Mouse tracking para efeitos parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
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

      {/* Partículas de fundo animadas */}
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

      {/* Linha de pulso elétrico entre navbar e hero */}
      <div className="synapse-line synapse-line-top"></div>
 
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
          <div className="hero-content fade-in-up">
            <h1 className="hero-headline">
              Sua empresa tem potencial. Nós projetamos a receita.
            </h1>
            <p className="hero-subheadline">
              Muitas empresas B2B possuem uma genialidade técnica inquestionável, mas lutam para traduzi-la em uma narrativa clara que o mercado compreenda e compre. O resultado? Ciclos de venda longos, objeções e potencial de receita desperdiçado. Nós construímos a clareza, os ativos e a aceleração que transformam esse potencial em lucro.
            </p>
            <div className="hero-ctas modern-ctas" style={{ marginBottom: '2rem' }}>
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
        
        {/* Vídeo de fundo com overlay moderno */}
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
          >
            <source src="/video/Video_Home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 2: O problema que resolvemos */}
      <section 
        className="section section-dark modern-section"
        id="problema"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">O mercado não compra o que não entende.</h2>
            <div className="section-content">
              <p className="lead-text">
                Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado
                perceber seu valor.
              </p>
              <p className="lead-text">O desafio vai além da linguagem técnica:</p>
              
              <div className="problem-list-three">
                <div className="problem-item-square glass-card-contrast">
                  <div className="problem-icon">
                    <Ban className="icon" />
                  </div>
                  <p>Mensagens que não conectam com decisores.</p>
                </div>
                <div className="problem-item-square glass-card-contrast">
                  <div className="problem-icon">
                    <TrendingUp className="icon" />
                  </div>
                  <p>Estratégias comerciais desalinhadas com o processo real de compra.</p>
                </div>
                <div className="problem-item-square glass-card-contrast">
                  <div className="problem-icon">
                    <Wrench className="icon" />
                  </div>
                  <p>Falta de integração entre marketing, vendas e produto.</p>
                </div>
              </div>

              <div className="highlight-box">
                <p>
                  No <strong>B2B</strong>, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial
                  irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita
                  previsível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 3: Nossa Resposta - A Engenharia de Receita */}
      <section 
        className="section section-light modern-section"
        id="solucao"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">A Engenharia por Trás da Clareza</h2>
            <div className="section-content">
              <p className="lead-text">
                Resolver o gargalo entre um produto genial e a receita que ele gera exige mais do que táticas de marketing. Exige um método. Exige engenharia.
              </p>
              <p className="lead-text">
                Por isso, criamos o <strong>Cortex GTM™</strong>, nosso framework proprietário de diagnóstico e arquitetura de Go-To-Market. Ele integra a ciência do comportamento humano (neurociência e andragogia) com a disciplina dos modelos de negócio mais validados do mundo para traduzir sua complexidade técnica em uma proposta de valor impossível de ignorar.
              </p>
              
              <div className="problem-list-three">
                <div className="problem-item-square glass-card">
                  <div className="problem-icon">
                    <Search className="icon" />
                  </div>
                  <h3>1. Diagnóstico Profundo</h3>
                  <p>Vamos ao núcleo do seu negócio e do seu cliente. Mapeamos o problema crítico, o perfil do comprador ideal (ICP) e os trabalhos que ele precisa resolver (Jobs-to-be-Done) para ter um raio-x preciso do seu mercado.</p>
                </div>
                <div className="problem-item-square glass-card">
                  <div className="problem-icon">
                    <Lightbulb className="icon" />
                  </div>
                  <h3>2. Arquitetura da Clareza</h3>
                  <p>Com o diagnóstico, construímos sua tese de mercado. Desenhamos sua narrativa estratégica, definimos sua categoria e erguemos os pilares da sua solução. A clareza se torna sua maior vantagem competitiva.</p>
                </div>
                <div className="problem-item-square glass-card">
                  <div className="problem-icon">
                    <Zap className="icon" />
                  </div>
                  <h3>3. Ativação da Receita</h3>
                  <p>Traduzimos a estratégia em ativos que geram lucro. Construímos as provas de valor que eliminam o risco da compra e ativamos os canais de aceleração que conectam sua solução aos clientes certos, da forma certa.</p>
                </div>
              </div>

              <div className="highlight-box-light">
                <p>
                  O <strong>Cortex GTM™</strong> é a nossa resposta para a complexidade. É como garantimos que a sua genialidade técnica não seja apenas admirada, mas comprada.
                </p>
              </div>

              {/* Adicionar um CTA para a página de metodologia */}
              <div className="hero-ctas modern-ctas" style={{ marginTop: '2rem' }}>
                <Link href="/metodologia" className="btn btn-primary btn-modern">
                  <Eye className="btn-icon" />
                  <span>Conheça a Metodologia em Detalhes</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>
      
      {/* Bloco 4: A Prova do Impacto */}
      <section 
        className="section section-darker modern-section"
        id="impacto"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">A Engenharia de Receita em Ação</h2>
            <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
              Não executamos projetos. Construímos teses de negócio e ativamos seu potencial de receita. Veja a profundidade da nossa engenharia através de transformações reais.
            </p>
            <div className="section-content">
              <div className="scenarios-grid-two">
                
                {/* Case 1: Exclusiva Engenharias */}
                <div className="scenario-card glass-card-contrast">
                  <div className="scenario-header">
                    <Wrench className="scenario-icon" />
                    <h3>De Operações Fragmentadas a Hub de Engenharia de Alta Performance</h3>
                  </div>
                  <div className="scenario-body">
                    <div className="scenario-part">
                      <h4>O Desafio:</h4>
                      <p>Uma empresa familiar com clientes de grande porte (Iveco, Cimento Nacional, FPT), mas com operações isoladas (civil, elétrica, automação) e uma narrativa de marca que não refletia sua real capacidade técnica.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>A Engenharia Aplicada:</h4>
                      <p>Imersão profunda com o Cortex GTM™ para unificar as operações sob uma nova tese de mercado: um "Hub Multidisciplinar de Engenharias" focado em infraestrutura de apoio essencial à indústria. O trabalho redefiniu a categoria, o posicionamento e a proposta de valor, culminando no rebatismo da marca para "Exclusiva Engenharias".</p>
                    </div>
                    <div className="scenario-part">
                      <h4>A Transformação:</h4>
                      <p>Contratos ampliados para posições de CRO as a Service e Advisory Board, consolidando a Synapse como parceira estratégica de longo prazo e validando um novo motor de crescimento para o cliente.</p>
                    </div>
                  </div>
                </div>

                {/* Case 2: Versão Holística */}
                <div className="scenario-card glass-card-contrast">
                  <div className="scenario-header">
                    <HeartPulse className="scenario-icon" />
                    <h3>De Inovação Complexa a uma Nova Categoria de Mercado em Saúde</h3>
                  </div>
                  <div className="scenario-body">
                    <div className="scenario-part">
                      <h4>O Desafio:</h4>
                      <p>Uma HealthTech com uma solução genial e nobre, mas com uma proposta de valor complexa que clientes e investidores não compreendiam, travando o potencial de escala do negócio.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>A Engenharia Aplicada:</h4>
                      <p>Utilizamos o Cortex GTM™ para traduzir a complexidade técnica em um caso de negócio irrefutável. Criamos uma nova categoria de mercado – "CareOps Integrativo" – e cristalizamos a oferta em uma tese de investimento com potencial de ROI superior a 6 para 1 para hospitais.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>A Transformação:</h4>
                      <p>Clareza estratégica total, com ativos de comunicação (Pitch Deck, Plataforma Digital) prontos para acelerar a tração de mercado e comprovar o valor da solução para os decisores C-level do setor da saúde.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 5: Nossas Soluções - A Engenharia de Crescimento */}
      <section 
        className="section section-light modern-section"
        id="crescimento"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Sua Engenharia de Receita Sob Medida</h2>
            <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
              Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.
            </p>
            <div className="solutions-grid">

              <div className="solution-card glass-card">
                <h3>Precisa Validar Rápido?</h3>
                <div className="solution-content">
                  <h4>Sprint de Validação Comercial</h4>
                  <p>Sprints ágeis para responder à pergunta crítica: existe demanda real e pagante para sua oferta?</p>
                  <ul className="solution-features">
                    <li><CheckCircle className="icon" /> Análise de Risco vs. Oportunidade</li>
                    <li><CheckCircle className="icon" /> Teste de Narrativa e Oferta</li>
                    <li><CheckCircle className="icon" /> Decisão Go/No-Go Baseada em Dados</li>
                  </ul>
                </div>
              </div>

              <div className="solution-card glass-card">
                <h3>Pronto para Escalar Agora?</h3>
                <div className="solution-content">
                  <h4>Go-To-Market Completo</h4>
                  <p>Do diagnóstico à execução, instalamos e operamos sua máquina de receita para um crescimento sustentável.</p>
                  <ul className="solution-features">
                    <li><CheckCircle className="icon" /> Diagnóstico Profundo Cortex GTM™</li>
                    <li><CheckCircle className="icon" /> Arquitetura da Clareza e Ativos</li>
                    <li><CheckCircle className="icon" /> Ativação e Aceleração de Canais</li>
                  </ul>
                </div>
              </div>

              <div className="solution-card glass-card">
                <h3>Busca Liderança Sênior?</h3>
                <div className="solution-content">
                  <h4>Diretoria de Receita sob Demanda</h4>
                  <p>Inteligência C-level para decisões críticas e tração comercial, sem aumentar seu headcount.</p>
                  <ul className="solution-features">
                    <li><CheckCircle className="icon" /> Planejamento Estratégico Contínuo</li>
                    <li><CheckCircle className="icon" /> Gestão de Funil, Metas e KPIs</li>
                    <li><CheckCircle className="icon" /> Mentoria para a Liderança</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="hero-ctas modern-ctas" style={{ marginTop: '3rem' }}>
              <Link href="/metodologia" className="btn btn-secondary-contrast btn-modern">
                <Eye className="btn-icon" />
                <span>Explore a Metodologia por Trás dos Resultados</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 6: Chamada final */}
      <section 
        className="section section-darker modern-section final-cta"
        id="chamada-final"
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
            <div className="section-content">
              <p className="lead-text">
                Com metodologia proprietária e atuação integrada, ajudamos empresas técnicas a
                transformar complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza
                estratégica e execução comercial de alto nível.
              </p>
              
              <div className="final-ctas">
                <Link href="/contato" className="btn btn-primary btn-modern btn-large btn-white-text">
                  <span>Fale com a Synapse B2B</span>
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link href="/casos-de-uso" className="btn btn-secondary-contrast btn-modern">
                  <Eye className="btn-icon" />
                  <span>Explore nossos Casos de Uso</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
