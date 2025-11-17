// pages/cases/versao-holistica.js
// Versão Final Otimizada - Foco em Criação de Categoria, Captação e Governança (G-Ops)
// CORREÇÃO DE BUILD: Importação do ícone 'Download' adicionada

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, // <-- IMPORTAÇÃO ADICIONADA AQUI
  CheckCircle2, 
  Target,
  Layers, 
  BrainCircuit,
  Gem,
  TrendingUp,
  LineChart,
  ShieldCheck,
  XCircle
} from 'lucide-react';

export default function VersaoHolisticaCase() {

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
        <title>Case Versão Holística | Synapse B2B</title>
        <meta name="description" content="De metodologia validada para categoria de mercado. R$ 500k captados e oceano azul criado em 90 dias." /> 
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
            <Layers size={48} style={{color: 'var(--color-primary)'}} />
          </div>

          <h1 className="section-title">
            DE METODOLOGIA VALIDADA PARA <br/>CATEGORIA DE MERCADO
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            ROI de 5.8x provado pela UFMG. Pitch que não convertia. <br/>90 dias depois: R$ 500k captados e oceano azul criado.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O PARADOXO DA INOVAÇÃO                                      */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <h2 className="section-title text-center">O Paradoxo da Inovação</h2>
            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'center', marginTop: '-1rem'}}>Quando Genialidade Técnica Trava Receita</h3>
            
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              A Versão Holística tinha tudo para escalar: metodologia com validação científica (UFMG), ROI comprovado de 5.8x em pacientes crônicos, parcerias com hospitais de referência.
            </p>
            <p style={{textAlign: 'center', fontWeight: 600, marginBottom: '3rem'}}>Menos uma coisa: <strong>clareza de negócio</strong>.</p>

            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem'}}>O Pitch que Confundia Investidores</h3>
            <p>Pitch de 15 minutos. Decisores saíam impressionados, mas confusos:</p>

            <div style={{
              background: 'rgba(0, 150, 132, 0.08)',
              border: '2px solid var(--color-primary)',
              borderRadius: '12px',
              padding: '2rem',
              margin: '2rem 0'
            }}>
              <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem'}}>O Padrão Invisível:</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> "É consultoria ou software?"</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> ROI comprovado mas não comunicado</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Pitch para quem aprecia (clínicos) vs quem aprova orçamento (CFOs)</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> História de superação pessoal desconectada da tese comercial</li>
              </ul>
            </div>
            
            <p style={{color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem', margin: '2rem 0'}}>
              "Isabella vendia humanização do cuidado para diretores clínicos apaixonados. Mas quem aprovava o orçamento eram CFOs pressionados por custo. A conversa acontecia no canal errado."
            </p>

            <p><strong>Resultado:</strong> Hospitais interessados, sem conversão. Ciclos infinitos. Impossibilidade de captar.</p>
            <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '1rem'}}>
              Insight cruel: Inovação sem clareza não é vantagem competitiva. É desvantagem comercial.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: DA COMPLEXIDADE PARA CATEGORIA (TIMELINE)                   */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title text-center">Da Complexidade para Categoria</h2>
          <p className="lead-text text-center">Timeline: Transformação em 90 Dias</p>
          
          {/* Timeline Visual Simplificado */}
          <div className="case-timeline-visual" style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '90%', 
            maxWidth: '800px',
            margin: '3rem auto 5rem', 
            borderTop: '2px solid var(--color-border)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Validação</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Categoria</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>30 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Captação</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>45 dias</div> 
            </div>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
            
            {/* FASE 1: Validação Comercial */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Target size={28} /></div>
                <h3 className="pillar-card-title">FASE 1: Validação Comercial (Sprint)</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 15 dias | Ferramenta: Mapeamento de Decisão Real</p>
                
                <p className="pillar-card-description">
                  Decodificamos o processo decisório verdadeiro nos hospitais:
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Decisor real:</strong> CFO, não diretor clínico (insight crítico)</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Objeção principal:</strong> "Mais uma consultoria cara sem ROI"</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Gatilho de decisão:</strong> Case com métrica financeira tangível</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Erro estratégico:</strong> Vender para quem aprecia vs quem aprova</li>
                </ul>

                <div style={{marginTop: '1.5rem', padding: '1.5rem', background: 'var(--color-card-bg-hover)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>O Ajuste de Canal:</strong>
                  <p style={{fontSize: '0.9rem', margin: 0}}>
                    Isabella tinha a mensagem certa para o público errado. Diretores clínicos amavam a metodologia. CFOs não entendiam o ROI. Mudamos a conversa de "cuidado humanizado" para <strong>"redução de custo de paciente de alto valor em 5.8x"</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2: Criação de Categoria */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Layers size={28} /></div>
                <h3 className="pillar-card-title">FASE 2: Criação de Categoria</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 30 dias | Entrega: Oceano Azul</p>
                
                <p className="pillar-card-description">
                  Não reposicionamos a empresa. Criamos a categoria.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Antes:</strong> "Cuidado Farmacêutico Integrativo" (incompreensível)</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Depois:</strong> "1ª Plataforma de CareOps Integrativo do Brasil" (competição zero)</li>
                </ul>

                 <h4 style={{color: 'var(--color-heading)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem'}}>Estrutura da Nova Categoria:</h4>
                 <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.9rem'}}>
                   <li style={{marginBottom: '0.5rem'}}>✔ Atenção Farmacêutica + Terapias Integrativas + Inteligência de Dados</li>
                   <li style={{marginBottom: '0.5rem'}}>✔ Resultado tangível: 5.8x de redução no custo (validado UFMG)</li>
                   <li>✔ 3 verticais com hierarquia: Core (Hospitais), Tração (Empresas), Validação (Escolas)</li>
                 </ul>
                 
                 <div style={{marginTop: '1.5rem', padding: '1.5rem', background: 'var(--color-card-bg-hover)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                   <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>Por que criar categoria é criar poder:</strong>
                   <p style={{fontSize: '0.9rem', margin: 0}}>
                     Antes: VH competia com clínicas digitais, apps de wellness. Depois: VH é CareOps Integrativo. Não há concorrência porque não há comparação. A história de Isabella virou prova viva da lacuna no sistema de saúde.
                   </p>
                 </div>

                  {/* Imagem da Categoria */}
                  <div className="case-image-wrapper" style={{marginTop: '2rem'}}>
                    <Image 
                      src="/cases/versaoholistica-br-hospitais.png"
                      alt="Visual da categoria CareOps Integrativo"
                      width={1000}
                      height={500}
                      quality={100}
                      style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                    />
                  </div>
              </div>
            </div>

            {/* FASE 3: Plataforma Digital + Tese de Investimento */}
            <div className="pillar-card-revolutionary" style={{gridColumn: '1 / -1'}}> {/* Ocupa largura total */}
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><BrainCircuit size={28} /></div>
                <h3 className="pillar-card-title">FASE 3: Plataforma Digital + Tese de Investimento</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 45 dias | Resultado: R$ 500k captados</p>
                
                <p className="pillar-card-description" style={{fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-heading)'}}>
                  Materializamos a categoria em ativos de captação.
                </p>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem', width: '100%'}}>
                  
                  {/* Etapa 1: Fundação */}
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>ETAPA 1 — Fundação Estratégica (30 dias):</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.95rem'}}>
                      <li style={{marginBottom: '0.5rem'}}>• Plataforma 100% focada na Arquitetura de Cuidados Integrativos</li>
                      <li style={{marginBottom: '0.5rem'}}>• Educação de mercado sobre a nova categoria</li>
                      <li style={{marginBottom: '0.5rem'}}>• Modelo de receita estruturado por vertical</li>
                      <li style={{marginBottom: '0.5rem'}}>• ROI de 5.8x como diferenciação central</li>
                    </ul>
                     <div className="case-image-wrapper" style={{marginTop: '1.5rem'}}>
                        <Image 
                          src="/cases/versaoholistica-home.png"
                          alt="Homepage versaoholistica.com.br"
                          width={1000}
                          height={500}
                          quality={100}
                          style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '200px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                        />
                      </div>
                  </div>

                  {/* Etapa 2: Expansão e O Diferencial G-Ops */}
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>ETAPA 2 — Expansão Sistêmica (G-Ops):</h4>
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.95rem'}}>
                      <li style={{marginBottom: '0.5rem'}}>• Camada G-Ops (Governance Operations) que eleva CareOps para plataforma tecnológica</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Interoperabilidade:</strong> Integração com sistemas hospitalares</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Wearable Nicehealth:</strong> Pulseira de dados em tempo real</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Inteligência de Dados:</strong> Analytics de ROI para CFOs</li>
                    </ul>

                    <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', border: '1px solid var(--color-primary)'}}>
                      <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem'}}>O Diferencial do G-Ops:</h4>
                      <p style={{fontSize: '0.95rem'}}>
                        Combina Metodologia validada + Interoperabilidade sistêmica + Monitoramento contínuo + ROI em tempo real. Não é mais "confie na metodologia". É "veja o resultado acontecendo ao vivo".
                      </p>
                    </div>

                    <h4 style={{color: 'var(--color-heading)', marginTop: '1.5rem', marginBottom: '0.5rem'}}>Material de Captação:</h4>
                     <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.95rem'}}>
                      <li style={{marginBottom: '0.5rem'}}>• Tese de investimento fundamentada</li>
                      <li style={{marginBottom: '0.5rem'}}>• Pitch deck de "inevitabilidade"</li>
                      <li>• <strong>Resultado Imediato:</strong> R$ 500k captados (Compete Minas) em 45 dias.</li>
                    </ul>
                  </div>

                </div>

                <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
                <p>Investidores não investem em soluções complexas. Investem em categorias inevitáveis com primeiro player claro. O pitch deixou de ser "entenda nossa metodologia" para virar "entenda por que CareOps Integrativo é a próxima fronteira". Clareza de categoria + ROI validado + história autêntica = tese irrefutável.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 3: ANTES / DEPOIS                                              */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Transformação de Narrativa</h2>

          <div className="comparison-grid" style={{
            maxWidth: '900px', 
            margin: '3rem auto',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            background: 'var(--color-card-bg)',
            padding: '2rem'
          }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center'}}>
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-text)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Antes</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', lineHeight: 1.8}}>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Pitch de 15 minutos confuso</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> "O que vocês fazem?"</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> ROI validado mas não comunicado</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Modelo disperso sem hierarquia</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Zero investimento captado</li>
                  <li><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> História isolada da proposta</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)'}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-heading)', lineHeight: 1.8, fontWeight: 500}}>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Pitch de 3 minutos cristalino</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> "Quando começamos?"</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> ROI como diferenciação central</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> 3 verticais + camada G-Ops</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> R$ 500k captados</li>
                  <li><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> História como prova viva</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '3rem'}}>
            NÚMEROS EM DESTAQUE 
          </h3>
          {/* Reutilizando o grid de "3 Verdades" para os "Números" */}
          <div className="truths-grid-revolutionary">
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>R$ 500k</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>captados</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>5.8x</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>ROI validado</p> 
            </div>
            <div className="truth-card-revolutionary">
              <h3 className="truth-card-title" style={{fontSize: '3rem', color: 'var(--color-primary)', fontFamily: "'Montserrat', sans-serif"}}>90</h3> 
              <p style={{fontSize: '1.2rem', color: 'var(--color-heading)'}}>dias do diagnóstico à captação</p> 
            </div>
          </div>

          <h3 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '1.5rem', marginTop: '5rem'}}>
            MÉTRICA QUE REALMENTE IMPORTA 
          </h3>
          <p className="lead-text" style={{color: 'var(--color-heading)', fontStyle: 'italic'}}>
            De complexo para inevitável. De "vamos pensar" para cheque de R$ 500k.
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            Categoria que antes não existia.
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: O TRABALHO CONTINUA (NOVA SEÇÃO DE DETALHES)                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title text-center">Da Captação para Tração de Mercado</h2>
          <p className="lead-text text-center" style={{marginBottom: '3rem'}}>
            Com categoria criada e R$ 500k captados, o foco mudou de validar tese para gerar tração.
          </p>
          <p className="lead-text text-center" style={{fontSize: '1rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '-2rem', marginBottom: '3rem'}}>
            Status Atual: Advisory Board (até dezembro/2025)
          </p>

          <div className="solutions-2col-grid"> {/* Reutilizando grid de 2 colunas */}
            
            {/* Frente 1 */}
            <div className="solution-column-card">
              <h3 className="solution-column-title" style={{textAlign: 'left'}}>Frente 1: Validação de Mercado via Eventos</h3>
              <p className="solution-column-desc" style={{textAlign: 'left', minHeight: 'auto', marginBottom: '1.5rem'}}>
                Participação ativa em eventos de Negócios e Tecnologia.
              </p>
              <ul className="solution-column-list" style={{gap: '1.5rem'}}>
                <li>
                  <strong>Objetivos:</strong>
                  <span>Testar pitches, identificar objeções emergentes, refinar narrativa com feedback real e conectar Isabella com decisores.</span>
                </li>
                <li>
                  <strong>Resultado prático:</strong>
                  <span>Cada evento é laboratório de validação. Pitch evolui com base em perguntas reais de CFOs, não suposições.</span>
                </li>
              </ul>
            </div>

            {/* Frente 2 */}
            <div className="solution-column-card">
              <h3 className="solution-column-title" style={{textAlign: 'left'}}>Frente 2: Governança Estratégica</h3>
              <p className="solution-column-desc" style={{textAlign: 'left', minHeight: 'auto', marginBottom: '1.5rem'}}>
                Atuação como Advisory Board para guiar decisões críticas.
              </p>
              <ul className="solution-column-list" style={{gap: '1.5rem'}}>
                <li>
                  <strong>Decisões Críticas:</strong>
                  <span>Priorização de verticais (Hospitais vs Empresas vs Escolas), estratégia de parcerias (wearable, integrações) e modelagem de receita recorrente.</span>
                </li>
                <li>
                  <strong>Princípio:</strong>
                  <span>Decisões de alto impacto não podem ser baseadas em intuição quando você tem R$ 500k para investir.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: VOZ DO CLIENTE (ATUALIZADO)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle, rgba(0, 150, 132, 0.05), transparent 80%)',
            textAlign: 'center',
            padding: '3rem'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.1rem', fontFamily: "'Inter', sans-serif", color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic'}}>
                "A Synapse B2B nos deu o que nenhuma aceleradora havia entregue: <strong>clareza</strong>. Eles conectaram nossa paixão com a linguagem que hospitais e investidores precisavam ouvir. Saímos de 'solução complexa' para 'nova categoria'. O resultado? R$ 500k captados. E agora continuam ao nosso lado como Advisory Board, guiando as decisões que vão transformar investimento em tração real."
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

             <div style={{marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <span className="case-card-tag-rev">Cliente desde 2025</span>
                <span className="case-card-tag-rev">R$ 500k captados</span>
                <span className="case-card-tag-rev">Advisory Board ativo</span>
             </div>
             
             <div style={{marginTop: '2rem'}}>
               <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="btn-case-revolutionary" style={{fontSize: '0.9rem'}}>
                 Ver a plataforma funcionando <ArrowRight size={16} />
               </a>
             </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: A LIÇÃO DE CATEGORIA (CTA FINAL)                            */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <Gem size={48} style={{color: 'var(--color-primary)', marginBottom: '1.5rem'}} />
          <h2 className="section-title">Sua solução também é inovadora mas ninguém investe?</h2>
          
          <div style={{maxWidth: '700px', margin: '2rem auto', textAlign: 'left', display: 'inline-block'}}>
             <ul style={{listStyle: 'none', padding: 0, fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8}}>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Metodologia validada mas pitch que não converte</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Produto tecnicamente superior perdendo para narrativas mais simples</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Investidores impressionados mas sem cheque</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Você vende features, não impacto de negócio</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Você captou mas não sabe qual vertical atacar primeiro</li>
             </ul>
          </div>

          <p className="lead-text" style={{fontSize: '1.3rem', color: 'var(--color-heading)', margin: '2rem 0', fontWeight: 600}}>
            Você não precisa de mais validação técnica. Você precisa de clareza de categoria + governança de execução.
          </p>

          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Vamos traduzir sua inovação em tese investível — e depois em tração real.<br/>
            Primeira conversa: 21 minutos para mapear sua narrativa de captação e estratégia de escala.
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