// pages/a-engenharia.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

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
  GitBranch 
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

        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
            <Brain size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>

          <h1 className="hero-headline">
            A Era da Intuição Comercial Acabou.<br/>
            Bem-vindo à Era da Engenharia.
          </h1>
          
          <p className="hero-subheadline lead-text">
            Não acreditamos em sorte, em "vendedor nato" ou em crescimento por acaso. Acreditamos que Receita é uma ciência exata que pode — e deve — ser projetada, construída e escalada. Nós somos a Synapse B2B.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* O CONCEITO: O QUE É ENGENHARIA DE RECEITA?                             */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Receita não é consequência. É projeto.</h2>
          
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

          <div className="pillar-grid-revolutionary">
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><GitBranch size={32} /></div>
               <h3 className="pillar-card-title">1. Entrada Controlada</h3>
               <p className="pillar-card-description">Definição precisa de quem entra no fluxo (ICP).</p>
            </div>
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><Rocket size={32} /></div>
               <h3 className="pillar-card-title">2. Processo Codificado</h3>
               <p className="pillar-card-description">Cada etapa da jornada tem um objetivo claro e mensurável.</p>
            </div>
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><Target size={32} /></div>
               <h3 className="pillar-card-title">3. Saída Previsível</h3>
               <p className="pillar-card-description">O resultado deixa de ser uma surpresa e vira uma métrica calculada.</p>
            </div>
          </div>

          <p style={{marginTop: '4rem', fontStyle: 'italic', color: 'var(--color-text-muted)', opacity: 0.8}}>
            Não é mágica. É método aplicado à complexidade das vendas B2B.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* NOSSOS DIFERENCIAIS: POR QUE A SYNAPSE?                                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Profundidade Estratégica com Tração Executiva</h2>
          <p className="lead-text">
            Nossa atuação é pautada por três pilares que garantem a transferência de conhecimento e a perenidade dos resultados.
          </p>

          <div className="pillar-grid-revolutionary">
            
            {/* Diferencial 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Users size={32} /></div>
              <h3 className="pillar-card-title">01. Senioridade na Trincheira</h3>
              <p className="pillar-card-description">
                Acreditamos que a complexidade exige experiência. Na Synapse, a estratégia e a execução são conduzidas por especialistas que vivenciaram ecossistemas de alta performance (Google, Microsoft, Dell). Trazemos essa vivência corporativa aplicada, de forma ágil, à realidade do seu negócio.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Brain size={32} /></div>
              <h3 className="pillar-card-title">02. Inteligência Proprietária</h3>
              <p className="pillar-card-description">
                Nossas decisões são fundamentadas em dados, não em "achismos". Utilizamos o <strong>Cortex B2B™</strong>, nosso meta-framework de diagnóstico, para decodificar 20 anos de padrões de sucesso e identificar exatamente onde está a alavanca de crescimento da sua empresa.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title">03. Skin in the Game</h3>
              <p className="pillar-card-description">
                Validamos nossas teses antes de implementá-las. A <strong>AORKIA</strong>, nossa spin-off de Cyber Resilience, foi construída do zero utilizando 100% da nossa Engenharia de Receita. Aplicamos nosso método com nosso próprio capital para garantir que ele funciona no mundo real.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* INSTITUCIONAL: A ORIGEM                                                */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          {/* Card Largo Centralizado */}
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 className="section-title">Nascemos para conectar a Estratégia à Execução.</h2>
            
            <p className="lead-text" style={{marginBottom: '1.5rem'}}>
              A Synapse B2B surgiu de uma observação clara: muitas empresas possuem produtos tecnicamente brilhantes, mas não conseguem traduzir essa competência em domínio de mercado. Vimos fundadores e líderes comerciais com visões poderosas, mas travados pela falta de um processo escalável.
            </p>
            
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              Entendemos que o mercado precisava de mais do que conselhos; precisava de <strong>arquitetura e construção</strong>.
            </p>

            <p style={{fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-heading)', fontStyle: 'italic', marginTop: '1rem'}}>
              Somos um laboratório de performance B2B. Somos arquitetos de crescimento.<br/>
              Nosso papel é tirar sua empresa do improviso e colocá-la no controle do seu destino.
            </p>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA FINAL                                                              */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Sua empresa tem um excelente produto,<br/>mas precisa de um método comercial à altura?
          </h2>
          <p className="lead-text">
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
    </>
  );
}