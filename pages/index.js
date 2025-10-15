// pages/index.js (VERSÃO CORRIGIDA COM TEXTO ROTATIVO)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones atualizados para a nova seção
import { ArrowRight, Eye, ChevronDown, ClipboardList, Settings2, Zap, Lightbulb, HardHat, Rocket, Map, Briefcase, Users, MonitorSmartphone, Wrench, CheckCircle2 } from 'lucide-react';
import { BrainCircuit, Phone, Timer, Target } from 'lucide-react';

// --- Componente de Texto Rotativo (ATUALIZADO) ---
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
    }, 3500); // 3.5 segundos por variação

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

// --- Componente Acordeão Padrão (Sem alteração) ---
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState(0);

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

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Escalar Negócios B2B</title>
        <meta name="description" content="Traduzimos a complexidade técnica de empresas de tecnologia e engenharia em uma Engenharia de Receita clara e executável. Transformamos seu potencial em performance de mercado." />
      </Head>

      {/* Bloco 1: Seção Hero com H1 Rotativa */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <RotatingText />
            <p className="hero-subheadline wider-on-desktop">
              Você domina a entrega. Nós dominamos como transformar isso em receita previsível.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary">
                <span>Falar com a Synapse B2B</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="#crescimento" className="btn btn-secondary">
                <span>Como Trabalhamos</span>
                <Eye size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

{/* Bloco 2: Os Pilares da Engenharia de Receita (VERSÃO ATUALIZADA) */}
<section id="pilares" className="section-solid">
  <div className="container text-center reveal-up">
    
{/* 2.a: Título com quebras de linha controladas (VERSÃO CORRIGIDA E ROBUSTA) */}
<h2 className="section-title">
  Receita previsível não é acidente.
  <br className="desktop-break" />
  {' '}<span className="no-wrap-text">É engenharia.</span>
</h2>
    
    <p className="pillar-subtitle">Quatro pilares integrados. Um resultado: você cresce sem depender de sorte.</p>
    
    {/* 2.b: Texto introdutório reestruturado e com destaque */}
    <div className="lead-text-container">
      <p className="lead-text">
        A maioria das empresas B2B opera em modo reativo. Vendem quando conseguem. Escalam quando sobra recurso. Pivotam quando o mercado força.
      </p>
      <p className="lead-text">
        <span className="highlight-survival">Isso não é estratégia. É sobrevivência.</span>
      </p>
      <p className="lead-text">
        Receita previsível exige o oposto: clareza antes de execução. Sistema antes de esforço.
      </p>
      <p className="lead-text">
        Nosso trabalho se organiza em quatro pilares que se alimentam:
      </p>
    </div>
    
    {/* Grid dos Pilares (sem alteração no JSX) */}
    <div className="pillar-grid">
      {/* ...seus 4 pillar-cards continuam aqui como estavam... */}
      <div className="pillar-card">
        <BrainCircuit className="card-icon" />
        <h3 className="pillar-card-title">Clareza de Valor</h3>
        <p>Traduzimos complexidade técnica em narrativa de decisão fundamentadas em neurociência. Seu cliente ideal precisa entender em 30 segundos: o que você resolve, por que agora, por que você.</p>
      </div>
      <div className="pillar-card">
        <Phone className="card-icon" />
        <h3 className="pillar-card-title">Sistema Comercial</h3>
        <p>Construímos o motor completo: da estratégia de Go-To-Market à arquitetura do processo comercial. Você para de depender de networking heroico e passa a gerar pipeline com método e previsibilidade.</p>
      </div>
      <div className="pillar-card">
        <Timer className="card-icon" />
        <h3 className="pillar-card-title">Governança de Execução</h3>
        <p>Lideramos sua operação de receita como CRO fracionado. Você ganha inteligência C-level sem aumentar headcount. Planejamos juntos o período ideal de acompanhamento, com mínimo de 3 meses, até validar o sistema.</p>
      </div>
      <div className="pillar-card">
        <Target className="card-icon" />
        <h3 className="pillar-card-title">Ativos que Convertem</h3>
        <p>Transformamos estratégia em ativos digitais que geram receita: plataformas de aceleração, ferramentas de ROI, simuladores, matchmakers, apps personalizados focados em business. Tecnologia que educa, qualifica e acelera decisão.</p>
      </div>
    </div>

  </div>
</section>

      <div className="section-divider-glow"></div>

{/* Bloco 3: Como Transformamos Potencial em Performance */}
<section id="cases" className="section-with-gradient-glow">
  <div className="container text-center reveal-up">
    <h2 className="section-title">Três histórias reais. Três resultados tangíveis.</h2>
    <p className="lead-text">Não entregamos diagnósticos. Entregamos clareza que vira receita.</p>

    {/* Componente Interativo de Abas (Tabs) para os Cases */}
    <div className="case-studies-container">
      {/* Navegação das Abas */}
      <div className="case-tabs-nav">
        <button 
          className={`case-tab ${openAccordion === 1 ? 'active' : ''}`} 
          onClick={() => setOpenAccordion(1)}
        >
          Healthtech Holística
        </button>
        <button 
          className={`case-tab ${openAccordion === 2 ? 'active' : ''}`} 
          onClick={() => setOpenAccordion(2)}
        >
          Exclusiva Engenharias
        </button>
        <button 
          className={`case-tab ${openAccordion === 3 ? 'active' : ''}`} 
          onClick={() => setOpenAccordion(3)}
        >
          Synapse Matchmaker
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="case-content-container">
        {/* CASE 1 */}
        {openAccordion === 1 && (
          <div className="case-content">
            <p className="case-type">VERSÃO HOLÍSTICA</p>
            <div className="case-section-detail">
              <h4><ClipboardList size={18} /> Contexto</h4>
              <p>"Uma healthtech nascida da superação pessoal de sua fundadora, com metodologia inovadora de cuidado integrativo. Produto sólido, mas narrativa dispersa em múltiplos modelos de negócio simultâneos. Hospitais e investidores faziam sempre a mesma pergunta: 'O que, exatamente, vocês fazem por mim?'"</p>
            </div>
            <div className="case-section-detail">
              <h4><Settings2 size={18} /> O que fizemos</h4>
              <p>"Reposicionamento estratégico completo. Traduzimos 'Cuidado Farmacêutico Integrativo' para linguagem de decisor: 'Plataforma de gestão que reduz custo de paciente crônico'. Construímos nova narrativa, validamos ROI (5.8x em casos reais) e criamos posicionamento de categoria: 1ª Plataforma de CareOps Integrativo do Brasil."</p>
            </div>
            <div className="case-section-detail">
              <h4><Zap size={18} /> Resultado tangível</h4>
              <p>"De oferta confusa para tese de investimento clara. Narrativa que hospitais entendem em 60 segundos. Fundação estratégica pronta para escalar com confiança."</p>
            </div>
           <Link href="/engenharia" className="btn btn-secondary case-cta">
             Ver case completo <ArrowRight size={16} />
           </Link>
          </div>
        )}

        {/* CASE 2 */}
        {openAccordion === 2 && (
          <div className="case-content">
            <p className="case-type">EXCLUSIVA ENGENHARIAS</p>
            <div className="case-section-detail">
              <h4><ClipboardList size={18} /> Contexto</h4>
              <p>"Engenharia de excelência técnica, mas invisibilidade digital absoluta. Crescimento dependia 100% de indicação e networking. Sem motor de geração de demanda. Sem previsibilidade de receita."</p>
            </div>
            <div className="case-section-detail">
              <h4><Settings2 size={18} /> O que fizemos</h4>
              <p>"Começamos pelo GTM completo: posicionamento, ICP, proposta de valor, canais de aquisição. Só então construímos a plataforma digital (institucional + motor de receita) e um simulador de orçamento integrado. Na sequência, assumimos como CRO as a Service: fundação da Diretoria de Receita com inteligência de mercado, prospecção ativa, execução de reuniões e entrega do playbook comercial completo."</p>
            </div>
            <div className="case-section-detail">
              <h4><Zap size={18} /> Resultado tangível</h4>
              <p>"De invisível para encontrável. De receita reativa para motor de geração de demanda estruturado. Sistema validado, documentado e pronto para contratar time e escalar."</p>
            </div>
           <Link href="/engenharia" className="btn btn-secondary case-cta">
             Ver case completo <ArrowRight size={16} />
           </Link>
          </div>
        )}

        {/* CASE 3 */}
        {openAccordion === 3 && (
          <div className="case-content">
            <p className="case-type">SYNAPSE B2B MATCH MAKER</p>
            <div className="case-section-detail">
              <h4><ClipboardList size={18} /> Contexto</h4>
              <p>"Grupos de networking com dezenas ou centenas de profissionais. Skills diversas, entregáveis variados, oportunidades invisíveis. Informação valiosa perdida em conversas assíncronas. Zero capacidade de confluência estratégica."</p>
            </div>
            <div className="case-section-detail">
              <h4><Settings2 size={18} /> O que fizemos</h4>
              <p>"Criamos ferramenta proprietária de matching inteligente com Neural System. Plataforma multi-tenant que conecta perfis por competência, necessidade e oportunidade. Versões para Educação (alunos e mentores), Investimento (startups e investidores) e preparada para qualquer segmento (RH, parcerias comerciais, fornecedores)."</p>
            </div>
            <div className="case-section-detail">
              <h4><Zap size={18} /> Resultado tangível</h4>
              <p>"De caos relacional para inteligência de conexão. Matching que acontece em segundos, baseado em dados estruturados. Escalável para qualquer ecossistema que precisa organizar relacionamentos estratégicos."</p>
            </div>
           <Link href="/engenharia" className="btn btn-secondary case-cta">
             Ver ferramenta <ArrowRight size={16} />
           </Link>
          </div>
        )}
      </div>
    </div>

    {/* Texto de Fechamento da Seção */}
    <div className="case-conclusion text-center">
        <p>Esses três casos provam o mesmo princípio:</p>
        <p><strong>Complexidade técnica sem clareza estratégica é potencial desperdiçado.</strong></p>
        <p>Nós traduzimos o que está travado no córtex pré-frontal do seu comprador (dúvida, análise, comparação) em decisão límbica rápida (confiança, urgência, ação).</p>
        <p>Construímos ferramentas que tomam decisões cognitivamente caras no lugar do usuário.</p>
        <p>Lideramos execução nos primeiros 90 dias porque sabemos que você não tem largura de banda para aprender novo processo enquanto toca sua operação.</p>
        <p>Isso é Engenharia de Receita.</p>
    </div>
  </div>
</section>

      <div className="section-divider-glow"></div>

{/* Bloco 4: O Que Construímos Para Você */}
<section id="servicos" className="section-solid">
  <div className="container reveal-up">
    <div className="text-center">
      <h2 className="section-title">O Que Construímos Para Você</h2>
      <p className="lead-text">Duas frentes integradas. Múltiplas formas de entrada.</p>
    </div>

    {/* Grid de Duas Colunas para as Frentes de Serviço */}
    <div className="services-grid">

      {/* COLUNA 1: INTELIGÊNCIA & ESTRATÉGIA */}
      <div className="services-column">
        <div className="column-header">
          <Lightbulb className="icon" size={32} />
          <h3>Inteligência & Estratégia</h3>
        </div>
        <p className="column-intro">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>

        {/* Card de Serviço: Sprint de Validação */}
        <div className="service-card">
          <h4><Rocket size={18} /> Sprint de Validação Comercial</h4>
          <p>Valide demanda real antes de contratar time comercial. Testamos oferta, ICP e canais em 30 dias. Você decide escalar baseado em dados de campo, não intuição ou esperança.</p>
          <button className="service-card-toggle" onClick={() => setOpenAccordion(openAccordion === 'sprint' ? null : 'sprint')}>
            <span>Quando contratar</span>
            <ChevronDown className={`accordion-icon ${openAccordion === 'sprint' ? 'open' : ''}`} />
          </button>
          <div className={`service-card-details ${openAccordion === 'sprint' ? 'open' : ''}`}>
            <ul>
              <li><CheckCircle2 size={16} /> Produto novo entrando no mercado</li>
              <li><CheckCircle2 size={16} /> Pivô de modelo de negócio</li>
              <li><CheckCircle2 size={16} /> Expansão para novo segmento ou geografia</li>
              <li><CheckCircle2 size={16} /> Dúvida se há demanda pagante real</li>
            </ul>
          </div>
        </div>

        {/* Card de Serviço: Go-To-Market Completo */}
        <div className="service-card">
          <h4><Map size={18} /> Go-To-Market Completo</h4>
          <p>Arquitetura do zero: posicionamento, ICP, proposta de valor, canais de aquisição, modelo de vendas, pricing, estratégia de retenção. Blueprint que guia cada decisão comercial dos próximos 18 meses.</p>
          <button className="service-card-toggle" onClick={() => setOpenAccordion(openAccordion === 'gtm' ? null : 'gtm')}>
            <span>Quando contratar</span>
            <ChevronDown className={`accordion-icon ${openAccordion === 'gtm' ? 'open' : ''}`} />
          </button>
          <div className={`service-card-details ${openAccordion === 'gtm' ? 'open' : ''}`}>
            <ul>
              <li><CheckCircle2 size={16} /> Crescimento é errático com produto validado</li>
              <li><CheckCircle2 size={16} /> Sua narrativa não está clara internamente</li>
              <li><CheckCircle2 size={16} /> Time vende explicando features, não problemas</li>
              <li><CheckCircle2 size={16} /> CAC alto, ciclo longo, conversão baixa</li>
            </ul>
          </div>
        </div>

        {/* Card de Serviço: CRO as a Service */}
        <div className="service-card">
          <h4><Briefcase size={18} /> Diretoria de Receita (CRO as a Service)</h4>
          <p>Liderança C-level fracionada. Injetamos inteligência sênior na sua operação sem contrato permanente. Executamos por 90-120 dias, entregamos o playbook validado. Mínimo fixo + performance sobre receita gerada.</p>
           <button className="service-card-toggle" onClick={() => setOpenAccordion(openAccordion === 'cro' ? null : 'cro')}>
            <span>Quando contratar</span>
            <ChevronDown className={`accordion-icon ${openAccordion === 'cro' ? 'open' : ''}`} />
          </button>
          <div className={`service-card-details ${openAccordion === 'cro' ? 'open' : ''}`}>
             <ul>
              <li><CheckCircle2 size={16} /> CEO está sobrecarregado fazendo comercial</li>
              <li><CheckCircle2 size={16} /> Time de vendas opera sem liderança estratégica</li>
              <li><CheckCircle2 size={16} /> Precisa validar processo antes de contratar gerente</li>
              <li><CheckCircle2 size={16} /> Receita travou e você não sabe qual alavanca puxar</li>
            </ul>
          </div>
        </div>
        
        {/* Card de Serviço: Advisory Board */}
        <div className="service-card">
          <h4><Users size={18} /> Advisory Board</h4>
          <p>Decisões estratégicas de alto impacto exigem visão externa de quem já executou. Atuamos como conselho sob demanda para: novos mercados, pivôs, preparação para investimento, parcerias estratégicas.</p>
           <button className="service-card-toggle" onClick={() => setOpenAccordion(openAccordion === 'advisory' ? null : 'advisory')}>
            <span>Quando contratar</span>
            <ChevronDown className={`accordion-icon ${openAccordion === 'advisory' ? 'open' : ''}`} />
          </button>
          <div className={`service-card-details ${openAccordion === 'advisory' ? 'open' : ''}`}>
             <ul>
              <li><CheckCircle2 size={16} /> Decisão com risco alto e impacto irreversível</li>
              <li><CheckCircle2 size={16} /> Falta referência interna para validar hipótese</li>
              <li><CheckCircle2 size={16} /> Precisa de sparring qualificado antes de comprometer recurso</li>
            </ul>
          </div>
        </div>

      </div>

      {/* COLUNA 2: CONSTRUÇÃO DE ATIVOS DIGITAIS */}
      <div className="services-column">
        <div className="column-header">
          <HardHat className="icon" size={32} />
          <h3>Construção de Ativos Digitais</h3>
        </div>
        <p className="column-intro">Onde transformamos estratégia em ferramentas que geram receita enquanto você dorme.</p>

        {/* Card de Serviço: Plataformas de Aceleração */}
        <div className="service-card">
          <h4><MonitorSmartphone size={18} /> Plataformas de Aceleração de Receita</h4>
          <p>Não construímos sites. Construímos plataformas digitais estratégicas: 30% institucional, 70% engenharia de receita. Seu ativo digital educa, nutre e converte 24/7.</p>
          <div className="service-card-examples">
            <h5>Exemplos tangíveis:</h5>
            <p><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">exclusivaengenharias.com</a>, <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">versaoholistica.com.br</a></p>
            <h5>O que inclui:</h5>
            <p>Arquitetura de conversão, Copywriting, Jornadas por perfil, Integração com CRM.</p>
          </div>
        </div>
        
        {/* Card de Serviço: Ferramentas Estratégicas */}
        <div className="service-card">
          <h4><Wrench size={18} /> Ferramentas Estratégicas de Conversão</h4>
          <p>Construímos ativos proprietários que se tornam o centro da sua argumentação de valor: calculadoras de ROI, simuladores, matchmakers, diagnósticos. Ferramentas que provam sua autoridade e aceleram decisão.</p>
          <div className="service-card-examples">
             <h5>Exemplos tangíveis:</h5>
             <p>Synapse B2B Match Maker, Simulador de Orçamento, Cortex GTM™, MathPop</p>
          </div>
           <button className="service-card-toggle" onClick={() => setOpenAccordion(openAccordion === 'tools' ? null : 'tools')}>
            <span>Quando contratar</span>
            <ChevronDown className={`accordion-icon ${openAccordion === 'tools' ? 'open' : ''}`} />
          </button>
          <div className={`service-card-details ${openAccordion === 'tools' ? 'open' : ''}`}>
             <ul>
              <li><CheckCircle2 size={16} /> Venda depende de apresentação ao vivo</li>
              <li><CheckCircle2 size={16} /> Cliente precisa "sentir" o valor antes de comprar</li>
              <li><CheckCircle2 size={16} /> Ciclo de vendas é longo e complexo</li>
              <li><CheckCircle2 size={16} /> Quer escalar argumento de vendas sem escalar time</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Soluções (REIMAGINADO COM NOVO LAYOUT) */}
      <section id="crescimento" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossa Engenharia: Da Estratégia aos Ativos de Receita</h2>
          <p className="lead-text">Cada negócio está em um momento único. Nossos modelos de engajamento são desenhados para entregar o que você precisa, quando precisa.</p>
          
          <div className="engineering-block">
            {/* Coluna Esquerda */}
            <div className="engineering-column">
              <div className="engineering-header">
                <Compass className="icon" />
                <h3>Inteligência & Estratégia</h3>
                <p>Onde definimos a arquitetura do seu crescimento.</p>
              </div>
              <ul className="engineering-list">
                <li>
                  <h4>Sprint de Validação Comercial</h4>
                  <p>Para testar novas ofertas e mercados com velocidade e precisão.</p>
                </li>
                <li>
                  <h4>Go-To-Market Completo</h4>
                  <p>Para arquitetar e instalar seu motor de receita do zero.</p>
                </li>
                <li>
                  <h4>Diretoria de Receita (CRO as a Service)</h4>
                  <p>Para injetar liderança C-level na sua operação de receita.</p>
                </li>
                <li>
                  <h4>Advisory Board</h4>
                  <p>Para guiar decisões estratégicas de alto impacto.</p>
                </li>
              </ul>
            </div>

            {/* Divisor Central */}
            <div className="engineering-divider"></div>

            {/* Coluna Direita */}
            <div className="engineering-column">
              <div className="engineering-header">
                <Wrench className="icon" />
                <h3>Construção de Ativos Digitais</h3>
                <p>Onde transformamos estratégia em ferramentas de receita.</p>
              </div>
              <ul className="engineering-list">
                <li>
                  <h4>Plataformas de Aceleração de Receita</h4>
                  <p>Construímos o seu novo "site": um ativo digital projetado para educar, qualificar e converter clientes.</p>
                </li>
                <li>
                  <h4>Ferramentas Estratégicas de Conversão</h4>
                  <p>Desenvolvemos ferramentas (calculadoras, simuladores, apps) que se tornam o centro da sua argumentação de valor e aceleram a decisão de compra.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 6: Chamada Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="lead-text">Com metodologia proprietária e atuação integrada, transformamos complexidade em clareza, e clareza em receita.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Inicie seu Diagnóstico de Receita</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

