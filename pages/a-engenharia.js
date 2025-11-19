// pages/a-engenharia.js
// Versão Final: Copy Institucional Aprovada + Card Premium CSS + Sem Caixa Alta

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { 
  ArrowRight, 
  Brain, 
  Target, 
  Rocket, 
  Users, 
  ShieldCheck, 
  GitBranch, 
  Gem 
} from 'lucide-react';

export default function AEngenharia() {
  
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
    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>A Engenharia | Synapse B2B</title>
        <meta name="description" content="A Era da Intuição Comercial Acabou. Conheça a Engenharia de Receita da Synapse B2B." />
      </Head>

      {/* ====================================================================== */}
      {/* HERO SECTION: O MANIFESTO                                              */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Brain size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>

          <h1 className="section-title" style={{textTransform: 'none'}}>
            A Era da Intuição Comercial Acabou.<br/>
            Bem-vindo à Era da Engenharia.
          </h1>
          
          <p className="hero-subheadline wider-on-desktop">
            Não acreditamos em sorte, em "vendedor nato" ou em crescimento por acaso. Acreditamos que Receita é uma ciência exata que pode — e deve — ser projetada, construída e escalada. Nós somos a Synapse B2B.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O CONCEITO: O QUE É ENGENHARIA DE RECEITA?                             */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title" style={{textTransform: 'none'}}>Receita não é consequência. É projeto.</h2>
          
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              Durante décadas, o mercado B2B tratou vendas como uma "arte" subjetiva. O marketing gerava barulho, o comercial improvisava o fechamento, e a diretoria torcia pelo resultado no final do mês.
            </p>
            
            <p className="lead-text" style={{marginBottom: '3rem', color: 'var(--color-primary)', fontWeight: 600}}>
              A Engenharia de Receita rompe com esse modelo ao trazer a precisão técnica para o mundo comercial.
            </p>

            <p className="lead-text">
              Nós tratamos sua operação como uma linha de produção de alto valor:
            </p>
          </div>

          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem'
          }}>
            <div className="premium-card">
               <GitBranch size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
               <h3 style={{fontSize: '1.2rem', color: 'var(--color-heading)', marginBottom: '0.5rem'}}>1. Entrada Controlada</h3>
               <p style={{fontSize: '0.95rem', color: 'var(--color-text)'}}>Definição precisa de quem entra no fluxo (ICP).</p>
            </div>
            <div className="premium-card">
               <Rocket size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
               <h3 style={{fontSize: '1.2rem', color: 'var(--color-heading)', marginBottom: '0.5rem'}}>2. Processo Codificado</h3>
               <p style={{fontSize: '0.95rem', color: 'var(--color-text)'}}>Cada etapa da jornada tem um objetivo claro e mensurável.</p>
            </div>
            <div className="premium-card">
               <Target size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
               <h3 style={{fontSize: '1.2rem', color: 'var(--color-heading)', marginBottom: '0.5rem'}}>3. Saída Previsível</h3>
               <p style={{fontSize: '0.95rem', color: 'var(--color-text)'}}>O resultado deixa de ser uma surpresa e vira uma métrica calculada.</p>
            </div>
          </div>

          <p style={{marginTop: '3rem', fontStyle: 'italic', color: 'var(--color-text)', opacity: 0.8}}>
            Não é mágica. É método aplicado à complexidade das vendas B2B.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* NOSSOS DIFERENCIAIS: POR QUE A SYNAPSE?                                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title" style={{textTransform: 'none'}}>Profundidade Estratégica com Tração Executiva</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>
              Nossa atuação é pautada por três pilares que garantem a transferência de conhecimento e a perenidade dos resultados.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            {/* Diferencial 1 */}
            <div className="premium-card">
              <div style={{marginBottom: '1.5rem'}}><Users size={32} style={{color: 'var(--color-primary)'}} /></div>
              <h3 style={{fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif'}}>01. Senioridade na Trincheira</h3>
              <p style={{fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7}}>
                Acreditamos que a complexidade exige experiência. Na Synapse, a estratégia e a execução são conduzidas por especialistas que vivenciaram ecossistemas de alta performance (Google, Microsoft, Dell). Trazemos essa vivência corporativa aplicada, de forma ágil, à realidade do seu negócio.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="premium-card">
              <div style={{marginBottom: '1.5rem'}}><Brain size={32} style={{color: 'var(--color-primary)'}} /></div>
              <h3 style={{fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif'}}>02. Inteligência Proprietária</h3>
              <p style={{fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7}}>
                Nossas decisões são fundamentadas em dados, não em "achismos". Utilizamos o <strong>Cortex B2B™</strong>, nosso meta-framework de diagnóstico, para decodificar 20 anos de padrões de sucesso e identificar exatamente onde está a alavanca de crescimento da sua empresa.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="premium-card">
              <div style={{marginBottom: '1.5rem'}}><ShieldCheck size={32} style={{color: 'var(--color-primary)'}} /></div>
              <h3 style={{fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif'}}>03. Skin in the Game</h3>
              <p style={{fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.7}}>
                Validamos nossas teses antes de implementá-las. A <strong>AORKIA</strong>, nossa spin-off de Cyber Resilience, foi construída do zero utilizando 100% da nossa Engenharia de Receita. Aplicamos nosso método com nosso próprio capital para garantir que ele funciona no mundo real.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* INSTITUCIONAL: A ORIGEM                                                */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          
          <div className="premium-card" style={{maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem', alignItems: 'center', textAlign: 'center'}}>
            <h2 className="section-title" style={{textTransform: 'none', fontSize: '2rem', marginBottom: '2rem'}}>Nascemos para conectar a Estratégia à Execução.</h2>
            
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '1.5rem'}}>
              A Synapse B2B surgiu de uma observação clara: muitas empresas possuem produtos tecnicamente brilhantes, mas não conseguem traduzir essa competência em domínio de mercado. Vimos fundadores e líderes comerciais com visões poderosas, mas travados pela falta de um processo escalável.
            </p>
            
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '2rem'}}>
              Entendemos que o mercado precisava de mais do que conselhos; precisava de <strong>arquitetura e construção</strong>.
            </p>

            <p style={{fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-heading)', fontStyle: 'italic'}}>
              Somos um laboratório de performance B2B. Somos arquitetos de crescimento.<br/>
              Nosso papel é tirar sua empresa do improviso e colocá-la no controle do seu destino.
            </p>
          </div>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA FINAL                                                              */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none', textTransform: 'none'}}>
            Sua empresa tem um excelente produto,<br/>mas precisa de um método comercial à altura?
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            Chegou a hora de profissionalizar sua geração de receita. Vamos desenhar a engenharia do seu crescimento.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Conhecer a Engenharia de Receita na Prática</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Customizado: Card Premium */}
      <style jsx global>{`
        .premium-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          height: 100%;
        }

        .premium-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2);
        }
      `}</style>
    </>
  );
}