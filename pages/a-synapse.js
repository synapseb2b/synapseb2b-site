// pages/a-synapse.js (VERSÃO OTIMIZADA E REESTRUTURADA)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Ícones necessários e otimizados para a nova estrutura
import { 
  ArrowRight, ChevronDown, CheckCircle2, Award, Users, BookOpen, GitCommit, 
  Goal, ShieldCheck, BrainCircuit, Star, Brain, Target, TrendingUp, Zap, GitBranch 
} from 'lucide-react';

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
        <title>A Synapse | Nosso Manifesto e Filosofia Operacional</title>
        <meta name="description" content="Nascemos para resolver o Paradoxo de Valor: quando o melhor produto não gera a melhor receita. Conheça nossos princípios e nossa filosofia operacional." />
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
            Empresas B2B não falham por falta de produto. Falham porque genialidade técnica sem clareza estratégica é potencial desperdiçado.
          </p>
          <div className="highlight-box">
            <p className="text-2xl font-bold text-white mb-4">
              A Synapse B2B existe para resolver o Paradoxo de Valor™: quando o melhor produto não gera a melhor receita.
            </p>
            <p>
              Nossa missão é transformar complexidade técnica em receita previsível através de Engenharia de Receita: clareza estratégica + sistema comercial + ativos digitais que convertem.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: Nossos Princípios */}
      <section id="principios" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossos Princípios</h2>
          <p className="lead-text">Como operamos. O que defendemos.</p>
          <div className="principles-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
            <div className="info-card">
              <BrainCircuit className="info-card-icon" />
              <h3 className="info-card-title">1. CLAREZA ANTES DE EXECUÇÃO</h3>
              <p>Não gastamos um real em tática antes de ter clareza estratégica. Arquitetura de Go-To-Market precede ativação de canais. Sempre.</p>
            </div>
            <div className="info-card">
              <GitCommit className="info-card-icon" />
              <h3 className="info-card-title">2. SISTEMA ANTES DE ESFORÇO</h3>
              <p>Crescimento sustentável exige processo replicável. Se o sucesso depende de contratar "vendedores excepcionais", você não tem sistema.</p>
            </div>
            <div className="info-card">
              <ShieldCheck className="info-card-icon" />
              <h3 className="info-card-title">3. PROVA ANTES DE PROMESSA</h3>
              <p>Validamos hipóteses com dados de campo antes de escalar. Não vendemos esperança. Entregamos sistema validado.</p>
            </div>
            <div className="info-card">
              <Users className="info-card-icon" />
              <h3 className="info-card-title">4. PARCERIA ANTES DE VENDA</h3>
              <p>Nosso modelo é Give First + Skin in the Game. Seu resultado é nosso resultado. Alinhamento total de incentivos.</p>
            </div>
            <div className="info-card">
              <Goal className="info-card-icon" />
              <h3 className="info-card-title">5. EXECUÇÃO ANTES DE CONSULTORIA</h3>
              <p>Não entregamos slides. Executamos na linha de frente e entregamos um playbook pronto para operar, não uma dependência permanente.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>
      
      {/* Bloco 3: Filosofia Operacional (NOVO BLOCO) */}
      <section id="filosofia" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center">
            <h2 className="section-title">Nossa Filosofia Operacional</h2>
            <p className="lead-text">O sistema que nos diferencia e garante o seu resultado.</p>
          </div>
          <div className="card-grid-three" style={{alignItems: 'start'}}>
            <div className="info-card text-center">
              <Zap className="info-card-icon" />
              <h3 className="info-card-title">Give First + Skin in the Game</h3>
              <p>Começamos com uma Ativação Estratégica para provar valor rápido. O maior volume do investimento vem de Receita Nova gerada pelo projeto. Não ganhamos se você não ganhar.</p>
            </div>
            <div className="info-card text-center">
              <GitBranch className="info-card-icon" />
              <h3 className="info-card-title">Dual-Track Revenue</h3>
              <p>Discovery (validação) e Delivery (execução) acontecem em paralelo. Aprendizado de campo alimenta a execução. Execução valida o aprendizado. Ciclos rápidos que garantem que não escalamos um problema.</p>
            </div>
            <div className="info-card text-center">
              <Users className="info-card-icon" />
              <h3 className="info-card-title">Playbook, Não Dependência</h3>
              <p>Nosso objetivo final é que você opere o sistema sem nós. Entregamos processos, scripts, KPIs e um playbook validado para construir sua capacidade interna, não uma dependência externa.</p>
            </div>
          </div>
          <div className="decision-block" style={{marginTop: '4rem', borderColor: 'var(--color-accent)'}}>
            <div style={{textAlign: 'center'}}>
              <Brain size={40} style={{color: 'var(--color-accent)', marginBottom: '1rem'}}/>
              <h3 style={{fontSize: '1.8rem'}}>Cortex GTM™: Nosso Sistema Operacional</h3>
              <p style={{fontSize: '1.1rem'}}>
                É o nosso sistema proprietário de orquestração estratégica. Ele integra cinco lentes críticas (Fundador, Comprador, Receita, Neurociência e Andragogia) para traduzir sua genialidade técnica em uma Engenharia de Receita completa e coerente.
              </p>
            </div>
            <AccordionItem 
              title="Fundamentado nos maiores frameworks globais"
              isOpen={openAccordion === 'frameworks'} 
              onClick={() => setOpenAccordion(openAccordion === 'frameworks' ? null : 'frameworks')}
            >
              <div className="frameworks-grid">
                <div>
                  <strong>Engenharia de Go-To-Market:</strong>
                  <ul>
                    <li>Challenger Sale</li>
                    <li>Strategic Narrative</li>
                    <li>Category Design</li>
                  </ul>
                </div>
                <div>
                  <strong>Ciência do Comportamento:</strong>
                  <ul>
                    <li>Neurociência Aplicada</li>
                    <li>Jobs-to-be-Done (JTBD)</li>
                    <li>Buyer Enablement</li>
                  </ul>
                </div>
                <div>
                  <strong>Orquestração de Escala:</strong>
                  <ul>
                    <li>Science of Scaling</li>
                    <li>Founder-Led Growth</li>
                    <li>Value Disciplines</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Depoimentos (com nomes corrigidos) */}
       <section id="depoimentos" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <div className="card-grid-two">
            <div className="testimonial-card">
              <p className="testimonial-quote">"A Synapse B2B não apenas traduziu nossa complexidade técnica. Eles nos ajudaram a entender nosso próprio valor de uma forma que nunca havíamos conseguido articular. O Cortex GTM™ conectou nossa paixão com a linguagem que hospitais e investidores precisavam ouvir."</p>
              <div className="testimonial-author">
                {/* Imagem pode ser adicionada aqui se disponível */}
                <div>
                  <p className="author-name">Isabella Caetano</p>
                  <p className="author-company">CEO & Founder - Versão Holística</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"Fomos de 100% dependência de indicação para motor de geração de demanda estruturado. Júlio não entregou consultoria. Ele fundou nossa Diretoria de Receita, executou na linha de frente e nos entregou um playbook validado. Agora temos um sistema."</p>
               <div className="testimonial-author">
                {/* Imagem pode ser adicionada aqui se disponível */}
                <div>
                  <p className="author-name">Fabrício Firmo</p>
                  <p className="author-company">CEO - Exclusiva Engenharias</p>
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
           <p className="lead-text">Sucesso não é fechar um contrato. Sucesso é você operar o sistema sem nós.</p>
           <div className="success-grid">
              <p><CheckCircle2 /> Entende sua proposta de valor melhor do que nós.</p>
              <p><CheckCircle2 /> Executa o playbook sem precisar nos ligar.</p>
              <p><CheckCircle2 /> Contrata um vendedor que performa desde o primeiro mês.</p>
              <p><CheckCircle2 /> Projeta a receita com 80% de acurácia.</p>
              <p><CheckCircle2 /> Toma decisões comerciais com total confiança.</p>
           </div>
           <p className="lead-text mt-4">Aí sim, nós cumprimos nossa missão.</p>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Vamos conversar sobre o seu sistema de receita?</h2>
           <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico em 21min</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text">Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Apenas clareza.</p>
        </div>
      </section>

      <style jsx>{`
        .frameworks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 1.5rem;
          text-align: left;
        }
        .frameworks-grid strong {
          color: var(--color-heading);
        }
        .frameworks-grid ul {
          list-style: none;
          padding: 0;
          margin-top: 0.5rem;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}