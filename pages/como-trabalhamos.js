import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para esta página
import { 
  ArrowRight, CheckCircle2, Siren, BarChart, Target, TrendingUp, ThumbsUp, Award,
  BrainCircuit, HardHat 
} from 'lucide-react';

// --- Componente de Texto Rotativo para a Hero (NOVO) ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'conecta produto e mercado.',
    'traduz complexidade em valor.',
    'transforma potencial em receita.',
    'gera clareza que converte.',
    'instala um sistema de receita.'
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, variations.length]);

  return (
    <h1 className="hero-headline hero-headline-two-lines">
      <span className="hero-headline-fixed">Crescimento B2B é engenharia que</span>
      <span 
        className="rotating-text"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {variations[currentIndex]}
      </span>
    </h1>
  );
};


export default function ComoTrabalhamosPage() {
  const [activeChallenge, setActiveChallenge] = useState('desafio1'); // Estado para a nova seção de desafios

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

      {/* Bloco 1: Hero Section - REFEITA COM TEXTO ROTATIVO */}
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

      {/* Bloco 3: Desafios e Soluções (REIMAGINADO SEM ACCORDIONS) */}
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
              <h3>"Seu produto é superior, mas o mercado não percebe o valor"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Sua narrativa ativa o cérebro racional (lento) em vez do decisivo (rápido). A complexidade técnica não foi traduzida para a linguagem de dor e resultado do decisor.</p></div>
                  <div className="solution-column"><h4>Solução: GTM Completo</h4><p>Arquitetura estratégica que traduz "o que somos" para "o problema que só nós resolvemos", com uma Proposta de Valor que seu cliente entende em 60 segundos.</p></div>
              </div>
            </div>
            {/* Desafio 2 Content */}
            <div className={`challenge-pane ${activeChallenge === 'desafio2' ? 'active' : ''}`}>
              <h3>"Seu time comercial depende de esforço heroico e networking"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Ausência de sistema replicável. O sucesso depende de talento individual, não de um processo excelente. Heroísmo não escala, sistema escala.</p></div>
                  <div className="solution-column"><h4>Solução: CRO as a Service</h4><p>Liderança C-level fracionada que instala o sistema, valida na linha de frente e entrega um Playbook de Vendas documentado para escalar o time com confiança.</p></div>
              </div>
            </div>
            {/* Desafio 3 Content */}
             <div className={`challenge-pane ${activeChallenge === 'desafio3' ? 'active' : ''}`}>
              <h3>"Seu marketing gera leads que não convertem"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Seu site foi projetado como uma brochura online, não como um motor de receita. Ele não educa, não qualifica e não reduz objeções antes do contato.</p></div>
                  <div className="solution-column"><h4>Solução: Plataforma de Aceleração de Receita</h4><p>Construímos ativos digitais estratégicos (30% Institucional + 70% Engenharia de Receita) com arquitetura de conversão em cada página.</p></div>
              </div>
            </div>
             {/* Desafio 4 Content */}
             <div className={`challenge-pane ${activeChallenge === 'desafio4' ? 'active' : ''}`}>
              <h3>"Seu crescimento estagnou e você não sabe qual alavanca puxar"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Ausência de inteligência para priorizar hipóteses. Tentar tudo ao mesmo tempo dispersa recursos e não valida nada. Você precisa de dados de campo.</p></div>
                  <div className="solution-column"><h4>Solução: Sprint de Validação Comercial</h4><p>Testamos sua oferta, ICP e canais em 15 ou 30 dias para gerar dados reais, recomendando com clareza a próxima ação: escalar, pivotar ou refinar.</p></div>
              </div>
            </div>
             {/* Desafio 5 Content */}
            <div className={`challenge-pane ${activeChallenge === 'desafio5' ? 'active' : ''}`}>
              <h3>"Sua venda é complexa e depende de uma apresentação ao vivo"</h3>
              <div className="solution-details-grid">
                  <div className="diagnosis-column"><h4>Diagnóstico</h4><p>Seu serviço é intangível e o cliente não consegue "sentir" o valor sem experimentar. Você precisa de um ativo que acelere a decisão sem depender de uma reunião.</p></div>
                  <div className="solution-column"><h4>Solução: Ferramentas Estratégicas</h4><p>Construímos ativos proprietários (Calculadoras de ROI, Simuladores, Diagnósticos) que se tornam o centro da sua argumentação de valor e provam sua autoridade.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Matriz de Decisão (REIMAGINADA) */}
      <section id="matriz-decisao" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Qual solução para qual momento?</h2>
            <p className="lead-text">Seu desafio se encaixa em uma de nossas duas frentes de trabalho.</p>
            <div className="card-grid-two">
              {/* Coluna de Estratégia */}
              <div className="solution-layer-card">
                  <div className="layer-header">
                      <BrainCircuit />
                      <h3>Inteligência & Estratégia</h3>
                  </div>
                  <p className="layer-description">Para desafios de narrativa, processo e validação de mercado.</p>
                  <ul>
                      <li><span>Seu momento:</span> Narrativa não converte <span>→ Solução:</span> GTM Completo</li>
                      <li><span>Seu momento:</span> CEO sobrecarregado <span>→ Solução:</span> CRO as a Service</li>
                      <li><span>Seu momento:</span> Produto novo no mercado <span>→ Solução:</span> Sprint de Validação</li>
                      <li><span>Seu momento:</span> Decisão de alto risco <span>→ Solução:</span> Advisory Board</li>
                  </ul>
              </div>
              {/* Coluna de Ativos */}
              <div className="solution-layer-card">
                  <div className="layer-header">
                      <HardHat />
                      <h3>Construção de Ativos Digitais</h3>
                  </div>
                  <p className="layer-description">Para desafios de conversão, qualificação e escala de vendas.</p>
                  <ul>
                      <li><span>Seu momento:</span> Site não gera leads <span>→ Solução:</span> Plataforma Digital</li>
                      <li><span>Seu momento:</span> Venda depende de reunião <span>→ Solução:</span> Ferramentas Estratégicas</li>
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
        .challenge-tabs-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 3rem auto;
          flex-wrap: wrap;
        }
        .tab-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1.5rem;
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .tab-button:hover {
          background-color: rgba(0, 150, 132, 0.1);
          color: var(--color-heading);
        }
        .tab-button.active {
          background-color: var(--color-primary);
          color: var(--color-heading);
          border-color: var(--color-primary);
        }
        .challenge-content-wrapper {
          position: relative;
          min-height: 250px; /* Evita pulos de layout na troca */
        }
        .challenge-pane {
          opacity: 0;
          position: absolute;
          top: 0; left: 0; right: 0;
          pointer-events: none;
          transition: opacity 0.4s ease-in-out;
        }
        .challenge-pane.active {
          opacity: 1;
          position: relative;
          pointer-events: auto;
        }
        .challenge-pane h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.8rem;
          color: var(--color-heading);
          margin-bottom: 2rem;
        }
        .solution-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .diagnosis-column, .solution-column {
          text-align: left;
        }
        .diagnosis-column h4, .solution-column h4 {
          font-family: 'Montserrat';
          color: var(--color-primary);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        /* MATRIZ DE DECISÃO REIMAGINADA */
        .solution-layer-card {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 3rem;
        }
        .layer-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
        }
        .layer-header svg {
          width: 40px;
          height: 40px;
          color: var(--color-primary);
        }
        .layer-header h3 {
          font-family: 'Montserrat';
          font-size: 1.5rem;
          color: var(--color-heading);
          margin: 0;
        }
        .layer-description {
          margin-bottom: 2rem;
          min-height: 40px; /* Alinha verticalmente */
        }
        .solution-layer-card ul {
          list-style: none;
          text-align: left;
        }
        .solution-layer-card li {
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-border);
          line-height: 1.6;
        }
        .solution-layer-card li:last-child {
          border-bottom: none;
        }
        .solution-layer-card li span:first-child {
          font-weight: 600;
          color: var(--color-text);
        }
        .solution-layer-card li span:last-child {
          font-weight: 600;
          color: var(--color-heading);
        }
        
        @media (max-width: 768px) {
          .solution-details-grid {
            grid-template-columns: 1fr;
          }
          .diagnosis-column, .solution-column {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}