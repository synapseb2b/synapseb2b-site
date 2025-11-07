// pages/cases/versao-holistica.js (Corrigido)

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Target, // Usado para Dor Operacional
  GitBranch, // Usado para Dor Estratégica
  LineChart, // Usado para Dor Financeira
  Gem, // Usado para Insight 1
  Layers, // Usado para Insight 2
  BrainCircuit // Usado para Insight 3
} from 'lucide-react';

export default function VersaoHolisticaCase() {

  // Efeito de animação 'reveal-up' copiado da index.js
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

  // Estilo customizado para o Hero deste case
  const heroStyle = {
    backgroundImage: `url(/cases/versaoholistica-home.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <Head>
        <title>Case Versão Holística | Synapse B2B</title>
        <meta name="description" content="Como uma healthtech com metodologia validada transformou complexidade incompreensível em clareza que captou R$ 500k." /> 
      </Head>

      {/* ====================================================================== */}
      {/* Bloco 1: Hero Section (Customizado para o Case)                      */}
      {/* ====================================================================== */}
      <section className="hero-section" style={heroStyle}>
        <div className="hero-overlay" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          <div className="case-hero-logo" style={{marginBottom: '2rem'}}>
            <Image 
              src="/cases/logo_vh.png"
              alt="Logo Versão Holística"
              width={250}
              height={70}
              quality={100}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h1 className="hero-headline" style={{fontSize: '3.5rem'}}>
            DE NARRATIVA CONFUSA PARA NOVA CATEGORIA DE MERCADO 
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            Como uma healthtech com metodologia validada transformou
            complexidade incompreensível em clareza que captou R$ 500k.
          </p>

          {/* Destaque de Resultado */}
          <div 
            className="case-hero-highlight-box" 
            style={{
              border: '2px solid var(--color-primary)', 
              padding: '1rem 1.5rem', 
              borderRadius: '12px', 
              display: 'inline-block', 
              margin: '2rem auto 2.5rem',
              background: 'rgba(0, 150, 132, 0.1)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <h3 style={{
              color: 'var(--color-heading)', 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: 0
            }}>
              1ª PLATAFORMA DE CAREOPS INTEGRATIVO DO BRASIL + R$ 500K CAPTADOS 
            </h3>
          </div>

          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Quero Transformação Similar</span> 
              <ArrowRight size={20} />
            </Link>
            <Link href="#download-pdf" className="btn btn-secondary btn-large">
              <span>Download PDF do Case</span> 
              <Download size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 2: Overview Card                                               */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          {/* Reutilizando o estilo .decision-block de globals.css para o card */}
          <div className="decision-block" style={{maxWidth: '900px', background: 'var(--color-card-bg)', textAlign: 'left'}}>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>CLIENTE:</strong> <span>Versão Holística</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>SETOR:</strong> <span>HealthTech B2B</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>DESAFIO:</strong> <span>Inovação validada mas impossível de explicar</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>SOLUÇÃO:</strong> <span>Criação de Categoria + Tese de Investimento</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>PRAZO:</strong> <span>90 dias (3 fases estratégicas)</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-heading)'}}>
                <strong>RESULTADO:</strong> <span style={{color: 'var(--color-primary)'}}>Nova categoria criada + R$ 500k captados</span> 
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Bloco 3: O Contexto                                                  */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container" style={{maxWidth: '800px', textAlign: 'left'}}>
          <h2 className="section-title text-center">O CENÁRIO ANTES DA SYNAPSE</h2> 
          <p>Isabella Albuquerque não criou a Versão Holística por oportunidade de mercado. Ela criou por necessidade existencial.</p>
          <p>Aos 12 anos, um tumor cerebral. Cirurgia de urgência. Perda total de movimentos. Anos de recuperação dolorosa.</p>
          <p>E quando finalmente recebeu alta hospitalar? Zero acompanhamento. "Eu que me virasse."</p>
          <p>As terapias integrativas a salvaram — mas nenhum hospital integrava isso ao cuidado convencional. A Versão Holística nasceu dessa lacuna.</p>
          <p>Anos depois, Isabella tinha construído algo único: uma metodologia de cuidado farmacêutico integrativo com validação científica pela UFMG. ROI comprovado de 5.8x em pacientes de hemodiálise. Parceria com o Hospital Nossa Senhora das Dores. Tecnologia proprietária G-Ops desenvolvida em colaboração estratégica.</p>
          
          <p className="lead-text" style={{fontStyle: 'italic', color: 'var(--color-heading)', textAlign: 'center', marginTop: '3rem', marginBottom: '3rem'}}>
            Tinha tudo. Menos uma coisa: alguém que entendesse o que ela fazia.
          </p>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '3rem'}}>O PARADOXO DA INOVAÇÃO</h3>
          <p>Pitch de 15 minutos que deixava decisores mais confusos do que antes. Investidores perguntando: "Vocês vendem consultoria ou software?"</p>
          <p>Hospitais interessados mas sem conseguir visualizar a implementação. História pessoal de superação desconectada da proposta de valor.</p>
          <p>A genialidade estava lá. Mas aprisionada em complexidade técnica intraduzível.</p>

          <blockquote style={{
            borderLeft: '4px solid var(--color-primary)', 
            paddingLeft: '2rem', 
            margin: '3rem 0', 
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-heading)'
          }}>
            E aqui está o insight cruel: inovação sem clareza não é vantagem competitiva. É desvantagem comercial.
          </blockquote>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 4: O Desafio Real                                              */}
      {/* ====================================================================== */}
      <section id="por-que-synapse" className="section-with-gradient-glow section-truths-revolutionary reveal-up">
        <div className="container text-center">
          <h2 className="section-title">O Desafio Real</h2>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem', marginTop: '-1rem'}}>POR QUE ISSO ERA CRÍTICO</h3>

          {/* Reutilizando o grid de "3 Verdades" da index.js para as "3 Dores" */}
          <div className="truths-grid-revolutionary">
            
            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <Target size={28} />
              </div>
              <h3 className="truth-card-title">DOR OPERACIONAL</h3> 
              <p>Pitch de 15 min que confundia em vez de clarificar decisores.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <GitBranch size={28} />
              </div>
              <h3 className="truth-card-title">DOR ESTRATÉGICA</h3> 
              <p>Múltiplos modelos de negócio simultâneos sem hierarquia.</p>
            </div>

            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <LineChart size={28} />
              </div>
              <h3 className="truth-card-title">DOR FINANCEIRA</h3> 
              <p>ROI de 5.8x validado mas não comunicado de forma tangível.</p>
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '2rem', marginTop: '5rem'}}>
            CONSEQUÊNCIAS DA INAÇÃO 
          </h3>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Ciclos de venda infinitos com hospitais "interessados" mas nunca decidindo. 
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Impossibilidade de captar investimento (investidores não visualizavam tese). 
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Dispersão de energia em múltiplas verticais sem validar nenhuma. 
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              História da fundadora desperdiçada como anedota em vez de ser ativo estratégico. 
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Concorrentes explicando a categoria primeiro e capturando o mercado. 
            </p>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '5rem'}}>
            A PERGUNTA QUE NÃO SAÍA DA CABEÇA 
          </h3>
          <blockquote style={{
            borderLeft: '4px solid var(--color-primary)', 
            paddingLeft: '2rem', 
            margin: '2rem auto', 
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-heading)',
            maxWidth: '700px',
            textAlign: 'left'
          }}>
            <p>"Por que ninguém entende o valor do que fazemos?"</p> 
            <p style={{marginTop: '1rem', fontStyle: 'normal'}}>E a resposta não estava em explicar melhor. Estava em <strong>criar a categoria que ainda não existia</strong>.</p>
          </blockquote>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 5: A Solução (Timeline)                                        */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <h2 className="section-title text-center">A SOLUÇÃO (TIMELINE)</h2>

          {/* Timeline Visual Simplificado */}
          <div className="case-timeline-visual" style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '80%', 
            margin: '3rem auto 5rem', 
            borderTop: '2px solid var(--color-border)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative'}}>
              <span style={{
                position: 'absolute', 
                top: '-2.8rem', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '20px', 
                height: '20px', 
                background: 'var(--color-primary)', 
                borderRadius: '50%',
                border: '4px solid var(--color-section-bg)'
              }}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>FASE 1</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div>
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative'}}>
              <span style={{
                position: 'absolute', 
                top: '-2.8rem', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '20px', 
                height: '20px', 
                background: 'var(--color-primary)', 
                borderRadius: '50%',
                border: '4px solid var(--color-section-bg)'
              }}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>FASE 2</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>30 dias</div>
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative'}}>
              <span style={{
                position: 'absolute', 
                top: '-2.8rem', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '20px', 
                height: '20px', 
                background: 'var(--color-primary)', 
                borderRadius: '50%',
                border: '4px solid var(--color-section-bg)'
              }}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>FASE 3</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>45 dias</div>
            </div>
          </div>

          {/* Conteúdo das Fases - Reutilizando .truth-card-revolutionary */}
          <div className="case-phases-grid" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            
            {/* --- FASE 1 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 1: VALIDAÇÃO COMERCIAL</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Estratégia: Entender o processo decisório real</p>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Mapeamento do processo decisório real nos hospitais.</li>
                <li>└─ Decisor identificado: CFO, não diretor clínico (insight crítico).</li>
                <li>└─ Objeção principal mapeada: "Mais uma consultoria cara sem ROI mensurável".</li>
                <li>└─ Gatilho de decisão descoberto: Case com métrica financeira tangível.</li>
              </ul>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>O erro estratégico estava claro: Isabella vendia para quem aprecia a solução (diretores clínicos), não para quem aprova orçamento (CFOs pressionados por custos). A conversa precisava mudar de "cuidado humanizado" para "redução de custo do paciente de alto valor". CFOs não compram humanização. Compram ROI.</p>
            </div>

            {/* --- FASE 2 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 2: CRIAÇÃO DE CATEGORIA</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 30 dias | Entrega: Nova categoria de mercado</p>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ De: "Cuidado Farmacêutico Integrativo" → Para: "1ª Plataforma de CareOps Integrativo do Brasil".</li>
                <li>└─ Conceito estruturado: Nova Arquitetura de Cuidado ao Paciente Crônico.</li>
                <li>└─ Diferenciação em três pilares integrados (Atenção Farmacêutica, Terapias Integrativas, Inteligência de Dados).</li>
                <li>└─ Resultado tangível: Redução de 5.8x no custo do paciente crônico.</li>
                <li>└─ Validação de verticais com hierarquia clara (Core: Hospitais, Tração: Empresas, Validação: Escolas).</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/versaoholistica-br-hospitais.png"
                  alt="Visual da categoria CareOps Integrativo"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>Criar categoria não é marketing. É reconfiguração da realidade competitiva. Antes: VH competia com clínicas digitais, apps de wellness, etc. Depois: VH criou o CareOps Integrativo. Competição zero. Oceano azul. A história de Isabella deixou de ser contexto emocional. Virou prova viva da lacuna no sistema de saúde.</p>
            </div>

            {/* --- FASE 3 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 3: PLATAFORMA + TESE DE INVESTIMENTO</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 45 dias | Entrega: versaoholistica.com.br + Material de Captação</p>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Construímos plataforma digital que educa o mercado sobre a categoria nova.</li>
                <li>└─ Estruturamos modelo de receita por vertical com métricas claras.</li>
                <li>└─ Criamos tese de investimento fundamentada (Mercado, Diferenciação, Tração, Escalabilidade).</li>
                <li>└─ Preparamos pitch deck e material para captação.</li>
                <li style={{color: 'var(--color-primary)', fontWeight: 'bold', marginTop: '0.5rem'}}>└─ RESULTADO IMEDIATO: R$ 500k captados no Programa Compete Minas.</li>
              </ul>
              
              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/versaoholistica-home.png"
                  alt="Homepage versaoholistica.com.br"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '400px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>Investidores não investem em soluções complexas. Investem em categorias inevitáveis com primeiro player claro. O pitch deixou de ser "entenda nossa metodologia" para virar "entenda por que CareOps Integrativo é a próxima fronteira de eficiência em saúde". Clareza de categoria + ROI validado + história autêntica = tese irrefutável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 6: Resultados                                                  */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Resultados</h2>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem', marginTop: '-1rem'}}>
            O QUE MUDOU 
          </h3>

          {/* Tabela de Antes/Depois */}
          <div className="comparison-grid" style={{
            maxWidth: '900px', 
            margin: '0 auto 5rem',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            background: 'var(--color-card-bg)'
          }}>
            {/* Header */}
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1rem 2rem'}}>
              <h4 style={{color: 'var(--color-heading)', textAlign: 'left', fontSize: '1.2rem'}}>ANTES</h4>
              <span></span>
              <h4 style={{color: 'var(--color-heading)', textAlign: 'right', fontSize: '1.2rem'}}>DEPOIS</h4>
            </div>
            {/* Itens */}
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Pitch de 15 minutos que confundia</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Pitch de 3 minutos cristalino</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>"O que vocês fazem?"</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>"Quando começamos?"</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>ROI de 5.8x validado mas não comunicado</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>ROI comunicado como diferenciação central</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Modelo disperso sem hierarquia</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>3 verticais com hierarquia clara</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Tese confusa para investidores</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Categoria nova criada: CareOps Integrativo</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Sem investimento</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-primary)', fontWeight: 600}}>R$ 500k captados (Compete Minas)</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>História pessoal isolada da proposta</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>História integrada como prova viva da missão</span> 
            </div>
          </div>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          {/* Reutilizando o grid de "3 Verdades" para os "Números" */}
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>R$ 500k</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>Captados</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>5.8x</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>ROI Validado</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>90</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias</p> 
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', marginTop: '5rem'}}>
            MÉTRICA QUE REALMENTE IMPORTA 
          </h3>
          <p className="lead-text" style={{color: 'var(--color-heading)', fontStyle: 'italic'}}>
            De complexo para inevitável. De "vamos pensar" para captação de R$ 500k. Criação de categoria que antes não existia.
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            Primeira plataforma de CareOps Integrativo do Brasil. Oceano azul. Competição zero.
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 7: Voz do Cliente                                              */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          {/* Reutilizando .decision-block para o Testemunho */}
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle, rgba(0, 150, 132, 0.05), transparent 80%)',
            textAlign: 'center'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.8rem', fontFamily: "'Montserrat', sans-serif", color: 'var(--color-heading)', lineHeight: 1.4, marginBottom: '2.5rem'}}>
                "A Synapse B2B nos deu o que nenhuma aceleradora havia entregue: <strong>clareza</strong>. Eles conectaram nossa paixão com a linguagem que hospitais e investidores precisavam ouvir. Saímos de 'solução complexa' para 'nova categoria'. O resultado? R$ 500k captados."
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                src="/cases/Isabella_Albuquerque.png"
                alt="Isabella Albuquerque"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Isabella Albuquerque 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0}}>CEO & Founder - Versão Holística</p>
              </div>
            </div>

            <ul style={{listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem'}}>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Cliente desde 2025 
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                R$ 500k captados após projeto 
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 8: Learnings Estratégicos (CORRIGIDO)                           */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow section-truths-revolutionary reveal-up">
        <div className="container">
          <h2 className="section-title text-center">Learnings Estratégicos</h2>
          <p className="lead-text text-center">O QUE ESTE CASO ENSINA</p>
          
          {/* Reutilizando o grid de "3 Verdades" para os "3 Insights" */}
          <div className="truths-grid-revolutionary">
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Gem size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 1: INOVAÇÃO SEM CLAREZA NÃO VENDE</h3>
              <p>VH tinha metodologia validada pela UFMG. Tinha ROI comprovado de 5.8x. Mas decisores não compravam porque não entendiam.</p>
              {/* CORREÇÃO: Comentário removido */}
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Complexidade ≠ sofisticação aos olhos do comprador. Clareza > Complexidade. Sempre.</p>
            </div>
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Layers size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 2: CRIAR CATEGORIA É CRIAR DEMANDA</h3>
              <p>Ao posicionar VH como "1ª Plataforma CareOps Integrativo", criamos oceano azul onde antes havia confusão competitiva.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Se você compete em categoria estabelecida, você compete em preço. Se você CRIA a categoria, você define as regras do jogo.</p>
            </div>

            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <BrainCircuit size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 3: HISTÓRIA + DADOS = DEFENSABILIDADE</h3>
              <p>A história de Isabella não era marketing. Era a prova viva de que o sistema de saúde tem lacuna crítica. Conectada aos dados (ROI 5.8x + validação UFMG), virou tese irrefutável.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Propósito autêntico + Prova quantitativa = Diferenciação que ninguém replica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Bloco 9: CTA Final (Copiado da index.js e adaptado)                  */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            SUA SOLUÇÃO TAMBÉM É INOVADORA
            <br/>
            MAS NINGUÉM ENTENDE? 
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem'}}>
            Metodologia validada não garante captação.
            Clareza de categoria sim.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para traduzir sua complexidade em tração.
            Zero pressão. Apenas clareza estratégica.
          </p>

          {/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.5rem'}}>Prefere estudar o caso antes?</p>
            <Link href="/pdf/synapse-case-versaoholistica.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}