// pages/engenharia.js (CORRIGIDO)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Compass, Wrench, Zap, Target, ShieldCheck, HelpCircle, Briefcase, BarChart } from 'lucide-react';
import Hero from '../components/Hero'; // ADICIONADO: Importa o componente Hero

// --- Componente de Abas para ICPs ---
const IcpTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["A Startup Inovadora", "A Empresa Técnica", "O Negócio em Platô"];
  return (
    <div className="icp-tabs-container">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`icp-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default function EngenhariaPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    "Você construiu um produto tecnicamente superior, mas a tração não acontece. O mercado não entende o valor real e o ciclo de vendas se arrasta.",
    "Sua reputação e entrega são excelentes, mas o crescimento depende de indicações. O valor real do seu negócio não é percebido pelo mercado devido à sua complexidade técnica.",
    "Você já é um líder no seu nicho, mas o crescimento estagnou. A fórmula que te trouxe até aqui não vai te levar para a próxima fase e você precisa de uma nova arquitetura para expandir."
  ];

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

  return (
    <>
      <Head>
        <title>A Engenharia por Trás da Clareza | Synapse B2B</title>
        <meta name="description" content="Para fundadores de startups B2B complexas, empresas técnicas e negócios em platô de crescimento: nós decodificamos sua genialidade técnica e a transformamos em um sistema que gera um pipeline de vendas previsível." />
      </Head>

      {/* Bloco 1: Seção Hero (CORRIGIDO)
          A classe 'short-hero' foi removida para que a seção ocupe 100% da altura da tela (100vh), 
          padronizando com a página Home. 
      */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <h1 className="hero-headline">A Engenharia por Trás da Clareza.</h1>
            <p className="hero-subheadline">
              Para fundadores de startups B2B complexas, empresas técnicas e negócios em platô de crescimento: nós decodificamos sua genialidade técnica e a transformamos em um sistema que gera um pipeline de vendas previsível.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Cenário do Crescimento Travado */}
      <section id="cenario" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Sua genialidade é inquestionável. Sua receita deveria ser também.</h2>
          <p className="lead-text">Se você chegou até aqui, provavelmente se identifica com um destes cenários:</p>
          <IcpTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <p className="icp-content">{tabContent[activeTab]}</p>
          <div className="highlight-box">
            <p>O problema não é seu produto ou sua competência. É a ausência de uma engenharia que conecte seu valor à percepção do mercado.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Nossa Engenharia de Receita */}
      <section id="engenharia-receita" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Duas Camadas, Um Objetivo: Crescimento Previsível.</h2>
          <p className="lead-text">Nossa engenharia opera em duas camadas que podem atuar de forma independente ou integrada. A camada de <strong>Inteligência</strong> é a fundação que define o blueprint do crescimento. A camada de <strong>Construção</strong> é sempre arquitetada com os mesmos princípios, transformando a estratégia em ativos de receita.</p>
          
          <div className="engineering-block">
            <div className="engineering-column">
              <div className="engineering-header">
                <Compass className="icon" />
                <h3>Inteligência & Estratégia</h3>
                <p>Onde desenhamos o blueprint do seu crescimento.</p>
              </div>
              <ul className="engineering-list">
                <li><h4>Sprint de Validação Comercial</h4><p>Para testar novas ofertas e mercados com velocidade e precisão.</p></li>
                <li><h4>Go-To-Market Completo</h4><p>Para arquitetar e instalar um motor de receita de alta performance, seja do zero ou otimizando uma operação existente.</p></li>
                <li><h4>Diretoria de Receita (CRO as a Service)</h4><p>Para injetar liderança C-level na sua operação de receita.</p></li>
                <li><h4>Advisory Board</h4><p>Para guiar decisões estratégicas de alto impacto.</p></li>
              </ul>
            </div>
            <div className="engineering-divider"></div>
            <div className="engineering-column">
              <div className="engineering-header">
                <Wrench className="icon" />
                <h3>Construção de Ativos Digitais</h3>
                <p>Onde transformamos estratégia em ferramentas de receita.</p>
              </div>
              <ul className="engineering-list">
                <li><h4>Plataformas de Aceleração de Receita</h4><p>Construímos o seu novo "site": um ativo digital projetado para educar, qualificar e converter clientes.</p></li>
                <li><h4>Ferramentas Estratégicas de Conversão</h4><p>Desenvolvemos ferramentas (calculadoras, simuladores, apps) que se tornam o centro da sua argumentação de valor e aceleram a decisão de compra.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: A Prova da Engenharia */}
      <section id="prova" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Da Estratégia à Tração: A Engenharia em Ação.</h2>
          <div className="case-studies-container">
            <div className="transformation-case-card">
              <h3>De Competência Fragmentada a Hub de Engenharia Estratégico.</h3>
              <p className="company-name">Caso 1: Exclusiva Engenharias</p>
              <div className="case-section">
                <h4><HelpCircle className="icon" /> O Desafio</h4>
                <p>A Exclusiva possuía uma competência técnica ímpar, mas operava como um coletivo de empresas isoladas, posicionando-se como um "fornecedor competente", não como o "parceiro estratégico" que de fato era.</p>
              </div>
              <div className="case-section">
                <h4><Compass className="icon" /> A Engenharia de Inteligência</h4>
                <p>Aplicamos nosso diagnóstico para redefinir a tese de negócio. A mudança para "Exclusiva Engenharias" e o posicionamento como "Hub Multidisciplinar" foram as alavancas estratégicas que destravaram o novo valor.</p>
              </div>
              <div className="case-section">
                <h4><Wrench className="icon" /> A Engenharia de Construção</h4>
                <p>Com a clareza estabelecida, materializamos a nova tese em uma Plataforma Digital de Aceleração, que hoje serve como o principal motor de autoridade e conversão da empresa.</p>
              </div>
              <div className="case-section">
                <h4><Briefcase className="icon" /> A Engenharia de Liderança</h4>
                <p>Com a fundação estratégica e os ativos construídos, a Exclusiva avançou a parceria para o nível máximo de confiança, nos contratando como sua Diretoria de Engenharia de Receita as a Service para operar o novo motor de crescimento com disciplina e inteligência C-level.</p>
              </div>
            </div>
            <div className="transformation-case-card">
              <h3>De Potencial Oculto a uma Nova Categoria de Mercado.</h3>
              <p className="company-name">Caso 2: Versão Holística (VH)</p>
              <div className="case-section">
                <h4><HelpCircle className="icon" /> O Desafio</h4>
                <p>A VH tinha uma solução healthtech revolucionária, mas uma história complicada. O mercado não entendia o que a empresa fazia, travando o potencial de crescimento.</p>
              </div>
              <div className="case-section">
                <h4><Compass className="icon" /> A Engenharia de Inteligência</h4>
                <p>Nossa engenharia decodificou o valor central e arquitetou uma nova categoria de mercado: a "1ª Plataforma de CareOps Integrativo do Brasil". Isso tirou a VH da briga com concorrentes e a posicionou como vanguarda.</p>
              </div>
              <div className="case-section">
                <h4><Wrench className="icon" /> A Engenharia de Construção</h4>
                <p>Traduzimos essa clareza em ativos de conversão — Pitch Deck e Plataforma Digital — que comunicam o novo valor de forma inequívoca para C-levels e investidores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Outros Desafios Críticos */}
      <section id="outros-desafios" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Cenários de Aplicação da Nossa Engenharia.</h2>
          <div className="card-grid-three">
            <div className="scenario-card">
              <h4>1. Para o Líder Regional que Precisa Expandir</h4>
              <p><strong>Cenário:</strong> Uma marca forte em sua região de origem, mas com dificuldade para penetrar em novos territórios de forma estruturada.</p>
              <p><strong>Nossa Engenharia:</strong> Nossa engenharia desenha o plano de expansão, recalibra a narrativa da marca para uma audiência nacional e constrói os ativos digitais necessários para capturar a nova demanda.</p>
            </div>
            <div className="scenario-card">
              <h4>2. Para o SaaS de IA que Precisa Destravar Contratos Maiores</h4>
              <p><strong>Cenário:</strong> Uma tecnologia de ponta que não consegue sair do ciclo de "projetos pilotos" para contratos anuais de alto valor (ACV).</p>
              <p><strong>Nossa Engenharia:</strong> Aplicamos um Sprint de Validação para focar a oferta em um nicho de alto valor e construímos uma Ferramenta Estratégica, como uma Calculadora de ROI, para provar o impacto financeiro e destravar o orçamento do C-level.</p>
            </div>
            <div className="scenario-card">
              <h4>3. Para a Expertise Técnica Vendida como Commodity</h4>
              <p><strong>Cenário:</strong> Uma empresa de automação industrial que vendia "horas de engenharia" e competia por preço, apesar de sua expertise ser vastamente superior.</p>
              <p><strong>Nossa Engenharia:</strong> Nossa engenharia "produtiza" a expertise em uma solução com entregáveis claros, como um pacote de "Otimização de Performance Industrial". Isso permite a precificação baseada em valor e posiciona a empresa como especialista em resultado, não como fornecedora de horas.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 6: Chamada Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Sua transformação é a nossa próxima tese de negócio.</h2>
          <p className="lead-text">
            Se você se viu em algum desses cenários, o desafio que você enfrenta não é único. A forma de resolvê-lo, sim. Nossa Engenharia de Receita funciona porque é um método, não um acaso.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agende sua Sessão de Diagnóstico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
