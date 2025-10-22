import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap, Target, Users, HeartPulse, HardHat, Briefcase, Rocket, MonitorSmartphone, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

// ==========================================================================
//   COMPONENTES REACT REFINADOS
// ==========================================================================

// 1. COMPONENTE DE IMAGEM EXPANSÍVEL APRIMORADO
const ExpandableImage = ({ src, alt, initialHeight = '280px' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`image-expander ${isExpanded ? 'expanded' : ''}`}
        style={{ '--initial-height': initialHeight }}
      >
        <div className="image-container">
          <Image src={src} alt={alt} width={1200} height={675} layout="responsive" priority={false} />
        </div>

        {!isExpanded && (
          <div className="expand-overlay" onClick={toggleExpand}>
            <div className="expand-gradient"></div>
            <button className="expand-button" aria-label="Ver imagem completa">
              <ChevronDown size={24} />
              <span>Ver Imagem Completa</span>
            </button>
          </div>
        )}
      </div>

      {isExpanded && (
        <button
          className="collapse-button-floating"
          onClick={toggleExpand}
          aria-label="Recolher imagem"
        >
          <ChevronUp size={24} />
          <span>Recolher</span>
        </button>
      )}
    </>
  );
};

// 2. COMPONENTE DE HERO COM SUBTÍTULO ANIMADO
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-video-background"><video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video><div className="hero-overlay"></div></div>
      <div className="container hero-content text-center page-hero-padding reveal-up">
        <h1 className="section-title">Quando Clareza Vira Receita</h1>
        <p className="hero-subheadline-animated">
          <span className="reveal-phrase">O córtex pré-frontal do seu comprador trava em análise.</span>
          <span className="reveal-phrase">Você explica.</span>
          <span className="reveal-phrase">Ele ouve.</span>
          <span className="reveal-phrase">Mas a decisão não acontece.</span>
          <span className="reveal-phrase-emphasis">Não é porque seu produto não funciona.</span>
          <span className="reveal-phrase-emphasis">É porque você ativou o sistema errado no cérebro errado.</span>
        </p>
        <p className="lead-text" style={{marginTop: '2rem'}}>
          Estes cases provam que receita previsível não vem de produto superior. Vem de arquitetura neural da decisão.
        </p>
      </div>
    </section>
  );
};

// 3. COMPONENTE DO BLOCO 2 - "O PRINCÍPIO QUE GOVERNA TUDO"
const PrincipleBlock = () => {
  return (
    <section className="principle-block">
      <h2 className="principle-headline">Por Que Empresas Tecnicamente Superiores Perdem para Concorrentes Inferiores</h2>
      <p className="principle-lead">
        O mercado não compra o melhor produto. O mercado compra a mensagem que passa no filtro do <strong>Sistema 1</strong>.
      </p>
      <div className="dual-system-grid">
        <DualSystemCard
          system="1"
          icon="⚡"
          title="Sistema 1"
          subtitle="Decisão Rápida"
          description="Emocional, intuitiva. Opera em 400 milissegundos."
          features={['Rápido e automático', 'Baseado em emoção', 'Decisão instantânea', 'Confiança, urgência, clareza']}
        />
        <DualSystemCard
          system="2"
          icon="🧠"
          title="Sistema 2"
          subtitle="Análise Racional"
          description="Análise lenta, racional, exaustiva. Demanda energia cognitiva cara."
          features={['Lento e deliberado', 'Baseado em lógica', 'Requer esforço mental', 'Complexidade, dúvida']}
        />
      </div>
      <div className="neural-flow-section">
        <h3 className="neural-flow-title">O Mecanismo de Defesa Cerebral</h3>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text)' }}>
          Quando você força o Sistema 2 a processar sua mensagem, o cérebro do decisor ativa o mecanismo de defesa:
        </p>
        <div className="neural-blockquote-section">
            <div className="neural-blockquote problem">
              "Deixe-me explicar nossa arquitetura técnica"... leva a "vamos pensar" (tradução: "isso é complexo demais, vou adiar").
            </div>
            <div className="neural-blockquote solution">
              Quando o Sistema 1 diz "sim" (confiança, urgência, clareza), o Sistema 2 apenas racionaliza a compra.
            </div>
            <div className="neural-blockquote problem">
              Quando o Sistema 1 diz "não sinto isso" (confusão, dúvida), o Sistema 2 encontra desculpas para não comprar.
            </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text)', fontWeight: 600 }}>
          A seguir apresentamos cinco casos reais que mostram como recodificamos mensagens para ativar o Sistema 1 primeiro.
        </p>
      </div>
    </section>
  );
};

