import { ArrowRight, Eye, Gem, Trophy, LineChart, Hourglass, Megaphone, KeyRound, RefreshCw, ArrowRightCircle } from 'lucide-react';
import Head from 'next/head';
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
      }, { threshold: 0.1, rootMargin: '50px' }
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
 
      <section ref={heroRef} className="hero modern-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-headline">E se estivermos descrevendo exatamente o seu desafio?</h1>
            <p className="hero-subheadline">Se ao ler os cenários abaixo você se enxergar, é porque já sabemos como ajudar — e como provar o resultado.</p>
          </div>
        </div>
        <div className="hero-video-container">
          <div className="hero-video-overlay"></div>
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="synapse-line"></div>

      <section className="section section-dark modern-section" id="cenarios-b2b">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="section-title">Empresas B2B que vivem esses cenários…</h2>
            <div className="section-content" style={{ maxWidth: '1000px' }}>
              <p className="lead-text">Você domina o que faz. Seu produto ou serviço é tecnicamente sólido, mas o mercado ainda não enxerga todo o potencial. Veja se alguma dessas situações soa familiar — e se projete no próximo passo: resolvê-las.</p>
              
              <div className="challenges-grid-new">
                {/* Card 1 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><Gem className="card-icon" /></div>
                  <p className="challenge-text">Falam mais sobre o produto do que sobre o valor que entregam.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Transformamos jargão técnico em mensagens que conquistam atenção e fecham negócios.</p>
                </div>
                {/* Card 2 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><Trophy className="card-icon" /></div>
                  <p className="challenge-text">Perdem negócios para concorrentes com soluções inferiores.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Posicionamos sua solução de forma irrecusável, eliminando comparações puramente de preço.</p>
                </div>
                {/* Card 3 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><LineChart className="card-icon" /></div>
                  <p className="challenge-text">Investem em marketing e vendas sem retorno previsível.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Criamos um motor de receita previsível, com métricas que provam o ROI.</p>
                </div>
                {/* Card 4 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><Hourglass className="card-icon" /></div>
                  <p className="challenge-text">Enfrentam ciclos de venda longos e desgastantes.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Reduzimos o tempo de decisão, encurtando o caminho entre interesse e contrato assinado.</p>
                </div>
                {/* Card 5 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><Megaphone className="card-icon" /></div>
                  <p className="challenge-text">Ficam presas no “boca a boca” para crescer.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Abrimos canais consistentes de aquisição e expansão, para crescimento escalável.</p>
                </div>
                {/* Card 6 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><KeyRound className="card-icon" /></div>
                  <p className="challenge-text">Perdem oportunidades porque não falam a língua do decisor.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Ajustamos a narrativa para que seu valor seja percebido e priorizado no comitê de compras.</p>
                </div>
                {/* Card 7 */}
                <div className="challenge-card-new glass-card-contrast">
                  <div className="card-icon-wrapper"><RefreshCw className="card-icon" /></div>
                  <p className="challenge-text">Sentem que estão correndo, mas sem sair do lugar.</p>
                  <p className="solution-text"><ArrowRightCircle className="solution-arrow" />Organizamos esforços, alinhamos equipes e eliminamos desperdício no funil comercial.</p>
                </div>
              </div>

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
              <p className="lead-text" style={{marginBottom: '2rem'}}>Quer entender como o GTM Ignition™ se aplica no seu negócio?</p>
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
        .challenges-grid-new {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        .challenges-grid-new .challenge-card-new:last-child {
          grid-column: 1 / -1; /* Faz o último item ocupar todas as colunas da linha */
          justify-self: center; /* Centraliza o item horizontalmente */
          width: 100%; /* Garante que o max-width seja respeitado */
          max-width: 400px; /* Define uma largura máxima para o card não esticar demais */
        }    
        .challenge-card-new {
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 2.5rem;
          min-height: 350px;
        }
        .card-icon-wrapper {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem auto;
          border-radius: 50%;
          background: rgba(0, 150, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-icon {
          width: 30px;
          height: 30px;
          color: var(--accent-color);
        }
        .challenge-text {
          font-size: 1.1rem;
          line-height: 1.6;
          flex-grow: 1; /* Empurra a solução para baixo */
          margin-bottom: 2rem;
        }
        .solution-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--base-color);
          background-color: rgba(0, 150, 129, 0.2);
          padding: 1rem;
          border-radius: 8px;
          line-height: 1.5;
        }
        .solution-arrow {
          flex-shrink: 0;
          color: var(--accent-color);
          width: 1.2rem;
          height: 1.2rem;
        }
      `}</style>
    </>
  );
}