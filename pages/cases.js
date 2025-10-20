// pages/cases.js (VERSÃO REESTRUTURADA E OTIMIZADA)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones otimizados para a nova estrutura de abas e matriz de transformação
import { ArrowRight, HardHat, Share2, GraduationCap, Brain, XCircle, Zap, HeartPulse } from 'lucide-react';

export default function CasesPage() {
  // Define o case inicial que será exibido
  const [activeCase, setActiveCase] = useState('versao-holistica');

  // Efeito para animações de scroll
  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach(el => scrollObserver.observe(el));
    return () => scrollObserver.disconnect();
  }, []);

  // Componente interno para a Matriz de Transformação
  const TransformationMatrix = ({ before, after }) => (
    <div className="transformation-matrix">
      <div className="matrix-column">
        <h4><XCircle /> Ponto de Partida</h4>
        <p>{before}</p>
      </div>
      <div className="matrix-column after">
        <h4><Zap /> Ponto de Virada</h4>
        <p>{after}</p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Cases de Sucesso | Provas da Engenharia de Receita</title>
        <meta name="description" content="Explore histórias reais de como o Cortex GTM™ transforma complexidade em clareza, gerando resultados tangíveis para Healthtechs, Engenharias e Ecossistemas." />
      </Head>

      {/* Bloco 1: Hero Section */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Engenharia de Receita em Ação</h1>
          <p className="lead-text">
            Quatro histórias reais. Quatro aplicações do Cortex GTM™.
            <br/>Um princípio unificador: complexidade sem clareza é potencial desperdiçado.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Princípio Unificador (NOVO) */}
      <section className="section-solid">
          <div className="container text-center reveal-up">
              <h2 className="section-title">O Princípio Unificador: Cortex GTM™</h2>
              <p className="lead-text">
                  Estes não são projetos isolados. São provas da mesma tese. Cada case demonstra como nosso sistema operacional proprietário, o Cortex GTM™, atua para decodificar a complexidade e instalar um sistema de receita previsível.
              </p>
          </div>
      </section>

      {/* Bloco 3: Cases em Abas (NOVA ESTRUTURA) */}
      <section id="cases-content" className="section-with-gradient-glow">
        <div className="container reveal-up">
          {/* Navegação por Abas */}
          <div className="case-tabs-navigation">
            <button className={`tab-button ${activeCase === 'versao-holistica' ? 'active' : ''}`} onClick={() => setActiveCase('versao-holistica')}>
              <HeartPulse /> Versão Holística
            </button>
            <button className={`tab-button ${activeCase === 'exclusiva-engenharias' ? 'active' : ''}`} onClick={() => setActiveCase('exclusiva-engenharias')}>
              <HardHat /> Exclusiva Engenharias
            </button>
            <button className={`tab-button ${activeCase === 'synapse-matchmaker' ? 'active' : ''}`} onClick={() => setActiveCase('synapse-matchmaker')}>
              <Share2 /> Synapse Matchmaker
            </button>
            <button className={`tab-button ${activeCase === 'mathpop' ? 'active' : ''}`} onClick={() => setActiveCase('mathpop')}>
              <GraduationCap /> MathPop
            </button>
          </div>

          {/* Conteúdo dos Cases */}
          <div className="case-content-wrapper">
            {activeCase === 'versao-holistica' && (
              <div className="case-content-pane">
                <div className="case-grid">
                  <div className="case-column">
                    <h3>Contexto: A Narrativa Dispersa</h3>
                    <p>Healthtech com produto sólido, mas com múltiplos modelos de negócio que travavam a decisão de hospitais e investidores. A pergunta era sempre a mesma: "O que, exatamente, vocês fazem por mim?".</p>
                    <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                    <p className="diagnosis-text">Travamento no Sistema 1 (decisão emocional). A narrativa técnica forçava uma análise racional exaustiva que o decisor não estava disposto a fazer.</p>
                  </div>
                  <div className="case-column">
                    <h3>Solução: Traduzir Inovação em ROI</h3>
                    <p>Aplicamos as 5 lentes do Cortex GTM™ para traduzir "Cuidado Integrativo" em "Plataforma que reduz custo de paciente crônico", focando no ROI que o CFO de um hospital precisa para decidir em 60 segundos.</p>
                  </div>
                </div>
                <TransformationMatrix 
                  before='Pitch de 15 minutos que gerava a resposta: "vamos pensar..."'
                  after='Pitch de 3 minutos que gerava a resposta: "quando começamos?"'
                />
                <div className="highlight-box mt-4">
                  <p className="text-2xl font-bold text-white">"Traduzimos inovação técnica em linguagem de decisor financeiro. O produto sempre funcionou. Agora o mercado entende por quê."</p>
                </div>
              </div>
            )}
            
            {activeCase === 'exclusiva-engenharias' && (
              <div className="case-content-pane">
                <div className="case-grid">
                  <div className="case-column">
                    <h3>Contexto: A Invisibilidade Digital</h3>
                    <p>Engenharia de excelência técnica, mas com crescimento 100% dependente de indicações, sobrecarregando o CEO e sem nenhuma previsibilidade de receita.</p>
                    <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                    <p className="diagnosis-text">Ausência total de sistema comercial. O talento técnico não tinha uma narrativa de valor clara para o mercado. Heroísmo não escala. Sistema escala.</p>
                  </div>
                  <div className="case-column">
                    <h3>Solução: Dual-Track Revenue</h3>
                    <p>Não esperamos a estratégia ficar "perfeita". Atuamos em duas frentes paralelas: (1) Discovery, construindo o GTM e a plataforma digital, e (2) Delivery, atuando como CRO as a Service e validando o processo na linha de frente.</p>
                  </div>
                </div>
                <TransformationMatrix 
                  before="Crescimento reativo e limitado à rede de contatos do CEO."
                  after="Motor de geração de demanda ativo, com leads qualificados e um sistema replicável."
                />
                <div className="highlight-box mt-4">
                  <p className="text-2xl font-bold text-white">"Dual-Track Revenue transforma aprendizado em receita enquanto você descobre o que funciona."</p>
                </div>
              </div>
            )}
            
            {activeCase === 'synapse-matchmaker' && (
              <div className="case-content-pane">
                  <div className="case-grid">
                      <div className="case-column">
                          <h3>Contexto: O Caos Relacional</h3>
                          <p>Ecossistemas de networking com enorme valor potencial, mas com informação perdida em conversas e planilhas, gerando zero confluência estratégica.</p>
                          <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                          <p className="diagnosis-text">Decisões cognitivamente caras (buscar, filtrar, comparar) travando a ação. A solução era uma ferramenta que tomasse essas decisões pelo usuário.</p>
                      </div>
                      <div className="case-column">
                          <h3>Solução: Transformar Método em Produto</h3>
                          <p>Criamos uma ferramenta de matching inteligente que aplica as lentes do Cortex GTM™ ao design de produto, reduzindo a fricção cognitiva e entregando 3 matches perfeitos em segundos.</p>
                      </div>
                  </div>
                  <TransformationMatrix 
                      before="Oportunidades invisíveis e networking desperdiçado em informação caótica."
                      after="3 matches perfeitos em 10 segundos, gerando conexões estratégicas instantâneas."
                  />
                  <div className="highlight-box mt-4">
                      <p className="text-2xl font-bold text-white">"A mesma lógica que destrava receita em empresas B2B agora destrava conexões em ecossistemas."</p>
                  </div>
              </div>
            )}

            {activeCase === 'mathpop' && (
              <div className="case-content-pane">
                  <div className="case-grid">
                      <div className="case-column">
                          <h3>Contexto: A Prova de Universalidade</h3>
                          <p>O desafio de ensinar matemática de forma envolvente para crianças que acham a matéria "chata", combatendo o aprendizado baseado em "decoreba" de fórmulas.</p>
                          <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                          <p className="diagnosis-text">O mesmo problema de B2B: conteúdo tecnicamente correto sem clareza de valor não gera engajamento. A complexidade precisa se conectar ao "job" real do usuário (a criança quer se divertir).</p>
                      </div>
                      <div className="case-column">
                          <h3>Solução: Gamificação com Lente Andragógica</h3>
                          <p>Aplicamos os princípios do aprendizado para criar um app onde a matemática é aplicada a desafios lúdicos, ativando o Sistema 1 (diversão) antes do Sistema 2 (raciocínio).</p>
                      </div>
                  </div>
                  <div className="highlight-box mt-4" style={{borderColor: 'var(--color-accent)'}}>
                      <p className="text-2xl font-bold text-white">"Cortex GTM™ não é uma estratégia de nicho. É uma ciência de traduzir complexidade em clareza que qualquer cérebro humano consegue processar e valorizar."</p>
                  </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Bloco de Conclusão e CTA */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">O Que Esses Quatro Cases Provam</h2>
          <p className="lead-text">O princípio é sempre o mesmo: complexidade sem clareza é potencial desperdiçado. Se você tem potencial travado, o Cortex GTM™ destrava.</p>
          <div className="decision-block">
             <h4 style={{fontSize: '1.5rem'}}>Reconhece seu contexto em algum desses desafios?</h4>
             <div className="section-cta">
                <Link href="/contato" className="btn btn-primary btn-large">
                  <span>Agendar Diagnóstico Estratégico (21min)</span><ArrowRight size={20} />
                </Link>
             </div>
             <p className="cta-support-text">Primeira conversa: 21 minutos para avaliar fit mútuo. Apenas clareza sobre se podemos gerar valor real para você.</p>
          </div>
        </div>
      </section>

      {/* CSS específico para a nova estrutura de abas */}
      <style jsx>{`
        .case-tabs-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--color-border);
        }
        .tab-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          color: var(--color-text);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: translateY(1px);
        }
        .tab-button:hover {
          color: var(--color-heading);
        }
        .tab-button.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .case-content-pane {
          animation: fadeIn 0.5s ease-out;
        }
        .transformation-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .matrix-column h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }
        .matrix-column.after h4 {
          color: var(--color-primary);
        }
        .matrix-column p {
          font-size: 1.1rem;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .case-tabs-navigation {
            flex-wrap: wrap;
            gap: 0.5rem;
            border-bottom: none;
          }
          .tab-button {
            flex-basis: calc(50% - 0.5rem);
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            transform: translateY(0);
          }
          .tab-button.active {
            background-color: var(--color-primary);
            color: var(--color-heading);
            border-color: var(--color-primary);
          }
          .transformation-matrix {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}