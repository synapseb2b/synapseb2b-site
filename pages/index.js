// pages/index.js (VERSÃO COM CARDS INTERATIVOS E PADDING CORRIGIDO)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Eye, Zap, Search, Lightbulb, CheckCircle, ChevronDown, TrendingDown, Tag, Clock, Filter } from 'lucide-react';

// --- NOVO: Componente Card Interativo para Casos de Uso ---
const FlippableCaseCard = ({ title, challenge, applied, transformation }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front case-card">
          <h3 className="case-title">{title}</h3>
          <div className="case-body">
            <p><strong>Desafio:</strong> {challenge}</p>
            <p><strong>Engenharia Aplicada:</strong> {applied}</p>
          </div>
          <div className="flip-card-cta">Passe o mouse para ver a transformação</div>
        </div>
        <div className="flip-card-back case-card">
          <h3 className="case-title">Transformação</h3>
          <p>{transformation}</p>
        </div>
      </div>
    </div>
  );
};

// --- NOVO: Componente Card Interativo para Soluções ---
const FlippableSolutionCard = ({ title, subtitle, description, features }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front solution-card">
          <h3 className="solution-title">{title}</h3>
          <h4 className="solution-subtitle">{subtitle}</h4>
          <p className="solution-description">{description}</p>
          <div className="flip-card-cta">Passe o mouse para ver os entregáveis</div>
        </div>
        <div className="flip-card-back solution-card">
          <h3 className="solution-title">Principais Entregáveis</h3>
          <ul className="solution-features">
            {features.map((feature, index) => (
              <li key={index}><CheckCircle size={16} /> {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


// --- Componente Acordeão (sem alterações) ---
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState(0);

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
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Escalar Negócios B2B</title>
        <meta name="description" content="Traduzimos a complexidade técnica de empresas de tecnologia e engenharia em uma Engenharia de Receita clara e executável. Transformamos seu potencial em performance de mercado." />
      </Head>

      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        {/* APLICAÇÃO DA CLASSE DE PADDING AQUI */}
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <h1 className="hero-headline">O mercado não compra o que não entende.</h1>
            <p className="hero-subheadline">
              Empresas técnicas dominam a complexidade do que fazem, mas falham em fazer o mercado perceber seu valor.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary">
                <span>Inicie seu Diagnóstico de Receita</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="#impacto" className="btn btn-secondary">
                <span>Veja a Engenharia em Ação</span>
                <Eye size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O resultado é um gap entre potencial e performance.</h2>
          <p className="lead-text">Para empresas B2B com genialidade técnica, essa falha de comunicação se manifesta em sintomas que travam o crescimento:</p>
          <div className="symptom-grid">
            <div className="symptom-card">
              <TrendingDown className="card-icon" />
              <p>Sua solução é objetivamente superior, mas perde para concorrentes medianos.</p>
            </div>
            <div className="symptom-card">
              <Tag className="card-icon" />
              <p>Cada proposta é uma batalha de preços, não de valor.</p>
            </div>
            <div className="symptom-card">
              <Clock className="card-icon" />
              <p>O ciclo de vendas se arrasta porque o cliente "não entende" a profundidade da solução.</p>
            </div>
            <div className="symptom-card">
              <Filter className="card-icon" />
              <p>O marketing queima caixa gerando volume, em vez de qualidade.</p>
            </div>
          </div>
          <div className="highlight-box">
            <p>No B2B, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.</p>
          </div>
        </div>
      </section>

      <section id="solucao" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossa Resposta é um Sistema de Engenharia.</h2>
          <p className="lead-text">Resolver o gargalo entre um produto genial e a receita que ele gera exige mais do que táticas de marketing. Exige um método. Exige engenharia.</p>
          <p className="lead-text">Por isso, criamos o <strong>Cortex GTM™</strong>, nosso framework proprietário que integra a ciência do comportamento humano com a disciplina dos modelos de negócio mais validados do mundo.</p>
          <div className="accordion-container">
            <AccordionItem title="1. Diagnóstico Profundo" isOpen={openAccordion === 0} onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
              <p>Vamos ao núcleo do seu negócio e do seu cliente. Mapeamos o problema crítico, o perfil do comprador ideal (ICP) e os Jobs-to-be-Done para ter um raio-x preciso do seu mercado.</p>
            </AccordionItem>
            <AccordionItem title="2. Arquitetura da Clareza" isOpen={openAccordion === 1} onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
              <p>Com o diagnóstico, construímos sua tese de mercado. Desenhamos sua narrativa estratégica e definimos sua categoria. A clareza se torna sua maior vantagem competitiva.</p>
            </AccordionItem>
            <AccordionItem title="3. Ativação da Receita" isOpen={openAccordion === 2} onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
              <p>Traduzimos a estratégia em ativos que geram lucro. Construímos as provas de valor que eliminam o risco da compra e ativamos os canais que conectam sua solução aos clientes certos.</p>
            </AccordionItem>
          </div>
          <div className="section-cta">
            <Link href="/metodologia" className="btn btn-primary">
              <Eye size={20} />
              <span>Conheça a Metodologia em Detalhes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 4: A Prova do Impacto (COM CARDS INTERATIVOS) */}
      <section id="impacto" className="section-with-bg" style={{ backgroundImage: "url('/image/Plataforma.png')" }}>
        <div className="section-overlay"></div>
        <div className="container text-center reveal-up">
          <h2 className="section-title">A Engenharia de Receita em Ação</h2>
          <p className="lead-text">Não executamos projetos. Construímos teses de negócio e ativamos seu potencial de receita. Veja a profundidade da nossa engenharia através de transformações reais.</p>
          <div className="card-grid-two">
            <FlippableCaseCard
              title="De Operações Fragmentadas a Hub de Engenharia de Alta Performance"
              challenge="Uma empresa familiar com clientes de grande porte (Iveco, FPT) e operações isoladas, sem uma narrativa de marca que refletisse sua real capacidade técnica."
              applied="Imersão profunda com o Cortex GTM™ para unificar operações sob uma nova tese de mercado, redefinindo categoria, posicionamento e culminando no rebatismo da marca."
              transformation="Contratos ampliados para posições de CRO as a Service e Advisory Board, consolidando a Synapse como parceira estratégica de longo prazo."
            />
            <FlippableCaseCard
              title="De Inovação Complexa a uma Nova Categoria de Mercado em Saúde"
              challenge="Uma HealthTech com uma solução genial, mas com uma proposta de valor complexa que clientes e investidores não compreendiam, travando o potencial de escala."
              applied="Criação de uma nova categoria de mercado – 'CareOps Integrativo' – e cristalização da oferta em uma tese de investimento com potencial de ROI superior a 6 para 1 para hospitais."
              transformation="Clareza estratégica total, com ativos de comunicação prontos para acelerar a tração de mercado e comprovar o valor da solução para decisores C-level."
            />
          </div>
        </div>
      </section>

      {/* Bloco 5: Nossas Soluções (COM CARDS INTERATIVOS) */}
      <section id="crescimento" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Sua Engenharia de Receita Sob Medida</h2>
          <p className="lead-text">Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.</p>
          <div className="card-grid-three">
            <FlippableSolutionCard
              title="Precisa Validar Rápido?"
              subtitle="Sprint de Validação Comercial"
              description="Sprints ágeis para responder à pergunta crítica: existe demanda real e pagante para sua oferta?"
              features={["Análise de Risco vs. Oportunidade", "Teste de Narrativa e Oferta", "Decisão Go/No-Go Baseada em Dados"]}
            />
            <FlippableSolutionCard
              title="Pronto para Escalar Agora?"
              subtitle="Go-To-Market Completo"
              description="Do diagnóstico à execução, instalamos e operamos sua máquina de receita para um crescimento sustentável."
              features={["Diagnóstico Profundo Cortex GTM™", "Arquitetura da Clareza e Ativos", "Ativação e Aceleração de Canais"]}
            />
            <FlippableSolutionCard
              title="Busca Liderança Sênior?"
              subtitle="Diretoria de Receita sob Demanda"
              description="Inteligência C-level para decisões críticas e tração comercial, sem aumentar seu headcount."
              features={["Planejamento Estratégico Contínuo", "Gestão de Funil, Metas e KPIs", "Mentoria para a Liderança"]}
            />
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="lead-text">Com metodologia proprietária e atuação integrada, transformamos complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Fale com a Synapse B2B</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
