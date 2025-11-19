import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem, Layout, MonitorSmartphone } from 'lucide-react';

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
          
          {/* SUBHEADLINE */}
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

          {/* Barra de Confiança */}
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
          
          <div className="truths-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem'}}>
            
            {/* Sintoma 1 */}
            <div className="glass-card-premium">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Esforço Máximo, Resultado Instável</h3>
              <p>Você contrata ferramentas, testa canais e exige mais do time, mas o ponteiro não move na mesma proporção. O mercado não percebe seu valor real e cada venda exige um esforço desproporcional de convencimento porque falta posicionamento, não esforço.</p>
            </div>
            
            {/* Sintoma 2 */}
            <div className="glass-card-premium">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Investimento Sem Rastreabilidade</h3>
              <p>Você assina os cheques de marketing e vendas, mas não sabe dizer qual real investido trouxe o contrato assinado. O ciclo de vendas não encurta e a eficiência cai à medida que você tenta escalar. O problema é a ausência de Engenharia de Receita no processo comercial.</p>
            </div>

            {/* Sintoma 3 */}
            <div className="glass-card-premium">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Dependência de "Talento" vs. Processo</h3>
              <p>O faturamento depende da performance individual de vendedores sêniores (ou dos sócios). Se eles saírem, a receita cai. O crescimento está alicerçado em conhecimento tácito (na cabeça das pessoas), não em um playbook validado e transferível.</p>
            </div>
          </div>

          <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '4rem auto 0', fontStyle: 'italic', fontWeight: 500, color: 'var(--color-heading)' }}>
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
          
          {/* Layout Ajustado: 2x2 no Desktop */}
          <div className="pillar-grid-2x2">
            
            {/* Pilar 1 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Gem size={28} />
                </div>
                <h3 className="pillar-card-title">Clareza de Valor</h3>
                <p className="pillar-card-description">Decodificamos sua competência técnica em autoridade de mercado. Seu cliente ideal precisa entender o impacto financeiro que você gera em 30 segundos, sem depender de reuniões técnicas intermináveis.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <GitBranch size={28} />
                </div>
                <h3 className="pillar-card-title">Arquitetura Comercial</h3>
                <p className="pillar-card-description">O blueprint do seu motor de receita. Definimos processos, canais e rituais de gestão para que a meta seja batida pelo processo, e não pelo heroísmo de fim de mês.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="pillar-card-title">Governança de Execução</h3>
                <p className="pillar-card-description">Estratégia sem execução é alucinação. Atuamos com liderança sênior na linha de frente para garantir que o playbook seja seguido, os dados sejam limpos e a cultura de alta performance seja instalada.</p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="glass-card-premium">
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
            
            {/* FRENTE 1: INTELIGÊNCIA & ESTRATÉGIA */}
            <div className="glass-card-premium">
              <div className="frente-header text-center mb-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                   <Brain size={32} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
                </div>
                <h3 className="solution-column-title">FRENTE 1: INTELIGÊNCIA & ESTRATÉGIA</h3>
                {/* AJUSTE: Padding adicionado abaixo da descrição */}
                <p className="solution-column-desc" style={{marginBottom: '2.5rem'}}>Para quem precisa de direção clara e correção de rota.</p>
              </div>
              
              <ul className="solution-column-list">
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Diagnóstico Cortex B2B™</strong>
                  <span>O "Raio-X" da sua maturidade comercial. Uma análise profunda sob 5 lentes para identificar gargalos de eficiência e alavancas de crescimento imediato.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Direcionamento estratégico antes de novas rodadas de investimento ou expansão.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Sob consulta (Diagnóstico Estratégico).</span>
                  <Link href="/solucoes/cortex-b2b" className="solution-cta">
                    Conhecer o Cortex B2B™ <ArrowRight size={16}/>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Sprint de Validação Comercial</strong>
                  <span>Teste seu produto ou nova oferta em 30 dias. Validamos a demanda real com clientes antes de você investir em estrutura fixa.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Novos produtos ou expansão de mercado.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Investimento inicial (upfront) + % sobre receita nova (Success Fee).</span>
                  <Link href="/contato" className="solution-cta">
                    Agendar diagnóstico <ArrowRight size={16}/>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Go-To-Market Completo</strong>
                  <span>A arquitetura completa do seu motor comercial: posicionamento, ICP, proposta de valor, canais, pricing e retenção. Usamos o meta-framework Cortex B2B™ para entregar o blueprint estratégico que orienta toda a operação.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Empresas com crescimento errático, CAC alto, ciclo longo ou que precisam profissionalizar a forma de ir ao mercado.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Investimento inicial (upfront) + % sobre receita nova (Success Fee).</span>
                  <Link href="/contato" className="solution-cta">
                    Ver metodologia completa <ArrowRight size={16}/>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Diretoria de Receita como Serviço (CRO as a Service)</strong>
                  <span>Alugue um Executivo Sênior. Injetamos a visão e a governança de um Diretor de multinacional na sua operação, liderando o time para instalar o método na prática.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Profissionalizar a gestão, reduzir a dependência operacional dos sócios e instalar cultura de alta performance.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Fee mensal fixo + % sobre receita nova (Success Fee).</span>
                  <Link href="/contato" className="solution-cta">
                    Entender modelo de Parceria <ArrowRight size={16}/>
                  </Link>
                </li>
                 <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Advisory Board Estratégico</strong>
                  <span>Acesso a conselheiros experientes para validar decisões de alto risco (pivôs, M&A, GTM). Reduza a solidão da cadeira de CEO com sparring qualificado.</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Momentos de decisão crítica onde o custo do erro é alto e é necessária uma visão externa isenta.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Sob consulta (Retainer mensal ou Projeto específico).</span>
                  <Link href="/contato" className="solution-cta">
                    Avaliar fit de Advisory <ArrowRight size={16}/>
                  </Link>
                </li>
              </ul>
            </div>

            {/* FRENTE 2: ATIVOS DIGITAIS */}
            <div className="glass-card-premium">
              <div className="frente-header text-center mb-6">
                 <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-4">
                   <MonitorSmartphone size={32} style={{color: 'var(--color-accent)', marginBottom: '1rem'}} />
                </div>
                <h3 className="solution-column-title">FRENTE 2: ATIVOS DIGITAIS</h3>
                {/* AJUSTE: Padding adicionado abaixo da descrição */}
                <p className="solution-column-desc" style={{marginBottom: '2.5rem'}}>Ferramentas que vendem por você.</p>
              </div>
              
              <ul className="solution-column-list">
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Plataformas de Aceleração de Receita</strong>
                  <span>Não construímos "sites institucionais". Construímos plataformas digitais estratégicas projetadas como motores de receita: 30% credibilidade + 70% engenharia de conversão. Seu ativo digital educa o mercado e qualifica leads 24/7.</span>
                  <span className="solution-examples"><strong>Exemplos tangíveis:</strong> exclusivaengenharias.com, versaoholistica.com.br</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Empresas cujo site atual gera visitas mas não gera reuniões qualificadas para o time comercial.</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Sob consulta (Projeto).</span>
                  <Link href="/solucoes/plataformas-digitais" className="solution-cta">
                    Ver exemplos reais <ArrowRight size={16}/>
                  </Link>
                </li>
                <li>
                  <CheckCircle2 size={20} className="solution-item-icon" />
                  <strong>Apps e Simuladores de ROI</strong>
                  <span>Ferramentas que tangibilizam seu valor. Calculadoras e simuladores que provam o retorno financeiro da sua solução, eliminando a subjetividade da venda.</span>
                  <span className="solution-examples"><strong>Exemplos tangíveis:</strong> Synapse B2B Match Maker, Simulador de Orçamento Exclusiva Engenharias</span>
                  <span className="solution-details"><strong>Ideal para:</strong> Ciclos de vendas longos travados na etapa de "provar valor" ou "justificar preço".</span>
                  <span className="solution-details"><strong>Modelo de Investimento:</strong> Sob consulta (Projeto).</span>
                  <Link href="/solucoes/apps" className="solution-cta">
                    Explorar Ferramentas <ArrowRight size={16}/>
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
          <h2 className="section-title">Da Complexidade à Tração</h2>
        </div>
        
        <div className="case-carousel-container reveal-up text-center">
          <div className="case-carousel-track" style={{gap: '2rem'}}>

            {/* Case 1: Versão Holística */}
            <div className="glass-card-premium" style={{width: '100%', padding: '2rem'}}>
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <Award size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Versão Holística</h3>
                <span className="case-card-tag-rev">R$ 500k captados</span>
              </div>
              <p><strong>Contexto:</strong> Tecnologia validada, mas com dificuldade de penetração em grandes contas (Hospitais) devido a um discurso excessivamente técnico.</p>
              <p><strong>Ação:</strong> Reestruturação do GTM e tradução da oferta para "CareOps" (foco em eficiência operacional, não apenas clínica).</p>
              <p><strong>Resultado:</strong> R$ 500k captados e validação de canal enterprise.</p>
              <Link href="/cases/versao-holistica" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 2: Exclusiva Engenharias */}
            <div className="glass-card-premium" style={{width: '100%', padding: '2rem'}}>
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <GitBranch size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">Exclusiva Engenharias</h3>
                <span className="case-card-tag-rev">Forecast Recorde</span>
              </div>
              <p><strong>Contexto:</strong> Empresa de engenharia consolidada, mas refém de indicações e sazonalidade. Sem previsibilidade de novos contratos.</p>
              <p><strong>Ação:</strong> Implementação de máquina de vendas Outbound e posicionamento como parceiro de "Continuidade Operacional".</p>
              <p><strong>Resultado:</strong> Geração de pipeline recorde (3x histórico) e redução da dependência dos sócios na venda.</p>
              <Link href="/cases/exclusiva-engenharias" className="btn-case-revolutionary">
                <span>Ver Case Completo</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Case 3: AORKIA */}
            <div className="glass-card-premium" style={{width: '100%', padding: '2rem'}}>
              <div className="pillar-icon-wrapper" style={{ margin: '0 auto 1.5rem' }}>
                <ShieldCheck size={28} />
              </div>
              <div className="case-card-header-rev">
                <h3 className="case-card-title-rev">AORKIA</h3>
                <span className="case-card-tag-rev">Zero ao Playbook</span>
              </div>
              <p><strong>Contexto:</strong> Desafio de entrar em um mercado comoditizado (Backup) dominado por gigantes globais, sem histórico de marca.</p>
              <p><strong>Ação:</strong> Estratégia de "Ancoragem de Autoridade" e venda baseada em Risco (Compliance/Ransomware) e não em TI.</p>
              <p><strong>Resultado:</strong> Validação do método com a conquista de grande conta (1.200 usuários) em apenas 45 dias.</p>
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
          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="principle-core-icon" style={{margin: '0 auto 1.5rem'}}>
              <LineChart size={32} />
            </div>
            <h3>O Que Une Esses Resultados?</h3>
            <p className="principle-core-highlight">Eles deixaram de vender "horas" ou "produtos" para vender <strong>resultados de negócio</strong>.</p>
            <p>Trocaram a intuição pela <strong>metodologia</strong>.</p>
            <p>Entenderam que para crescer, precisavam profissionalizar a interface com o mercado.</p>
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
            Sua empresa está pronta para o próximo nível de maturidade comercial?
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem'}}>
            Se você fatura e sente que sua operação comercial é o gargalo, nós temos o método para destravar.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agende um Diagnóstico Executivo (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>
            Uma conversa de negócios. Sem pressão de vendas, apenas alinhamento estratégico.
          </p>
        </div>
      </section>

      {/* --- ESTILOS JSX --- */}
      <style jsx>{`
        /* CLASSE GLOBAL DO CARD PREMIUM */
        .glass-card-premium {
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

        .glass-card-premium:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2);
        }

        /* Grid 2x2 para Pilares no Desktop */
        .pillar-grid-2x2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .hero-headline {
          font-size: 2.8rem !important;
          line-height: 1.25;
        }
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.0rem !important;
          }
          /* Pilares viram 1 coluna no mobile */
          .pillar-grid-2x2 {
            grid-template-columns: 1fr;
          }
          .solutions-2col-grid {
            grid-template-columns: 1fr;
          }
        }
        
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

        .solutions-2col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
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
      `}</style>
    </>
  );
}