// 4. COMPONENTE DE CARD DO SISTEMA DUAL
const DualSystemCard = ({ system, icon, title, subtitle, description, features }) => {
  return (
    <div className={`system-card system-${system}`}>
      <div className="system-icon">{icon}</div>
      <h3 className="system-title">{title}</h3>
      <p className="system-subtitle">{subtitle}</p>
      <p className="system-description">{description}</p>
      <ul className="system-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

// 5. COMPONENTES DE CASE (DIAGNÓSTICO, TRANSFORMAÇÃO, ETC.)
const DiagnosisCard = ({ title, content, type = 'problem' }) => (
    <div className={`diagnosis-card diagnosis-${type}`}>
        <h4>{title}</h4>
        {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
);

const TransformationCard = ({ before, after }) => (
    <div className="transformation-card">
        <div className="transformation-column before-column">
            <h4>Antes</h4>
            <div className="transformation-content"><ul>{before.map((item, idx) => <li key={idx}>{item}</li>)}</ul></div>
        </div>
        <div className="transformation-arrow"><ArrowRight size={32} /></div>
        <div className="transformation-column after-column">
            <h4>Depois</h4>
            <div className="transformation-content"><ul>{after.map((item, idx) => <li key={idx}>{item}</li>)}</ul></div>
        </div>
    </div>
);

const InterventionPhase = ({ phase, title, description, neuralImpact }) => (
    <div className="intervention-phase">
        <div className="phase-number-badge">{phase}</div>
        <div className="phase-content">
            <h4>{title}</h4>
            <p className="phase-description">{description}</p>
            {neuralImpact && (
                <div className="neural-impact">
                    <span className="impact-label">Impacto Neural:</span>
                    <p>{neuralImpact}</p>
                </div>
            )}
        </div>
    </div>
);

const CaseSection = ({ title, intro, children }) => (
    <div className="case-section-block">
      <h3 className="case-section-title">{title}</h3>
      {intro && <p className="case-intro-text">{intro}</p>}
      {children}
    </div>
);

const NeuralSequence = ({ items }) => (
    <div className="neural-sequence-compact">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ArrowRight size={16} />}
          <span>{item}</span>
        </React.Fragment>
      ))}
    </div>
);

const ConsequencesBlock = ({ title, items }) => (
    <div className="consequences-block">
      <h4>{title}</h4>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
);

