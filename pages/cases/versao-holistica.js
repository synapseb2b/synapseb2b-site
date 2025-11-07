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
    [cite_start]backgroundImage: `url(/cases/versaoholistica-home.png)`, // [cite: 3]
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
              [cite_start]src="/cases/logo_vh.png" // [cite: 4]
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
            [cite_start]Como uma healthtech com metodologia validada transformou [cite: 6]
            [cite_start]complexidade incompreensível em clareza que captou R$ 500k. [cite: 7]
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
          <p>Isabella Albuquerque não criou a Versão Holística por oportunidade de mercado. [cite_start]Ela criou por necessidade existencial. [cite: 27]</p>
          <p>Aos 12 anos, um tumor cerebral. Cirurgia de urgência. Perda total de movimentos. [cite_start]Anos de recuperação dolorosa. [cite: 28]</p>
          <p>E quando finalmente recebeu alta hospitalar? Zero acompanhamento. [cite_start]"Eu que me virasse." [cite: 29]</p>
          <p>As terapias integrativas a salvaram — mas nenhum hospital integrava isso ao cuidado convencional. [cite_start]A Versão Holística nasceu dessa lacuna. [cite: 30]</p>
          [cite_start]<p>Anos depois, Isabella tinha construído algo único: uma metodologia de cuidado farmacêutico integrativo com validação científica pela UFMG. [cite: 31] [cite_start]ROI comprovado de 5.8x em pacientes de hemodiálise. [cite: 32] [cite_start]Parceria com o Hospital Nossa Senhora das Dores. [cite: 32] [cite_start]Tecnologia proprietária G-Ops desenvolvida em colaboração estratégica. [cite: 33]</p>
          
          <p className="lead-text" style={{fontStyle: 'italic', color: 'var(--color-heading)', textAlign: 'center', marginTop: '3rem', marginBottom: '3rem'}}>
            Tinha tudo. [cite_start]Menos uma coisa: alguém que entendesse o que ela fazia. [cite: 34]
          </p>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '3rem'}}>O PARADOXO DA INOVAÇÃO</h3>
          [cite_start]<p>Pitch de 15 minutos que deixava decisores mais confusos do que antes. [cite: 36] [cite_start]Investidores perguntando: "Vocês vendem consultoria ou software?" [cite: 36]</p>
          [cite_start]<p>Hospitais interessados mas sem conseguir visualizar a implementação. [cite: 37] [cite_start]História pessoal de superação desconectada da proposta de valor. [cite: 37]</p>
          <p>A genialidade estava lá. [cite_start]Mas aprisionada em complexidade técnica intraduzível. [cite: 38]</p>

          <blockquote style={{
            borderLeft: '4px solid var(--color-primary)', 
            paddingLeft: '2rem', 
            margin: '3rem 0', 
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-heading)'
          }}>
            E aqui está o insight cruel: inovação sem clareza não é vantagem competitiva. [cite_start]É desvantagem comercial. [cite: 39]
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
              [cite_start]<p>Pitch de 15 min que confundia em vez de clarificar decisores. [cite: 45-48]</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <GitBranch size={28} />
              </div>
              <h3 className="truth-card-title">DOR ESTRATÉGICA</h3> 
              [cite_start]<p>Múltiplos modelos de negócio simultâneos sem hierarquia. [cite: 46-47]</p>
            </div>

            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <LineChart size={28} />
              </div>
              <h3 className="truth-card-title">DOR FINANCEIRA</h3> 
              [cite_start]<p>ROI de 5.8x validado mas não comunicado de forma tangível. [cite: 45, 47-48]</p>
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
            <p style={{marginTop: '1rem', fontStyle: 'normal'}}>E a resposta não estava em explicar melhor. [cite_start]Estava em <strong>criar a categoria que ainda não existia</strong>. [cite: 55]</p>
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
                [cite_start]<li>└─ Mapeamento do processo decisório real nos hospitais. [cite: 64]</li>
                [cite_start]<li>└─ Decisor identificado: CFO, não diretor clínico (insight crítico). [cite: 65]</li>
                [cite_start]<li>└─ Objeção principal mapeada: "Mais uma consultoria cara sem ROI mensurável". [cite: 66]</li>
                [cite_start]<li>└─ Gatilho de decisão descoberto: Case com métrica financeira tangível. [cite: 67]</li>
              </ul>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              [cite_start]<p>O erro estratégico estava claro: Isabella vendia para quem aprecia a solução (diretores clínicos), não para quem aprova orçamento (CFOs pressionados por custos). [cite: 69] [cite_start]A conversa precisava mudar de "cuidado humanizado" para "redução de custo do paciente de alto valor". [cite: 70] CFOs não compram humanização. [cite_start]Compram ROI. [cite: 71]</p>
            </div>

            {/* --- FASE 2 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 2: CRIAÇÃO DE CATEGORIA</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 30 dias | Entrega: Nova categoria de mercado</p>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                [cite_start]<li>└─ De: "Cuidado Farmacêutico Integrativo" → Para: "1ª Plataforma de CareOps Integrativo do Brasil". [cite: 75]</li>
                [cite_start]<li>└─ Conceito estruturado: Nova Arquitetura de Cuidado ao Paciente Crônico. [cite: 76]</li>
                [cite_start]<li>└─ Diferenciação em três pilares integrados (Atenção Farmacêutica, Terapias Integrativas, Inteligência de Dados). [cite: 77]</li>
                [cite_start]<li>└─ Resultado tangível: Redução de 5.8x no custo do paciente crônico. [cite: 78]</li>
                [cite_start]<li>└─ Validação de verticais com hierarquia clara (Core: Hospitais, Tração: Empresas, Validação: Escolas). [cite: 79]</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  [cite_start]src="/cases/versaoholistica-br-hospitais.png" // [cite: 86]
                  alt="Visual da categoria CareOps Integrativo"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>Criar categoria não é marketing. [cite_start]É reconfiguração da realidade competitiva. [cite: 81] [cite_start]Antes: VH competia com clínicas digitais, apps de wellness, etc. [cite: 82] Depois: VH criou o CareOps Integrativo. [cite_start]Competição zero. [cite: 83] [cite_start]Oceano azul. [cite: 84] A história de Isabella deixou de ser contexto emocional. [cite_start]Virou prova viva da lacuna no sistema de saúde. [cite: 85]</p>
            </div>

            {/* --- FASE 3 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 3: PLATAFORMA + TESE DE INVESTIMENTO</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 45 dias | Entrega: versaoholistica.com.br + Material de Captação</p>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                [cite_start]<li>└─ Construímos plataforma digital que educa o mercado sobre a categoria nova. [cite: 90]</li>
                [cite_start]<li>└─ Estruturamos modelo de receita por vertical com métricas claras. [cite: 91]</li>
                [cite_start]<li>└─ Criamos tese de investimento fundamentada (Mercado, Diferenciação, Tração, Escalabilidade). [cite: 92]</li>
                [cite_start]<li>└─ Preparamos pitch deck e material para captação. [cite: 93]</li>
                [cite_start]<li style={{color: 'var(--color-primary)', fontWeight: 'bold', marginTop: '0.5rem'}}>└─ RESULTADO IMEDIATO: R$ 500k captados no Programa Compete Minas. [cite: 94]</li>
              </ul>
              
              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  [cite_start]src="/cases/versaoholistica-home.png" // [cite: 99]
                  alt="Homepage versaoholistica.com.br"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '400px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>Investidores não investem em soluções complexas. [cite_start]Investem em categorias inevitáveis com primeiro player claro. [cite: 96] [cite_start]O pitch deixou de ser "entenda nossa metodologia" para virar "entenda por que CareOps Integrativo é a próxima fronteira de eficiência em saúde". [cite: 97] [cite_start]Clareza de categoria + ROI validado + história autêntica = tese irrefutável. [cite: 98]</p>
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
            De complexo para inevitável. De "vamos pensar" para captação de R$ 500k. [cite_start]Criação de categoria que antes não existia. [cite: 126]
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            Primeira plataforma de CareOps Integrativo do Brasil. Oceano azul. [cite_start]Competição zero. [cite: 127]
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
                [cite_start]"A Synapse B2B nos deu o que nenhuma aceleradora havia entregue: <strong>clareza</strong>. [cite: 130-131] [cite_start]Eles conectaram nossa paixão com a linguagem que hospitais e investidores precisavam ouvir. [cite: 132-133] [cite_start]Saímos de 'solução complexa' para 'nova categoria'. [cite: 134] O resultado? [cite_start]R$ 500k captados." [cite: 135]
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                [cite_start]src="/cases/Isabella_Albuquerque.png" // [cite: 136]
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
      {/* Bloco 8: Learnings Estratégicos                                      */}
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
              [cite_start]<p>VH tinha metodologia validada pela UFMG. [cite: 147] [cite_start]Tinha ROI comprovado de 5.8x. [cite: 148] [cite_start]Mas decisores não compravam porque não entendiam. [cite: 149]</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Complexidade ≠ sofisticação aos olhos do comprador. Clareza > Complexidade. [cite_start]Sempre. [cite: 151-152]</p>
            </div>
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Layers size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 2: CRIAR CATEGORIA É CRIAR DEMANDA</h3>
              [cite_start]<p>Ao posicionar VH como "1ª Plataforma CareOps Integrativo", criamos oceano azul onde antes havia confusão competitiva. [cite: 157-159]</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Se você compete em categoria estabelecida, você compete em preço. [cite_start]Se você CRIA a categoria, você define as regras do jogo. [cite: 161-163]</p>
            </div>

            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <BrainCircuit size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 3: HISTÓRIA + DADOS = DEFENSABILIDADE</h3>
              <p>A história de Isabella não era marketing. [cite_start]Era a prova viva de que o sistema de saúde tem lacuna crítica. [cite: 168-170] [cite_start]Conectada aos dados (ROI 5.8x + validação UFMG), virou tese irrefutável. [cite: 172-175]</p>
              [cite_start]<p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Propósito autêntico + Prova quantitativa = Diferenciação que ninguém replica. [cite: 177-178]</p>
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
            [cite_start]Metodologia validada não garante captação. [cite: 185]
            [cite_start]Clareza de categoria sim. [cite: 186]
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            [cite_start]Primeira conversa: 21 minutos para traduzir sua complexidade em tração. [cite: 187-188]
            Zero pressão. [cite_start]Apenas clareza estratégica. [cite: 189]
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