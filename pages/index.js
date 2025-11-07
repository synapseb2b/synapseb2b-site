import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, BrainCircuit, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem } from 'lucide-react'; // Ícones atualizados

// --- Componente de Texto Rotativo (INTOCADO) ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'realmente entende',
    'consegue mensurar',
    'gera valor',
    'resolve o problema',
    'gera escala',
    'projeta retorno'
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, variations.length]);

  return (
    <h1 className="hero-headline hero-headline-two-lines">
      <span className="hero-headline-fixed">O mercado compra o que</span>
      <span 
        className="rotating-text"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {variations[currentIndex]}
      </span>
    </h1>
  );
};

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
        <meta name="description" content="Instalamos o sistema que transforma potencial técnico complexo em receita previsível. Clareza de Valor, Sistema Comercial, Governança de Execução e Ativos que Convertem." />
      </Head>

      {/* ====================================================================== */}
      {/* Bloco 1: Hero Section (CTAs ATUALIZADOS)                             */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <RotatingText />
          <p className="hero-subheadline">
            Seu produto resolve problemas reais, <br/>
            mas se o mercado não consegue entender o valor rapidamente, ele simplesmente não compra.
          </p>
          <div className="hero-ctas">
            {/* --- ATUALIZAÇÃO 3: Adicionada classe btn-cta-pulse --- */}
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span>
              <ArrowRight size={20} />
            </Link>
            {/* --- ATUALIZAÇÃO 3: Adicionada classe btn-cta-pulse --- */}
            <Link href="/como-trabalhamos" className="btn btn-secondary btn-large btn-cta-pulse">
              <span>Conhecer Nossas Soluções</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 2: Os 4 Pilares da Engenharia de Receita (Centralizado por padrão) */}
      {/* ====================================================================== */}
      <section id="engenharia" className="section-solid section-pillars-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Receita previsível não é acidente. É engenharia.</h2>
          <p className="lead-text">
            Quatro pilares integrados. Um resultado: você cresce sem depender de sorte.
          </p>
          <p className="text-center" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
            Empresas B2B que escalam têm uma coisa em comum: elas pararam de improvisar e construíram um sistema.
          </p>
          
          <div className="pillar-grid-revolutionary">
            
            {/* Pilar 1: Clareza de Valor */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Gem size={28} />
                </div>
                <h3 className="pillar-card-title">Clareza de Valor</h3>
                <p className="pillar-card-description">Seu cliente ideal entende em 30 segundos: o que você resolve, por que agora, por que você. Sem jargão técnico. Sem apresentação de 40 slides.</p>
              </div>
            </div>

            {/* Pilar 2: Sistema Comercial */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <GitBranch size={28} />
                </div>
                <h3 className="pillar-card-title">Sistema Comercial</h3>
                <p className="pillar-card-description">Motor completo de receita: estratégia GTM, processo comercial estruturado, pipeline previsível. Você para de depender de indicações e passa a gerar demanda.</p>
              </div>
            </div>

            {/* Pilar 3: Governança de Execução */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="pillar-card-title">Governança de Execução</h3>
                <p className="pillar-card-description">Liderança C-level fracionada operando sua receita. Inteligência sênior sem contrato CLT. Mínimo 3 meses até validar o sistema completo.</p>
              </div>
            </div>

            {/* Pilar 4: Ativos que Convertem */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Layers size={28} />
                </div>
                <h3 className="pillar-card-title">Ativos que Convertem</h3>
                <p className="pillar-card-description">Plataformas digitais, calculadoras de ROI, simuladores, ferramentas que educam e aceleram decisão. Tecnologia trabalhando 24/7 para converter.</p>
              </div>
            </div>

          </div>

           <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            Nós instalamos o sistema que transforma seu potencial técnico em receita previsível através da Engenharia de Receita.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 3: Cases de Sucesso (ATUALIZADO)                                 */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow section-cases-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Três histórias reais. Três resultados tangíveis.</h2>
        </div>
        
        {/* --- ATUALIZAÇÃO 1: Adicionada classe text-center --- */}
        <div className="case-carousel-container reveal-up text-center">
          <div className="case-carousel-track">

            {/* Case 1: Versão Holística */}
            <div className="case-card-revolutionary">
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Versão Holística</h3>
                <span className="case-card-tag-rev">Healthtech</span>
              </div>
              <p><strong>Contexto:</strong> Produto inovador ("Cuidado Farmacêutico Integrativo") que hospitais e investidores não entendiam. Pitch de 15 minutos gerava: "vamos pensar".</p>
              <p><strong>O que fizemos:</strong> Recodificamos a narrativa. "Cuidado" virou "Plataforma que reduz custo de paciente crônico em 5.8x". Focamos no ROI para o CFO, não na metodologia para o médico.</p>
              <p><strong>Resultado tangível:</strong> De "vamos pensar" para "quando começamos?". Posicionamento de categoria criado ("CareOps Integrativo") e tese de investimento pronta.</p>
              <Link href="/cases/versao-holistica" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 2: Exclusiva Engenharias */}
            <div className="case-card-revolutionary">
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Exclusiva Engenharias</h3>
                <span className="case-card-tag-rev">Indústria / Engenharia</span>
              </div>
              <p><strong>Contexto:</strong> Excelência técnica com 100% de dependência de indicações. CEO era o principal vendedor e gargalo do crescimento.</p>
              <p><strong>O que fizemos:</strong> Fundamos a Diretoria de Receita (CRO as a Service) e construímos o motor de demanda do zero: GTM, plataforma digital e prospecção ativa.</p>
              <p><strong>Resultado tangível:</strong> De 100% indicação para um sistema replicável. Playbook de vendas validado e documentado, pronto para escalar o time.</p>
              <Link href="/cases/exclusiva-engenharias" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 3: AORKIA (ATUALIZADO) */}
            <div className="case-card-revolutionary">
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">AORKIA</h3>
                <span className="case-card-tag-rev">Prova de Conceito</span>
              </div>
              <p><strong>Contexto:</strong> Empresa nova em mercado técnico competindo com gigantes globais. Zero histórico, zero clientes. Desafio: provar que nosso próprio método funciona em 45 dias.</p>
              <p><strong>O que fizemos:</strong> Sprint intensivo: marca, narrativa, plataforma digital e parceria estratégica com Keepit (líder global). Recodificamos 'backup imutável' para 'Seu SaaS não faz backup dos seus dados. Quanto custa cada minuto parado?'.</p>
              <p><strong>Resultado tangível:</strong> De zero para Parceiro Global Keepit com primeira venda de 1.200+ usuários em 45 dias. A prova definitiva: nosso método aplicado em nós mesmos.</p>
              {/* --- ATUALIZAÇÃO 2: CTA alterado para Link e texto atualizado --- */}
              <Link href="/cases/aorkia" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 4: Princípio Unificador (Centralizado por padrão)                */}
      {/* ====================================================================== */}
      <section id="principio" className="section-solid section-principle-revolutionary">
        <div className="flowfield-background"></div>

        <div className="container text-center reveal-up">
          <div className="principle-core-block">
            <div className="principle-core-icon">
              <LineChart size={32} />
            </div>
            <h3>Esses três casos provam o mesmo princípio:</h3>
            <p className="principle-core-highlight">Complexidade técnica sem clareza estratégica é potencial desperdiçado.</p>
            <p>Nós traduzimos o que trava seu comprador — dúvida, comparação, análise — em decisão rápida: confiança, urgência, ação.</p>
            <p>Construímos sistemas que tomam decisões complexas no lugar do usuário.</p>
            <p>Lideramos a execução nos primeiros 90 dias porque sabemos que você não pode parar sua operação para implementar um novo processo.</p>
            <p className="font-bold text-white mt-4" style={{color: 'var(--color-heading)', fontSize: '1.1rem'}}>Isso é Engenharia de Receita.</p>
            <div className="section-cta">
              <Link href="/como-trabalhamos" className="btn btn-secondary" style={{backdropFilter: 'blur(10px)'}}>
                <span>Conhecer Nossas Soluções</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 5: Por Que Empresas B2B nos Contratam (Centralizado por padrão)  */}
      {/* ====================================================================== */}
      <section id="por-que-synapse" className="section-solid section-truths-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Três verdades que todo empresário B2B já descobriu:</h2>
          
          <div className="truths-grid-revolutionary">
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Você não tem problema de produto.</h3>
              <p>Sua solução funciona. Clientes validam. O problema: o mercado não entende o valor rápido o suficiente para você crescer de forma previsível.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Crescimento por indicação tem teto.</h3>
              <p>Aquele vendedor estrela. Aquele networking do fundador. Funciona até não funcionar mais. Escalar exige que qualquer vendedor médio execute um processo excelente.</p>
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Você não tem tempo para aprender fazendo.</h3>
              <p>CEO tocando comercial. Time executando o dia a dia. Contratar gerente sem processo validado é apostar caro. Você precisa de quem já fez isso dezenas de vezes.</p>
            </div>

          </div>
        </div>
      </section>

