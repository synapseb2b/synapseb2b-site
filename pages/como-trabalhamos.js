import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para a nova estrutura
import { 
  ArrowRight, BrainCircuit, HardHat, Map, Briefcase, Rocket, MonitorSmartphone, Wrench, Users
} from 'lucide-react';

// --- Componente de Texto Rotativo para a Hero ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const variations = ['conecta produto e mercado.','traduz complexidade em valor.','transforma potencial em receita.','gera clareza que converte.'];
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => { setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length); }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, variations.length]);
  return (
    <><p className="hero-pre-headline">Desenvolvemos</p><h1 className="hero-headline hero-headline-two-lines"><span className="hero-headline-fixed">Engenharia de Receita que</span><span className="rotating-text" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>{variations[currentIndex]}</span></h1></>
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
        <div className="hero-video-background"><video autoPlay muted loop playsInline className="hero-video"><source src="/video/video_home.mp4" type="video/mp4" /></video><div className="hero-overlay"></div></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <RotatingText />
          <p className="hero-subheadline">Nós instalamos o sistema que transforma potencial técnico em receita previsível.</p>
          <div className="hero-ctas"><Link href="#camada-inteligencia" className="btn btn-primary"><span>Conheça as Camadas</span><ArrowRight size={20} /></Link></div>
        </div>
      </section>

      <div className="section-divider-glow"></div>
      
      {/* Bloco 2: O Sistema e as Duas Camadas */}
      <section id="sistema" className="section-solid">
        <div className="container reveal-up">
            <h2 className="section-title">Um Sistema. Duas Camadas.</h2>
            <p className="lead-text">A Synapse B2B opera como um sistema de duas camadas que conecta estratégia e execução.</p>
        </div>
      </section>

      {/* Bloco 3: CAMADA 1 - Inteligência & Estratégia */}
      <section id="camada-inteligencia" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="layer-intro">
            <div className="layer-badge"><BrainCircuit size={24} /><span>CAMADA 1</span></div>
            <h2 className="section-title">Inteligência & Estratégia</h2>
            <p className="lead-text">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
          </div>

          <div className="solutions-column-layout">
            {/* Solução 1.1: GTM */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Map size={24} /><h4>Go-To-Market Completo</h4></div>
              [cite_start]<p className="solution-card-tagline">Instala o sistema operacional que traduz seu potencial em receita previsível. [cite: 308]</p>
              <div className="solution-body-detailed">
                  [cite_start]<div className="detail-block"><h5>O Gatilho:</h5><ul><li>Seu produto é tecnicamente superior, mas perde para concorrentes com narrativas mais simples. [cite: 310][cite_start]</li><li>Reuniões comerciais terminam com "preciso pensar", e o follow-up morre. [cite: 311][cite_start]</li><li>O time de vendas tem dificuldade em explicar o valor do produto de forma concisa. [cite: 312]</li></ul></div>
                  [cite_start]<div className="detail-block"><h5>A Solução:</h5><p>Construímos sua arquitetura comercial do zero, definindo um posicionamento que torna seu valor óbvio. [cite: 318] [cite_start]Refinamos o ICP, a proposta de valor, os canais de aquisição e o pricing. [cite: 319]</p></div>
                  [cite_start]<div className="detail-block"><h5>O Resultado:</h5><p>Um sistema comercial que não depende de heróis e transforma a complexidade do seu produto em um argumento de compra irrecusável. [cite: 322, 323]</p></div>
              </div>
              <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Diagnosticar minha Estratégia</span><ArrowRight size={18} /></Link></div>
            </div>

            {/* Solução 1.2: CRO */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Briefcase size={24} /><h4>Diretoria de Receita (CRO as a Service)</h4></div>
              [cite_start]<p className="solution-card-tagline">Injeta liderança C-level para transformar esforço reativo em um sistema de crescimento proativo. [cite: 329]</p>
              <div className="solution-body-detailed">
                  [cite_start]<div className="detail-block"><h5>O Gatilho:</h5><ul><li>A receita depende de 1 ou 2 "vendedores excepcionais" impossíveis de replicar. [cite: 331][cite_start]</li><li>O crescimento vem de networking e esforço heroico, não de um processo escalável. [cite: 332][cite_start]</li><li>O CEO é o melhor vendedor e gargalo do crescimento. [cite: 333, 345]</li></ul></div>
                  [cite_start]<div className="detail-block"><h5>A Solução:</h5><p>Atuamos como seu CRO fracionado, instalando inteligência de mercado, desenhando o processo, liderando a execução inicial e implementando a governança de KPIs. [cite: 339]</p></div>
                  [cite_start]<div className="detail-block"><h5>O Resultado:</h5><p>Um motor de receita previsível e a libertação do CEO das operações comerciais, permitindo crescimento com base em um sistema replicável. [cite: 342, 343]</p></div>
              </div>
              <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Estruturar minha Liderança</span><ArrowRight size={18} /></Link></div>
            </div>

            {/* Solução 1.3: Sprint */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Rocket size={24} /><h4>Sprint de Validação Comercial</h4></div>
              [cite_start]<p className="solution-card-tagline">Substitui meses de "achismo" por 30 dias de dados de mercado para guiar seu crescimento. [cite: 288]</p>
              <div className="solution-body-detailed">
                  [cite_start]<div className="detail-block"><h5>O Gatilho:</h5><ul><li>A receita estagnou há mais de dois trimestres. [cite: 290][cite_start]</li><li>Você tem uma nova oferta, mas medo de "escalar o erro" e queimar caixa. [cite: 291][cite_start]</li><li>As decisões são baseadas em intuição, não em dados de campo. [cite: 292]</li></ul></div>
                  [cite_start]<div className="detail-block"><h5>A Solução:</h5><p>Um processo focado de 15 ou 30 dias para testar as variáveis mais críticas (oferta, ICP, canal) com clientes reais para coletar dados, não opiniões. [cite: 297, 298]</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Certeza estratégica. [cite_start]A capacidade de tomar decisões de alto impacto com risco calculado, investindo em demanda validada pelo mercado. [cite: 301, 302]</p></div>
              </div>
              <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Validar minha Hipótese</span><ArrowRight size={18} /></Link></div>
            </div>
            
            {/* Solução 1.4: Advisory Board */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Users size={24} /><h4>Advisory Board</h4></div>
              [cite_start]<p className="solution-card-tagline">Injeta visão externa sênior para validar decisões estratégicas de alto impacto. [cite: 349]</p>
              <div className="solution-body-detailed">
                  [cite_start]<div className="detail-block"><h5>O Gatilho:</h5><ul><li>Você está diante de uma decisão de alto risco com impacto irreversível. [cite: 351][cite_start]</li><li>A equipe interna não possui a experiência específica para validar a hipótese. [cite: 352][cite_start]</li><li>É preciso um "sparring" qualificado para estressar uma estratégia. [cite: 353]</li></ul></div>
                  [cite_start]<div className="detail-block"><h5>A Solução:</h5><p>Atuamos como um conselho estratégico sob demanda, usando nossa experiência em execução para validar e refinar decisões críticas em áreas como entrada em novos mercados ou pivôs de negócio. [cite: 358]</p></div>
                  [cite_start]<div className="detail-block"><h5>O Resultado:</h5><p>Decisões mais seguras, rápidas e inteligentes, reduzindo o risco ao validar hipóteses contra a realidade do mercado e aumentando a confiança da liderança. [cite: 360]</p></div>
              </div>
               <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Validar Decisão Crítica</span><ArrowRight size={18} /></Link></div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: CAMADA 2 - Construção de Ativos Digitais */}
      <section id="camada-ativos" className="section-solid">
        <div className="container reveal-up">
          <div className="layer-intro">
            <div className="layer-badge"><HardHat size={24} /><span>CAMADA 2</span></div>
            <h2 className="section-title">Construção de Ativos Digitais</h2>
            <p className="lead-text">Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
          </div>
          
          <div className="solutions-column-layout">
              <div className="solution-card-detailed">
                <div className="solution-card-header"><MonitorSmartphone size={24} /><h4>Plataforma de Aceleração de Receita</h4></div>
                [cite_start]<p className="solution-card-tagline">Transforma seu site de uma "brochura digital" em um ativo que educa, qualifica e converte 24/7. [cite: 366]</p>
                 <div className="solution-body-detailed">
                  [cite_start]<div className="detail-block"><h5>O Gatilho:</h5><ul><li>Seu site gera tráfego, mas poucos leads qualificados. [cite: 368][cite_start]</li><li>Leads chegam sem contexto, forçando o time comercial a gastar horas em qualificação. [cite: 369][cite_start]</li><li>Seu principal ativo digital não reflete a inteligência da sua empresa. [cite: 370]</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Projetamos seu ativo digital com foco em receita: 30% institucional e 70% engenharia de conversão. [cite_start]Cada elemento é desenhado para mover o cliente pela jornada de compra. [cite: 376, 377]</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Um motor de qualificação que funciona 24/7, entregando leads educados ao time comercial. [cite_start]O custo de aquisição diminui e a velocidade de fechamento aumenta. [cite: 381, 382]</p></div>
              </div>
               <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Acelerar minha Conversão</span><ArrowRight size={18} /></Link></div>
              </div>

              <div className="solution-card-detailed">
                <div className="solution-card-header"><Wrench size={24} /><h4>Ferramentas Estratégicas de Conversão</h4></div>
                [cite_start]<p className="solution-card-tagline">Cria ativos proprietários que tornam o seu valor tangível e aceleram a decisão de compra. [cite: 388]</p>
                 <div className="solution-body-detailed">
                  [cite_start]<div className="detail-block"><h5>O Gatilho:</h5><ul><li>O ciclo de vendas é longo porque o cliente não consegue "visualizar" o ROI. [cite: 390][cite_start]</li><li>Cada venda exige uma apresentação customizada, o que limita a escala. [cite: 391][cite_start]</li><li>A objeção "preciso ver funcionando" é constante. [cite: 392]</li></ul></div>
                  [cite_start]<div className="detail-block"><h5>A Solução:</h5><p>Construímos ativos como calculadoras de ROI, simuladores e diagnósticos, que se tornam o centro da sua argumentação de valor e provam sua autoridade. [cite: 397, 398]</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Um ciclo de vendas mais curto e uma taxa de conversão mais alta. [cite_start]O cliente chega às reuniões já convencido do valor, transformando uma venda complexa em uma decisão óbvia. [cite: 400, 401, 402]</p></div>
              </div>
               <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Tangibilizar meu Valor</span><ArrowRight size={18} /></Link></div>
              </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Modelo de Trabalho */}
       <section id="modelo-trabalho" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>Iniciamos com uma Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento vem de <strong>Receita Nova</strong> gerada pelo projeto — dinheiro que você não teria sem nossa intervenção. Seu resultado é nosso resultado.</p>
            <div className="section-cta"><Link href="/contato" className="btn btn-secondary"><span>Entender o modelo</span><ArrowRight size={20} /></Link></div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <p className="lead-text" style={{marginBottom: '2rem'}}>Vamos traduzir seu desafio em um plano de ação.</p>
          <div className="section-cta"><Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} /></Link></div>
        </div>
      </section>

      {/* CSS para a NOVA ESTRUTURA */}
      <style jsx>{`
        /* 2. Redução de Espaçamento Vertical */
        section { padding: 4.5rem 0; }
        .hero-section { padding: 0; }
        
        /* 1. Alinhamento à Esquerda e Layout Geral */
        .layer-intro { margin-bottom: 3rem; text-align: left; }
        .layer-badge { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 8px; font-weight: 600; color: var(--color-primary); margin-bottom: 1.5rem; }
        .lead-text, .section-cta { margin-left: 0; }
        .decision-block { text-align: left; }
        .decision-block .section-cta { margin-top: 2rem; }
        
        .solutions-column-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .solution-card-detailed {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
        }
        
        .solution-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
        .solution-card-header svg { color: var(--color-primary); flex-shrink: 0; }
        .solution-card-header h4 { font-family: 'Montserrat'; font-size: 1.5rem; color: var(--color-heading); }
        
        .solution-card-tagline { font-size: 1.1rem; color: var(--color-text); margin-bottom: 2rem; }
        
        .solution-body-detailed {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .detail-block h5 { font-size: 1rem; font-weight: 700; color: var(--color-heading); margin-bottom: 1rem; }
        .detail-block ul { list-style-type: '✓'; list-style-position: inside; padding-left: 5px; }
        .detail-block li, .detail-block p { font-size: 0.95rem; color: var(--color-text); line-height: 1.8; }
        .detail-block li { margin-bottom: 0.75rem; padding-left: 0.5rem; }
        
        .solution-cta { margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--color-border); }
        .solution-cta .btn-secondary { background-color: transparent; }
        .solution-cta .btn-secondary:hover { background-color: rgba(0, 150, 132, 0.1); }
        
        a { color: var(--color-accent) !important; text-decoration: none; }
        a:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .solution-body-detailed { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}