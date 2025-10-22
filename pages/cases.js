import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap, Target } from 'lucide-react';

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
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video>
          <div className="hero-overlay"></div>
        </div>
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
              <div className="flow-item">
                <p>Quando você força o Sistema 2 a processar:</p>
                <blockquote className="phrase">"deixe-me explicar nossa arquitetura técnica"</blockquote>
                <p>...o cérebro do decisor ativa o mecanismo de defesa:</p>
                <blockquote className="consequence">"vamos pensar" (tradução: "isso é complexo demais, vou adiar").</blockquote>
              </div>
              <p className="flow-summary">A seguir apresentamos cinco casos reais que mostram como recodificamos mensagens para ativar o Sistema 1 primeiro. O princípio é simples:</p>
              <div className="flow-item">
                <p>Quando o Sistema 1 diz "sim":</p>
                <blockquote className="phrase positive">confiança, urgência, clareza</blockquote>
                <p>...o Sistema 2 racionaliza a compra.</p>
              </div>
              <div className="flow-item">
                <p>Quando o Sistema 1 diz "não sinto isso":</p>
                <blockquote className="phrase negative">confusão, dúvida</blockquote>
                <p>...o Sistema 2 encontra desculpas para não comprar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 3: CASE 1 - EXCLUSIVA ENGENHARIAS */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header">
            <span className="case-number">CASE 1</span>
            <h2 className="case-title">Exclusiva Engenharias</h2>
            <p className="case-subtitle">Estudo de Caso: Recodificação Neural de Três Empresas Invisíveis</p>
          </div>
          <div className="case-image-full"><Image src="/cases/exclusivaengenharias-home.png" alt="Plataforma da Exclusiva Engenharias" width={1200} height={675} layout="responsive" /></div>
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação.</p>
            <p><strong>Diagnóstico (Cortex GTM™):</strong><br/>O cérebro do decisor industrial não conseguia categorizar a oferta.</p>
            <blockquote className="phrase">"São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</blockquote>
            <div className="neural-sequence">
              <span>Sem categoria clara</span><ArrowRight/><span>Sistema 1 não reconhece padrão</span><ArrowRight/><span>Não gera "eu entendo o que vocês fazem"</span><ArrowRight/><span>Decisão não acontece</span>
            </div>
            <div className="consequences-block">
              <h4>Consequências Operacionais:</h4>
              <ul><li>Operação em modo sobrevivência.</li><li>Crescimento dependendo de networking heroico ao invés de sistema replicável.</li><li>Cada venda exigia esforço excepcional. Impossível escalar. Impossível prever receita.</li></ul>
            </div>

            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Não otimizamos a engenharia. Recodificamos como o mercado processa a engenharia.</p>
            <div className="case-phase"><h4>FASE 1: Recodificação de Identidade + Arquitetura de Proposta de Valor</h4><p><strong>Antes:</strong> "Somos três empresas de engenharia" → <strong>Depois:</strong> "Somos o hub de engenharias que resolve problemas industriais que outros evitam". Impacto neural: Cérebro categoriza instantaneamente. "Hub" = agregador (padrão reconhecível). "Problemas que outros evitam" = especialização (reduz competição percebida).<br/>Proposta de valor recodificada: <strong>Antes:</strong> Apresentação técnica de 40 minutos explicando capacidades → <strong>Depois:</strong> "Projetos que funcionam na primeira vez". Impacto neural: Ativa amígdala (medo de erro/retrabalho), depois ativa núcleo accumbens (promessa de resultado). Sistema 1 sinaliza: "isso resolve minha dor".</p></div>
            <div className="case-phase"><h4>FASE 2: Plataforma de Aceleração de Receita</h4><p>exclusivaengenharias.com não é site institucional. É ativo de conversão neural.<br/>→ 30% institucional (credibilidade) → 70% engenharia de receita (conversão) → Cada página ativa Sistema 1 antes de Sistema 2 → Lead entra educado sobre valor antes do contato comercial</p></div>
            <div className="case-image-detailed"><Image src="/cases/exclusivaengenharias-sobre-nos.png" alt="Detalhe da plataforma Exclusiva Engenharias" width={1000} height={563} layout="responsive" /></div>
            <div className="case-phase"><h4>FASE 3: Simulador de Orçamento Integrado</h4><p>Ferramenta proprietária que toma decisão cognitivamente cara no lugar do cliente.<br/>→ Cliente insere: tipo de projeto + escopo + prazo → Sistema retorna: estimativa de investimento em 30 segundos → Impacto neural: Decisão exaustiva (calcular custo) executada pelo sistema. Reduz carga cognitiva. Lead entra na conversa comercial já com contexto de valor.</p></div>
            <div className="case-phase"><h4>FASE 4: CRO as a Service (Governança de Execução)</h4><p>Liderança C-level fracionada operando Diretoria de Receita:<br/>→ Inteligência de mercado (Win/Loss Analysis) → Prospecção ativa estruturada → Execução pioneira de reuniões (modelagem de abordagem) → Playbook documentado para escalar time.<br/>Impacto: De heroísmo individual para sistema replicável. Qualquer vendedor mediano executa processo excelente.</p></div>

            <h3>O Resultado: Transformação Sistêmica</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ 3 empresas segregadas<br/>→ Zero presença digital<br/>→ 100% indicação<br/>→ Operação em modo sobrevivência<br/>→ Receita imprevisível</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Hub consolidado com identidade clara<br/>→ Motor de geração de demanda ativo<br/>→ Primeiros clientes por busca orgânica (inédito)<br/>→ Pipeline estruturado<br/>→ Sistema replicável documentado<br/>→ Evento de 5 anos (organizado por nós) para celebrar reposicionamento estratégico</div></div>
            <p className="case-metric-summary"><strong>Métrica que importa:</strong> De invisível para encontrável. De heroísmo para sistema.</p>
            <div className="case-link"><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Visite a prova: exclusivaengenharias.com →</a></div>
          </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>

      {/* BLOCO 4: CASE 2 - VERSÃO HOLÍSTICA */}
      <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 2</span><h2 className="case-title">Versão Holística</h2><p className="case-subtitle">Estudo de Caso: Tradução Neurocientífica de Inovação em ROI</p></div>
          <div className="case-image-full"><Image src="/cases/versaoholistica-home.png" alt="Plataforma da Versão Holística" width={1200} height={675} layout="responsive" /></div>
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Healthtech fundada por superação pessoal. Metodologia inovadora de cuidado integrativo. Produto validado. Casos de sucesso reais. Mas hospitais e investidores faziam sempre a mesma pergunta:</p>
            <blockquote className="phrase">"O que, exatamente, vocês fazem por mim?"</blockquote>
            <p><strong>Diagnóstico (Cortex GTM™):</strong> A narrativa "Cuidado Farmacêutico Integrativo" forçava o decisor (CFO de hospital) a entrar em Sistema 2 exaustivo:</p>
            <div className="neural-sequence"><span>"Farmacêutico = medicamento?"</span><ArrowRight/><span>"Integrativo = holístico?"</span><ArrowRight/><span>"Isso reduz custo ou aumenta?"</span><ArrowRight/><span>"Quem paga? Qual evidência?"</span></div>
            <p>Pitch de 15 minutos terminava com: "Vamos pensar..." (Tradução neural: "Isso é complexo demais. Não consigo categorizar. Adio decisão.")</p>

            <h3>A Intervenção: Aplicação das 5 Lentes do Cortex GTM™</h3>
            <p>Não mudamos o produto. Recodificamos como o cérebro do CFO processa o produto.</p>
            <div className="case-phase"><h4>LENTE 1: Fundador (Preservar Instinto, Traduzir Linguagem)</h4><p>Insight: Fundadora criou metodologia por vivência pessoal (cuidado humanizado). Problema: Decisor financeiro não compra por empatia. Compra por métrica. Recodificação: <strong>Antes:</strong> "Cuidado Farmacêutico Integrativo" → <strong>Depois:</strong> "Plataforma que reduz custo de paciente crônico em 5.8x". Impacto neural: Sistema 1 reconhece padrão "redução de custo" instantaneamente. Amígdala relaxa (risco financeiro diminui). Decisão avança.</p></div>
            <div className="case-phase"><h4>LENTE 2: Comprador (Mapear Processo Decisório Real)</h4><p>Descoberta crítica via Sprint de Validação: → Decisor real: CFO (não diretor clínico) → Objeção principal: "Mais uma consultoria cara sem ROI comprovado" → Gatilho de decisão: Case validado com métrica tangível. Recodificação de abordagem: Paramos de vender "metodologia inovadora" (abstrato, Sistema 2). Começamos a vender "ROI 5.8x validado em hospital referência" (concreto, Sistema 1).</p></div>
            <div className="case-phase"><h4>LENTE 3: Receita (Definir ICP e Modelo Único)</h4><p>ICP refinado: → Hospitais: 200+ leitos, alta sinistralidade, CFO como decisor → Empresas: Programas de saúde corporativa com foco em gestão de crônicos → Escolas: Instituições de ensino que buscam reduzir absenteísmo e melhorar performance via saúde preventiva.<br/>Modelo de negócio: → B2B com fee por paciente gerenciado (hospitais) → B2B2E para programas corporativos → B2B2C para instituições de ensino → Não dispersão em white label simultâneos → Foco estratégico = clareza operacional.</p></div>
            <div className="case-phase"><h4>LENTE 4: Neurociência (Ativar Sistema 1 Antes de Sistema 2)</h4><p>Reestruturamos narrativa em três camadas neurais: Camada 1 — Dor reconhecível (ativa amígdala): "Paciente crônico é seu maior custo operacional". Camada 2 — Solução tangível (ativa núcleo accumbens): "Reduzimos esse custo em 5.8x". Camada 3 — Prova imediata (reduz risco percebido): "Case validado: Hospital X economizou R$ 2.1M/ano". Resultado: Decisão passa pelo filtro emocional (Sistema 1) antes de análise racional (Sistema 2).</p></div>
            <div className="case-phase"><h4>LENTE 5: Andragogia (Educar Mercado, Criar Categoria)</h4><p>Problema: Categoria "Cuidado Integrativo" não existia na mente do decisor. Solução: Criamos a categoria. → Cunhamos termo: "CareOps Integrativo" → Posicionamento: "1ª Plataforma de CareOps do Brasil" → Material educativo: Hospital/Empresa/Escola entendem sozinhos (não dependem de apresentação ao vivo) → Expansão estratégica: Validamos três verticais (Hospitais, Empresas, Escolas) com a mesma narrativa neural adaptada ao decisor específico. Impacto neural: Quando você nomeia a categoria, você domina a categoria. Cérebro do decisor associa "CareOps" com "Versão Holística" automaticamente.</p></div>
            <div className="case-image-detailed"><Image src="/cases/versaoholistica-br-hospitais.png" alt="Página de Hospitais da Versão Holística" width={1000} height={563} layout="responsive" /></div>
            <h3>O Resultado: Transformação da Tese</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Pitch de 15 minutos<br/>→ Decisor confuso<br/>→ "Vamos pensar..." (= não)<br/>→ Oferta dispersa</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Pitch de 3 minutos<br/>→ Decisor entende valor<br/>→ "Quando começamos?" (= sim)<br/>→ Tese de investimento clara</div></div>
            <p className="case-metric-summary"><strong>Em Advisory Board agora:</strong> Preparação para rodada de investimento com tese fundamentada e multi-segmento validado.</p>
            <div className="case-link"><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">Visite a prova: versaoholistica.com.br →</a></div>
          </div>
        </div>
      </section>

       <div className="section-divider-glow"></div>

      {/* BLOCO 5: CASE 3 - AORKIA */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">AORKIA</h2><p className="case-subtitle">Estudo de Caso: De Zero a Parceiro Global em 90 Dias</p></div>
          <div className="case-image-full"><Image src="/cases/aorkia-home.png" alt="Plataforma da AORKIA" width={1200} height={675} layout="responsive" /></div>
          <div className="case-narrative">
            <h3>O Contexto: Prova de Conceito Sob Pressão</h3>
            <p>Pergunta que todo cliente faz:</p>
            <blockquote className="phrase">"Vocês usam o método em vocês mesmos?"</blockquote>
            <p>AORKIA é a resposta. Empresa nova. Mercado extremamente técnico (Resiliência Cibernética para dados SaaS). Zero histórico. Competindo com players globais consolidados (Veeam, Commvault).<br/><strong>Desafio autoimposto:</strong> Criar do zero — marca, narrativa, posicionamento, plataforma, canal de receita — e atingir primeira tração comercial em 90 dias. Se não conseguíssemos, nossa credibilidade como consultoria de receita seria questionável.</p>
            
            <h3>A Intervenção: Engenharia de Receita em Modo Acelerado</h3>
            <div className="case-phase"><h4>FASE 1: Posicionamento Estratégico (Ancoragem de Autoridade)</h4><p>Decisão crítica: Não competir como "mais uma empresa de backup". Posicionamento escolhido: "Parceiro oficial Keepit — líder global em proteção de dados SaaS". Impacto neural: Cérebro do decisor faz transferência de autoridade. Keepit (autoridade global) → AORKIA (parceiro homologado) → "Se Keepit confia, eu posso confiar".</p></div>
            <div className="case-phase"><h4>FASE 2: Tradução de Complexidade Técnica (Sistema 1)</h4><p>Problema: Mercado de backup SaaS é tecnicamente denso. Termos como "imutabilidade", "air-gapped", "WORM" não significam nada para decisor de negócio.<br/>Recodificação neural: <strong>Antes (linguagem técnica):</strong> "Backup imutável em arquitetura air-gapped com replicação tri-regional" → <strong>Depois (linguagem de dor e resultado):</strong> "Seu provedor SaaS não faz backup dos seus dados. Essa responsabilidade é sua. Quanto custa cada minuto de parada?". Impacto: Ativa amígdala (medo de perda) + urgência (responsabilidade não transferível) → Sistema 1 sinaliza: "preciso resolver isso agora".</p></div>
            <div className="case-image-detailed"><Image src="/cases/aorkia-backup-saas-estrategico.png" alt="Página de Backup SaaS da AORKIA" width={1000} height={563} layout="responsive" /></div>
            
            <h3>O Resultado: 90 Dias de Invisível para Operacional</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Zero<br/>→ Ideia no papel<br/>→ Nenhum cliente<br/>→ Sem histórico</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois (90 dias):</strong><br/>→ Marca criada<br/>→ Narrativa validada<br/>→ Parceiro Global Keepit<br/>→ 1ª venda: +1.200 usuários<br/>→ Pipeline crescendo</div></div>
            <p className="case-metric-summary"><strong>Meta-prova:</strong> Aplicamos em nós mesmos o que vendemos. Funcionou. Agora replicamos para você.</p>
            <div className="case-link"><a href="https://aorkia.com" target="_blank" rel="noopener noreferrer">Visite a prova: aorkia.com →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 6: CASE 4 - PÓVOAS & PARTNERS */}
       <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">Póvoas & Partners</h2><p className="case-subtitle">Estudo de Caso: De PDF Estático para Plataforma Omnicanal</p></div>
            <div className="case-image-full"><Image src="/cases/Visao_Geral_Site_PovoasPartners_por_SynapseB2B.png" alt="Plataforma da Póvoas & Partners" width={1200} height={675} layout="responsive" /></div>
            <div className="case-narrative">
                <h3>O Contexto: Expertise Sem Arquitetura de Distribuição</h3>
                <p>Elaine Póvoas: Empresária, Conselheira, Palestrante, Mentora, Colunista e Escritora com participação em 10 livros publicados. Credibilidade consolidada no mercado B2B de tecnologia. Mas: Todo seu portfolio estava em um PDF estático.<br/><strong>O problema neural:</strong><br/>→ PDF exige download (fricção)<br/>→ Cliente não sabe qual serviço escolher entre 6 competências diferentes<br/>→ Informação linear (não adaptável ao perfil do decisor)<br/>→ Parceiros estratégicos apresentados como logos estáticas<br/>→ Impossível rastrear interesse (sem analytics)<br/>→ Zero arquitetura de conversão</p>
                <h3>A Intervenção: De Documento para Ecossistema Omnicanal</h3>
                <p>Não criamos "mais um site". Criamos arquitetura de distribuição inteligente onde cada competência e cada parceiro tem sua porta de entrada estratégica. Arquitetura da Plataforma: povoas.synapseb2b.com</p>
                <div className="case-phase"><h4>6 Competências, 6 Portas de Entrada</h4><p><strong>Antes:</strong> PDF com 6 serviços misturados → <strong>Depois:</strong> A um clique, cliente escolhe exatamente o que precisa (Palestras, Treinamentos, Mentoria, etc.). Impacto neural: Redução radical de fricção cognitiva. Decisor não precisa "descobrir" onde Elaine pode ajudar. Sistema apresenta opção exata em 30 segundos.</p></div>
                <div className="case-phase"><h4>12 Parceiros Estratégicos, 12 Canais de Valor</h4><p><strong>Antes:</strong> Logos em PDF sem contexto → <strong>Depois:</strong> Cada parceiro com card estratégico, descrição de valor e contato facilitado com chancela da Elaine. Impacto neural: Cada parceiro deixa de ser "logo no slide" e vira porta de entrada com transferência de autoridade. Cliente confia porque Elaine chancela.</p></div>
                <h3>O Resultado: De Documento para Omnicanalidade</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ PDF estático<br/>→ 6 competências misturadas<br/>→ 12 parceiros invisíveis<br/>→ "Envie o catálogo por email"</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Plataforma omnicanal<br/>→ 6 portas de entrada<br/>→ 12 parceiros estratégicos<br/>→ "Visite e escolha seu serviço"</div></div>
                <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
            </div>
         </div>
       </section>
       
       <div className="section-divider-glow"></div>

       {/* BLOCO 7: CASE 5 - PROFISSIONAIS DE SAÚDE */}
       <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 5</span><h2 className="case-title">Profissionais de Saúde</h2><p className="case-subtitle">Estudo de Caso: Expertise Clínica Sem Sistema de Receita</p></div>
            <div className="case-narrative">
                <h3>O Travamento Neural: Expertise Clínica ≠ Sistema de Receita</h3>
                <p>Profissionais de saúde — médicos, dentistas, fisioterapeutas, nutricionistas, psicólogos — dominam a técnica. Transformam vidas através do cuidado especializado. Mas: Formação técnica não inclui inteligência comercial.<br/><strong>O problema estrutural:</strong><br/>→ Agenda lotada não significa caixa saudável<br/>→ Procedimentos de baixo ROI consomem tempo de alto valor<br/>→ Salas ociosas 60% do tempo (ativo parado)<br/>→ Conhecimento valioso preso no consultório (não escalável)</p>
                <h3>A Intervenção: Recodificação de Expertise em Múltiplos Canais de Receita</h3>
                <p>Não ensinamos medicina ou odontologia. Instalamos inteligência estratégica de receita em quem já domina a entrega clínica.</p>
                <div className="case-phase"><h4>FRENTE 1: Otimização da Clínica Atual</h4><p>Redesenho da "Agenda Estratégica": → Mapeamos ROI por procedimento → Priorizamos atendimentos de maior impacto financeiro → Profissional ganha mais trabalhando igual ou menos.<br/><strong>Impacto:</strong> De agenda reativa (primeiro que liga) para agenda estratégica (maior retorno por hora).</p></div>
                <div className="case-phase"><h4>FRENTE 2: Ativação de Receita Recorrente</h4><p>Modelo: Clínica Compartilhada. Sala ociosa 60% do tempo = R$ 0/mês. Sala locada para outros profissionais = Receita recorrente sem aumentar esforço.<br/><strong>O que instalamos:</strong> → Pacote de locação → Regras de uso → Kit comercial para atrair parceiros.<br/><strong>Resultado:</strong> Ativo parado vira fonte de caixa em 3 semanas.</p></div>
                <div className="case-phase"><h4>FRENTE 3: Modelos Disruptivos Multi-Canal</h4><p>Transformando saber clínico em receita escalável: → Mentorias online → Cursos digitais → Consultoria para outros profissionais → Parcerias estratégicas.<br/><strong>Impacto neural:</strong> Profissional descobre que pode faturar enquanto dorme com modelos que não dependem de "mais um paciente no consultório".</p></div>
                <h3>O Resultado: De Agenda Lotada para Sistema de Receita</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Agenda cheia, caixa apertado<br/>→ Sala ociosa<br/>→ Conhecimento preso</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Agenda otimizada (maior ROI/hora)<br/>→ Receita recorrente de locação<br/>→ Múltiplos canais de aquisição</div></div>
                <p className="case-metric-summary"><strong>Caso real:</strong> Clínica odontológica em MG ativou primeira receita recorrente em 3 semanas com modelo de locação de sala.</p>
            </div>
        </div>
       </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 8: VERSATILIDADE DO MÉTODO - MATCH MAKER */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
            <div className="case-header"><h2 className="case-title">Synapse B2B Match Maker</h2><p className="case-subtitle">Quando Dados Viram Inteligência de Conexão</p></div>
            <div className="case-narrative">
                <h3>O Problema: Riqueza Invisível em Comunidades</h3>
                <p>Empresas, organizações e grupos operam em grandes comunidades — especialmente WhatsApp, Notion ou planilhas Excel. Mas: Informação é assíncrona e invisível.</p>
                <blockquote className="phrase">→ "Alguém conhece um designer?"<br/>→ (Tem 3 designers no grupo, mas ninguém sabe quem são, o que fazem, se estão disponíveis)</blockquote>
                <p><strong>O travamento neural:</strong> Decisão cognitivamente cara (buscar, filtrar, comparar, decidir) bloqueia ação.</p>
                <h3>A Solução: Sistema Neural Toma Decisão no Lugar do Usuário</h3>
                <p>Synapse B2B Match Maker não é "mais uma ferramenta de networking". É redução radical de carga cognitiva.<br/><strong>Como funciona:</strong><br/>→ Usuário insere necessidade → Sistema processa base de dados estruturada → Retorna 3 matches perfeitos em 10 segundos (não 50 opções confusas).<br/><strong>Impacto neural:</strong> Sistema 1 recebe resultado pronto. Decisão instantânea.</p>
                <div className="case-phase"><h4>O Princípio: Dado → Informação → Conhecimento → Inteligência</h4><p>Maioria das organizações está na fase 1 ou 2: → Dado: "Temos 500 pessoas cadastradas" → Informação: "30 são designers".<br/>Synapse eleva para fase 3 e 4: → Conhecimento: "5 designers disponíveis agora com experiência em UX para SaaS" → Inteligência: "Estes 3 são os matches perfeitos para seu projeto específico".</p></div>
                <p><strong>Resultado:</strong> De caos relacional para confluência estratégica em segundos.</p>
                <div className="case-link"><a href="https://gmm.synapseb2b.com" target="_blank" rel="noopener noreferrer">Conheça a ferramenta →</a></div>
            </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>
      
      {/* BLOCO 9 E 10: CONCLUSÃO E CTA FINAL */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">O Princípio Unificador</h2>
          <p className="lead-text">O Que Governa Todos Estes Casos</p>
          <div className="cases-proof-grid">
            <div className="proof-item"><strong>Exclusiva Engenharias:</strong> Três empresas sem categoria → Hub com identidade neural clara</div>
            <div className="proof-item"><strong>Versão Holística:</strong> Inovação incompreensível → ROI tangível em 3 verticais</div>
            <div className="proof-item"><strong>AORKIA:</strong> Zero para 1.200 usuários no primeiro mês</div>
            <div className="proof-item"><strong>Póvoas:</strong> PDF estático → 18 páginas estratégicas</div>
            <div className="proof-item"><strong>Profissionais de Saúde:</strong> Agenda lotada → Sistema de receita multi-canal</div>
            <div className="proof-item"><strong>Match Maker:</strong> Informações desestruturadas → Resultado instantâneo</div>
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
                <li>Se você é profissional de saúde com agenda cheia mas caixa apertado, funcionará.</li>
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
        /* INTRODUÇÃO E ESTRUTURA GERAL */
        .intro-cases-block, .case-narrative, .final-cta-section { text-align: center; }
        .intro-cases-block { max-width: 900px; margin: 0 auto; }
        .dual-system-box { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 2rem; margin: 2rem auto; max-width: 700px; }
        .system-side h4 { font-family: 'Montserrat'; font-size: 1.2rem; color: var(--color-primary); margin-bottom: 0.5rem; }
        .system-side.system-2 h4 { color: var(--color-text); }
        
        /* NOVOS ESTILOS PARA ORGANIZAÇÃO DE TEXTO */
        .neural-flow { margin-top: 2rem; }
        .flow-item { margin-bottom: 2rem; }
        .flow-summary { font-size: 1.1rem; font-weight: 500; margin: 2rem 0; }
        .phrase { display: block; font-style: italic; color: var(--color-heading); background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1rem; border-radius: 8px; margin: 1rem auto; max-width: 80%;}
        .phrase.positive { color: var(--color-primary); }
        .phrase.negative { opacity: 0.7; }
        .consequence { display: block; font-weight: 600; color: var(--color-text); }
        .neural-sequence { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; }
        .neural-sequence svg { color: var(--color-primary); }
        .consequences-block { margin-top: 2rem; }
        .consequences-block h4 { font-size: 1.1rem; color: var(--color-heading); margin-bottom: 1rem; }
        .consequences-block ul { list-style: none; padding: 0; }

        /* ESTRUTURA DOS CASES */
        .case-section-wrapper { padding: 5rem 0; }
        .case-header { text-align: center; margin-bottom: 4rem; }
        .case-number { display: inline-block; font-family: 'Montserrat'; font-size: 0.9rem; font-weight: 700; color: var(--color-primary); border: 1px solid var(--color-border); padding: 0.5rem 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
        .case-title { font-family: 'Montserrat'; font-size: 3rem; color: var(--color-heading); }
        .case-subtitle { font-size: 1.2rem; color: var(--color-text); max-width: 700px; margin: 0.5rem auto 0; }
        
        .case-narrative { max-width: 800px; margin: 0 auto; }
        .case-narrative h3 { font-family: 'Montserrat'; font-size: 1.8rem; color: var(--color-heading); margin: 3rem 0 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .case-narrative p { margin-bottom: 1.5rem; line-height: 1.8; }
        .case-narrative strong { color: var(--color-heading); }
        .case-phase { margin: 2.5rem 0; }
        .case-phase h4 { font-size: 1.2rem; color: var(--color-primary); margin-bottom: 1rem; }
        
        .case-image-full, .case-image-detailed { margin: 3rem auto; border-radius: 16px; overflow: hidden; border: 1px solid var(--color-border); max-width: 1000px; }
        
        .transformation-metric { display: grid; grid-template-columns: 1fr auto 1fr; align-items: start; gap: 1.5rem; text-align: center; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; margin-top: 2rem; }
        .transformation-metric svg { color: var(--color-primary); margin-top: 1.5rem; }
        .case-metric-summary { font-weight: 600; font-style: italic; margin-top: 2rem; }
        .case-link { margin-top: 2rem; }
        .case-link a { color: var(--color-accent); font-weight: 600; }

        /* BLOCO FINAL */
        .cases-proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0; }
        .proof-item { background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1rem; border-radius: 8px; }
        .thesis-block { margin: 4rem 0; }
        .thesis-block h3 { font-size: 1.5rem; color: var(--color-heading); margin-bottom: 1rem; }
        .cta-neuro-block { margin: 4rem 0; }
        .cta-neuro-block h3 { font-size: 1.5rem; color: var(--color-heading); margin-bottom: 1rem; }
        .cta-checklist { list-style: none; padding: 0; margin: 1.5rem 0; display: inline-block; text-align: left; }
        .cta-checklist li { padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; }
        .cta-checklist li::before { content: '✓'; color: var(--color-primary); position: absolute; left: 0; }
        .post-scriptum { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border); opacity: 0.8; }
        .post-scriptum h4 { font-size: 1.1rem; color: var(--color-heading); margin-bottom: 1rem; }
        
        @media (max-width: 768px) {
          .case-title { font-size: 2.2rem; }
          .dual-system-box { grid-template-columns: 1fr; }
          .transformation-metric { grid-template-columns: 1fr; }
          .transformation-metric svg { transform: rotate(90deg); margin: 1rem auto; }
          .neural-sequence { flex-direction: column; }
        }
      `}</style>
    </>
  );
}