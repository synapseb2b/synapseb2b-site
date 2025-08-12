import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Zap, Wrench, Ban, ArrowRight, CheckCircle, Eye, Users, Lightbulb, Play, Award, Rocket } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function MetodologiaPage() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedFormat, setSelectedFormat] = useState(null);
  const heroRef = useRef(null);

  // Intersection Observer para animações
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

  // Mouse tracking para efeitos parallax
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
        <title>GTM Ignition™ – Metodologia de Aceleração de Receita B2B</title>
        <meta name="description" content="Metodologia GTM Ignition™: estratégia e execução para transformar complexidade técnica em clareza comercial e crescimento previsível no B2B." />
        <meta property="og:title" content="GTM Ignition™ – Metodologia de Aceleração de Receita B2B" />
        <meta property="og:description" content="Metodologia GTM Ignition™: estratégia e execução para transformar complexidade técnica em clareza comercial e crescimento previsível no B2B." />
        <link rel="canonical" href="https://synapseb2b.com/metodologia" />
      </Head>

      {/* Partículas de fundo animadas */}
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

      {/* Linha de pulso elétrico entre navbar e hero */}
      <div className="synapse-line synapse-line-top"></div>
 
      {/* Hero interno */}
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
              Nosso método GTM Ignition™ leva empresas técnicas do invisível ao impossível de ignorar — provando valor com métricas reais.
            </p>
          </div>
        </div>
        
        {/* Vídeo de fundo específico da metodologia */}
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

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 1: O princípio */}
      <section 
        className="section section-dark modern-section"
        id="principio"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Estratégia sem execução é teoria. Execução sem estratégia é desperdício.</h2>
            <div className="section-content">
              <p className="lead-text">
                No B2B, muitas empresas técnicas ficam invisíveis para o mercado não por falta de competência, mas por não conseguirem traduzir seu valor de forma clara e convincente.
              </p>
              <p className="lead-text">
                O <strong>GTM Ignition™</strong> nasceu para eliminar essa lacuna — integrando clareza estratégica, execução prática e prova de ROI para que sua solução seja percebida, valorizada e escolhida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 2: Framework GTM Ignition™ */}
      <section 
        className="section section-darker modern-section"
        id="framework"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Nosso processo proprietário em três fases</h2>
            
            {/* Vídeo central do Framework */}
            <div className="framework-video-container">
              <div className="framework-video-wrapper">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="framework-video"
                >
                  <source src="/video/Framework_GTM_SynapseB2B.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Zoom nas fases */}
            <div className="framework-phases">
              <div className="phase-item glass-card-contrast">
                <div className="phase-header">
                  <div className="phase-number">1</div>
                  <h3>Diagnóstico Estratégico</h3>
                </div>
                <div className="phase-content">
                  <ul className="phase-list">
                    <li>Mapeamento profundo de negócio, mercado e posicionamento</li>
                    <li>Identificação de alavancas reais de crescimento</li>
                    <li>Benchmark de performance e margens</li>
                  </ul>
                  <div className="phase-deliverable">
                    <strong>Entregável:</strong> Roadmap de crescimento priorizado
                  </div>
                </div>
              </div>

              <div className="phase-item glass-card-contrast">
                <div className="phase-header">
                  <div className="phase-number">2</div>
                  <h3>Decodificação de Mercado</h3>
                </div>
                <div className="phase-content">
                  <ul className="phase-list">
                    <li>Tradução da complexidade técnica em narrativa de valor irresistível</li>
                    <li>Definição e validação de ICP e ICP Real</li>
                    <li>Framework de mensagens para vendas, marketing e parceiros</li>
                  </ul>
                  <div className="phase-deliverable">
                    <strong>Entregável:</strong> Playbook de posicionamento
                  </div>
                </div>
              </div>

              <div className="phase-item glass-card-contrast">
                <div className="phase-header">
                  <div className="phase-number">3</div>
                  <h3>Engenharia de Receita</h3>
                </div>
                <div className="phase-content">
                  <ul className="phase-list">
                    <li>Criação e integração de ativos e processos comerciais</li>
                    <li>Playbooks, scripts, apresentações, automações</li>
                    <li>Funil e métricas de RevOps</li>
                  </ul>
                  <div className="phase-deliverable">
                    <strong>Entregável:</strong> Kit operacional do motor de receita
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 3: O que nos diferencia */}
      <section 
        className="section section-dark modern-section"
        id="diferencial"
      >
        <div className="container">
          <div className="diferencial-layout">
            <div className="diferencial-content">
              <h2 className="section-title">Por que o GTM Ignition™ não é só mais um método</h2>
              
              <div className="diferencial-list">
                <div className="diferencial-item glass-card-contrast">
                  <div className="diferencial-icon">
                    <Award className="icon" />
                  </div>
                  <p>Metodologia proprietária, documentada e validada</p>
                </div>
                
                <div className="diferencial-item glass-card-contrast">
                  <div className="diferencial-icon">
                    <Users className="icon" />
                  </div>
                  <p>Execução hands-on, lado a lado com o cliente</p>
                </div>
                
                <div className="diferencial-item glass-card-contrast">
                  <div className="diferencial-icon">
                    <BarChart className="icon" />
                  </div>
                  <p>Prova de ROI com métricas de negócio, não indicadores de vaidade</p>
                </div>
                
                <div className="diferencial-item glass-card-contrast">
                  <div className="diferencial-icon">
                    <Zap className="icon" />
                  </div>
                  <p>Integração ponta a ponta — do diagnóstico à operação</p>
                </div>
                
                <div className="diferencial-item glass-card-contrast">
                  <div className="diferencial-icon">
                    <Target className="icon" />
                  </div>
                  <p>Foco em vendas complexas de alto valor e difícil replicação</p>
                </div>
              </div>
            </div>

            {/* Vídeo do diferencial */}
            <div className="diferencial-video-container">
              <div className="diferencial-video-wrapper">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="diferencial-video"
                >
                  <source src="/video/Diferencial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 4: Formatos de atuação (quiz) */}
      <section 
        className="section section-darker modern-section"
        id="formatos"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Duas formas de colocar o GTM Ignition™ para trabalhar</h2>
            
            {/* Quiz interativo */}
            <div className="quiz-container">
              <div className="quiz-questions">
                <div className="quiz-question glass-card-contrast">
                  <h3>Você está entrando ou reposicionando sua solução no mercado?</h3>
                  <button 
                    className="btn btn-secondary-contrast btn-modern"
                    onClick={() => handleQuizSelection('estrategia')}
                  >
                    <Rocket className="btn-icon" />
                    <span>Sim, preciso de estratégia</span>
                  </button>
                </div>

                <div className="quiz-question glass-card-contrast">
                  <h3>Você já vende, mas quer acelerar e tornar previsível?</h3>
                  <button 
                    className="btn btn-secondary-contrast btn-modern"
                    onClick={() => handleQuizSelection('aceleracao')}
                  >
                    <TrendingUp className="btn-icon" />
                    <span>Sim, quero acelerar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards dos formatos */}
      <section 
        className="section section-dark modern-section"
        id="formatos-cards"
      >
        <div className="container">
          <div className="formats-cards-grid">
            <div className={`format-card glass-card-contrast ${selectedFormat === 'estrategia' ? 'format-card-highlighted' : ''}`}>
              <div className="format-card-header">
                <div className="format-card-icon">
                  <Target className="icon" />
                </div>
                <h3>Estratégia Go-to-Market completa</h3>
              </div>
              <div className="format-card-content">
                <p>Entrada ou reposicionamento no mercado com clareza, impacto e diferenciação.</p>
              </div>
            </div>

            <div className={`format-card glass-card-contrast ${selectedFormat === 'aceleracao' ? 'format-card-highlighted' : ''}`}>
              <div className="format-card-header">
                <div className="format-card-icon">
                  <BarChart className="icon" />
                </div>
                <h3>Diretoria de Aceleração de Receita B2B<br />
                  <span className="subtitle-small">(interina ou fracionada)</span>
                </h3>
              </div>
              <div className="format-card-content">
                <p>Operação contínua para otimizar e escalar resultados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 5: Resultados que o mercado sente */}
      <section 
        className="section section-darker modern-section"
        id="resultados"
      >
        <div className="container">
          <div className="resultados-layout">
            <div className="resultados-content">
              <h2 className="section-title">O que mudará no seu negócio quando a mensagem certa chegar às pessoas certas</h2>
              
              <div className="resultados-list">
                <div className="resultado-item glass-card-contrast">
                  <div className="resultado-icon">
                    <CheckCircle className="icon" />
                  </div>
                  <p>Ser percebido como a melhor escolha no momento da decisão</p>
                </div>
                
                <div className="resultado-item glass-card-contrast">
                  <div className="resultado-icon">
                    <Zap className="icon" />
                  </div>
                  <p>Reduzir drasticamente o tempo entre primeira conversa e fechamento</p>
                </div>
                
                <div className="resultado-item glass-card-contrast">
                  <div className="resultado-icon">
                    <Target className="icon" />
                  </div>
                  <p>Receber leads que já entendem e valorizam o que você entrega</p>
                </div>
                
                <div className="resultado-item glass-card-contrast">
                  <div className="resultado-icon">
                    <TrendingUp className="icon" />
                  </div>
                  <p>Aumentar previsibilidade de receita e reduzir incertezas</p>
                </div>
                
                <div className="resultado-item glass-card-contrast">
                  <div className="resultado-icon">
                    <Users className="icon" />
                  </div>
                  <p>Criar alinhamento interno entre marketing, vendas e área técnica</p>
                </div>
                
                <div className="resultado-item glass-card-contrast">
                  <div className="resultado-icon">
                    <Award className="icon" />
                  </div>
                  <p>Manter vantagem competitiva frente a players que competem só por preço</p>
                </div>
              </div>
            </div>

            {/* Vídeo da logo animada */}
            <div className="logo-video-container">
              <div className="logo-video-wrapper">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="logo-video"
                >
                  <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 6: Chamada final */}
      <section 
        className="section section-dark modern-section final-cta"
        id="chamada-final"
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Pronto para transformar sua solução em algo impossível de ignorar?</h2>
            
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
      </section>
    </>
  );
}

