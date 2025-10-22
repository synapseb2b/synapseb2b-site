import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap, Target, Users, HeartPulse, HardHat, Briefcase, Rocket, MonitorSmartphone, Wrench, ChevronDown } from 'lucide-react';

// Componente para Imagem Expansível
const ExpandableImage = ({ src, alt, initialHeight = '200px' }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`image-expander ${isExpanded ? 'expanded' : ''}`} style={{ '--initial-height': initialHeight }}>
            <div className="image-container">
                <Image src={src} alt={alt} width={1200} height={675} layout="responsive" />
            </div>
            {!isExpanded && (
                <button className="expand-button" onClick={() => setIsExpanded(true)}>
                    <ChevronDown /> Ver Imagem Completa
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
          <div className="case-header"><span className="case-number">CASE 1</span><h2 className="case-title">Exclusiva Engenharias</h2><p className="case-subtitle">Estudo de Caso: Recodificação Neural de Três Empresas Invisíveis</p></div>
          <ExpandableImage src="/cases/exclusivaengenharias-home.png" alt="Plataforma da Exclusiva Engenharias" />
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação.<br/><strong>Diagnóstico (Cortex GTM™):</strong><br/>O cérebro do decisor industrial não conseguia categorizar a oferta.</p>
            <blockquote className="phrase">"São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</blockquote>
            <div className="neural-sequence"><span>Sem categoria clara</span><ArrowRight/><span>Sistema 1 não reconhece padrão</span><ArrowRight/><span>Não gera "eu entendo o que vocês fazem"</span><ArrowRight/><span>Decisão não acontece</span></div>
            <div className="consequences-block"><h4>Consequências Operacionais:</h4><ul><li>Operação em modo sobrevivência.</li><li>Crescimento dependendo de networking heroico ao invés de sistema replicável.</li><li>Cada venda exigia esforço excepcional. Impossível escalar. Impossível prever receita.</li></ul></div>
            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Não otimizamos a engenharia. Recodificamos como o mercado processa a engenharia.</p>
            <div className="case-phase"><h4>FASE 1: Recodificação de Identidade + Arquitetura de Proposta de Valor</h4><p><strong>Recodificação:</strong> De "Somos três empresas de engenharia" para "Somos o hub de engenharias que resolve problemas industriais que outros evitam".<br/><strong>Proposta de Valor Recodificada:</strong> De uma apresentação de 40 minutos para "Projetos que funcionam na primeira vez".</p></div>
            <div className="case-phase"><h4>FASE 2: Plataforma de Aceleração de Receita</h4><p>exclusivaengenharias.com não é site institucional. É ativo de conversão neural: 70% engenharia de receita, 30% institucional.</p></div>
            <ExpandableImage src="/cases/exclusivaengenharias-sobre-nos.png" alt="Detalhe da plataforma Exclusiva Engenharias" />
            <div className="case-phase"><h4>FASE 3: Simulador de Orçamento Integrado</h4><p>Ferramenta proprietária que toma a decisão cognitivamente cara no lugar do cliente, retornando uma estimativa de investimento em 30 segundos.</p></div>
            <div className="case-phase"><h4>FASE 4: CRO as a Service (Governança de Execução)</h4><p>Liderança C-level fracionada que transforma heroísmo individual em sistema replicável.</p></div>
            <h3>O Resultado: Transformação Sistêmica</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ 3 empresas segregadas<br/>→ 100% indicação<br/>→ Receita imprevisível</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Hub consolidado<br/>→ Motor de demanda ativo<br/>→ Sistema replicável</div></div>
            <div className="case-link"><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Visite a prova: exclusivaengenharias.com →</a></div>
          </div>
        </div>
      </section>
      
      {/* ... (Todos os outros cases seguem a mesma estrutura, com o código completo abaixo) ... */}
       <div className="section-divider-glow"></div>
      <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 2</span><h2 className="case-title">Versão Holística</h2><p className="case-subtitle">Estudo de Caso: Tradução Neurocientífica de Inovação em ROI</p></div>
          <ExpandableImage src="/cases/versaoholistica-home.png" alt="Plataforma da Versão Holística" />
          <div className="case-narrative">
            <h3>O Travamento Neural</h3>
            <p>Healthtech com produto validado, mas hospitais e investidores faziam a mesma pergunta:</p>
            <blockquote className="phrase">"O que, exatamente, vocês fazem por mim?"</blockquote>
            <p><strong>Diagnóstico:</strong> A narrativa "Cuidado Farmacêutico Integrativo" forçava o Sistema 2 do CFO, que não conseguia categorizar e adiava a decisão com um "vamos pensar."</p>
            <h3>A Intervenção: Aplicação das 5 Lentes do Cortex GTM™</h3>
            <p>Não mudamos o produto. Recodificamos como o cérebro do CFO processa o produto.</p>
            <div className="case-phase"><h4>LENTE 1: Fundador (Preservar Instinto, Traduzir Linguagem)</h4><p><strong>Insight:</strong> Fundadora criou metodologia por vivência pessoal. <strong>Problema:</strong> Decisor financeiro compra por métrica. <strong>Recodificação:</strong> De "Cuidado Farmacêutico Integrativo" para "Plataforma que reduz custo de paciente crônico em 5.8x".</p></div>
            <div className="case-phase"><h4>LENTE 2: Comprador (Mapear Processo Decisório Real)</h4><p><strong>Descoberta:</strong> O decisor real é o CFO, e seu gatilho é ROI tangível. <strong>Recodificação da abordagem:</strong> Paramos de vender "metodologia" (Sistema 2) e passamos a vender "ROI 5.8x validado" (Sistema 1).</p></div>
            <div className="case-phase"><h4>LENTE 3: Receita (Definir ICP e Modelo Único)</h4><p><strong>ICP refinado:</strong> Hospitais (+200 leitos), Empresas (saúde corporativa) e Escolas (saúde preventiva). <strong>Modelo de negócio:</strong> Foco em B2B/B2B2C com fee por paciente, eliminando dispersão.</p></div>
            <div className="case-phase"><h4>LENTE 4: Neurociência (Ativar Sistema 1 Antes de Sistema 2)</h4><p>Narrativa em três camadas: 1. Dor ("Paciente crônico é seu maior custo"). 2. Solução ("Reduzimos esse custo em 5.8x"). 3. Prova ("Case validado: Hospital X economizou R$ 2.1M/ano").</p></div>
            <div className="case-phase"><h4>LENTE 5: Andragogia (Educar Mercado, Criar Categoria)</h4><p><strong>Problema:</strong> Categoria inexistente. <strong>Solução:</strong> Criamos a categoria, cunhando o termo "CareOps Integrativo" e posicionando a VH como a "1ª Plataforma de CareOps do Brasil".</p></div>
            <ExpandableImage src="/cases/versaoholistica-br-hospitais.png" alt="Página de Hospitais da Versão Holística" />
            <h3>O Resultado: Transformação da Tese</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Pitch de 15 min<br/>→ "Vamos pensar..." (= não)</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Pitch de 3 min<br/>→ "Quando começamos?" (= sim)</div></div>
            <p className="case-metric-summary"><strong>Em Advisory Board agora:</strong> Preparação para rodada de investimento com tese fundamentada e multi-segmento validado.</p>
            <div className="case-link"><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">Visite a prova: versaoholistica.com.br →</a></div>
          </div>
        </div>
      </section>
      <div className="section-divider-glow"></div>
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">AORKIA</h2><p className="case-subtitle">Estudo de Caso: De Zero a Parceiro Global em 90 Dias</p></div>
          <ExpandableImage src="/cases/aorkia-home.png" alt="Plataforma da AORKIA" />
          <div className="case-narrative">
            <h3>O Contexto: Prova de Conceito Sob Pressão</h3>
            <p>AORKIA é a nossa resposta à pergunta: <blockquote className="phrase">"Vocês usam o método em vocês mesmos?"</blockquote> <strong>Desafio autoimposto:</strong> Criar marca, narrativa, plataforma e gerar tração comercial em 90 dias num mercado técnico (Resiliência Cibernética), competindo com gigantes globais.</p>
            <h3>A Intervenção: Engenharia de Receita Acelerada</h3>
            <div className="case-phase"><h4>FASE 1: Posicionamento Estratégico (Ancoragem de Autoridade)</h4><p><strong>Decisão crítica:</strong> Não competir como "mais uma empresa de backup". <strong>Posicionamento escolhido:</strong> "Parceiro oficial Keepit — líder global". <strong>Impacto neural:</strong> Transferência de autoridade. "Se Keepit confia, eu posso confiar".</p></div>
            <div className="case-phase"><h4>FASE 2: Tradução de Complexidade Técnica (Sistema 1)</h4><p><strong>Problema:</strong> Termos como "imutabilidade" não significam nada para o decisor. <strong>Recodificação neural:</strong> De "Backup imutável" para "Seu provedor SaaS não faz backup dos seus dados. A responsabilidade é sua. Quanto custa cada minuto de parada?". <strong>Impacto:</strong> Ativa amígdala (medo) e urgência.</p></div>
            <ExpandableImage src="/cases/aorkia-backup-saas-estrategico.png" alt="Página de Backup SaaS da AORKIA" />
            <h3>O Resultado: 90 Dias de Invisível para Operacional</h3>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Zero<br/>→ Ideia no papel</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois (90 dias):</strong><br/>→ Parceiro Global Keepit<br/>→ 1ª venda: +1.200 usuários</div></div>
            <p className="case-metric-summary"><strong>Meta-prova:</strong> Aplicamos em nós mesmos o que vendemos. Funcionou.</p>
            <div className="case-link"><a href="https://aorkia.com" target="_blank" rel="noopener noreferrer">Visite a prova: aorkia.com →</a></div>
          </div>
        </div>
      </section>
      <div className="section-divider-glow"></div>
       <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">Póvoas & Partners</h2><p className="case-subtitle">Estudo de Caso: De PDF Estático para Plataforma Omnicanal</p></div>
            <ExpandableImage src="/cases/Visao_Geral_Site_PovoasPartners_por_SynapseB2B.png" alt="Plataforma da Póvoas & Partners" />
            <div className="case-narrative">
                <h3>O Contexto: Expertise Sem Arquitetura de Distribuição</h3>
                <p>Elaine Póvoas: credibilidade consolidada, mas todo seu portfólio estava em um PDF estático. <strong>O problema neural:</strong></p>
                <ul className="problem-list"><li>PDF exige download (fricção)</li><li>Cliente não sabe qual serviço escolher</li><li>Parceiros estratégicos apresentados como logos estáticas</li><li>Zero arquitetura de conversão</li></ul>
                <h3>A Intervenção: De Documento para Ecossistema Omnicanal</h3>
                <p>Criamos uma arquitetura de distribuição inteligente onde cada competência e cada parceiro se tornaram uma porta de entrada estratégica.</p>
                <div className="case-phase"><h4>6 Competências, 6 Portas de Entrada</h4><p><strong>Impacto neural:</strong> Redução radical de fricção cognitiva. O sistema apresenta a opção exata em 30 segundos.</p></div>
                <div className="case-phase"><h4>12 Parceiros Estratégicos, 12 Canais de Valor</h4><p><strong>Impacto neural:</strong> Cada parceiro vira uma porta de entrada com transferência de autoridade. Cliente confia porque Elaine chancela.</p></div>
                <h3>O Resultado: De Documento para Omnicanalidade</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ PDF estático<br/>→ 12 parceiros invisíveis</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Plataforma omnicanal<br/>→ 18 páginas estratégicas</div></div>
                 <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
            </div>
         </div>
       </section>
       <div className="section-divider-glow"></div>
       <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 5</span><h2 className="case-title">Profissionais de Saúde</h2><p className="case-subtitle">Estudo de Caso: Expertise Clínica Sem Sistema de Receita</p></div>
            <div className="case-narrative">
                <h3>O Travamento Neural: Expertise Clínica ≠ Sistema de Receita</h3>
                <p>Profissionais de saúde dominam a técnica, mas formação técnica não inclui inteligência comercial. <strong>O problema estrutural:</strong></p>
                <ul className="problem-list"><li>Agenda lotada não significa caixa saudável</li><li>Salas ociosas 60% do tempo (ativo parado)</li><li>Conhecimento valioso preso no consultório (não escalável)</li></ul>
                <h3>A Intervenção: Recodificação de Expertise em Múltiplos Canais de Receita</h3>
                <p>Instalamos inteligência estratégica de receita em quem já domina a entrega clínica.</p>
                <div className="case-phase"><h4>FRENTE 1: Otimização da Clínica Atual</h4><p>Redesenho da "Agenda Estratégica" para priorizar atendimentos de maior impacto financeiro. <strong>Impacto:</strong> De agenda reativa para agenda estratégica (maior ROI/hora).</p></div>
                <div className="case-phase"><h4>FRENTE 2: Ativação de Receita Recorrente</h4><p>Modelo: Clínica Compartilhada. <strong>Resultado:</strong> Ativo parado vira fonte de caixa em 3 semanas.</p></div>
                <div className="case-phase"><h4>FRENTE 3: Modelos Disruptivos Multi-Canal</h4><p>Transformando saber clínico em receita escalável (Mentorias, Cursos, etc.). <strong>Impacto neural:</strong> Profissional descobre que pode faturar enquanto dorme.</p></div>
                <h3>O Resultado: De Agenda Lotada para Sistema de Receita</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Agenda cheia, caixa apertado<br/>→ Sala ociosa</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Agenda otimizada (maior ROI/hora)<br/>→ Receita recorrente de locação</div></div>
                <p className="case-metric-summary"><strong>Caso real:</strong> Clínica odontológica em MG ativou primeira receita recorrente em 3 semanas com modelo de locação de sala.</p>
            </div>
        </div>
       </section>
      <div className="section-divider-glow"></div>
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
            <div className="case-header"><h2 className="case-title">Synapse B2B Match Maker</h2><p className="case-subtitle">Quando Dados Viram Inteligência de Conexão</p></div>
            <ExpandableImage src="/cases/matchmaking-synapseb2b.png" alt="Interface do Synapse Match Maker" />
            <div className="case-narrative">
                <h3>O Problema: Riqueza Invisível em Comunidades</h3>
                <p>Informação em comunidades é assíncrona e invisível. <blockquote className="phrase">→ "Alguém conhece um designer?"<br/>→ (Tem 3 designers no grupo, mas ninguém sabe quem são)</blockquote><strong>O travamento neural:</strong> Decisão cognitivamente cara (buscar, filtrar, comparar) bloqueia ação.</p>
                <h3>A Solução: Sistema Neural Toma Decisão no Lugar do Usuário</h3>
                <p>É redução radical de carga cognitiva. <strong>Como funciona:</strong><br/>→ Usuário insere necessidade → Sistema processa base de dados → Retorna 3 matches perfeitos em 10 segundos.<br/><strong>Impacto neural:</strong> Sistema 1 recebe resultado pronto. Decisão instantânea.</p>
                <div className="case-phase"><h4>O Princípio: Dado → Informação → Conhecimento → Inteligência</h4><p>Synapse eleva da fase de "Informação" ("30 são designers") para "Inteligência" ("Estes 3 são os matches perfeitos para seu projeto").</p></div>
                <p><strong>Resultado:</strong> De caos relacional para confluência estratégica em segundos.</p>
                <div className="case-link"><a href="https://gmm.synapseb2b.com" target="_blank" rel="noopener noreferrer">Conheça a ferramenta →</a></div>
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
        /* INTRODUÇÃO E TEXTO REORGANIZADO */
        .intro-cases-block, .case-narrative, .final-cta-section { text-align: center; }
        .intro-cases-block { max-width: 900px; margin: 0 auto; }
        .dual-system-box { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 2rem; margin: 2rem auto; max-width: 700px; }
        .system-side h4 { font-family: 'Montserrat'; font-size: 1.2rem; color: var(--color-primary); margin-bottom: 0.5rem; }
        .system-side.system-2 h4 { color: var(--color-text); }
        .neural-flow, .neural-sequence, .consequences-block, .problem-list { margin: 1.5rem 0; }
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
        
        .case-narrative { max-width: 800px; margin: 0 auto; }
        .case-narrative h3 { font-family: 'Montserrat'; font-size: 1.8rem; color: var(--color-heading); margin: 3rem 0 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .case-narrative p { margin-bottom: 1.5rem; line-height: 1.8; }
        .case-narrative strong { color: var(--color-heading); }
        .case-phase { margin: 2.5rem 0; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; }
        .case-phase h4 { font-size: 1.2rem; color: var(--color-primary); margin-bottom: 1rem; }
        
        .transformation-metric { display: grid; grid-template-columns: 1fr auto 1fr; align-items: start; gap: 1.5rem; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; margin-top: 2rem; }
        .transformation-metric svg { color: var(--color-primary); margin-top: 1.5rem; }
        .case-metric-summary { font-weight: 600; font-style: italic; margin-top: 2rem; }
        .case-link { margin-top: 2rem; }
        .case-link a { color: var(--color-accent); font-weight: 600; }

        /* EFEITO DE IMAGEM EXPANSÍVEL */
        .image-expander { position: relative; max-height: var(--initial-height, 200px); overflow: hidden; border-radius: 16px; border: 1px solid var(--color-border); transition: max-height 0.7s ease-in-out; margin: 3rem auto; max-width: 1000px;}
        .image-expander.expanded { max-height: 1000px; }
        .image-container { line-height: 0; }
        .expand-button { position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); border: none; color: white; padding: 2rem 1rem 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 600; transition: background 0.3s; }
        .expand-button:hover { background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); }

        /* BLOCO FINAL */
        .cases-proof-grid, .thesis-block, .cta-neuro-block, .post-scriptum { margin: 4rem 0; }
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