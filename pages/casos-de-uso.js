import { Target, BarChart, Search, TrendingUp, Zap, ArrowRight, CheckCircle, Eye, Users, Award, HelpCircle, Timer, ShieldOff, Unlink, Scaling, Wrench, HeartPulse, Laptop, Layers, Briefcase } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CasosDeUsoPage() {
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
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
          <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 20}s`, animationDuration: `${20 + Math.random() * 20}s` }} />
        ))}
      </div>

      <div className="synapse-line synapse-line-top"></div>
 
      <section ref={heroRef} className="hero modern-hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-headline">E se estivermos descrevendo exatamente o seu desafio?</h1>
            <p className="hero-subheadline">Se ao ler os cenários abaixo você se enxergar, é porque já sabemos como ajudar — e como provar o resultado.</p>
          </div>
        </div>
        
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home_metodologia.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section className="section section-dark modern-section" id="cenarios">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Empresas técnicas que vivem esses cenários…</h2>
            <div className="section-content">
              <p className="lead-text">Você domina o que faz. Seu produto ou serviço é tecnicamente sólido, mas o mercado ainda não enxerga todo o potencial.</p>
              <p className="lead-text" style={{marginBottom: '4rem'}}>Veja se alguma dessas situações soa familiar:</p>
              
              <div className="symptoms-grid">
                <div className="symptom-card glass-card-contrast">
                  <div className="symptom-header"><HelpCircle className="symptom-icon" /><h4>São especialistas, mas têm dificuldade em explicar por que são a melhor escolha.</h4></div>
                  <ul>
                    <li>A apresentação para investidores ou clientes vira um excesso de detalhes técnicos.</li>
                    <li>O diferencial fica diluído no meio de especificações.</li>
                    <li>O cliente entende o que você faz, mas não por que deveria escolher você.</li>
                  </ul>
                </div>
                <div className="symptom-card glass-card-contrast">
                  <div className="symptom-header"><Timer className="symptom-icon" /><h4>Vivem ciclos de vendas longos e perdem o timing.</h4></div>
                  <ul>
                    <li>Conversas promissoras esfriam porque o valor não ficou claro logo no início.</li>
                    <li>O decisor adia a decisão porque não vê urgência.</li>
                    <li>A concorrência chega com uma narrativa mais simples e leva o contrato.</li>
                  </ul>
                </div>
                <div className="symptom-card glass-card-contrast">
                  <div className="symptom-header"><ShieldOff className="symptom-icon" /><h4>Veem concorrentes menos preparados fechando contratos.</h4></div>
                  <ul>
                    <li>Você sabe que o concorrente não entrega o mesmo nível de solução.</li>
                    <li>Mas ele conseguiu falar a língua do cliente.</li>
                    <li>E isso foi suficiente para ganhar espaço — e receita — que poderia ser sua.</li>
                  </ul>
                </div>
                <div className="symptom-card glass-card-contrast">
                  <div className="symptom-header"><Scaling className="symptom-icon" /><h4>Perdem oportunidades porque o valor percebido não supera o preço.</h4></div>
                  <ul>
                    <li>O cliente compara apenas pelo custo, porque não entendeu o impacto que você gera.</li>
                    <li>Suas reuniões viram discussões de desconto, e não de ROI.</li>
                    <li>Negócios de alto valor ficam de fora do funil por falta de clareza comercial.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>
      
      <section className="section section-darker modern-section" id="aplicacao">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Como aplicamos estratégia e execução em diferentes mercados.</h2>
            <div className="section-content">
              <div className="application-grid">
                
                <div className="application-card glass-card-contrast">
                  <div className="application-header"><Wrench className="application-icon" /><h3>Engenharia & Facilities</h3><span className="case-type-tag">Caso Real</span></div>
                  <div className="application-body">
                    <p><strong>Desafio:</strong> expertise técnica consolidada, mas dificuldade em comunicar valor para decisores estratégicos.</p>
                    <p><strong>Ação:</strong> diagnóstico profundo, reposicionamento e plano de go-to-market direcionado.</p>
                    <p><strong>Status:</strong> implementação em andamento, já com sinais iniciais de maior engajamento e novas conversas comerciais.</p>
                  </div>
                </div>

                <div className="application-card glass-card-contrast">
                  <div className="application-header"><HeartPulse className="application-icon" /><h3>Health & Wellness B2B</h3><span className="case-type-tag">Caso Real</span></div>
                  <div className="application-body">
                    <p><strong>Desafio:</strong> modelo inovador pouco compreendido por empresas.</p>
                    <p><strong>Ação:</strong> criação de proposta de valor clara, arquitetura de ativos estratégicos e plano de entrada no mercado corporativo.</p>
                    <p><strong>Status:</strong> primeiras ativações gerando mais clareza na mensagem e novas oportunidades de abordagem.</p>
                  </div>
                </div>

                <div className="application-card glass-card-contrast">
                  <div className="application-header"><Layers className="application-icon" /><h3>Tech & SaaS</h3><span className="case-type-tag">Modelo Inspirador</span></div>
                  <div className="application-body">
                    <p><strong>Desafio típico:</strong> solução tecnológica avançada, mas sem mensagem que traduza o impacto para decisores não técnicos.</p>
                    <p><strong>Abordagem:</strong> mapeamento de ICP real, narrativa de valor conectada ao ROI e criação de kit de vendas escalável.</p>
                    <p><strong>Resultado esperado:</strong> aumento de conversão nas primeiras reuniões e redução de churn por alinhamento de expectativas.</p>
                  </div>
                </div>

                <div className="application-card glass-card-contrast">
                  <div className="application-header"><Briefcase className="application-icon" /><h3>Serviços Profissionais</h3><span className="case-type-tag">Modelo Inspirador</span></div>
                  <div className="application-body">
                    <p><strong>Desafio típico:</strong> alto nível técnico e credibilidade, mas dificuldade em transformar reputação em contratos recorrentes.</p>
                    <p><strong>Abordagem:</strong> reposicionamento como autoridade de mercado, integração marketing-vendas e processos de prospecção ativa.</p>
                    <p><strong>Resultado esperado:</strong> funil previsível com pipeline constante de oportunidades qualificadas.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="synapse-line"></div>

      <section className="section section-dark modern-section" id="caminho">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Do diagnóstico à receita: o caminho para acelerar o seu crescimento.</h2>
            <div className="section-content" style={{maxWidth: '800px', margin: '0 auto'}}>
              <p className="lead-text">Em todos os cenários, a base é a mesma: <strong>Diagnóstico Estratégico</strong>, <strong>Decodificação de Mercado</strong> e <strong>Engenharia de Receita</strong>.</p>
              <p className="lead-text">O que muda é a forma como adaptamos cada fase à realidade do negócio, usando dados, benchmarks e métricas de impacto para garantir que cada ação tenha efeito mensurável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section className="section section-darker modern-section final-cta" id="chamada-final">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Então o próximo caso pode ser o seu.</h2>
            <div className="section-content">
              <p className="lead-text">Quer entender como o GTM Ignition™ se aplica no seu negócio?</p>
              <div className="final-ctas">
                <Link href="/contato" className="btn btn-primary">
                  <span>Agendar consulta estratégica</span>
                  <ArrowRight className="btn-icon" />
                </Link>
                <Link href="/metodologia" className="btn btn-secondary-contrast">
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
           ESTILOS PARA A NOVA PÁGINA DE CASOS DE USO
           ========================================================================== */

        /* Seção "Empresas técnicas que..." */
        .symptoms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        .symptom-card {
          padding: 2.5rem;
          text-align: left;
        }
        .symptom-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .symptom-icon {
          width: 32px;
          height: 32px;
          color: var(--accent-color);
          flex-shrink: 0;
        }
        .symptom-header h4 {
          font-size: 1.2rem;
          color: var(--base-color);
          margin-bottom: 0;
        }
        .symptom-card ul {
          list-style: none;
          padding-left: 0;
        }
        .symptom-card ul li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 0.75rem;
          color: var(--base-color-light);
        }
        .symptom-card ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-color);
        }

        /* Seção "Casos reais e modelos" */
        .application-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .application-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }
        .application-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .application-icon {
          width: 32px;
          height: 32px;
          color: var(--accent-color);
        }
        .application-header h3 {
          font-size: 1.3rem;
          color: var(--base-color);
          margin: 0;
          flex-grow: 1;
        }
        .case-type-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          background-color: var(--accent-color);
          color: var(--primary-color);
          white-space: nowrap;
        }
        .application-body p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--base-color-light);
        }
        .application-body p strong {
          color: var(--base-color);
        }
        
      `}</style>
    </>
  );
}