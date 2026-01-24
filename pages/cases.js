// pages/cases.js
// Página de Cases com resultados de negócio

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Award, TrendingUp, Target, Users, Zap, ExternalLink, CheckCircle2 } from 'lucide-react';

// --- DADOS DOS CASES ---
const casesData = {
  // Cases com resultado de negócio mensurável (Engenharia de Receita Completa)
  featured: [
    {
      id: 'vh-healthhub',
      title: 'VH health.hub',
      tagline: 'Healthtech • CareOps Integrativo',
      contexto: 'Tecnologia validada, mas com dificuldade de penetração em grandes contas (Hospitais) devido a discurso excessivamente técnico.',
      acao: 'Reestruturação do GTM e tradução da oferta para "CareOps" (foco em eficiência operacional, não apenas clínica). Redesign completo do ecossistema digital com área de clientes e formulário de qualificação.',
      resultado: 'R$ 500k captados e validação de canal enterprise',
      metrica: 'R$ 500k',
      metricaLabel: 'Captados',
      escopo: 'Engenharia de Receita Completa',
      link: 'https://versaoholistica.com.br/',
      image: '/cases/vh-healthhub-home.png',
      color: '#2A9D8F'
    },
    {
      id: 'exclusiva-engenharias',
      title: 'Exclusiva Engenharias',
      tagline: 'Engenharia Multidisciplinar • B2B Industrial',
      contexto: 'Empresa de engenharia consolidada, mas refém de indicações e sazonalidade. Sem previsibilidade de novos contratos.',
      acao: 'Implementação de máquina de vendas Outbound, posicionamento como parceiro de "Continuidade Operacional" e simulador de custos de obras com cálculo SINAPI-MG.',
      resultado: 'Pipeline recorde (3x histórico) e redução da dependência dos sócios na venda',
      metrica: '3x',
      metricaLabel: 'Pipeline histórico',
      escopo: 'Engenharia de Receita Completa',
      link: 'https://exclusivaengenharias.com/',
      image: '/cases/exclusiva-home.png',
      color: '#1a2744'
    },
    {
      id: 'tottec-backoffice',
      title: 'TOTTEC',
      tagline: 'BackOffice as a Service • Setor Educacional',
      contexto: 'Empresa de terceirização de backoffice para escolas particulares precisava escalar a geração de leads qualificados.',
      acao: 'Landing page B2B com calculadora de ROI interativa, copy consultiva focada em dor/solução e estratégia de GTM para gestores educacionais.',
      resultado: 'Expansão imediata de 300% de leads qualificados',
      metrica: '+300%',
      metricaLabel: 'Leads qualificados',
      escopo: 'Engenharia de Receita Completa',
      link: 'https://tottec.synapseb2b.com/',
      image: '/cases/tottec-home.png',
      color: '#2B5A7C'
    },
    {
      id: 'mrjob-hub',
      title: 'Mr. Job Hub de Negócios',
      tagline: 'Coworking • Hub de Negócios',
      contexto: 'Coworking tradicional buscando se reposicionar como hub de crescimento empresarial e diversificar fontes de receita.',
      acao: 'Ecossistema digital com widget conversacional "Synapse Concierge", arquitetura de 7 case studies e nova estratégia de linhas de receita.',
      resultado: '+50% de receita e novas linhas de negócio com potencial de dobrar faturamento em 90 dias',
      metrica: '+50%',
      metricaLabel: 'Receita',
      escopo: 'Engenharia de Receita Completa',
      link: 'https://mrjobcoworking.com',
      image: '/cases/mrjob-home.png',
      color: '#269249'
    }
  ],
  // Cases com Mentoria + Ativo
  mentoria: [
    {
      id: 'vida-nova-odonto',
      title: 'Vida Nova Odonto',
      tagline: 'Clínica Odontológica • Saúde',
      contexto: 'Clínica com zero presença digital, agenda cheia de buracos e receita baixa distribuída em 11 procedimentos dispersos.',
      acao: 'Mentoria de Engenharia de Receita + Landing page premium com modal de pré-atendimento. Foco estratégico nos procedimentos de maior valor agregado.',
      resultado: 'Agenda organizada, menos procedimentos, mais realização pessoal e mais faturamento',
      metrica: 'Foco',
      metricaLabel: 'Alto valor',
      escopo: 'Mentoria + Ativo de Performance',
      link: 'https://vidanovaodonto.com.br/',
      image: '/cases/vidanovaodonto-home.png',
      color: '#0A2540'
    }
  ],
  // Cases nascentes (Clareza Estratégica)
  nascentes: [
    {
      id: 'giornata-empresas',
      title: 'Giornata Empresas',
      tagline: 'Consultoria Financeira • Gestão de Liquidez',
      contexto: 'Consultor financeiro experiente iniciando operação B2B focada em gestão de liquidez empresarial.',
      acao: 'Landing page com diagnóstico interativo de liquidez, design system Private Banking e clareza estratégica de posicionamento.',
      resultado: 'Clareza estratégica para o founder e ferramenta de qualificação de leads desde o dia 1',
      escopo: 'Engenharia de Receita Completa',
      link: 'https://giornata.synapseb2b.com/',
      image: '/cases/giornata-home.png',
      color: '#B8965C'
    },
    {
      id: 'josias-eduardo-consultor',
      title: 'Josias Eduardo Pereira',
      tagline: 'Consultoria Empresarial • 35 anos de experiência',
      contexto: 'Consultor sênior com décadas de experiência precisando estruturar presença digital e clareza de posicionamento.',
      acao: 'Mentoria de Engenharia de Receita + Landing page premium com design executivo gold/navy.',
      resultado: 'Clareza estratégica e ativo digital pronto para captação',
      escopo: 'Mentoria + Ativo de Performance',
      link: 'https://josias.synapseb2b.com/',
      image: '/cases/josias-home.png',
      color: '#C9A048'
    },
    {
      id: 'minimim-discovery',
      title: 'Mini Mim - Mascotes Virtuais',
      tagline: 'Mascotes 3D • Branding Digital',
      contexto: 'Startup de mascotes virtuais 3D para marcas buscando validar modelo de negócio.',
      acao: 'Plataforma interativa com quiz de matching, design dark theme imersivo e clareza estratégica de go-to-market.',
      resultado: 'Clareza estratégica para o founder e ferramenta de conversão pronta para validação',
      escopo: 'Engenharia de Receita Completa',
      link: 'https://minimim.synapseb2b.com/',
      image: '/cases/minimim-home.png',
      color: '#F97316'
    }
  ],
  // Cases Ativo de Performance (sem consultoria estratégica)
  ativos: [
    {
      id: 'skippers-bilingue',
      title: "Escola Skipper's Bilíngue",
      tagline: 'Educação Bilíngue • Ensino Fundamental',
      contexto: 'Escola bilíngue consolidada precisando de plataforma digital completa com área do aluno.',
      acao: 'Ecossistema digital com Área do Aluno protegida, blog dinâmico e design emocional que traduz a proposta pedagógica.',
      resultado: '1º lugar em SEO local para "Escola Bilíngue Sete Lagoas"',
      metrica: '#1',
      metricaLabel: 'SEO Local',
      escopo: 'Ativo de Performance',
      link: 'https://skippersbilingue.com.br/',
      image: '/cases/skippers-home.png',
      color: '#7B3DB5'
    }
  ]
};