const OmnicanalStructure = ({ before, after }) => (
    <div className="omnicanal-structure">
      <div className="omnicanal-column">
        <h4>Antes</h4>
        <ul className="omnicanal-list">{before.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div className="omnicanal-column">
        <h4>Depois</h4>
        <ul className="omnicanal-list">{after.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </div>
);

// ==========================================================================
//   PÁGINA PRINCIPAL DE CASES
// ==========================================================================

export default function CasesPage() {

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
    document.querySelectorAll('.reveal-up, .reveal-phrase, .reveal-phrase-emphasis, .system-card, .flow-item, .neural-blockquote').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Cases | Arquitetura Neural da Decisão</title>
        <meta name="description" content="Estes cases provam que receita previsível não vem de produto superior. Vem de arquitetura neural da decisão." />
      </Head>

      {/* BLOCO 1: HERO */}
      <HeroSection />

      <div className="section-divider-glow"></div>

      {/* BLOCO 2: O PRINCÍPIO QUE GOVERNA TUDO */}
      <section className="section-solid">
          <div className="container reveal-up">
              <PrincipleBlock />
          </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ================================================================================= */}
      {/* =================================== CASE 1 ==================================== */}
      {/* ================================================================================= */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 1</span><h2 className="case-title">Exclusiva Engenharias</h2><p className="case-subtitle">Recodificação Neural de Três Empresas Invisíveis</p></div>
          
          <CaseSection title="O Travamento Neural">
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação.</p>
            <DiagnosisCard 
              title="Diagnóstico (Cortex GTM™)"
              content={
                <div>
                  <p>O cérebro do decisor industrial não conseguia categorizar a oferta.</p>
                  <blockquote className="phrase">"São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</blockquote>
                  <NeuralSequence items={['Sem categoria clara', 'Sistema 1 não reconhece padrão', 'Decisão não acontece']} />
                </div>
              }
              type="problem"
            />
            <ConsequencesBlock 
              title="Consequências Operacionais"
              items={[
                'Operação em modo sobrevivência.',
                'Crescimento dependendo de networking heroico ao invés de sistema replicável.',
                'Cada venda exigia esforço excepcional. Impossível escalar. Impossível prever receita.'
              ]}
            />
          </CaseSection>

          <ExpandableImage src="/cases/exclusivaengenharias-home.png" alt="Plataforma da Exclusiva Engenharias" />

          <CaseSection title="A Intervenção: Engenharia de Receita Aplicada" intro="Não otimizamos a engenharia. Recodificamos como o mercado processa a engenharia.">
            <div className="interventions-grid">
              <InterventionPhase 
                phase="FASE 1"
                title="Recodificação de Identidade + Arquitetura de Proposta de Valor"
                description={<><strong>Recodificação:</strong> De "Somos três empresas de engenharia" para <strong>"Somos o hub de engenharias que resolve problemas industriais que outros evitam"</strong>.</>}
                neuralImpact="De confusão para clareza. Categoria mental criada."
              />
              <InterventionPhase 
                phase="FASE 2"
                title="Criação de Ativo Digital + Sistema de Aquisição"
                description="Construímos a plataforma digital que materializa a nova identidade. Transformamos o invisível em tangível."
                neuralImpact="Ativo digital vira prova social. Valida o novo posicionamento."
              />
              <InterventionPhase 
                phase="FASE 3"
                title="Implementação de Prova Social Estratégica"
                description="Logos de clientes como Iveco, John Deere e Exército Brasileiro foram estrategicamente posicionados para transferir autoridade."
                neuralImpact="Sistema 1 usa atalhos. Autoridade de grandes marcas = segurança na decisão."
              />
              <InterventionPhase 
                phase="FASE 4"
                title="Desenvolvimento de Narrativa de Fechamento"
                description="Criamos a narrativa que conecta o problema do cliente à solução do hub, guiando o decisor do ponto A (problema) ao B (contrato)." 
                neuralImpact="Narrativa cria caminho neural. Remove fricção da jornada de compra."
              />
            </div>
          </CaseSection>

          <ExpandableImage src="/cases/exclusivaengenharias-sobre-nos.png" alt="Sobre Nós da Exclusiva Engenharias" />

          <CaseSection title="O Resultado: De Indicação para Demanda Estruturada">
            <TransformationCard 
              before={['100% via indicação', 'Crescimento imprevisível', 'Três marcas confusas', 'Invisível no digital']}
              after={['Sistema de aquisição ativo', 'Pipeline de R$ 40 milhões', 'Uma marca forte (hub)', 'Autoridade digital construída']}
            />
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De zero para um pipeline de R$ 40 milhões em 12 meses.</p>
            <div className="case-link"><a href="https://exclusivaengenharias.com.br" target="_blank" rel="noopener noreferrer">Visite a prova: exclusivaengenharias.com.br →</a></div>
          </CaseSection>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ================================================================================= */}
      {/* =================================== CASE 2 ==================================== */}
      {/* ================================================================================= */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 2</span><h2 className="case-title">Versão Holística</h2><p className="case-subtitle">De Clínica de Saúde para Plataforma de Cuidado Integrativo</p></div>

          <CaseSection title="O Travamento Neural: Complexidade Sem Clareza">
            <p>Uma clínica de saúde com uma abordagem revolucionária (Cuidado Integrativo). Mas a mensagem era complexa demais para o paciente entender e para o médico referenciar.</p>
            <DiagnosisCard 
              title="Diagnóstico (Cortex GTM™)"
              content={
                <div>
                  <p>A narrativa era acadêmica, não comercial. Falava para pares, não para pacientes.</p>
                  <blockquote className="phrase">"Nosso sistema proprietário de cuidado otimiza a jornada do paciente crônico..."</blockquote>
                  <NeuralSequence items={['Mensagem complexa', 'Sistema 2 sobrecarregado', 'Decisor congela']} />
                </div>
              }
              type="problem"
            />
            <ConsequencesBlock 
              title="Consequências Operacionais"
              items={[
                'Pacientes não entendiam o valor.',
                'Médicos não referenciavam (risco reputacional).',
                'Ciclo de venda longo e caro.',
                'Modelo inovador parecia "alternativo" demais.'
              ]}
            />
          </CaseSection>

          <ExpandableImage src="/cases/versaoholistica-home.png" alt="Plataforma da Versão Holística" />

          <CaseSection title="A Intervenção: Recodificação para Simplicidade e Confiança" intro="Simplificamos a mensagem para que o Sistema 1 do paciente e do médico dissesse ‘sim’ em 3 segundos.">
            <div className="interventions-grid">
                <InterventionPhase 
                    phase="FASE 1"
                    title="Recodificação da Mensagem Central"
                    description={<>De "Plataforma de Cuidado Integrativo" para <strong>"Transforme o Alto Custo de Pacientes Crônicos em Sustentabilidade Financeira"</strong>.</>}
                    neuralImpact="De ‘o que é’ para ‘o que resolve’. Conecta com a dor do gestor hospitalar."
                />
                <InterventionPhase 
                    phase="FASE 2"
                    title="Arquitetura de Prova Social Quantitativa"
                    description="Traduzimos benefícios clínicos em KPIs financeiros: ‘Redução de 27% em custos hospitalares’, ‘ROI de 6:1’. Números são a linguagem do Sistema 2."
                    neuralImpact="Prova social remove o medo da decisão. Números falam mais alto que palavras."
                />
                <InterventionPhase 
                    phase="FASE 3"
                    title="Criação do Ativo Digital B2B (Hospitalar)"
                    description="Construímos uma plataforma focada no gestor hospitalar, com a nova mensagem e provas quantitativas em destaque."
                    neuralImpact="Ativo digital vira o centro da estratégia de GTM. Valida a nova categoria."
                />
                <InterventionPhase 
                    phase="FASE 4"
                    title="Segmentação de Canais de Receita"
                    description="Criamos narrativas distintas para cada canal: Hospitais (B2B), Pacientes (B2C) e Médicos (B2B2C). Cada um com sua própria porta de entrada."
                    neuralImpact="Mensagem certa para o cérebro certo. Reduz a fricção em cada ponto da jornada."
                />
            </div>
          </CaseSection>

          <ExpandableImage src="/cases/versaoholistica-br-hospitais.png" alt="Página para Hospitais da Versão Holística" />

          <CaseSection title="O Resultado: De Complexidade para Contratos Fechados">
            <TransformationCard 
              before={['Mensagem acadêmica', 'Ciclo de venda de 12+ meses', 'Zero tração B2B', 'Invisível para hospitais']}
              after={['Mensagem focada em ROI', 'Ciclo de venda de 3 meses', 'Contratos com 3 grandes hospitais', 'Referência em cuidado integrativo B2B']}
            />
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De zero para R$ 2.1 milhões em economia anual para o primeiro cliente hospitalar.</p>
            <div className="case-link"><a href="https://versaoholistica.com.br/hospitais" target="_blank" rel="noopener noreferrer">Visite a prova: versaoholistica.com.br/hospitais →</a></div>
          </CaseSection>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ================================================================================= */}
      {/* =================================== CASE 3 ==================================== */}
      {/* ================================================================================= */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">Aorkia</h2><p className="case-subtitle">De Ideia no Papel para Plataforma SaaS Global</p></div>

          <CaseSection title="O Travamento Neural: Medo da Categoria Inexistente">
            <p>Uma ideia: plataforma de backup e resiliência para SaaS (Google Workspace, Microsoft 365). Mercado endereçável de bilhões. Mas a empresa ainda não existia.</p>
            <DiagnosisCard 
              title="Diagnóstico (Cortex GTM™)"
              content={
                <div>
                  <p>Como vender para o CIO de uma grande empresa uma solução que ainda não tem marca, produto ou cliente?</p>
                  <blockquote className="phrase">"Quem são vocês? Quem já usa isso? Por que eu deveria confiar?"</blockquote>
                  <NeuralSequence items={['Ideia sem prova', 'Sistema 1 detecta risco', 'Decisão é adiada indefinidamente']} />
                </div>
              }
              type="problem"
            />
            <ConsequencesBlock 
              title="Consequências Operacionais"
              items={[
                'Impossível iniciar conversas com decisores.',
                'Investidores não aportam capital sem prova de tração.',
                'Produto não pode ser construído sem capital.',
                'O ciclo vicioso da startup pré-operacional.'
              ]}
            />
          </CaseSection>

          <ExpandableImage src="/cases/aorkia-home.png" alt="Plataforma da Aorkia" />

          <CaseSection title="A Intervenção: Arquitetura de Confiança Sintética" intro="Se a confiança não existe, nós a construímos sinteticamente. Usamos os blocos de autoridade que o Sistema 1 já reconhece.">
            <div className="interventions-grid">
                <InterventionPhase 
                    phase="FASE 1"
                    title="Construção de Identidade e Categoria"
                    description={<>Criamos o nome (Aorkia), a identidade visual e a categoria: <strong>Backup SaaS Estratégico</strong>. Demos um nome ao que era apenas uma ideia.</>}
                    neuralImpact="Nomear é dominar. Categoria cria o espaço mental no cérebro do cliente."
                />
                <InterventionPhase 
                    phase="FASE 2"
                    title="Arquitetura de Prova Social por Associação"
                    description="Posicionamos a Aorkia ao lado de marcas que o cliente já confia: Google, Microsoft, AWS, e parceiros de segurança como Veeam e Zscaler."
                    neuralImpact="Confiança por osmose. Se eles confiam, eu também posso confiar."
                />
                <InterventionPhase 
                    phase="FASE 3"
                    title="Criação do Ativo Digital Mínimo Viável (MVP)"
                    description="Construímos a plataforma digital que parecia um produto pronto. O cliente navegava, via os parceiros, entendia o valor, antes mesmo do software existir."
                    neuralImpact="O cérebro não distingue o real do percebido. Se parece real, é real."
                />
                <InterventionPhase 
                    phase="FASE 4"
                    title="Homologação com Parceiro Global (Keepit)"
                    description="Usamos o ativo digital para apresentar a Aorkia à Keepit (líder global em backup SaaS). Resultado: homologação como parceiro estratégico para a América Latina."
                    neuralImpact="A prova social máxima: um líder de mercado valida sua solução."
                />
            </div>
          </CaseSection>

          <ExpandableImage src="/cases/aorkia-backup-saas-estrategico.png" alt="Página de Backup SaaS Estratégico da Aorkia" />

          <CaseSection title="O Resultado: 90 Dias de Invisível para Operacional">
            <TransformationCard 
              before={['Zero', 'Ideia no papel', 'Nenhum cliente', 'Sem histórico']}
              after={['Marca criada', 'Narrativa validada', 'Homologação como Parceiro Global Keepit', 'Primeira venda: 1.200+ usuários']}
            />
            <p className="case-metric-summary"><strong>Meta-prova:</strong> Aplicamos em nós mesmos o que vendemos. Funcionou. Agora replicamos para você.</p>
            <div className="case-link"><a href="https://aorkia.com" target="_blank" rel="noopener noreferrer">Visite a prova: aorkia.com →</a></div>
          </CaseSection>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ================================================================================= */}
      {/* =================================== CASE 4 ==================================== */}
      {/* ================================================================================= */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">Póvoas & Partners</h2><p className="case-subtitle">De PDF Estático para Plataforma Omnicanal</p></div>
          
          <CaseSection title="O Contexto: Expertise Sem Arquitetura de Distribuição">
            <p><strong>Elaine Póvoas:</strong> Empresária, Conselheira, Palestrante, Mentora, Colunista e Escritora com participação em 10 livros publicados. Credibilidade consolidada no mercado B2B de tecnologia. <strong>Mas:</strong> Todo seu portfolio estava em um PDF estático.</p>
            <DiagnosisCard 
              title="O Problema Neural"
              content={
                <ul className="diagnosis-list">
                  <li>PDF exige download (fricção)</li>
                  <li>Cliente não sabe qual serviço escolher entre 6 competências diferentes</li>
                  <li>Informação linear (não adaptável ao perfil do decisor)</li>
                  <li>Parceiros estratégicos invisíveis (12 empresas sem exposição)</li>
                  <li>Impossível rastrear interesse (sem analytics)</li>
                  <li>Zero arquitetura de conversão</li>
                </ul>
              }
              type="problem"
            />
          </CaseSection>

          <ExpandableImage src="/cases/Visao_Geral_Site_PovoasPartners_por_SynapseB2B.png" alt="Visão Geral do site da Póvoas & Partners" />

          <CaseSection title="A Intervenção: De Documento para Ecossistema Omnicanal" intro="Não criamos 'mais um site'. Criamos arquitetura de distribuição inteligente onde cada competência e cada parceiro tem sua porta de entrada estratégica.">
            <OmnicanalStructure
              before={['PDF estático', '6 competências misturadas', '12 parceiros invisíveis', 'Zero rastreamento']}
              after={['Plataforma omnicanal', '6 portas de entrada (uma por competência)', '12 parceiros com card estratégico', 'Analytics de comportamento']}
            />
          </CaseSection>

          <CaseSection title="O Resultado: De Documento para Omnicanalidade">
            <TransformationCard 
              before={['PDF estático', '6 competências misturadas', '12 parceiros invisíveis', 'Zero rastreamento']}
              after={['Plataforma omnicanal', '6 portas de entrada (uma por competência)', '12 parceiros com card estratégico', 'Analytics de comportamento']}
            />
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De catálogo para experiência. De distribuição para conversão.</p>
            <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
          </CaseSection>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ================================================================================= */}
      {/* =================================== CASE 5 ==================================== */}
      {/* ================================================================================= */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 5</span><h2 className="case-title">Profissionais de Saúde</h2><p className="case-subtitle">Expertise Clínica Sem Sistema de Receita</p></div>
          
          <CaseSection title="O Travamento Neural: Expertise Clínica ≠ Sistema de Receita">
            <p>Profissionais de saúde — médicos, dentistas, fisioterapeutas — dominam a técnica. Transformam vidas através do cuidado especializado. <strong>Mas:</strong> Formação técnica não inclui inteligência comercial.</p>
            <DiagnosisCard 
              title="O Problema Estrutural"
              content={
                <ul className="diagnosis-list">
                  <li>Agenda lotada não significa caixa saudável</li>
                  <li>Procedimentos de baixo ROI consomem tempo de alto valor</li>
                  <li>Salas ociosas 60% do tempo (ativo parado)</li>
                  <li>Conhecimento valioso preso no consultório (não escalável)</li>
                </ul>
              }
              type="problem"
            />
          </CaseSection>

          <ExpandableImage src="/cases/matchmaking-synapseb2b.png" alt="Exemplo de plataforma para profissionais de saúde" />

          <CaseSection title="A Intervenção: Recodificação de Expertise em Múltiplos Canais de Receita" intro="Não ensinamos medicina. Instalamos inteligência estratégica de receita em quem já domina a entrega clínica.">
            <div className="interventions-grid">
              <InterventionPhase 
                phase="FRENTE 1"
                title="Otimização da Clínica Atual"
                description={<><strong>Redesenho da "Agenda Estratégica":</strong> Mapeamos ROI por procedimento e priorizamos atendimentos de maior impacto financeiro.</>}
                neuralImpact="De agenda reativa para agenda estratégica."
              />
              <InterventionPhase 
                phase="FRENTE 2"
                title="Ativação de Receita Recorrente"
                description={<><strong>Modelo: Clínica Compartilhada.</strong> Sala ociosa que gerava R$ 0/mês passa a gerar receita recorrente ao ser locada para outros profissionais.</>}
                neuralImpact="Ativo parado vira gerador de receita."
              />
              <InterventionPhase 
                phase="FRENTE 3"
                title="Escalabilidade de Conhecimento"
                description={<><strong>Modelo: Educação + Certificação.</strong> O profissional cria um programa de treinamento, replicando sua expertise sem replicar seu tempo.</>}
                neuralImpact="Conhecimento preso vira ativo escalável."
              />
            </div>
          </CaseSection>

          <CaseSection title="O Resultado: De Clínica para Ecossistema de Receita">
            <TransformationCard 
              before={['Agenda reativa', 'Receita linear (horas × valor/hora)', 'Salas ociosas', 'Conhecimento não escalável']}
              after={['Agenda estratégica', 'Receita recorrente + escalável', 'Salas gerando receita 24/7', 'Expertise replicada e monetizada']}
            />
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De profissional para empreendedor. De tempo para sistema.</p>
            <div className="case-link"><a href="/contato" target="_blank" rel="noopener noreferrer">Diagnostique seu caso →</a></div>
          </CaseSection>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Seu Caso Começa Aqui</h2>
          <p className="lead-text">Receita previsível não é sorte. É arquitetura. Vamos construir a sua?</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary">
              <span>Diagnosticar Meu Caso</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

