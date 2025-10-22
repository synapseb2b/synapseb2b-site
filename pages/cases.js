import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap, Target, Users, HeartPulse, HardHat, Briefcase, Rocket, MonitorSmartphone, Wrench } from 'lucide-react';

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
      <section className="hero-section short-hero">
        <div className="hero-video-background"><video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video><div className="hero-overlay"></div></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Quando Clareza Vira Receita</h1>
          <p className="hero-subheadline wider-on-desktop">O córtex pré-frontal do seu comprador trava em análise. Você explica. Ele ouve. Mas a decisão não acontece. Não é porque seu produto não funciona. É porque você ativou o sistema errado no cérebro errado.</p>
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
            <p className="lead-text">Quando você força o Sistema 2 ("deixe-me explicar nossa arquitetura técnica"), o cérebro do decisor ativa o mecanismo de defesa: "vamos pensar" (tradução: "isso é complexo demais, vou adiar"). Estes cinco cases mostram como recodificamos mensagens para ativar o Sistema 1 primeiro. Quando o Sistema 1 diz "sim" (confiança, urgência, clareza), o Sistema 2 racionaliza a compra. Quando o Sistema 1 diz "não sinto isso" (confusão, dúvida), o Sistema 2 encontra desculpas para não comprar.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 3: CASE 1 - EXCLUSIVA ENGENHARIAS */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 1</span><h2 className="case-title">Exclusiva Engenharias</h2><p className="case-subtitle">Estudo de Caso: Recodificação Neural de Três Empresas Invisíveis</p></div>
          <div className="case-image-full"><Image src="/images/cases/exclusivaengenharias-home.jpg" alt="Plataforma da Exclusiva Engenharias" width={1200} height={675} layout="responsive" /></div>
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação. O cérebro do decisor industrial não conseguia categorizar a oferta. "São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?". Sem categoria clara → Sistema 1 não reconhece padrão → Não gera sensação de "eu entendo o que vocês fazem" → Decisão não acontece. Adicional: Operação em modo sobrevivência. Crescimento dependendo de networking heroico ao invés de sistema replicável. Cada venda exigia esforço excepcional. Impossível escalar. Impossível prever receita.</p>
            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Não otimizamos a engenharia. Recodificamos como o mercado processa a engenharia.</p>
            <div className="case-phase"><h4>FASE 1: Recodificação de Identidade + Arquitetura de Proposta de Valor</h4><p><strong>Antes:</strong> "Somos três empresas de engenharia" → <strong>Depois:</strong> "Somos o hub de engenharias que resolve problemas industriais que outros evitam". Impacto neural: Cérebro categoriza instantaneamente. "Hub" = agregador (padrão reconhecível). "Problemas que outros evitam" = especialização (reduz competição percebida). Proposta de valor recodificada: <strong>Antes:</strong> Apresentação técnica de 40 minutos explicando capacidades → <strong>Depois:</strong> "Projetos que funcionam na primeira vez". Impacto neural: Ativa amígdala (medo de erro/retrabalho), depois ativa núcleo accumbens (promessa de resultado). Sistema 1 sinaliza: "isso resolve minha dor".</p></div>
            <div className="case-phase"><h4>FASE 2: Plataforma de Aceleração de Receita</h4><p>exclusivaengenharias.com não é site institucional. É ativo de conversão neural. → 30% institucional (credibilidade) → 70% engenharia de receita (conversão) → Cada página ativa Sistema 1 antes de Sistema 2 → Lead entra educado sobre valor antes do contato comercial</p></div>
            <div className="case-image-detailed"><Image src="/images/cases/exclusivaengenharias-sobre-nos.jpg" alt="Detalhe da plataforma Exclusiva Engenharias" width={1000} height={563} layout="responsive" /></div>
            <div className="case-phase"><h4>FASE 3: Simulador de Orçamento Integrado</h4><p>Ferramenta proprietária que toma decisão cognitivamente cara no lugar do cliente. → Cliente insere: tipo de projeto + escopo + prazo → Sistema retorna: estimativa de investimento em 30 segundos → Impacto neural: Decisão exaustiva (calcular custo) executada pelo sistema. Reduz carga cognitiva. Lead entra na conversa comercial já com contexto de valor.</p></div>
            <div className="case-phase"><h4>FASE 4: CRO as a Service (Governança de Execução)</h4><p>Liderança C-level fracionada operando Diretoria de Receita: → Inteligência de mercado (Win/Loss Analysis) → Prospecção ativa estruturada → Execução pioneira de reuniões (modelagem de abordagem) → Playbook documentado para escalar time. Impacto: De heroísmo individual para sistema replicável. Qualquer vendedor mediano executa processo excelente.</p></div>
            <h3>O Resultado: Transformação Sistêmica</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ 3 empresas segregadas → Zero presença digital → 100% indicação → Operação em modo sobrevivência → Receita imprevisível</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Hub consolidado com identidade clara → Motor de geração de demanda ativo → Primeiros clientes por busca orgânica (inédito) → Pipeline estruturado → Sistema replicável documentado → Evento de 5 anos (organizado por nós) para celebrar reposicionamento estratégico</div></div>
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
          <div className="case-image-full"><Image src="/images/cases/versaoholistica-home.jpg" alt="Plataforma da Versão Holística" width={1200} height={675} layout="responsive" /></div>
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Healthtech fundada por superação pessoal. Metodologia inovadora de cuidado integrativo. Produto validado. Casos de sucesso reais. Mas hospitais e investidores faziam sempre a mesma pergunta: "O que, exatamente, vocês fazem por mim?". Diagnóstico (Cortex GTM™): A narrativa "Cuidado Farmacêutico Integrativo" forçava o decisor (CFO de hospital) a entrar em Sistema 2 exaustivo: → "Farmacêutico = medicamento?" → "Integrativo = holístico?" → "Isso reduz custo ou aumenta?" → "Quem paga? Quanto custa? Qual evidência?". Pitch de 15 minutos terminava com: "Vamos pensar..." (Tradução neural: "Isso é complexo demais. Não consigo categorizar. Adio decisão.")</p>
            <h3>A Intervenção: Aplicação das 5 Lentes do Cortex GTM™</h3>
            <p>Não mudamos o produto. Recodificamos como o cérebro do CFO processa o produto.</p>
            <div className="case-phase"><h4>LENTE 1: Fundador (Preservar Instinto, Traduzir Linguagem)</h4><p>Insight: Fundadora criou metodologia por vivência pessoal (cuidado humanizado). Problema: Decisor financeiro não compra por empatia. Compra por métrica. Recodificação: <strong>Antes:</strong> "Cuidado Farmacêutico Integrativo" → <strong>Depois:</strong> "Plataforma que reduz custo de paciente crônico em 5.8x". Impacto neural: Sistema 1 reconhece padrão "redução de custo" instantaneamente. Amígdala relaxa (risco financeiro diminui). Decisão avança.</p></div>
            <div className="case-phase"><h4>LENTE 2: Comprador (Mapear Processo Decisório Real)</h4><p>Descoberta crítica via Sprint de Validação: → Decisor real: CFO (não diretor clínico) → Objeção principal: "Mais uma consultoria cara sem ROI comprovado" → Gatilho de decisão: Case validado com métrica tangível. Recodificação de abordagem: Paramos de vender "metodologia inovadora" (abstrato, Sistema 2). Começamos a vender "ROI 5.8x validado em hospital referência" (concreto, Sistema 1).</p></div>
            <div className="case-phase"><h4>LENTE 3: Receita (Definir ICP e Modelo Único)</h4><p>ICP refinado: → Hospitais: 200+ leitos, alta sinistralidade, CFO como decisor → Empresas: Programas de saúde corporativa com foco em gestão de crônicos → Escolas: Instituições de ensino que buscam reduzir absenteísmo e melhorar performance via saúde preventiva. Modelo de negócio: → B2B com fee por paciente gerenciado (hospitais) → B2B2E para programas corporativos → B2B2C para instituições de ensino → Não dispersão em white label simultâneos → Foco estratégico = clareza operacional</p></div>
            <div className="case-phase"><h4>LENTE 4: Neurociência (Ativar Sistema 1 Antes de Sistema 2)</h4><p>Reestruturamos narrativa em três camadas neurais: Camada 1 — Dor reconhecível (ativa amígdala): "Paciente crônico é seu maior custo operacional". Camada 2 — Solução tangível (ativa núcleo accumbens): "Reduzimos esse custo em 5.8x". Camada 3 — Prova imediata (reduz risco percebido): "Case validado: Hospital X economizou R$ 2.1M/ano". Resultado: Decisão passa pelo filtro emocional (Sistema 1) antes de análise racional (Sistema 2).</p></div>
            <div className="case-phase"><h4>LENTE 5: Andragogia (Educar Mercado, Criar Categoria)</h4><p>Problema: Categoria "Cuidado Integrativo" não existia na mente do decisor. Solução: Criamos a categoria. → Cunhamos termo: "CareOps Integrativo" → Posicionamento: "1ª Plataforma de CareOps do Brasil" → Material educativo: Hospital/Empresa/Escola entendem sozinhos (não dependem de apresentação ao vivo) → Expansão estratégica: Validamos três verticais (Hospitais, Empresas, Escolas) com a mesma narrativa neural adaptada ao decisor específico. Impacto neural: Quando você nomeia a categoria, você domina a categoria. Cérebro do decisor associa "CareOps" com "Versão Holística" automaticamente.</p></div>
            <div className="case-image-detailed"><Image src="/images/cases/versaoholistica-br-hospitais.jpg" alt="Página de Hospitais da Versão Holística" width={1000} height={563} layout="responsive" /></div>
            <h3>O Resultado: Transformação da Tese</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Pitch de 15 minutos → Decisor confuso → "Vamos pensar..." (= não) → Oferta dispersa em múltiplos modelos</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Pitch de 3 minutos → Decisor entende valor → "Quando começamos?" (= sim) → Tese de investimento clara → ROI 5.8x mensurável e replicável → Categoria criada e dominada → Três verticais validadas (Hospitais, Empresas, Escolas)</div></div>
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
          <div className="case-image-full"><Image src="/images/cases/aorkia-home.jpg" alt="Plataforma da AORKIA" width={1200} height={675} layout="responsive" /></div>
          <div className="case-narrative">
            <h3>O Contexto: Prova de Conceito Sob Pressão</h3>
            <p>Pergunta que todo cliente faz: "Vocês usam o método em vocês mesmos?". AORKIA é a resposta. Empresa nova. Mercado extremamente técnico (Resiliência Cibernética para dados SaaS). Zero histórico. Competindo com players globais consolidados (Veeam, Commvault). Desafio autoimposto: Criar do zero — marca, narrativa, posicionamento, plataforma, canal de receita — e atingir primeira tração comercial em 90 dias. Se não conseguíssemos, nossa credibilidade como consultoria de receita seria questionável.</p>
            <h3>A Intervenção: Engenharia de Receita em Modo Acelerado</h3>
            <div className="case-phase"><h4>FASE 1: Posicionamento Estratégico (Ancoragem de Autoridade)</h4><p>Decisão crítica: Não competir como "mais uma empresa de backup". Posicionamento escolhido: "Parceiro oficial Keepit — líder global em proteção de dados SaaS". Impacto neural: Cérebro do decisor faz transferência de autoridade. Keepit (autoridade global) → AORKIA (parceiro homologado) → "Se Keepit confia, eu posso confiar".</p></div>
            <div className="case-phase"><h4>FASE 2: Tradução de Complexidade Técnica (Sistema 1)</h4><p>Problema: Mercado de backup SaaS é tecnicamente denso. Termos como "imutabilidade", "air-gapped", "WORM" não significam nada para decisor de negócio. Recodificação neural: <strong>Antes (linguagem técnica):</strong> "Backup imutável em arquitetura air-gapped com replicação tri-regional" → <strong>Depois (linguagem de dor e resultado):</strong> "Seu provedor SaaS não faz backup dos seus dados. Essa responsabilidade é sua. Quanto custa cada minuto de parada?". Impacto: Ativa amígdala (medo de perda) + urgência (responsabilidade não transferível) → Sistema 1 sinaliza: "preciso resolver isso agora".</p></div>
            <div className="case-image-detailed"><Image src="/images/cases/aorkia-backup-saas-estrategico.jpg" alt="Página de Backup SaaS da AORKIA" width={1000} height={563} layout="responsive" /></div>
            <h3>O Resultado: 90 Dias de Invisível para Operacional</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Zero → Ideia no papel → Nenhum cliente → Sem histórico</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois (90 dias):</strong><br/>→ Marca criada → Narrativa validada → Homologação como Parceiro Global Keepit (processo que leva meses) → Primeira venda: contrato de mais de 1.200 usuários fechado no primeiro mês → Pipeline crescendo com conversas qualificadas estruturadas → Motor de receita estruturado antes de escalar</div></div>
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
            <div className="case-image-full"><Image src="/images/cases/Visao_Geral_Site_PovoasPartners_por_SynapseB2B.jpg" alt="Plataforma da Póvoas & Partners" width={1200} height={675} layout="responsive" /></div>
            <div className="case-narrative">
                <h3>O Contexto: Expertise Sem Arquitetura de Distribuição</h3>
                <p>Elaine Póvoas: Empresária, Conselheira, Palestrante, Mentora, Colunista e Escritora com participação em 10 livros publicados. Credibilidade consolidada no mercado B2B de tecnologia. Mas: Todo seu portfolio estava em um PDF estático. O problema neural: → PDF exige download (fricção) → Cliente não sabe qual serviço escolher entre 6 competências diferentes → Informação linear (não adaptável ao perfil do decisor) → Parceiros estratégicos invisíveis (12 empresas sem exposição) → Impossível rastrear interesse (sem analytics) → Zero arquitetura de conversão</p>
                <h3>A Intervenção: De Documento para Ecossistema Omnicanal</h3>
                <p>Não criamos "mais um site". Criamos arquitetura de distribuição inteligente onde cada competência e cada parceiro tem sua porta de entrada estratégica. Arquitetura da Plataforma: povoas.synapseb2b.com</p>
                <div className="case-phase"><h4>6 Competências, 6 Portas de Entrada:</h4><p><strong>Antes:</strong> PDF com 6 serviços misturados → <strong>Depois:</strong> A um clique, cliente escolhe exatamente o que precisa (Palestras, Treinamentos, Mentoria, Conselho Consultivo, Head Hunter, Cerimonialista). Impacto neural: Redução radical de fricção cognitiva. Decisor não precisa "descobrir" onde Elaine pode ajudar. Sistema apresenta opção exata em 30 segundos.</p></div>
                <div className="case-phase"><h4>12 Parceiros Estratégicos, 12 Canais de Valor:</h4><p><strong>Antes:</strong> Logos em PDF sem contexto → <strong>Depois:</strong> Cada parceiro com card estratégico, descrição de valor e contato facilitado com chancela da Elaine (Atlas Team, Bendomini, Bid Broker, etc.). Impacto neural: Cada parceiro deixa de ser "logo no slide" e vira porta de entrada com transferência de autoridade. Cliente confia porque Elaine chancela.</p></div>
                <h3>O Resultado: De Documento para Omnicanalidade</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ PDF estático → 6 competências misturadas → 12 parceiros invisíveis → Zero rastreamento → "Envie o catálogo por email"</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Plataforma omnicanal → 6 portas de entrada (uma por competência) → 12 parceiros com card estratégico → Analytics de comportamento → "Visite e escolha seu serviço" → Conversão mensurável</div></div>
                <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
            </div>
         </div>
       </section>
      
      {/* ... (Outros cases virão aqui) ... */}
      
      <div className="section-divider-glow"></div>
      
      {/* BLOCO FINAL: CONCLUSÃO + CTA */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">A Tese que Une Tudo</h2>
          <p className="lead-text">Receita previsível não vem de produto superior. Vem de arquitetura neural da decisão. Nosso trabalho não é vender melhor. É recodificar como seu mercado processa seu valor.</p>
          <div className="section-cta"><Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico (21min)</span><ArrowRight size={20} /></Link></div>
          <p className="cta-support-text">Se você tem potencial técnico travado em narrativa confusa, funcionará. Se cresce por heroísmo e não por sistema, funcionará.</p>
        </div>
      </section>

      <style jsx>{`
        /* INTRODUÇÃO E ESTRUTURA GERAL */
        .intro-cases-block { max-width: 900px; margin: 0 auto; text-align: center; }
        .dual-system-box { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 2rem; margin: 2rem 0; }
        .system-side h4 { font-family: 'Montserrat'; font-size: 1.2rem; color: var(--color-primary); margin-bottom: 0.5rem; }
        .system-side.system-2 h4 { color: var(--color-text); }

        /* ESTRUTURA DOS CASES */
        .case-section-wrapper { padding: 5rem 0; }
        .case-header { text-align: center; margin-bottom: 3rem; }
        .case-number { display: inline-block; font-family: 'Montserrat'; font-size: 0.9rem; font-weight: 700; color: var(--color-primary); border: 1px solid var(--color-border); padding: 0.5rem 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
        .case-title { font-family: 'Montserrat'; font-size: 3rem; color: var(--color-heading); }
        .case-subtitle { font-size: 1.2rem; color: var(--color-text); max-width: 700px; margin: 0.5rem auto 0; }
        
        .case-image-full, .case-image-detailed { margin: 3rem auto; border-radius: 16px; overflow: hidden; border: 1px solid var(--color-border); max-width: 1200px; }
        .case-image-detailed { max-width: 1000px; }

        .case-narrative { max-width: 800px; margin: 0 auto; text-align: center; }
        .case-narrative h3 { font-family: 'Montserrat'; font-size: 1.8rem; color: var(--color-heading); margin: 3rem 0 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .case-narrative p { margin-bottom: 1.5rem; line-height: 1.8; }
        .case-narrative strong { color: var(--color-heading); }
        .highlight-quote { padding: 1.5rem; background-color: var(--color-section-bg); border-left: 3px solid var(--color-primary); border-radius: 0 8px 8px 0; font-style: italic; font-size: 1.1rem; text-align: left; }
        
        .case-phase { margin-bottom: 2.5rem; }
        .case-phase h4 { font-size: 1.1rem; color: var(--color-primary); margin-bottom: 0.75rem; }
        
        .transformation-metric { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 2rem; text-align: center; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; margin: 3rem 0; }
        .transformation-metric svg { color: var(--color-primary); }
        .case-metric-summary { font-weight: 600; font-style: italic; }
        .case-link { margin-top: 2rem; text-align: center; }
        .case-link a { color: var(--color-accent); font-weight: 600; }
        
        @media (max-width: 768px) {
          .case-title { font-size: 2.2rem; }
          .dual-system-box { grid-template-columns: 1fr; }
          .transformation-metric { grid-template-columns: 1fr; }
          .transformation-metric svg { transform: rotate(90deg); margin: 1rem auto; }
        }
      `}</style>
    </>
  );
}