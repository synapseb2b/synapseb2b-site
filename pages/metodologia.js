// pages/metodologia.js (VERSÃO FINAL COM ACORDEÃO)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Target, Zap, ShieldCheck, ChevronDown } from 'lucide-react';

// --- Componente Acordeão para as Fases da Metodologia ---
const PhaseAccordion = ({ title, whatWeDo, whatYouGet, isOpen, onClick }) => {
  return (
    <div className="solution-accordion">
      <div className="solution-accordion-main">
        <h3 className="solution-title">{title}</h3>
        <p className="solution-description">{whatWeDo}</p>
      </div>
      <div className="accordion-deliverables">
        <button className="accordion-header" onClick={onClick}>
          <span>O que você recebe</span>
          <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
        </button>
        <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
          <div className="accordion-content-inner">
            <p className="deliverable-text">
              <CheckCircle size={18} />
              <span>{whatYouGet}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MetodologiaPage() {
  const [openPhaseAccordion, setOpenPhaseAccordion] = useState(-1); // -1 para começar fechado

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
        <title>Metodologia | Synapse B2B - A Engenharia por Trás da Clareza</title>
        <meta name="description" content="Genialidade técnica, por si só, não gera receita previsível. É preciso uma engenharia que traduza esse potencial em resultados. Aqui, detalhamos nosso processo de construção." />
      </Head>

      {/* Bloco 1: Seção Hero */}
      <section className="hero-section short-hero">
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
              Genialidade técnica, por si só, não gera receita previsível. É preciso uma engenharia que traduza esse potencial em resultados. Aqui, detalhamos nosso processo de construção.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Método da Nossa Abordagem */}
      <section id="metodo" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Cortex GTM™: O Método da Nossa Engenharia</h2>
          <p className="lead-text">
            O Cortex GTM™ é o nosso método de diagnóstico e arquitetura. É o processo que usamos para construir sua Engenharia de Receita: um caminho com etapas claras, focado em transformar sua genialidade técnica em crescimento previsível.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: As Fases da Engenharia (COM NOVO ACORDEÃO) */}
      <section id="fases" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Como Construímos para Gerar Resultados</h2>
          <p className="lead-text">
            Nossa engenharia se divide em três fases sequenciais. Cada uma delas gera um ativo tangível para o seu negócio.
          </p>
          <div className="card-grid-three">
            <PhaseAccordion
              title="Fase 1: Diagnóstico de Clareza"
              whatWeDo="Investigamos a fundo a desconexão entre o valor do seu produto e a percepção do mercado. Mapeamos com precisão o problema do seu cliente e onde sua narrativa atual falha em comunicar a solução."
              whatYouGet="Um diagnóstico estratégico que aponta as alavancas de crescimento travadas e o caminho para destravá-las."
              isOpen={openPhaseAccordion === 0}
              onClick={() => setOpenPhaseAccordion(openPhaseAccordion === 0 ? -1 : 0)}
            />
            <PhaseAccordion
              title="Fase 2: Arquitetura de Valor"
              whatWeDo="Desenhamos a estrutura lógica do seu argumento de venda. Construímos sua narrativa estratégica, posicionamento de mercado e os pilares de valor que tornam sua solução a escolha óbvia para o cliente certo."
              whatYouGet="Um documento estratégico que define sua mensagem principal, alinhando a comunicação entre marketing e vendas."
              isOpen={openPhaseAccordion === 1}
              onClick={() => setOpenPhaseAccordion(openPhaseAccordion === 1 ? -1 : 1)}
            />
            <PhaseAccordion
              title="Fase 3: Ativação e Construção"
              whatWeDo="Traduzimos a arquitetura estratégica em ferramentas de alta performance. Desenvolvemos os ativos de conversão e instalamos a disciplina para que seu time execute a nova estratégia com consistência."
              whatYouGet="Os ativos e processos necessários para gerar tração de forma previsível e escalável."
              isOpen={openPhaseAccordion === 2}
              onClick={() => setOpenPhaseAccordion(openPhaseAccordion === 2 ? -1 : 2)}
            />
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: A Lógica da Nossa Construção */}
      <section id="logica" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossos Princípios de Engenharia</h2>
          <p className="lead-text">
            Nosso processo é eficaz porque segue uma lógica inegociável.
          </p>
          <div className="card-grid-three">
            <div className="principle-card">
              <Target className="card-icon" />
              <h3 className="principle-title">1. Ativos, não Campanhas</h3>
              <p>Focamos em construir ativos de longo prazo (narrativas, posicionamento) que geram valor composto, em vez de campanhas que perdem o efeito.</p>
            </div>
            <div className="principle-card">
              <Zap className="card-icon" />
              <h3 className="principle-title">2. Engenharia, não Esforço Bruto</h3>
              <p>Aplicamos um processo de engenharia que organiza o esforço do seu time, tornando os resultados uma consequência da disciplina, não do acaso.</p>
            </div>
            <div className="principle-card">
              <ShieldCheck className="card-icon" />
              <h3 className="principle-title">3. Clareza, não Volume</h3>
              <p>Cada peça da nossa engenharia serve a um único propósito: tornar o seu valor tão claro que a decisão de compra se torna inevitável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Chamada Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">A engenharia que sua genialidade merece.</h2>
          <p className="lead-text">
            Se você está pronto para transformar seu potencial técnico em um negócio com crescimento claro e defensável, o ponto de partida é o diagnóstico.
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
