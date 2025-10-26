import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap, Target, Users, HeartPulse, HardHat, Briefcase, Rocket, MonitorSmartphone, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

// Componente para Imagem Expansível
const ExpandableImage = ({ src, alt, initialHeight = '250px' }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`image-expander ${isExpanded ? 'expanded' : ''}`} style={{ '--initial-height': initialHeight }}>
            <div className="image-container">
                <Image src={src} alt={alt} width={1200} height={675} layout="responsive" />
            </div>
            {!isExpanded ? (
                <div className="expand-overlay" onClick={() => setIsExpanded(true)}>
                    <div className="expand-gradient"></div>
                    <button className="expand-button"><ChevronDown /><span>Ver Imagem Completa</span></button>
                </div>
            ) : (
                <button className="collapse-button-overlay" onClick={() => setIsExpanded(false)}>
                    <ChevronUp /><span>Recolher Imagem</span>
                </button>
            )}
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

      {/* BLOCO 1: HERO NEUROCIENTÍFICO */}
      <section className="hero-section">
        <div className="hero-video-background"><video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video><div className="hero-overlay"></div></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Quando Clareza Vira Receita</h1>
          <p className="hero-subheadline wider-on-desktop">O córtex pré-frontal do seu comprador trava em análise.<br/>Você explica. Ele ouve. Mas a decisão não acontece.</p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 2: O PRINCÍPIO QUE GOVERNA TUDO */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="intro-cases-block">
            <h2 className="section-title">O seu Produto Funciona.<br/>Falta ativar o sistema certo no cérebro certo.</h2>
            <p className="lead-text">O mercado não compra o melhor produto com a melhor mensagem que passa no filtro do <strong>Sistema 1</strong>.</p>
            <div className="dual-system-box">
                <div className="system-side"><h4>Sistema 1</h4><p>Decisão rápida, emocional, intuitiva. Opera em 400 milissegundos.</p><ul><li>→ Rápido e automático</li><li>→ Baseado em emoção</li><li>→ Decisão instantânea</li><li>→ Confiança, urgência, clareza</li></ul></div>
                <div className="system-side system-2"><h4>Sistema 2</h4><p>Análise lenta, racional, exaustiva. Demanda energia cognitiva cara.</p><ul><li>→ Lento e deliberado</li><li>→ Baseado em lógica</li><li>→ Requer esforço mental</li><li>→ Complexidade, dúvida</li></ul></div>
            </div>
            <p className="lead-text">Estes cinco cases mostram como recodificamos mensagens para ativar Sistema 1 primeiro.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 3: CASE 1 - EXCLUSIVA ENGENHARIAS */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 1</span><h2 className="case-title">Exclusiva Engenharias</h2><p className="case-subtitle">Estudo de Caso: Recodificação Neural de Três Empresas Invisíveis</p></div>
          <ExpandableImage src="/cases/exclusivaengenharias-home.png" alt="Plataforma da Exclusiva Engenharias" />
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto.<br/>Mas crescimento 100% dependente de indicação.</p>
            <h3>Diagnóstico (Cortex GTM™):</h3>
            <p>O cérebro do decisor industrial não conseguia categorizar a oferta.</p>
            <blockquote className="phrase">"São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</blockquote>
            <div className="neural-sequence"><span>Sem categoria clara</span><ArrowRight/><span>Sistema 1 não reconhece padrão</span><ArrowRight/><span>Não gera "eu entendo o que vocês fazem"</span><ArrowRight/><span>Decisão não acontece</span></div>
            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Recodificamos como o mercado processa a mensagem.</p>
            <div className="case-phase"><h4>FASE 1: Recodificação de Identidade + Arquitetura de Proposta de Valor</h4><p><strong>Antes:</strong> "Somos três empresas de engenharia"<br/><strong>Depois:</strong> "Somos o hub de engenharias que resolve problemas industriais que outros evitam"<br/><strong>Impacto neural:</strong> Cérebro categoriza instantaneamente. "Hub" = agregador. "Problemas que outros evitam" = especialização.<br/><strong>Proposta de valor recodificada:</strong><br/><strong>Antes:</strong> Apresentação técnica de 40 minutos explicando capacidades<br/><strong>Depois:</strong> "Apresentação técnica de 3 minutos com foco em resultados"<br/><strong>Impacto neural:</strong> O antes ativava a amígdala (medo de erro). O depois passa a ativar o núcleo accumbens (promessa de resultado). Sistema 1 sinaliza: "isso resolve minha dor".</p></div>
            <div className="case-phase"><h4>FASE 2: Plataforma de Aceleração de Receita</h4><p><strong>exclusivaengenharias.com:</strong> Projetamos uma Plataforma que se tornou um ativo de conversão neural.<br/>→ 30% institucional (credibilidade)<br/>→ 70% engenharia de receita (conversão)<br/>→ Cada página ativa Sistema 1 antes de Sistema 2</p></div>
            <ExpandableImage src="/cases/exclusivaengenharias-sobre-nos.png" alt="Detalhe da plataforma Exclusiva Engenharias" />
            <div className="case-phase"><h4>FASE 3: Ferramentas Estratégicas de Conversão</h4><h5>Simulador de Orçamento Integrado</h5><p>Ferramenta proprietária que toma decisão cognitivamente cara no lugar do cliente.<br/>→ Cliente insere: tipo de projeto + características + prazo<br/>→ Sistema retorna: estimativa de investimento em 10 segundos<br/><strong>Impacto neural:</strong> Reduz carga cognitiva. Lead entra na conversa com contexto de valor.</p></div>
            <div className="case-phase"><h4>FASE 4: CRO as a Service (Governança de Execução)</h4><h5>Liderança C-level fracionada operando Diretoria de Receita:</h5><p>→ Inteligência de mercado<br/>→ Prospecção ativa estruturada<br/>→ Playbook documentado para escalar time<br/><strong>Impacto:</strong> De heroísmo individual para sistema replicável. Qualquer vendedor mediano executa um processo excelente.</p></div>
            <h3>O Resultado: Transformação Sistêmica</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><ul><li>3 empresas segregadas</li><li>Zero presença digital</li><li>100% indicação</li><li>Receita imprevisível</li></ul></div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><ul><li>Hub consolidado</li><li>Motor de demanda ativo</li><li>Clientes por busca orgânica</li><li>Sistema replicável</li></ul></div></div>
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De invisível para encontrável. De heroísmo para sistema.</p>
            <div className="case-link"><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Visite a prova: exclusivaengenharias.com →</a></div>
          </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>

      {/* BLOCO 4: CASE 2 - VERSÃO HOLÍSTICA */}
      <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 2</span><h2 className="case-title">VERSÃO HOLÍSTICA</h2><p className="case-subtitle">Tradução Neurocientífica de Inovação em ROI</p></div>
          <ExpandableImage src="/cases/versaoholistica-home.png" alt="Plataforma da Versão Holística" />
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Healthtech com metodologia inovadora. Produto validado. Mas hospitais e investidores não conseguiam entender a oferta.</p>
            <h3>Diagnóstico (Cortex GTM™):</h3>
            <p>A narrativa "Cuidado Farmacêutico Integrativo" forçava o cérebro do decisor a um esforço exaustivo.</p>
            <blockquote className="phrase">"Isso é um custo ou um investimento? Qual a evidência? Como eu categorizo isso?"</blockquote>
            <p>Sem categoria clara → Sistema 1 não reconhece padrão → Gera sensação de complexidade e risco → Decisão é adiada.</p>
            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Não mudamos o produto. Recodificamos como o cérebro do mercado processa a mensagem.</p>
            <div className="case-phase"><h4>FASE 1: Sprint de Validação Comercial</h4><h5>Mapeamento do Processo Decisório Real</h5><p>→ Decisor real identificado: CFO<br/>→ Objeção principal: "Mais uma consultoria cara sem ROI"<br/>→ Gatilho de decisão: Case com métrica financeira tangível<br/><strong>Impacto neural:</strong> Paramos de vender "metodologia" (Sistema 2) e passamos a vender "ROI de 5.8x" (Sistema 1).</p></div>
            <div className="case-phase"><h4>FASE 2: Go-To-Market Completo</h4><h5>Recodificação da Proposta de Valor</h5><p><strong>Antes:</strong> "Cuidado Farmacêutico Integrativo"<br/><strong>Depois:</strong> "Plataforma que reduz custo de paciente crônico em 5.8x"<br/><strong>Impacto neural:</strong> Sistema 1 reconhece "redução de custo". Amígdala relaxa, núcleo accumbens é ativado.</p><h5>Criação e Domínio de Categoria</h5><p>Cunhamos o termo: "CareOps Integrativo" e o posicionamento: "1ª Plataforma de CareOps do Brasil".<br/><strong>Impacto neural:</strong> Quando você nomeia a categoria, você domina a categoria.</p></div>
            <div className="case-phase"><h4>FASE 3: Plataforma de Aceleração de Receita</h4><p>Projetamos versaoholistica.com.br como ativo de conversão neural.<br/>→ 70% engenharia de receita<br/>→ Cada página quebra objeções<br/>→ Lead entra educado sobre o ROI</p></div>
            <ExpandableImage src="/cases/versaoholistica-br-hospitais.png" alt="Página de Hospitais da Versão Holística" />
            <div className="case-phase"><h4>FASE 4: Advisory Board</h4><h5>Estratégia de Expansão e Investimento</h5><p>→ Validação de três verticais de receita (Hospitais, Empresas, Escolas)<br/>→ Tese de investimento fundamentada para captação<br/><strong>Impacto:</strong> De uma boa ideia para um negócio investível e replicável.</p></div>
            <h3>O Resultado: Transformação da Tese</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><ul><li>Pitch de 15 minutos</li><li>Decisor confuso</li><li>"Vamos pensar..."</li></ul></div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><ul><li>Pitch de 3 minutos</li><li>Decisor entende o valor</li><li>"Quando começamos?"</li></ul></div></div>
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De complexo para ROI claro. De "vamos pensar" para "quando começamos?".</p>
            <div className="case-link"><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">Visite a prova: versaoholistica.com.br →</a></div>
          </div>
        </div>
      </section>

       <div className="section-divider-glow"></div>

      {/* BLOCO 5: CASE 3 - AORKIA */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">AORKIA</h2><p className="case-subtitle">De Zero a Parceiro Global em 90 Dias</p></div>
          <ExpandableImage src="/cases/aorkia-home.png" alt="Plataforma da AORKIA" />
          <div className="case-narrative">
            <h3>O Desafio: Prova de Conceito Sob Pressão</h3>
            <p>Empresa nova em mercado técnico. Zero histórico. Competindo com gigantes globais. <strong>Desafio:</strong> Atingir tração comercial em 90 dias para validar o próprio método.</p>
            <h3>A Intervenção: Engenharia de Receita em Modo Acelerado</h3>
            <p>Criamos marca, narrativa, plataforma e canal de receita do zero. O objetivo era provar que nosso método funciona, aplicando-o em nós mesmos.</p>
            <div className="case-phase"><h4>FASE 1: Sprint de Validação & Go-To-Market</h4><h5>Ancoragem de Autoridade</h5><p><strong>Decisão:</strong> Não competir como "mais uma empresa de backup".<br/><strong>Ação:</strong> Posicionar como "Parceiro oficial Keepit — líder global".<br/><strong>Impacto neural:</strong> Transferência de autoridade. "Se o líder global confia, eu posso confiar."</p></div>
            <div className="case-phase"><h4>FASE 2: Go-To-Market Completo</h4><h5>Recodificação de Mensagem Técnica</h5><p><strong>Antes:</strong> "Backup imutável..."<br/><strong>Depois:</strong> "Seu provedor SaaS não faz backup dos seus dados. Quanto custa cada minuto de parada?"<br/><strong>Impacto neural:</strong> Ativa a amígdala (medo da perda). Sistema 1 sinaliza urgência.</p></div>
            <div className="case-phase"><h4>FASE 3: Plataforma de Aceleração de Receita</h4><h5>aorkia.com</h5><p>Projetada com arquitetura neural para ativar Sistema 1.<br/>→ Hero ativa medo<br/>→ Prova social imediata<br/>→ Redução de fricção</p></div>
            <ExpandableImage src="/cases/aorkia-backup-saas-estrategico.png" alt="Página de Backup SaaS da AORKIA" />
            <h3>O Resultado: De Invisível a Operacional em 90 Dias</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><ul><li>Zero</li><li>Ideia no papel</li><li>Nenhum cliente</li></ul></div><ArrowRight size={24} /><div className="metric-after"><strong>Depois (90 dias):</strong><ul><li>Marca criada</li><li>Parceiro Global Keepit</li><li>Primeira venda (+1.200 usuários)</li></ul></div></div>
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De zero para parceiro global com receita em 90 dias. A prova de que o método funciona.</p>
            <div className="case-link"><a href="https://aorkia.com" target="_blank" rel="noopener noreferrer">Visite a prova: aorkia.com →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 6: CASE 4 - PÓVOAS & PARTNERS */}
       <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">PÓVOAS & PARTNERS</h2><p className="case-subtitle">De PDF Estático para Plataforma Omnicanal</p></div>
            <ExpandableImage src="/cases/Visao_Geral_Site_PovoasPartners_por_SynapseB2B.png" alt="Plataforma da Póvoas & Partners" />
            <div className="case-narrative">
                <h3>O Travamento Estrutural: Expertise Sem Canal de Distribuição</h3>
                <p>Credibilidade e portfólio consolidados, mas toda a arquitetura de serviços estava presa em um PDF estático e linear.</p>
                <h3>Diagnóstico Neural & Funcional</h3>
                <p>O cérebro do cliente e do negócio eram sobrecarregados.<br/>→ <strong>Para o cliente:</strong> Fricção (download), sobrecarga de decisão.<br/>→ <strong>Para o negócio:</strong> Parceiros invisíveis, zero dados, nenhuma conversão.</p>
                <h3>A Intervenção: Arquitetura de Ecossistema Omnicanal</h3>
                <p>Não criamos "mais um site". Desenhamos uma plataforma onde cada serviço e parceiro se torna uma porta de entrada estratégica.</p>
                <div className="case-phase"><h4>ARQUITETURA 1: Múltiplas Portas de Entrada</h4><p><strong>Antes:</strong> PDF com 6 serviços misturados.<br/><strong>Depois:</strong> Plataforma com 6 portais de entrada claros.<br/><strong>Impacto neural:</strong> Reduz carga cognitiva. O decisor encontra a solução sem esforço.</p></div>
                <div className="case-phase"><h4>ARQUITETURA 2: Ecossistema de Parceiros</h4><p><strong>Antes:</strong> Logos de 12 parceiros sem contexto.<br/><strong>Depois:</strong> Cada parceiro ganha um ativo digital com chancela.<br/><strong>Impacto neural:</strong> A confiança na marca principal é transferida aos parceiros.</p></div>
                <h3>O Resultado: De Documento para Ecossistema</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><ul><li>PDF estático</li><li>12 parceiros invisíveis</li><li>Zero rastreamento</li></ul></div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><ul><li>Plataforma omnicanal</li><li>12 parceiros estratégicos</li><li>Analytics de comportamento</li></ul></div></div>
                <p className="case-metric-summary"><strong>Métrica que importa:</strong> De "me envie o catálogo por e-mail" para "escolha seu serviço na plataforma".</p>
                 <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
            </div>
         </div>
       </section>
       
       <div className="section-divider-glow"></div>

       {/* BLOCO 7: CASE 5 - PROFISSIONAIS DE SAÚDE */}
       <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 5</span><h2 className="case-title">PROFISSIONAIS DE SAÚDE</h2><p className="case-subtitle">Expertise Clínica Sem Sistema de Receita</p></div>
            <div className="case-narrative">
                <h3>O Travamento Neural: Expertise Clínica ≠ Sistema de Receita</h3>
                <p>Profissionais de saúde dominam a técnica, mas a formação não inclui inteligência para construir um negócio escalável.</p>
                <h3>Diagnóstico Estrutural</h3>
                <p>Agenda reativa não significa caixa saudável.<br/>→ Procedimentos de baixo ROI consomem tempo de alto valor.<br/>→ Ativos (salas) ociosos geram desperdício.<br/>→ Conhecimento preso no atendimento 1-para-1.</p>
                <h3>A Intervenção: Recodificação de Expertise em Múltiplos Canais de Receita</h3>
                <p>Instalamos inteligência de receita em quem já domina a entrega técnica.</p>
                <div className="case-phase"><h4>FRENTE 1: Otimização da Clínica Atual</h4><h5>Redesenho da "Agenda Estratégica"</h5><p><strong>Antes:</strong> Agenda reativa. <strong>Depois:</strong> Agenda estratégica.<br/><strong>Impacto:</strong> O profissional ganha mais trabalhando o mesmo, ou menos.</p></div>
                <div className="case-phase"><h4>FRENTE 2: Ativação de Novos Modelos de Receita Recorrente</h4><h5>Modelo: Clínica Compartilhada (Exemplo)</h5><p><strong>Antes:</strong> Sala ociosa = R$ 0. <strong>Depois:</strong> Sala locada = Receita recorrente.<br/><strong>Resultado:</strong> Ativo parado vira fonte de caixa em menos de 30 dias.</p></div>
                <div className="case-phase"><h4>FRENTE 3: Modelos Disruptivos Multi-Canal</h4><h5>Outros Modelos de Receita Recorrente</h5><p>→ Clubes de Assinatura<br/>→ Programas de Acompanhamento Contínuo<br/>→ Licenciamento de Protocolos</p></div>
                <h3>O Resultado: De Agenda reativa para Sistema de Receita</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><ul><li>Agenda cheia, caixa apertado</li><li>Desperdício de ativos</li></ul></div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><ul><li>Agenda estratégica</li><li>Novas fontes de receita</li></ul></div></div>
                <p className="case-metric-summary"><strong>Métrica que importa:</strong> De "mais horas trabalhadas" para "melhores horas investidas".</p>
            </div>
        </div>
       </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 8: VERSATILIDADE DO MÉTODO */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
            <div className="case-header"><h2 className="case-title">SYNAPSE B2B MATCH MAKER</h2><p className="case-subtitle">Quando Dados Viram Inteligência de Conexão</p></div>
            <ExpandableImage src="/cases/matchmaking-synapseb2b.png" alt="Interface do Synapse Match Maker" />
            <div className="case-narrative">
                <h3>O Travamento Cognitivo: Riqueza Invisível em Comunidades</h3>
                <p>Grandes comunidades (WhatsApp, Excel) possuem potencial, mas a informação é invisível.</p>
                <h3>Diagnóstico Neural</h3>
                <p>O cérebro paralisa diante de uma decisão cognitivamente cara. A energia para encontrar a conexão é maior que o benefício percebido.</p>
                <h3>A Solução: Sistema Neural que Reduz Carga Cognitiva</h3>
                <p>Não é "mais uma ferramenta". É um sistema que elimina o processo de decisão.</p>
                <div className="case-phase"><h4>O MECANISMO: De Caos a 3 Matches Perfeitos em 5 Segundos</h4><p><strong>Antes:</strong> Usuário pergunta "Alguém conhece...?".<br/><strong>Depois:</strong> Usuário insere a necessidade e o sistema retorna os 3 matches ideais.<br/><strong>Impacto neural:</strong> A decisão exaustiva é executada pelo sistema. Ação se torna instantânea.</p></div>
                <div className="case-phase"><h4>O PRINCÍPIO: A Escala da Inteligência</h4><p>→ Nível 1 (Dado): "Temos 500 pessoas"<br/>→ Nível 2 (Informação): "30 são designers"<br/>→ Nível 3 (Conhecimento): "5 designers disponíveis"<br/>→ Nível 4 (Inteligência Synapse): "Estes 3 são os matches perfeitos"</p></div>
                <h3>O Resultado: Versatilidade Comprovada</h3>
                <div className="transformation-metric single-column"><div className="metric-after"><strong>De Caos Relacional para Confluência Estratégica</strong><ul><li>Educação: Alunos ↔ Mentores</li><li>Investimento: Startups ↔ Investidores</li><li>RH: Vagas ↔ Talentos</li></ul></div></div>
                <p className="case-metric-summary"><strong>Métrica que importa:</strong> Tempo para encontrar a conexão perfeita: de horas/dias para 10 segundos.</p>
            </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>
      
      {/* BLOCO FINAL: CONCLUSÃO E CTA */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">O Princípio Unificador</h2>
          <p className="lead-text">O Que Governa Todos Estes Casos</p>
          <div className="cases-proof-grid">
            <div className="proof-item"><strong>Exclusiva Engenharias:</strong> Três empresas sem categoria → Hub com identidade neural clara</div>
            <div className="proof-item"><strong>Versão Holística:</strong> Inovação incompreensível → ROI tangível em 3 verticais validadas</div>
            <div className="proof-item"><strong>AORKIA:</strong> Zero para 1.200 usuários no primeiro mês</div>
            <div className="proof-item"><strong>Póvoas & Partners:</strong> PDF estático → Ecossistema de receita omnicanal</div>
            <div className="proof-item"><strong>Profissionais de Saúde:</strong> Agenda reativa → Sistema de receita multi-canal</div>
            <div className="proof-item"><strong>Match Maker:</strong> Decisão exaustiva → Resultado instantâneo</div>
          </div>
          
          <div className="thesis-block">
              <h3>A Tese que Une Tudo</h3>
              <p>Receita previsível não vem de produto superior. Vem de arquitetura neural da decisão. Quando você força o cérebro do decisor a entrar em Sistema 2 (análise exaustiva), ele adia. Quando você ativa Sistema 1 primeiro (reconhecimento de padrão, redução de risco, clareza de valor), ele decide.<br/><strong>Nosso trabalho não é vender melhor. Nosso trabalho é recodificar como seu mercado processa seu valor.</strong></p>
          </div>

          <div className="cta-neuro-block">
            <h3>Seu Cérebro Já Decidiu Se Isso Faz Sentido</h3>
            <p>Se você chegou até aqui, seu Sistema 1 já sinalizou: "Isso é relevante para mim". Agora seu Sistema 2 está racionalizando: "Será que funciona para meu contexto?". A resposta é simples:</p>
            <ul className="cta-checklist">
                <li>Se você tem potencial técnico travado em narrativa confusa, funcionará.</li>
                <li>Se você domina a entrega mas não gera tração previsível, funcionará.</li>
                <li>Se você cresce por heroísmo e não por sistema, funcionará.</li>
                <li>Se você é profissional de saúde com agenda reativa mas caixa apertado, funcionará.</li>
            </ul>
            <p className="lead-text">Primeira conversa: 21 minutos. Não é reunião de vendas. É diagnóstico estratégico. Vamos mapear seu travamento neural e mostrar onde está a alavanca.</p>
            <div className="section-cta"><Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico (21min)</span><ArrowRight size={20} /></Link></div>
            <p className="cta-support-text">Sem pressão. Sem proposta genérica. Só clareza neurocientífica sobre se conseguimos gerar valor real para você.</p>
          </div>

          <div className="post-scriptum">
            <h4>Post-Scriptum: Por Que Você Deve Confiar Nisto</h4>
            <p>Estes não são cases isolados. São provas de um sistema replicável. Engenharia, Saúde, Tecnologia, Consultoria Executiva, Educação — contextos radicalmente diferentes. Mesmo princípio. Mesmo resultado.<br/><strong>Quando você domina como o cérebro humano toma decisões, não importa o que você vende. Você domina como traduzir complexidade em clareza que vira receita.</strong></p>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* INTRODUÇÃO E TEXTO REORGANIZADO */
        .intro-cases-block, .case-narrative, .final-cta-section { text-align: center; }
        .intro-cases-block { max-width: 900px; margin: 0 auto; }
        .dual-system-box { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 2rem; margin: 2rem auto; max-width: 800px; }
        .system-side h4 { font-family: 'Montserrat'; font-size: 1.2rem; color: var(--color-primary); margin-bottom: 1rem; }
        .system-side.system-2 h4 { color: var(--color-text); }
        .system-side ul { list-style: none; padding: 0; text-align: left; display: inline-block; }
        .system-side li { margin-bottom: 0.5rem; }
        .neural-flow { margin: 1.5rem 0; }
        .flow-item { margin-bottom: 2rem; }
        .flow-summary { font-size: 1.1rem; font-weight: 500; margin: 2rem 0; }
        .phrase { display: block; font-style: italic; color: var(--color-heading); background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1rem; border-radius: 8px; margin: 1rem auto; max-width: 90%;}
        .phrase.positive { color: var(--color-primary); }
        .phrase.negative { opacity: 0.7; }
        .consequence { display: block; font-weight: 600; color: var(--color-text); }
        .neural-sequence { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1rem; background-color: var(--color-section-bg); padding: 1.5rem; border-radius: 8px; }
        .neural-sequence svg { color: var(--color-primary); }
        .consequences-block h4, .problem-list h4 { font-size: 1.1rem; color: var(--color-heading); margin-bottom: 1rem; }
        .consequences-block ul, .problem-list { list-style: none; padding: 0; }

        /* ESTRUTURA DOS CASES */
        .case-section-wrapper { padding: 5rem 0; }
        .case-header { text-align: center; margin-bottom: 4rem; }
        .case-number { display: inline-block; font-family: 'Montserrat'; font-size: 0.9rem; font-weight: 700; color: var(--color-primary); border: 1px solid var(--color-border); padding: 0.5rem 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
        .case-title { font-family: 'Montserrat'; font-size: 3rem; color: var(--color-heading); }
        .case-subtitle { font-size: 1.2rem; color: var(--color-text); max-width: 700px; margin: 0.5rem auto 0; }
        
        .case-narrative { max-width: 800px; margin: 3rem auto 0; }
        .case-narrative h3 { font-family: 'Montserrat'; font-size: 1.8rem; color: var(--color-heading); margin: 3rem 0 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .case-narrative p { margin-bottom: 1.5rem; line-height: 1.8; }
        .case-narrative strong { color: var(--color-heading); }
        .case-phase { margin: 2.5rem 0; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; }
        .case-phase h4 { font-size: 1.2rem; color: var(--color-primary); margin-bottom: 1rem; }
        .case-phase h5 { font-size: 1.1rem; color: var(--color-heading); margin-bottom: 1rem; }
        
        .transformation-metric { display: grid; grid-template-columns: 1fr auto 1fr; align-items: start; gap: 1.5rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; margin-top: 2rem; }
        .transformation-metric.single-column { grid-template-columns: 1fr; }
        .transformation-metric ul { list-style:none; padding:0; }
        .transformation-metric svg { color: var(--color-primary); margin-top: 1.5rem; }
        .case-metric-summary { font-weight: 600; font-style: italic; margin-top: 2rem; }
        .case-link { margin-top: 2rem; }
        .case-link a { color: var(--color-accent); font-weight: 600; }

        /* EFEITO DE IMAGEM EXPANSÍVEL */
        .image-expander { position: relative; max-height: var(--initial-height, 250px); overflow: hidden; border-radius: 16px; border: 1px solid var(--color-border); transition: max-height 0.7s ease-in-out; margin: 3rem auto; max-width: 1200px; cursor: pointer;}
        .image-expander.expanded { max-height: 1200px; cursor: default; }
        .image-container { line-height: 0; }
        .expand-overlay { position: absolute; bottom: 0; left: 0; right: 0; height: 100%; display: flex; align-items: flex-end; justify-content: center; background: linear-gradient(to top, var(--color-background) 0%, rgba(0,0,0,0.8) 50%, transparent 100%); transition: opacity 0.3s; }
        .image-expander.expanded .expand-overlay { opacity: 0; pointer-events: none; }
        .expand-button { background: none; border: none; color: white; padding-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 600; font-size: 1rem; text-shadow: 0 1px 3px black; }
        .collapse-button-overlay { position: absolute; top: 1.5rem; right: 1.5rem; z-index: 25; display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 12px 24px; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); border: 1px solid var(--color-border); color: var(--color-heading); border-radius: 10px; font-weight: 600; font-size: 1rem; cursor: pointer; opacity: 0; pointer-events: none; transition: opacity 0.3s ease, transform 0.3s ease; }
        .image-expander.expanded .collapse-button-overlay { opacity: 1; pointer-events: auto; }
        .collapse-button-overlay:hover { background: rgba(0, 150, 132, 0.2); }

        /* BLOCO FINAL */
        .cases-proof-grid, .thesis-block, .cta-neuro-block, .post-scriptum { margin: 4rem auto; max-width: 800px; }
        .cases-proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; }
        .proof-item { background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1rem; border-radius: 8px; }
        .thesis-block h3, .cta-neuro-block h3, .post-scriptum h4 { font-size: 1.5rem; color: var(--color-heading); margin-bottom: 1rem; }
        .cta-checklist { list-style: none; padding: 0; margin: 1.5rem 0; display: inline-block; text-align: left; }
        .cta-checklist li { padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; }
        .cta-checklist li::before { content: '✓'; color: var(--color-primary); position: absolute; left: 0; }
        .post-scriptum { padding-top: 2rem; border-top: 1px solid var(--color-border); opacity: 0.8; }
        
        @media (max-width: 768px) {
          .case-title { font-size: 2.2rem; }
          .dual-system-box, .transformation-metric { grid-template-columns: 1fr; }
          .transformation-metric svg { transform: rotate(90deg); margin: 1rem auto; }
          .neural-sequence { flex-direction: column; }
        }
      `}</style>
    </>
  );
              }
