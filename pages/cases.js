import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap, Target, Users, HeartPulse, HardHat, Briefcase, Rocket, MonitorSmartphone, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

// Componente para Imagem Expansível com Efeito Tecnológico
const ExpandableImage = ({ src, alt, initialHeight = '250px' }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className={`image-expander ${isExpanded ? 'expanded' : ''}`} style={{ '--initial-height': initialHeight }}>
            <div className="image-container">
                <Image src={src} alt={alt} width={1200} height={675} layout="responsive" priority={false} />
            </div>
            
            {!isExpanded && (
                <div className="expand-overlay" onClick={toggleExpand}>
                    <div className="expand-gradient"></div>
                    <button className="expand-button" aria-label="Expandir imagem">
                        <ChevronDown size={24} />
                        <span>Ver Imagem Completa</span>
                    </button>
                </div>
            )}
            
            {isExpanded && (
                <button className="collapse-button" onClick={toggleExpand} aria-label="Recolher imagem">
                    <ChevronUp size={20} />
                    <span>Recolher</span>
                </button>
            )}
        </div>
    );
};

// Componente para Card de Diagnóstico
const DiagnosisCard = ({ title, content, type = 'problem' }) => {
    return (
        <div className={`diagnosis-card diagnosis-${type}`}>
            <h4>{title}</h4>
            {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
    );
};

// Componente para Card de Transformação (Antes/Depois)
const TransformationCard = ({ before, after }) => {
    return (
        <div className="transformation-card">
            <div className="transformation-column before-column">
                <h4>Antes</h4>
                <div className="transformation-content">
                    {Array.isArray(before) ? (
                        <ul>
                            {before.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{before}</p>
                    )}
                </div>
            </div>
            
            <div className="transformation-arrow">
                <ArrowRight size={32} />
            </div>
            
            <div className="transformation-column after-column">
                <h4>Depois</h4>
                <div className="transformation-content">
                    {Array.isArray(after) ? (
                        <ul>
                            {after.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{after}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Componente para Fase de Intervenção
const InterventionPhase = ({ phase, title, description, neuralImpact }) => {
    return (
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
};

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
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Cases | Arquitetura Neural da Decisão</title>
        <meta name="description" content="Estes cases provam que receita previsível não vem de produto superior. Vem de arquitetura neural da decisão." />
      </Head>

      {/* BLOCO 1: HERO */}
      <section className="hero-section">
        <div className="hero-video-background"><video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video><div className="hero-overlay"></div></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Quando Clareza Vira Receita</h1>
          <p className="hero-subheadline wider-on-desktop">O córtex pré-frontal do seu comprador trava em análise. Você explica. Ele ouve. Mas a decisão não acontece.<br/>Não é porque seu produto não funciona. É porque você ativou o sistema errado no cérebro errado.</p>
          <p className="lead-text" style={{marginTop: '2rem'}}>Estes cases provam que receita previsível não vem de produto superior. Vem de arquitetura neural da decisão.</p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 2: O PRINCÍPIO QUE GOVERNA TUDO */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="intro-cases-block">
            <h2 className="section-title">Por Que Empresas Tecnicamente Superiores Perdem para Concorrentes Inferiores</h2>
            <p className="lead-text">O mercado não compra o melhor produto. O mercado compra a mensagem que passa no filtro do <strong>Sistema 1</strong>.</p>
            <div className="dual-system-box">
                <div className="system-side"><h4>Sistema 1</h4><p>Decisão rápida, emocional, intuitiva. Opera em 400 milissegundos.</p></div>
                <div className="system-side system-2"><h4>Sistema 2</h4><p>Análise lenta, racional, exaustiva. Demanda energia cognitiva cara.</p></div>
            </div>
            <div className="neural-flow">
              <div className="flow-item"><p>Quando você força o Sistema 2 a processar:</p><blockquote className="phrase">"deixe-me explicar nossa arquitetura técnica"</blockquote><p>...o cérebro do decisor ativa o mecanismo de defesa:</p><blockquote className="consequence">"vamos pensar" (tradução: "isso é complexo demais, vou adiar").</blockquote></div>
              <p className="flow-summary">A seguir apresentamos cinco casos reais que mostram como recodificamos mensagens para ativar o Sistema 1 primeiro. O princípio é simples:</p>
              <div className="flow-item"><p>Quando o Sistema 1 diz "sim":</p><blockquote className="phrase positive">confiança, urgência, clareza</blockquote><p>...o Sistema 2 racionaliza a compra.</p></div>
              <div className="flow-item"><p>Quando o Sistema 1 diz "não sinto isso":</p><blockquote className="phrase negative">confusão, dúvida</blockquote><p>...o Sistema 2 encontra desculpas para não comprar.</p></div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 3: CASE 1 - EXCLUSIVA ENGENHARIAS */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 1</span><h2 className="case-title">Exclusiva Engenharias</h2><p className="case-subtitle">Recodificação Neural de Três Empresas Invisíveis</p></div>
          
          {/* SEÇÃO 1: O PROBLEMA */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Travamento Neural</h3>
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação.</p>
            
            <DiagnosisCard 
              title="Diagnóstico (Cortex GTM™)"
              content={
                <div>
                  <p>O cérebro do decisor industrial não conseguia categorizar a oferta.</p>
                  <blockquote className="phrase">"São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</blockquote>
                  <div className="neural-sequence-compact">
                    <span>Sem categoria clara</span>
                    <ArrowRight size={16} />
                    <span>Sistema 1 não reconhece padrão</span>
                    <ArrowRight size={16} />
                    <span>Decisão não acontece</span>
                  </div>
                </div>
              }
              type="problem"
            />
            
            <div className="consequences-block">
              <h4>Consequências Operacionais</h4>
              <ul>
                <li>Operação em modo sobrevivência.</li>
                <li>Crescimento dependendo de networking heroico ao invés de sistema replicável.</li>
                <li>Cada venda exigia esforço excepcional. Impossível escalar. Impossível prever receita.</li>
              </ul>
            </div>
          </div>

          {/* IMAGEM 1 */}
          <ExpandableImage src="/cases/exclusivaengenharias-home.png" alt="Plataforma da Exclusiva Engenharias" initialHeight="280px" />

          {/* SEÇÃO 2: A SOLUÇÃO */}
          <div className="case-section-block">
            <h3 className="case-section-title">A Intervenção: Engenharia de Receita Aplicada</h3>
            <p className="case-intro-text">Não otimizamos a engenharia. Recodificamos como o mercado processa a engenharia.</p>
            
            <div className="interventions-grid">
              <InterventionPhase 
                phase="FASE 1"
                title="Recodificação de Identidade + Arquitetura de Proposta de Valor"
                description={
                  <>
                    <strong>Recodificação:</strong> De "Somos três empresas de engenharia" para <strong>"Somos o hub de engenharias que resolve problemas industriais que outros evitam"</strong>.<br/>
                    <strong>Proposta de valor:</strong> De apresentação de 40 minutos para <strong>"Projetos que funcionam na primeira vez"</strong>.
                  </>
                }
                neuralImpact="Cérebro categoriza instantaneamente. 'Hub' = agregador. 'Problemas que outros evitam' = especialização. Ativa amígdala (medo de erro), depois núcleo accumbens (promessa de resultado)."
              />
              
              <InterventionPhase 
                phase="FASE 2"
                title="Plataforma de Aceleração de Receita"
                description={
                  <>
                    <strong>exclusivaengenharias.com</strong> não é site institucional. É ativo de conversão neural.<br/>
                    • 30% institucional (credibilidade)<br/>
                    • 70% engenharia de receita (conversão)<br/>
                    • Cada página ativa Sistema 1 antes de Sistema 2
                  </>
                }
                neuralImpact="Lead entra educado sobre valor antes do contato comercial."
              />
              
              <InterventionPhase 
                phase="FASE 3"
                title="Simulador de Orçamento Integrado"
                description={
                  <>
                    Ferramenta proprietária que toma decisão cognitivamente cara no lugar do cliente.<br/>
                    • Cliente insere: tipo de projeto + escopo + prazo<br/>
                    • Sistema retorna: estimativa em 30 segundos
                  </>
                }
                neuralImpact="Decisão exaustiva (calcular custo) executada pelo sistema. Reduz carga cognitiva."
              />
              
              <InterventionPhase 
                phase="FASE 4"
                title="CRO as a Service (Governança de Execução)"
                description={
                  <>
                    Liderança C-level fracionada operando Diretoria de Receita:<br/>
                    • Inteligência de mercado<br/>
                    • Prospecção ativa estruturada<br/>
                    • Execução pioneira de reuniões<br/>
                    • Playbook documentado para escalar time
                  </>
                }
                neuralImpact="De heroísmo individual para sistema replicável."
              />
            </div>
          </div>

          {/* IMAGEM 2 */}
          <ExpandableImage src="/cases/exclusivaengenharias-sobre-nos.png" alt="Detalhe da plataforma Exclusiva Engenharias" initialHeight="280px" />

          {/* SEÇÃO 3: O RESULTADO */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Resultado: Transformação Sistêmica</h3>
            
            <TransformationCard 
              before={[
                "3 empresas segregadas",
                "Zero presença digital",
                "100% indicação",
                "Receita imprevisível"
              ]}
              after={[
                "Hub consolidado com identidade clara",
                "Motor de geração de demanda ativo",
                "Primeiros clientes por busca orgânica",
                "Sistema replicável documentado"
              ]}
            />
            
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De invisível para encontrável. De heroísmo para sistema.</p>
            <div className="case-link"><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Visite a prova: exclusivaengenharias.com →</a></div>
          </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>

      {/* BLOCO 4: CASE 2 - VERSÃO HOLÍSTICA */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 2</span><h2 className="case-title">Versão Holística</h2><p className="case-subtitle">Tradução Neurocientífica de Inovação em ROI</p></div>
          
          {/* SEÇÃO 1: O PROBLEMA */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Travamento Neural</h3>
            <p>Healthtech com produto validado, mas hospitais e investidores faziam sempre a mesma pergunta:</p>
            <blockquote className="phrase">"O que, exatamente, vocês fazem por mim?"</blockquote>
            
            <DiagnosisCard 
              title="Diagnóstico (Cortex GTM™)"
              content={
                <div>
                  <p>A narrativa <strong>"Cuidado Farmacêutico Integrativo"</strong> forçava o decisor (CFO de hospital) a entrar em Sistema 2 exaustivo:</p>
                  <ul className="diagnosis-list">
                    <li>"Farmacêutico = medicamento?"</li>
                    <li>"Integrativo = holístico?"</li>
                    <li>"Isso reduz custo ou aumenta?"</li>
                    <li>"Quem paga? Quanto custa? Qual evidência?"</li>
                  </ul>
                  <p><strong>Resultado:</strong> Pitch de 15 minutos terminava com "Vamos pensar..." (tradução: "Isso é complexo demais. Adio decisão.")</p>
                </div>
              }
              type="problem"
            />
          </div>

          {/* IMAGEM 1 */}
          <ExpandableImage src="/cases/versaoholistica-home.png" alt="Plataforma da Versão Holística" initialHeight="280px" />

          {/* SEÇÃO 2: A SOLUÇÃO */}
          <div className="case-section-block">
            <h3 className="case-section-title">A Intervenção: As 5 Lentes do Cortex GTM™</h3>
            <p className="case-intro-text">Não mudamos o produto. Recodificamos como o cérebro do CFO processa o produto.</p>
            
            <div className="interventions-grid">
              <InterventionPhase 
                phase="LENTE 1"
                title="Fundador (Preservar Instinto, Traduzir Linguagem)"
                description={
                  <>
                    <strong>Insight:</strong> Fundadora criou metodologia por vivência pessoal.<br/>
                    <strong>Recodificação:</strong> De "Cuidado Farmacêutico Integrativo" para <strong>"Plataforma que reduz custo de paciente crônico em 5.8x"</strong>.
                  </>
                }
                neuralImpact="Sistema 1 reconhece padrão 'redução de custo' instantaneamente. Amígdala relaxa (risco diminui)."
              />
              
              <InterventionPhase 
                phase="LENTE 2"
                title="Comprador (Mapear Processo Decisório Real)"
                description={
                  <>
                    <strong>Descoberta:</strong> Decisor real é o CFO, gatilho é ROI tangível.<br/>
                    <strong>Recodificação:</strong> Paramos de vender "metodologia inovadora" (abstrato) e começamos a vender <strong>"ROI 5.8x validado"</strong> (concreto).
                  </>
                }
                neuralImpact="Objeção principal eliminada. Decisão avança."
              />
              
              <InterventionPhase 
                phase="LENTE 3"
                title="Receita (Definir ICP e Modelo Único)"
                description={
                  <>
                    <strong>ICP refinado:</strong><br/>
                    • Hospitais: 200+ leitos, alta sinistralidade<br/>
                    • Empresas: Programas de saúde corporativa<br/>
                    • Escolas: Reduzir absenteísmo via saúde preventiva<br/>
                    <strong>Modelo:</strong> B2B com fee por paciente (sem dispersão).
                  </>
                }
                neuralImpact="Clareza operacional = clareza comercial."
              />
              
              <InterventionPhase 
                phase="LENTE 4"
                title="Neurociência (Ativar Sistema 1 Antes de Sistema 2)"
                description={
                  <>
                    <strong>Camada 1 — Dor:</strong> "Paciente crônico é seu maior custo"<br/>
                    <strong>Camada 2 — Solução:</strong> "Reduzimos esse custo em 5.8x"<br/>
                    <strong>Camada 3 — Prova:</strong> "Hospital X economizou R$ 2.1M/ano"
                  </>
                }
                neuralImpact="Decisão passa pelo filtro emocional antes de análise racional."
              />
              
              <InterventionPhase 
                phase="LENTE 5"
                title="Andragogia (Educar Mercado, Criar Categoria)"
                description={
                  <>
                    <strong>Problema:</strong> Categoria não existia na mente do decisor.<br/>
                    <strong>Solução:</strong> Cunhamos termo <strong>"CareOps Integrativo"</strong> e posicionamos como <strong>"1ª Plataforma de CareOps do Brasil"</strong>.
                  </>
                }
                neuralImpact="Quando você nomeia a categoria, você domina a categoria."
              />
            </div>
          </div>

          {/* IMAGEM 2 */}
          <ExpandableImage src="/cases/versaoholistica-br-hospitais.png" alt="Página de Hospitais da Versão Holística" initialHeight="280px" />

          {/* SEÇÃO 3: O RESULTADO */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Resultado: Transformação da Tese</h3>
            
            <TransformationCard 
              before={[
                "Pitch de 15 minutos",
                "Decisor confuso",
                "'Vamos pensar...' (= não)",
                "Oferta dispersa"
              ]}
              after={[
                "Pitch de 3 minutos",
                "Decisor entende valor",
                "'Quando começamos?' (= sim)",
                "Tese clara e replicável"
              ]}
            />
            
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De confusão para clareza. De abstrato para tangível.</p>
            <div className="case-link"><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">Visite a prova: versaoholistica.com.br →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 5: CASE 3 - AORKIA */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">AORKIA</h2><p className="case-subtitle">De Zero a Parceiro Global em 90 Dias</p></div>
          
          {/* SEÇÃO 1: O PROBLEMA */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Contexto: Prova de Conceito Sob Pressão</h3>
            <p>Pergunta que todo cliente faz: "Vocês usam o método em vocês mesmos?"</p>
            <p><strong>AORKIA é a resposta.</strong></p>
            <p>Empresa nova. Mercado extremamente técnico (Resiliência Cibernética para dados SaaS). Zero histórico. Competindo com players globais consolidados (Veeam, Commvault).</p>
            
            <DiagnosisCard 
              title="Desafio Autoimposto"
              content="Criar do zero — marca, narrativa, posicionamento, plataforma, canal de receita — e atingir primeira tração comercial em 90 dias. Se não conseguíssemos, nossa credibilidade como consultoria de receita seria questionável."
              type="problem"
            />
          </div>

          {/* IMAGEM 1 */}
          <ExpandableImage src="/cases/aorkia-hero.png" alt="Plataforma AORKIA" initialHeight="280px" />

          {/* SEÇÃO 2: A SOLUÇÃO */}
          <div className="case-section-block">
            <h3 className="case-section-title">A Intervenção: Engenharia de Receita em Modo Acelerado</h3>
            
            <div className="interventions-grid">
              <InterventionPhase 
                phase="FASE 1"
                title="Posicionamento Estratégico (Ancoragem de Autoridade)"
                description={
                  <>
                    <strong>Decisão crítica:</strong> Não competir como "mais uma empresa de backup".<br/>
                    <strong>Posicionamento:</strong> <strong>"Parceiro oficial Keepit — líder global em proteção de dados SaaS"</strong>
                  </>
                }
                neuralImpact="Cérebro do decisor faz transferência de autoridade. Keepit (autoridade) → AORKIA (parceiro) → confiança."
              />
              
              <InterventionPhase 
                phase="FASE 2"
                title="Tradução de Complexidade Técnica (Sistema 1)"
                description={
                  <>
                    <strong>Problema:</strong> Mercado de backup SaaS é tecnicamente denso. Termos como "imutabilidade", "air-gapped", "WORM" não significam nada para decisor de negócio.<br/>
                    <strong>Recodificação:</strong> De "Backup imutável em arquitetura air-gapped" para <strong>"Seu provedor SaaS não faz backup dos seus dados. Quanto custa cada minuto de parada?"</strong>
                  </>
                }
                neuralImpact="Ativa amígdala (medo de perda) + urgência. Sistema 1 sinaliza: 'preciso resolver isso agora'."
              />
              
              <InterventionPhase 
                phase="FASE 3"
                title="Plataforma como Ativo de Conversão"
                description={
                  <>
                    <strong>aorkia.com</strong> foi projetada com arquitetura neural específica:<br/>
                    • Hero ativa medo (resiliência é inegociável)<br/>
                    • Social proof imediato (logos de clientes globais Keepit)<br/>
                    • Prova de autoridade (parceiro homologado)<br/>
                    • Redução de fricção (processo claro, sem jargão)
                  </>
                }
                neuralImpact="Cada seção ativa Sistema 1 antes de Sistema 2."
              />
            </div>
          </div>

          {/* SEÇÃO 3: O RESULTADO */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Resultado: 90 Dias de Invisível para Operacional</h3>
            
            <TransformationCard 
              before={[
                "Zero",
                "Ideia no papel",
                "Nenhum cliente",
                "Sem histórico"
              ]}
              after={[
                "Marca criada",
                "Narrativa validada",
                "Homologação como Parceiro Global Keepit",
                "Primeira venda: 1.200+ usuários"
              ]}
            />
            
            <p className="case-metric-summary"><strong>Meta-prova:</strong> Aplicamos em nós mesmos o que vendemos. Funcionou. Agora replicamos para você.</p>
            <div className="case-link"><a href="https://aorkia.com" target="_blank" rel="noopener noreferrer">Visite a prova: aorkia.com →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 6: CASE 4 - PÓVOAS & PARTNERS */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">Póvoas & Partners</h2><p className="case-subtitle">De PDF Estático para Plataforma Omnicanal</p></div>
          
          {/* SEÇÃO 1: O PROBLEMA */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Contexto: Expertise Sem Arquitetura de Distribuição</h3>
            <p><strong>Elaine Póvoas:</strong> Empresária, Conselheira, Palestrante, Mentora, Colunista e Escritora com participação em 10 livros publicados. Credibilidade consolidada no mercado B2B de tecnologia.</p>
            <p><strong>Mas:</strong> Todo seu portfolio estava em um PDF estático.</p>
            
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
          </div>

          {/* IMAGEM 1 */}
          <ExpandableImage src="/cases/povoas-before-after.png" alt="Comparação Antes/Depois - Póvoas & Partners" initialHeight="280px" />

          {/* SEÇÃO 2: A SOLUÇÃO */}
          <div className="case-section-block">
            <h3 className="case-section-title">A Intervenção: De Documento para Ecossistema Omnicanal</h3>
            <p className="case-intro-text">Não criamos "mais um site". Criamos arquitetura de distribuição inteligente onde cada competência e cada parceiro tem sua porta de entrada estratégica.</p>
            
            <div className="omnicanal-structure">
              <div className="omnicanal-column">
                <h4>6 Competências, 6 Portas de Entrada</h4>
                <ul className="omnicanal-list">
                  <li>Palestras (soft skills)</li>
                  <li>Treinamentos (Marketing, Vendas, Serviços)</li>
                  <li>Mentoria (desenvolvimento de talentos)</li>
                  <li>Conselho Consultivo (governança corporativa)</li>
                  <li>Head Hunter (conexão talentos-vagas)</li>
                  <li>Cerimonialista (experiências memoráveis)</li>
                </ul>
              </div>
              <div className="omnicanal-column">
                <h4>12 Parceiros Estratégicos, 12 Canais de Valor</h4>
                <p className="omnicanal-impact">Cada parceiro deixa de ser "logo no slide" e vira porta de entrada com transferência de autoridade. Cliente confia porque Elaine chancela.</p>
              </div>
            </div>
          </div>

          {/* SEÇÃO 3: O RESULTADO */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Resultado: De Documento para Omnicanalidade</h3>
            
            <TransformationCard 
              before={[
                "PDF estático",
                "6 competências misturadas",
                "12 parceiros invisíveis",
                "Zero rastreamento"
              ]}
              after={[
                "Plataforma omnicanal",
                "6 portas de entrada (uma por competência)",
                "12 parceiros com card estratégico",
                "Analytics de comportamento"
              ]}
            />
            
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De catálogo para experiência. De distribuição para conversão.</p>
            <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 7: CASE 5 - PROFISSIONAIS DE SAÚDE */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 5</span><h2 className="case-title">Profissionais de Saúde</h2><p className="case-subtitle">Expertise Clínica Sem Sistema de Receita</p></div>
          
          {/* SEÇÃO 1: O PROBLEMA */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Travamento Neural: Expertise Clínica ≠ Sistema de Receita</h3>
            <p>Profissionais de saúde — médicos, dentistas, fisioterapeutas, nutricionistas, psicólogos — dominam a técnica. Transformam vidas através do cuidado especializado.</p>
            <p><strong>Mas:</strong> Formação técnica não inclui inteligência comercial.</p>
            
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
          </div>

          {/* IMAGEM 1 */}
          <ExpandableImage src="/cases/profissionais-saude.png" alt="Profissional de Saúde em Atendimento" initialHeight="280px" />

          {/* SEÇÃO 2: A SOLUÇÃO */}
          <div className="case-section-block">
            <h3 className="case-section-title">A Intervenção: Recodificação de Expertise em Múltiplos Canais de Receita</h3>
            <p className="case-intro-text">Não ensinamos medicina ou odontologia. Instalamos inteligência estratégica de receita em quem já domina a entrega clínica.</p>
            
            <div className="interventions-grid">
              <InterventionPhase 
                phase="FRENTE 1"
                title="Otimização da Clínica Atual"
                description={
                  <>
                    <strong>Redesenho da "Agenda Estratégica":</strong><br/>
                    • Mapeamos ROI por procedimento<br/>
                    • Priorizamos atendimentos de maior impacto financeiro<br/>
                    • Profissional ganha mais trabalhando igual ou menos
                  </>
                }
                neuralImpact="De agenda reativa para agenda estratégica."
              />
              
              <InterventionPhase 
                phase="FRENTE 2"
                title="Ativação de Receita Recorrente"
                description={
                  <>
                    <strong>Modelo: Clínica Compartilhada</strong><br/>
                    • Sala ociosa 60% do tempo = R$ 0/mês<br/>
                    • Sala locada para outros profissionais = Receita recorrente<br/>
                    • Sem aumentar esforço
                  </>
                }
                neuralImpact="Ativo parado vira gerador de receita."
              />
              
              <InterventionPhase 
                phase="FRENTE 3"
                title="Escalabilidade de Conhecimento"
                description={
                  <>
                    <strong>Modelo: Educação + Certificação</strong><br/>
                    • Profissional cria programa de treinamento (online ou presencial)<br/>
                    • Replica expertise sem replicar tempo<br/>
                    • Novo canal de receita + posicionamento de autoridade
                  </>
                }
                neuralImpact="Conhecimento preso vira ativo escalável."
              />
            </div>
          </div>

          {/* SEÇÃO 3: O RESULTADO */}
          <div className="case-section-block">
            <h3 className="case-section-title">O Resultado: De Clínica para Ecossistema de Receita</h3>
            
            <TransformationCard 
              before={[
                "Agenda reativa",
                "Receita linear (horas × valor/hora)",
                "Salas ociosas",
                "Conhecimento não escalável"
              ]}
              after={[
                "Agenda estratégica",
                "Receita recorrente + escalável",
                "Salas gerando receita 24/7",
                "Expertise replicada e monetizada"
              ]}
            />
            
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De profissional para empreendedor. De tempo para sistema.</p>
            <div className="case-link"><a href="https://synapseb2b.com/profissionais-saude" target="_blank" rel="noopener noreferrer">Visite a prova: synapseb2b.com/profissionais-saude →</a></div>
          </div>
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