export default function Cases() {
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

  const CaseCard = ({ caseData, featured = false }) => (
    <div 
      className={`glass-card-premium ${featured ? 'card-wide' : ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Badge de Escopo */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: caseData.escopo.includes('Completa') ? 'rgba(0, 150, 132, 0.2)' : 'rgba(255,255,255,0.1)',
        border: caseData.escopo.includes('Completa') ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
        padding: '0.25rem 0.75rem',
        borderRadius: '50px',
        fontSize: '0.7rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {caseData.escopo}
      </div>

      {/* Ícone */}
      <div className="pillar-icon-wrapper premium-glow">
        <Award size={32} />
      </div>

      {/* Título e Tagline */}
      <h3 className="case-card-title" style={{ marginBottom: '0.25rem' }}>{caseData.title}</h3>
      <p style={{ color: caseData.color, fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>
        {caseData.tagline}
      </p>

      {/* Contexto */}
      <p style={{ marginBottom: '1rem' }}>
        <strong style={{ color: 'var(--color-primary)' }}>Contexto:</strong> {caseData.contexto}
      </p>

      {/* Ação */}
      <p style={{ marginBottom: '1rem' }}>
        <strong style={{ color: 'var(--color-primary)' }}>Ação:</strong> {caseData.acao}
      </p>

      {/* Resultado */}
      <div style={{
        background: 'rgba(0, 150, 132, 0.1)',
        border: '1px solid var(--color-primary)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1.5rem'
      }}>
        <p style={{ margin: 0 }}>
          <strong style={{ color: 'var(--color-primary)' }}>Resultado:</strong> {caseData.resultado}
        </p>
      </div>

      {/* Métrica Destaque (se houver) */}
      {caseData.metrica && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ 
            fontSize: '2.5rem', 
            fontWeight: 900, 
            color: caseData.color,
            lineHeight: 1
          }}>
            {caseData.metrica}
          </span>
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{caseData.metricaLabel}</span>
        </div>
      )}

      {/* Link */}
      <Link 
        href={caseData.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{ borderColor: caseData.color }}
      >
        <span>Ver Plataforma</span>
        <ExternalLink size={16} />
      </Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Cases | Synapse B2B</title>
        <meta name="description" content="Resultados reais de quem substituiu intuição por método. Da complexidade à tração." />
      </Head>

      {/* HERO */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
             <Award size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">Da Complexidade à Tração</h1>
          <p className="hero-subheadline lead-text">
            Resultados reais de quem substituiu intuição por método. 9 projetos. Resultados mensuráveis.
          </p>
        </div>
      </section>

      {/* MÉTRICAS CONSOLIDADAS */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="glass-card-premium" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>O Que Entregamos</h2>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)' }}>9</span>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Projetos entregues</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)' }}>R$ 500k+</span>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Captação validada</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)' }}>+300%</span>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Leads qualificados</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)' }}>3x</span>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Pipeline recorde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES DESTAQUE (Engenharia de Receita Completa com Resultado Mensurável) */}
      <section className="section-with-gradient-glow">
        <div className="container">
          <h2 className="section-title reveal-up">Engenharia de Receita Completa</h2>
          <p className="lead-text reveal-up">Projetos com resultado de negócio mensurável.</p>

          <div className="case-grid reveal-up">
            {casesData.featured.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* CASES MENTORIA + ATIVO */}
      <section className="section-solid">
        <div className="container">
          <h2 className="section-title reveal-up">Mentoria + Ativo de Performance</h2>
          <p className="lead-text reveal-up">Direcionamento estratégico combinado com execução digital.</p>

          <div className="case-grid reveal-up" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {casesData.mentoria.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* CASES NASCENTES (Clareza Estratégica) */}
      <section className="section-with-gradient-glow">
        <div className="container">
          <h2 className="section-title reveal-up">Clareza Estratégica para Founders</h2>
          <p className="lead-text reveal-up">Negócios em fase inicial com direção clara desde o dia 1.</p>

          <div className="pillar-grid-revolutionary reveal-up">
            {casesData.nascentes.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* CASE ATIVO DE PERFORMANCE */}
      <section className="section-solid">
        <div className="container">
          <h2 className="section-title reveal-up">Ativo de Performance</h2>
          <p className="lead-text reveal-up">Infraestrutura digital de alta qualidade.</p>

          <div className="case-grid reveal-up" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {casesData.ativos.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        </div>
      </section>

      {/* PRINCÍPIO UNIFICADOR */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="glass-card-premium card-wide" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="pillar-icon-wrapper premium-glow">
              <TrendingUp size={32} />
            </div>
            <h3>O Que Une Esses Resultados?</h3>
            <p className="lead-text">
              Eles deixaram de vender <strong>"horas" ou "produtos"</strong> para vender <strong>resultados de negócio</strong>.
            </p>
            <p>Trocaram a intuição pela <strong>metodologia</strong>.</p>
            <p>Entenderam que para crescer, precisavam profissionalizar a interface com o mercado.</p>
            <p style={{ marginTop: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
              Isso é Engenharia de Receita.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="section-title">
            Pronto para ser o próximo case?
          </h2>
          <p className="lead-text">
            O primeiro passo é um diagnóstico. 21 minutos para entender onde está o gargalo.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Executivo</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem' }}>
            Uma conversa de negócios. Sem pressão de vendas, apenas alinhamento estratégico.
          </p>
        </div>
      </section>
    </>
  );
}
