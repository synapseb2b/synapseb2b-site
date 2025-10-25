import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Zap, Brain, Building2, Heart, Shield, Users, Sparkles, Network, ArrowRight, CheckCircle } from 'lucide-react';

export default function Cases() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Cases | Engenharia de Receita</title>
        <meta name="description" content="Quando clareza vira receita: cases reais de Engenharia de Receita aplicada" />
      </Head>

      <div className="min-h-screen">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-video-background">
            <video autoPlay muted loop playsInline className="hero-video">
              <source src="/video/video_home.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content text-center page-hero-padding reveal-up">
            <div className="badge-pill">Engenharia de Receita em Ação</div>
            <h1 className="hero-headline" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginTop: '1rem' }}>
              Quando <span className="highlight-primary">Clareza</span> Vira <span className="highlight-primary">Receita</span>
            </h1>
            <p className="hero-subheadline" style={{ fontSize: '1.4rem', marginTop: '2rem', maxWidth: '850px' }}>
              O córtex pré-frontal do seu comprador trava em análise. Você explica. Ele ouve. Mas a decisão não acontece.
            </p>
            <p className="hero-subheadline-emphasis" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Não é porque seu produto não funciona. É porque você ativou o sistema errado no cérebro errado.
            </p>
            <div className="hero-conclusion-box">
              <p>Estes cases provam que receita previsível não vem de produto superior. Vem de <strong>arquitetura neural da decisão</strong>.</p>
            </div>
          </div>
        </section>

        {/* SISTEMA 1 vs 2 */}
        <section className="section-solid">
          <div className="container text-center reveal-up">
            <h2 className="section-title" style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
              O Mercado Compra o Melhor Produto com a Melhor Mensagem que Passa no Filtro do Sistema 1
            </h2>
            
            <div className="battle-card-container">
              <div className="battle-card battle-card-left">
                <div className="battle-card-header">
                  <Zap size={64} className="battle-icon" />
                  <h3>Sistema 1</h3>
                  <p className="battle-subtitle">Decisão Rápida</p>
                </div>
                <div className="battle-card-body">
                  <p className="battle-description">Decisão rápida, emocional, intuitiva. Opera em 400 milissegundos.</p>
                  <div className="battle-metric">400ms</div>
                  <ul className="battle-features">
                    <li><CheckCircle size={20} /> Rápido e automático</li>
                    <li><CheckCircle size={20} /> Baseado em emoção</li>
                    <li><CheckCircle size={20} /> Decisão instantânea</li>
                    <li><CheckCircle size={20} /> Confiança, urgência, clareza</li>
                  </ul>
                </div>
              </div>

              <div className="battle-divider">
                <span className="battle-vs">VS</span>
              </div>

              <div className="battle-card battle-card-right">
                <div className="battle-card-header">
                  <Brain size={64} className="battle-icon" />
                  <h3>Sistema 2</h3>
                  <p className="battle-subtitle">Análise Racional</p>
                </div>
                <div className="battle-card-body">
                  <p className="battle-description">Análise lenta, racional, exaustiva. Demanda energia cognitiva cara.</p>
                  <div className="battle-metric battle-metric-slow">Lento</div>
                  <ul className="battle-features">
                    <li>Lento e deliberado</li>
                    <li>Baseado em lógica</li>
                    <li>Requer esforço mental</li>
                    <li>Complexidade, dúvida</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="lead-text emphasis-text" style={{ marginTop: '4rem', fontSize: '1.3rem' }}>
              Estes cinco cases mostram como recodificamos mensagens para ativar Sistema 1 primeiro.
            </p>
          </div>
        </section>

        {/* CASE 1: EXCLUSIVA ENGENHARIAS */}
        <section className="case-section">
          <div className="container reveal-up">
            <div className="case-header">
              <Building2 size={48} className="case-icon" />
              <h2 className="case-title">Exclusiva Engenharias</h2>
              <p className="case-subtitle">Recodificação Neural de Três Empresas Invisíveis</p>
            </div>

            <div className="case-challenge">
              <h3>O Travamento Neural</h3>
              <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto.</p>
              <p>Mas crescimento 100% dependente de indicação.</p>
              <div className="diagnosis-box">
                <h4>Diagnóstico (Cortex GTM™):</h4>
                <p>O cérebro do decisor industrial não conseguia categorizar a oferta.</p>
                <p className="quote">"São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</p>
                <p className="neural-flow">Sem categoria clara → Sistema 1 não reconhece padrão → Não gera sensação de "eu entendo o que vocês fazem" → Decisão não acontece.</p>
              </div>
            </div>

            <div className="case-intervention">
              <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
              <p className="intervention-intro">Recodificamos como o mercado processa a mensagem.</p>

              <div className="phase-timeline">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 1</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Recodificação de Identidade + Arquitetura de Proposta de Valor</h4>
                    <div className="before-after">
                      <div className="before">
                        <span className="label">Antes:</span>
                        <p>"Somos três empresas de engenharia"</p>
                      </div>
                      <div className="arrow-transform">→</div>
                      <div className="after">
                        <span className="label">Depois:</span>
                        <p>"Somos o hub de engenharias que resolve problemas industriais que outros evitam"</p>
                      </div>
                    </div>
                    <div className="impact-box">
                      <strong>Impacto neural:</strong>
                      <p>Cérebro categoriza instantaneamente. "Hub" = agregador (padrão reconhecível).</p>
                      <p>"Problemas que outros evitam" = especialização (reduz competição percebida).</p>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 2</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Plataforma de Aceleração de Receita</h4>
                    <p>Projetamos uma Plataforma que se tornou um ativo de conversão neural.</p>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> 30% institucional (credibilidade)</li>
                      <li><CheckCircle size={18} /> 70% engenharia de receita (conversão)</li>
                      <li><CheckCircle size={18} /> Cada página ativa Sistema 1 antes de Sistema 2</li>
                      <li><CheckCircle size={18} /> Lead entra educado sobre valor antes do contato comercial</li>
                    </ul>
                    <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer" className="case-link">
                      exclusivaengenharias.com <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 3</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Ferramentas Estratégicas de Conversão</h4>
                    <div className="tool-box">
                      <h5>Simulador de Orçamento Integrado</h5>
                      <p>Ferramenta proprietária que toma decisão cognitivamente cara no lugar do cliente.</p>
                      <ul className="feature-list">
                        <li>Cliente insere: tipo de projeto + características + prazo</li>
                        <li>Sistema retorna: estimativa de investimento em 10 segundos</li>
                      </ul>
                      <div className="impact-box">
                        <strong>Impacto neural:</strong>
                        <p>Decisão exaustiva (calcular custo) executada pelo sistema.</p>
                        <p>Reduz carga cognitiva. Lead entra na conversa comercial já com contexto de valor.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 4</span>
                  </div>
                  <div className="phase-content">
                    <h4>CRO as a Service (Governança de Execução)</h4>
                    <p>Liderança C-level fracionada operando Diretoria de Receita:</p>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Inteligência de mercado (Win/Loss Analysis)</li>
                      <li><CheckCircle size={18} /> Prospecção ativa estruturada</li>
                      <li><CheckCircle size={18} /> Execução pioneira de reuniões (modelagem de abordagem)</li>
                      <li><CheckCircle size={18} /> Playbook documentado para escalar time</li>
                    </ul>
                    <div className="impact-box">
                      <strong>Impacto:</strong>
                      <p>De heroísmo individual para sistema replicável.</p>
                      <p>Qualquer vendedor mediano executa um processo excelente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-results">
              <h3>O Resultado: Transformação Sistêmica</h3>
              <div className="transformation-board">
                <div className="results-before">
                  <h4>Antes</h4>
                  <ul>
                    <li>3 empresas segregadas</li>
                    <li>Zero presença digital</li>
                    <li>100% indicação</li>
                    <li>Operação em modo sobrevivência</li>
                    <li>Receita imprevisível</li>
                  </ul>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={48} />
                </div>
                <div className="results-after">
                  <h4>Depois</h4>
                  <ul>
                    <li><CheckCircle size={18} /> Hub consolidado com identidade clara</li>
                    <li><CheckCircle size={18} /> Motor de geração de demanda ativo</li>
                    <li><CheckCircle size={18} /> Primeiros clientes por busca orgânica (inédito)</li>
                    <li><CheckCircle size={18} /> Pipeline estruturado</li>
                    <li><CheckCircle size={18} /> Sistema replicável documentado</li>
                    <li><CheckCircle size={18} /> Evento de 5 anos para celebrar reposicionamento estratégico</li>
                  </ul>
                </div>
              </div>
              <div className="metric-highlight">
                <p><strong>Métrica que importa:</strong></p>
                <p>De invisível para encontrável. De heroísmo para sistema.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 2: VERSÃO HOLÍSTICA */}
        <section className="case-section case-section-alt">
          <div className="container reveal-up">
            <div className="case-header">
              <Heart size={48} className="case-icon" />
              <h2 className="case-title">Versão Holística</h2>
              <p className="case-subtitle">Tradução Neurocientífica de Inovação em ROI</p>
            </div>

            <div className="case-challenge">
              <h3>O Travamento Neural</h3>
              <p>Healthtech com metodologia inovadora. Produto validado.</p>
              <p>Mas hospitais e investidores não conseguiam entender a oferta.</p>
              <div className="diagnosis-box">
                <h4>Diagnóstico (Cortex GTM™):</h4>
                <p>A narrativa "Cuidado Farmacêutico Integrativo" forçava o cérebro do decisor a um esforço exaustivo.</p>
                <p className="quote">"Isso é um custo ou um investimento? Qual a evidência? Como eu categorizo isso?"</p>
                <p className="neural-flow">Sem categoria clara → Sistema 1 não reconhece padrão → Gera sensação de complexidade e risco → Decisão é adiada.</p>
              </div>
            </div>

            <div className="case-intervention">
              <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
              <p className="intervention-intro">Não mudamos o produto. Recodificamos como o cérebro do mercado processa a mensagem.</p>

              <div className="phase-timeline">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 1</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Sprint de Validação Comercial</h4>
                    <div className="validation-box">
                      <h5>Mapeamento do Processo Decisório Real</h5>
                      <ul className="feature-list">
                        <li>Decisor real identificado: CFO (não o diretor clínico)</li>
                        <li>Objeção principal a ser superada: "Mais uma consultoria cara sem ROI comprovado"</li>
                        <li>Provocar gatilho de decisão: Case validado com métrica financeira tangível</li>
                      </ul>
                      <div className="impact-box">
                        <strong>Impacto neural:</strong>
                        <p>Paramos de vender "metodologia" (abstrato) para o Sistema 2.</p>
                        <p>Passamos a vender "ROI de 5.8x" (concreto), que o Sistema 1 processa e aceita instantaneamente.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 2</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Go-To-Market Completo</h4>
                    <div className="before-after">
                      <div className="before">
                        <span className="label">Antes:</span>
                        <p>"Cuidado Farmacêutico Integrativo"</p>
                      </div>
                      <div className="arrow-transform">→</div>
                      <div className="after">
                        <span className="label">Depois:</span>
                        <p>"Plataforma que reduz custo de paciente crônico em 5.8x"</p>
                      </div>
                    </div>
                    <div className="impact-box">
                      <strong>Impacto neural:</strong>
                      <p>Sistema 1 reconhece o padrão "redução de custo" imediatamente.</p>
                      <p>Amígdala relaxa (risco financeiro percebido diminui), núcleo accumbens é ativado (promessa de ganho).</p>
                    </div>
                    <div className="category-box">
                      <h5>Criação e Domínio de Categoria</h5>
                      <p>Cunhamos o termo: <strong>"CareOps Integrativo"</strong></p>
                      <p>Posicionamento: <strong>"1ª Plataforma de CareOps do Brasil"</strong></p>
                      <div className="impact-box">
                        <strong>Impacto neural:</strong>
                        <p>Quando você nomeia a categoria, você domina a categoria.</p>
                        <p>Cérebro do decisor associa "CareOps" com "Versão Holística" automaticamente.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 3</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Plataforma de Aceleração de Receita</h4>
                    <p>Projetamos uma Plataforma que se tornou um ativo de conversão neural.</p>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> 30% institucional (credibilidade)</li>
                      <li><CheckCircle size={18} /> 70% engenharia de receita (conversão)</li>
                      <li><CheckCircle size={18} /> Cada página educa o mercado e quebra objeções</li>
                      <li><CheckCircle size={18} /> Lead entra educado sobre o ROI antes do contato comercial</li>
                    </ul>
                    <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="case-link">
                      versaoholistica.com.br <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 4</span>
                  </div>
                  <div className="phase-content">
                    <h4>Advisory Board</h4>
                    <h5>Estratégia de Expansão e Investimento</h5>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Atuação como conselho estratégico sob demanda</li>
                      <li><CheckCircle size={18} /> Validação de três verticais de receita (Hospitais, Empresas, Escolas)</li>
                      <li><CheckCircle size={18} /> Tese de investimento fundamentada para rodada de captação</li>
                      <li><CheckCircle size={18} /> Preparação para escalar a operação com governança</li>
                    </ul>
                    <div className="impact-box">
                      <strong>Impacto:</strong>
                      <p>De uma tese confusa para um plano de crescimento multi-segmento.</p>
                      <p>De uma boa ideia para um negócio investível e replicável.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-results">
              <h3>O Resultado: Transformação da Tese</h3>
              <div className="transformation-board">
                <div className="results-before">
                  <h4>Antes</h4>
                  <ul>
                    <li>Pitch de 15 minutos</li>
                    <li>Decisor confuso</li>
                    <li>"Vamos pensar..." (= não)</li>
                    <li>Oferta dispersa</li>
                    <li>Tese de investimento frágil</li>
                  </ul>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={48} />
                </div>
                <div className="results-after">
                  <h4>Depois</h4>
                  <ul>
                    <li><CheckCircle size={18} /> Pitch de 3 minutos</li>
                    <li><CheckCircle size={18} /> Decisor entende o valor</li>
                    <li><CheckCircle size={18} /> "Quando começamos?" (= sim)</li>
                    <li><CheckCircle size={18} /> Categoria criada e dominada</li>
                    <li><CheckCircle size={18} /> Tese de investimento clara e validada</li>
                    <li><CheckCircle size={18} /> 3 verticais de receita em estruturação</li>
                  </ul>
                </div>
              </div>
              <div className="metric-highlight">
                <p><strong>Métrica que importa:</strong></p>
                <p>De complexo para ROI claro. De "vamos pensar" para "quando começamos?".</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 3: AORKIA */}
        <section className="case-section">
          <div className="container reveal-up">
            <div className="case-header">
              <Shield size={48} className="case-icon" />
              <h2 className="case-title">AORKIA</h2>
              <p className="case-subtitle">Transformação de Promessa Genérica em Métrica Executável</p>
            </div>

            <div className="case-challenge">
              <h3>O Travamento Neural</h3>
              <p>Plataforma de Proteção de Dados com solução robusta. Clientes satisfeitos.</p>
              <p>Mas conversão comercial travada.</p>
              <div className="diagnosis-box">
                <h4>Diagnóstico (Cortex GTM™):</h4>
                <p>Positioning vago ativava Sistema 2 (análise exaustiva) antes de Sistema 1 (decisão rápida).</p>
                <p className="quote">"Como isso é diferente dos concorrentes? Qual o benefício real? Por que devo confiar?"</p>
                <p className="neural-flow">Promessa abstrata → Sistema 1 não consegue validar → Dispara medo de risco → Decisão é adiada ou rejeitada.</p>
              </div>
            </div>

            <div className="case-intervention">
              <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
              <p className="intervention-intro">Não mudamos o produto. Recodificamos a mensagem para reduzir fricção neural.</p>

              <div className="phase-timeline">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 1</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Recodificação de Positioning</h4>
                    <div className="before-after">
                      <div className="before">
                        <span className="label">Antes:</span>
                        <p>"Proteção de Dados Completa"</p>
                      </div>
                      <div className="arrow-transform">→</div>
                      <div className="after">
                        <span className="label">Depois:</span>
                        <p>"Conformidade LGPD em 90 dias ou seu dinheiro de volta"</p>
                      </div>
                    </div>
                    <div className="impact-box">
                      <strong>Impacto neural:</strong>
                      <p>Sistema 1 processa "90 dias" (prazo concreto) + "garantia" (redução de risco) = decisão acontece.</p>
                      <p>Antes: promessa abstrata que exigia validação racional.</p>
                      <p>Depois: promessa executável que o cérebro aceita sem análise profunda.</p>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 2</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Arquitetura de Proposta de Valor</h4>
                    <div className="value-prop-box">
                      <h5>Sistema de Mensagem Neural</h5>
                      <p>Estruturamos três camadas de mensagem:</p>
                      <ul className="feature-list">
                        <li><strong>Camada 1 (Sistema 1):</strong> Promessa de resultado + prazo + garantia</li>
                        <li><strong>Camada 2 (Validação):</strong> Cases com métricas reais</li>
                        <li><strong>Camada 3 (Sistema 2):</strong> Documentação técnica para validação final</li>
                      </ul>
                      <div className="impact-box">
                        <strong>Impacto neural:</strong>
                        <p>Decisor aceita proposta no Sistema 1. Sistema 2 valida depois (não trava antes).</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 3</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Plataforma de Aceleração de Receita</h4>
                    <p>Projetamos uma Plataforma que vende antes de explicar.</p>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Hero que comunica promessa em 3 segundos</li>
                      <li><CheckCircle size={18} /> Checklist de conformidade visual (progress bar neural)</li>
                      <li><CheckCircle size={18} /> ROI Calculator (ferramenta de conversão)</li>
                      <li><CheckCircle size={18} /> Social proof estratégico (reduz risco percebido)</li>
                    </ul>
                    <a href="https://aorkia.com" target="_blank" rel="noopener noreferrer" className="case-link">
                      aorkia.com <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 4</span>
                  </div>
                  <div className="phase-content">
                    <h4>GTM Execution (Lançamento)</h4>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Campanha de lançamento com foco em "conformidade garantida"</li>
                      <li><CheckCircle size={18} /> Outbound com script recodificado (ativa Sistema 1 primeiro)</li>
                      <li><CheckCircle size={18} /> Sequência de follow-up com redução progressiva de objeções</li>
                      <li><CheckCircle size={18} /> Playbook de vendas documentado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-results">
              <h3>O Resultado: Clareza Neural Virou Conversão</h3>
              <div className="transformation-board">
                <div className="results-before">
                  <h4>Antes</h4>
                  <ul>
                    <li>Positioning vago</li>
                    <li>Ciclo de venda longo</li>
                    <li>"Vamos avaliar..." (objeção padrão)</li>
                    <li>Conversão baixa</li>
                  </ul>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={48} />
                </div>
                <div className="results-after">
                  <h4>Depois</h4>
                  <ul>
                    <li><CheckCircle size={18} /> Positioning executável</li>
                    <li><CheckCircle size={18} /> Ciclo de venda reduzido</li>
                    <li><CheckCircle size={18} /> "Quando começamos?" (objeção virou urgência)</li>
                    <li><CheckCircle size={18} /> Conversão aumentada</li>
                    <li><CheckCircle size={18} /> Sistema replicável para escalar vendas</li>
                  </ul>
                </div>
              </div>
              <div className="metric-highlight">
                <p><strong>Métrica que importa:</strong></p>
                <p>De promessa abstrata para garantia executável. De análise para decisão.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 4: PÓVOAS & PARTNERS */}
        <section className="case-section case-section-alt">
          <div className="container reveal-up">
            <div className="case-header">
              <Users size={48} className="case-icon" />
              <h2 className="case-title">Póvoas & Partners</h2>
              <p className="case-subtitle">Reposicionamento de Escritório Jurídico como Operador de Valor</p>
            </div>

            <div className="case-challenge">
              <h3>O Travamento Neural</h3>
              <p>Escritório jurídico boutique. Excelência técnica. Mas posicionamento indistinguível.</p>
              <p>Cliente percebia como "mais um escritório".</p>
              <div className="diagnosis-box">
                <h4>Diagnóstico (Cortex GTM™):</h4>
                <p>O cérebro do decisor categorizava como commodity jurídica.</p>
                <p className="quote">"Advogado é advogado. Vou escolher pelo preço ou indicação."</p>
                <p className="neural-flow">Sem diferenciação percebida → Sistema 1 aplica heurística de commodity → Não gera urgência ou preferência → Decisão é por preço.</p>
              </div>
            </div>

            <div className="case-intervention">
              <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
              <p className="intervention-intro">Recodificamos a identidade de "prestador de serviço jurídico" para "parceiro estratégico de valor".</p>

              <div className="phase-timeline">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 1</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Reposicionamento Estratégico</h4>
                    <div className="before-after">
                      <div className="before">
                        <span className="label">Antes:</span>
                        <p>"Escritório de advocacia empresarial"</p>
                      </div>
                      <div className="arrow-transform">→</div>
                      <div className="after">
                        <span className="label">Depois:</span>
                        <p>"Operadores jurídicos que destravam valor em M&A e reestruturações"</p>
                      </div>
                    </div>
                    <div className="impact-box">
                      <strong>Impacto neural:</strong>
                      <p>"Operadores de valor" = categoria diferenciada (não commodity).</p>
                      <p>"Destravam valor" = promessa de resultado financeiro (não apenas conformidade legal).</p>
                      <p>Sistema 1 categoriza como parceiro estratégico, não fornecedor.</p>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 2</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Arquitetura de Autoridade</h4>
                    <div className="authority-box">
                      <h5>Criação de IP (Intellectual Property)</h5>
                      <p>Desenvolvemos frameworks proprietários:</p>
                      <ul className="feature-list">
                        <li><strong>Metodologia de Due Diligence Acelerada:</strong> reduz tempo de análise em 40%</li>
                        <li><strong>Framework de Reestruturação Societária:</strong> processo documentado e replicável</li>
                        <li><strong>Playbook de Governança Corporativa:</strong> entregável para clientes</li>
                      </ul>
                      <div className="impact-box">
                        <strong>Impacto neural:</strong>
                        <p>IP próprio = autoridade percebida. Sistema 1 reconhece especialização.</p>
                        <p>Metodologia nomeada = diferenciação concreta (não abstrata).</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 3</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Plataforma de Autoridade</h4>
                    <p>Projetamos uma Plataforma que comunica expertise através de conteúdo estratégico.</p>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Hub de conteúdo educativo (destrava objeções)</li>
                      <li><CheckCircle size={18} /> Cases com métricas de valor (não apenas jurídicas)</li>
                      <li><CheckCircle size={18} /> Ferramentas diagnósticas (lead magnet estratégico)</li>
                      <li><CheckCircle size={18} /> Posicionamento visual de parceiro, não fornecedor</li>
                    </ul>
                    <a href="https://povoaspartners.com.br" target="_blank" rel="noopener noreferrer" className="case-link">
                      povoaspartners.com.br <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 4</span>
                  </div>
                  <div className="phase-content">
                    <h4>Execução de GTM</h4>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Campanha de lançamento do novo positioning</li>
                      <li><CheckCircle size={18} /> ABM (Account-Based Marketing) para decisores C-level</li>
                      <li><CheckCircle size={18} /> Sequência de educação com foco em "valor destravado"</li>
                      <li><CheckCircle size={18} /> Playbook de prospecção documentado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-results">
              <h3>O Resultado: De Commodity a Parceiro Estratégico</h3>
              <div className="transformation-board">
                <div className="results-before">
                  <h4>Antes</h4>
                  <ul>
                    <li>Posicionamento genérico</li>
                    <li>Competição por preço</li>
                    <li>Cliente via como custo</li>
                    <li>Vendas reativas</li>
                  </ul>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={48} />
                </div>
                <div className="results-after">
                  <h4>Depois</h4>
                  <ul>
                    <li><CheckCircle size={18} /> Posicionamento diferenciado</li>
                    <li><CheckCircle size={18} /> Competição por valor</li>
                    <li><CheckCircle size={18} /> Cliente via como investimento</li>
                    <li><CheckCircle size={18} /> Vendas proativas</li>
                    <li><CheckCircle size={18} /> Autoridade de mercado estabelecida</li>
                  </ul>
                </div>
              </div>
              <div className="metric-highlight">
                <p><strong>Métrica que importa:</strong></p>
                <p>De fornecedor para parceiro. De preço para valor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 5: PROFISSIONAIS DE SAÚDE */}
        <section className="case-section">
          <div className="container reveal-up">
            <div className="case-header">
              <Sparkles size={48} className="case-icon" />
              <h2 className="case-title">Profissionais de Saúde (Psicólogos, Nutricionistas, Fisioterapeutas)</h2>
              <p className="case-subtitle">Metodologia de Posicionamento Neural para Profissionais Solo</p>
            </div>

            <div className="case-challenge">
              <h3>O Travamento Neural</h3>
              <p>Profissionais tecnicamente excelentes. Formação sólida.</p>
              <p>Mas agenda vazia ou irregular. Dependência de indicação.</p>
              <div className="diagnosis-box">
                <h4>Diagnóstico (Cortex GTM™):</h4>
                <p>O cérebro do potencial cliente não conseguia diferenciar.</p>
                <p className="quote">"Qual a diferença entre esse psicólogo e os outros 50 que aparecem no Google?"</p>
                <p className="neural-flow">Sem diferenciação percebida → Sistema 1 aplica heurística de commodity → Não gera preferência → Decisão é por preço ou indicação aleatória.</p>
              </div>
            </div>

            <div className="case-intervention">
              <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
              <p className="intervention-intro">Desenvolvemos uma metodologia replicável para posicionamento neural de profissionais de saúde.</p>

              <div className="phase-timeline">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 1</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Metodologia de Nicho Neural</h4>
                    <div className="method-box">
                      <h5>Framework de 3 Perguntas:</h5>
                      <ol className="feature-list">
                        <li><strong>Quem especificamente você atende?</strong> (não "todo mundo")</li>
                        <li><strong>Qual dor concreta você resolve?</strong> (não "melhoro qualidade de vida")</li>
                        <li><strong>Qual resultado mensurável você entrega?</strong> (não "bem-estar")</li>
                      </ol>
                      <div className="impact-box">
                        <strong>Impacto neural:</strong>
                        <p>Especificidade = padrão reconhecível. Sistema 1 categoriza como especialista.</p>
                        <p>Dor concreta + resultado mensurável = promessa que o cérebro aceita sem análise profunda.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 2</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Exemplos de Recodificação</h4>
                    <div className="examples-grid">
                      <div className="example-box">
                        <h5>Psicólogo</h5>
                        <div className="before-after">
                          <div className="before">
                            <span className="label">Antes:</span>
                            <p>"Atendo ansiedade e depressão"</p>
                          </div>
                          <div className="arrow-transform">→</div>
                          <div className="after">
                            <span className="label">Depois:</span>
                            <p>"Especialista em profissionais de alta performance com burnout. Retorno à produtividade em 8 semanas."</p>
                          </div>
                        </div>
                      </div>

                      <div className="example-box">
                        <h5>Nutricionista</h5>
                        <div className="before-after">
                          <div className="before">
                            <span className="label">Antes:</span>
                            <p>"Emagrecimento saudável"</p>
                          </div>
                          <div className="arrow-transform">→</div>
                          <div className="after">
                            <span className="label">Depois:</span>
                            <p>"Método validado para mulheres 40+ perderem gordura abdominal sem dieta restritiva. Resultados em 12 semanas."</p>
                          </div>
                        </div>
                      </div>

                      <div className="example-box">
                        <h5>Fisioterapeuta</h5>
                        <div className="before-after">
                          <div className="before">
                            <span className="label">Antes:</span>
                            <p>"Tratamento de dores"</p>
                          </div>
                          <div className="arrow-transform">→</div>
                          <div className="after">
                            <span className="label">Depois:</span>
                            <p>"Protocolo para executivos com hérnia de disco voltarem a treinar sem cirurgia. Alívio de dor em 4 semanas."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 3</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Plataforma de Presença Digital</h4>
                    <p>One-page otimizado para conversão neural:</p>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Hero com promessa específica + prazo + prova social</li>
                      <li><CheckCircle size={18} /> Seção de "Como funciona" (reduz incerteza)</li>
                      <li><CheckCircle size={18} /> Depoimentos com métricas reais (não apenas "adorei")</li>
                      <li><CheckCircle size={18} /> CTA claro (agendar avaliação, não "saiba mais")</li>
                    </ul>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">FASE 4</span>
                  </div>
                  <div className="phase-content">
                    <h4>Execução de Tração</h4>
                    <ul className="feature-list">
                      <li><CheckCircle size={18} /> Conteúdo educativo direcionado ao nicho</li>
                      <li><CheckCircle size={18} /> Anúncios com mensagem recodificada</li>
                      <li><CheckCircle size={18} /> Sequência de follow-up automatizada</li>
                      <li><CheckCircle size={18} /> Sistema de agendamento direto (reduz fricção)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-results">
              <h3>O Resultado: Metodologia Replicável</h3>
              <div className="transformation-board">
                <div className="results-before">
                  <h4>Antes</h4>
                  <ul>
                    <li>Posicionamento genérico</li>
                    <li>Agenda irregular</li>
                    <li>100% indicação</li>
                    <li>Competição por preço</li>
                    <li>Insegurança financeira</li>
                  </ul>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={48} />
                </div>
                <div className="results-after">
                  <h4>Depois</h4>
                  <ul>
                    <li><CheckCircle size={18} /> Nicho específico dominado</li>
                    <li><CheckCircle size={18} /> Agenda consistente</li>
                    <li><CheckCircle size={18} /> Mix de indicação + busca ativa</li>
                    <li><CheckCircle size={18} /> Precificação por valor</li>
                    <li><CheckCircle size={18} /> Previsibilidade de receita</li>
                    <li><CheckCircle size={18} /> Autoridade percebida no nicho</li>
                  </ul>
                </div>
              </div>
              <div className="metric-highlight">
                <p><strong>Métrica que importa:</strong></p>
                <p>De generalista invisível para especialista procurado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 6: SYNAPSE B2B MATCH MAKER */}
        <section className="case-section case-section-alt">
          <div className="container reveal-up">
            <div className="case-header">
              <Network size={48} className="case-icon" />
              <h2 className="case-title">Synapse B2B Match Maker</h2>
              <p className="case-subtitle">Produto Proprietário da Synapse: Plataforma de Matching Neural</p>
            </div>

            <div className="case-challenge">
              <h3>O Problema que Criamos o Produto para Resolver</h3>
              <p>Identificamos um padrão recorrente nos nossos clientes:</p>
              <div className="diagnosis-box">
                <h4>Diagnóstico:</h4>
                <p>Empresas com produtos excelentes mas sem tração porque não encontram o perfil de cliente ideal.</p>
                <p className="quote">"Meu produto funciona. Mas eu não sei quem é meu ICP real. Estou atirando no escuro."</p>
                <p className="neural-flow">Sem ICP definido → Mensagem genérica → Sistema 1 não reconhece padrão → Não gera conversão → Receita imprevisível.</p>
              </div>
            </div>

            <div className="case-intervention">
              <h3>A Solução: Matching Neural Proprietário</h3>
              <p className="intervention-intro">Desenvolvemos uma plataforma que conecta empresas com seus ICPs ideais usando dados comportamentais e neurociência aplicada.</p>

              <div className="phase-timeline">
                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">COMO FUNCIONA</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Arquitetura da Plataforma</h4>
                    <div className="platform-box">
                      <h5>3 Camadas de Matching:</h5>
                      <ul className="feature-list">
                        <li><strong>Camada 1 - Perfil Comportamental:</strong> Mapeamos como seu ICP toma decisões</li>
                        <li><strong>Camada 2 - Sinais de Compra:</strong> Identificamos empresas com gatilhos ativos</li>
                        <li><strong>Camada 3 - Matching Neural:</strong> Conectamos sua oferta com decisores prontos</li>
                      </ul>
                      <div className="impact-box">
                        <strong>Diferencial:</strong>
                        <p>Não é lista fria. É inteligência de quem está pronto para comprar agora.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">METODOLOGIA</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Processo de Matching</h4>
                    <div className="process-box">
                      <ol className="feature-list">
                        <li><strong>Discovery Session:</strong> Mapeamos seu produto, valor e ICP hipotético</li>
                        <li><strong>Perfil Neural:</strong> Criamos perfil comportamental do decisor ideal</li>
                        <li><strong>Scanning de Mercado:</strong> Plataforma identifica empresas com fit comportamental</li>
                        <li><strong>Entrega de Matches:</strong> Lista qualificada + contexto de abordagem</li>
                        <li><strong>Refinamento:</strong> Ajustamos matching com base em feedback de conversão</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">APLICAÇÃO</span>
                    <div className="phase-connector"></div>
                  </div>
                  <div className="phase-content">
                    <h4>Para Quem Funciona</h4>
                    <div className="target-box">
                      <ul className="feature-list">
                        <li><CheckCircle size={18} /> <strong>Startups B2B:</strong> Validando ICP real (não hipotético)</li>
                        <li><CheckCircle size={18} /> <strong>Scale-ups:</strong> Expandindo para novos segmentos com precisão</li>
                        <li><CheckCircle size={18} /> <strong>Empresas tradicionais:</strong> Digitalizando go-to-market com inteligência</li>
                        <li><CheckCircle size={18} /> <strong>Consultorias:</strong> Encontrando clientes ideais sistematicamente</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <span className="phase-number">RESULTADOS</span>
                  </div>
                  <div className="phase-content">
                    <h4>Métrica de Sucesso</h4>
                    <div className="metrics-box">
                      <div className="metric-card">
                        <div className="metric-number">3x</div>
                        <p>Aumento médio em taxa de conversão de outbound</p>
                      </div>
                      <div className="metric-card">
                        <div className="metric-number">60%</div>
                        <p>Redução em ciclo de vendas (abordagem mais precisa)</p>
                      </div>
                      <div className="metric-card">
                        <div className="metric-number">100%</div>
                        <p>Dos clientes validam ICP real diferente do hipotético</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-results">
              <h3>O Diferencial: Não É Lista. É Inteligência.</h3>
              <div className="transformation-board">
                <div className="results-before">
                  <h4>Listas Tradicionais</h4>
                  <ul>
                    <li>Dados demográficos frios</li>
                    <li>Sem contexto de compra</li>
                    <li>Alta taxa de rejeição</li>
                    <li>Desperdício de esforço comercial</li>
                  </ul>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={48} />
                </div>
                <div className="results-after">
                  <h4>Synapse Match Maker</h4>
                  <ul>
                    <li><CheckCircle size={18} /> Perfil comportamental validado</li>
                    <li><CheckCircle size={18} /> Sinais de compra ativos</li>
                    <li><CheckCircle size={18} /> Alta taxa de conversão</li>
                    <li><CheckCircle size={18} /> Precisão estratégica</li>
                    <li><CheckCircle size={18} /> Refinamento contínuo</li>
                  </ul>
                </div>
              </div>
              <div className="metric-highlight">
                <p><strong>Por que funciona:</strong></p>
                <p>Porque matching neural não é sobre "quem pode comprar". É sobre "quem está pronto para comprar agora".</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESE UNIFICADORA */}
        <section className="manifesto-section">
          <div className="container text-center reveal-up">
            <div className="manifesto-content">
              <h2 className="manifesto-title">A Tese que Une Todos os Cases</h2>
              <div className="manifesto-text">
                <p>Receita previsível não vem de produto superior.</p>
                <p>Vem de <strong className="highlight-primary">arquitetura neural da decisão</strong>.</p>
                <p>Você pode ter o melhor produto do mercado. Mas se a mensagem força o Sistema 2 (análise exaustiva) antes do Sistema 1 (decisão rápida), a venda não acontece.</p>
                <p>Estes seis cases provam a mesma tese:</p>
                <p className="manifesto-highlight">Quando você recodifica a mensagem para ativar o sistema certo no cérebro certo, clareza vira receita.</p>
              </div>
              <div className="manifesto-signature">
                <p>Não é mágica. É <strong>Engenharia de Receita</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final-section">
          <div className="container text-center reveal-up">
            <div className="diagnostic-card">
              <h2 className="diagnostic-title">Quer Saber Se Seu Go-To-Market Está Ativando o Sistema Errado?</h2>
              <p className="diagnostic-subtitle">Oferecemos um diagnóstico estratégico gratuito usando nosso framework Cortex GTM™.</p>
              
              <div className="diagnostic-includes">
                <h3>O que está incluído:</h3>
                <ul>
                  <li><CheckCircle size={20} /> Análise neural da sua mensagem atual</li>
                  <li><CheckCircle size={20} /> Mapeamento de travamentos no processo de decisão</li>
                  <li><CheckCircle size={20} /> Recomendações de recodificação prioritárias</li>
                  <li><CheckCircle size={20} /> Plano de ação para ativar Sistema 1 primeiro</li>
                </ul>
              </div>

              <Link href="/contato">
                <button className="cta-button-primary">
                  Solicitar Diagnóstico Estratégico <ArrowRight size={20} />
                </button>
              </Link>

              <div className="ps-box">
                <p><strong>P.S.:</strong> Este diagnóstico não é para todo mundo.</p>
                <p>É para founders e líderes comerciais que já têm produto validado mas ainda não têm motor de receita previsível.</p>
                <p>Se você está no estágio de validação de problema, ainda não é o momento.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
