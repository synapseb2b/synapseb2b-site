// pages/a-synapse.js (REFATORADO - SIMPLES, DIRETO E CONSISTENTE)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronDown, CheckCircle2, BrainCircuit, GitCommit, 
  ShieldCheck, Users, Goal, Zap, GitBranch, Brain, Eye
} from 'lucide-react';

// Componente Acordeão Reutilizável
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
        <title>A Synapse | Nossa Filosofia e Princípios Operacionais</title>
        <meta name="description" content="Conheça a filosofia operacional da Synapse B2B. Resolvemos o Paradoxo de Valor: quando o melhor produto não gera a melhor receita." />
      </Head>

      {/* ========================================================================
          BLOCO 1: HERO SECTION - PADRÃO CONSISTENTE COM INDEX.JS
          ======================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <h1 className="section-title">Por que a Synapse B2B existe</h1>
            <p className="hero-subheadline wider-on-desktop">
              Genialidade técnica sem clareza estratégica é potencial desperdiçado. Empresas B2B não falham por falta de produto. Falham por falta de sistema de receita.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary">
                <span>Agendar Diagnóstico</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/cases" className="btn btn-secondary">
                <span>Ver Cases</span>
                <Eye size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ========================================================================
          BLOCO 2: O PARADOXO DE VALOR™
          ======================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Paradoxo de Valor™</h2>
          <p className="lead-text">A verdade que a maioria das empresas B2B não quer admitir</p>
          
          <div className="paradox-box" style={{
            marginTop: '3rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.05), rgba(56, 197, 177, 0.03))',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <p style={{fontSize: '1.3rem', color: 'var(--color-heading)', marginBottom: '1.5rem', fontWeight: 600}}>
              O mercado não compra o melhor produto.
            </p>
            <p style={{fontSize: '1.3rem', color: 'var(--color-accent)', marginBottom: '1.5rem', fontWeight: 600}}>
              O mercado compra a mensagem que passa no filtro da mente do comprador.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.8'}}>
              Quando sua genialidade técnica não se traduz em clareza estratégica, você perde. Não porque seu produto não funciona. Mas porque o cérebro do seu comprador não consegue processar o valor que você oferece.
            </p>
          </div>

          <p style={{marginTop: '3rem', fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.8'}}>
            <strong>A Synapse B2B existe para resolver isso.</strong> Traduzimos complexidade técnica em receita previsível através de Engenharia de Receita: clareza estratégica + sistema comercial + ativos digitais que convertem.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ========================================================================
          BLOCO 3: NOSSOS PRINCÍPIOS
          ======================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossos Princípios Operacionais</h2>
          <p className="lead-text">Como operamos. O que defendemos.</p>

          <div className="principles-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div className="info-card">
              <BrainCircuit className="info-card-icon" />
              <h3 className="info-card-title">Clareza Antes de Execução</h3>
              <p>Não gastamos um real em tática antes de ter clareza estratégica. Arquitetura de Go-To-Market precede ativação de canais. Sempre.</p>
            </div>
            <div className="info-card">
              <GitCommit className="info-card-icon" />
              <h3 className="info-card-title">Sistema Antes de Esforço</h3>
              <p>Crescimento sustentável exige processo replicável. Se o sucesso depende de contratar "vendedores excepcionais", você não tem sistema.</p>
            </div>
            <div className="info-card">
              <ShieldCheck className="info-card-icon" />
              <h3 className="info-card-title">Prova Antes de Promessa</h3>
              <p>Validamos hipóteses com dados de campo antes de escalar. Não vendemos esperança. Entregamos sistema validado.</p>
            </div>
            <div className="info-card">
              <Users className="info-card-icon" />
              <h3 className="info-card-title">Parceria Antes de Venda</h3>
              <p>Nosso modelo é Give First + Skin in the Game. Seu resultado é nosso resultado. Alinhamento total de incentivos.</p>
            </div>
            <div className="info-card">
              <Goal className="info-card-icon" />
              <h3 className="info-card-title">Execução Antes de Consultoria</h3>
              <p>Não entregamos slides. Executamos na linha de frente e entregamos um playbook pronto para operar, não uma dependência permanente.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ========================================================================
          BLOCO 4: NOSSA FILOSOFIA OPERACIONAL
          ======================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="section-title">Nossa Filosofia Operacional</h2>
            <p className="lead-text">O sistema que nos diferencia e garante o seu resultado</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div className="info-card">
              <Zap className="info-card-icon" />
              <h3 className="info-card-title">Give First + Skin in the Game</h3>
              <p>Começamos com uma Ativação Estratégica para provar valor rápido. O maior volume do investimento vem de Receita Nova gerada. Não ganhamos se você não ganhar.</p>
            </div>
            <div className="info-card">
              <GitBranch className="info-card-icon" />
              <h3 className="info-card-title">Dual-Track Revenue</h3>
              <p>Discovery e Delivery acontecem em paralelo. Aprendizado de campo alimenta a execução. Ciclos rápidos garantem que não escalamos um problema.</p>
            </div>
            <div className="info-card">
              <Users className="info-card-icon" />
              <h3 className="info-card-title">Playbook, Não Dependência</h3>
              <p>Nosso objetivo final é que você opere o sistema sem nós. Entregamos processos, scripts, KPIs e um playbook validado para sua capacidade interna.</p>
            </div>
          </div>

          {/* Cortex GTM™ */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 132, 0.08), rgba(56, 197, 177, 0.03))',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.5rem'}}>
              <Brain size={48} style={{color: 'var(--color-primary)'}} />
            </div>
            <h3 style={{fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', fontWeight: 700}}>
              Cortex GTM™: Nosso Sistema Operacional
            </h3>
            <p style={{fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '2rem'}}>
              É nosso sistema proprietário de orquestração estratégica. Integra cinco lentes críticas (Fundador, Comprador, Receita, Neurociência e Andragogia) para traduzir sua genialidade técnica em uma Engenharia de Receita completa e coerente.
            </p>

            <AccordionItem 
              title="Fundamentado nos maiores frameworks globais"
              isOpen={openAccordion === 'frameworks'} 
              onClick={() => setOpenAccordion(openAccordion === 'frameworks' ? null : 'frameworks')}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                marginTop: '1.5rem',
                textAlign: 'left'
              }}>
                <div>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.75rem'}}>Engenharia de Go-To-Market</strong>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0, opacity: 0.9}}>
                    <li>• Challenger Sale</li>
                    <li>• Strategic Narrative</li>
                    <li>• Category Design</li>
                  </ul>
                </div>
                <div>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.75rem'}}>Ciência do Comportamento</strong>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0, opacity: 0.9}}>
                    <li>• Neurociência Aplicada</li>
                    <li>• Jobs-to-be-Done (JTBD)</li>
                    <li>• Buyer Enablement</li>
                  </ul>
                </div>
                <div>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.75rem'}}>Orquestração de Escala</strong>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0, opacity: 0.9}}>
                    <li>• Science of Scaling</li>
                    <li>• Founder-Led Growth</li>
                    <li>• Value Disciplines</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ========================================================================
          BLOCO 5: DEPOIMENTOS
          ======================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              background: 'rgba(10, 10, 10, 0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic'}}>
                "A Synapse B2B não apenas traduziu nossa complexidade técnica. Eles nos ajudaram a entender nosso próprio valor de uma forma que nunca havíamos conseguido articular. O Cortex GTM™ conectou nossa paixão com a linguagem que hospitais precisavam ouvir."
              </p>
              <div>
                <p style={{color: 'var(--color-heading)', fontWeight: 600, marginBottom: '0.25rem'}}>Isabella Caetano</p>
                <p style={{color: 'var(--color-accent)', fontSize: '0.95rem'}}>CEO & Founder - Versão Holística</p>
              </div>
            </div>

            <div style={{
              background: 'rgba(10, 10, 10, 0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic'}}>
                "Fomos de 100% dependência de indicação para motor de geração de demanda estruturado. Júlio não entregou consultoria. Ele fundou nossa Diretoria de Receita e nos entregou um playbook validado. Agora temos um sistema."
              </p>
              <div>
                <p style={{color: 'var(--color-heading)', fontWeight: 600, marginBottom: '0.25rem'}}>Fabrício Firmo</p>
                <p style={{color: 'var(--color-accent)', fontSize: '0.95rem'}}>CEO - Exclusiva Engenharias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ========================================================================
          BLOCO 6: NOSSA DEFINIÇÃO DE SUCESSO
          ======================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nossa Definição de Sucesso</h2>
          <p className="lead-text">Sucesso não é fechar um contrato. Sucesso é você operar o sistema sem nós.</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <div style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <CheckCircle2 size={32} style={{color: 'var(--color-primary)'}} />
              </div>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)'}}>Entende sua proposta de valor melhor do que nós</p>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <CheckCircle2 size={32} style={{color: 'var(--color-primary)'}} />
              </div>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)'}}>Executa o playbook sem precisar nos ligar</p>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <CheckCircle2 size={32} style={{color: 'var(--color-primary)'}} />
              </div>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)'}}>Contrata um vendedor que performa desde o primeiro mês</p>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <CheckCircle2 size={32} style={{color: 'var(--color-primary)'}} />
              </div>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)'}}>Projeta a receita com 80% de acurácia</p>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                <CheckCircle2 size={32} style={{color: 'var(--color-primary)'}} />
              </div>
              <p style={{fontSize: '1.05rem', color: 'var(--color-text)'}}>Toma decisões comerciais com total confiança</p>
            </div>
          </div>

          <p style={{marginTop: '3rem', fontSize: '1.1rem', color: 'var(--color-text)', fontWeight: 600}}>
            Aí sim, nós cumprimos nossa missão.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ========================================================================
          BLOCO 7: CTA FINAL
          ======================================================================== */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Vamos conversar sobre o seu sistema de receita?</h2>
          <p className="lead-text">Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Apenas clareza.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
