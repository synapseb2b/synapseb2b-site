import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para a nova estrutura
import { 
  ArrowRight, BrainCircuit, HardHat, Map, Briefcase, Rocket, MonitorSmartphone, Wrench 
} from 'lucide-react';

// --- Componente de Texto Rotativo para a Hero (Mantido) ---
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
          <div className="hero-ctas"><Link href="#camadas-de-solucao" className="btn btn-primary"><span>Conheça as Camadas</span><ArrowRight size={20} /></Link></div>
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

      {/* Bloco 3: Camadas de Solução (ESTRUTURA TOTALMENTE REFEITA) */}
      <section id="camadas-de-solucao" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="solutions-two-column-grid">
            
            {/* COLUNA 1: INTELIGÊNCIA & ESTRATÉGIA */}
            <div className="solution-column">
              <div className="layer-header">
                <BrainCircuit size={32} />
                <div>
                  <span className="layer-badge">CAMADA 1</span>
                  <h3>Inteligência & Estratégia</h3>
                  <p>Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
                </div>
              </div>

              {/* Solução 1.1: GTM */}
              <div className="solution-card">
                <div className="solution-card-header"><Map size={24} /><h4>Go-To-Market Completo</h4></div>
                <p className="solution-card-tagline">De "o que somos" para "o problema que só nós resolvemos".</p>
                {/* ... conteúdo detalhado omitido para brevidade, mas está no código abaixo ... */}
                 <div className="solution-body">
                    <div className="challenge-side">
                        <h5>Você reconhece este contexto?</h5>
                        <ul><li>Seu produto é tecnicamente superior, mas o mercado não entende o valor</li><li>Reuniões comerciais terminam com "preciso pensar"</li><li>Concorrentes inferiores vendem mais rápido com narrativas mais simples</li></ul>
                    </div>
                    <div className="solution-side">
                        <h5>O que construímos</h5>
                        <ul><li><strong>Posicionamento:</strong> De "o que somos" para "problema que só nós resolvemos"</li><li><strong>Proposta de Valor:</strong> Mensagem que decisor entende em 60 segundos</li></ul>
                    </div>
                </div>
              </div>

              {/* Solução 1.2: CRO */}
              <div className="solution-card">
                <div className="solution-card-header"><Briefcase size={24} /><h4>Diretoria de Receita (CRO as a Service)</h4></div>
                <p className="solution-card-tagline">Liderança C-level fracionada que instala o sistema e entrega o playbook.</p>
                 <div className="solution-body">
                    <div className="challenge-side">
                        <h5>Você reconhece este contexto?</h5>
                        <ul><li>Vendas dependem de 1-2 "vendedores excepcionais"</li><li>Crescimento depende de networking, não de processo</li><li>CEO passa mais tempo vendendo do que liderando</li></ul>
                    </div>
                    <div className="solution-side">
                        <h5>O que construímos</h5>
                        <ul><li><strong>Inteligência de Mercado</strong> e Arquitetura de Processo</li><li><strong>Execução Pioneira</strong> e Governança de KPIs</li><li><strong>Playbook de Vendas Validado</strong> e documentado</li></ul>
                    </div>
                </div>
              </div>

              {/* Solução 1.3: Sprint */}
              <div className="solution-card">
                <div className="solution-card-header"><Rocket size={24} /><h4>Sprint de Validação Comercial</h4></div>
                <p className="solution-card-tagline">Valide demanda real antes de comprometer recursos grandes.</p>
                 <div className="solution-body">
                    <div className="challenge-side">
                        <h5>Você reconhece este contexto?</h5>
                        <ul><li>Receita parou de crescer há 2-3 trimestres</li><li>Decisões baseadas em intuição, não em dados de campo</li><li>Medo de escalar errado e queimar caixa</li></ul>
                    </div>
                    <div className="solution-side">
                        <h5>O que construímos</h5>
                        <ul><li><strong>Hipóteses Priorizadas</strong> para teste</li><li><strong>Validação Rápida</strong> com ICPs reais</li><li><strong>Recomendação Clara:</strong> Escalar, pivotar ou refinar</li></ul>
                    </div>
                </div>
              </div>
            </div>

            {/* COLUNA 2: CONSTRUÇÃO DE ATIVOS DIGITAIS */}
            <div className="solution-column">
              <div className="layer-header">
                <HardHat size={32} />
                <div>
                  <span className="layer-badge">CAMADA 2</span>
                  <h3>Construção de Ativos Digitais</h3>
                  <p>Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
                </div>
              </div>

              {/* Solução 2.1: Plataforma */}
              <div className="solution-card">
                <div className="solution-card-header"><MonitorSmartphone size={24} /><h4>Plataforma de Aceleração de Receita</h4></div>
                <p className="solution-card-tagline">30% Institucional + 70% Engenharia de Receita.</p>
                 <div className="solution-body">
                    <div className="challenge-side">
                        <h5>Você reconhece este contexto?</h5>
                        <ul><li>Site gera tráfego, mas conversão é baixa</li><li>Leads entram sem contexto e time perde horas qualificando</li><li>Seu site é uma "brochura online", não um motor de receita</li></ul>
                    </div>
                    <div className="solution-side">
                        <h5>O que construímos</h5>
                        <ul><li><strong>Arquitetura de Conversão</strong> em cada página</li><li><strong>Copywriting Neurocientífico</strong> que ativa a decisão</li><li><strong>Jornadas por Perfil</strong> e integração com CRM</li></ul>
                    </div>
                </div>
              </div>

              {/* Solução 2.2: Ferramentas */}
              <div className="solution-card">
                <div className="solution-card-header"><Wrench size={24} /><h4>Ferramentas Estratégicas de Conversão</h4></div>
                <p className="solution-card-tagline">Ativos que provam autoridade e aceleram a decisão.</p>
                 <div className="solution-body">
                    <div className="challenge-side">
                        <h5>Você reconhece este contexto?</h5>
                        <ul><li>Ciclo de vendas longo porque o valor é intangível</li><li>Cada venda exige uma apresentação personalizada (não escala)</li><li>Cliente quer "ver funcionando" antes de comprar</li></ul>
                    </div>
                    <div className="solution-side">
                        <h5>O que construímos</h5>
                        <ul><li><strong>Calculadoras de ROI</strong> e Simuladores de Cenário</li><li><strong>Matchmakers Inteligentes</strong> e Diagnósticos de Maturidade</li><li><strong>Ativos que provam seu valor</strong> sem precisar de reunião</li></ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 4: Modelo de Trabalho (REDUZIDO ESPAÇAMENTO) */}
       <section id="modelo-trabalho" className="section-solid">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>Iniciamos com uma Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento vem de <strong>Receita Nova</strong> gerada pelo projeto — dinheiro que você não teria sem nossa intervenção. Seu resultado é nosso resultado.</p>
            <div className="section-cta">
              <Link href="/contato" className="btn btn-secondary"><span>Entender o modelo</span><ArrowRight size={20} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 5: CTA Final (REDUZIDO ESPAÇAMENTO) */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <p className="lead-text" style={{marginBottom: '2rem'}}>Vamos traduzir seu desafio em um plano de ação.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* CSS para a NOVA ESTRUTURA */}
      <style jsx>{`
        /* 1. Alinhamento à Esquerda e Layout Geral */
        .solutions-two-column-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .solution-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem; /* Espaço entre os cards de solução */
        }
        .layer-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          text-align: left;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
        }
        .layer-header svg {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 5px;
        }
        .layer-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        .layer-header h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.8rem;
          color: var(--color-heading);
          margin: 0;
        }
        .layer-header p {
          font-size: 1rem;
          color: var(--color-text);
          margin-top: 0.5rem;
        }

        /* 2. Estilo dos Cards de Solução */
        .solution-card {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
          text-align: left;
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
        .solution-body {
          display: grid;
          grid-template-columns: 1fr; /* Simplificado para empilhar */
          gap: 1.5rem;
        }
        .challenge-side h5, .solution-side h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 1rem;
        }
        .challenge-side ul, .solution-side ul {
          list-style-type: '✓';
          list-style-position: inside;
          padding-left: 5px;
        }
        .challenge-side li, .solution-side li {
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
          font-size: 0.95rem;
        }
        .solution-side li strong {
          color: var(--color-heading);
        }

        /* 5. Correção da Cor dos Links */
        .case-proof a {
          color: var(--color-accent);
          font-weight: 600;
          text-decoration: none;
        }
        .case-proof a:hover {
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .solutions-two-column-grid {
            grid-template-columns: 1fr;
          }
          .solution-column:first-child {
            margin-bottom: 3rem; /* Espaço entre as camadas no mobile */
          }
        }
      `}</style>
    </>
  );
}