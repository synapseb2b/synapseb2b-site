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
        <div className="container text-center reveal-up">
            <h2 className="section-title">Um Sistema. Duas Camadas.</h2>
            <p className="lead-text">A Synapse B2B opera como um sistema de duas camadas que conecta estratégia e execução.</p>
        </div>
      </section>

      {/* Bloco 3: CAMADA 1 - Inteligência & Estratégia */}
      <section id="camada-inteligencia" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <div className="layer-intro">
            <div className="layer-badge"><BrainCircuit size={24} /><span>CAMADA 1</span></div>
            <h2 className="section-title">Inteligência & Estratégia</h2>
            <p className="lead-text">Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
          </div>

          <div className="solutions-column-layout">
            {/* Solução 1.1: GTM */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Map size={24} /><h4>Go-To-Market Completo</h4></div>
              <p className="solution-card-tagline">Instala o sistema operacional que traduz seu potencial em receita previsível.</p>
              <div className="solution-body-detailed">
                  <div className="detail-block"><h5>O Gatilho:</h5><ul><li>Seu produto é tecnicamente superior, mas perde para concorrentes com narrativas mais simples.</li><li>Reuniões comerciais são produtivas, mas terminam com "preciso pensar", e o follow-up morre.</li><li>O time de vendas tem dificuldade em explicar o valor do produto de forma concisa.</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Construímos sua arquitetura comercial do zero. Mapeamos o DNA da sua empresa para definir um posicionamento que torna seu valor óbvio. Refinamos o ICP, a proposta de valor, os canais de aquisição e o modelo de pricing. O entregável é um blueprint que alinha Marketing, Vendas e Produto em uma única direção.</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Clareza interna e externa. Um sistema comercial que não depende de heróis. Um processo que transforma a complexidade do seu produto em um argumento de compra irrecusável, encurtando o ciclo de vendas e aumentando a taxa de conversão.</p></div>
              </div>
              <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Diagnosticar minha Estratégia</span><ArrowRight size={18} /></Link></div>
            </div>

            {/* Solução 1.2: CRO */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Briefcase size={24} /><h4>Diretoria de Receita (CRO as a Service)</h4></div>
              <p className="solution-card-tagline">Injeta liderança C-level para transformar esforço reativo em um sistema de crescimento proativo.</p>
              <div className="solution-body-detailed">
                  <div className="detail-block"><h5>O Gatilho:</h5><ul><li>A receita da empresa depende de 1 ou 2 "vendedores excepcionais" que são impossíveis de replicar.</li><li>O crescimento vem de networking e esforço heroico, não de um processo escalável.</li><li>O CEO é o melhor vendedor e passa mais tempo em reuniões comerciais do que liderando o negócio.</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Atuamos como seu Chief Revenue Officer fracionado. Instalamos a inteligência de mercado, desenhamos o processo, lideramos a execução inicial para modelar a abordagem e implementamos a governança de KPIs. Entregamos um playbook de receita documentado e validado, pronto para ser escalado.</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Um motor de receita previsível e a libertação do CEO das operações comerciais. A empresa passa a crescer com base em um sistema replicável, com metas claras e um processo que pode ser ensinado, medido e otimizado.</p></div>
              </div>
              <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Estruturar minha Liderança</span><ArrowRight size={18} /></Link></div>
            </div>

            {/* Solução 1.3: Sprint */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Rocket size={24} /><h4>Sprint de Validação Comercial</h4></div>
              <p className="solution-card-tagline">Substitui meses de "achismo" por 30 dias de dados de mercado para guiar sua próxima aposta de crescimento.</p>
              <div className="solution-body-detailed">
                  <div className="detail-block"><h5>O Gatilho:</h5><ul><li>A receita estagnou há mais de dois trimestres e as iniciativas atuais não movem o ponteiro.</li><li>Você tem uma nova oferta ou quer entrar em um novo mercado, mas tem medo de "escalar o erro" e queimar caixa.</li><li>As decisões estratégicas são baseadas em intuição e reuniões internas, não em dados reais de campo.</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Um processo focado de 15 ou 30 dias para testar as variáveis mais críticas do seu plano (oferta, ICP, canal, mensagem). Executamos testes de campo com clientes reais para coletar dados, não opiniões. O entregável é uma recomendação clara e baseada em evidências: escalar, pivotar ou abandonar.</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Certeza estratégica. A capacidade de tomar decisões de alto impacto com risco calculado. Você para de gastar tempo e dinheiro em hipóteses e passa a investir em demanda validada pelo mercado.</p></div>
              </div>
              <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Validar minha Hipótese</span><ArrowRight size={18} /></Link></div>
            </div>
            
            {/* Solução 1.4: Advisory Board */}
            <div className="solution-card-detailed">
              <div className="solution-card-header"><Users size={24} /><h4>Advisory Board</h4></div>
              <p className="solution-card-tagline">Injeta visão externa sênior para validar decisões estratégicas de alto impacto.</p>
              <div className="solution-body-detailed">
                  <div className="detail-block"><h5>O Gatilho:</h5><ul><li>Você está diante de uma decisão de alto risco com impacto irreversível no negócio.</li><li>A equipe interna não possui a experiência específica para validar uma hipótese crítica.</li><li>É preciso um "sparring" qualificado para estressar uma estratégia antes de comprometer recursos significativos.</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Atuamos como um conselho estratégico sob demanda. Trazemos nossa experiência em execução para validar e refinar decisões críticas em áreas como entrada em novos mercados, pivôs no modelo de negócio, preparação para rodadas de investimento ou desenho de parcerias estratégicas.</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Decisões mais seguras, rápidas e inteligentes. Reduzimos o risco ao validar hipóteses contra a realidade do mercado, aumentando a probabilidade de sucesso e a confiança da liderança no caminho escolhido.</p></div>
              </div>
               <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Validar Decisão Crítica</span><ArrowRight size={18} /></Link></div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: CAMADA 2 - Construção de Ativos Digitais */}
      <section id="camada-ativos" className="section-solid">
        <div className="container text-center reveal-up">
          <div className="layer-intro">
            <div className="layer-badge"><HardHat size={24} /><span>CAMADA 2</span></div>
            <h2 className="section-title">Construção de Ativos Digitais</h2>
            <p className="lead-text">Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
          </div>
          
          <div className="solutions-column-layout">
              <div className="solution-card-detailed">
                <div className="solution-card-header"><MonitorSmartphone size={24} /><h4>Plataforma de Aceleração de Receita</h4></div>
                <p className="solution-card-tagline">Transforma seu site de uma "brochura digital" em um ativo que educa, qualifica e converte 24/7.</p>
                 <div className="solution-body-detailed">
                  <div className="detail-block"><h5>O Gatilho:</h5><ul><li>Seu site gera tráfego, mas poucos leads qualificados.</li><li>Os leads que chegam não têm contexto, forçando seu time comercial a gastar horas em qualificação básica.</li><li>Seu principal ativo digital não reflete a inteligência e o valor da sua empresa.</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Projetamos e construímos seu principal ativo digital com um foco: receita. É 30% institucional e 70% engenharia de conversão. Cada página, palavra e CTA são desenhados para mover o cliente ideal pela jornada de compra, entregando ao seu time comercial um lead educado e contextualizado.</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Um motor de qualificação e conversão que funciona 24/7. Seu time comercial para de perder tempo com leads frios e passa a ter conversas estratégicas com prospects que já entendem seu valor. O custo de aquisição diminui e a velocidade de fechamento aumenta.</p></div>
              </div>
               <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Acelerar minha Conversão</span><ArrowRight size={18} /></Link></div>
              </div>

              <div className="solution-card-detailed">
                <div className="solution-card-header"><Wrench size={24} /><h4>Ferramentas Estratégicas de Conversão</h4></div>
                <p className="solution-card-tagline">Cria ativos proprietários que tornam o seu valor tangível e aceleram a decisão de compra.</p>
                 <div className="solution-body-detailed">
                  <div className="detail-block"><h5>O Gatilho:</h5><ul><li>O ciclo de vendas é longo porque o cliente tem dificuldade em "visualizar" o ROI da sua solução.</li><li>Cada venda exige uma apresentação customizada e ao vivo, o que limita a escala.</li><li>A objeção "preciso ver funcionando na prática" é constante e difícil de superar.</li></ul></div>
                  <div className="detail-block"><h5>A Solução:</h5><p>Construímos ativos proprietários que se tornam o centro da sua argumentação de valor: calculadoras de ROI, simuladores, matchmakers e diagnósticos. São ferramentas que provam sua autoridade e aceleram a decisão, permitindo que o cliente "sinta" o valor da sua solução por conta própria.</p></div>
                  <div className="detail-block"><h5>O Resultado:</h5><p>Um ciclo de vendas mais curto e uma taxa de conversão mais alta. Seu argumento de vendas se torna escalável, e o cliente chega às reuniões já convencido do valor. Você transforma uma venda complexa em uma decisão óbvia.</p></div>
              </div>
               <div className="solution-cta"><Link href="/contato" className="btn btn-secondary"><span>Tangibilizar meu Valor</span><ArrowRight size={18} /></Link></div>
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
            <div className="section-cta"><Link href="/contato" className="btn btn-secondary"><span>Entender o modelo</span><ArrowRight size={20} /></Link></div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <p className="lead-text" style={{marginBottom: '2rem'}}>Vamos traduzir seu desafio em um plano de ação.</p>
          <div className="section-cta"><Link href="/contato" className="btn btn-primary btn-large"><span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} /></Link></div>
        </div>
      </section>

      {/* CSS para a NOVA ESTRUTURA */}
      <style jsx>{`
        section { padding: 4.5rem 0; }
        .hero-section { padding: 0; }
        
        .layer-intro { margin-bottom: 3rem; text-align: center; } /* Alinhamento Central */
        .layer-badge { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: 8px; font-weight: 600; color: var(--color-primary); margin-bottom: 1.5rem; }
        .decision-block { text-align: center; } /* Alinhamento Central */
        .decision-block .section-cta { margin-top: 2rem; }
        
        .solutions-column-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .solution-card-detailed {
          background-color: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center; /* Alinhamento Central */
          display: flex;
          flex-direction: column;
        }
        
        .solution-card-header { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem; }
        .solution-card-header svg { color: var(--color-primary); flex-shrink: 0; }
        .solution-card-header h4 { font-family: 'Montserrat'; font-size: 1.5rem; color: var(--color-heading); }
        
        .solution-card-tagline { font-size: 1.1rem; color: var(--color-text); margin-bottom: 2rem; }
        
        .solution-body-detailed {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
          text-align: left; /* Listas e parágrafos internos permanecem à esquerda para legibilidade */
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