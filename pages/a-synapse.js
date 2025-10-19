import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Ícones necessários para esta página
import { ArrowRight, ChevronDown, CheckCircle2, Award, Users, BookOpen, GitBranch, ShieldCheck, Handshake, BrainCircuit, Goal, Star, Brain, GitCommit, Target, TrendingUp } from 'lucide-react';

// Reutilizando o componente AccordionItem
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ASynapsePage() {
  const [openAccordion, setOpenAccordion] = useState(null);

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
        <title>A Synapse | Engenharia de Receita B2B</title>
        <meta name="description" content="Nossa missão é transformar complexidade técnica em receita previsível através de clareza estratégica, sistema comercial e ativos digitais que convertem." />
      </Head>

      {/* Bloco 1: Hero - Manifesto */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Por que a Synapse B2B existe</h1>
          <p className="lead-text">
            [cite_start]Empresas B2B não falham por falta de produto. Falham porque genialidade técnica sem clareza estratégica é potencial desperdiçado. [cite: 291]
          </p>
          <div className="highlight-box">
            <p className="text-2xl font-bold text-white mb-4">
              [cite_start]A Synapse B2B existe para resolver o Paradoxo de Valor™: quando o melhor produto não gera a melhor receita. [cite: 292]
            </p>
            <p>
              [cite_start]Nossa missão é transformar complexidade técnica em receita previsível através de Engenharia de Receita: clareza estratégica + sistema comercial + ativos digitais que convertem. [cite: 293]
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: Founder Story */}
      <section id="founder" className="section-solid">
        <div className="container reveal-up">
          <div className="founder-grid">
            <div className="founder-image-container">
              {/* Substituir pelo caminho da imagem real */}
              <Image src="/images/julio-figueiredo.jpg" alt="Júlio Figueiredo, Founder & CRO da Synapse B2B" width={400} height={400} className="founder-image" />
            </div>
            <div className="founder-text-container">
              <h2 className="founder-name">JÚLIO FIGUEIREDO</h2>
              <p className="founder-title">Founder & Chief Revenue Officer</p>
              [cite_start]<p className="founder-quote">"Minha paixão é arquitetar o futuro da Engenharia de Receita B2B." [cite: 297]</p>
              [cite_start]<p>Minha trajetória foi forjada na linha de frente de vendas complexas em ecossistemas como Google, Microsoft, Dell e TOTVS, não como um técnico que vende tecnologia, mas como um estrategista que sabe transformar visão em receita. [cite: 298, 299]</p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>GOOGLE (4 anos)</h3>
                [cite_start]<p>Expansão que gerou <strong>+200% em novos clientes</strong> e +300% no faturamento de contas estratégicas. [cite: 301]</p>
                [cite_start]<p className="timeline-learning"><strong>Aprendizado validado:</strong> É possível escalar vendas complexas com método e execução disciplinada, não apenas com esforço heroico. [cite: 303]</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>TOTVS (7 anos)</h3>
                [cite_start]<p>De assistente a <strong>sócio da franquia em apenas 2 anos</strong>. [cite: 306]</p>
                <p className="timeline-learning"><strong>Aprendizado validado:</strong> Crescimento acelerado é resultado de método replicável. [cite_start]Quando se codifica o instinto em processo, qualquer pessoa mediana executa com excelência. [cite: 308, 309]</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>MICROSOFT, DELL & OUTROS</h3>
                [cite_start]<p>Décadas de imersão em vendas B2B de alta complexidade. [cite: 311]</p>
                <p className="timeline-learning"><strong>Aprendizado validado:</strong> B2B complexo é estratégico. [cite_start]Exige entender o problema de negócio que o produto resolve e como articular isso para múltiplos decisores. [cite: 313, 314]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Nossos Princípios */}
      <section id="principios" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossos Princípios</h2>
          <p className="lead-text">Como operamos. [cite_start]O que defendemos. [cite: 323]</p>
          <div className="principles-grid">
            <div className="info-card">
              <BrainCircuit className="info-card-icon" />
              <h3 className="info-card-title">1. CLAREZA ANTES DE EXECUÇÃO</h3>
              <p>Não gastamos um real em tática antes de ter clareza estratégica. Arquitetura de Go-To-Market precede ativação de canais. [cite_start]Sempre. [cite: 325, 326]</p>
            </div>
            <div className="info-card">
              <GitCommit className="info-card-icon" />
              <h3 className="info-card-title">2. SISTEMA ANTES DE ESFORÇO</h3>
              <p>Crescimento sustentável exige processo replicável. [cite_start]Se o sucesso depende de contratar "vendedores excepcionais", você não tem sistema. [cite: 328, 329]</p>
            </div>
            <div className="info-card">
              <ShieldCheck className="info-card-icon" />
              <h3 className="info-card-title">3. PROVA ANTES DE PROMESSA</h3>
              <p>Validamos hipóteses com dados de campo antes de escalar. Não vendemos esperança. [cite_start]Entregamos sistema validado. [cite: 332, 333]</p>
            </div>
            <div className="info-card">
              <Handshake className="info-card-icon" />
              <h3 className="info-card-title">4. PARCERIA ANTES DE VENDA</h3>
              <p>Nosso modelo é Give First + Skin in the Game. Seu resultado é nosso resultado. [cite_start]Alinhamento total de incentivos. [cite: 335, 336, 337]</p>
            </div>
             <div className="info-card">
              <Goal className="info-card-icon" />
              <h3 className="info-card-title">5. EXECUÇÃO ANTES DE CONSULTORIA</h3>
              <p>Não entregamos slides. [cite_start]Executamos na linha de frente e entregamos um playbook pronto para operar, não uma dependência permanente. [cite: 339, 340, 341]</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Depoimentos */}
       <section id="depoimentos" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <div className="card-grid-two">
            <div className="testimonial-card">
              [cite_start]<p className="testimonial-quote">"A Synapse B2B não apenas traduziu nossa complexidade técnica. Eles nos ajudaram a entender nosso próprio valor de uma forma que nunca havíamos conseguido articular." [cite: 418]</p>
              <div className="testimonial-author">
                {/* <Image src="/images/isabella-caetano.jpg" alt="Isabella Caetano" width={60} height={60} className="author-image" /> */}
                <div>
                  [cite_start]<p className="author-name">Isabella Caetano [cite: 416]</p>
                  [cite_start]<p className="author-company">CEO & Founder - Versão Holística [cite: 417]</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              [cite_start]<p className="testimonial-quote">"Fomos de 100% dependência de indicação para motor de geração de demanda estruturado. Júlio não entregou consultoria. Ele fundou nossa Diretoria de Receita e nos entregou um playbook validado." [cite: 423, 424]</p>
               <div className="testimonial-author">
                {/* <Image src="/images/fabricio-firmo.jpg" alt="Fabrício Firmo" width={60} height={60} className="author-image" /> */}
                <div>
                  [cite_start]<p className="author-name">Fabrício Firmo [cite: 421]</p>
                  [cite_start]<p className="author-company">CEO - Exclusiva Engenharias [cite: 422]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>
      
       {/* Bloco 5: Definição de Sucesso */}
      <section id="sucesso" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossa Definição de Sucesso</h2>
           <p className="lead-text">Sucesso não é fechar contrato. [cite_start]Sucesso é você operar o sistema sem nós. [cite: 427]</p>
           <div className="success-grid">
              [cite_start]<p><CheckCircle2 /> Entende sua proposta de valor melhor do que nós [cite: 429]</p>
              [cite_start]<p><CheckCircle2 /> Executa o playbook sem precisar nos ligar [cite: 430]</p>
              [cite_start]<p><CheckCircle2 /> Contrata vendedor que performa desde o primeiro mês [cite: 431]</p>
              [cite_start]<p><CheckCircle2 /> Projeta receita com 80% de acurácia [cite: 432]</p>
              [cite_start]<p><CheckCircle2 /> Toma decisões comerciais com confiança [cite: 433]</p>
           </div>
           [cite_start]<p className="lead-text mt-4">Aí sim, nós cumprimos nossa missão. [cite: 434]</p>
        </div>
      </section>

       <div className="section-divider-glow"></div>

      {/* Bloco 6: Por que "Synapse"? */}
       <section id="porque-synapse" className="section-solid">
         <div className="container text-center reveal-up">
            <div className="decision-block">
              <h3>POR QUE "SYNAPSE"?</h3>
              <p className="decision-highlight">Synapse = Sinapse. [cite_start]A conexão que transmite informação e permite aprendizado. [cite: 436]</p>
              <p>
                [cite_start]Somos a sinapse entre o que você é capaz de entregar e o que o mercado está disposto a pagar. [cite: 443]
              </p>
              <div className="connections-grid">
                <span>Seu potencial técnico</span><ArrowRight /><span>Receita previsível</span>
                <span>Sua complexidade</span><ArrowRight /><span>Clareza que converte</span>
                <span>Seu instinto</span><ArrowRight /><span>Sistema replicável</span>
              </div>
            </div>
         </div>
       </section>
      
      {/* Bloco 7: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Quer conhecer mais?</h2>
          <p className="cta-support-text">Explore nosso trabalho ou vamos conversar:</p>
          <div className="hero-ctas mt-4">
            <Link href="/como-trabalhamos" className="btn btn-secondary">
              <span>Como Trabalhamos</span>
            </Link>
            <Link href="/cases" className="btn btn-secondary">
              <span>Cases de Transformação</span>
            </Link>
          </div>
           <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico em 21min</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text">Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. [cite_start]Sem proposta genérica. [cite: 451]</p>
        </div>
      </section>
    </>
  );
}