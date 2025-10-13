// pages/index.js (VERSÃO CORRIGIDA COM TEXTO ROTATIVO)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones atualizados para a nova seção
import { ArrowRight, Eye, ChevronDown, TrendingDown, Tag, Clock, Filter, Compass, Wrench } from 'lucide-react';

// --- Componente de Texto Rotativo ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'entende',
    'mensura',
    'gera valor',
    'resolve problema',
    'escala',
    'projeta retorno'
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3500); // 3.5 segundos por variação

    return () => clearInterval(interval);
  }, [isPaused, variations.length]);

  return (
    <h1 className="hero-headline">
      O mercado compra o que{' '}
      <span 
        className="rotating-text"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {variations[currentIndex]}
      </span>
      .
    </h1>
  );
};

// --- Componente Acordeão Padrão (Sem alteração) ---
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
      { threshold: 0.1 }
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

      {/* Bloco 1: Seção Hero com H1 Rotativa */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <RotatingText />
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

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Problema que Resolvemos */}
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

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Nossa Resposta */}
      <section id="resposta" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">A Engenharia de Receita é a ponte entre sua genialidade e o crescimento.</h2>
          <p className="lead-text">Não vendemos marketing ou consultoria. Nós instalamos um sistema. Um método que traduz a complexidade da sua solução em uma narrativa de valor clara, uma proposta comercial irresistível e um processo de vendas que seu time consegue executar com disciplina e consistência.</p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Como Funciona - O Cortex GTM™ */}
      <section id="como-funciona" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nosso Sistema: O Cortex GTM™</h2>
          <p className="lead-text">O Cortex GTM™ é o nosso sistema de diagnóstico e arquitetura estratégica, projetado para decodificar a genialidade técnica de um negócio e traduzi-la em uma Engenharia de Receita.</p>
          <p className="lead-text">Ele opera em três fases que refletem o que nos diferencia: o nosso olhar.</p>
          <div className="accordion-container">
            <AccordionItem title="Um Olhar de Fora para Dentro" isOpen={openAccordion === 0} onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
              <p>Nosso ponto de partida não é o seu produto, mas o problema crítico e o impacto que a falta de clareza gera no negócio do seu cliente. Diagnosticamos com precisão onde o valor real da sua solução se perde na percepção do mercado, transformando complexidade em clareza.</p>
            </AccordionItem>
            <AccordionItem title="A Lógica por Trás da Decisão" isOpen={openAccordion === 1} onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
              <p>Com o diagnóstico em mãos, arquitetamos a narrativa e o posicionamento que conectam sua genialidade a uma decisão de compra estratégica. Não criamos marketing; construímos o argumento de negócio que torna a escolha pela sua empresa uma consequência lógica e defensável.</p>
            </AccordionItem>
            <AccordionItem title="O Sistema que Gera Tração" isOpen={openAccordion === 2} onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
              <p>Traduzimos a arquitetura estratégica em um sistema de aceleração. Equipamos seu time com os ativos e a disciplina necessários para articular o novo valor, criando um motor de receita previsível que escala com inteligência.</p>
            </AccordionItem>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Soluções (REIMAGINADO COM NOVO LAYOUT) */}
      <section id="crescimento" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossa Engenharia: Da Estratégia aos Ativos de Receita</h2>
          <p className="lead-text">Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.</p>
          
          <div className="engineering-block">
            {/* Coluna Esquerda */}
            <div className="engineering-column">
              <div className="engineering-header">
                <Compass className="icon" />
                <h3>Inteligência & Estratégia</h3>
                <p>Onde definimos a arquitetura do seu crescimento.</p>
              </div>
              <ul className="engineering-list">
                <li>
                  <h4>Sprint de Validação Comercial</h4>
                  <p>Para testar novas ofertas e mercados com velocidade e precisão.</p>
                </li>
                <li>
                  <h4>Go-To-Market Completo</h4>
                  <p>Para arquitetar e instalar seu motor de receita do zero.</p>
                </li>
                <li>
                  <h4>Diretoria de Receita (CRO as a Service)</h4>
                  <p>Para injetar liderança C-level na sua operação de receita.</p>
                </li>
                <li>
                  <h4>Advisory Board</h4>
                  <p>Para guiar decisões estratégicas de alto impacto.</p>
                </li>
              </ul>
            </div>

            {/* Divisor Central */}
            <div className="engineering-divider"></div>

            {/* Coluna Direita */}
            <div className="engineering-column">
              <div className="engineering-header">
                <Wrench className="icon" />
                <h3>Construção de Ativos Digitais</h3>
                <p>Onde transformamos estratégia em ferramentas de receita.</p>
              </div>
              <ul className="engineering-list">
                <li>
                  <h4>Plataformas de Aceleração de Receita</h4>
                  <p>Construímos o seu novo "site": um ativo digital projetado para educar, qualificar e converter clientes.</p>
                </li>
                <li>
                  <h4>Ferramentas Estratégicas de Conversão</h4>
                  <p>Desenvolvemos ferramentas (calculadoras, simuladores, apps) que se tornam o centro da sua argumentação de valor e aceleram a decisão de compra.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 6: Chamada Final */}
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

