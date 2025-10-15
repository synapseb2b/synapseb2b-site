import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  BrainCircuit, // Ícone para Clareza de Valor
  Phone,        // Ícone para Sistema Comercial
  Timer,        // Ícone para Governança de Execução
  Target,       // Ícone para Ativos que Convertem
} from 'lucide-react';

// --- SEÇÃO 0: COMPONENTES REUTILIZÁVEIS ---

// Componente de Texto Rotativo (Hero - Mantido como está)
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

// Componente Divisor de Seção
const SectionDividerGlow = () => <div className="section-divider-glow"></div>;

// --- SEÇÃO 1: ARQUITETURA DE RECEITA ---
const RevenueArchitectureSection = () => {
  const pillars = [
    {
      icon: <BrainCircuit size={32} className="pillar-icon" />,
      title: "Clareza de Valor",
      text: "Traduzimos complexidade técnica em narrativa de decisão fundamentadas em neurociência. Seu cliente ideal precisa entender em 30 segundos: o que você resolve, por que agora, por que você."
    },
    {
      icon: <Phone size={32} className="pillar-icon" />,
      title: "Sistema Comercial",
      text: "Construímos o motor completo: da estratégia de Go-To-Market à arquitetura do processo comercial. Você para de depender de networking heroico e passa a gerar pipeline com método e previsibilidade."
    },
    {
      icon: <Timer size={32} className="pillar-icon" />,
      title: "Governança de Execução",
      text: "Lideramos sua operação de receita como CRO fracionado. Você ganha inteligência C-level sem aumentar headcount. Planejamos juntos o período ideal de acompanhamento, com mínimo de 3 meses, até validar o sistema."
    },
    {
      icon: <Target size={32} className="pillar-icon" />,
      title: "Ativos que Convertem",
      text: "Transformamos estratégia em ativos digitais que geram receita: plataformas de aceleração, ferramentas de ROI, simuladores, matchmakers, apps personalizados focados em business. Tecnologia que educa, qualifica e acelera decisão."
    }
  ];

  return (
    <section id="arquitetura" className="section-solid">
      <div className="container text-center reveal-up">
        <h2 className="section-title">Receita previsível não é acidente. É engenharia.</h2>
        <p className="lead-text">Quatro pilares integrados. Um resultado: você cresce sem depender de sorte.</p>
        <p className="intro-text">
          A maioria das empresas B2B opera em modo reativo. Vendem quando conseguem. Escalam quando sobra recurso. Pivotam quando o mercado força. Isso não é estratégia. É sobrevivência. Receita previsível exige o oposto: clareza antes de execução. Sistema antes de esforço. Nosso trabalho se organiza em quatro pilares que se alimentam:
        </p>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              {pillar.icon}
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- SEÇÃO 2: ESTUDOS DE CASO ---
const CaseStudiesSection = () => {
  const cases = [
    {
      company: "VERSÃO HOLÍSTICA",
      context: "Uma healthtech com metodologia inovadora, mas narrativa dispersa. Hospitais e investidores questionavam: 'O que, exatamente, vocês fazem por mim?'",
      action: "Reposicionamento estratégico completo. Traduzimos 'Cuidado Farmacêutico Integrativo' para 'Plataforma de gestão que reduz custo de paciente crônico'. Construímos a narrativa, validamos o ROI (5.8x) e criamos a categoria: 1ª Plataforma de CareOps Integrativo do Brasil.",
      result: "De oferta confusa para tese de investimento clara. Narrativa que hospitais entendem em 60 segundos.",
      ctaLink: "/cases/versao-holistica" // Exemplo de link
    },
    {
      company: "EXCLUSIVA ENGENHARIAS",
      context: "Engenharia de excelência técnica, mas invisibilidade digital absoluta. Crescimento dependia 100% de indicação e networking, sem previsibilidade.",
      action: "Iniciamos com GTM completo e construímos a plataforma digital com simulador de orçamento. Em seguida, atuamos como CRO as a Service, fundando a Diretoria de Receita e entregando o playbook comercial completo.",
      result: "De invisível para encontrável. De receita reativa para motor de geração de demanda estruturado e escalável.",
      ctaLink: "/cases/exclusiva-engenharias"
    },
    {
      company: "SYNAPSE B2B MATCH MAKER",
      context: "Grupos de networking com informação valiosa perdida em conversas assíncronas e oportunidades invisíveis.",
      action: "Criamos uma ferramenta proprietária de matching inteligente com Neural System, uma plataforma multi-tenant que conecta perfis por competência, necessidade e oportunidade em segundos.",
      result: "De caos relacional para inteligência de conexão. Escalável para qualquer ecossistema que precisa organizar relacionamentos estratégicos.",
      ctaLink: "/ferramentas/match-maker"
    }
  ];

  return (
    <section id="cases" className="section-with-gradient-glow">
      <div className="container text-center reveal-up">
        <h2 className="section-title">Três histórias reais. Três resultados tangíveis.</h2>
        <p className="lead-text">Não entregamos diagnósticos. Entregamos clareza que vira receita.</p>
        <div className="case-studies-grid">
          {cases.map((study, index) => (
            <div key={index} className="case-study-card">
              <h3 className="case-company-name">{study.company}</h3>
              <div className="case-content">
                <p><strong>Contexto:</strong> {study.context}</p>
                <p><strong>O que fizemos:</strong> {study.action}</p>
                <p><strong>Resultado:</strong> {study.result}</p>
              </div>
              <Link href={study.ctaLink} className="btn-case-cta">
                <span>Ver case completo</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
        <div className="closing-statement">
          <p>Esses três casos provam o mesmo princípio: Complexidade técnica sem clareza estratégica é potencial desperdiçado. Nós traduzimos o que está travado no córtex pré-frontal do seu comprador em decisão límbica rápida. Isso é Engenharia de Receita.</p>
        </div>
      </div>
    </section>
  );
};


// --- SEÇÃO 3: NOSSOS ENTREGÁVEIS ---
const DeliverablesSection = () => {
    // Componente interno para reuso
    const DeliverableCard = ({ title, text, when, examples, includes }) => (
        <div className="deliverable-card">
            <h4 className="deliverable-title">{title}</h4>
            <p className="deliverable-text">{text}</p>
            {when && (
                <div className="deliverable-details">
                    <strong>Quando contratar:</strong>
                    <ul>
                        {when.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            )}
             {examples && (
                <div className="deliverable-details">
                    <strong>Exemplos tangíveis:</strong>
                    <ul>
                        {examples.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            )}
            {includes && (
                 <div className="deliverable-details">
                    <strong>O que inclui:</strong>
                    <ul>
                        {includes.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            )}
        </div>
    );

    return(
        <section id="entregaveis" className="section-solid">
            <div className="container text-center reveal-up">
                <h2 className="section-title">O Que Construímos Para Você</h2>
                <p className="lead-text">Duas frentes integradas. Múltiplas formas de entrada.</p>

                <div className="deliverables-container">
                    {/* FRENTE 1 */}
                    <div className="deliverable-front">
                        <h3 className="front-title">Inteligência & Estratégia</h3>
                        <p className="front-intro">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
                        <DeliverableCard
                            title="Sprint de Validação Comercial"
                            text="Valide demanda real antes de contratar time comercial. Testamos oferta, ICP e canais em 30 dias."
                            when={["Produto novo entrando no mercado", "Pivô de modelo de negócio", "Expansão para novo segmento", "Dúvida se há demanda pagante real"]}
                        />
                        <DeliverableCard
                            title="Go-To-Market Completo"
                            text="Arquitetura do zero: posicionamento, ICP, proposta de valor, canais, modelo de vendas, pricing. O blueprint para os próximos 18 meses."
                            when={["Produto validado mas crescimento errático", "Sua narrativa não está clara internamente", "Time comercial vende features, não resolve problemas", "CAC alto, ciclo longo, conversão baixa"]}
                        />
                         <DeliverableCard
                            title="Diretoria de Receita (CRO as a Service)"
                            text="Liderança C-level fracionada. Executamos de inteligência de mercado a fechamento dos primeiros contratos e entregamos o playbook validado."
                            when={["CEO sobrecarregado fazendo comercial", "Time de vendas opera sem liderança estratégica", "Precisa validar processo antes de contratar gerente", "Receita travou e você não sabe qual alavanca puxar"]}
                        />
                         <DeliverableCard
                            title="Advisory Board"
                            text="Atuamos como conselho sob demanda para decisões estratégicas de alto impacto."
                            when={["Decisão com risco alto e impacto irreversível", "Falta referência interna para validar hipótese", "Precisa de sparring qualificado antes de comprometer recurso"]}
                        />
                    </div>

                    {/* FRENTE 2 */}
                    <div className="deliverable-front">
                        <h3 className="front-title">Construção de Ativos Digitais</h3>
                        <p className="front-intro">Onde transformamos estratégia em ferramentas que geram receita enquanto você dorme.</p>
                        <DeliverableCard
                            title="Plataformas de Aceleração de Receita"
                            text="Não construímos sites. Construímos plataformas digitais estratégicas: 30% institucional, 70% engenharia de receita."
                            examples={["exclusivaengenharias.com", "versaoholistica.com.br"]}
                            includes={["Arquitetura de conversão", "Copywriting baseado em neurociência", "Jornadas diferenciadas por perfil", "Integração com CRM e automação"]}
                        />
                        <DeliverableCard
                            title="Ferramentas Estratégicas de Conversão"
                            text="Construímos ativos proprietários que se tornam o centro da sua argumentação de valor: calculadoras de ROI, simuladores, matchmakers e diagnósticos."
                            examples={["Synapse B2B Match Maker", "Simulador de Orçamento Exclusiva Engenharias", "Cortex GTM ™", "MathPop"]}
                             when={["Seu processo de venda depende de apresentação ao vivo", "Cliente precisa 'sentir' o valor antes de comprar", "Ciclo de vendas longo porque o comprador não tangibiliza o resultado", "Você quer escalar argumento de vendas sem contratar mais vendedores"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- SEÇÃO 4: FECHAMENTO ESTRATÉGICO ---
const StrategicClosingSection = () => (
  <section className="section-with-gradient-glow">
    <div className="container text-center reveal-up">
      <h2 className="section-title">Por Que Empresas B2B nos Contratam</h2>
      <p className="lead-text">Três verdades que você já sabe. Uma decisão que ainda não tomou.</p>
      <div className="truths-grid">
        <div className="truth-card">
          <h4>1. Você não tem problema de produto.</h4>
          <p>O problema é que o mercado não entende o valor na velocidade que você precisa para crescer. Complexidade técnica não gera receita previsível.</p>
        </div>
        <div className="truth-card">
          <h4>2. Heroísmo comercial não escala.</h4>
          <p>Crescimento sustentável exige que qualquer vendedor mediano execute um processo excelente. O resto é sorte até parar de funcionar.</p>
        </div>
        <div className="truth-card">
          <h4>3. Você não tem largura de banda para construir isso sozinho.</h4>
          <p>Você precisa de quem já fez isso 50 vezes, executa na linha de frente e entrega o playbook pronto.</p>
        </div>
      </div>
      <div className="final-decision">
        <h3>A Pergunta Não é SE Você Precisa Disso</h3>
        <p>A pergunta é: quanto tempo você vai continuar crescendo sem sistema? Quanto custa cada trimestre de receita imprevisível?</p>
      </div>
    </div>
  </section>
);


// --- PÁGINA PRINCIPAL ---
export default function HomePage() {

  // Efeito de animação ao rolar a página
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
        <meta name="description" content="Você domina a entrega. Nós dominamos como transformar isso em receita previsível." />
      </Head>

      {/* Hero Section */}
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
            <p className="hero-subheadline">
              Você domina a entrega. Nós dominamos como transformar isso em receita previsível.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary">
                <span>Falar com a Synapse B2B</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="#arquitetura" className="btn btn-secondary">
                <span>Como Trabalhamos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDividerGlow />

      <RevenueArchitectureSection />

      <SectionDividerGlow />

      <CaseStudiesSection />
      
      <SectionDividerGlow />

      <DeliverablesSection />

      <SectionDividerGlow />

      <StrategicClosingSection />

      {/* Chamada Final (CTA Section) */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Se você chegou até aqui, já sabe se faz sentido conversar.</h2>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Falar com a Synapse</span>
              <ArrowRight size={20} />
            </Link>
          </div>
           <p className="support-text">
            Primeira conversa: 30 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Sem proposta genérica. Só clareza.
           </p>
        </div>
      </section>
    </>
  );
}
