import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Zap, Wrench, HeartPulse, Ban, ArrowRight, CheckCircle, Eye, Users, Lightbulb } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  // Hook para detectar a visibilidade dos elementos e disparar animações
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
      { threshold: 0.15 } // O elemento precisa estar 15% visível
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Função para rolagem suave ao clicar em botões
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

      {/* Fundo com partículas animadas (controlado via CSS) */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => <div key={i} className="particle" />)}
      </div>

      {/* Seção Hero */}
      <section className="hero modern-hero">
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/Video_Home.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="hero-content" data-animate>
            <h1 className="hero-headline">
              Sua empresa tem potencial. Nós projetamos a receita.
            </h1>
            <p className="hero-subheadline">
              Muitas empresas B2B possuem uma genialidade técnica inquestionável, mas lutam para traduzi-la em uma narrativa clara que o mercado compreenda e compre. O resultado? Ciclos de venda longos, objeções e potencial de receita desperdiçado. Nós construímos a clareza, os ativos e a aceleração que transformam esse potencial em lucro.
            </p>
            <div className="hero-ctas">
              <button onClick={() => scrollToSection('crescimento')} className="btn btn-primary">
                <span>Inicie seu Diagnóstico de Receita</span>
                <ArrowRight className="btn-icon" />
              </button>
              <button onClick={() => scrollToSection('impacto')} className="btn btn-secondary-contrast">
                <Eye className="btn-icon" />
                <span>Veja a Engenharia em Ação</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      {/* Seção: O Problema */}
      <section id="problema" className="section section-dark">
        <div className="container text-center" data-animate>
          <h2 className="section-title">O mercado não compra o que não entende.</h2>
          <p className="lead-text">Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado perceber seu valor. O desafio vai além da linguagem técnica:</p>
          <div className="problem-list-three">
            <div className="problem-item-square glass-card-contrast">
              <div className="problem-icon"><Ban /></div>
              <p>Mensagens que não conectam com decisores.</p>
            </div>
            <div className="problem-item-square glass-card-contrast">
              <div className="problem-icon"><TrendingUp /></div>
              <p>Estratégias comerciais desalinhadas com o processo real de compra.</p>
            </div>
            <div className="problem-item-square glass-card-contrast">
              <div className="problem-icon"><Wrench /></div>
              <p>Falta de integração entre marketing, vendas e produto.</p>
            </div>
          </div>
          <div className="highlight-box">
            <p>No <strong>B2B</strong>, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.</p>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      {/* Seção: A Solução */}
      <section id="solucao" className="section section-light">
        <div className="container text-center" data-animate>
          <h2 className="section-title">A Engenharia por Trás da Clareza</h2>
          <p className="lead-text">Resolver o gargalo entre um produto genial e a receita que ele gera exige mais do que táticas de marketing. Exige um método. Exige engenharia.</p>
          <p className="lead-text">Por isso, criamos o <strong>Cortex GTM™</strong>, nosso framework proprietário de diagnóstico e arquitetura de Go-To-Market. Ele integra a ciência do comportamento humano com a disciplina dos modelos de negócio para traduzir sua complexidade técnica em uma proposta de valor impossível de ignorar.</p>
          <div className="problem-list-three">
            <div className="problem-item-square glass-card">
              <div className="problem-icon"><Search /></div>
              <h3>1. Diagnóstico Profundo</h3>
              <p>Mapeamos o problema crítico, o perfil do comprador ideal (ICP) e os trabalhos a serem feitos (Jobs-to-be-Done) para ter um raio-x preciso do seu mercado.</p>
            </div>
            <div className="problem-item-square glass-card">
              <div className="problem-icon"><Lightbulb /></div>
              <h3>2. Arquitetura da Clareza</h3>
              <p>Com o diagnóstico, construímos sua tese de mercado, desenhamos sua narrativa estratégica e definimos sua categoria, tornando a clareza sua maior vantagem competitiva.</p>
            </div>
            <div className="problem-item-square glass-card">
              <div className="problem-icon"><Zap /></div>
              <h3>3. Ativação da Receita</h3>
              <p>Traduzimos a estratégia em ativos que geram lucro, construindo provas de valor que eliminam o risco da compra e ativam os canais de aceleração que conectam sua solução aos clientes certos.</p>
            </div>
          </div>
          <div className="hero-ctas" style={{ marginTop: '3rem' }}>
            <Link href="/metodologia" className="btn btn-primary">
              <Eye className="btn-icon" />
              <span>Conheça a Metodologia</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      {/* Seção: Prova de Impacto */}
      <section id="impacto" className="section section-darker">
        <div className="container text-center" data-animate>
          <h2 className="section-title">A Engenharia de Receita em Ação</h2>
          <p className="lead-text">Não executamos projetos. Construímos teses de negócio e ativamos seu potencial de receita. Veja a profundidade da nossa engenharia através de transformações reais.</p>
          <div className="scenarios-grid-two">
            <div className="scenario-card glass-card-contrast">
              <div className="scenario-header"><Wrench className="scenario-icon" /><h3>De Operações Fragmentadas a Hub de Engenharia de Alta Performance</h3></div>
              <div className="scenario-body">
                <div className="scenario-part"><h4>O Desafio:</h4><p>Empresa familiar com clientes de grande porte, mas com operações isoladas e narrativa de marca que não refletia sua capacidade técnica.</p></div>
                <div className="scenario-part"><h4>A Engenharia Aplicada:</h4><p>Imersão com Cortex GTM™ para unificar operações sob a tese de "Hub Multidisciplinar de Engenharias", redefinindo categoria e posicionamento.</p></div>
                <div className="scenario-part"><h4>A Transformação:</h4><p>Contratos ampliados para posições de CRO as a Service e Advisory Board, consolidando a Synapse como parceira estratégica de longo prazo.</p></div>
              </div>
            </div>
            <div className="scenario-card glass-card-contrast">
              <div className="scenario-header"><HeartPulse className="scenario-icon" /><h3>De Inovação Complexa a uma Nova Categoria de Mercado em Saúde</h3></div>
              <div className="scenario-body">
                <div className="scenario-part"><h4>O Desafio:</h4><p>HealthTech com solução genial, mas com proposta de valor complexa que clientes e investidores não compreendiam, travando a escala.</p></div>
                <div className="scenario-part"><h4>A Engenharia Aplicada:</h4><p>Uso do Cortex GTM™ para criar a categoria de "CareOps Integrativo", cristalizando a oferta em uma tese de investimento com alto potencial de ROI.</p></div>
                <div className="scenario-part"><h4>A Transformação:</h4><p>Clareza estratégica total, com Pitch Deck e Plataforma Digital prontos para acelerar a tração de mercado e comprovar o valor da solução.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      {/* Seção: Soluções Sob Medida */}
      <section id="crescimento" className="section section-light">
        <div className="container text-center" data-animate>
          <h2 className="section-title">Sua Engenharia de Receita Sob Medida</h2>
          <p className="lead-text">Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.</p>
          <div className="solutions-grid">
            <div className="solution-card glass-card">
              <h3>Precisa Validar Rápido?</h3>
              <h4>Sprint de Validação Comercial</h4>
              <p>Sprints ágeis para responder à pergunta crítica: existe demanda real e pagante para sua oferta?</p>
              <ul className="solution-features">
                <li><CheckCircle className="icon" /> Análise de Risco vs. Oportunidade</li>
                <li><CheckCircle className="icon" /> Teste de Narrativa e Oferta</li>
                <li><CheckCircle className="icon" /> Decisão Go/No-Go Baseada em Dados</li>
              </ul>
            </div>
            <div className="solution-card glass-card">
              <h3>Pronto para Escalar Agora?</h3>
              <h4>Go-To-Market Completo</h4>
              <p>Do diagnóstico à execução, instalamos e operamos sua máquina de receita para um crescimento sustentável.</p>
              <ul className="solution-features">
                <li><CheckCircle className="icon" /> Diagnóstico Profundo Cortex GTM™</li>
                <li><CheckCircle className="icon" /> Arquitetura da Clareza e Ativos</li>
                <li><CheckCircle className="icon" /> Ativação e Aceleração de Canais</li>
              </ul>
            </div>
            <div className="solution-card glass-card">
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
          <div className="hero-ctas" style={{ marginTop: '3rem' }}>
            <Link href="/metodologia" className="btn btn-secondary-contrast">
              <Eye className="btn-icon" />
              <span>Explore a Metodologia</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      {/* Seção: Chamada Final */}
      <section id="chamada-final" className="section section-darker final-cta">
        <div className="container text-center" data-animate>
          <h2 className="section-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="lead-text">Com metodologia proprietária e atuação integrada, ajudamos empresas técnicas a transformar complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.</p>
          <div className="final-ctas">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Fale com a Synapse B2B</span>
              <ArrowRight className="btn-icon" />
            </Link>
            <Link href="/casos-de-uso" className="btn btn-secondary-contrast">
              <Eye className="btn-icon" />
              <span>Explore nossos Casos de Uso</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
