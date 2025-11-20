// pages/solucoes/match-maker.js
// Versão Final: Design Premium (Receita Exata) + Alinhamento Central Rigoroso + Copy Intacta

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Users, Zap, TrendingUp, CheckCircle2, Target, Clock } from 'lucide-react';

export default function MatchMakerB2B() {
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
        <title>Match-Maker B2B | Synapse B2B</title>
        <meta name="description" content="Plataforma multi-tenant de inteligência de conexões que elimina networking aleatório com matching estratégico baseado em dados." />
      </Head>

      {/* ====================================================================== */}
      {/* Hero Section                                                         */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), #000)'}}></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <Users size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="section-title">Match-Maker B2B</h1>
          <p className="hero-subheadline" style={{textAlign: 'center'}}>
            Transforma caos relacional em inteligência de conexão. Matching em 10 segundos, baseado em dados estruturados.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Problema (Design Premium + Centralizado)                           */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container text-center reveal-up">
          <h2 className="section-title">Networking aleatório não gera resultados previsíveis.</h2>
          <p className="lead-text" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center'}}>
            Comunidades, grupos de WhatsApp, planilhas compartilhadas: riqueza invisível porque ninguém sabe quem pode ajudar quem.
          </p>
          
          <div className="truths-grid-revolutionary" style={{gap: '2rem'}}>
            
            <div className="glass-card-premium">
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>1.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Informação dispersa</h3>
              <p style={{textAlign: 'center'}}>Grupos com 200+ pessoas. Competências valiosas perdidas em conversas assíncronas. Zero capacidade de confluência estratégica.</p>
            </div>
            
            <div className="glass-card-premium">
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>2.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Decisão cognitivamente cara</h3>
              <p style={{textAlign: 'center'}}>"Alguém conhece um designer especializado em SaaS?" → 47 mensagens depois, ninguém sabe se a conexão é boa. Energia desperdiçada.</p>
            </div>

            <div className="glass-card-premium">
              <span className="truth-card-number" style={{margin: '0 auto 1rem'}}>3.</span>
              <h3 className="truth-card-title" style={{textAlign: 'center'}}>Oportunidades perdidas</h3>
              <p style={{textAlign: 'center'}}>A pessoa certa está na sua rede, mas você não sabe. Ela também não sabe que você precisa dela. Matching não acontece.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A Solução (Design Premium + Centralizado)                            */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Como o Match-Maker Funciona</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Sistema que responde 'quem conhece X?' com os 5 melhores matches da sua rede em 10 segundos.</p>
          </div>

          {/* Screenshot da Interface com Glow */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto 4rem',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 0 40px rgba(0, 229, 255, 0.1)', // Glow sutil
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <Image 
              src="/cases/matchmaking-synapseb2b.png" 
              alt="Interface do Match-Maker B2B"
              width={1200}
              height={675}
              style={{ width: '100%', height: 'auto' }} 
              quality={90}
            />
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {/* Funcionalidade 1 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Target size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Perfis Estruturados</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Não é LinkedIn. Cada perfil tem: competências, interesses, disponibilidade, objetivos. Dados estruturados, não texto livre.</p>
              </div>
            </div>

            {/* Funcionalidade 2 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><Zap size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Matching Inteligente</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Algoritmo retorna Top 5 matches perfeitos em 10 segundos. Considera compatibilidade, disponibilidade e histórico de conexões bem-sucedidas.</p>
              </div>
            </div>

            {/* Funcionalidade 3 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content" style={{width: '100%'}}>
                <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title" style={{textAlign: 'center'}}>Analytics de Rede</h3>
                <p className="pillar-card-description" style={{textAlign: 'center'}}>Dashboard mostra: quantos matches gerados, taxa de conversão de introdução para parceria, competências mais procuradas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Versatilidade: Múltiplos Verticais (Design Premium + Centralizado)   */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{background: '#050505'}}>
        <div className="container reveal-up">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Plataforma Multi-Tenant: Um Sistema, Múltiplos Contextos</h2>
            <p className="lead-text" style={{textAlign: 'center'}}>Mesma inteligência de matching, aplicada a diferentes ecossistemas relacionais.</p>
          </div>

          <div className="matchmaker-verticals">
            {/* Vertical 1: Educação */}
            <div className="glass-card-premium">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-heading)'}}>Educação</h3>
              <p className="vertical-description" style={{marginBottom: '1.5rem', color: 'var(--color-text)', fontSize: '0.95rem', textAlign: 'center'}}>Conecta <strong>alunos ↔ mentores</strong> por área de interesse, disponibilidade e experiência.</p>
              <ul className="vertical-features">
                <li><CheckCircle2 size={16} /> Matching por objetivo de carreira</li>
                <li><CheckCircle2 size={16} /> Horários compatíveis (agenda integrada)</li>
                <li><CheckCircle2 size={16} /> Histórico de mentorias bem-sucedidas</li>
              </ul>
            </div>

            {/* Vertical 2: Investimento */}
            <div className="glass-card-premium">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-heading)'}}>Investimento</h3>
              <p className="vertical-description" style={{marginBottom: '1.5rem', color: 'var(--color-text)', fontSize: '0.95rem', textAlign: 'center'}}>Conecta <strong>startups ↔ investidores</strong> por tese de investimento, ticket, setor e estágio.</p>
              <ul className="vertical-features">
                <li><CheckCircle2 size={16} /> Fit de tese validado automaticamente</li>
                <li><CheckCircle2 size={16} /> Prioriza warm intros (conexões mútuas)</li>
                <li><CheckCircle2 size={16} /> Track record de investimentos anteriores</li>
              </ul>
            </div>

            {/* Vertical 3: RH & Talentos */}
            <div className="glass-card-premium">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-heading)'}}>RH & Talentos</h3>
              <p className="vertical-description" style={{marginBottom: '1.5rem', color: 'var(--color-text)', fontSize: '0.95rem', textAlign: 'center'}}>Conecta <strong>vagas ↔ talentos</strong> por hard skills, soft skills, cultura e momento de carreira.</p>
              <ul className="vertical-features">
                <li><CheckCircle2 size={16} /> Matching além de currículo (fit cultural)</li>
                <li><CheckCircle2 size={16} /> Disponibilidade imediata vs futuro</li>
                <li><CheckCircle2 size={16} /> Referências validadas na rede</li>
              </ul>
            </div>

            {/* Vertical 4: Parcerias Comerciais */}
            <div className="glass-card-premium">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-heading)'}}>Parcerias Comerciais</h3>
              <p className="vertical-description" style={{marginBottom: '1.5rem', color: 'var(--color-text)', fontSize: '0.95rem', textAlign: 'center'}}>Conecta <strong>empresas ↔ fornecedores/parceiros</strong> por complementaridade de oferta e ICP compartilhado.</p>
              <ul className="vertical-features">
                <li><CheckCircle2 size={16} /> ICP overlap (cliente ideal em comum)</li>
                <li><CheckCircle2 size={16} /> Complementaridade de portfólio</li>
                <li><CheckCircle2 size={16} /> Histórico de parcerias validadas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O Resultado (Design Premium + Centralizado)                          */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Resultado: De Caos para Confluência</h2>
          
          <div className="glass-card-premium" style={{
            maxWidth: '800px',
            margin: '3rem auto'
          }}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem'}}>
              <div style={{textAlign: 'center'}}>
                <Clock size={32} style={{color: 'var(--color-text)', marginBottom: '0.5rem', margin: '0 auto'}} />
                <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>Tempo para encontrar<br/>conexão perfeita</p>
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <div style={{textAlign: 'center'}}>
                <p style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text)'}}>Horas/Dias</p>
                <p style={{fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7}}>Networking aleatório</p>
              </div>
              <ArrowRight size={32} style={{color: 'var(--color-primary)'}} />
              <div style={{textAlign: 'center'}}>
                <p style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)'}}>10 Segundos</p>
                <p style={{fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7}}>Match-Maker B2B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* CTA Final                                                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Sua rede tem valor invisível.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', textAlign: 'center', margin: '0 auto 2rem'}}>
            Toda comunidade com 200+ pessoas tem oportunidades perdidas porque matching manual não escala. Match-Maker resolve isso.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Implementar Match-Maker na Minha Rede</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>
            Primeira conversa: 21 minutos para entender seu ecossistema e avaliar fit de implementação.
          </p>
        </div>
      </section>

      {/* CSS Global para Hover Effect (Receita Exata) */}
      <style jsx global>{`
        .glass-card-premium {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
        }
        
        /* Estado Ativo/Hover (O "Efeito Uau") */
        .glass-card-premium:hover {
           transform: translateY(-5px);
           border-color: var(--color-primary);
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2); /* Glow */
        }

        .matchmaker-verticals {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .vertical-features {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center; /* Centraliza lista */
          gap: 0.75rem;
        }
        
        .vertical-features li {
          display: flex;
          align-items: center; /* Centraliza item */
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--color-text);
        }
        
        .vertical-features svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
          .matchmaker-verticals {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}