// pages/pilares/inteligencia-e-estrategia/sprint-validacao.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Zap, Search, Database, FileCheck, AlertTriangle } from 'lucide-react';

export default function SprintValidacao() {
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
    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Sprint de Validação Comercial | Synapse B2B</title>
        <meta name="description" content="Valide sua tese de mercado em 30 dias antes de investir OPEX." />
      </Head>

      {/* MINI HERO (Padronizado pelo Global CSS) */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
             <Zap size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">A Verdade Antes do Investimento</h1>
          <p className="hero-subheadline lead-text">
            30 dias para validar ou invalidar sua tese de mercado com dados reais.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Iniciar Validação Agora</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          {/* Layout padronizado com Grid Global */}
          <div className="pillar-grid-revolutionary" style={{marginTop: '0', alignItems: 'center'}}>
            
            {/* Coluna Esquerda: Texto */}
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <h2 className="section-title">O Risco Invisível</h2>
              <p className="lead-text" style={{marginBottom: '1.5rem'}}>Você está prestes a apostar alto em uma hipótese não testada.</p>
              <p>
                Lançar produto novo, entrar em novo mercado ou pivotar o modelo exige investimento pesado em estrutura.
              </p>
              
              {/* Card de Destaque (Agora padronizado) */}
              <div className="glass-card-premium" style={{marginTop: '2rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                    <div className="pillar-icon-wrapper">
                      <AlertTriangle size={32} style={{color: 'var(--color-accent)'}} />
                    </div>
                    <p style={{margin: 0}}><strong>Dado Crítico:</strong> 70% das iniciativas B2B falham por falta de aderência real ao mercado, não por execução ruim.</p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Solução */}
            <div className="glass-card-premium">
              <h3 style={{marginBottom: '1rem'}}>A Solução: Teste Controlado</h3>
              <p style={{marginBottom: '1rem'}}>O Sprint de Validação é um protocolo de <strong>30 dias</strong> que testa sua tese com prospects reais antes de você comprometer OPEX.</p>
              <p>Usamos técnicas de Lean B2B e Customer Development para extrair sinais claros de compra ou rejeição, transformando intuição em evidência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS (GRID) */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">O Que Você Recebe</h2>
          
          <div className="pillar-grid-revolutionary">
            {[
              { icon: Search, title: 'Validação de ICP', text: 'Confirmação se o perfil alvo realmente tem a dor, a urgência e o budget para sua solução.' },
              { icon: Zap, title: 'Teste de Proposta', text: 'Reação real do mercado à sua oferta. Descobrimos o que faz os olhos do cliente brilharem.' },
              { icon: Database, title: 'Precificação Validada', text: 'Identificação da faixa de preço que o mercado aceita pagar e modelos de cobrança preferidos.' },
              { icon: FileCheck, title: 'Go/No-Go Report', text: 'Uma decisão binária baseada em evidência: Acelerar, Pivotar ou Abortar a iniciativa.' }
            ].map((item, i) => (
              <div key={i} className="glass-card-premium">
                  <div className="pillar-icon-wrapper">
                    <item.icon size={32} />
                  </div>
                  <h3 className="pillar-card-title">{item.title}</h3>
                  <p className="pillar-card-description">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Melhor descobrir a verdade em 30 dias do que em 12 meses.
          </h2>
          <p className="lead-text">Investimento único pré-fixado. Sem surpresas.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Solicitar Escopo do Sprint</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}