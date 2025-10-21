import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para a nova estrutura
import { 
  ArrowRight, BrainCircuit, HardHat, Map, Briefcase, Rocket, MonitorSmartphone, Wrench 
} from 'lucide-react';

// --- Componente de Texto Rotativo para a Hero ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'conecta produto e mercado.',
    'traduz complexidade em valor.',
    'transforma potencial em receita.',
    'gera clareza que converte.'
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, variations.length]);

  return (
    <>
      <p className="hero-pre-headline">Desenvolvemos</p>
      <h1 className="hero-headline hero-headline-two-lines">
        <span className="hero-headline-fixed">Engenharia de Receita que</span>
        <span 
          className="rotating-text"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {variations[currentIndex]}
        </span>
      </h1>
    </>
  );
};

export default function ComoTrabalhamosPage() {
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
        <title>Nosso Método | Synapse B2B</title>
        <meta name="description" content="Entenda como nosso sistema de duas camadas conecta a arquitetura da Engenharia de Receita à construção de ativos que geram resultado." />
      </Head>

      {/* Bloco 1: Hero Section */}
      <section className="hero-section">
        <div className="hero-video-background"><video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video><div className="hero-overlay"></div></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <RotatingText />
          <p className="hero-subheadline">Nós instalamos o sistema que transforma potencial técnico em receita previsível.</p>
          <div className="hero-ctas"><Link href="#camada-inteligencia" className="btn btn-primary"><span>Conheça as Camadas</span><ArrowRight size={20} /></Link></div>
        </div>
      </section>

      <div className="section-divider-glow"></div>
      
      {/* Bloco 2: O Sistema e as Duas Camadas */}
      <section id="sistema" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Um Sistema. Duas Camadas.</h2>
            <p className="lead-text">A Synapse B2B opera como um sistema de duas camadas que conecta estratégia e execução.</p>
        </div>
      </section>

      {/* Bloco 3: CAMADA 1 - Inteligência & Estratégia (Layout de Coluna Única) */}
      <section id="camada-inteligencia" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="layer-intro text-center">
            <div className="layer-badge"><BrainCircuit size={24} /><span>CAMADA 1</span></div>
            <h2 className="section-title">Inteligência & Estratégia</h2>
            <p className="lead-text">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
          </div>

          <div className="solutions-grid">
            {/* Solução 1.1: GTM */}
            <div className="solution-card">
              <div className="solution-card-header"><Map size={24} /><h4>Go-To-Market Completo</h4></div>
              <p className="solution-card-tagline">De "o que somos" para "o problema que só nós resolvemos".</p>
              <div className="solution-body">
                  <h5>Você reconhece este contexto?</h5>
                  <ul><li>Seu produto é tecnicamente superior, mas o mercado não entende o valor</li><li>Reuniões comerciais terminam com "preciso pensar"</li><li>Concorrentes inferiores vendem mais rápido</li></ul>
              </div>
            </div>

            {/* Solução 1.2: CRO */}
            <div className="solution-card">
              <div className="solution-card-header"><Briefcase size={24} /><h4>Diretoria de Receita (CRO as a Service)</h4></div>
              <p className="solution-card-tagline">Liderança C-level fracionada que instala o sistema e entrega o playbook.</p>
              <div className="solution-body">
                  <h5>Você reconhece este contexto?</h5>
                  <ul><li>Vendas dependem de 1-2 "vendedores excepcionais"</li><li>Crescimento depende de networking, não de processo</li><li>CEO passa mais tempo vendendo do que liderando</li></ul>
              </div>
            </div>

            {/* Solução 1.3: Sprint */}
            <div className="solution-card">
              <div className="solution-card-header"><Rocket size={24} /><h4>Sprint de Validação Comercial</h4></div>
              <p className="solution-card-tagline">Valide demanda real antes de comprometer recursos grandes.</p>
              <div className="solution-body">
                  <h5>Você reconhece este contexto?</h5>
                  <ul><li>Receita parou de crescer há 2-3 trimestres</li><li>Decisões baseadas em intuição, não em dados de campo</li><li>Medo de escalar errado e queimar caixa</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: CAMADA 2 - Construção de Ativos Digitais (Layout de Coluna Única) */}
      <section id="camada-ativos" className="section-solid">
        <div className="container reveal-up">
          <div className="layer-intro text-center">
            <div className="layer-badge"><HardHat size={24} /><span>CAMADA 2</span></div>
            <h2 className="section-title">Construção de Ativos Digitais</h2>
            <p className="lead-text">Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
          </div>
          
          <div className="solutions-grid">
              {/* Solução 2.1: Plataforma */}
              <div className="solution-card">
                <div className="solution-card-header"><MonitorSmartphone size={24} /><h4>Plataforma de Aceleração de Receita</h4></div>
                <p className="solution-card-tagline">30% Institucional + 70% Engenharia de Receita.</p>
                <div className="solution-body">
                    <h5>Você reconhece este contexto?</h5>
                    <ul><li>Site gera tráfego, mas não converte</li><li>Leads entram sem contexto e time perde horas qualificando</li><li>Seu site é uma "brochura online", não um motor de receita</li></ul>
                </div>
              </div>

              {/* Solução 2.2: Ferramentas */}
              <div className="solution-card">
                <div className="solution-card-header"><Wrench size={24} /><h4>Ferramentas Estratégicas de Conversão</h4></div>
                <p className="solution-card-tagline">Ativos que provam autoridade e aceleram a decisão.</p>
                <div className="solution-body">
                    <h5>Você reconhece este contexto?</h5>
                    <ul><li>Ciclo de vendas longo porque o valor é intangível</li><li>Cada venda exige uma apresentação personalizada (não escala)</li><li>Cliente quer "ver funcionando" antes de comprar</li></ul>
                </div>
              </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Modelo de Trabalho */}
       <section id="modelo-trabalho" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>Iniciamos com uma Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento vem de <strong>Receita Nova</strong> gerada pelo projeto — dinheiro que você não teria sem nossa intervenção. Seu resultado é nosso resultado.</p>
            <div className="section-cta"><Link href="/contato" className="btn btn-secondary"><span>Entender o modelo</span><ArrowRight size={20} /></Link></div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <p className="lead-text" style={{marginBottom: '2rem'}}>Vamos traduzir seu desafio em um plano de ação.</p>
          <div className="section-cta"><Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} /></Link></div>
        </div>
      </section>

      {/* CSS para a NOVA ESTRUTURA de Coluna Única */}
      <style jsx>{`
        /* 1. Alinhamento à Esquerda e Layout Geral */
        .layer-intro {
          margin-bottom: 4rem;
        }
        .layer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: 2rem;
        }

        .solutions-grid {
          display: grid;
          /* Cria 3 colunas em desktop para a Camada 1, e 2 para a Camada 2 */
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          max-width: 1200px; /* Garante que não fique largo demais */
          margin: 0 auto;
        }

        /* 2. Estilo dos Cards de Solução */
        .solution-card {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
          text-align: left; /* Alinhamento à esquerda */
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .solution-card:hover {
            transform: translateY(-5px);
            background-color: rgba(10,10,10,0.8);
        }

        .solution-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .solution-card-header svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .solution-card-header h4 {
          font-family: 'Montserrat';
          font-size: 1.3rem;
          color: var(--color-heading);
        }
        .solution-card-tagline {
          font-size: 1rem;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .solution-body h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 1rem;
        }
        .solution-body ul {
          list-style-type: '✓';
          list-style-position: inside;
          padding-left: 5px;
        }
        .solution-body li {
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
          font-size: 0.95rem;
        }

        /* 3 & 4: Padronização de Espaçamento e Remoção de Espaços Vazios */
        /* Resolvido pela estrutura de seções. O padding padrão de 'section' (6rem 0) foi mantido. */
        /* Removi os divisores manuais e os paddings excessivos entre blocos. */

        /* 5. Correção da Cor dos Links (Já herdado do global, mas garantindo) */
        a {
          color: var(--color-accent); /* Garante que os links usem a cor de destaque */
        }
      `}</style>
    </>
  );
}