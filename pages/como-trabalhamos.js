import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para a nova estrutura
import { 
  ArrowRight, BrainCircuit, HardHat, Map, Briefcase, Rocket, MonitorSmartphone, Wrench 
} from 'lucide-react';

// --- Componente de Texto Rotativo para a Hero (ATUALIZADO) ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'conecta produto e mercado.',
    'traduz complexidade em valor.',
    'transforma potencial em receita.',
    'gera clareza que converte.'
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, variations.length]);

  return (
    <>
      <p className="hero-pre-headline">Desenvolvemos</p>
      <h1 className="hero-headline hero-headline-two-lines">
        <span className="hero-headline-fixed">Engenharia de Receita que</span>
        <span 
          className="rotating-text"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {variations[currentIndex]}
        </span>
      </h1>
    </>
  );
};

export default function ComoTrabalhamosPage() {
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
        <title>Nosso Método | Synapse B2B</title>
        <meta name="description" content="Entenda como nosso sistema de duas camadas conecta a arquitetura da Engenharia de Receita à construção de ativos que geram resultado." />
      </Head>

      {/* Bloco 1: Hero Section */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <RotatingText />
          <p className="hero-subheadline">
            Nós instalamos o sistema que transforma potencial técnico em receita previsível.
          </p>
           <div className="hero-ctas">
            <Link href="#camada-inteligencia" className="btn btn-primary">
              <span>Conheça as Camadas</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Sistema e as Duas Camadas */}
      <section id="sistema" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Um Sistema. Duas Camadas.</h2>
            <p className="lead-text">A Synapse B2B opera como um sistema de duas camadas que conecta estratégia e execução.</p>
        </div>
      </section>

      {/* Bloco 3: CAMADA 1 - Inteligência & Estratégia */}
      <section id="camada-inteligencia" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="layer-intro text-center">
            <div className="layer-badge"><BrainCircuit size={32} /><span>CAMADA 1</span></div>
            <h2 className="section-title">Inteligência & Estratégia</h2>
            <p className="lead-text">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
            <p className="layer-principle">Se você não sabe <strong>o que vender</strong>, <strong>para quem vender</strong> ou <strong>como vender</strong>, começamos aqui.</p>
          </div>

          {/* Solução 1: Go-To-Market Completo */}
          <div className="solution-block">
            <div className="solution-header"><Map size={28} /><h3>Go-To-Market Completo</h3><p className="solution-tagline">De "o que somos" para "o problema que só nós resolvemos"</p></div>
            <div className="solution-body">
              <div className="challenge-side">
                <h4>Você reconhece este contexto?</h4>
                <ul><li>Seu produto é tecnicamente superior, mas o mercado não entende o valor na velocidade que você precisa</li><li>Reuniões comerciais longas terminam com "preciso pensar" porque cliente não consegue tangibilizar resultado</li><li>Concorrentes inferiores vendem mais rápido com narrativas mais simples</li><li>Sua equipe vende explicando tecnologia, não resolvendo problemas de negócio</li><li>Crescimento é errático mesmo com produto validado</li></ul>
                <div className="diagnosis-box"><strong>Diagnóstico:</strong> Complexidade técnica não foi traduzida para linguagem de decisor. Sua narrativa ativa Sistema 2 (análise lenta) ao invés de Sistema 1 (decisão rápida). Decisão B2B é racionalização pós-emocional — se não passar no filtro emocional primeiro, análise racional nunca acontece.</div>
              </div>
              <div className="solution-side">
                <h4>O que construímos</h4><p>Arquitetura estratégica completa do zero:</p>
                <ul><li><strong>Posicionamento:</strong> De "o que somos" para "problema que só nós resolvemos"</li><li><strong>ICP Refinado:</strong> Quem compra, por que compra, quando compra</li><li><strong>Proposta de Valor Central:</strong> Mensagem que decisor entende em 60 segundos</li><li><strong>Canais de Aquisição:</strong> Onde seu cliente ideal está e como alcançá-lo</li><li><strong>Modelo de Vendas:</strong> Consultivo, transacional ou híbrido</li><li><strong>Pricing Estratégico:</strong> Ancoragem de valor e arquitetura de escolha</li><li><strong>Estratégia de Retenção:</strong> Como cliente vira defensor</li></ul>
                <div className="result-box"><strong>Entrega:</strong> Blueprint que guia cada decisão comercial dos próximos 18 meses.</div>
                <div className="timeline-box"><strong>Timeline típica:</strong> Clareza de narrativa (15 dias) → Blueprint completo (30 dias) → Primeiras validações de mercado (45 dias) → Sistema pronto para escalar (60 dias)</div>
                <div className="case-proof"><strong>Case que prova:</strong> Versão Holística transformou "Cuidado Farmacêutico Integrativo" (decisor: "o quê??") em "Plataforma que reduz custo de paciente crônico em 5.8x" (decisor: "quando começamos?"). <Link href="/cases">Ver case completo →</Link></div>
              </div>
            </div>
          </div>
          <div className="solution-divider"></div>

          {/* Solução 2: CRO as a Service */}
          <div className="solution-block">
            <div className="solution-header"><Briefcase size={28} /><h3>Diretoria de Receita (CRO as a Service)</h3><p className="solution-tagline">Liderança C-level fracionada que instala o sistema e entrega o playbook</p></div>
            <div className="solution-body">
              <div className="challenge-side">
                <h4>Você reconhece este contexto?</h4>
                <ul><li>Aquele vendedor excepcional fecha tudo, mas ninguém consegue replicar o método dele</li><li>Crescimento depende de quem tem melhor rede de contatos, não de processo</li><li>Cada vendedor tem suas próprias planilhas, critérios e abordagem</li><li>CEO passa mais tempo vendendo do que liderando empresa</li><li>Quando vendedor sai, relacionamentos vão junto</li><li>Receita travou e você não sabe qual alavanca puxar</li></ul>
                <div className="diagnosis-box"><strong>Diagnóstico:</strong> Ausência de sistema replicável. Vendas dependem de talento individual, não de processo excelente. Sem playbook validado, cada pessoa inventa seu método. Resultado: impossível escalar sem contratar "vendedores excepcionais" (raros e caros). Heroísmo comercial não escala. Sistema escala.</div>
              </div>
              <div className="solution-side">
                <h4>O que construímos</h4><p>Liderança C-level fracionada que opera como sua Diretoria de Receita:</p>
                <ul><li><strong>Inteligência de Mercado:</strong> Win/Loss Analysis, Voice of Customer, mapeamento de vetores de crescimento</li><li><strong>Arquitetura de Processo:</strong> Funil completo desenhado com critérios de qualificação e cadências validadas</li><li><strong>Execução Pioneira:</strong> Lideramos prospecção ativa, participamos de reuniões, modelamos abordagem</li><li><strong>Governança de KPIs:</strong> Instalamos métricas de saúde de receita e dashboards</li><li><strong>Playbook Validado:</strong> Documentamos processos, scripts, perfil de contratação</li></ul>
                <div className="methodology-box"><strong>Metodologia:</strong> Dual-Track Revenue — Discovery (validação) + Delivery (execução) em paralelo. Aprendizado alimenta execução.</div>
                <div className="result-box"><strong>Modelo:</strong> Planejamos juntos o período ideal de acompanhamento (mínimo 3 meses). Investimento mínimo fixo + performance sobre receita nova gerada.</div>
                <div className="timeline-box"><strong>Timeline típica:</strong> Inteligência de mercado (15 dias) → Primeiras reuniões qualificadas (30 dias) → Pipeline estruturado (60 dias) → Playbook validado (60-120 dias)</div>
                <div className="case-proof"><strong>Case que prova:</strong> Exclusiva Engenharias foi de 100% dependência de indicação para motor de geração de demanda estruturado. Sistema validado, documentado e pronto para contratar time e escalar. <Link href="/cases">Ver case completo →</Link></div>
              </div>
            </div>
          </div>
          <div className="solution-divider"></div>

          {/* Solução 3: Sprint de Validação Comercial */}
          <div className="solution-block">
            <div className="solution-header"><Rocket size={28} /><h3>Sprint de Validação Comercial</h3><p className="solution-tagline">Valide demanda real antes de comprometer recursos grandes</p></div>
            <div className="solution-body">
              <div className="challenge-side">
                <h4>Você reconhece este contexto?</h4>
                <ul><li>Receita parou de crescer há 2-3 trimestres</li><li>Você tenta várias coisas ao mesmo tempo mas nada move a agulha</li><li>Não sabe se o problema é ICP, mensagem, canal, pricing ou processo</li><li>Decisões baseadas em intuição, não em dados de campo</li><li>Medo de escalar errado e queimar caixa</li><li>Produto novo entrando no mercado ou pivô de modelo de negócio</li></ul>
                <div className="diagnosis-box"><strong>Diagnóstico:</strong> Ausência de inteligência estratégica. Você não sabe qual hipótese testar primeiro. Tentar tudo ao mesmo tempo dispersa recursos e não valida nada. Tentar uma coisa de cada vez sem método leva meses até descobrir o que funciona. Você precisa validar demanda real antes de comprometer recursos grandes.</div>
              </div>
              <div className="solution-side">
                <h4>O que construímos</h4><p>Testamos oferta, ICP e canais em 15 ou 30 dias:</p>
                <ul><li><strong>Hipóteses Priorizadas:</strong> Identificamos as 3 variáveis mais críticas para testar</li><li><strong>Validação Rápida:</strong> Executamos testes de campo com ICPs reais</li><li><strong>Dados, Não Opiniões:</strong> Coletamos feedback qualitativo e quantitativo</li><li><strong>Recomendação Clara:</strong> Escalar, pivotar ou refinar</li></ul>
                <div className="result-box"><strong>Você decide escalar baseado em dados de campo, não intuição ou esperança.</strong></div>
                <div className="timeline-box"><strong>Sprint 15 dias:</strong> Clareza sobre alavanca prioritária. Decisão fundamentada sobre próximo passo.<br/><strong>Sprint 30 dias:</strong> Validação robusta de demanda. Primeiras conversões ou refutação clara de hipótese.</div>
                <div className="outcome-box">Em ambos os casos: Você não queima caixa escalando problema. Valida antes de comprometer recursos grandes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: CAMADA 2 - Construção de Ativos Digitais */}
      <section id="camada-ativos" className="section-solid">
        <div className="container reveal-up">
          <div className="layer-intro text-center">
            <div className="layer-badge"><HardHat size={32} /><span>CAMADA 2</span></div>
            <h2 className="section-title">Construção de Ativos Digitais</h2>
            <p className="lead-text">Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
            <p className="layer-principle">Se você tem clareza estratégica mas <strong>baixa conversão digital</strong> ou <strong>vendas que dependem de apresentação ao vivo</strong>, começamos aqui.</p>
          </div>

          {/* Solução 4: Plataforma de Aceleração de Receita */}
          <div className="solution-block">
            <div className="solution-header"><MonitorSmartphone size={28} /><h3>Plataforma de Aceleração de Receita</h3><p className="solution-tagline">30% Institucional + 70% Engenharia de Receita</p></div>
            <div className="solution-body">
              <div className="challenge-side">
                <h4>Você reconhece este contexto?</h4>
                <ul><li>Site gera tráfego, mas conversão é baixa</li><li>Leads entram sem contexto, time perde horas qualificando</li><li>Conteúdo genérico atrai perfil errado de visitante</li><li>Formulários com 50% de abandono</li><li>Site institucional bonito, mas não educa nem qualifica</li></ul>
                <div className="diagnosis-box"><strong>Diagnóstico:</strong> Site não foi projetado como motor de receita — foi tratado como "presença digital" (brochura online). Ausência de arquitetura de conversão: páginas não educam, não reduzem objeção, não qualificam visitante antes do contato. Resultado: lead entra cru, time gasta tempo descobrindo se é fit ou não.</div>
              </div>
              <div className="solution-side">
                <h4>O que construímos</h4><p>Não construímos sites institucionais. Construímos plataformas digitais estratégicas:</p>
                <ul><li><strong>Arquitetura de Conversão:</strong> Cada página projetada para educar, qualificar e reduzir objeção antes do contato</li><li><strong>Copywriting Neurocientífico:</strong> Mensagens que ativam Sistema 1 (decisão rápida) antes de Sistema 2 (análise lenta)</li><li><strong>Jornadas por Perfil:</strong> Visitante de ICP A vê conteúdo diferente de ICP B</li><li><strong>Integração com CRM:</strong> Lead entra com contexto, não cru</li></ul>
                <div className="result-box"><strong>Seu ativo digital educa, qualifica e converte 24/7.</strong></div>
                <div className="examples-box"><strong>Exemplos tangíveis:</strong><br/><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">exclusivaengenharias.com</a> (Plataforma + Simulador de Orçamento integrado)<br/><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">versaoholistica.com.br</a> (Plataforma que educa sobre CareOps Integrativo)</div>
                <div className="timeline-box"><strong>Timeline típica:</strong> Arquitetura e copywriting (15 dias) → Desenvolvimento e testes (30 dias) → Plataforma em produção (15-45 dias) → Primeiras conversões orgânicas (+30 dias)</div>
              </div>
            </div>
          </div>
          <div className="solution-divider"></div>

          {/* Solução 5: Ferramentas Estratégicas de Conversão */}
          <div className="solution-block">
            <div className="solution-header"><Wrench size={28} /><h3>Ferramentas Estratégicas de Conversão</h3><p className="solution-tagline">Ativos que provam autoridade e aceleram decisão</p></div>
            <div className="solution-body">
              <div className="challenge-side">
                <h4>Você reconhece este contexto?</h4>
                <ul><li>Ciclo de vendas longo porque cliente não consegue tangibilizar resultado</li><li>Você perde oportunidades para quem tem demo ou prova de conceito</li><li>Cada venda exige apresentação personalizada (não escala)</li><li>Cliente quer "ver funcionando" antes de comprar, mas você não tem ferramenta self-service</li><li>Competidores com calculadoras/simuladores convertem mais rápido</li></ul>
                <div className="diagnosis-box"><strong>Diagnóstico:</strong> Seu produto/serviço é complexo ou intangível. Cliente não consegue visualizar valor sem experimentar. Apresentação ao vivo não escala. Você precisa de ativo proprietário que prova autoridade e acelera decisão SEM depender de reunião. Ferramenta estratégica bem projetada reduz fricção cognitiva e torna vitória possível antes do contrato.</div>
              </div>
              <div className="solution-side">
                <h4>O que construímos</h4><p>Ativos proprietários que se tornam o centro da sua argumentação de valor:</p>
                <ul><li><strong>Calculadoras de ROI Personalizadas:</strong> Cliente insere dados dele, vê economia projetada em segundos</li><li><strong>Simuladores de Cenário:</strong> Testa diferentes configurações, compara resultados</li><li><strong>Matchmakers Inteligentes:</strong> Conecta necessidade a solução via IA (ex: Synapse Match Maker)</li><li><strong>Diagnósticos de Maturidade:</strong> Cliente descobre gap sozinho, você vira solução óbvia</li><li><strong>Apps Personalizados Focados em Business:</strong> Ferramentas complexas que educam e convertem</li></ul>
                <div className="principle-box"><strong>Neurociência aplicada:</strong> Ferramenta que toma decisões cognitivamente caras no lugar do usuário.</div>
                <div className="examples-box"><strong>Exemplos tangíveis:</strong><br/>• Synapse B2B Match Maker (matching em 10 segundos)<br/>• Simulador de Orçamento (Exclusiva Engenharias)<br/>• Cortex GTM™ (diagnóstico estratégico automatizado)<br/>• MathPop (gamificação educacional)</div>
                <div className="timeline-box"><strong>Timeline típica:</strong> Briefing e prototipagem (7 dias) → Desenvolvimento e testes (30 dias) → Ferramenta em produção (30-45 dias) → Integração com site/CRM (+15 dias)</div>
                <div className="case-proof"><strong>Case que prova:</strong> Synapse Match Maker transformou caos relacional em inteligência de conexão. De análise manual exaustiva (Sistema 2) para sugestão imediata (Sistema 1). Decisão em segundos. <Link href="/cases">Ver ferramenta →</Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Modelo de Trabalho */}
       <section id="modelo-trabalho" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>Iniciamos com uma Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento vem de <strong>Receita Nova</strong> gerada pelo projeto — dinheiro que você não teria sem nossa intervenção. Seu resultado é nosso resultado.</p>
            <div className="section-cta">
              <Link href="/contato" className="btn btn-secondary"><span>Entender o modelo</span><ArrowRight size={20} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <p className="lead-text" style={{marginBottom: '2rem'}}>Vamos traduzir seu desafio em um plano de ação.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* CSS para a NOVA ESTRUTURA */}
      <style jsx>{`
        .layer-intro { margin-bottom: 5rem; }
        .layer-badge { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 8px; font-weight: 600; color: var(--color-primary); margin-bottom: 2rem; }
        .layer-badge svg { margin-bottom: 2px; }
        .layer-principle { font-size: 1.2rem; font-weight: 500; color: var(--color-heading); max-width: 800px; margin: -1.5rem auto 0; }
        
        .solution-block { margin-bottom: 4rem; }
        .solution-header { text-align: center; margin-bottom: 3rem; }
        .solution-header svg { color: var(--color-primary); margin-bottom: 1rem; }
        .solution-header h3 { font-family: 'Montserrat', sans-serif; font-size: 2.2rem; color: var(--color-heading); margin-bottom: 0.5rem; }
        .solution-tagline { font-size: 1.1rem; color: var(--color-text); }
        
        .solution-body { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .challenge-side, .solution-side { text-align: left; }
        .challenge-side h4, .solution-side h4 { font-family: 'Montserrat'; font-size: 1.3rem; color: var(--color-heading); margin-bottom: 1.5rem; }
        .challenge-side ul, .solution-side ul { list-style-type: '✓'; list-style-position: inside; padding-left: 5px; }
        .challenge-side li, .solution-side li { margin-bottom: 1rem; padding-left: 0.75rem; }
        .solution-side li strong { color: var(--color-heading); }

        .diagnosis-box, .result-box, .timeline-box, .case-proof, .methodology-box, .outcome-box, .examples-box, .principle-box {
          margin-top: 2rem; padding: 1.5rem; border-radius: 8px; font-size: 0.95rem; line-height: 1.7;
        }
        .diagnosis-box { background-color: rgba(10, 10, 10, 0.6); border: 1px solid var(--color-border); }
        .result-box, .methodology-box, .outcome-box, .principle-box { background-color: rgba(0, 150, 132, 0.1); border: 1px solid var(--color-primary); color: var(--color-heading); }
        .timeline-box, .case-proof, .examples-box { background-color: transparent; border: 1px solid var(--color-border); }
        .case-proof a, .examples-box a { color: var(--color-accent); font-weight: 600; text-decoration: none; }
        .case-proof a:hover, .examples-box a:hover { text-decoration: underline; }
        
        .solution-divider { height: 1px; background-color: var(--color-border); margin: 6rem 0; }

        @media (max-width: 992px) {
          .solution-body { grid-template-columns: 1fr; }
          .layer-intro, .solution-block { margin-bottom: 4rem; }
        }
      `}</style>
    </>
  );
}