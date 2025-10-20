import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para esta página
import { 
  ArrowRight, CheckCircle2, Siren, BarChart, Target, TrendingUp, ThumbsUp, Award,
  BrainCircuit, HardHat 
} from 'lucide-react';

// --- Componente de Texto Rotativo para a Hero (VERSÃO FINAL REFINADA) ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Lista de variações atualizada
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
    // Estrutura atualizada com a nova "Sob Headline"
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
  const [activeChallenge, setActiveChallenge] = useState('desafio1');

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

      {/* Bloco 1: Hero Section - ATUALIZADA */}
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
            <Link href="#desafios" className="btn btn-primary">
              <span>Reconheça seu Desafio</span>
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
            <p className="lead-text" style={{maxWidth: '900px'}}>
              A primeira camada é a <strong>ARQUITETURA</strong>. Aqui aplicamos o <strong>Cortex GTM™</strong>, nosso sistema proprietário de diagnóstico, para decodificar sua genialidade técnica e traduzi-la em uma Engenharia de Receita. A segunda camada é a <strong>EXECUÇÃO TANGÍVEL</strong>, onde transformamos a arquitetura em ativos que geram resultado.
            </p>
            <div className="card-grid-two" style={{marginTop: '3rem'}}>
              <div className="info-card">
                  <span className="info-card-subtitle" style={{fontWeight: 700, color: 'var(--color-primary)'}}>CAMADA 1</span>
                  <h3 className="info-card-title" style={{fontSize: '1.8rem'}}>Inteligência & Estratégia</h3>
                  <p>Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
              </div>
              <div className="info-card">
                  <span className="info-card-subtitle" style={{fontWeight: 700, color: 'var(--color-primary)'}}>CAMADA 2</span>
                  <h3 className="info-card-title" style={{fontSize: '1.8rem'}}>Construção de Ativos Digitais</h3>
                  <p>Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
              </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Desafios e Soluções (COPY ATUALIZADA) */}
      <section id="desafios" className="section-with-gradient-glow">
        <div className="container reveal-up text-center">
          <h2 className="section-title">Encontre seu Desafio. Conheça a Solução.</h2>
          
          <div className="challenge-tabs-nav">
            <button className={`tab-button ${activeChallenge === 'desafio1' ? 'active' : ''}`} onClick={() => setActiveChallenge('desafio1')}><Siren /><span>Narrativa</span></button>
            <button className={`tab-button ${activeChallenge === 'desafio2' ? 'active' : ''}`} onClick={() => setActiveChallenge('desafio2')}><TrendingUp /><span>Sistema</span></button>
            <button className={`tab-button ${activeChallenge === 'desafio3' ? 'active' : ''}`} onClick={() => setActiveChallenge('desafio3')}><BarChart /><span>Conversão</span></button>
            <button className={`tab-button ${activeChallenge === 'desafio4' ? 'active' : ''}`} onClick={() => setActiveChallenge('desafio4')}><Target /><span>Estagnação</span></button>
            <button className={`tab-button ${activeChallenge === 'desafio5' ? 'active' : ''}`} onClick={() => setActiveChallenge('desafio5')}><ThumbsUp /><span>Complexidade</span></button>
          </div>

          <div className="challenge-content-wrapper">
            {/* Desafio 1 Content */}
            <div className={`challenge-pane ${activeChallenge === 'desafio1' ? 'active' : ''}`}>
              <h3>"Seu produto é tecnicamente superior, mas o mercado não percebe o valor"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Complexidade técnica não foi traduzida para linguagem de decisor. Você explica features, mas o cliente pergunta "como isso resolve meu problema?". Sua narrativa ativa o Sistema 2 (racional/lento) ao invés do Sistema 1 (emocional/decisivo). Decisão B2B é racionalização pós-emocional — se não passar no filtro emocional primeiro, análise racional nunca acontece.</p></div>
                  <div className="solution-column"><h4>Solução: Go-To-Market Completo</h4><p>Arquitetura estratégica do zero: posicionamento que traduz "o que somos" para "problema que só nós resolvemos", ICP refinado (quem compra, por que compra, quando compra), proposta de valor que decisor entende em 60 segundos, canais de aquisição, modelo de vendas, pricing estratégico e estratégia de retenção. Blueprint que guia cada decisão comercial dos próximos 18 meses.</p><p className="solution-when"><strong>Quando contratar:</strong> Crescimento errático com produto validado, narrativa não clara internamente, time vende explicando features (não problemas), CAC alto + ciclo longo + conversão baixa.</p></div>
              </div>
            </div>
            {/* Desafio 2 Content */}
            <div className={`challenge-pane ${activeChallenge === 'desafio2' ? 'active' : ''}`}>
              <h3>"Seu time comercial depende de networking e esforço heroico para fechar contratos"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Ausência de sistema replicável. Aquele vendedor excepcional fecha tudo, mas ninguém consegue replicar o método. Crescimento depende de quem tem melhor rede de contatos (não de processo). Sem playbook validado, cada pessoa inventa seu método. Resultado: impossível escalar sem contratar "vendedores excepcionais" (raros e caros). Heroísmo comercial não escala. Sistema escala.</p></div>
                  <div className="solution-column"><h4>Solução: Diretoria de Receita (CRO as a Service)</h4><p>Liderança C-level fracionada. Inteligência de mercado (Win/Loss Analysis, Voice of Customer), arquitetura de processo (funil completo com critérios de qualificação), execução pioneira (lideramos prospecção, participamos de reuniões, modelamos abordagem), governança de KPIs e playbook validado documentado. Metodologia Dual-Track Revenue: Discovery (validação) + Delivery (execução) em paralelo. Planejamos juntos o período ideal de acompanhamento (mínimo 3 meses). Modelo: investimento mínimo fixo + performance sobre receita nova gerada.</p><p className="solution-when"><strong>Quando contratar:</strong> CEO sobrecarregado fazendo comercial, time opera sem liderança estratégica, precisa validar processo antes de contratar gerente, receita travou e você não sabe qual alavanca puxar.</p></div>
              </div>
            </div>
            {/* Desafio 3 Content */}
             <div className={`challenge-pane ${activeChallenge === 'desafio3' ? 'active' : ''}`}>
              <h3>"Você investe em marketing, mas gera leads que não convertem ou consomem tempo precioso da equipe"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Site não foi projetado como motor de receita — foi tratado como "presença digital" (brochura online). Ausência de arquitetura de conversão: páginas não educam, não reduzem objeção, não qualificam visitante antes do contato. Site gera tráfego mas conversão é baixa. Leads entram sem contexto, time perde horas qualificando. Resultado: lead entra cru, time gasta tempo descobrindo se é fit ou não.</p></div>
                  <div className="solution-column"><h4>Solução: Plataforma de Aceleração de Receita</h4><p>Não construímos sites institucionais. Construímos plataformas digitais estratégicas: 30% Institucional + 70% Engenharia de Receita. Arquitetura de conversão (cada página projetada para educar, qualificar e reduzir objeção), copywriting neurocientífico (mensagens que ativam Sistema 1), jornadas por perfil (visitante de ICP A vê conteúdo diferente de ICP B), integração com CRM (lead entra com contexto, não cru). Seu ativo digital educa, qualifica e converte 24/7.</p><p className="solution-examples"><strong>Exemplos tangíveis:</strong> exclusivaengenharias.com, versaoholistica.com.br</p></div>
              </div>
            </div>
             {/* Desafio 4 Content */}
             <div className={`challenge-pane ${activeChallenge === 'desafio4' ? 'active' : ''}`}>
              <h3>"Seu crescimento estagnou e você não sabe qual alavanca puxar para sair do platô"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Ausência de inteligência estratégica. Receita parou de crescer há 2-3 trimestres. Você tenta várias coisas ao mesmo tempo mas nada move a agulha. Não sabe se o problema é ICP, mensagem, canal, pricing ou processo. Decisões baseadas em intuição, não em dados de campo. Tentar tudo ao mesmo tempo dispersa recursos e não valida nada. Tentar uma coisa de cada vez sem método leva meses até descobrir o que funciona. Você precisa validar demanda real antes de comprometer recursos grandes.</p></div>
                  <div className="solution-column"><h4>Solução: Sprint de Validação Comercial</h4><p>Testamos oferta, ICP e canais em 15 ou 30 dias. Hipóteses priorizadas (identificamos as 3 variáveis mais críticas para testar), validação rápida (executamos testes de campo com ICPs reais), dados (não opiniões) e recomendação clara: escalar, pivotar ou refinar. Você decide escalar baseado em dados de campo, não intuição ou esperança.</p><p className="solution-when"><strong>Quando contratar:</strong> Produto novo entrando no mercado, pivô de modelo de negócio, expansão para novo segmento/geografia, dúvida se há demanda pagante real.</p></div>
              </div>
            </div>
             {/* Desafio 5 Content */}
            <div className={`challenge-pane ${activeChallenge === 'desafio5' ? 'active' : ''}`}>
              <h3>"Sua venda depende de apresentação ao vivo e cliente precisa 'sentir' o valor antes de comprar"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Seu produto/serviço é complexo ou intangível. Cliente não consegue visualizar valor sem experimentar. Ciclo de vendas longo porque cliente não consegue tangibilizar resultado. Você perde oportunidades para quem tem demo ou prova de conceito. Cada venda exige apresentação personalizada (não escala). Apresentação ao vivo não escala — você precisa de ativo proprietário que prova autoridade e acelera decisão SEM depender de reunião. Ferramenta estratégica bem projetada reduz fricção cognitiva e torna vitória possível antes do contrato.</p></div>
                  <div className="solution-column"><h4>Solução: Ferramentas Estratégicas de Conversão</h4><p>Construímos ativos proprietários que se tornam o centro da sua argumentação de valor: calculadoras de ROI personalizadas (cliente insere dados dele, vê economia projetada em segundos), simuladores de cenário, matchmakers inteligentes (conecta necessidade a solução via IA), diagnósticos de maturidade (cliente descobre gap sozinho, você vira solução óbvia), apps personalizados focados em business. Neurociência aplicada: ferramenta que toma decisões cognitivamente caras no lugar do usuário.</p><p className="solution-examples"><strong>Exemplos tangíveis:</strong> Synapse B2B Match Maker, Simulador de Orçamento (Exclusiva), Cortex GTM™, MathPop</p><p className="solution-when"><strong>Quando contratar:</strong> Venda depende de apresentação ao vivo, cliente precisa "sentir" valor antes de comprar, ciclo de vendas longo e complexo, quer escalar argumento de vendas sem escalar time.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Matriz de Decisão (COPY ATUALIZADA) */}
      <section id="matriz-decisao" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Qual solução para qual momento?</h2>
            <p className="lead-text">Seu desafio se encaixa em uma de nossas duas frentes de trabalho.</p>
            <div className="card-grid-two">
              {/* Coluna de Estratégia */}
              <div className="solution-layer-card">
                  <div className="layer-header"><BrainCircuit /><h3>Inteligência & Estratégia</h3></div>
                  <p className="layer-description">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução. Para desafios de clareza de narrativa, ausência de sistema comercial, validação de mercado e decisões estratégicas de alto risco.</p>
                  <ul>
                      <li><span>Seu momento:</span> Produto validado mas crescimento errático, narrativa confusa, time vende features<br/><span>→ Solução:</span> <strong>Go-To-Market Completo</strong></li>
                      <li><span>Seu momento:</span> CEO sobrecarregado fazendo comercial, ausência de liderança estratégica<br/><span>→ Solução:</span> <strong>CRO as a Service</strong></li>
                      <li><span>Seu momento:</span> Produto novo no mercado, pivô de modelo, expansão para novo segmento<br/><span>→ Solução:</span> <strong>Sprint de Validação Comercial</strong></li>
                      <li><span>Seu momento:</span> Decisão de alto risco irreversível, falta referência interna para validar hipótese<br/><span>→ Solução:</span> <strong>Advisory Board</strong></li>
                  </ul>
              </div>
              {/* Coluna de Ativos */}
              <div className="solution-layer-card">
                  <div className="layer-header"><HardHat /><h3>Construção de Ativos Digitais</h3></div>
                  <p className="layer-description">Onde transformamos estratégia em ferramentas que geram receita 24/7. Para desafios de baixa conversão digital, leads que entram sem contexto, vendas que dependem de apresentação ao vivo e necessidade de escalar argumentação sem escalar time.</p>
                  <ul>
                      <li><span>Seu momento:</span> Site gera tráfego mas não converte, leads entram sem contexto, time perde horas qualificando<br/><span>→ Solução:</span> <strong>Plataforma de Aceleração de Receita</strong><br/><em>30% Institucional + 70% Engenharia de Receita. Arquitetura de conversão em cada página.</em></li>
                      <li><span>Seu momento:</span> Venda depende de apresentação ao vivo, cliente precisa "sentir" valor, ciclo longo e complexo<br/><span>→ Solução:</span> <strong>Ferramentas Estratégicas de Conversão</strong><br/><em>Calculadoras de ROI, simuladores, matchmakers, diagnósticos — ativos que provam autoridade e aceleram decisão.</em></li>
                  </ul>
              </div>
            </div>
        </div>
      </section>
      
      {/* Bloco 5: Modelo de Trabalho */}
       <section id="modelo-trabalho" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>
              Iniciamos com uma Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento vem de <strong>Receita Nova</strong> gerada pelo projeto — dinheiro que você não teria sem nossa intervenção. Seu resultado é nosso resultado.
            </p>
            <div className="section-cta">
              <Link href="/contato" className="btn btn-secondary">
                <span>Entender o modelo</span><ArrowRight size={20} />
              </Link>
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
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CSS específico para as novas seções */}
      <style jsx>{`
        /* SEÇÃO DE DESAFIOS (SEM ACCORDION) */
        .challenge-tabs-nav { display: flex; justify-content: center; gap: 1rem; margin: 3rem auto; flex-wrap: wrap; }
        .tab-button { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.8rem 1.5rem; background: transparent; border: 1px solid var(--color-border); color: var(--color-text); font-size: 1rem; font-weight: 600; cursor: pointer; border-radius: 8px; transition: all 0.3s ease; }
        .tab-button:hover { background-color: rgba(0, 150, 132, 0.1); color: var(--color-heading); }
        .tab-button.active { background-color: var(--color-primary); color: var(--color-heading); border-color: var(--color-primary); }
        .challenge-content-wrapper { position: relative; min-height: 420px; /* Evita pulos de layout */ }
        .challenge-pane { opacity: 0; position: absolute; top: 0; left: 0; right: 0; pointer-events: none; transition: opacity 0.4s ease-in-out; }
        .challenge-pane.active { opacity: 1; position: relative; pointer-events: auto; }
        .challenge-pane h3 { font-family: 'Montserrat', sans-serif; font-size: 1.8rem; color: var(--color-heading); margin-bottom: 2.5rem; }
        .solution-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1000px; margin: 0 auto; }
        .diagnosis-column, .solution-column { text-align: left; }
        .diagnosis-column h4, .solution-column h4 { font-family: 'Montserrat'; color: var(--color-primary); font-size: 1.2rem; margin-bottom: 1rem; }
        .solution-when, .solution-examples { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); font-size: 0.95rem; text-align: left; }
        .solution-when strong, .solution-examples strong { color: var(--color-heading); }

        /* MATRIZ DE DECISÃO REIMAGINADA */
        .solution-layer-card { background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 16px; padding: 3rem; }
        .layer-header { display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-border); }
        .layer-header svg { width: 40px; height: 40px; color: var(--color-primary); }
        .layer-header h3 { font-family: 'Montserrat'; font-size: 1.5rem; color: var(--color-heading); margin: 0; }
        .layer-description { margin-bottom: 2rem; min-height: 60px; /* Alinha verticalmente */ }
        .solution-layer-card ul { list-style: none; text-align: left; }
        .solution-layer-card li { padding: 1rem 0; border-bottom: 1px solid var(--color-border); line-height: 1.8; }
        .solution-layer-card li:last-child { border-bottom: none; }
        .solution-layer-card li span:first-child { font-weight: 500; color: var(--color-text); }
        .solution-layer-card li span:nth-of-type(2) { font-weight: 500; color: var(--color-text); }
        .solution-layer-card li strong { color: var(--color-heading); }
        .solution-layer-card li em { font-style: normal; font-size: 0.9rem; opacity: 0.8; display: block; margin-top: 0.5rem; }
        
        @media (max-width: 768px) {
          .solution-details-grid { grid-template-columns: 1fr; }
          .diagnosis-column, .solution-column, .solution-when, .solution-examples { text-align: center; }
          .challenge-content-wrapper { min-height: 600px; }
        }
      `}</style>
    </>
  );
}