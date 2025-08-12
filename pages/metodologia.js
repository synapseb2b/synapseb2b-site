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

      {/* Seção 1: O princípio - AJUSTE 1: Frases em linhas separadas */}
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
                O <strong>GTM Ignition™</strong> nasceu para eliminar essa lacuna — integrando clareza estratégica, execução prática e prova de ROI para que sua solução seja percebida, valorizada e escolhida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 2: Framework GTM Ignition™ - ALTERAÇÃO 1: Imagens e cards em 3 linhas */}
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
              
              {/* Layout com imagens e cards */}
              <div className="framework-grid">
                
                {/* 1ª Linha: Imagem + Card */}
                <div className="framework-row">
                  <div className="framework-image-container">
                    <Image src="/Diagnostico_Estrategico.png" alt="Ilustração do Diagnóstico Estratégico" layout="fill" objectFit="cover" className="framework-image" />
                  </div>
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Diagnóstico Estratégico</h3>
                      <div className="phase-text-list">
                        <p>Mapeamento profundo de negócio, mercado e posicionamento</p>
                        <p>Identificação de alavancas reais de crescimento</p>
                        <p>Benchmark de performance e margens</p>
                      </div>
                      <div className="phase-deliverable">
                        <strong>Entregável:</strong> Roadmap de crescimento priorizado
                      </div>
                    </div>
                    <Search className="step-icon" />
                  </div>
                </div>
                
                {/* 2ª Linha: Card + Imagem */}
                <div className="framework-row-reverse">
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Decodificação de Mercado</h3>
                      <div className="phase-text-list">
                        <p>Tradução da complexidade técnica em narrativa de valor irresistível</p>
                        <p>Definição e validação de ICP e RCP</p>
                        <p>Framework de mensagens para vendas, marketing e parceiros</p>
                      </div>
                      <div className="phase-deliverable">
                        <strong>Entregável:</strong> Playbook de posicionamento
                      </div>
                    </div>
                    <Target className="step-icon" />
                  </div>
                  <div className="framework-image-container">
                    <Image src="/Decodificacao_de_Mercado.png" alt="Ilustração da Decodificação de Mercado" layout="fill" objectFit="cover" className="framework-image" />
                  </div>
                </div>

                {/* 3ª Linha: Imagem + Card */}
                <div className="framework-row">
                   <div className="framework-image-container">
                    <Image src="/Engenharia_de_Receita.png" alt="Ilustração da Engenharia de Receita" layout="fill" objectFit="cover" className="framework-image" />
                  </div>
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Engenharia de Receita</h3>
                      <div className="phase-text-list">
                        <p>Criação e integração de ativos e processos comerciais</p>
                        <p>Playbooks, scripts, apresentações, automações</p>
                        <p>Funil e métricas de RevOps</p>
                      </div>
                      <div className="phase-deliverable">
                        <strong>Entregável:</strong> Kit operacional do motor de receita
                      </div>
                    </div>
                    <BarChart className="step-icon" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 3: O que nos diferencia - ALTERAÇÃO 2: Ajuste de Estilo dos Cards */}
      <section 
        className="section section-dark modern-section"
        id="diferencial"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Por que o GTM Ignition™ não é só mais um método</h2>
            <div className="section-content">
              
              {/* Grid 2-2-1 para os diferenciais */}
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

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 4: Formatos de atuação - Card Referência */}
      <section 
        className="section section-darker modern-section"
        id="formatos"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Duas formas de colocar o GTM Ignition™ para trabalhar</h2>
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

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 5: Resultados - ALTERAÇÃO 3: Ajuste de Estilo dos Cards */}
      <section 
        className="section section-dark modern-section"
        id="resultados"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">O que mudará no seu negócio quando a mensagem certa chegar às pessoas certas</h2>
            <div className="section-content">
              
              {/* Grid 2-2-2 para os resultados */}
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

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Seção 6: Chamada final */}
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