{/* ====================================================================== */}
      {/* Bloco 5.5: Nossas Soluções (Centralizado por padrão)                */}
      {/* ====================================================================== */}
      <section id="solucoes" className="section-solid section-solutions-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Soluções de Engenharia de Receita</h2>
          <p className="lead-text" style={{marginBottom: '4rem'}}>
            Sistemas proprietários que traduzem excelência técnica em tração comercial previsível.
          </p>
          
          <div className="solutions-grid-revolutionary">
            
            {/* Solução 1: Plataformas Digitais */}
            <Link href="/solucoes/plataformas-digitais" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Layers size={28} />
              </div>
              <h3 className="pillar-card-title">Plataformas Digitais</h3>
              <p className="pillar-card-description">Plataformas web que educam o mercado, qualificam leads e convertem autoridade em receita.</p>
            </Link>

            {/* Solução 2: Cortex B2B */}
            <Link href="/solucoes/cortex-b2b" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <BrainCircuit size={28} />
              </div>
              <h3 className="pillar-card-title">Cortex B2B™</h3>
              <p className="pillar-card-description">Sistema de diagnóstico e arquitetura estratégica que decodifica negócios sob lentes de Engenharia de Receita, Neurociência e Orquestração de Escala.</p>
            </Link>

            {/* Solução 3: Match-Maker */}
            <Link href="/solucoes/match-maker" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Users size={28} />
              </div>
              <h3 className="pillar-card-title">Match-Maker B2B</h3>
              <p className="pillar-card-description">Plataforma de inteligência que conecta pessoas certas no momento certo, eliminando networking aleatório com recomendações estratégicas baseadas em dados.</p>
            </Link>

            {/* Solução 4: Apps Estratégicos */}
            <Link href="/solucoes/apps" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Zap size={28} />
              </div>
              <h3 className="pillar-card-title">Apps Estratégicos</h3>
              <p className="pillar-card-description">Ferramentas interativas que aceleram decisão de compra: simuladores, calculadoras e ROI builders.</p>
            </Link>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 6: CTA Final (Centralizado por padrão)                           */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title">A pergunta B2B de US$ 1 milhão:</h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem'}}>
            "Seu produto é genial, mas sua narrativa é confusa. Como você traduz complexidade em receita previsível?"
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Só clareza.
          </p>
        </div>
      </section>
    </>
  );
}