// pages/pilares/solucoes-verticais/hba.js
// Versão Limpa: Usa 100% do CSS Global (Design System Unificado)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { 
  ArrowRight, 
  Activity, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Target, 
  Stethoscope,
  Briefcase,
  Gem
} from 'lucide-react';

export default function HealthBusiness() {
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
        <title>Health Business Architecture™ | Synapse B2B</title>
        <meta name="description" content="Transforme sua autoridade médica em um ecossistema de negócios escalável. Engenharia de Receita para profissionais de saúde que buscam legado." />
      </Head>

      {/* ====================================================================== */}
      {/* HERO SECTION (Padronizado)                                           */}
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
            <Activity size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">
            Sua expertise clínica já é uma referência.<br/>
            Agora, ela precisa se tornar um legado.
          </h1>
          <p className="hero-subheadline lead-text">
            Transforme sua autoridade médica em um <strong>Ecossistema de Negócios</strong> escalável. Implementamos a <strong>Health Business Architecture™</strong> para diversificar suas fontes de receita e expandir seu impacto além do consultório.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Avaliar Potencial do meu Ecossistema</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* O PROBLEMA (SINTOMAS)                                                  */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">O Dilema da Excelência Técnica</h2>
          <p className="lead-text">
            Grandes profissionais atingem um ponto onde o sucesso clínico cria uma complexidade operacional que limita a expansão do patrimônio.
          </p>

          <div className="truths-grid-revolutionary">
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">1. A Agenda como Limite</h3>
              <p>Você atingiu o topo da performance clínica, mas seu crescimento financeiro ainda está limitado às 24 horas do dia. Escalar exige ir além da venda de horas.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">2. Ativos Subutilizados</h3>
              <p>Sua base de pacientes confia cegamente em você. Essa confiança é um ativo valioso que poderia gerar receita recorrente através de produtos e serviços complementares.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">3. A Exaustão do Modelo Tradicional</h3>
              <p>Anos dedicados a uma rotina que exige sua presença física integral. O sucesso clínico trouxe reconhecimento, mas consolidou um modelo que drena sua energia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* A SOLUÇÃO: Health Business Architecture™                               */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Health Business Architecture™</h2>
          <p className="lead-text">
            Nossa metodologia proprietária para transformar consultórios em empresas de saúde de alto valor.
          </p>

          <div className="pillar-grid-revolutionary">
            
            {/* Pilar 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Gem size={28} /></div>
              <h3 className="pillar-card-title">1. Produtização da Expertise</h3>
              <p className="pillar-card-description">Transformamos seus anos de estudo e prática em <strong>Protocolos Proprietários</strong> e <strong>Programas de Acompanhamento</strong>. Deixe de vender apenas consultas.</p>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Layers size={28} /></div>
              <h3 className="pillar-card-title">2. Diversificação de Canais</h3>
              <p className="pillar-card-description">Criamos novas linhas de receita que orbitam sua autoridade: seu <strong>Selo de Qualidade</strong> (Licenciamento), programas de <strong>Educação</strong> (Mentorias) e <strong>Monitoramento Contínuo</strong>.</p>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Briefcase size={28} /></div>
              <h3 className="pillar-card-title">3. Governança de Excelência</h3>
              <p className="pillar-card-description">Estruturamos processos que garantem o "Padrão Ouro" do seu atendimento. Permitimos que uma equipe multidisciplinar entregue resultados com a sua assinatura de qualidade.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* O RESULTADO (Estilo Case)                                              */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">A Evolução do Modelo de Negócio</h2>
          
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div style={{marginBottom: '2rem'}}>
              <TrendingUp size={48} style={{color: 'var(--color-primary)', margin: '0 auto 1rem'}} />
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', lineHeight: '1.8', fontWeight: 600}}>
                De: Prática Clínica Tradicional<br/>
                <span style={{opacity: 0.6, fontSize: '1rem', fontWeight: 400}}>Excelência focada na consulta, mas limitada pelo tempo e presença física.</span>
              </p>
            </div>
            
            <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', width: '100%'}}>
              <p style={{fontSize: '1.4rem', color: 'var(--color-primary)', lineHeight: '1.8', fontWeight: 700}}>
                Para: Ecossistema de Negócios Escalável<br/>
                <span style={{color: 'var(--color-text)', fontSize: '1.1rem', fontWeight: 400}}>Receita recorrente, metodologia proprietária e valor de marca que transcende o fundador.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA FINAL                                                              */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">
            Você construiu um nome. Agora vamos construir um império.
          </h2>
          <p className="lead-text">
            A Engenharia de Receita aplicada à saúde é para profissionais que não se contentam apenas com a medicina tradicional. É para quem quer deixar uma marca.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Desenhar meu Health Business</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.9, marginTop: '1.5rem'}}>
            Exclusivo para clínicas e negócios de saúde já consolidados que buscam o próximo nível de expansão.
          </p>
        </div>
      </section>
    </>
  );
}