// pages/index.js
// Versão Limpa: Usa 100% do CSS Global + Layouts Padronizados e Centralizados

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem, Layout, MonitorSmartphone, Box } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Empresas B2B</title>
        <meta name="description" content="Transformamos crescimento por indicação em receita previsível. O método que tira sua empresa do improviso e coloca você no controle." />
      </Head>

      {/* ====================================================================== */}
      {/* Seção 1: Hero Section (Full Height na Home)                            */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          
          <h1 className="hero-headline">
            Engenharia de Receita para Empresas B2B
            <br/>
            que Precisam de Crescimento Previsível
          </h1>
          
          <p className="hero-subheadline lead-text">
            Transformamos operações comerciais dependentes de improviso e esforço manual em máquinas de receita previsível. Instalamos o método completo — da estratégia à execução — para sua empresa escalar com governança.
          </p>
          
          <div className="hero-ctas" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/a-engenharia" className="btn">
              <span>Conhecer a Engenharia de Receita</span>
            </Link>
          </div>

          {/* Barra de Confiança */}
          <div className="trust-bar reveal-up">
            <p style={{marginBottom: '2rem', fontSize: '1rem', opacity: 0.8}}>Método forjado em ecossistemas de alta performance:</p>
            <div className="trust-bar-logos">
              <div className="trust-logo"><Image src="/logo/logo-google.png" alt="Google" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-microsoft.png" alt="Microsoft" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-dell.png" alt="Dell" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-totvs.png" alt="TOTVS" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-keepit.png" alt="Keepit" width={100} height={32} objectFit="contain" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 2: O Diagnóstico Rápido (Sintomas)                             */}
      {/* ====================================================================== */}
      <section id="sintomas" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Você reconhece estes sintomas?</h2>
          
          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <h3 className="truth-card-title">1. Esforço Máximo, Resultado Instável</h3>
              <p>Você contrata ferramentas, testa canais e exige mais do time, mas o ponteiro não move na mesma proporção. O mercado não percebe seu valor real.</p>
            </div>
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">2. Investimento Sem Rastreabilidade</h3>
              <p>Você assina os cheques de marketing e vendas, mas não sabe dizer qual real investido trouxe o contrato assinado. Eficiência cai ao escalar.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">3. Dependência de "Talento"</h3>
              <p>O faturamento depende da performance individual de vendedores sêniores. Se eles saírem, a receita cai. Falta um playbook validado.</p>
            </div>
          </div>

          <p className="lead-text" style={{ marginTop: '4rem', fontStyle: 'italic', color: 'var(--color-heading)' }}>
            Você não precisa de mais vendedores. Você precisa de um sistema de vendas.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 3: A Engenharia de Receita (Os 4 Pilares)                      */}
      {/* ====================================================================== */}
      <section id="engenharia-de-receita" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">O Método: Os 4 Pilares</h2>
          <p className="lead-text">
            A estrutura necessária para transformar vendas complexas em processo repetível.
          </p>
          
          {/* Grid agora controlado pelo CSS Global */}
          <div className="pillar-grid-revolutionary">
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Gem size={32} /></div>
              <h3 className="pillar-card-title">Clareza de Valor</h3>
              <p className="pillar-card-description">Decodificamos sua competência técnica em autoridade de mercado. Seu cliente ideal precisa entender o impacto financeiro em 30 segundos.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><GitBranch size={32} /></div>
              <h3 className="pillar-card-title">Arquitetura Comercial</h3>
              <p className="pillar-card-description">O blueprint do seu motor de receita. Definimos processos, canais e rituais para que a meta seja batida pelo processo, não pelo heroísmo.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title">Governança de Execução</h3>
              <p className="pillar-card-description">Atuamos com liderança sênior na linha de frente para garantir que o playbook seja seguido e a cultura de alta performance seja instalada.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Layers size={32} /></div>
              <h3 className="pillar-card-title">Ativos que Convertem</h3>
              <p className="pillar-card-description">Transformamos sua presença digital em ferramenta de vendas 24/7. Educamos o comprador e provamos valor antes da primeira reunião.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 4: Soluções (Padronizadas e Centralizadas)                     */}
      {/* ====================================================================== */}
      <section id="solucoes" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Como podemos atuar?</h2>
          <p className="lead-text">Do diagnóstico estratégico à gestão interina.</p>

          {/* --- FRENTE 1 --- */}
          <div style={{marginBottom: '6rem', width: '100%'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="pillar-icon-wrapper"><Brain size={40} /></div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Pilar 1: Inteligência & Estratégia</h3>
            </div>
            
            <div className="solutions-grid-revolutionary">
               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper"><Zap size={32} /></div>
                  <h3 className="pillar-card-title">Sprint de Validação</h3>
                  <p>Validação de mercado baseada em dados. Testamos a aderência da tese antes de escalar custos.</p>
                  <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="btn">
                     Agendar
                  </Link>
               </div>

               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper"><Target size={32} /></div>
                  <h3 className="pillar-card-title">GTM Completo</h3>
                  <p>Arquitetura de Receita completa. Do ICP à Retenção para garantir crescimento sistêmico.</p>
                  <Link href="/pilares/inteligencia-e-estrategia/gtm-completo" className="btn">
                    Ver mais
                  </Link>
               </div>

               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper"><Users size={32} /></div>
                  <h3 className="pillar-card-title">CRO as a Service</h3>
                  <p>Liderança executiva fracionada. Governança de C-Level para liderar a construção da máquina.</p>
                  <Link href="/pilares/inteligencia-e-estrategia/cro-service" className="btn">
                    Entender
                  </Link>
               </div>

               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
                  <h3 className="pillar-card-title">Advisory Board</h3>
                  <p>Sparring executivo para decisões estratégicas de alto impacto e eficiência de capital.</p>
                  <Link href="/pilares/inteligencia-e-estrategia/advisory-board" className="btn">
                    Solicitar Board
                  </Link>
               </div>
            </div>
          </div>

          {/* --- FRENTE 2 --- */}
          <div style={{marginBottom: '6rem', width: '100%'}}>
             <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div className="pillar-icon-wrapper"><MonitorSmartphone size={40} /></div>
                <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Pilar 2: Ativos Digitais</h3>
             </div>
             
             <div className="solutions-grid-revolutionary">
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper"><Layout size={32} /></div>
                   <h3 className="pillar-card-title">Plataformas Digitais</h3>
                   <p>Sites como Revenue Hubs. Filtros de qualificação técnica que geram oportunidades maduras 24/7.</p>
                   <Link href="/pilares/ativos-digitais/plataformas-digitais" className="btn">
                     Ver exemplos
                   </Link>
                </div>

                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper"><TrendingUp size={32} /></div>
                   <h3 className="pillar-card-title">Ferramentas de Aceleração</h3>
                   <p>CRMs e calculadoras que materializam a promessa da marca e aceleram o ciclo de vendas.</p>
                   <Link href="/pilares/ativos-digitais/apps" className="btn">
                     Explorar
                   </Link>
                </div>
             </div>
          </div>

          {/* --- FRENTE 3 --- */}
          <div style={{marginBottom: '2rem', width: '100%'}}>
             <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div className="pillar-icon-wrapper"><Box size={40} /></div>
                <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Pilar 3: Soluções Verticais</h3>
             </div>
             
             <div className="solutions-grid-revolutionary">
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper"><CheckCircle2 size={32} /></div>
                   <h3 className="pillar-card-title">Cortex B2B™</h3>
                   <p>Raio-X da maturidade do negócio. Identificamos o Gap de Execução e alavancas de crescimento.</p>
                   <Link href="/pilares/solucoes-verticais/cortex-b2b" className="btn">
                     Conhecer
                   </Link>
                </div>

                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper"><Zap size={32} /></div>
                   <h3 className="pillar-card-title">Match Maker B2B</h3>
                   <p>Inteligência de conexões. Transforma networking aleatório em matching estratégico.</p>
                   <Link href="/pilares/solucoes-verticais/match-maker" className="btn">
                     Agendar Demo
                   </Link>
                </div>

                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper"><Target size={32} /></div>
                   <h3 className="pillar-card-title">Health Business Arch.™</h3>
                   <p>Engenharia de receita para saúde. Converta autoridade clínica em ecossistema escalável.</p>
                   <Link href="/pilares/solucoes-verticais/hba" className="btn">
                     Ativar Receitas
                   </Link>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 5: Cases de Sucesso (Centralizados)                            */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Da Complexidade à Tração</h2>
          
          <div className="case-grid">
            
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><Award size={32} /></div>
               <h3 className="case-card-title">Versão Holística</h3>
               <p><strong>R$ 500k captados.</strong> Reestruturação do GTM e tradução da oferta para "CareOps".</p>
               <Link href="/cases/versao-holistica" className="btn">Ver Case</Link>
            </div>

            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><GitBranch size={32} /></div>
               <h3 className="case-card-title">Exclusiva Engenharias</h3>
               <p><strong>Forecast Recorde.</strong> Máquina de vendas Outbound e posicionamento de continuidade operacional.</p>
               <Link href="/cases/exclusiva-engenharias" className="btn">Ver Case</Link>
            </div>

            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
               <h3 className="case-card-title">AORKIA</h3>
               <p><strong>Zero ao Playbook.</strong> Conquista de grande conta (1.200 usuários) em apenas 45 dias.</p>
               <Link href="/cases/aorkia" className="btn">Ver Case</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 6: Princípio Unificador                                        */}
      {/* ====================================================================== */}
      <section id="principio" className="section-solid">
        <div className="container reveal-up">
          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="pillar-icon-wrapper">
              <LineChart size={32} />
            </div>
            <h3>O Que Une Esses Resultados?</h3>
            <p>Eles deixaram de vender "horas" ou "produtos" para vender <strong>resultados de negócio</strong>.</p>
            <p>Trocaram a intuição pela <strong>metodologia</strong>.</p>
            <div style={{marginTop: '2rem'}}>
              <Link href="/a-engenharia" className="btn">
                <span>Conhecer Nossa Tese</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 7: CTA Final                                                   */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="container reveal-up">
          <h2 className="section-title">
            Sua empresa está pronta para o próximo nível?
          </h2>
          <p className="lead-text">
            Se você fatura e sente que sua operação comercial é o gargalo, nós temos o método para destravar.
          </p>
          <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
            <span>Agende um Diagnóstico Executivo</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ESTILOS MÍNIMOS RESTANTES (Apenas Layout Específico que não vale a pena por no Global) */}
      <style jsx>{`
        .trust-bar {
          width: 100%;
          max-width: 900px;
          margin-top: 6rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        .trust-bar-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          opacity: 0.6;
          filter: grayscale(100%) contrast(50%);
        }
        .trust-logo {
            flex: 0 0 auto;
        }

        /* Ajuste Responsivo */
        @media (max-width: 768px) {
          .trust-bar-logos { gap: 2rem; }
        }
      `}</style>
    </>
  );
}