import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem } from 'lucide-react';

// --- Componente de Texto Rotativo (ATUALIZADO) ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'realmente entende',
    'resolve o problema',
    'gera valor',
    'gera escala',
    'consegue mensurar',
    'projeta retorno'
  ]; //

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
        <meta name="description" content="Instalamos a engenharia que transforma potencial técnico complexo em receita previsível. Clareza de Valor, Sistema Comercial, Governança de Execução e Ativos que Convertem." />
      </Head>

{/* ====================================================================== */}
      {/* Bloco 1: Hero Section (ATUALIZADO)                                  */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <RotatingText /> {/* */}
          <p className="hero-subheadline">
            O produto (ou serviço) que você oferece é genial, mas o mercado o considera confuso. <br/>Como você traduz essa complexidade em receita previsível?
          </p> {/* */}
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> {/* */}
              <ArrowRight size={20} />
            </Link>
            <a href="#engenharia-de-receita" className="btn btn-secondary btn-large btn-cta-pulse">
              <span>Conhecer a Engenharia de Receita</span> {/* */}
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 2: O Diagnóstico Rápido (Sintomas) (NOVA SEÇÃO)                */}
      {/* ====================================================================== */}
      <section id="sintomas" className="section-solid section-truths-revolutionary">
        <div className="container reveal-up">
          <p className="lead-text text-center" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
            Se a resposta não é simples, você não está sozinho. Esse desafio de traduzir valor em receita se manifesta em cenários muito práticos.
          </p> {/* */}
          <h2 className="section-title text-center">Você certamente reconhece um destes sintomas:</h2> {/* */}
          
          <div className="truths-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">A Armadilha da Indicação</h3>
              <p>Você cresce dependendo 100% do networking da liderança, um modelo que validou seu negócio, mas que agora atingiu o teto e exige um método replicável para escalar.</p> {/* */}
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">A "Bala de Prata" que Falhou</h3>
              <p>Você já queimou caixa contratando SDRs, trocando gerentes e investindo em outbound, apenas para descobrir que táticas aleatórias sem uma estratégia central resultam em custo fixo alto e pipeline vazio.</p> {/* */}
            </div>

            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">O Site “Bonito” (Que Não Vende)</h3>
              <p>Você fez um investimento importante em um novo site que não gera uma única reunião qualificada, funcionando como um cartão de visitas caro ao invés de um motor de receita que educa e converte 24/7.</p> {/* */}
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">4.</span>
              <h3 className="truth-card-title">A Oportunidade Parada</h3>
              <p>Você possui uma nova linha de serviço ou produto genial que não consegue validar, pois o mercado não entende e o time comercial não sabe vender, deixando sua próxima grande fonte de receita travada.</p> {/* */}
            </div>
            
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">5.</span>
              <h3 className="truth-card-title">CEO Preso no Operacional</h3>
              <p>Você ainda é o principal vendedor, estrategista e "apagador de incêndios" do negócio, um gargalo que o impede de pensar a operação por estar preso na operação, sem um braço de execução sênior.</p> {/* */}
            </div>

          </div>

          <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '3rem auto 0', fontStyle: 'italic' }}>
            Esses sintomas não são falhas táticas. São a prova de que falta um sistema. <br/> Para parar de improvisar, você precisa de engenharia.
          </p> {/* */}
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 3: A Engenharia de Receita (Os 4 Pilares) (ATUALIZADO)         */}
      {/* ====================================================================== */}
      <section id="engenharia-de-receita" className="section-solid section-pillars-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Receita previsível não é acidente. <br/>
          É Engenharia.</h2> {/* */}
          <p className="lead-text">
            Quatro pilares integrados. Um resultado: você cresce sem depender de sorte.
          </p> {/* */}
          
          <div className="pillar-grid-revolutionary">
            
            {/* Pilar 1: Clareza de Valor */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Gem size={28} />
                </div>
                <h3 className="pillar-card-title">Clareza de Valor</h3>
                <p className="pillar-card-description">Você garante que seu cliente ideal entenda o que você resolve, por que agora e por que você em 30 segundos, sem jargão técnico ou 40 slides.</p> {/* */}
              </div>
            </div>

            {/* Pilar 2: Sistema Comercial */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <GitBranch size={28} />
                </div>
                <h3 className="pillar-card-title">Sistema Comercial</h3>
                <p className="pillar-card-description">Você para de depender de indicações e instala um motor de demanda completo, baseado em Estratégia GTM, processo estruturado e pipeline previsível.</p> {/* */}
              </div>
            </div>

            {/* Pilar 3: Governança de Execução */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="pillar-card-title">Governança de Execução</h3>
                <p className="pillar-card-description">Você injeta inteligência sênior (CRO as a Service) para garantir a execução da estratégia, pagando uma fração do investimento de um C-level CLT.</p> {/* */}
              </div>
            </div>

            {/* Pilar 4: Ativos que Convertem */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Layers size={28} />
                </div>
                <h3 className="pillar-card-title">Ativos que Convertem</h3>
                <p className="pillar-card-description">Você implementa plataformas digitais, calculadoras de ROI e simuladores que educam o comprador e aceleram a decisão, colocando a tecnologia para converter 24/7.</p> {/* */}
              </div>
            </div>

          </div>

           <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            Nós instalamos a engenharia que transforma seu potencial técnico em receita previsível.
          </p> {/* */}
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 4: Soluções de Engenharia de Receita (2 Colunas) (SUBSTITUÍDO) */}
      {/* ====================================================================== */}
      <section id="solucoes-estrategicas" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Soluções de Engenharia de Receita</h2> {/* */}
          <p className="lead-text text-center" style={{maxWidth: '700px', margin: '0 auto 4rem'}}>
            Duas frentes integradas. Múltiplas formas de entrada.
          </p> {/* */}

          <div className="solutions-2col-grid">
            {/* Coluna 1: Inteligência & Estratégia */}
            <div className="solution-column-card">
              <h3 className="solution-column-title">Inteligência & Estratégia</h3>
              <p className="solution-column-desc">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p> {/* */}
              <ul className="solution-column-list">
                <li>
                  <strong>Sprint de Validação Comercial</strong>
                  <span>Valide demanda real antes de construir tese comercial. Testamos ofertas, ICP e pitch de vendas em 30 dias. Você decide escalar baseado em dados de campo, não intuição ou esperança.</span> {/* */}
                </li>
                <li>
                  <strong>Go-To-Market Completo</strong>
                  <span>Arquitetura do zero: posicionamento, ICP, proposta de valor, canais de aquisição, modelo de vendas, pricing, estratégia de retenção. Blueprint que guia cada decisão comercial dos próximos 18 meses.</span> {/* */}
                </li>
                <li>
                  <strong>Diretoria de Receita (CRO as a Service)</strong>
                  <span>Liderança C-level fracionada. Injetamos inteligência sênior na sua operação sem custo de contratação. Executamos por 90-120 dias, entregamos o playbook validado. Mínimo 1 ano e performance sobre receita gerada.</span> {/* */}
                </li>
                <li>
                  <strong>Advisory Board</strong>
                  <span>Decisões estratégicas de alto impacto exigem visão externa de quem já executou. Atuamos como conselho sob demanda para: novos mercados, pivots, preparação para investimento, parcerias estratégicas.</span> {/* */}
                </li>
              </ul>
            </div>

            {/* Coluna 2: Construção de Ativos Digitais */}
            <div className="solution-column-card">
              <h3 className="solution-column-title">Construção de Ativos Digitais</h3>
              <p className="solution-column-desc">Onde transformamos estratégia em ferramentas que geram receita enquanto você dorme.</p> {/* */}
              <ul className="solution-column-list">
                <li>
                  <strong>Plataformas de Aceleração de Receita</strong>
                  <span>Não construímos sites. Construímos plataformas digitais estratégicas: 30% institucional, 70% engenharia de receita. Seu ativo digital educa, nutre e converte 24/7.</span> {/* */}
                  <span className="solution-examples"><strong>Exemplos:</strong> exclusivaengenharias.com, versaoholistica.com.br</span> {/* */}
                  <span className="solution-examples"><strong>O que inclui:</strong> Arquitetura de conversão, Copywriting, Jornadas por perfil, Integração com CRM.</span> {/* */}
                </li>
                <li>
                  <strong>Ferramentas Estratégicas de Conversão</strong>
                  <span>Construímos ativos proprietários que se tornam o centro da sua argumentação de valor: calculadoras de ROI, simuladores, match-makers, diagnósticos. Ferramentas que provam sua autoridade e aceleram decisão.</span> {/* */}
                  <span className="solution-examples"><strong>Exemplos:</strong> Synapse B2B Match Maker, Simulador de Orçamento, Cortex GTM™, MathPop</span> {/* */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

{/* ====================================================================== */}
      {/* Bloco 5: Cases de Sucesso (ATUALIZADO)                               */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow section-cases-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Três histórias reais. Três resultados tangíveis.</h2> {/* */}
        </div>
        
        <div className="case-carousel-container reveal-up text-center">
          <div className="case-carousel-track">

            {/* Case 1: Versão Holística */}
            <div className="case-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Layers size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Versão Holística</h3>
                <span className="case-card-tag-rev">Healthtech</span>
              </div>
              <p><strong>Contexto:</strong> Healthtech com metodologia validada (UFMG) e ROI de 5.8x comprovado. No entanto, o pitch de 15 minutos gerava "vamos pensar", travando o ciclo de vendas. Decisores (hospitais) não entendiam; investidores não visualizavam a tese.</p> {/* */}
              <p><strong>O que fizemos:</strong> Identificamos a dor real, que não era técnica, e sim do CFO: 30% dos custos com pacientes crônicos são "invisíveis e evitáveis" (reinternações, falhas de medicação). Recodificamos "Cuidado Farmacêutico" (técnico) para "1ª Plataforma de CareOps Integrativo" (solução de negócio).</p> {/* */}
              <p><strong>Resultado tangível:</strong> De complexo para inevitável. R$ 500k captados no Compete Minas. Oceano azul criado — competição zero. Pitch de 3 minutos que gera "quando começamos?".</p> {/* */}
              <Link href="/cases/versao-holistica" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 2: Exclusiva Engenharias */}
            <div className="case-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <GitBranch size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Exclusiva Engenharias</h3>
                <span className="case-card-tag-rev">Indústria / Engenharia</span>
              </div>
              <p><strong>Contexto:</strong> Excelência técnica em civil, elétrica, mecânica, automação. Narrativa fragmentada por tipo de obra. Crescimento 100% por indicação da liderança. Zero presença digital. Receita imprevisível.</p> {/* */}
              <p><strong>O que fizemos:</strong> Recusamos o pedido de "fazer um site". Reposicionamos de "três empresas de engenharia" para "Hub que resolve problemas industriais que outros evitam". Construímos GTM completo, plataforma digital e fundamos a Diretoria de Receita como CRO fracionado.</p> {/* */}
              <p><strong>Resultado tangível:</strong> De disperso para focado. De invisível para encontrável. Playbook comercial validado em 128 dias. Sistema replicável operando — pronto para escalar time sem depender de heroísmo.</p> {/* */}
              <Link href="/cases/exclusiva-engenharias" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 3: AORKIA (ATUALIZADO) */}
            <div className="case-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <ShieldCheck size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">AORKIA</h3>
                <span className="case-card-tag-rev">Prova de Conceito</span>
              </div>
              <p><strong>Contexto:</strong> Startup entrando em mercado técnico dominado por gigantes (Veeam, Acronis, Druva). Zero histórico. Zero clientes. Zero marca. Parceria com Keepit (líder global) mas sem tração. Desafio: provar método próprio em 45 dias.</p> {/* */}
              <p><strong>O que fizemos:</strong> Transferência de credibilidade (Parceiro Oficial Keepit). Recodificamos "backup imutável" para "Seu SaaS não faz backup. Quanto custa cada hora parado?". Construímos plataforma com arquitetura de urgência. Skin in the game total — fundador aplicando método no próprio negócio.</p> {/* */}
              <p><strong>Resultado tangível:</strong> De zero para Parceiro Oficial Keepit com primeira venda de 1.200+ usuários em 45 dias. Prova definitiva: método validado sob condições extremas com pele no jogo.</p> {/* */}
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
      {/* Bloco 6: Princípio Unificador (ATUALIZADO)                           */}
      {/* ====================================================================== */}
      <section id="principio" className="section-solid section-principle-revolutionary">
        <div className="flowfield-background"></div>

        <div className="container text-center reveal-up">
          <div className="principle-core-block">
            <div className="principle-core-icon">
              <LineChart size={32} />
            </div>
            <h3>Esses três casos provam o mesmo princípio:</h3> {/* */}
            <p className="principle-core-highlight">Complexidade técnica sem clareza estratégica é potencial desperdiçado.</p> {/* */}
            <p>Nós traduzimos o que trava seu comprador — dúvida, comparação, análise — em decisão rápida: confiança, urgência, ação.</p> {/* */}
            <p>Construímos sistemas que tomam decisões complexas no lugar do usuário.</p> {/* */}
            <p>Lideramos a execução nos primeiros 90 dias porque sabemos que você não pode parar sua operação para implementar um novo processo.</p> {/* */}
            <p className="font-bold text-white mt-4" style={{color: 'var(--color-heading)', fontSize: '1.1rem'}}>Isso é Engenharia de Receita.</p> {/* */}
            <div className="section-cta">
              {/* ID ATUALIZADO PARA ROLAGEM */}
              <a href="#solucoes-cards" className="btn btn-secondary" style={{backdropFilter: 'blur(10px)'}}>
                <span>Conhecer Nossas Soluções</span> {/* */}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>


{/* ====================================================================== */}
      {/* Bloco 7: Soluções Especializadas (5 Cards) (ATUALIZADO)            */}
      {/* ====================================================================== */}
      <section id="solucoes-cards" className="section-solid section-solutions-revolutionary"> {/* ID ATUALIZADO */}
        <div className="container text-center reveal-up">
          <h2 className="section-title">Soluções Especializadas de Engenharia de Receita</h2> {/* */}
          <p className="lead-text" style={{marginBottom: '4rem'}}>
            Sistemas proprietários que traduzem excelência técnica em tração comercial previsível.
          </p> {/* */}
          
          <div className="solutions-grid-revolutionary">
            
            {/* Solução 1: Cortex B2B */}
            <Link href="/solucoes/cortex-b2b" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Brain size={28} />
              </div>
              <h3 className="pillar-card-title">Cortex B2B™</h3>
              <p className="pillar-card-description">Sistema de diagnóstico e arquitetura estratégica que decodifica negócios sob lentes de Engenharia de Receita, Neurociência e Orquestração de Escala.</p> {/* */}
            </Link>

            {/* Solução 2: Plataformas Digitais */}
            <Link href="/solucoes/plataformas-digitais" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Layers size={28} />
              </div>
              <h3 className="pillar-card-title">Plataformas Digitais</h3>
              <p className="pillar-card-description">Plataformas web que educam o mercado, qualificam leads e convertem autoridade em receita.</p> {/* */}
            </Link>

            {/* Solução 3: Profissionais de Saúde */}
            <Link href="/solucoes/profissionais-de-saude" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Award size={28} />
              </div>
              <h3 className="pillar-card-title">Para Profissionais de Saúde</h3>
              <p className="pillar-card-description">Transforme expertise clínica em receita previsível. Otimize sua agenda e crie novos modelos de negócio.</p> {/* */}
            </Link>

            {/* Solução 4: Match-Maker */}
            <Link href="/solucoes/match-maker" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Users size={28} />
              </div>
              <h3 className="pillar-card-title">Match-Maker B2B</h3>
              <p className="pillar-card-description">Plataforma de inteligência que conecta pessoas certas no momento certo, eliminando networking aleatório com recomendações estratégicas baseadas em dados.</p> {/* */}
            </Link>

            {/* Solução 5: Apps Estratégicos */}
            <Link href="/solucoes/apps" className="solution-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Zap size={28} />
              </div>
              <h3 className="pillar-card-title">Apps Estratégicos</h3>
              <p className="pillar-card-description">Ferramentas interativas que aceleram decisão de compra: simuladores, calculadoras e ROI builders.</p> {/* */}
            </Link>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 8: CTA Final (ATUALIZADO)                                       */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title">A pergunta B2B de US$ 1 milhão:</h2> {/* */}
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem'}}>
            "Seu produto é genial, mas sua narrativa é confusa. Como você traduz complexidade em receita previsível?"
          </p> {/* */}
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span> {/* */}
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Só clareza.
          </p> {/* */}
        </div>
      </section>

      {/* --- NOVO CSS PARA A SEÇÃO DE 2 COLUNAS --- */}
      <style jsx>{`
        .solutions-2col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .solution-column-card {
          background-color: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2.5rem;
          height: 100%; /* Faz os cards terem a mesma altura */
        }
        
        .solution-column-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.75rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        
        .solution-column-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 2rem;
          min-height: 5.1em; /* Garante alinhamento */
        }
        
        .solution-column-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        
        .solution-column-list li {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-left: 1.75rem;
          position: relative;
          border-left: 2px solid var(--color-primary-accent);
        }

        .solution-column-list li::before {
          content: '✔'; /* Simples marcador */
          position: absolute;
          left: 0;
          top: 4px;
          color: var(--color-primary);
          font-weight: bold;
        }
        
        .solution-column-list li strong {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: var(--color-heading);
          font-size: 1.1rem;
        }
        
        .solution-column-list li span {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-text);
        }
        
        .solution-examples {
          font-size: 0.85rem !important;
          color: var(--color-text) !important;
          opacity: 0.8;
          font-style: italic;
        }
        .solution-examples strong {
          font-family: 'Inter', sans-serif !important;
          font-size: 0.85rem !important;
          font-weight: 600 !important;
          color: var(--color-text) !important;
        }

        @media (max-width: 900px) {
          .solutions-2col-grid {
            grid-template-columns: 1fr;
          }
          .solution-column-desc {
            min-height: 0; /* Desativa altura mínima no mobile */
          }
        }
      `}</style>
    </>
  );
}