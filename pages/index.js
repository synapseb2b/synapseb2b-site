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
        <meta name="description" content="Assessoria de Engenharia de Receita que transforma produtos complexos em ofertas que o mercado entende, compra e escala." />
      </Head>

{/* ====================================================================== */}
      {/* Seção 1: Hero Section (H1 CORRIGIDO)                               */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          {/* HEADLINE CORRIGIDA (Sem caixa alta, tamanho definido no style jsx) */}
          <h1 className="hero-headline">
            Engenharia de Receita para Empresas B2B
            <br/>
            que Precisam de Crescimento Previsível
          </h1>
          
          {/* SUBHEADLINE PRÁTICA */}
          <p className="hero-subheadline wider-on-desktop">
            Nós instalamos o sistema (GTM, Narrativa e Ativos) que transforma sua complexidade técnica em um motor de vendas que escala.
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
            <p>Forjado em ecossistemas de alta complexidade como:</p>
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
              <h3 className="truth-card-title">Crescimento Dependente de Relacionamentos</h3>
              <p>Sua receita depende de indicações, do CEO ou de um vendedor-herói. É um modelo que validou sua empresa, mas agora atingiu o teto. Você não consegue prever a próxima venda e escalar exige replicar o que não está documentado.</p>
            </div>
            
            {/* Sintoma 2 */}
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Marketing e Vendas Sem Retorno Claro</h3>
              <p>Você investe em marketing, contrata SDRs e refaz o site. O resultado? Custo fixo alto, pipeline vazio e leads que não convertem. O problema não é o esforço. É a falta de um método que conecte cada real investido a um resultado de venda.</p>
            </div>

            {/* Sintoma 3 */}
            <div className="truth-card-revolutionary">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Liderança Sobrecarregada com Operação</h3>
              <p>O fundador (ou um único vendedor) é quem realmente vende. A empresa inteira depende dessa pessoa. Isso é um gargalo: enquanto o líder está na operação comercial, não está construindo o sistema para escalar. O crescimento depende de heroísmo, não de método.</p>
            </div>
          </div>

          {/* Conclusão da Seção 2 */}
          <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '3rem auto 0', fontStyle: 'italic', fontWeight: 500, color: 'var(--color-heading)' }}>
            Você não precisa de mais esforço. Você precisa de um método. <br/>Para parar de improvisar, você precisa de Engenharia.
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
            Instalamos o sistema de quatro pilares que move sua empresa do improviso para a receita previsível.
          </p>
          
          <div className="pillar-grid-revolutionary">
            
            {/* Pilar 1: Clareza de Valor */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Gem size={28} />
                </div>
                <h3 className="pillar-card-title">Clareza de Valor</h3>
                <p className="pillar-card-description">É a sua Proposta de Valor em 30 segundos. Seu cliente ideal entende o que você resolve, por que agora e por que você. Sem jargão técnico, sem 40 slides.</p>
              </div>
            </div>

            {/* Pilar 2: Sistema Comercial */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <GitBranch size={28} />
                </div>
                <h3 className="pillar-card-title">Sistema Comercial</h3>
                <p className="pillar-card-description">É o seu motor de demanda. Você para de depender de indicações e heroísmo. Instalamos um processo completo de Go-To-Market (GTM) que gera um pipeline estruturado e previsível.</p>
              </div>
            </div>

            {/* Pilar 3: Governança de Execução */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="pillar-card-title">Governança de Execução</h3>
                <p className="pillar-card-description">É a inteligência sênior que executa. Você ganha uma Diretoria Comercial como Serviço — sem o custo fixo e os riscos de um C-Level CLT — para garantir que a estratégia seja implementada na linha de frente.</p>
              </div>
            </div>

            {/* Pilar 4: Ativos que Convertem */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Layers size={28} />
                </div>
                <h3 className="pillar-card-title">Ativos que Convertem</h3>
                <p className="pillar-card-description">São os seus ativos que vendem por você. Transformamos seu site, criamos calculadoras de ROI, simuladores e bots (incluindo WhatsApp) em ferramentas que educam o comprador e aceleram a decisão. É a sua tecnologia gerando receita 24/7.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 4: Soluções de Engenharia de Receita (PREÇOS ATUALIZADOS)    */}
      {/* ====================================================================== */}
      <section id="solucoes" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Soluções de Engenharia de Receita</h2>
          <p className="lead-text text-center" style={{maxWidth: '700px', margin: '0 auto 4rem'}}>
            Nosso método em duas frentes. Comece pelo diagnóstico ou pela execução.
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
                  <span>Nosso sistema proprietário de inteligência estratégica. Uma IA especializada que condensa 20+ anos de experiência B2B e os maiores frameworks globais de GTM em um diagnóstico 360° do seu negócio.</span>
                  <span className="solution-details"><strong>Quando contratar:</strong> Para ter um "raio-X" imparcial da sua operação, antes de investir alto em marketing/vendas, ou quando o "achismo" está custando caro.</span>
                  {/* PREÇO ATUALIZADO (R$ 999) */}
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> R$ 999 (pagamento único).</span>
                  <Link href="/solucoes/cortex-b2b" passHref>
                    <a className="solution-cta">Conhecer o Cortex B2B™ <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Sprint de Validação Comercial</strong>
                  <span>Valide a demanda real antes de construir a tese. Testamos seu produto, ICP e pitch de vendas em 30 dias (aplicando o Cortex B2B™) para que você decida escalar baseado em dados de campo, não em intuição.</span>
                  <span className="solution-details"><strong>Quando contratar:</strong> Produto novo, pivô de modelo, expansão para novo mercado.</span>
                  {/* PREÇO ATUALIZADO (R$ 2-5k) */}
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> R$ 2-5k (upfront) + % sobre receita nova (mínimo 12 meses).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Agendar diagnóstico <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Go-To-Market Completo</strong>
                  <span>A arquitetura completa do seu motor comercial do zero: posicionamento, ICP, proposta de valor, canais, pricing e retenção. Usamos o meta-framework Cortex B2B™ para entregar o blueprint estratégico.</span>
                  <span className="solution-details"><strong>Quando contratar:</strong> Crescimento errático, CAC alto, ciclo longo, time vendendo features.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Pequeno investimento para compromisso mútuo + % sobre receita nova (mínimo 12 meses).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Ver metodologia completa <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Diretoria de Receita como Serviço</strong>
                  <span>Liderança C-level fracionada operando sua diretoria comercial. Injetamos estratégia sênior, executamos na linha de frente por 90-180 dias e validamos o playbook operando. Você ganha 5x mais resultado pagando uma fração do custo de um VP Comercial CLT.</span>
                  <span className="solution-details"><strong>Quando contratar:</strong> CEO sobrecarregado, time sem direção, receita travada há 3+ meses.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> R$ 5-7k/mês fixo + % sobre receita nova (mínimo 12 meses).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Entender modelo de Parceria <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Advisory Board Estratégico</strong>
                  <span>Conselho sob demanda para decisões de alto impacto (pivôs, M&A, captação). Damos acesso à senioridade e visão externa para validar hipóteses e reduzir o risco de decisões críticas, sem contratação permanente.</span>
                  <span className="solution-details"><strong>Quando contratar:</strong> Decisão estratégica de alto impacto, necessidade de sparring qualificado.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Sob consulta (modelo de retainer mensal ou projeto).</span>
                  <Link href="/contato" passHref>
                    <a className="solution-cta">Avaliar fit de Advisory <ArrowRight size={16}/></a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 2: Construção de Ativos Digitais */}
            <div className="solution-column-card">
              <h3 className="solution-column-title">FRENTE 2: CONSTRUÇÃO DE ATIVOS DIGITAIS</h3>
              <p className="solution-column-desc">Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
              
              <ul className="solution-column-list">
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Plataformas de Aceleração de Receita</strong>
                  <span>Não construímos "sites institucionais". Construímos plataformas digitais estratégicas projetadas como motores de receita: 30% credibilidade + 70% engenharia de conversão. Seu ativo digital educa o mercado e qualifica leads 24/7.</span>
                  <span className="solution-examples"><strong>Exemplos tangíveis:</strong> exclusivaengenharias.com, versaoholistica.com.br</span>
                  <span className="solution-examples"><strong>O que inclui:</strong> Arquitetura de conversão, copywriting estratégico (SEO e GEO), landing pages por ICP, integração com CRMs e bots.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> R$ 7-35k (projeto) ou sob consulta.</span>
                  <Link href="/solucoes/plataformas-digitais" passHref>
                    <a className="solution-cta">Ver casos de uso <ArrowRight size={16}/></a>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Ferramentas Estratégicas de Conversão (Apps)</strong>
                  <span>Construímos ativos que provam seu ROI antes da venda: calculadoras, simuladores, diagnósticos automatizados, bots (WhatsApp) e plataformas de match-making. O cliente "sente" o valor, não apenas ouve sobre ele.</span>
                  <span className="solution-examples"><strong>Exemplos tangíveis:</strong> Synapse B2B Match Maker, Simulador de Orçamento Exclusiva Engenharias</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> R$ 5-25k (projeto) ou sob consulta.</span>
                  <Link href="/solucoes/apps" passHref>
                    <a className="solution-cta">Explorar Ferramentas <ArrowRight size={16}/></a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

{/* ====================================================================== */}
      {/* Seção 5: Cases de Sucesso (Carrossel)                              */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow section-cases-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Da Estratégia à Tração</h2>
        </div>
        
        <div className="case-carousel-container reveal-up text-center">
          <div className="case-carousel-track">

            {/* Case 1: Versão Holística */}
            <div className="case-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Award size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Versão Holística</h3>
                <span className="case-card-tag-rev">Healthtech</span>
              </div>
              <p><strong>Contexto:</strong> Healthtech com ROI de 5.8x, mas o pitch de 15 minutos gerava "vamos pensar". Decisores não entendiam.</p>
              <p><strong>O que fizemos:</strong> Recodificamos "Cuidado Farmacêutico" (técnico) para "1ª Plataforma de CareOps Integrativo" (solução de negócio) após identificar a dor do CFO.</p>
              <p><strong>Resultado tangível:</strong> R$ 500k captados. Pitch de 3 minutos que gera "quando começamos?".</p>
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
              <p><strong>Contexto:</strong> Excelência técnica, mas crescimento 100% por indicação. Narrativa fragmentada. Zero presença digital. Receita imprevisível.</p>
              <p><strong>O que fizemos:</strong> Recusamos "fazer um site". Reposicionamos a marca, construímos o GTM completo, a plataforma digital e atuamos como CRO fracionado.</p>
              <p><strong>Resultado tangível:</strong> Pipeline de novas oportunidades gerado superior ao faturamento anual. Playbook comercial validado em 128 dias. Sistema replicável operando — pronto para escalar sem depender de heroísmo.</p>
              <Link href="/cases/exclusiva-engenharias" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 3: AORKIA */}
            <div className="case-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <ShieldCheck size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">AORKIA</h3>
                <span className="case-card-tag-rev">Prova de Conceito</span>
              </div>
              <p><strong>Contexto:</strong> Startup entrando em mercado técnico dominado por gigantes. Zero histórico, zero clientes, zero marca. Desafio: provar método próprio em 45 dias.</p>
              <p><strong>O que fizemos:</strong> Transferência de credibilidade (Parceiro Oficial Keepit). Recodificamos a narrativa para focar no risco: "Seu SaaS não faz backup. Quanto custa cada hora parado?". Skin in the game total — o próprio fundador da Synapse B2B aplicando o método em negócio próprio.</p>
              <p><strong>Resultado tangível:</strong> Primeira venda de +1.200 usuários em 45 dias. Prova definitiva: método validado sob condições extremas com pele no jogo.</p>
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
      {/* Seção 6: Princípio Unificador                                        */}
      {/* ====================================================================== */}
      <section id="principio" className="section-solid section-principle-revolutionary">
        <div className="flowfield-background"></div>

        <div className="container text-center reveal-up">
          <div className="principle-core-block">
            <div className="principle-core-icon">
              <LineChart size={32} />
            </div>
            <h3>Esses três casos provam o mesmo princípio:</h3>
            <p className="principle-core-highlight">Produtos tecnicamente superiores perdem para concorrentes medíocres com narrativas mais simples.</p>
            <p>Nós traduzimos o que trava seu comprador — dúvida, comparação, análise exaustiva — em decisão rápida: confiança, urgência, ação.</p>
            <p>Construímos sistemas que tomam decisões cognitivamente caras no lugar do usuário.</p>
            <p>Lideramos a execução nos primeiros 90 dias porque sabemos que você não pode parar sua operação para implementar um novo processo sozinho.</p>
            <p className="font-bold text-white mt-4" style={{color: 'var(--color-heading)', fontSize: '1.1rem'}}>Isso é Engenharia de Receita.</p>
            <div className="section-cta">
              <Link href="/a-engenharia" className="btn btn-secondary" style={{backdropFilter: 'blur(10px)'}}>
                <span>Conhecer Nossa Tese</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>


      {/* ====================================================================== */}
      {/* Seção 7: CTA Final                                                   */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Sua transformação é a nossa próxima tese de negócio.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Se você se viu em algum desses cenários, o desafio que você enfrenta não é único. A forma de resolvê-lo, sim. Nossa Engenharia de Receita funciona porque é um método, não um acaso.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agende sua Sessão de Diagnóstico (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Só clareza.
          </p>
        </div>
      </section>

      {/* --- ESTILOS JSX - Usados para Seção 1 (Headline), Seção 4 (2 Colunas) e Trust Bar --- */}
      <style jsx>{`
        /* --- CORREÇÃO 1 & 2: Tamanho da Fonte da Headline (2.8rem) --- */
        .hero-headline {
          font-size: 2.8rem !important; /* <--- MUDEI ESTE VALOR */
          line-height: 1.25; /* Ajuste de espaçamento de linha */
        }
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.0rem !important; /* Reduzido proporcionalmente */
          }
        }
        
        /* --- Estilos da Trust Bar (Seção 1) --- */
        .trust-bar {
          margin-top: 4rem;
          width: 100%;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .trust-bar p {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .trust-bar-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          opacity: 0.6;
          filter: grayscale(100%) contrast(50%);
        }
        .trust-bar-logos img {
          max-width: 100px;
          height: auto;
        }

        /* --- Estilos da Seção 4 (2 Colunas) --- */
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
          height: 100%;
        }
        
        .solution-column-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.75rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .solution-column-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 2.5rem;
          min-height: 3.4em;
          text-align: center;
        }
        
        .solution-column-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .solution-column-list li {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          position: relative;
        }

        .solution-item-icon {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }
        
        .solution-column-list li strong {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: var(--color-heading);
          font-size: 1.1rem;
        }
        
        .solution-column-list li span {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-text);
        }
        
        .solution-details {
          font-size: 0.9rem !important;
          color: var(--color-text) !important;
          opacity: 0.8;
        }
        .solution-details strong {
          font-family: 'Inter', sans-serif !important;
          font-size: 0.9rem !important;
          font-weight: 600 !important;
          color: var(--color-text) !important;
          opacity: 0.9;
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
        
        .solution-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--color-accent) !important;
          text-decoration: none !important;
          font-weight: 600;
          margin-top: 0.75rem;
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .solution-cta:hover {
          gap: 1rem;
          color: var(--color-heading) !important;
        }

        @media (max-width: 900px) {
          .solutions-2col-grid {
            grid-template-columns: 1fr;
          }
          .solution-column-desc {
            min-height: 0;
          }
        }
        
        @media (max-width: 768px) {
          .trust-bar {
            margin-top: 3rem;
          }
          .trust-bar-logos {
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}