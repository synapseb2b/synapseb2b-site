// pages/index.js
// Versão Final Limpa: Copy Estratégica (Escada de ICP) + Ajustes de Layout

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem } from 'lucide-react';

/* O componente RotatingText não é usado nesta versão da copy */
const RotatingText = () => {};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <title>Synapse B2B | Engenharia de Receita para Empresas B2B</title>
        <meta name="description" content="Transformamos crescimento por indicação em receita previsível. O método que tira sua empresa do improviso e coloca você no controle." />
      </Head>

{/* ====================================================================== */}
      {/* Seção 1: Hero Section                                                */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          {/* HEADLINE */}
          <h1 className="hero-headline">
            Engenharia de Receita para Empresas B2B
            <br/>
            que Precisam de Crescimento Previsível
          </h1>
          
          {/* SUBHEADLINE AJUSTADA */}
          <p className="hero-subheadline wider-on-desktop">
            Transformamos operações comerciais dependentes de improviso e esforço manual em máquinas de receita previsível. Instalamos o método completo — da estratégia à execução — para sua empresa escalar com governança.
          </p>
          
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/a-engenharia" className="btn btn-secondary btn-large">
              <span>Conhecer a Engenharia de Receita</span>
            </Link>
          </div>

          {/* Barra de Confiança (Trust Bar) */}
          <div className="trust-bar reveal-up">
            <p>Método forjado em ecossistemas de alta performance:</p>
            <div className="trust-bar-logos">
              <Image src="/logo/logo-google.png" alt="Google" width={100} height={32} />
              <Image src="/logo/logo-microsoft.png" alt="Microsoft" width={100} height={32} />
              <Image src="/logo/logo-dell.png" alt="Dell" width={100} height={32} />
              <Image src="/logo/logo-totvs.png" alt="TOTVS" width={100} height={32} />
              <Image src="/logo/logo-keepit.png" alt="Keepit" width={100} height={32} />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 2: O Diagnóstico Rápido (Sintomas)                             */}
      {/* ====================================================================== */}
      <section id="sintomas" className="section-solid section-truths-revolutionary">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Você reconhece estes sintomas?</h2>
          
          <div className="truths-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '4rem'}}>
            
            {/* Sintoma 1 */}
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Esforço Máximo, Resultado Instável</h3>
              <p>Você contrata ferramentas, testa canais e exige mais do time, mas o ponteiro não move na mesma proporção. O mercado não percebe seu valor real e cada venda exige um esforço desproporcional de convencimento porque falta posicionamento, não esforço.</p>
            </div>
            
            {/* Sintoma 2 */}
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Investimento Sem Rastreabilidade</h3>
              <p>Você assina os cheques de marketing e vendas, mas não sabe dizer qual real investido trouxe o contrato assinado. O ciclo de vendas não encurta e a eficiência cai à medida que você tenta escalar. O problema é a ausência de Engenharia de Receita no processo comercial.</p>
            </div>

            {/* Sintoma 3 */}
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Dependência de "Talento" vs. Processo</h3>
              <p>O faturamento depende da performance individual de vendedores sêniores (ou dos sócios). Se eles saírem, a receita cai. O crescimento está alicerçado em conhecimento tácito (na cabeça das pessoas), não em um playbook validado e transferível.</p>
            </div>
          </div>

          {/* Conclusão da Seção 2 */}
          <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '3rem auto 0', fontStyle: 'italic', fontWeight: 500, color: 'var(--color-heading)' }}>
            Você não precisa de mais vendedores. Você precisa de um sistema de vendas. <br/>A diferença entre uma empresa estagnada e uma scale-up é a substituição do talento individual pelo método institucional.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 3: A Engenharia de Receita (Os 4 Pilares)                      */}
      {/* ====================================================================== */}
      <section id="engenharia-de-receita" className="section-solid section-pillars-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Método: Os 4 Pilares da Engenharia de Receita</h2>
          <p className="lead-text">
            A estrutura necessária para transformar vendas complexas em processo repetível.
          </p>
          
          <div className="pillar-grid-revolutionary">
            
            {/* Pilar 1: Clareza de Valor */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Gem size={28} />
                </div>
                <h3 className="pillar-card-title">Clareza de Valor</h3>
                <p className="pillar-card-description">Decodificamos sua competência técnica em autoridade de mercado. Seu cliente ideal precisa entender o impacto financeiro que você gera em 30 segundos, sem depender de reuniões técnicas intermináveis.</p>
              </div>
            </div>

            {/* Pilar 2: Arquitetura Comercial */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <GitBranch size={28} />
                </div>
                <h3 className="pillar-card-title">Arquitetura Comercial</h3>
                <p className="pillar-card-description">O blueprint do seu motor de receita. Definimos processos, canais e rituais de gestão para que a meta seja batida pelo processo, e não pelo heroísmo de fim de mês.</p>
              </div>
            </div>

            {/* Pilar 3: Governança de Execução */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="pillar-card-title">Governança de Execução</h3>
                <p className="pillar-card-description">Estratégia sem execução é alucinação. Atuamos com liderança sênior na linha de frente para garantir que o playbook seja seguido, os dados sejam limpos e a cultura de alta performance seja instalada.</p>
              </div>
            </div>

            {/* Pilar 4: Ativos que Convertem */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Layers size={28} />
                </div>
                <h3 className="pillar-card-title">Ativos que Convertem</h3>
                <p className="pillar-card-description">Transformamos sua presença digital em uma ferramenta de vendas 24/7. Educamos o comprador e provamos valor técnico antes mesmo da primeira reunião, encurtando ciclos de negociação.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 4: Soluções de Engenharia de Receita                           */}
      {/* ====================================================================== */}
      <section id="solucoes" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Como podemos atuar no seu negócio?</h2>
          <p className="lead-text text-center" style={{maxWidth: '700px', margin: '0 auto 4rem'}}>
            Do diagnóstico estratégico à gestão interina do comercial.
          </p>

          <div className="solutions-2col-grid">
            
            {/* Coluna 1: Inteligência & Estratégia */}
            <div className="solution-column-card">
              <h3 className="solution-column-title">FRENTE 1: INTELIGÊNCIA & ESTRATÉGIA</h3>
              <p className="solution-column-desc">Onde desenhamos a arquitetura do seu motor de receita.</p>
              
              <ul className="solution-column-list">
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Diagnóstico Cortex B2B™</strong>
                  <span>O "Raio-X" da sua maturidade comercial. Uma análise profunda sob 5 lentes para identificar gargalos de eficiência e alavancas de crescimento imediato.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Direcionamento estratégico antes de novas rodadas de investimento ou expansão.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Sob consulta (Diagnóstico Estratégico).</span>
                  <Link href="/solucoes/cortex-b2b" passHref>
                    <a className="solution-cta">Conhecer o Cortex B2B™ <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Sprint de Validação Comercial</strong>
                  <span>O que é: Teste de novas teses, produtos ou mercados em 30 dias. Validamos a demanda com dados reais antes de você comprometer estrutura fixa (OPEX).</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Lançamento de novos produtos, entrada em novos segmentos ou pivô de modelo de negócios.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Investimento inicial (upfront) + % sobre receita nova (Success Fee).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Agendar diagnóstico <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Go-To-Market Completo</strong>
                  <span>O que é: A arquitetura completa do seu motor comercial: posicionamento, ICP, proposta de valor, canais, pricing e retenção. Usamos o meta-framework Cortex B2B™ para entregar o blueprint estratégico que orienta toda a operação.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Empresas com crescimento errático, CAC alto, ciclo longo ou que precisam profissionalizar a forma de ir ao mercado.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Investimento inicial (upfront) + % sobre receita nova (Success Fee).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Ver metodologia completa <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Diretoria de Receita como Serviço</strong>
                  <span>O que é: Alugue um Executivo Sênior. Injetamos a visão e a governança de um Diretor de multinacional na sua operação, liderando o time para instalar o método na prática.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Profissionalizar a gestão, reduzir a dependência operacional dos sócios e instalar cultura de alta performance.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Fee mensal fixo + % sobre receita nova (Success Fee).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Entender modelo de Parceria <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20}