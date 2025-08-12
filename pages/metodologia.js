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

      {/* Seção 2: Framework GTM Ignition™ - Layout lado a lado como na home */}
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
              
              {/* Layout com cards à esquerda e vídeo à direita - IGUAL À HOME */}
              <div className="process-layout">
                <div className="process-steps-vertical">
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Diagnóstico Estratégico</h3>
                      <ul className="phase-list">
                        <li>Mapeamento profundo de negócio, mercado e posicionamento</li>
                        <li>Identificação de alavancas reais de crescimento</li>
                        <li>Benchmark de performance e margens</li>
                      </ul>
                      <div className="phase-deliverable">
                        <strong>Entregável:</strong> Roadmap de crescimento priorizado
                      </div>
                    </div>
                    <Search className="step-icon" />
                  </div>
                  
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Decodificação de Mercado</h3>
                      <ul className="phase-list">
                        <li>Tradução da complexidade técnica em narrativa de valor irresistível</li>
                        <li>Definição e validação de ICP e ICP Real</li>
                        <li>Framework de mensagens para vendas, marketing e parceiros</li>
                      </ul>
                      <div className="phase-deliverable">
                        <strong>Entregável:</strong> Playbook de posicionamento
                      </div>
                    </div>
                    <Target className="step-icon" />
                  </div>
                  
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Engenharia de Receita</h3>
                      <ul className="phase-list">
                        <li>Criação e integração de ativos e processos comerciais</li>
                        <li>Playbooks, scripts, apresentações, automações</li>
                        <li>Funil e métricas de RevOps</li>
                      </ul>
                      <div className="phase-deliverable">
                        <strong>Entregável:</strong> Kit operacional do motor de receita
                      </div>
                    </div>
                    <BarChart className="step-icon" />
                  </div>
                </div>

                {/* Vídeo do Framework no lugar da imagem */}
                <div className="framework-video-side">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="framework-video-main"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  >
                    <source src="/video/Framework_GTM_SynapsebB2B.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 3: O que nos diferencia - Layout lado a lado como na home */}
      <section 
        className="section section-dark modern-section"
        id="diferencial"
      >
        <div className="container">
          <div className="process-layout">
            <div className="process-steps-vertical">
              <div className="diferencial-header">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                  Por que o GTM Ignition™ não é só mais um método
                </h2>
              </div>
              
              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Metodologia proprietária, documentada e validada</h3>
                  <p>Framework exclusivo desenvolvido e refinado através de múltiplos projetos B2B de alta complexidade.</p>
                </div>
                <Award className="step-icon" />
              </div>
              
              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Execução hands-on, lado a lado com o cliente</h3>
                  <p>Não apenas consultoria, mas implementação prática integrada à sua operação.</p>
                </div>
                <Users className="step-icon" />
              </div>
              
              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Prova de ROI com métricas de negócio</h3>
                  <p>Foco em resultados mensuráveis: ciclo de vendas, conversão, receita previsível.</p>
                </div>
                <BarChart className="step-icon" />
              </div>

              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Integração ponta a ponta</h3>
                  <p>Do diagnóstico à operação, conectando estratégia e execução sem lacunas.</p>
                </div>
                <Zap className="step-icon" />
              </div>

              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Foco em vendas complexas de alto valor</h3>
                  <p>Especialização em soluções técnicas de difícil replicação e ciclos longos.</p>
                </div>
                <Target className="step-icon" />
              </div>
            </div>

            {/* Vídeo do diferencial */}
            <div className="framework-video-side">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="framework-video-main"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              >
                <source src="/video/Diferencial.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 4: Formatos de atuação - Seguindo padrão da home */}
      <section 
        className="section section-darker modern-section"
        id="formatos"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Duas formas de colocar o GTM Ignition™ para trabalhar</h2>
            <div className="section-content">
              
              {/* Quiz interativo estilizado como cards da home */}
              <div className="problem-list-three" style={{ marginBottom: '3rem' }}>
                <div className="problem-item-square glass-card-contrast quiz-card" onClick={() => handleQuizSelection('estrategia')}>
                  <div className="problem-icon">
                    <Rocket className="icon" />
                  </div>
                  <h3 style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    Você está entrando ou reposicionando sua solução no mercado?
                  </h3>
                  <button className="btn btn-secondary-contrast btn-modern" style={{ marginTop: '1rem' }}>
                    <span>Sim, preciso de estratégia</span>
                  </button>
                </div>

                <div className="problem-item-square glass-card-contrast quiz-card" onClick={() => handleQuizSelection('aceleracao')}>
                  <div className="problem-icon">
                    <TrendingUp className="icon" />
                  </div>
                  <h3 style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    Você já vende, mas quer acelerar e tornar previsível?
                  </h3>
                  <button className="btn btn-secondary-contrast btn-modern" style={{ marginTop: '1rem' }}>
                    <span>Sim, quero acelerar</span>
                  </button>
                </div>

                {/* Card vazio para manter o grid de 3 */}
                <div className="problem-item-square" style={{ opacity: 0, pointerEvents: 'none' }}>
                </div>
              </div>

              {/* Cards dos formatos - Seguindo padrão dos formatos da home */}
              <div className="formats-section" id="formatos-cards">
                <div className="formats-grid-square">
                  <div className={`format-item-square glass-card-contrast ${selectedFormat === 'estrategia' ? 'format-highlighted' : ''}`}>
                    <Target className="format-icon-large" />
                    <h4>Estratégia Go-to-Market completa</h4>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                      Entrada ou reposicionamento no mercado com clareza, impacto e diferenciação.
                    </p>
                  </div>
                  <div className={`format-item-square glass-card-contrast ${selectedFormat === 'aceleracao' ? 'format-highlighted' : ''}`}>
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

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 5: Resultados - Layout lado a lado como na home */}
      <section 
        className="section section-dark modern-section"
        id="resultados"
      >
        <div className="container">
          <div className="process-layout">
            <div className="process-steps-vertical">
              <div className="diferencial-header">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
                  O que mudará no seu negócio quando a mensagem certa chegar às pessoas certas
                </h2>
              </div>
              
              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Ser percebido como a melhor escolha no momento da decisão</h3>
                  <p>Posicionamento que destaca seus diferenciais únicos de forma clara e convincente.</p>
                </div>
                <CheckCircle className="step-icon" />
              </div>
              
              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Reduzir drasticamente o tempo entre primeira conversa e fechamento</h3>
                  <p>Processo comercial otimizado que acelera a jornada de compra do prospect.</p>
                </div>
                <Zap className="step-icon" />
              </div>
              
              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Receber leads que já entendem e valorizam o que você entrega</h3>
                  <p>Atração qualificada através de mensagens que ressoam com o público certo.</p>
                </div>
                <Target className="step-icon" />
              </div>

              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Aumentar previsibilidade de receita e reduzir incertezas</h3>
                  <p>Métricas e processos que tornam o crescimento mensurável e replicável.</p>
                </div>
                <TrendingUp className="step-icon" />
              </div>

              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Criar alinhamento interno entre marketing, vendas e área técnica</h3>
                  <p>Linguagem comum e processos integrados que eliminam silos organizacionais.</p>
                </div>
                <Users className="step-icon" />
              </div>

              <div className="step-item-vertical-tall glass-card-contrast">
                <div className="step-content">
                  <h3>Manter vantagem competitiva frente a players que competem só por preço</h3>
                  <p>Diferenciação sustentável baseada em valor percebido, não apenas custo.</p>
                </div>
                <Award className="step-icon" />
              </div>
            </div>

            {/* Vídeo da logo animada */}
            <div className="framework-video-side">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="framework-video-main"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              >
                <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 6: Chamada final - Seguindo padrão da home */}
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
    </>
  );
}

