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
  ShieldCheck, // Insight 1 (Credibilidade)
  Zap, // Insight 2 (Urgência)
  Gem // Insight 3 (Validação/Skin in the game)
} from 'lucide-react';

export default function AorkiaCase() {

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
    backgroundImage: `url(/cases/aorkia-home.png)`, // [cite: 194]
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <Head>
        <title>Case AORKIA | Synapse B2B</title>
        <meta name="description" content="Como uma startup sem histórico entrou em mercado técnico dominado por gigantes e fechou 1.200+ usuários na primeira venda." /> 
      </Head>

      {/* ====================================================================== */}
      {/* Bloco 1: Hero Section (Customizado para o Case)                      */}
      {/* ====================================================================== */}
      <section className="hero-section" style={heroStyle}>
        <div className="hero-overlay" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}></div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          <div className="case-hero-logo" style={{marginBottom: '2rem'}}>
            <Image 
              [cite_start]src="/cases/logo_aorkia.png" // [cite: 195] (caminho inferido)
              alt="Logo AORKIA"
              width={250}
              height={70}
              quality={100}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h1 className="hero-headline" style={{fontSize: '3.5rem'}}>
            DE ZERO A PARCEIRO OFICIAL EM 45 DIAS 
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            Como uma startup sem histórico entrou em mercado técnico dominado
            por gigantes e fechou 1.200+ usuários na primeira venda. 
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
              PARCEIRO OFICIAL KEEPIT + PRIMEIRA VENDA: 1.200+ USUÁRIOS 
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
                <strong>CLIENTE:</strong> <span>AORKIA</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>SETOR:</strong> <span>Tecnologia - Backup SaaS & Disaster Recovery</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>DESAFIO:</strong> <span>Zero histórico em mercado dominado por gigantes</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>SOLUÇÃO:</strong> <span>Ancoragem de Autoridade + Urgência + Plataforma</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '1rem 0', fontSize: '1.1rem'}}>
                <strong>PRAZO:</strong> <span>45 dias (3 fases em modo acelerado)</span> 
              </li>
              <li style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-heading)'}}>
                <strong>RESULTADO:</strong> <span style={{color: 'var(--color-primary)'}}>Parceiro Oficial Keepit + 1ª venda validada</span> 
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
          <p>Este case é diferente. Porque não é sobre um cliente. [cite: 217] É sobre <strong>aplicar o próprio método no próprio negócio sob pressão máxima</strong>. [cite: 218]</p>
          <p>A situação: startup entrando em mercado técnico de backup SaaS[cite: 219]. Competição: Veeam, Acronis, Druva — gigantes globais[cite: 220]. Budget de marketing: zero[cite: 220]. Prazo para provar tração: 90 dias[cite: 221].</p>
          <p>E a AORKIA? Zero clientes. Zero marca. Zero histórico. Zero tudo[cite: 222].</p>
          <p>A única coisa que tínhamos: parceria estratégica com a Keepit, líder global em backup SaaS[cite: 223]. Mas parceria sem tração é apenas um selo bonito sem valor comercial[cite: 224].</p>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '3rem'}}>A APOSTA MÁXIMA: SKIN IN THE GAME TOTAL</h3> 
          <p>Como fundador da Synapse B2B, eu poderia ter aplicado o método em clientes com menos risco. Mas decidi fazer diferente: <strong>criar a AORKIA e aplicar Engenharia de Receita no próprio negócio</strong>. [cite: 226-227] Não como consultor externo. Como <strong>fundador com pele no jogo</strong>. [cite: 228]</p>

          <blockquote style={{
            borderLeft: '4px solid var(--color-primary)', 
            paddingLeft: '2rem', 
            margin: '3rem 0', 
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-heading)'
          }}>
           "Se meu método não funcionar quando eu mesmo executo, sob condições adversas, então ele não funciona." [cite: 229]
          </blockquote>
          <p>Resultado: Meta-case definitivo. Validação sob fogo real. Zero margem para teoria. [cite: 230]</p>
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
              <p>Zero histórico em mercado que exige prova de credibilidade imediata. [cite: 236, 238-239]</p>
            </div>
            
            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <GitBranch size={28} />
              </div>
              <h3 className="truth-card-title">DOR ESTRATÉGICA</h3> 
              <p>Competição com gigantes que dominam o mercado há décadas. [cite: 237-239]</p>
            </div>

            <div className="truth-card-revolutionary">
              <div className="pillar-icon-wrapper" style={{margin: '0 auto 1.5rem'}}>
                <LineChart size={28} />
              </div>
              <h3 className="truth-card-title">DOR FINANCEIRA</h3> 
              <p>Zero budget para marketing pago, impossível competir em visibilidade. [cite: 237-238, 240]</p>
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '2rem', marginTop: '5rem'}}>
            CONSEQUÊNCIAS DA INAÇÃO 
          </h3>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Parceria com Keepit desperdiçada (selo sem tração = irrelevância). [cite: 244]
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Impossibilidade de levantar capital (investidor precisa ver GTM funcionando). [cite: 244]
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem'}}>
              <ArrowRight size={20} color="var(--color-primary)" />
              Validação do método Synapse não aconteceria — o impacto seria além da AORKIA. [cite: 244]
            </p>
          </div>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '5rem'}}>
            O DESAFIO INVISÍVEL 
          </h3>
          <p className="lead-text">Mas havia um problema mais sutil. O cliente não sentia urgência. [cite: 246] "Meus dados estão no Google Workspace. O Google cuida disso, certo?" [cite: 247] Errado. [cite: 248]</p>


          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1rem', marginTop: '3rem'}}>
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
            <p>"Como competir sem track record?" [cite: 250]</p> 
            <p style={{marginTop: '1rem', fontStyle: 'normal'}}>E a resposta que apliquei: <strong>Não compete. Transfere credibilidade.</strong> [cite: 251]</p>
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
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>FASE 3</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
          </div>

          {/* Conteúdo das Fases - Reutilizando .truth-card-revolutionary */}
          <div className="case-phases-grid" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            
            {/* --- FASE 1 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 1: ANCORAGEM DE AUTORIDADE</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Estratégia: Transferência de credibilidade</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Reposicionamento estratégico: De: "Revendemos backup Keepit" Para: "Parceiro Oficial Keepit — Líder Global em Backup SaaS". [cite: 260]</li>
                <li>└─ Transferência de credibilidade: "Se o líder global escolheu a AORKIA como parceiro oficial no Brasil, você pode confiar". [cite: 261]</li>
                <li>└─ Foco em caso de uso crítico: Compliance (LGPD) + Proteção contra ransomware. [cite: 262]</li>
              </ul>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>A AORKIA não tinha histórico. Mas a Keepit tinha. E a Keepit escolheu a AORKIA. [cite: 264] Mudamos a conversa de "confie na AORKIA" para "confie na escolha da Keepit". [cite: 265] Decisores B2B não compram da startup desconhecida. Mas compram da startup que o líder global validou. [cite: 266]</p>
            </div>

            {/* --- FASE 2 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 2: ATIVAÇÃO DE URGÊNCIA</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Entrega: Narrativa de risco tangível</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Eliminamos jargão técnico: De: "Backup imutável..." Para: "Seu Google Workspace não faz backup dos seus dados. Quanto custa cada hora de parada?". [cite: 270]</li>
                <li>└─ Ativamos medo da perda ANTES de apresentar solução. [cite: 271]</li>
                <li>└─ Criamos narrativa de risco invisível: "Você acha que seus dados estão seguros no Google. O Google acha que você faz backup... você está desprotegido." [cite: 272]</li>
                <li>└─ Objeção neutralizada proativamente. [cite: 273]</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  [cite_start]src="/cases/aorkia-home-urgencia.png" // [cite: 280] (caminho inferido)
                  alt="Homepage AORKIA com headline de urgência"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '400px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>O problema do backup: ele só importa quando é tarde demais. [cite: 275] Ninguém acorda pensando "preciso de backup hoje". [cite: 276] Nossa estratégia: fazer o cliente sentir a dor antes de sofrer a perda. [cite: 277] A narrativa mudou de "recurso técnico" para "quanto custa sua empresa parada por 48 horas?". Financeiro. Tangível. Urgente. [cite: 278-279]</p>
            </div>

            {/* --- FASE 3 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 3: PLATAFORMA + CANAL</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Entrega: aorkia.com + Roteiro comercial validado</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Construímos aorkia.com com arquitetura de urgência (risco, prova social, ROI). [cite: 284]</li>
                <li>└─ Estruturamos prospecção ativa B2B (ICP, roteiros, proposta). [cite: 285]</li>
                <li style={{color: 'var(--color-primary)', fontWeight: 'bold', marginTop: '0.5rem'}}>└─ Resultado imediato: Primeira venda em empresa nacional: 1.200+ usuários. [cite: 286]</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  [cite_start]src="/cases/aorkia-solucoes.png" // [cite: 293] (caminho inferido)
                  alt="Página de soluções por vertical AORKIA"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>A plataforma não tentou competir em feature list. Competiu em <strong>clareza de risco</strong>. [cite: 288] Enquanto gigantes mostravam especificações, AORKIA mostrava "quanto você perde se seus dados sumirem amanhã?". [cite: 289] O primeiro cliente de 1.200 usuários não comprou backup. Comprou <strong>paz de espírito regulatória</strong> (LGPD) e <strong>seguro contra ransomware</strong>. [cite: 292]</p>
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
              <span style={{textAlign: 'left'}}>Zero histórico</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Parceiro Oficial Keepit (líder global)</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Ideia no papel</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Plataforma que converte com narrativa de urgência</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Sem tração comercial</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Primeira venda: 1.200+ usuários validada</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Competindo com gigantes estabelecidos</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Diferenciação clara: credibilidade + urgência</span> 
            </div>
            <div className="comparison-row" style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.5rem 2rem', borderTop: '1px solid var(--color-border)'}}>
              <span style={{textAlign: 'left'}}>Método não testado sob pressão real</span> 
              <ArrowRight size={20} color="var(--color-primary)" />
              <span style={{textAlign: 'right', color: 'var(--color-heading)', fontWeight: 600}}>Validação completa em campo, sob condições extremas</span> 
            </div>
          </div>
          
          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          {/* Reutilizando o grid de "3 Verdades" para os "Números" */}
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>1.200+</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>usuários 1ª venda</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>45</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>100%</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>método validado</p> 
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', marginTop: '5rem'}}>
            MÉTRICA QUE REALMENTE IMPORTA 
          </h3>
          <p className="lead-text" style={{color: 'var(--color-heading)', fontStyle: 'italic'}}>
            De zero para receita em 45 dias. Prova de que método funciona sob pressão máxima. [cite: 318]
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            É sobre ter provado que funciona quando eu mesmo executo, com minha própria empresa, sob as condições mais adversas possíveis. [cite: 321]
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 7: A Prova Definitiva (Adaptação do Testemunho)                */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <h2 className="section-title text-center">A PROVA DEFINITIVA</h2> 
          {/* Reutilizando .decision-block para o Testemunho */}
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle, rgba(0, 150, 132, 0.05), transparent 80%)',
            textAlign: 'center'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.8rem', fontFamily: "'Montserrat', sans-serif", color: 'var(--color-heading)', lineHeight: 1.4, marginBottom: '2.5rem'}}>
                "Qualquer consultor pode vender método. [cite: 326] Eu apliquei o meu no meu próprio negócio, sob condições extremas: zero histórico, mercado dominado por gigantes, 45 dias de prazo. [cite: 327-328] Resultado: Parceiro Oficial Keepit + primeira venda de 1.200+ usuários. [cite: 329] Não é teoria. É Engenharia de Receita validada com pele no jogo." [cite: 330]
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                [cite_start]src="/cases/julio_figueiredo.png" // [cite: 331] (caminho inferido)
                alt="Júlio Figueiredo"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Júlio Figueiredo 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0}}>Founder & CRO - Synapse B2B [cite: 333]<br/>Founder & CRO - AORKIA [cite: 334]</p> 
              </div>
            </div>

            <ul style={{listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem', flexWrap: 'wrap'}}>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                AORKIA criada em 2024 [cite: 335]
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Primeira venda validada em 45 dias [cite: 336]
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Método Synapse aplicado sob fogo real [cite: 337]
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
                <ShieldCheck size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 1: HISTÓRICO NÃO É PRÉ-REQUISITO</h3> 
              <p>AORKIA tinha zero clientes, zero marca. [cite: 344] Mas tinha parceria com líder global. [cite: 345]</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Quando você não tem credibilidade própria, transfira credibilidade de quem tem. "Se o líder global escolheu a AORKIA, você pode confiar." [cite: 347-349]</p>
            </div>
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Zap size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 2: ATIVE A DOR ANTES DE MOSTRAR SOLUÇÃO</h3> 
              <p>Backup é produto invisível até ser crítico. [cite: 354] Cliente não acorda pensando "preciso de backup". [cite: 355]</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Estratégia:</strong> Fazer sentir a dor ANTES da perda. "Quanto custa sua empresa parada 48h esperando recuperação de dados?". [cite: 357-359] Urgência não existe naturalmente. É criada. [cite: 361-363]</p>
            </div>

            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Gem size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 3: MÉTODO SÓ É VÁLIDO COM SKIN IN THE GAME</h3> 
              <p>Este case não foi consultoria. Foi laboratório pessoal. [cite: 369] Zero histórico + mercado competitivo + 45 dias = condições extremas. [cite: 370-371] Funcionou. [cite: 373]</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Metodologia não testada no próprio negócio do criador é teoria. Este case prova que funciona quando há pele no jogo total. [cite: 375-377]</p>
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
            VOCÊ TAMBÉM ESTÁ ENTRANDO EM MERCADO 
            <br/>
            COMPETITIVO SEM HISTÓRICO? 
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem'}}>
            Zero track record não é sentença de morte. [cite: 384]
            É oportunidade de fazer diferente desde o início. [cite: 385]
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para estruturar tração acelerada no seu negócio. [cite: 388-389]
            Zero pressão. Apenas clareza estratégica. 
          </p>

          {/* Link de Download do PDF Adicional */}
          <div id="download-pdf" className="cta-secondary-link" style={{marginTop: '3rem'}}>
            <p style={{marginBottom: '0.5rem'}}>Prefere estudar o caso antes?</p> 
            <Link href="/pdf/synapse-case-aorkia.pdf" className="btn-case-revolutionary" style={{justifyContent: 'center', fontSize: '1rem'}}>
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}