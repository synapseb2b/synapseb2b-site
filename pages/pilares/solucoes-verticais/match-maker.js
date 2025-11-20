// pages/solucoes/match-maker.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

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
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
            <Users size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Match-Maker B2B</h1>
          <p className="hero-subheadline lead-text">
            Transforma caos relacional em inteligência de conexão. Matching em 10 segundos, baseado em dados estruturados.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* O Problema                                                           */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Networking aleatório não gera resultados previsíveis.</h2>
          <p className="lead-text">
            Comunidades, grupos de WhatsApp, planilhas compartilhadas: riqueza invisível porque ninguém sabe quem pode ajudar quem.
          </p>
          
          <div className="truths-grid-revolutionary">
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">1. Informação dispersa</h3>
              <p>Grupos com 200+ pessoas. Competências valiosas perdidas em conversas assíncronas. Zero capacidade de confluência estratégica.</p>
            </div>
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">2. Decisão cognitivamente cara</h3>
              <p>"Alguém conhece um designer especializado em SaaS?" → 47 mensagens depois, ninguém sabe se a conexão é boa. Energia desperdiçada.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">3. Oportunidades perdidas</h3>
              <p>A pessoa certa está na sua rede, mas você não sabe. Ela também não sabe que você precisa dela. Matching não acontece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* A Solução                                                            */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Como o Match-Maker Funciona</h2>
          <p className="lead-text">Sistema que responde 'quem conhece X?' com os 5 melhores matches da sua rede em 10 segundos.</p>

          {/* Screenshot da Interface com Glow */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto 4rem',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 0 40px rgba(0, 150, 132, 0.2)',
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

          <div className="pillar-grid-revolutionary">
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Target size={28} /></div>
              <h3 className="pillar-card-title">Perfis Estruturados</h3>
              <p className="pillar-card-description">Não é LinkedIn. Cada perfil tem: competências, interesses, disponibilidade, objetivos. Dados estruturados, não texto livre.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Zap size={28} /></div>
              <h3 className="pillar-card-title">Matching Inteligente</h3>
              <p className="pillar-card-description">Algoritmo retorna Top 5 matches perfeitos em 10 segundos. Considera compatibilidade, disponibilidade e histórico de conexões bem-sucedidas.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><TrendingUp size={28} /></div>
              <h3 className="pillar-card-title">Analytics de Rede</h3>
              <p className="pillar-card-description">Dashboard mostra: quantos matches gerados, taxa de conversão de introdução para parceria, competências mais procuradas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Versatilidade: Múltiplos Verticais                                   */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Plataforma Multi-Tenant</h2>
          <p className="lead-text">Mesma inteligência de matching, aplicada a diferentes ecossistemas relacionais.</p>

          <div className="pillar-grid-revolutionary">
            {/* Vertical 1: Educação */}
            <div className="glass-card-premium">
              <h3 className="case-card-title">Educação</h3>
              <p style={{marginBottom: '1.5rem'}}>Conecta <strong>alunos ↔ mentores</strong> por área de interesse, disponibilidade e experiência.</p>
              <ul>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Matching por objetivo de carreira</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Horários compatíveis</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Histórico de mentorias</li>
              </ul>
            </div>

            {/* Vertical 2: Investimento */}
            <div className="glass-card-premium">
              <h3 className="case-card-title">Investimento</h3>
              <p style={{marginBottom: '1.5rem'}}>Conecta <strong>startups ↔ investidores</strong> por tese de investimento, ticket, setor e estágio.</p>
              <ul>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Fit de tese validado</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Prioriza warm intros</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Track record de investimentos</li>
              </ul>
            </div>

            {/* Vertical 3: RH & Talentos */}
            <div className="glass-card-premium">
              <h3 className="case-card-title">RH & Talentos</h3>
              <p style={{marginBottom: '1.5rem'}}>Conecta <strong>vagas ↔ talentos</strong> por hard skills, soft skills, cultura e momento de carreira.</p>
              <ul>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Matching além de currículo</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Disponibilidade imediata</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Referências validadas</li>
              </ul>
            </div>

            {/* Vertical 4: Parcerias Comerciais */}
            <div className="glass-card-premium">
              <h3 className="case-card-title">Parcerias Comerciais</h3>
              <p style={{marginBottom: '1.5rem'}}>Conecta <strong>empresas ↔ fornecedores</strong> por complementaridade de oferta e ICP compartilhado.</p>
              <ul>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> ICP overlap (cliente comum)</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Complementaridade de portfólio</li>
                <li><CheckCircle2 size={16} style={{color: 'var(--color-primary)'}} /> Histórico de parcerias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* O Resultado                                                          */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">O Resultado: De Caos para Confluência</h2>
          
          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
                <Clock size={48} style={{color: 'var(--color-primary)'}} />
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: '2rem',
              width: '100%'
            }}>
              <div style={{textAlign: 'center'}}>
                <p style={{fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-muted)'}}>Horas/Dias</p>
                <p style={{fontSize: '0.9rem', opacity: 0.7}}>Networking aleatório</p>
              </div>
              <ArrowRight size={32} style={{color: 'var(--color-primary)'}} />
              <div style={{textAlign: 'center'}}>
                <p style={{fontSize: '2rem', fontWeight: 700, color: 'var(--color-heading)'}}>10 Segundos</p>
                <p style={{fontSize: '0.9rem', opacity: 0.7}}>Match-Maker B2B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA Final                                                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Sua rede tem valor invisível.
          </h2>
          <p className="lead-text">
            Toda comunidade com 200+ pessoas tem oportunidades perdidas porque matching manual não escala. Match-Maker resolve isso.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Implementar Match-Maker na Minha Rede</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.9, marginTop: '1.5rem'}}>
            Primeira conversa: 21 minutos para entender seu ecossistema e avaliar fit de implementação.
          </p>
        </div>
      </section>
    </>
  );
}