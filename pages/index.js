// pages/index.js (VERSÃO FINAL E CONSOLIDADA - COM COPY E CONTEÚDO DOS CARDS CORRIGIDOS)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Eye, CheckCircle, ChevronDown, TrendingDown, Tag, Clock, Filter } from 'lucide-react';

// --- Componente Card Interativo para Casos de Uso (Estrutura sem alteração) ---
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

// --- Componente Card Interativo para Soluções (Estrutura sem alteração) ---
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

// --- Componente Acordeão (Estrutura sem alteração) ---
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

      {/* Bloco 1: Seção Hero (COPY ATUALIZADA) */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
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
              <Link href="#crescimento" className="btn btn-secondary">
                <span>Descubra as Alavancas de Crescimento</span>
                <Eye size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2: O Problema que Resolvemos (COPY ATUALIZADA) */}
      <section id="problema" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Sua empresa tem potencial. Nós projetamos a receita.</h2>
          <p className="lead-text">Muitas empresas B2B possuem uma genialidade técnica inquestionável, mas veem esse potencial se dissipar entre a complexidade do produto e a percepção do cliente. A causa não é a solução, mas a ausência de uma arquitetura de clareza que conecte valor técnico a uma decisão de compra estratégica. Os sintomas são:</p>
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
        </div>
      </section>

      {/* Bloco 3: Nossa Resposta (COPY ATUALIZADA) */}
      <section id="resposta" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">A Engenharia de Receita é a ponte entre sua genialidade e o crescimento.</h2>
          <p className="lead-text">Não vendemos marketing ou consultoria. Nós instalamos um sistema. Um método que traduz a complexidade da sua solução em uma narrativa de valor clara, uma proposta comercial irresistível e um processo de vendas que seu time consegue executar com disciplina e consistência.</p>
        </div>
      </section>

      {/* Bloco 4: Como Funciona - O Cortex GTM™ (COPY ATUALIZADA) */}
      <section id="como-funciona" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nosso Sistema: O Cortex GTM™</h2>
          <p className="lead-text">O Cortex GTM™ é o nosso sistema de diagnóstico e arquitetura estratégica, projetado para decodificar a genialidade técnica de um negócio e traduzi-la em uma Engenharia de Receita.</p>
          <p className="lead-text">Ele opera em três fases que refletem o que nos diferencia: o nosso olhar.</p>
          <div className="accordion-container">
            <AccordionItem title="Fase 1: Um Olhar de Fora para Dentro" isOpen={openAccordion === 0} onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
              <p>Nosso ponto de partida não é o seu produto, mas o problema crítico e o impacto que a falta de clareza gera no negócio do seu cliente. Diagnosticamos com precisão onde o valor real da sua solução se perde na percepção do mercado, transformando complexidade em clareza.</p>
            </AccordionItem>
            <AccordionItem title="Fase 2: A Lógica por Trás da Decisão" isOpen={openAccordion === 1} onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
              <p>Com o diagnóstico em mãos, arquitetamos a narrativa e o posicionamento que conectam sua genialidade a uma decisão de compra estratégica. Não criamos marketing; construímos o argumento de negócio que torna a escolha pela sua empresa uma consequência lógica e defensável.</p>
            </AccordionItem>
            <AccordionItem title="Fase 3: O Sistema que Gera Tração" isOpen={openAccordion === 2} onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
              <p>Traduzimos a arquitetura estratégica em um sistema de aceleração. Equipamos seu time com os ativos e a disciplina necessários para articular o novo valor, criando um motor de receita previsível que escala com inteligência.</p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Bloco 5: Soluções (COPY ATUALIZADA E CONTEÚDO RESTAURADO) */}
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

      {/* Bloco 6: Chamada Final (COPY ATUALIZADA) */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="lead-text">Com metodologia proprietária e atuação integrada, transformamos complexidade em clareza, e clareza em receita.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Inicie seu Diagnóstico de Receita</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
