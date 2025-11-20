// pages/pilares/ativos-digitais/apps.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Zap, Calculator, BarChart, CheckCircle2, TrendingUp } from 'lucide-react';

export default function AppsEstrategicos() {
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
        <title>Apps Estratégicos | Synapse B2B</title>
        <meta name="description" content="Ferramentas interativas proprietárias que aceleram decisão de compra." />
      </Head>

      {/* HERO SECTION (Padronizado) */}
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
          <h1 className="hero-headline">Apps Estratégicos</h1>
          <p className="hero-subheadline lead-text">
            Ferramentas que provam seu valor antes da venda. Cliente sente o ROI, não apenas ouve sobre ele.
          </p>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Ciclo de vendas longo = Cliente não visualiza o valor.</h2>
          <p className="lead-text">
            Vendas B2B complexas morrem na objeção invisível: "Preciso ver funcionando antes de comprar."
          </p>
          
          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <h3 className="truth-card-title">1. Apresentação ao vivo não escala</h3>
              <p>Cada venda exige demo customizada de 1 hora. Vendedor explica, cliente esquece. ROI fica abstrato.</p>
            </div>
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">2. "Preciso ver na prática"</h3>
              <p>Objeção constante. Cliente quer sentir o valor, não ouvir sobre ele. Mas POC demorado trava o ciclo.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">3. Argumento não se replica</h3>
              <p>Seu melhor vendedor fecha porque sabe demonstrar valor. Junior não consegue. Falta método.</p>
            </div>
          </div>
        </div>
      </section>

      {/* A SOLUÇÃO */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Ferramentas de Argumentação de Valor</h2>
          <p className="lead-text">Apps proprietários que tornam seu ROI tangível em 30 segundos.</p>

          <div className="pillar-grid-revolutionary">
            <div className="pillar-card-revolutionary">
              <div className="pillar-icon-wrapper"><Calculator size={28} /></div>
              <h3 className="pillar-card-title">Calculadoras de ROI</h3>
              <p className="pillar-card-description">Cliente insere dados reais (custo, volume). Sistema retorna economia estimada em 10 segundos. Prova valor antes da venda.</p>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-icon-wrapper"><BarChart size={28} /></div>
              <h3 className="pillar-card-title">Simuladores de Cenários</h3>
              <p className="pillar-card-description">Cliente testa configurações e vê impacto em tempo real. "E se eu aumentar volume em 30%?" Sistema recalcula.</p>
            </div>

            <div className="pillar-card-revolutionary">
              <div className="pillar-icon-wrapper"><TrendingUp size={28} /></div>
              <h3 className="pillar-card-title">Dashboards de Valor</h3>
              <p className="pillar-card-description">Após a venda, cliente vê ROI documentado mês a mês. Prova valor continuamente, reduz churn, facilita upsell.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLOS REAIS */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Exemplos Reais</h2>
          <p className="lead-text">Ferramentas construídas para resolver objeções específicas.</p>

          <div className="pillar-grid-revolutionary">
            {/* Exemplo 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Calculator size={32} /></div>
              <h3 className="case-card-title">Simulador de Orçamento</h3>
              <span style={{color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600'}}>Exclusiva Engenharias</span>
              
              <p><strong>Problema:</strong> Cliente não sabia custo de obra e desistia antes de orçar.</p>
              <p><strong>Solução:</strong> App retorna faixa de investimento em 10 segundos baseado em área e tipo.</p>
              <p><strong>Resultado:</strong> Leads chegam com expectativa calibrada. Zero tempo perdido.</p>
            </div>

            {/* Exemplo 2 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><BarChart size={32} /></div>
              <h3 className="case-card-title">Calculadora de Savings</h3>
              <span style={{color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600'}}>TSimples (Logística)</span>

              <p><strong>Problema:</strong> Cliente não acreditava na economia de 20% em fretes.</p>
              <p><strong>Solução:</strong> Calculadora web gratuita. Cliente insere volume e vê a economia na hora.</p>
              <p><strong>Resultado:</strong> Ferramenta viral que gera leads qualificados já convencidos.</p>
            </div>

            {/* Exemplo 3 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><TrendingUp size={32} /></div>
              <h3 className="case-card-title">Dashboard de Impacto</h3>
              <span style={{color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600'}}>Versão Holística</span>

              <p><strong>Problema:</strong> CFO do hospital não via ROI da plataforma de gestão.</p>
              <p><strong>Solução:</strong> Dashboard em tempo real mostrando economia por paciente.</p>
              <p><strong>Resultado:</strong> Renovação garantida e upsell facilitado via dados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO CONTRATAR */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Quando Contratar</h2>
          <p className="lead-text">Para situações onde a demonstração de valor trava a venda.</p>

          <div className="pillar-grid-revolutionary">
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><CheckCircle2 size={32} /></div>
              <h3 className="pillar-card-title">Venda depende de demo ao vivo</h3>
              <p>Se cada fechamento exige apresentação customizada de 1h+, o app escala seu argumento.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><CheckCircle2 size={32} /></div>
              <h3 className="pillar-card-title">Cliente precisa "sentir" valor</h3>
              <p>ROI é grande mas abstrato. Ferramenta torna tangível em 30 segundos.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><CheckCircle2 size={32} /></div>
              <h3 className="pillar-card-title">Ciclo de vendas longo</h3>
              <p>Se decisão leva meses, a ferramenta acelera ao eliminar a dúvida técnica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Seu melhor argumento de vendas deveria ser uma ferramenta.
          </h2>
          <p className="lead-text">
            Se você explica ROI em 40 slides e o cliente não visualiza, você precisa de um app.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Construir Meu App Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.9, marginTop: '1.5rem'}}>Primeira conversa: 21 minutos para identificar qual ferramenta acelera sua conversão.</p>
        </div>
      </section>
    </>
  );
}