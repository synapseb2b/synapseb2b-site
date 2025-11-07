// pages/cases/exclusiva-engenharias.js (Corrigido)

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Target, // Dor Operacional
  GitBranch, // Dor Estratégica
  LineChart, // Dor Financeira
  Gem, // Insight 1 (Clareza)
  ShieldCheck, // Insight 2 (Recusar pedido)
  TrendingUp // Insight 3 (Escala)
} from 'lucide-react';

export default function ExclusivaEngenhariasCase() {

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
    backgroundImage: `url(/cases/exclusivaengenharias-home.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <Head>
        <title>Case Exclusiva Engenharias | Synapse B2B</title>
        <meta name="description" content="Como uma engenharia com excelência técnica transformou crescimento por indicação em Método comercial estruturado — em 128 dias." /> 
      </Head>

      {/* ====================================================================== */}
      {/* Bloco 1: Hero Section (Customizado para o Case)                      */}
      {/* ====================================================================== */}
      <section className="hero-section" style={heroStyle}>
        <div className="hero-overlay" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          <div className="case-hero-logo" style={{marginBottom: '2rem'}}>
            <Image 
              src="/cases/logo_exclusiva.png"
              alt="Logo Exclusiva Engenharias"
              width={250}
              height={70}
              quality={100}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h1 className="hero-headline" style={{fontSize: '3.5rem'}}>
            DE FRAGMENTADO PARA HUB INTEGRADO 
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            Como uma engenharia com excelência técnica transformou crescimento por indicação em Método comercial estruturado — em 128 dias. 
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
              MÉTODO COMERCIAL OPERANDO COM PLAYBOOK VALIDADO EM 90 DIAS 
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
                <strong>CLIENTE:</strong> <span>Exclusiva Engenharias</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>SETOR:</strong> <span>Engenharia Industrial</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>DESAFIO:</strong> <span>Crescimento 100% por indicação</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>SOLUÇÃO:</strong> <span>GTM Completo + Plataforma + CRO Fracionado</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>PRAZO:</strong> <span>128 dias (4 fases estruturadas)</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-heading)'}}>
                <strong>RESULTADO:</strong> <span style={{color: 'var(--color-primary)'}}>Motor de receita com playbook validado</span> 
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
          <p>A Exclusiva Engenharias não tinha problema de competência técnica. Tinha um problema de clareza estratégica.</p>
          <p><strong>O que tinham:</strong></p> 
          <ul style={{listStylePosition: 'inside', paddingLeft: '1rem', marginBottom: '1.5rem'}}>
            <li>Um grupo de competências segregadas entre civil, elétrica, mecânica, automação, climatização, arquitetura e SST</li>
            <li>Clientes de peso: Gerdau, Cimento Nacional, IVECO, IDV</li>
            <li>Projetos industriais de alta complexidade entregues com excelência</li>
          </ul>
          <p><strong>O problema:</strong> Cada competência era apresentada como negócio separado. Dependendo do tipo de obra, a narrativa mudava. A empresa se fragmentava na própria comunicação.</p>
          <p>O crescimento? 100% por indicação. Dependente do networking individual da liderança. Zero previsibilidade de pipeline. Nenhuma estrutura comercial replicável.</p>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '3rem'}}>O PEDIDO QUE RECUSAMOS</h3> 
          <p style={{
            fontSize: '1.5rem', 
            fontFamily: "'Montserrat', sans-serif", 
            color: 'var(--color-heading)', 
            textAlign: 'center', 
            fontStyle: 'italic',
            margin: '2rem 0'
          }}>
            "Precisamos de um site." 
          </p>
          <p>Essa foi a solicitação inicial. E nossa resposta imediata foi: <strong>não</strong>.</p>
          <p>Não porque não fizéssemos plataformas digitais. Mas porque um site sem clareza estratégica seria apenas uma vitrine cara de um negócio indefinido.</p>
          <p>O que eles realmente precisavam? Entender que história tinham para contar antes de escolher onde contá-la.</p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 4: O Desafio Real                                              */}
      {/* ====================================================================== */}
      <section id="por-que-synapse" className="section-with-gradient-glow section-truths-revolutionary reveal-up">
        <div className="container text-center">
          <h2 className="section-title">O Desafio Real</h2>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem', marginTop: '-1rem'}}>POR QUE ISSO TRAVAVA O CRESCIMENTO</h3> 

          {/* Reutilizando o grid de "3 Verdades" da index.js para as "3 Dores" */}
          <div className="truths-grid-revolutionary">
            
            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <Target size={28} />
              </div>
              <h3 className="truth-card-title">DOR OPERACIONAL</h3> 
              <p>Narrativa diferente para cada tipo de obra = confusão interna/externa.</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <GitBranch size={28} />
              </div>
              <h3 className="truth-card-title">DOR ESTRATÉGICA</h3> 
              <p>Impossível escalar sem depender de heroísmo da liderança.</p>
            </div>

            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <LineChart size={28} />
              </div>
              <h3 className="truth-card-title">DOR FINANCEIRA</h3> 
              <p>Receita imprevisível, dependente de ciclo longo não controlado.</p>
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '2rem', marginTop: '5rem'}}>
            CONSEQUÊNCIAS DA INAÇÃO 
          </h3>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Crescimento limitado ao tamanho da rede pessoal dos sócios.
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Incapacidade de criar equipe comercial (o que vender? como vender?).
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Perda de oportunidades por não ter resposta clara à pergunta "o que vocês fazem?".
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Commoditização por competir em cada disciplina isoladamente.
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
            <p>"Como crescer além de quem eu conheço?"</p> 
            <p style={{marginTop: '1rem', fontStyle: 'normal'}}>Essa era a questão real. E a resposta não estava em fazer mais networking. Estava em criar um Método.</p>
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
            width: '90%', 
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
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>20 dias</div> 
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
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>3 dias</div> 
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
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>FASE 4</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>90 dias</div> 
            </div>
          </div>

          {/* Conteúdo das Fases - Reutilizando .truth-card-revolutionary */}
          <div className="case-phases-grid" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            
            {/* --- FASE 1 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 1: CLAREZA ESTRATÉGICA</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Ferramenta: Cortex GTM™</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Decodificamos a genialidade técnica dispersa</li>
                <li>└─ Reposicionamento radical: De: "Três empresas de engenharia" Para: "Hub multidisciplinar que resolve problemas que outros evitam"</li>
                <li>└─ Nova categoria: Soluções de Engenharia Integrada para Infraestrutura Essencial em plantas industriais ativas</li>
                <li>└─ Proposta de valor definida: Precisão, previsibilidade e confiança em ambientes operacionais críticos</li>
              </ul>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>O insight crítico: a Exclusiva não vendia civil, elétrica ou mecânica. Vendia <strong>continuidade operacional</strong>. O produto real era a capacidade de executar obras essenciais em plantas industriais ativas sem gerar atrito, parada ou risco. Essa clareza transformou a conversa.</p>
            </div>

            {/* --- FASE 2 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 2: PLATAFORMA DE ACELERAÇÃO</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 20 dias | Entrega: exclusivaengenharias.com</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Arquitetura estratégica: 30% institucional + 70% motor de receita</li>
                <li>└─ Cada página como ferramenta educativa: orientar o cliente sobre como escolher parceiro para obras críticas</li>
                <li>└─ Diferenciação máxima: traduzir competências técnicas em valor percebido pelo decisor industrial</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/exclusivaengenharias-home.png"
                  alt="Homepage Exclusiva Engenharias com proposta de valor"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '400px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>A plataforma não foi construída para impressionar. Foi construída para converter. Cada seção respondia a uma objeção específica. Cada case demonstrava não apenas execução técnica, mas impacto operacional zero. O cliente industrial que chegava ao site saía com uma certeza: a Exclusiva entendia o desafio dele.</p>
            </div>

            {/* --- FASE 3 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 3: FERRAMENTA DE CONVERSÃO</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 3 dias | Entrega: Simulador de Orçamento Integrado</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Ferramenta de qualificação: cliente insere tipo de projeto, dimensões, complexidade</li>
                <li>└─ Sistema retorna faixa de investimento em 10 segundos</li>
                <li>└─ Lead entra na conversa já contextualizado e com expectativa calibrada</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/simulador_exclusiva.png"
                  alt="Interface do Simulador Exclusiva Engenharias"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>O simulador era mais que praticidade. Era <strong>mecanismo de comprometimento</strong>. Ao investir tempo inserindo dados, o cliente já estava mentalmente dentro da jornada de compra. E para a equipe comercial? Zero conversa perdida com leads fora de perfil. Todo contato que chegava já estava qualificado.</p>
            </div>

            {/* --- FASE 4 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 4: LIDERANÇA COMERCIAL</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 90 dias | Modelo: CRO Fracionado</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Estruturamos a Diretoria de Receita do zero</li>
                <li>└─ Lideramos prospecção ativa com roteiro validado em campo</li>
                <li>└─ Conduzimos reuniões estratégicas com grandes industriais</li>
                <li>└─ Entregamos playbook comercial documentado e testado</li>
                <li>└─ Alinhamento de narrativa: transição de "vendemos projetos" para "resolvemos problemas industriais"</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/playbook_exclusiva.png"
                  alt="Capa do Playbook Comercial Exclusiva Engenharias"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>Não terceirizamos. <strong>Incorporamos</strong>. Atuamos como diretoria interna, tomando decisões, liderando reuniões, enfrentando objeções reais. O playbook não foi teórico — foi construído em campo. Ao final dos 90 dias, a Exclusiva não tinha apenas um documento. Tinha um método comercial operando.</p>
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
              <span style={{textAlign: 'left'}}>Narrativa fragmentada por tipo de obra</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Mensagem unificada e clara</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Crescimento por indicação da liderança</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Canais estruturados de aquisição</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Presença digital zero</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Plataforma que educa e converte</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Heroísmo individual para cada venda</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Método comercial replicável com playbook</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Reativo às oportunidades que surgiam</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Proativo e previsível no pipeline</span> 
            </div>
          </div>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          {/* Reutilizando o grid de "3 Verdades" para os "Números" */}
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>128</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>4</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>fases</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>100%</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>playbook validado</p> 
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', marginTop: '5rem'}}>
            MÉTRICA QUE REALMENTE IMPORTA 
          </h3>
          <p className="lead-text" style={{color: 'var(--color-heading)', fontStyle: 'italic'}}>
            De disperso para focado. De invisível para encontrável. De imprevisível para estruturado. 
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            Área comercial operando com playbook validado. Método que funciona independente de quem está vendendo. Fundação para escala. 
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
                "A Synapse B2B não entregou consultoria tradicional. Eles desafiaram nosso pedido inicial, recusaram fazer 'só um site' e nos forçaram a olhar para dentro. O resultado? Clareza estratégica que se traduziu em um Método comercial que funciona. Agora temos fundação." 
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                src="/cases/logo_exclusiva.png"
                alt="Fabrício Tavares"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)', background: 'var(--color-section-bg)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Fabrício Tavares 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0}}>CEO - Exclusiva Engenharias</p> 
              </div>
            </div>

            <ul style={{listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem'}}>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Cliente desde 2025 
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
              <h3 className="truth-card-title">INSIGHT 1: COMPETÊNCIA ≠ CLAREZA</h3> 
              <p>A Exclusiva tinha competências excepcionais. Mas se apresentava de forma fragmentada.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Excelência técnica sem narrativa unificada não gera previsibilidade de receita.</p>
            </div>
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <ShieldCheck size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 2: RECUSE O PEDIDO ERRADO</h3> 
              <p>Cliente pediu "site". Recusamos. Entregamos clareza estratégica primeiro.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Resolver o problema real, não o pedido superficial. Essa é a diferença entre consultoria e transformação.</p>
            </div>

            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <TrendingUp size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 3: HEROÍSMO NÃO ESCALA</h3>
              <p>Crescimento por networking individual da liderança tem teto claro: o tamanho da rede.</p>
              
              {/* CORREÇÃO APLICADA AQUI */}
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Método &gt; heroísmo. Playbook validado &gt; talento individual. Previsibilidade exige processo.</p>
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
            SUA EMPRESA TAMBÉM CRESCE POR NETWORKING 
            <br/>
            MAS NÃO TEM MÉTODO? 
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem'}}>
            Competências técnicas excepcionais não garantem previsibilidade de receita. 
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para mapear seu travamento de receita.
            Zero pressão. Apenas clareza estratégica. 
          </p>

{/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.5rem'}}>Prefere estudar o caso antes?</p> 
            <Link href="/pdf/synapse-case-exclusiva.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}