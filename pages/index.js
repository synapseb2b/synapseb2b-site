// pages/index.js (ou HomePage.js)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { ArrowRight, Eye, Zap, Search, Lightbulb, Ban, TrendingUp, Wrench, HeartPulse, CheckCircle } from 'lucide-react';

export default function HomePage() {
  // Hook para adicionar a classe 'animate-in' quando o elemento entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); // Anima apenas uma vez
          }
        });
      },
      { threshold: 0.1 } // Dispara quando 10% do elemento está visível
    );

    // Observa todos os elementos com o atributo 'data-animate'
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // Limpa o observer quando o componente é desmontado
    return () => observer.disconnect();
  }, []);

  // Função para rolagem suave (pode ser usada nos botões se necessário)
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        {/* Meta Tags do documento de copy */}
        <title>Synapse B2B | Engenharia de Receita para Escalar Negócios B2B</title>
        <meta name="description" content="Traduzimos a complexidade técnica de empresas de tecnologia e engenharia em uma Engenharia de Receita clara e executável. Transformamos seu potencial em performance de mercado." />
      </Head>

      {/* Fundos animados (controlados via CSS) */}
      <div className="animated-gradient-background"></div>
      <div className="particles-container">
        {[...Array(20)].map((_, i) => <div key={i} className="particle" />)}
      </div>

      {/* ===== HERO REIMAGINADO (com copy original) ===== */}
      <section className="hero-reimagined">
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="container hero-layout">
          <div className="hero-title-section">
            {/* Headline dividida para impacto visual */}
            <h1 className="hero-headline-part1" data-animate>Sua empresa tem potencial.</h1>
            <h2 className="hero-headline-part2" data-animate data-delay="200">Nós projetamos a receita.</h2>
          </div>
          <div className="hero-subheadline-wrapper" data-animate data-delay="400">
            {/* Sub-headline do documento de copy */}
            <p className="hero-subheadline-text">
              Muitas empresas B2B possuem uma genialidade técnica inquestionável, mas lutam para traduzi-la em uma narrativa clara que o mercado compreenda e compre. O resultado? Ciclos de venda longos, objeções e potencial de receita desperdiçado. Nós construímos a clareza, os ativos e a aceleração que transformam esse potencial em lucro.
            </p>
          </div>
        </div>
        <div className="hero-cta-bar" data-animate data-delay="600">
          {/* CTAs do Hero */}
          <button onClick={() => scrollToSection('crescimento')} className="btn btn-primary btn-large">
            <span>Inicie seu Diagnóstico de Receita</span>
            <ArrowRight className="btn-icon" />
          </button>
          <button onClick={() => scrollToSection('impacto')} className="btn btn-secondary-contrast">
            <Eye className="btn-icon" />
            <span>Veja a Engenharia em Ação</span>
          </button>
        </div>
      </section>

      {/* ===== BLOCO 2: O PROBLEMA (com copy original) ===== */}
      <section id="problema" className="section neurotransmitter-section">
        <div className="container text-center" data-animate>
          <div className="neuro-image-wrapper">
            <Image src="/image/Nos_somos_o_neurotransmissor_do_crescimento_B2B.png" alt="Neurotransmissor do Crescimento B2B" layout="fill" objectFit="contain" />
          </div>
          <h2 className="section-title">O mercado não compra o que não entende.</h2>
          <p className="lead-text">Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado perceber seu valor. O desafio vai além da linguagem técnica:</p>
          <div className="problem-list-three">
            <div className="problem-item-square glass-card-contrast" data-animate data-delay="200">
              <div className="problem-icon"><Ban /></div>
              <p>Mensagens que não conectam com decisores.</p>
            </div>
            <div className="problem-item-square glass-card-contrast" data-animate data-delay="400">
              <div className="problem-icon"><TrendingUp /></div>
              <p>Estratégias comerciais desalinhadas com o processo real de compra.</p>
            </div>
            <div className="problem-item-square glass-card-contrast" data-animate data-delay="600">
              <div className="problem-icon"><Wrench /></div>
              <p>Falta de integração entre marketing, vendas e produto.</p>
            </div>
          </div>
          <div className="highlight-box" data-animate>
            <p>No B2B, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.</p>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 3: NOSSA RESPOSTA (com copy original) ===== */}
      <section id="solucao" className="section section-light">
        <div className="container text-center" data-animate>
          <h2 className="section-title">A Engenharia por Trás da Clareza</h2>
          <p className="lead-text">Resolver o gargalo entre um produto genial e a receita que ele gera exige mais do que táticas de marketing. Exige um método. Exige engenharia.</p>
          <p className="lead-text">Por isso, criamos o <strong>Cortex GTM™</strong>, nosso framework proprietário que integra a ciência do comportamento humano com a disciplina dos modelos de negócio mais validados do mundo.</p>
          <div className="engineering-steps">
            <div className="step-card" data-animate data-delay="200">
              <div className="step-icon-wrapper"><Search /></div>
              <h3>1. Diagnóstico Profundo</h3>
              <p>Vamos ao núcleo do seu negócio e do seu cliente. Mapeamos o problema crítico, o perfil do comprador ideal (ICP) e os Jobs-to-be-Done para ter um raio-x preciso do seu mercado.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card" data-animate data-delay="400">
              <div className="step-icon-wrapper"><Lightbulb /></div>
              <h3>2. Arquitetura da Clareza</h3>
              <p>Com o diagnóstico, construímos sua tese de mercado. Desenhamos sua narrativa estratégica e definimos sua categoria. A clareza se torna sua maior vantagem competitiva.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card" data-animate data-delay="600">
              <div className="step-icon-wrapper"><Zap /></div>
              <h3>3. Ativação da Receita</h3>
              <p>Traduzimos a estratégia em ativos que geram lucro. Construímos as provas de valor que eliminam o risco da compra e ativamos os canais que conectam sua solução aos clientes certos.</p>
            </div>
          </div>
          <div className="platform-image-container" data-animate>
            <Image src="/image/Plataforma.png" alt="Plataforma Cortex GTM" width={1000} height={563} objectFit="contain" />
            <div className="cta-overlay-platform">
                <Link href="/metodologia" className="btn btn-primary">
                    <Eye className="btn-icon" />
                    <span>Conheça a Metodologia em Detalhes</span>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 4: A PROVA DO IMPACTO (com copy original) ===== */}
      <section id="impacto" className="section section-darker">
        <div className="container text-center" data-animate>
          <h2 className="section-title">A Engenharia de Receita em Ação</h2>
          <p className="lead-text">Não executamos projetos. Construímos teses de negócio e ativamos seu potencial de receita. Veja a profundidade da nossa engenharia através de transformações reais.</p>
          <div className="scenarios-grid-two">
            <div className="scenario-card glass-card-contrast" data-animate data-delay="200">
              <div className="scenario-header"><Wrench className="scenario-icon" /><h3>De Operações Fragmentadas a Hub de Engenharia de Alta Performance</h3></div>
              <div className="scenario-body">
                <div className="scenario-part"><h4>O Desafio:</h4><p>Uma empresa familiar com clientes de grande porte (Iveco, FPT) e operações isoladas, sem uma narrativa de marca que refletisse sua real capacidade técnica.</p></div>
                <div className="scenario-part"><h4>A Engenharia Aplicada:</h4><p>Imersão profunda com o Cortex GTM™ para unificar operações sob uma nova tese de mercado, redefinindo categoria, posicionamento e culminando no rebatismo da marca.</p></div>
                <div className="scenario-part"><h4>A Transformação:</h4><p>Contratos ampliados para posições de CRO as a Service e Advisory Board, consolidando a Synapse como parceira estratégica de longo prazo.</p></div>
              </div>
            </div>
            <div className="scenario-card glass-card-contrast" data-animate data-delay="400">
              <div className="scenario-header"><HeartPulse className="scenario-icon" /><h3>De Inovação Complexa a uma Nova Categoria de Mercado em Saúde</h3></div>
              <div className="scenario-body">
                <div className="scenario-part"><h4>O Desafio:</h4><p>Uma HealthTech com uma solução genial, mas com uma proposta de valor complexa que clientes e investidores não compreendiam, travando o potencial de escala.</p></div>
                <div className="scenario-part"><h4>A Engenharia Aplicada:</h4><p>Criação de uma nova categoria de mercado – "CareOps Integrativo" – e cristalização da oferta em uma tese de investimento com potencial de ROI superior a 6 para 1 para hospitais.</p></div>
                <div className="scenario-part"><h4>A Transformação:</h4><p>Clareza estratégica total, com ativos de comunicação prontos para acelerar a tração de mercado e comprovar o valor da solução para decisores C-level.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 5: NOSSAS SOLUÇÕES (com copy original) ===== */}
      <section id="crescimento" className="section section-light">
        <div className="container text-center" data-animate>
          <h2 className="section-title">Sua Engenharia de Receita Sob Medida</h2>
          <p className="lead-text">Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.</p>
          <div className="solutions-grid">
            <div className="solution-card glass-card" data-animate data-delay="200">
              <h3>Precisa Validar Rápido?</h3>
              <h4>Sprint de Validação Comercial</h4>
              <p>Sprints ágeis para responder à pergunta crítica: existe demanda real e pagante para sua oferta?</p>
              <ul className="solution-features">
                <li><CheckCircle className="icon" /> Análise de Risco vs. Oportunidade</li>
                <li><CheckCircle className="icon" /> Teste de Narrativa e Oferta</li>
                <li><CheckCircle className="icon" /> Decisão Go/No-Go Baseada em Dados</li>
              </ul>
            </div>
            <div className="solution-card glass-card" data-animate data-delay="400">
              <h3>Pronto para Escalar Agora?</h3>
              <h4>Go-To-Market Completo</h4>
              <p>Do diagnóstico à execução, instalamos e operamos sua máquina de receita para um crescimento sustentável.</p>
              <ul className="solution-features">
                <li><CheckCircle className="icon" /> Diagnóstico Profundo Cortex GTM™</li>
                <li><CheckCircle className="icon" /> Arquitetura da Clareza e Ativos</li>
                <li><CheckCircle className="icon" /> Ativação e Aceleração de Canais</li>
              </ul>
            </div>
            <div className="solution-card glass-card" data-animate data-delay="600">
              <h3>Busca Liderança Sênior?</h3>
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
      </section>

      {/* ===== BLOCO 6: CHAMADA FINAL (com copy original) ===== */}
      <section id="chamada-final" className="section section-darker final-cta">
        <div className="container text-center" data-animate>
          <h2 className="section-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="lead-text">Com metodologia proprietária e atuação integrada, transformamos complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.</p>
          <div className="final-ctas">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Fale com a Synapse B2B</span>
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
