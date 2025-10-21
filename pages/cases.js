import Head from 'next/head';
import Link from 'next/link';
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
        <title>Cases | Engenharia de Receita em Ação</title>
        <meta name="description" content="Quatro histórias reais. Quatro aplicações do Cortex GTM™. Um princípio: complexidade sem clareza é potencial desperdiçado." />
      </Head>

      {/* BLOCO 1: HERO */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Engenharia de Receita em Ação</h1>
          <p className="hero-subheadline">
            Quatro histórias reais. Quatro aplicações do Cortex GTM™.<br/>
            Um princípio: complexidade sem clareza é potencial desperdiçado.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* BLOCO 2: INTRODUÇÃO - POR QUE ESTES 4 CASES */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="intro-cases-block">
            <h2 className="section-title text-center">Por Que Estas Quatro Histórias</h2>
            <div className="intro-text-flow">
              <p className="lead-text">Esses cases não provam que "funcionou uma vez". Provam que o método funciona em contextos radicalmente diferentes.</p>
              <p className="lead-text">Cada um demonstra como o <strong>Cortex GTM™</strong> — nosso sistema operacional de Engenharia de Receita — aplica as mesmas 5 lentes críticas (Fundador, Comprador, Receita, Neurociência, Andragogia) para resolver travamentos distintos:</p>
              <div className="cases-preview-grid">
                <div className="preview-card"><Brain size={32} /><h4>Versão Holística</h4><p>Cortex aplicado às <strong>5 lentes completas</strong><br/>Healthtech → Tese de investimento</p></div>
                <div className="preview-card"><TrendingUp size={32} /><h4>Exclusiva Engenharias</h4><p>Cortex aplicado ao <strong>Dual-Track Revenue</strong><br/>Invisibilidade → Motor de receita</p></div>
                <div className="preview-card"><Zap size={32} /><h4>Synapse Match Maker</h4><p>Cortex <strong>virando produto</strong><br/>Caos relacional → Inteligência de conexão</p></div>
                <div className="preview-card"><Target size={32} /><h4>MathPop</h4><p>Cortex aplicado ao <strong>Aprendizado por Experiência</strong><br/>Prova de universalidade do método</p></div>
              </div>
              <p className="lead-text text-center">Não importa o setor. Não importa o estágio.<br/>Quando você aplica as 5 lentes, <strong>clareza vira receita</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CASE 1: VERSÃO HOLÍSTICA */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header">
            <span className="case-number">CASE 1</span>
            <h2 className="case-title">Versão Holística</h2>
            <p className="case-subtitle">Cortex GTM™ aplicado às 5 lentes (versão completa)</p>
          </div>
          <div className="case-narrative">
            <h3>O Desafio Inicial</h3>
            <p>Healthtech nascida da superação pessoal de sua fundadora, com metodologia inovadora de cuidado integrativo. Produto sólido, casos de sucesso validados. Mas narrativa dispersa em múltiplos modelos de negócio simultâneos travava decisão.</p>
            <p className="highlight-quote">Hospitais e investidores faziam sempre a mesma pergunta: <strong>"O que, exatamente, vocês fazem por mim?"</strong></p>
            <h3>O Diagnóstico (Cortex GTM™)</h3>
            <p>Travamento no <strong>Sistema 1</strong> (decisão emocional). A narrativa técnica "Cuidado Farmacêutico Integrativo" forçava o decisor a entrar em Sistema 2 (análise racional exaustiva), mas ele não conseguia "sentir" o valor em 30 segundos. Pitch de 15 minutos gerava: <em>"vamos pensar..."</em></p>
            <p><strong>Causa raiz:</strong> Complexidade técnica sem tradução para linguagem de dor e resultado do CFO de hospital.</p>
            <h3>A Intervenção (Aplicação das 5 Lentes)</h3>
            <div className="lenses-application">
              <div className="lens-block"><h4>1. Lente do Fundador</h4><p>Preservamos o instinto original da fundadora (cuidado humanizado) mas traduzimos para linguagem de decisor:</p><div className="before-after-inline"><span className="before-text">Antes: "Cuidado Farmacêutico Integrativo"</span><ArrowRight size={20} /><span className="after-text">Depois: "Plataforma que reduz custo de paciente crônico"</span></div></div>
              <div className="lens-block"><h4>2. Lente do Comprador</h4><p>Mapeamos o processo decisório real do CFO de hospital:</p><ul><li>Decisor: CFO (não diretor clínico)</li><li>Objeção principal: "mais uma consultoria cara"</li><li>Gatilho de decisão: case provado com métrica clara (ROI tangível)</li></ul></div>
              <div className="lens-block"><h4>3. Lente da Receita</h4><p>Definimos ICP único e modelo de negócio prioritário:</p><ul><li><strong>ICP:</strong> Hospitais com 200+ leitos e alta sinistralidade</li><li><strong>Modelo:</strong> B2B com fee por paciente gerenciado (não B2C nem white label simultâneos)</li><li><strong>Métrica Norte:</strong> ROI 5.8x validado em cases reais</li></ul></div>
              <div className="lens-block"><h4>4. Lente da Neurociência</h4><p>Reestruturamos narrativa para ativar Sistema 1 antes de Sistema 2:</p><ul><li><strong>Dor reconhecível (Sistema 1):</strong> "Paciente crônico é seu maior custo"</li><li><strong>Solução tangível (Sistema 1):</strong> "Reduzimos custo em 5.8x"</li><li><strong>Prova imediata (redução de risco):</strong> Case validado em 60 segundos</li></ul></div>
              <div className="lens-block"><h4>5. Lente da Andragogia</h4><p>Educamos o mercado sobre categoria inexistente:</p><ul><li>Criamos termo: <strong>"CareOps Integrativo"</strong></li><li>Posicionamento: <strong>"1ª Plataforma de CareOps do Brasil"</strong></li><li>Material educativo: Hospital entende sozinho o valor (não depende de apresentação ao vivo)</li></ul></div>
            </div>
            <h3>O Resultado</h3>
            <p>De oferta confusa para tese de investimento clara. Narrativa que hospitais entendem em 60 segundos. ROI validado e mensurável. Posicionamento de categoria criado. Fundação estratégica pronta para escalar.</p>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>Pitch de 15 minutos → decisor confuso → "vamos pensar"</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>Pitch de 3 minutos → decisor entende valor → "quando começamos?"</div></div>
            <div className="case-quote-block"><p className="case-quote-text">"Traduzimos inovação técnica em linguagem de decisor financeiro. O produto sempre funcionou. Agora o mercado entende por quê."</p></div>
            <div className="case-link"><a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer">Ver plataforma: versaoholistica.com.br →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CASE 2: EXCLUSIVA ENGENHARIAS */}
      <section className="case-section-wrapper section-solid">
         <div className="container reveal-up">
          <div className="case-header">
            <span className="case-number">CASE 2</span>
            <h2 className="case-title">Exclusiva Engenharias</h2>
            <p className="case-subtitle">Cortex GTM™ aplicado ao Dual-Track Revenue (Discovery + Delivery em paralelo)</p>
          </div>
          <div className="case-narrative">
            <h3>O Desafio Inicial</h3>
            <p>Engenharia de excelência técnica. Portfólio robusto em projetos industriais complexos. Mas invisibilidade digital absoluta. Crescimento dependia 100% de indicação e networking. Sem motor de geração de demanda. Sem previsibilidade de receita.</p>
            <p className="highlight-quote">CEO passava 80% do tempo fazendo comercial ao invés de liderar crescimento estratégico.</p>
            <h3>O Diagnóstico (Cortex GTM™)</h3>
            <p>Ausência total de sistema comercial. Talento técnico excepcional + zero clareza de valor para o mercado = receita imprevisível. Cada venda dependia de esforço heroico. Impossível contratar vendedor porque não tinha o que replicar.</p>
            <p><strong>Causa raiz:</strong> Heroísmo comercial não escala. Sistema escala.</p>
            <h3>A Intervenção (Dual-Track Revenue)</h3>
            <p>Não esperamos a estratégia ficar "perfeita" para começar. Aplicamos metodologia proprietária <strong>Dual-Track Revenue</strong>: Discovery (validação estratégica) + Delivery (execução implacável) <strong>em paralelo</strong>. Aprendizado alimenta execução enquanto geramos resultados.</p>
            <div className="dual-track-visual">
              <div className="track-column"><h4>TRACK 1: DISCOVERY</h4><p><strong>1. Go-To-Market Completo</strong></p><ul><li>Posicionamento: "Engenharia que resolve problemas industriais que outros evitam"</li><li>ICP refinado: Indústrias de processo com desafios técnicos complexos</li><li>Proposta de valor: "Projetos que funcionam na primeira vez"</li><li>Canais de aquisição mapeados</li></ul><p><strong>2. Construção da Plataforma Digital</strong></p><ul><li>30% institucional + 70% engenharia de receita</li><li>Simulador de orçamento integrado</li><li>Lead entra já com estimativa de valor</li></ul></div>
              <div className="track-column"><h4>TRACK 2: DELIVERY</h4><p><strong>3. CRO as a Service</strong></p><ul><li>Fundação da Diretoria de Receita</li><li>Inteligência de mercado (mapeamento de verticais)</li><li>Prospecção ativa com método</li><li>Execução de reuniões comerciais</li><li>Documentação de playbook completo</li></ul></div>
            </div>
            <h3>O Resultado</h3>
            <p>De invisível para encontrável. De receita reativa para motor de geração de demanda estruturado. Plataforma digital gerando leads qualificados. Pipeline estruturado com previsibilidade. Playbook comercial validado e documentado. Sistema pronto para contratar time e escalar.</p>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>100% indicação → crescimento limitado pela rede → receita imprevisível</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>Motor de demanda ativo → leads qualificados entrando → sistema replicável</div></div>
            <div className="case-quote-block"><p className="case-quote-text">"Não esperamos a estratégia ficar perfeita. Validamos executando. Dual-Track Revenue transforma aprendizado em receita enquanto você descobre o que funciona."</p></div>
            <div className="case-link"><a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Ver plataforma: exclusivaengenharias.com →</a></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CASE 3: SYNAPSE MATCH MAKER */}
      <section className="case-section-wrapper section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 3</span><h2 className="case-title">Synapse B2B Match Maker</h2><p className="case-subtitle">Cortex GTM™ virando produto (meta-aplicação)</p></div>
          <div className="case-narrative">
            <h3>O Desafio Inicial</h3>
            <p>Grupos de networking com dezenas ou centenas de profissionais. Skills diversas. Entregáveis variados. Oportunidades invisíveis. Informação valiosa perdida em conversas assíncronas.</p>
            <p className="highlight-quote">Alguém precisa de designer. Tem 3 designers no grupo. Mas ninguém sabe quem é quem, faz o quê, está disponível. <strong>Zero capacidade de confluência estratégica.</strong></p>
            <h3>O Diagnóstico (Cortex GTM™)</h3>
            <p>Decisões cognitivamente caras (buscar, filtrar, comparar, decidir) travando ação. Sistema 2 exaustivo onde deveria haver Sistema 1 imediato. Coordenadores sobrecarregados fazendo matchmaking manual que leva horas ou nunca acontece.</p>
            <p><strong>Insight chave:</strong> O mesmo princípio que destrava receita em empresas B2B (reduzir fricção cognitiva) pode destravar conexões em ecossistemas.</p>
            <h3>A Intervenção (Transformar Método em Produto)</h3>
            <p>Criamos ferramenta proprietária de matching inteligente aplicando as lentes do Cortex GTM™ ao design de produto:</p>
            <div className="product-lenses">
              <div className="product-lens-block"><h4>Lente da Neurociência aplicada ao produto</h4><ul><li>Reduzimos decisão cognitivamente cara</li><li>Sistema toma decisões complexas pelo usuário</li><li>Match instantâneo (Sistema 1) ao invés de análise manual (Sistema 2)</li></ul></div>
              <div className="product-lens-block"><h4>Lente do Comprador aplicada ao produto</h4><ul><li>Usuário quer resultado (conexão certa), não processo</li><li>Ferramenta entrega 3 matches perfeitos em segundos</li><li>Zero fricção entre necessidade e solução</li></ul></div>
            </div>
            <p><strong>Arquitetura:</strong></p>
            <ul><li>Plataforma multi-tenant</li><li>Neural System proprietário</li><li>Conecta perfis por: competência + necessidade + oportunidade</li></ul>
            <p><strong>Versatilidade escalável:</strong></p>
            <ul><li>Educação: alunos ↔ mentores</li><li>Investimento: startups ↔ investidores</li><li>RH: vagas ↔ talentos</li><li>Parcerias: fornecedores ↔ demandas</li></ul>
            <h3>O Resultado</h3>
            <p>De caos relacional para inteligência de conexão. Matching em segundos (antes: horas ou nunca). Dados estruturados gerando valor. Escalável para qualquer ecossistema que precisa organizar relacionamentos estratégicos. Sistema que aprende com uso.</p>
            <div className="transformation-metric"><div className="metric-before"><strong>Antes:</strong><br/>Informação perdida → oportunidades invisíveis → networking desperdiçado</div><ArrowRight size={24} /><div className="metric-after"><strong>Depois:</strong><br/>3 matches perfeitos em 10 segundos → decisão instantânea → conexões estratégicas</div></div>
            <div className="case-quote-block"><p className="case-quote-text">"Transformamos o método Cortex GTM™ em produto. A mesma lógica que destrava receita em empresas B2B agora destrava conexões em ecossistemas."</p></div>
            <div className="case-cta-box"><Link href="/contato" className="btn btn-secondary"><span>Ver ferramenta em ação</span><ArrowRight size={20} /></Link><Link href="/contato" className="btn btn-secondary"><span>Solicitar demo para seu ecossistema</span><ArrowRight size={20} /></Link></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CASE 4: MATHPOP */}
      <section className="case-section-wrapper section-solid">
        <div className="container reveal-up">
          <div className="case-header"><span className="case-number">CASE 4</span><h2 className="case-title">MathPop</h2><p className="case-subtitle">Cortex GTM™ aplicado ao Aprendizado por Experiência (prova de universalidade do método)</p></div>
          <div className="case-narrative">
            <h3>O Desafio Inicial</h3>
            <p>Se Cortex GTM™ funciona para B2B complexo, será que funciona para... uma criança de 10 anos aprendendo matemática?</p>
            <p><strong>Desafio:</strong> Ensinar matemática de forma envolvente para crianças que acham a matéria "chata" ou "difícil". Mas com um segundo desafio embutido: criar uma ferramenta que <strong>escolas, psicopedagogos e famílias</strong> (decisores B2B2C) entendam o valor e adotem facilmente.</p>
            <p className="highlight-quote">Aprendizado tradicional: decoreba de fórmulas, exercícios repetitivos sem contexto, criança não entende "por que isso importa". E educadores não têm ferramentas que provem resultado tangível.</p>
            <h3>O Diagnóstico (Cortex GTM™)</h3>
            <p><strong>Mesmo problema de empresas B2B:</strong> Conteúdo tecnicamente correto sem clareza de valor não gera engajamento.</p>
            <p><strong>Para a criança:</strong> Equações abstratas sem conexão com experiência concreta = desengajamento total. Ela quer descobrir, experimentar, ver resultado imediato — não memorizar fórmulas para "a prova".</p>
            <p><strong>Para o decisor B2B2C (escola/psicopedagogo):</strong> Ferramenta educacional sem prova de resultado mensurável não será adotada, mesmo que seja tecnicamente superior. Eles precisam ver que funciona antes de comprar.</p>
            <p><strong>Causa raiz:</strong> Complexidade (equações) sem conexão com o "job" real do usuário = ausência de engajamento. Isso vale para criança E para quem compra.</p>
            <h3>A Intervenção (Aprendizado por Experiência)</h3>
            <p>Aplicamos os mesmos princípios que usamos para destravar receita em B2B, mas adaptados para criar uma experiência de aprendizado onde a criança <strong>aprende fazendo</strong>, não memorizando:</p>
            <div className="learning-principles">
              <div className="principle-block"><h4>1. Aprendizado orientado a problema real</h4><p><strong>B2B:</strong> "Qual problema de negócio você resolve?"<br/><strong>MathPop:</strong> "Resolva este desafio do jogo" (não "aprenda esta equação")</p><p className="principle-result">Criança descobre que precisa da matemática para vencer o desafio. Motivação intrínseca, não externa.</p></div>
              <div className="principle-block"><h4>2. Experiência imediata de aplicação</h4><p><strong>B2B:</strong> Calculadora de ROI mostra resultado em segundos<br/><strong>MathPop:</strong> Tentativa → feedback → aprendizado (não teoria → depois prática)</p><p className="principle-result">Criança testa hipóteses em tempo real. Erro vira aprendizado, não punição.</p></div>
              <div className="principle-block"><h4>3. Progressão sem esforço consciente</h4><p><strong>B2B:</strong> Jornada de conversão guiada reduz fricção<br/><strong>MathPop:</strong> Níveis aumentam complexidade gradualmente</p><p className="principle-result">Criança evolui sem perceber que está "estudando mais". Gamificação inteligente mantém engajamento.</p></div>
              <div className="principle-block"><h4>4. Prova tangível de resultado</h4><p><strong>B2B:</strong> Case validado com métrica clara (ROI 5.8x)<br/><strong>MathPop:</strong> Relatório para educador mostra evolução mensurável</p><p className="principle-result">Psicopedagogo/escola vê progresso da criança em dados concretos. Facilita decisão de adoção.</p></div>
            </div>
            <h3>Produto: MathPop</h3>
            <ul><li><strong>Para a criança:</strong> Gamificação inteligente onde matemática é aplicada a desafios lúdicos. Aprende sem perceber que está estudando.</li><li><strong>Para o decisor B2B2C:</strong> Dashboard que prova resultado (evolução mensurável por competência). Facilita adoção em escolas e clínicas.</li><li><strong>Sistema 1 (experiência) antes de Sistema 2 (teoria):</strong> Diversão ativa decisão emocional de continuar jogando. Raciocínio matemático acontece como consequência, não como pré-requisito.</li></ul>
            <h3>O Resultado (Prova de Universalidade)</h3>
            <p>Se Cortex GTM™ funciona para:</p>
            <ul className="proof-list"><li>✓ Healthtech complexa (traduzir inovação técnica em tese de investimento)</li><li>✓ Engenharia invisível (construir motor de receita do zero)</li><li>✓ Ecossistemas caóticos (gerar inteligência de conexão)</li><li>✓ <strong>E para aprendizado infantil + venda B2B2C</strong></li></ul>
            <p>Então o método não é específico de B2B corporativo. <strong>É uma ciência de traduzir complexidade em clareza através de experiência aplicada</strong> — funciona para qualquer contexto onde alguém precisa tomar decisão (comprar) ou aprender (engajar).</p>
            <div className="dual-proof-box"><div className="proof-side"><h4>Prova para a criança</h4><p>Matemática deixa de ser "matéria chata" e vira ferramenta para vencer desafios. Engajamento sustentado.</p></div><div className="proof-side"><h4>Prova para o decisor B2B2C</h4><p>Escola/psicopedagogo vê resultado mensurável (relatório de evolução). Decisão de adoção facilitada por prova tangível.</p></div></div>
            <div className="case-quote-block"><p className="case-quote-text">"Se funciona para facilitar decisão B2B, funciona para facilitar aprendizado infantil. Cortex GTM™ não é estratégia de nicho. É ciência de como traduzir complexidade em experiência que gera valor — em qualquer contexto."</p></div>
            <div className="case-link"><Link href="/contato">Conhecer o MathPop →</Link></div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* CONCLUSÃO + CTA */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">O Que Esses Quatro Cases Provam</h2>
          <p className="lead-text">Cortex GTM™ não é "consultoria que funcionou uma vez".<br/>É sistema que funciona em contextos radicalmente diferentes.</p>
          <div className="cases-proof-grid">
            <div className="proof-item"><strong>Healthtech:</strong> Complexidade técnica → Tese de investimento</div>
            <div className="proof-item"><strong>Engenharia:</strong> Invisibilidade → Motor de receita</div>
            <div className="proof-item"><strong>Ecossistema:</strong> Caos relacional → Inteligência de conexão</div>
            <div className="proof-item"><strong>Educação:</strong> Conteúdo árido → Aprendizado envolvente</div>
          </div>
          <p className="lead-text principle-text"><strong>O princípio é sempre o mesmo:</strong><br/>Complexidade sem clareza é potencial desperdiçado.</p>
          <p className="lead-text">Quando você aplica as 5 lentes (Fundador, Comprador, Receita, Neurociência, Andragogia), clareza vira resultado.</p>
          <p className="lead-text">Não importa seu setor. Não importa seu estágio.<br/>Se você tem potencial travado, Cortex GTM™ destrava.</p>
          <div className="section-cta"><Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico (21min)</span><ArrowRight size={20} /></Link></div>
          <p className="cta-support-text">Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo.<br/>Sem pressão. Sem proposta genérica. Só clareza sobre se conseguimos gerar valor real para você.</p>
          <div className="explore-links"><Link href="/como-trabalhamos">Ver nossas soluções →</Link></div>
        </div>
      </section>

      <style jsx>{`
        /* INTRODUÇÃO */
        .intro-cases-block { max-width: 900px; margin: 0 auto; text-align: left; }
        .intro-cases-block .section-title { text-align: center; margin-bottom: 2rem; }
        .intro-text-flow .lead-text { margin-bottom: 2rem; }
        .cases-preview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin: 3rem 0; text-align: center; }
        .preview-card { background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 2rem; }
        .preview-card svg { color: var(--color-primary); margin: 0 auto 1rem; }
        .preview-card h4 { font-family: 'Montserrat', sans-serif; color: var(--color-heading); font-size: 1.2rem; margin-bottom: 0.5rem; }
        .preview-card p { font-size: 0.9rem; line-height: 1.6; }

        /* ESTRUTURA GERAL DOS CASES */
        .case-section-wrapper { padding: 5rem 0; }
        .case-header { text-align: center; margin-bottom: 4rem; }
        .case-number { display: inline-block; font-family: 'Montserrat'; font-size: 0.9rem; font-weight: 700; color: var(--color-primary); border: 1px solid var(--color-border); padding: 0.5rem 1rem; border-radius: 8px; margin-bottom: 1.5rem; }
        .case-title { font-family: 'Montserrat'; font-size: 3rem; color: var(--color-heading); }
        .case-subtitle { font-size: 1.2rem; color: var(--color-text); max-width: 700px; margin: 0.5rem auto 0; }
        .case-narrative { max-width: 800px; margin: 0 auto; text-align: left; }
        .case-narrative h3 { font-family: 'Montserrat'; font-size: 1.8rem; color: var(--color-heading); margin: 3rem 0 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); }
        .case-narrative p { margin-bottom: 1.5rem; line-height: 1.8; }
        .case-narrative strong { color: var(--color-heading); }
        .highlight-quote { padding: 1.5rem; background-color: var(--color-section-bg); border-left: 3px solid var(--color-primary); border-radius: 0 8px 8px 0; font-style: italic; font-size: 1.1rem; }
        .case-narrative ul { list-style-position: inside; padding-left: 5px; margin-bottom: 1.5rem; }
        .case-narrative li { margin-bottom: 0.75rem; padding-left: 0.5rem; }
        
        /* BLOCOS ESPECÍFICOS DOS CASES */
        .lenses-application, .learning-principles { display: grid; grid-template-columns: 1fr; gap: 2rem; margin: 2rem 0; }
        .lens-block, .principle-block { background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 1.5rem; }
        .lens-block h4, .principle-block h4 { font-size: 1.1rem; color: var(--color-primary); margin-bottom: 1rem; }
        .before-after-inline { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .before-text { text-decoration: line-through; opacity: 0.7; }
        .transformation-metric { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 2rem; text-align: center; background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 2rem; border-radius: 12px; margin: 3rem 0; }
        .transformation-metric svg { color: var(--color-primary); }
        .dual-track-visual, .product-lenses { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0; }
        .track-column, .product-lens-block { background-color: var(--color-section-bg); border: 1px solid var(--color-border); border-radius: 12px; padding: 1.5rem; }
        .track-column h4, .product-lens-block h4 { font-size: 1.1rem; color: var(--color-primary); margin-bottom: 1rem; }
        .principle-result { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--color-border); font-style: italic; opacity: 0.8; }
        .proof-list { list-style: none; padding: 0; }
        .dual-proof-box { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .proof-side { background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1.5rem; border-radius: 12px; }
        .proof-side h4 { color: var(--color-primary); margin-bottom: 0.5rem; }

        .case-quote-block { margin: 3rem 0; padding: 2rem; border: 1px solid var(--color-border); border-radius: 12px; text-align: center; }
        .case-quote-text { font-size: 1.2rem; font-style: italic; color: var(--color-heading); line-height: 1.7; margin: 0; }
        .case-link, .case-cta-box { margin-top: 2rem; text-align: center; }
        .case-link a { color: var(--color-accent); font-weight: 600; }
        .case-cta-box { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

        /* CONCLUSÃO */
        .cases-proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 2rem 0; }
        .proof-item { background-color: var(--color-section-bg); border: 1px solid var(--color-border); padding: 1rem; border-radius: 8px; }
        .principle-text { margin-top: 3rem; }
        .explore-links { margin-top: 2rem; }
        .explore-links a { color: var(--color-accent); }

        @media (max-width: 768px) {
          .case-title { font-size: 2.2rem; }
          .dual-track-visual, .product-lenses, .dual-proof-box { grid-template-columns: 1fr; }
          .transformation-metric { grid-template-columns: 1fr; }
          .transformation-metric svg { transform: rotate(90deg); margin: 1rem auto; }
        }
      `}</style>
    </>
  );
} 