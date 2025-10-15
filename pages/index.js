// pages/index.js (VERSÃO CORRIGIDA COM TEXTO ROTATIVO)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones atualizados para a nova seção
import { ArrowRight, Eye, ChevronDown, TrendingDown, Tag, Clock, Filter, Compass, Wrench } from 'lucide-react';
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
            <Link href="#" className="btn btn-secondary case-cta">
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
            <Link href="#" className="btn btn-secondary case-cta">
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
            <Link href="#" className="btn btn-secondary case-cta">
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

      {/* Bloco 4: Como Funciona - O Cortex GTM™ */}
      <section id="como-funciona" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nosso Sistema: O Cortex GTM™</h2>
          <p className="lead-text">O Cortex GTM™ é o nosso sistema de diagnóstico e arquitetura estratégica, projetado para decodificar a genialidade técnica de um negócio e traduzi-la em uma Engenharia de Receita.</p>
          <p className="lead-text">Ele opera em três fases que refletem o que nos diferencia: o nosso olhar.</p>
          <div className="accordion-container">
            <AccordionItem title="Um Olhar de Fora para Dentro" isOpen={openAccordion === 0} onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
              <p>Nosso ponto de partida não é o seu produto, mas o problema crítico e o impacto que a falta de clareza gera no negócio do seu cliente. Diagnosticamos com precisão onde o valor real da sua solução se perde na percepção do mercado, transformando complexidade em clareza.</p>
            </AccordionItem>
            <AccordionItem title="A Lógica por Trás da Decisão" isOpen={openAccordion === 1} onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
              <p>Com o diagnóstico em mãos, arquitetamos a narrativa e o posicionamento que conectam sua genialidade a uma decisão de compra estratégica. Não criamos marketing; construímos o argumento de negócio que torna a escolha pela sua empresa uma consequência lógica e defensável.</p>
            </AccordionItem>
            <AccordionItem title="O Sistema que Gera Tração" isOpen={openAccordion === 2} onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
              <p>Traduzimos a arquitetura estratégica em um sistema de aceleração. Equipamos seu time com os ativos e a disciplina necessários para articular o novo valor, criando um motor de receita previsível que escala com inteligência.</p>
            </AccordionItem>
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

