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
          <div className="case-body-grid">
            <div className="case-main-narrative">
              <h3>O Travamento Neural</h3>
              <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação. O cérebro do decisor industrial não conseguia categorizar a oferta. "São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?". Sem categoria clara → Sistema 1 não reconhece padrão → Não gera sensação de "eu entendo o que vocês fazem" → Decisão não acontece. Adicional: Operação em modo sobrevivência. Crescimento dependendo de networking heroico ao invés de sistema replicável. Cada venda exigia esforço excepcional. Impossível escalar. Impossível prever receita.</p>
              <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
              <p>Não otimizamos a engenharia. Recodificamos como o mercado processa a engenharia.</p>
              <h3>O Resultado: Transformação Sistêmica</h3>
              <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ 3 empresas segregadas<br/>→ Zero presença digital<br/>→ 100% indicação<br/>→ Receita imprevisível</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Hub consolidado<br/>→ Motor de demanda ativo<br/>→ Primeiros clientes orgânicos<br/>→ Sistema replicável</div></div>
              <p className="case-metric-summary"><strong>Métrica que importa:</strong> De invisível para encontrável. De heroísmo para sistema.</p>
              <div className="case-link"><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Visite a prova: exclusivaengenharias.com →</a></div>
            </div>
            <div className="case-sidebar">
              <div className="sidebar-block"><h4>FASE 1: Recodificação de Identidade</h4><p><strong>Antes:</strong> "Somos três empresas de engenharia" → <strong>Depois:</strong> "Somos o hub de engenharias que resolve problemas industriais que outros evitam". Impacto neural: Cérebro categoriza "Hub" instantaneamente.</p></div>
              <div className="sidebar-block image-block"><Image src="/images/cases/exclusivaengenharias-home.png" alt="Plataforma Exclusiva Engenharias" width={500} height={281} layout="responsive" /></div>
              <div className="sidebar-block"><h4>FASE 2: Plataforma de Aceleração</h4><p>exclusivaengenharias.com não é um site. É um ativo de conversão neural: 70% engenharia de receita, 30% institucional.</p></div>
              <div className="sidebar-block image-block"><Image src="/images/cases/exclusivaengenharias-sobre-nos.png" alt="Detalhe da plataforma Exclusiva Engenharias" width={500} height={281} layout="responsive" /></div>
              <div className="sidebar-block"><h4>FASE 3: Ferramenta Estratégica</h4><p>Simulador de orçamento integrado que toma a decisão cognitivamente cara no lugar do cliente, retornando uma estimativa em 30 segundos.</p></div>
              <div className="sidebar-block"><h4>FASE 4: CRO as a Service</h4><p>Liderança C-level fracionada operando a Diretoria de Receita para transformar heroísmo individual em sistema replicável.</p></div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-divider-glow"></div>

      {/* BLOCO 4: CASE 2 - VERSÃO HOLÍSTICA */}
      <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 2</span><h2 className="case-title">Versão Holística</h2><p className="case-subtitle">Estudo de Caso: Tradução Neurocientífica de Inovação em ROI</p></div>
          <div className="case-body-grid">
            <div className="case-main-narrative">
                <h3>O Travamento Neural</h3>
                <p>Healthtech com produto validado, mas hospitais e investidores faziam a mesma pergunta: "O que, exatamente, vocês fazem por mim?". Diagnóstico: A narrativa "Cuidado Farmacêutico Integrativo" forçava o Sistema 2 do CFO, que não conseguia categorizar e adiava a decisão com um "vamos pensar".</p>
                <h3>A Intervenção: Aplicação das 5 Lentes do Cortex GTM™</h3>
                <p>Não mudamos o produto. Recodificamos como o cérebro do CFO processa o produto, traduzindo inovação em ROI e educando o mercado sobre a nova categoria de "CareOps Integrativo".</p>
                <h3>O Resultado: Transformação da Tese</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Pitch de 15 minutos<br/>→ Decisor confuso<br/>→ "Vamos pensar..." (= não)</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Pitch de 3 minutos<br/>→ Decisor entende valor<br/>→ "Quando começamos?" (= sim)</div></div>
                <p className="case-metric-summary"><strong>Em Advisory Board agora:</strong> Preparação para rodada de investimento com tese fundamentada e multi-segmento validado.</p>
                <div className="case-link"><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">Visite a prova: versaoholistica.com.br →</a></div>
            </div>
            <div className="case-sidebar">
                <div className="sidebar-block"><h4>LENTE 1 & 4 (Neurociência)</h4><p><strong>Recodificação:</strong> De "Cuidado Farmacêutico Integrativo" para "Plataforma que reduz custo de paciente crônico em 5.8x". Impacto: Sistema 1 reconhece o padrão "redução de custo" instantaneamente.</p></div>
                <div className="sidebar-block image-block"><Image src="/images/cases/versaoholistica-home.png" alt="Plataforma Versão Holística" width={500} height={281} layout="responsive" /></div>
                <div className="sidebar-block"><h4>LENTE 2 & 3 (Comprador + Receita)</h4><p>Identificamos o CFO como decisor real e o ROI como gatilho. A abordagem mudou de vender "metodologia" para vender "ROI 5.8x validado".</p></div>
                <div className="sidebar-block image-block"><Image src="/images/cases/versaoholistica-br-hospitais.png" alt="Página de Hospitais da Versão Holística" width={500} height={281} layout="responsive" /></div>
                <div className="sidebar-block"><h4>LENTE 5 (Andragogia)</h4><p>Criamos e nomeamos a categoria "CareOps Integrativo", posicionando a VH como a "1ª Plataforma de CareOps do Brasil". Quando você nomeia a categoria, você domina a categoria na mente do decisor.</p></div>
            </div>
          </div>
        </div>
      </section>

       <div className="section-divider-glow"></div>

      {/* BLOCO 5: CASE 3 - AORKIA */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">AORKIA</h2><p className="case-subtitle">Estudo de Caso: De Zero a Parceiro Global em 90 Dias</p></div>
           <div className="case-body-grid">
            <div className="case-main-narrative">
                <h3>O Contexto: Prova de Conceito Sob Pressão</h3>
                <p>AORKIA é a nossa resposta à pergunta: "Vocês usam o método em vocês mesmos?". Desafio: criar marca, narrativa, plataforma e gerar tração comercial em 90 dias num mercado técnico (Resiliência Cibernética), competindo com gigantes globais.</p>
                <h3>A Intervenção: Engenharia de Receita Acelerada</h3>
                <p>Aplicamos nosso próprio método em modo acelerado, focando em ancoragem de autoridade e tradução de complexidade para ativar o Sistema 1 do decisor de TI.</p>
                <h3>O Resultado: 90 Dias de Invisível para Operacional</h3>
                <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ Zero<br/>→ Ideia no papel<br/>→ Nenhum cliente</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois (90 dias):</strong><br/>→ Parceiro Global Keepit<br/>→ 1ª venda: +1.200 usuários<br/>→ Pipeline qualificado</div></div>
                <p className="case-metric-summary"><strong>Meta-prova:</strong> Aplicamos em nós mesmos o que vendemos. Funcionou. Agora replicamos para você.</p>
                <div className="case-link"><a href="https://aorkia.com" target="_blank" rel="noopener noreferrer">Visite a prova: aorkia.com →</a></div>
            </div>
            <div className="case-sidebar">
                <div className="sidebar-block"><h4>FASE 1: Ancoragem de Autoridade</h4><p>Posicionamento escolhido: "Parceiro oficial Keepit — líder global". Impacto neural: Cérebro do decisor faz transferência de autoridade. "Se Keepit confia, eu posso confiar".</p></div>
                <div className="sidebar-block image-block"><Image src="/images/cases/aorkia-home.png" alt="Plataforma AORKIA" width={500} height={281} layout="responsive" /></div>
                <div className="sidebar-block"><h4>FASE 2: Tradução de Complexidade</h4><p><strong>Recodificação:</strong> De "Backup imutável" para "Seu provedor SaaS não faz backup dos seus dados. A responsabilidade é sua". Impacto: Ativa amígdala (medo) e urgência.</p></div>
                <div className="sidebar-block image-block"><Image src="/images/cases/aorkia-backup-saas-estrategico.png" alt="Página de Backup SaaS da AORKIA" width={500} height={281} layout="responsive" /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 6: CASE 4 - PÓVOAS & PARTNERS */}
       <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
            <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">Póvoas & Partners</h2><p className="case-subtitle">Estudo de Caso: De PDF Estático para Plataforma Omnicanal</p></div>
            <div className="case-body-grid">
                <div className="case-main-narrative">
                    <h3>O Contexto: Expertise Sem Arquitetura de Distribuição</h3>
                    <p>Elaine Póvoas: credibilidade consolidada, mas todo seu portfólio estava em um PDF estático. O problema neural: fricção. O cliente não sabia qual dos 6 serviços escolher e os 12 parceiros estratégicos eram invisíveis.</p>
                    <h3>A Intervenção: De Documento para Ecossistema Omnicanal</h3>
                    <p>Não criamos "mais um site". Criamos uma arquitetura de distribuição inteligente onde cada competência e cada parceiro se tornaram uma porta de entrada estratégica, reduzindo a fricção cognitiva do decisor.</p>
                    <h3>O Resultado: De Documento para Omnicanalidade</h3>
                    <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>→ PDF estático<br/>→ 6 competências misturadas<br/>→ 12 parceiros invisíveis</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>→ Plataforma omnicanal<br/>→ 6 portas de entrada claras<br/>→ 12 parceiros com valor visível</div></div>
                     <div className="case-link"><a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer">Visite a prova: povoas.synapseb2b.com →</a></div>
                </div>
                <div className="case-sidebar">
                    <div className="sidebar-block"><h4>6 Competências, 6 Portas de Entrada</h4><p>A um clique, cliente escolhe exatamente o que precisa (Palestras, Treinamentos, Mentoria, etc.). O sistema apresenta a opção exata em 30 segundos.</p></div>
                    <div className="sidebar-block image-block"><Image src="/images/cases/Visao_Geral_Site_PovoasPartners_por_SynapseB2B.png" alt="Plataforma Póvoas & Partners" width={500} height={281} layout="responsive" /></div>
                    <div className="sidebar-block"><h4>12 Parceiros, 12 Canais de Valor</h4><p>Cada parceiro ganhou um card estratégico com descrição de valor. Cliente confia porque Elaine chancela (transferência de autoridade).</p></div>
                </div>
            </div>
         </div>
       </section>
      
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
        .case-header { text-align: center; margin-bottom: 4rem; }
        .case-number { display: inline-block; font-family: 'Montserrat'; font-size: 0.9rem; font-weight: 700; color: var(--color-primary); border: 1px solid var(--color-border); padding: 0.5rem 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
        .case-title { font-family: 'Montserrat'; font-size: 3rem; color: var(--color-heading); }
        .case-subtitle { font-size: 1.2rem; color: var(--color-text); max-width: 700px; margin: 0.5rem auto 0; }
        
        .case-body-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .case-main-narrative { text-align: left; }
        .case-main-narrative h3 { font-family: 'Montserrat'; font-size: 1.8rem; color: var(--color-heading); margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .case-main-narrative p { margin-bottom: 1.5rem; line-height: 1.8; }
        .case-main-narrative strong { color: var(--color-heading); }

        .case-sidebar {
          position: sticky;
          top: 120px; /* Alinha com a navbar sticky */
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .sidebar-block {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
        }
        .sidebar-block.image-block { padding: 0; overflow: hidden; }
        .sidebar-block h4 { font-size: 1rem; color: var(--color-primary); margin-bottom: 0.75rem; font-weight: 700; }
        .sidebar-block p { font-size: 0.9rem; line-height: 1.7; }

        .transformation-metric { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 1.5rem; text-align: center; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; margin-top: 2rem; }
        .transformation-metric svg { color: var(--color-primary); }
        .case-metric-summary { font-weight: 600; font-style: italic; text-align: center; margin-top: 2rem; }
        .case-link { margin-top: 2rem; text-align: center; }
        .case-link a { color: var(--color-accent); font-weight: 600; }
        
        @media (max-width: 992px) {
          .case-body-grid { grid-template-columns: 1fr; }
          .case-sidebar { position: relative; top: 0; margin-top: 3rem; }
        }
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