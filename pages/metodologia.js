import { Target, BarChart, Search, TrendingUp, Zap, ArrowRight, CheckCircle, Eye, Users, Award } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function MetodologiaPage() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedFormat, setSelectedFormat] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuizSelection = (format) => {
    setSelectedFormat(format);
    scrollToSection('formatos-cards');
  };

  return (
    <>
      <Head>
        <title>"Metodologia de Aceleração de Receita B2B - GTM Ignition™</title>
        <meta name="description" content="Metodologia GTM Ignition™: estratégia e execução para transformar complexidade técnica em clareza comercial e crescimento previsível no B2B." />
        <meta property="og:title" content="Metodologia de Aceleração de Receita B2B - GTM Ignition™" />
        <meta property="og:description" content="Metodologia GTM Ignition™: estratégia e execução para transformar complexidade técnica em clareza comercial e crescimento previsível no B2B." />
        <link rel="canonical" href="https://synapseb2b.com/metodologia" />
      </Head>

      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="synapse-line synapse-line-top"></div>
 
      <section 
        ref={heroRef}
        className="hero modern-hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-headline">
              Estratégia e execução, conectadas para transformar complexidade em crescimento previsível.
            </h1>
            <p className="hero-subheadline">
              Do invisível ao impossível de ignorar: o GTM Ignition™ prova o valor de empresas B2B complexas com métricas reais.
            </p>
          </div>
        </div>
        
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
          >
            <source src="/video/video_home_metodologia.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="principio"
      >
        <div className="container">
          <div className="text-center mb-2">
            <div className="dual-title">
              <h2 className="section-title-line">Estratégia sem execução é teoria.</h2>
              <h2 className="section-title-line">Execução sem estratégia é desperdício.</h2>
            </div>
            <div className="section-content">
              <p className="lead-text">
                No B2B, muitas empresas técnicas ficam invisíveis para o mercado não por falta de competência, mas por não conseguirem traduzir seu valor de forma clara e convincente.
              </p>
              <p className="lead-text">
                A <strong>Synapse B2B</strong> nasceu para eliminar essa lacuna — integrando clareza estratégica, execução prática e prova de ROI para que sua solução seja percebida, valorizada e escolhida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

<section 
        className="section section-darker modern-section"
        style={{
          backgroundImage: "url('/image/Plataforma.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
        id="framework"
      >
        <div className="section-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-2">
            <h2 className="section-title">Nosso processo proprietário em três fases</h2>
            <div className="section-content">
              
              <div className="framework-grid">
                
                {/* 1ª Linha: Imagem + Card */}
                <div className="framework-row">
                  <div className="framework-image-container">
                    <Image src="/image/Diagnostico_Estrategico.png" alt="Ilustração do Diagnóstico Estratégico" layout="fill" objectFit="cover" className="framework-image" />
                  </div>
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <div className="card-main-content">
                        <h3>Diagnóstico Estratégico</h3>
                        <div className="phase-text-list">
                          <p>Mapeamento profundo de negócio, mercado e posicionamento.</p>
                          <p>Identificação de alavancas reais de crescimento.</p>
                          <p>Benchmark de performance e margens.</p>
                        </div>
                      </div>
                      <div className="phase-deliverable-highlight">
                        <CheckCircle className="deliverable-icon" />
                        <span><strong>Entregável:</strong> Roadmap de crescimento priorizado.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AJUSTE: A classe foi alterada para "framework-row" e a ordem dos elementos foi corrigida. */}
                <div className="framework-row">
                  {/* Ordem corrigida: Imagem primeiro */}
                  <div className="framework-image-container">
                    <Image src="/image/Decodificacao_de_Mercado.png" alt="Ilustração da Decodificação de Mercado" layout="fill" objectFit="cover" className="framework-image" />
                  </div>
                  {/* Card depois */}
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <div className="card-main-content">
                        <h3>Decodificação de Mercado</h3>
                        <div className="phase-text-list">
                          <p>Tradução da complexidade técnica em narrativa de valor.</p>
                          <p>Definição e validação de ICP (Ideal Customer Profile) e RCP.</p>
                          <p>Framework de mensagens para vendas, marketing e parceiros.</p>
                        </div>
                      </div>
                      <div className="phase-deliverable-highlight">
                        <CheckCircle className="deliverable-icon" />
                        <span><strong>Entregável:</strong> Playbook de posicionamento.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3ª Linha: Imagem + Card */}
                <div className="framework-row">
                   <div className="framework-image-container">
                    <Image src="/image/Engenharia_de_Receita.png" alt="Ilustração da Engenharia de Receita" layout="fill" objectFit="cover" className="framework-image" />
                  </div>
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                       <div className="card-main-content">
                        <h3>Engenharia de Receita</h3>
                        <div className="phase-text-list">
                          <p>Criação e integração de ativos e processos comerciais.</p>
                          <p>Playbooks, scripts, apresentações e automações.</p>
                          <p>Estruturação do funil e métricas de RevOps.</p>
                        </div>
                      </div>
                      <div className="phase-deliverable-highlight">
                        <CheckCircle className="deliverable-icon" />
                        <span><strong>Entregável:</strong> Kit operacional do motor de receita.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="diferencial"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Por que o GTM Ignition™ não é só mais um método</h2>
            <div className="section-content">
              
              <div className="diferencial-grid-221">
                <div className="diferencial-item-card glass-card-contrast">
                  <div className="diferencial-icon">
                    <Award className="icon" />
                  </div>
                  <h3>Metodologia proprietária, documentada e validada</h3>
                  <p>Framework exclusivo desenvolvido e refinado através de múltiplos projetos B2B de alta complexidade.</p>
                </div>
                
                <div className="diferencial-item-card glass-card-contrast">
                  <div className="diferencial-icon">
                    <Users className="icon" />
                  </div>
                  <h3>Execução hands-on, lado a lado com o cliente</h3>
                  <p>Não apenas consultoria, mas implementação prática integrada à sua operação.</p>
                </div>
                
                <div className="diferencial-item-card glass-card-contrast">
                  <div className="diferencial-icon">
                    <BarChart className="icon" />
                  </div>
                  <h3>Prova de ROI com métricas de negócio, não indicadores de vaidade</h3>
                  <p>Foco em resultados mensuráveis: ciclo de vendas, conversão, receita previsível.</p>
                </div>

                <div className="diferencial-item-card glass-card-contrast">
                  <div className="diferencial-icon">
                    <Zap className="icon" />
                  </div>
                  <h3>Integração ponta a ponta — do diagnóstico à operação</h3>
                  <p>Conectando estratégia e execução sem lacunas, do planejamento à implementação.</p>
                </div>

                <div className="diferencial-item-card glass-card-contrast diferencial-single">
                  <div className="diferencial-icon">
                    <Target className="icon" />
                  </div>
                  <h3>Foco em vendas complexas de alto valor e difícil replicação</h3>
                  <p>Especialização em soluções técnicas com ciclos longos e múltiplos decisores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-darker modern-section"
        id="formatos"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Dois formatos exclusivos de atuação da Synapse B2B para impulsionar seu crescimento.</h2>
            <div className="section-content">
              
              <div className="formats-section" id="formatos-cards">
                <div className="formats-grid-square">
                  <div className="format-item-square glass-card-contrast">
                    <Target className="format-icon-large" />
                    <h4>Estratégia Go-to-Market completa</h4>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                      Entrada ou reposicionamento no mercado com clareza, impacto e diferenciação.
                    </p>
                  </div>
                  <div className="format-item-square glass-card-contrast">
                    <BarChart className="format-icon-large" />
                    <h4>
                      Diretoria de Aceleração de Receita B2B<br />
                      <span className="subtitle-small">(interina ou fracionada)</span>
                    </h4>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                      Operação contínua para otimizar e escalar resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="resultados"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">O que mudará no seu negócio quando a mensagem certa chegar às pessoas certas</h2>
            <div className="section-content">
              
              <div className="resultados-grid-222">
                <div className="resultado-item-card glass-card-contrast">
                  <div className="resultado-icon">
                    <CheckCircle className="icon" />
                  </div>
                  <h3>Ser percebido como a melhor escolha no momento da decisão</h3>
                  <p>Posicionamento que destaca seus diferenciais únicos de forma clara e convincente.</p>
                </div>
                
                <div className="resultado-item-card glass-card-contrast">
                  <div className="resultado-icon">
                    <Zap className="icon" />
                  </div>
                  <h3>Reduzir drasticamente o tempo entre primeira conversa e fechamento</h3>
                  <p>Processo comercial otimizado que acelera a jornada de compra do prospect.</p>
                </div>
                
                <div className="resultado-item-card glass-card-contrast">
                  <div className="resultado-icon">
                    <Target className="icon" />
                  </div>
                  <h3>Receber leads que já entendem e valorizam o que você entrega</h3>
                  <p>Atração qualificada através de mensagens que ressoam com o público certo.</p>
                </div>

                <div className="resultado-item-card glass-card-contrast">
                  <div className="resultado-icon">
                    <TrendingUp className="icon" />
                  </div>
                  <h3>Aumentar previsibilidade de receita e reduzir incertezas</h3>
                  <p>Métricas e processos que tornam o crescimento mensurável e replicável.</p>
                </div>

                <div className="resultado-item-card glass-card-contrast">
                  <div className="resultado-icon">
                    <Users className="icon" />
                  </div>
                  <h3>Criar alinhamento interno entre marketing, vendas e área técnica</h3>
                  <p>Linguagem comum e processos integrados que eliminam silos organizacionais.</p>
                </div>

                <div className="resultado-item-card glass-card-contrast">
                  <div className="resultado-icon">
                    <Award className="icon" />
                  </div>
                  <h3>Manter vantagem competitiva frente a players que competem só por preço</h3>
                  <p>Diferenciação sustentável baseada em valor percebido, não apenas custo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-darker modern-section final-cta"
        id="chamada-final"
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Pronto para transformar sua solução em algo impossível de ignorar?</h2>
            <div className="section-content">
              <p className="lead-text">
                Com metodologia proprietária e atuação integrada, ajudamos empresas técnicas a transformar complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.
              </p>
              
              <div className="final-ctas">
                <Link href="/contato" className="btn btn-primary btn-modern btn-large btn-white-text">
                  <span>Quero acelerar minha receita</span>
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link href="/casos-de-uso" className="btn btn-secondary-contrast btn-modern">
                  <Eye className="btn-icon" />
                  <span>Ver exemplos de aplicação</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /*
          SYNAPSE B2B - METODOLOGIA PAGE STYLES
          Este bloco contém todos os estilos necessários para os layouts da página Metodologia.
          O código foi refatorado para clareza, correção e manutenibilidade.
        */

        /* ==========================================================================
           1. ESTILOS GERAIS E DE TÍTULOS
           ========================================================================== */

        .section-title-line {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-align: center;
          line-height: 1.3;
          background: linear-gradient(135deg, var(--base-color) 0%, var(--accent-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ==========================================================================
           2. LAYOUTS DE GRID DAS SEÇÕES
           ========================================================================== */
        
        .framework-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 1100px;
          margin: 2rem auto 0 auto;
        }
        .framework-row,
        .framework-row-reverse {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }
        .framework-row-reverse .step-item-vertical-tall {
          grid-column: 1;
        }
        .framework-row-reverse .framework-image-container {
          grid-column: 2;
        }
        .framework-image-container {
          position: relative;
          width: 100%;
          min-height: 450px;
          border-radius: 16px;
          overflow: hidden;
        }

        .diferencial-grid-221,
        .resultados-grid-222,
        .formats-grid-square {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 900px;
          margin: 2rem auto 0 auto;
        }
        .diferencial-item-card.diferencial-single { 
          grid-column: 1 / -1;
          justify-self: center;
          width: 100%;
          max-width: calc(50% - 1rem);
        }

        /* ==========================================================================
           3. ESTILIZAÇÃO DOS CARDS E SEU CONTEÚDO
           ========================================================================== */
        
        .diferencial-item-card,
        .resultado-item-card,
        .format-item-square {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 2.5rem;
          text-align: center;
          min-height: 320px;
        }
        .diferencial-icon,
        .resultado-icon {
          width: 80px;
          height: 80px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 1.5rem;
        }
        .diferencial-icon .icon,
        .resultado-icon .icon {
          width: 36px;
          height: 36px;
          color: var(--primary-color);
        }
        .diferencial-item-card h3,
        .resultado-item-card h3,
        .format-item-square h4 {
          font-size: 1.3rem;
          line-height: 1.4;
        }
        .diferencial-item-card p,
        .resultado-item-card p {
          font-size: 0.95rem;
        }
        .format-item-square {
            justify-content: center;
        }
        .format-icon-large {
          width: 80px;
          height: 80px;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
        }

        .step-item-vertical-tall .step-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 100%;
          text-align: center;
          padding: 1rem;
        }
        .step-item-vertical-tall .card-main-content {
          flex-grow: 1;
        }
        .step-item-vertical-tall h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .step-item-vertical-tall .phase-text-list {
          margin: 0;
          padding: 0;
        }
        .step-item-vertical-tall .phase-text-list p {
          position: relative;
          padding-left: 0;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .phase-deliverable-highlight {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          margin-top: 1.5rem;
          border-radius: 8px;
          background-color: rgba(0, 255, 224, 0.07);
          border: 1px solid rgba(0, 255, 224, 0.2);
        }
        .phase-deliverable-highlight .deliverable-icon {
          flex-shrink: 0;
          color: var(--accent-color);
        }

        /* ==========================================================================
           4. AJUSTES DE RESPONSIVIDADE
           ========================================================================== */

        @media (max-width: 768px) {
          .section-title-line {
            font-size: 2rem;
          }
          .framework-row, 
          .framework-row-reverse,
          .diferencial-grid-221,
          .resultados-grid-222,
          .formats-grid-square {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .framework-row-reverse .step-item-vertical-tall,
          .framework-row-reverse .framework-image-container {
            grid-column: 1;
          }
          .framework-image-container { 
            min-height: 300px; 
          }
          .diferencial-item-card.diferencial-single {
            max-width: none;
            justify-self: stretch;
          }
          .diferencial-item-card,
          .resultado-item-card,
          .format-item-square {
            min-height: auto;
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}