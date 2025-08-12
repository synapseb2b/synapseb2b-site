import { Target, BarChart, Search, TrendingUp, Zap, ArrowRight, CheckCircle, Eye, Users, Award, HelpCircle, Timer, ShieldOff, Unlink, Scaling, Wrench, HeartPulse, Laptop } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CasosDeUsoPage() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  return (
    <>
      <Head>
        <title>Casos de Uso – GTM Ignition™ aplicado em empresas B2B</title>
        <meta name="description" content="Veja como o GTM Ignition™ transforma desafios B2B em crescimento previsível, com clareza comercial e métricas de impacto reais." />
        <meta property="og:title" content="Casos de Uso – GTM Ignition™ aplicado em empresas B2B" />
        <meta property="og:description" content="Veja como o GTM Ignition™ transforma desafios B2B em crescimento previsível, com clareza comercial e métricas de impacto reais." />
        <link rel="canonical" href="https://synapseb2b.com/casos-de-uso" />
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
              E se estivermos descrevendo exatamente o seu desafio?
            </h1>
            <p className="hero-subheadline">
              Se ao ler os cenários abaixo você se enxergar, é porque já sabemos como ajudar — e como provar o resultado.
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
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="para-quem"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Empresas técnicas que…</h2>
            <div className="section-content">
              <div className="challenges-grid">
                <div className="challenge-item glass-card-contrast">
                  {/* CORREÇÃO FINAL: Ícone inválido substituído por um nome válido da biblioteca. */}
                  <HelpCircle className="challenge-icon" />
                  <p>São especialistas no que fazem, mas têm dificuldade de explicar por que são a melhor escolha.</p>
                </div>
                <div className="challenge-item glass-card-contrast">
                  <Timer className="challenge-icon" />
                  <p>Vivem ciclos de vendas longos e perdem timing de oportunidade.</p>
                </div>
                <div className="challenge-item glass-card-contrast">
                  <ShieldOff className="challenge-icon" />
                  <p>Veem concorrentes menos preparados fechando contratos estratégicos.</p>
                </div>
                <div className="challenge-item glass-card-contrast">
                  <Unlink className="challenge-icon" />
                  <p>Sentem desalinhamento entre marketing, vendas e áreas técnicas.</p>
                </div>
                <div className="challenge-item glass-card-contrast">
                  <Scaling className="challenge-icon" />
                  <p>Perdem oportunidades porque o valor percebido não supera o preço.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>
      
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
                      <p>Competência técnica robusta e clientes de peso, mas enfrentavam uma "invisibilidade digital" em um mercado onde a confiança é construída antes da primeira reunião. </p>
                    </div>
                    <div className="scenario-part">
                      <h4>Virada:</h4>
                      <p> Autoridade offline transformada em um sinalizador online de credibilidade e valor. Adoção de métricas de ROI, eficiência e mitigação de risco.</p>
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
                    <h3>Healthtech</h3>
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
      
      <div className="synapse-line"></div>

      <section 
        className="section section-dark modern-section"
        id="onde-entra-gtm"
      >
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Da leitura à ação</h2>
            <div className="section-content" style={{maxWidth: '800px', margin: '0 auto'}}>
              <p className="lead-text">
                Em todos esses cenários, a base foi a mesma: <strong>Diagnóstico Estratégico</strong>, <strong>Decodificação de Mercado</strong> e <strong>Engenharia de Receita</strong>.
              </p>
              <p className="lead-text">
                O que muda é a forma como adaptamos cada fase à realidade do negócio, usando dados, benchmarks e métricas de impacto para garantir que cada ação tenha efeito mensurável.
              </p>
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
            <h2 className="section-title">Então o próximo caso pode ser o seu</h2>
            <div className="section-content">
              <div className="final-ctas">
                <Link href="/contato" className="btn btn-primary btn-modern btn-large btn-white-text">
                  <span>Quero entender como o GTM Ignition™ se aplica ao meu negócio</span>
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link href="/metodologia" className="btn btn-secondary-contrast btn-modern">
                  <Eye className="btn-icon" />
                  <span>Ver a metodologia completa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* ==========================================================================
           ESTILOS PARA A PÁGINA DE CASOS DE USO
           ========================================================================== */

        /* Seção "Para quem é" */
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .challenge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 2.5rem 2rem;
          text-align: center;
        }
        .challenge-icon {
          width: 50px;
          height: 50px;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
        }

        /* Seção "Cenários" */
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .scenario-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .scenario-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 255, 224, 0.2);
          padding-bottom: 1.5rem;
        }
        .scenario-icon {
          width: 40px;
          height: 40px;
          color: var(--accent-color);
        }
        .scenario-header h3 {
          font-size: 1.4rem;
          color: var(--base-color);
        }
        .scenario-body {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .scenario-part h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          color: var(--accent-color);
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        .scenario-part p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--base-color-light);
        }
      `}</style>
    </>
  );
}