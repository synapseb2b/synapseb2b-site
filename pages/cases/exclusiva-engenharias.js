// pages/cases/exclusiva-engenharias.js
// Versão "Engenharia de Receita na Prática" - Narrativa Real e Aspiracional

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target,
  GitBranch, 
  Brain,
  Zap,
  TrendingUp,
  XCircle
} from 'lucide-react';

export default function ExclusivaEngenhariasCase() {

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
        <title>Case Exclusiva Engenharias | Synapse B2B</title>
        <meta name="description" content="De um pedido de site recusado a um forecast mensal superior ao melhor faturamento anual. Veja a Engenharia de Receita na prática." /> 
      </Head>

      {/* ====================================================================== */}
      {/* HERO: O IMPACTO IMEDIATO                                               */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero"> 
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content text-center page-hero-padding reveal-up">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <GitBranch size={48} style={{color: 'var(--color-primary)'}} />
          </div>

          <h1 className="section-title">
            "PRECISAMOS DE UM SITE."<br/>
            NOSSA RESPOSTA: "NÃO."
          </h1>
          <p className="hero-subheadline">
            Como a recusa de um pedido tático abriu espaço para a Engenharia de Receita e gerou um forecast mensal superior ao melhor resultado anual da história da empresa.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* A VERDADE (DIAGNÓSTICO DE 42 MINUTOS)                                  */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <h2 className="section-title text-center">A Engenharia Começa no Diagnóstico</h2>
            
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              O cliente tinha excelência técnica e atendia gigantes como IVECO e Cimento Nacional. Mas o crescimento sem meta revelava um problema invisível.
            </p>

            <div style={{
              borderLeft: '4px solid var(--color-primary)',
              paddingLeft: '2rem',
              background: 'var(--color-card-bg)',
              padding: '2rem',
              borderRadius: '0 12px 12px 0'
            }}>
              <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem'}}>A Reunião de 42 Minutos</h3>
              <p style={{marginBottom: '1rem'}}>
                Em uma sessão estratégica pro bono, identificamos o padrão: vendas 100% dependentes de indicação. Ninguém olhava para o método de crescimento.
              </p>
              <p style={{color: 'var(--color-text)', fontStyle: 'italic'}}>
                "Eles tinham uma bela história, uma metodologia e um nicho claro. Mas tudo estava fragmentado na mente dos sócios. Faltava Engenharia de Vendas."
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* O PROCESSO (TIMELINE DINÂMICA)                                         */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title text-center">A Estratégia Antes da Tração</h2>
          <p className="lead-text text-center" style={{maxWidth: '700px', margin: '0 auto 4rem'}}>
            A diferença entre rápido e devagar no B2B depende da ordem dos fatores. Primeiro a base, depois a escala.
          </p>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            {/* FASE 1: Go-To-Market & Posicionamento */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Brain size={28} /></div>
                <h3 className="pillar-card-title">1. Go-To-Market (GTM)</h3>
                <p className="pillar-card-description">
                  Usamos o <strong>Cortex B2B™</strong> para analisar a empresa sob 100 filtros diferentes. Definimos o segmento prioritário (Industrial) e a promessa única: <strong>Zero Interrupção da Produção</strong>.
                </p>
                <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>O Buy-In Absoluto:</strong>
                  <p style={{fontSize: '0.9rem', margin: 0}}>
                    A nova tese fez tanto sentido que a empresa alterou seu CNPJ de "Engenharia e Climatização" para <strong>Exclusiva Engenharias</strong> por iniciativa própria.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2: Construção de Ativos */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Zap size={28} /></div>
                <h3 className="pillar-card-title">2. Ativos que Convertem</h3>
                <p className="pillar-card-description">
                  Só <em>depois</em> da estratégia pronta, construímos a Plataforma Digital. Não um site institucional, mas um motor de conversão.
                </p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '1rem', color: 'var(--color-text)'}}>
                  <li style={{marginBottom: '0.5rem'}}>✔ Simulador de Obras (Ferramenta de Engenharia)</li>
                  <li style={{marginBottom: '0.5rem'}}>✔ Atendimento Inteligente para novos Leads</li>
                  <li>✔ Narrativa focada em áreas de apoio essencial</li>
                </ul>
              </div>
            </div>

            {/* FASE 3: Escala (CRO as a Service) */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title">3. CRO as a Service</h3>
                <p className="pillar-card-description">
                  Com a máquina montada, fomos contratados para pilotar. Estruturamos a esteira comercial completa e assumimos a execução.
                </p>
                <div style={{marginTop: '1.5rem'}}>
                  <strong style={{color: 'var(--color-primary)', fontSize: '1.1rem'}}>O Resultado:</strong>
                  <p style={{fontSize: '1rem', margin: '0.5rem 0 0', fontWeight: 600, color: 'var(--color-heading)'}}>
                    Forecast mensal gerado &gt; Melhor faturamento anual histórico.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* LIÇÃO FINAL (ASPIRACIONAL)                                             */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <Target size={48} style={{color: 'var(--color-primary)', marginBottom: '1.5rem'}} />
            <h2 className="section-title">A Lição de Engenharia</h2>
            
            <p className="lead-text" style={{fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--color-heading)', margin: '2rem 0'}}>
              "A diferença entre rápido e devagar no B2B depende do que está sendo feito."
            </p>

            <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
              Fazer um site rápido sem estratégia é lento, porque não gera receita.<br/>
              Investir tempo na Engenharia de Receita (Diagnóstico + GTM + Ativos) cria a velocidade real de escala.
            </p>

            <div style={{marginTop: '4rem'}}>
              <h3 style={{marginBottom: '1.5rem'}}>Sua empresa tem uma história fragmentada?</h3>
              <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
                <span>Agendar Diagnóstico de Engenharia</span>
                <ArrowRight size={20} />
              </Link>
              <p style={{marginTop: '1rem', opacity: 0.7, fontSize: '0.9rem'}}>
                Vamos encontrar sua história real em 21 minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}