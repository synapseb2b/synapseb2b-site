import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Zap, Wrench, HeartPulse, Ban, ArrowRight, CheckCircle, Eye, Users, Lightbulb } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  return (
    <>
      <Head>
        <title>No B2B, não basta ter a melhor solução | Synapse B2B</title>
        <meta name="description" content="Para que o mercado perceba e valorize todo o potencial da sua solução, é preciso traduzir complexidade em clareza e ações que transformam atenção em resultado." />
        <meta property="og:title" content="No B2B, não basta ter a melhor solução | Synapse B2B" />
        <meta property="og:description" content="Para que o mercado perceba e valorize todo o potencial da sua solução, é preciso traduzir complexidade em clareza e ações que transformam atenção em resultado." />
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
 
      {/* Seção Hero */}
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
              No B2B, não basta ter a melhor solução. É preciso torná-la impossível de ignorar.
            </h1>
            <p className="hero-subheadline">
              Para que o mercado perceba e valorize todo o potencial da sua solução, é preciso traduzir
              complexidade em clareza e ações que transformam atenção em resultado.
            </p>
            <div className="hero-ctas modern-ctas" style={{ marginBottom: '2rem' }}>
              <button 
                onClick={() => scrollToSection('crescimento')}
                className="btn btn-primary btn-modern btn-white-text"
              >
                <span>Descubra como acelerar seu crescimento</span>
                <ArrowRight className="btn-icon" />
              </button>
              <Link href="/casos-de-uso" className="btn btn-secondary-contrast btn-modern">
                <Eye className="btn-icon" />
                <span>Veja nossos Casos de Uso</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Vídeo de fundo com overlay moderno */}
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video"
          >
            <source src="/video/Video_Home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 2: O problema que resolvemos */}
      <section 
        className="section section-dark modern-section"
        id="problema"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">O mercado não compra o que não entende.</h2>
            <div className="section-content">
              <p className="lead-text">
                Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado
                perceber seu valor.
              </p>
              <p className="lead-text">O desafio vai além da linguagem técnica:</p>
              
              <div className="problem-list-three">
                <div className="problem-item-square glass-card-contrast">
                  <div className="problem-icon">
                    <Ban className="icon" />
                  </div>
                  <p>Mensagens que não conectam com decisores.</p>
                </div>
                <div className="problem-item-square glass-card-contrast">
                  <div className="problem-icon">
                    <TrendingUp className="icon" />
                  </div>
                  <p>Estratégias comerciais desalinhadas com o processo real de compra.</p>
                </div>
                <div className="problem-item-square glass-card-contrast">
                  <div className="problem-icon">
                    <Wrench className="icon" />
                  </div>
                  <p>Falta de integração entre marketing, vendas e produto.</p>
                </div>
              </div>

              <div className="highlight-box">
                <p>
                  No <strong>B2B</strong>, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial
                  irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita
                  previsível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 3: Nossa resposta */}
      <section 
        className="section section-darker modern-section"
        style={{
          backgroundImage: "url('/image/Plataforma.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
        id="resposta"
      >
        <div className="section-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-2">
            <h2 className="section-title">Clareza estratégica para transformar complexidade em crescimento.</h2>
            <div className="section-content">
              <p className="lead-text">
                Unimos <strong>clareza estratégica</strong> e <strong>execução de alto impacto</strong> em três etapas:
              </p>
              
              {/* Layout com cards à esquerda e imagem à direita */}
              <div className="process-layout">
                <div className="process-steps-vertical">
                  {/* AJUSTE 1: Cards mais altos sem números */}
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Diagnóstico Profundo</h3>
                      <p>Mapeamos negócio, mercado e concorrência para identificar as alavancas reais de crescimento.</p>
                    </div>
                    <Search className="step-icon" />
                  </div>
                  
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Posicionamento Irrecusável</h3>
                      <p>Criamos uma mensagem que não só diferencia, mas obriga o decisor a prestar atenção — falando exatamente com as dores e prioridades dele.</p>
                    </div>
                    <Target className="step-icon" />
                  </div>
                  
                  <div className="step-item-vertical-tall glass-card-contrast">
                    <div className="step-content">
                      <h3>Engenharia de Receita</h3>
                      <p>Implementamos ativos e processos que aceleram a conversão e constroem crescimento previsível.</p>
                    </div>
                    <BarChart className="step-icon" />
                  </div>
                </div>

                {/* Imagem do Framework */}
                <div className="framework-image-side">
                  <Image 
                    src="/image/Framework_GTM_SynapsebB2B.png" 
                    alt="Framework GTM Synapse B2B" 
                    fill
                    style={{
                      borderRadius: '12px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              <div className="formats-section">
                <h3 className="formats-title">Formatos de atuação:</h3>
                <div className="formats-grid-square">
                  <div className="format-item-square glass-card-contrast">
                    <Target className="format-icon-large" />
                    <h4>Estratégia Go-to-Market completa</h4>
                  </div>
                  <div className="format-item-square glass-card-contrast">
                    <Users className="format-icon-large" />
                    <h4>
                      Diretoria de Aceleração de Receita B2B<br />
                      <span className="subtitle-small">(interina ou fracionada)</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 4: Casos que inspiram */}
<section 
        className="section section-darker modern-section"
        id="cenarios"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Exemplos de Desafios que já conhecemos — e resultados que já entregamos</h2>
            <div className="section-content">
              <div className="scenarios-grid">
                
                <div className="scenario-card glass-card-contrast">
                  <div className="scenario-header">
                    <Wrench className="scenario-icon" />
                    <h3>Engenharia & Infraestrutura</h3>
                  </div>
                  <div className="scenario-body">
                    <div className="scenario-part">
                      <h4>Antes:</h4>
                      <p>Competência técnica robusta e clientes de peso, mas enfrentavam uma "invisibilidade digital" em um mercado onde a confiança é construída antes da primeira reunião.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>Virada:</h4>
                      <p>Autoridade offline transformada em um sinalizador online de credibilidade e valor. Adoção de métricas de ROI, eficiência e mitigação de risco.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>Depois:</h4>
                      <p>Ciclo de vendas reduzido, maior taxa de conversão em propostas e novas portas abertas em contas estratégicas.</p>
                    </div>
                  </div>
                </div>

                <div className="scenario-card glass-card-contrast">
                  <div className="scenario-header">
                    <HeartPulse className="scenario-icon" />
                    <h3>HealthTech</h3>
                  </div>
                  <div className="scenario-body">
                    <div className="scenario-part">
                      <h4>Antes:</h4>
                      <p>Solução inovadora, mas "sensação de desorientação" sobre sua própria proposta de valor e narrativa de mercado. Extrema dificuldade para traduzir a complexidade do seu método em um caso de negócio claro para clientes e investidores.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>Virada:</h4>
                      <p>Tese do negócio cristalizada em uma proposta irrecusável, focada em resolver uma das maiores dores financeiras e operacionais do setor da saúde.</p>
                    </div>
                    <div className="scenario-part">
                      <h4>Depois:</h4>
                      <p>Clareza estratégica e ativos de comunicação prontos para comprovar o ROI para clientes e investidores, acelerando a tração de mercado.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 5: Como garantimos impacto */}
      <section 
        className="section section-darker modern-section"
        style={{
          backgroundImage: "url('/image/Nos_somos_o_neurotransmissor_do_crescimento_B2B.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
        id="crescimento"
      >
        <div className="section-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center">
            <h2 className="section-title">O valor que você vê precisa ser o mesmo que o mercado enxerga.</h2>
            <div className="section-content">
              <p className="lead-text">
                Nosso método conecta estratégia e execução para alinhar a percepção interna de valor ao
                que o mercado entende — e paga.
              </p>
              <p className="lead-text">
                Acompanhamos métricas como ciclo de vendas, conversão e ROI para que o impacto seja
                comprovado, não presumido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha de pulso elétrico entre seções */}
      <div className="synapse-line"></div>

      {/* Bloco 6: Chamada final */}
      <section 
        className="section section-darker modern-section final-cta"
        id="chamada-final"
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
            <div className="section-content">
              <p className="lead-text">
                Com metodologia proprietária e atuação integrada, ajudamos empresas técnicas a
                transformar complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza
                estratégica e execução comercial de alto nível.
              </p>
              
              <div className="final-ctas">
                <Link href="/contato" className="btn btn-primary btn-modern btn-large btn-white-text">
                  <span>Fale com a Synapse B2B</span>
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link href="/casos-de-uso" className="btn btn-secondary-contrast btn-modern">
                  <Eye className="btn-icon" />
                  <span>Explore nossos Casos de Uso</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

