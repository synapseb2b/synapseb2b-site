// pages/cases/exclusiva-engenharias.js
// Versão Final Otimizada - Layout Corrigido (Centralizado e Horizontal)

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
  XCircle,
  LineChart,
  Gem,
  ShieldCheck,
  Layout,
  Users
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
        <meta name="description" content="Recusamos fazer um site. Entregamos um sistema. Forecast mensal gerado: 3x o melhor ano histórico em 128 dias." /> 
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
            RECUSAMOS FAZER UM SITE.<br/>
            ENTREGAMOS UM SISTEMA.
          </h1>
          <p className="hero-subheadline wider-on-desktop">
            Forecast mensal gerado: 3x o melhor ano histórico. Tempo: 128 dias. Método: Engenharia de Receita.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O DIAGNÓSTICO QUE MUDOU TUDO                                */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center"> {/* CORREÇÃO 1: Centralizado */}
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="section-title">A Engenharia Começa no Diagnóstico</h2>
            
            <p className="lead-text" style={{marginBottom: '2rem'}}>
              O cliente tinha excelência técnica comprovada e atendia gigantes como IVECO e Cimento Nacional. Mas o crescimento sem meta revelava um problema invisível.
            </p>

            <h3 style={{color: 'var(--color-heading)', fontSize: '1.4rem', marginBottom: '1rem'}}>A Reunião de 42 Minutos</h3>
            <p>Em uma sessão estratégica pro bono, identificamos o padrão crítico:</p>

            <div style={{
              background: 'rgba(0, 150, 132, 0.08)',
              border: '2px solid var(--color-primary)',
              borderRadius: '12px',
              padding: '2rem',
              margin: '2rem 0'
            }}>
              <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem'}}>O Padrão Invisível:</h4>
              <ul style={{listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left'}}> {/* Mantendo lista alinhada para leitura, mas bloco centralizado */}
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Vendas 100% por indicação</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Crescimento sem meta = sem método</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> História fragmentada na mente dos sócios</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Zero sistema comercial documentado</li>
              </ul>
            </div>
            
            <p style={{color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem', margin: '2rem 0', textAlign: 'left'}}>
              "Eles tinham uma bela história, uma metodologia e um nicho claro. Mas tudo estava disperso. Faltava Engenharia de Receita."
            </p>

            <p style={{fontWeight: 600, color: 'var(--color-heading)'}}>
              O pedido inicial foi "fazer um site". Recusamos. Um site sem clareza estratégica não resolve o gargalo real.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: A ESTRATÉGIA ANTES DA TRAÇÃO (TIMELINE)                     */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container text-center"> {/* CORREÇÃO 1: Centralizado */}
          <h2 className="section-title">A Estratégia Antes da Tração</h2>
          
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
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Diagnóstico</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>42 min</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Estratégia</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Plataforma</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>20 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)'}}>Liderança</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.9rem'}}>Em andamento</div> 
            </div>
          </div>

          {/* CORREÇÃO 2: Fases em Colunas Horizontais (Grid) */}
          <div className="pillar-grid-revolutionary" style={{
            gridTemplateColumns: 'repeat(3, 1fr)', /* Força 3 colunas */
            gap: '2rem',
            marginTop: '2rem'
          }}>
            
            {/* FASE 1 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}> {/* CORREÇÃO 1: Centralizado */}
                <div className="pillar-icon-wrapper"><Brain size={28} /></div>
                <h3 className="pillar-card-title">FASE 1: Go-To-Market & Posicionamento</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 15 dias | Ferramenta: Cortex B2B™</p>
                
                <p className="pillar-card-description">
                  Aplicamos diagnóstico 360° para extrair o diferencial real.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Segmento:</strong> Industrial</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Nicho:</strong> Áreas essenciais</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Promessa:</strong> Zero interrupção</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Metodologia:</strong> Cobertura total</li>
                </ul>

                <div style={{marginTop: '1.5rem', padding: '1rem', background: 'var(--color-card-bg-hover)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>O Buy-In Absoluto:</strong>
                  <p style={{fontSize: '0.9rem', margin: 0}}>
                    Transformamos "Engenharia e Climatização" em <strong>"Exclusiva Engenharias"</strong>. A nova tese fez tanto sentido que a empresa alterou seu CNPJ.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}> {/* CORREÇÃO 1: Centralizado */}
                <div className="pillar-icon-wrapper"><Zap size={28} /></div>
                <h3 className="pillar-card-title">FASE 2: Plataforma de Aceleração</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 20 dias | Entrega: exclusivaengenharias.com</p>
                
                <p className="pillar-card-description">
                  Construímos motor de receita, não site institucional.
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>30%</strong> credibilidade</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>70%</strong> conversão</li>
                </ul>

                 <h4 style={{color: 'var(--color-heading)', fontSize: '1rem', marginTop: '1rem', marginBottom: '0.5rem'}}>Ferramentas Integradas:</h4>
                 <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.9rem'}}>
                   <li style={{marginBottom: '0.5rem'}}>✔ Simulador de Orçamento</li>
                   <li style={{marginBottom: '0.5rem'}}>✔ Atendimento Inteligente</li>
                   <li>✔ Narrativa por segmento</li>
                 </ul>
                 
                 <div style={{marginTop: '1.5rem'}}>
                   <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer" className="btn-case-revolutionary" style={{fontSize: '0.9rem'}}>
                     Ver plataforma <ArrowRight size={16} />
                   </a>
                 </div>
              </div>
            </div>

            {/* FASE 3 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}> {/* CORREÇÃO 1: Centralizado */}
                <div className="pillar-icon-wrapper"><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title">FASE 3: CRO as a Service</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 90 dias | Status: 50% concluído</p>
                
                <p className="pillar-card-description" style={{fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-heading)'}}>
                  Operamos a diretoria comercial.
                </p>

                 <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• Estrutura de prospecção</li>
                  <li style={{marginBottom: '0.5rem'}}>• Validação de Playbook</li>
                  <li style={{marginBottom: '0.5rem'}}>• Liderança de reuniões</li>
                 </ul>

                 <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1rem', borderRadius: '12px', marginTop: '1rem', border: '1px solid var(--color-primary)'}}>
                      <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem', fontSize: '0.9rem'}}>Resultado Parcial (45 dias):</h4>
                      <p style={{fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)'}}>Forecast Mensal &gt; Melhor faturamento anual histórico.</p>
                 </div>
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
          <h2 className="section-title">Transformação Sistêmica</h2>

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
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> 3 empresas fragmentadas</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Zero presença digital</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> 100% crescimento por indicação</li>
                  <li style={{marginBottom: '0.5rem'}}><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Receita imprevisível</li>
                  <li><XCircle size={16} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}}/> Heroísmo individual</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)'}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Depois</h4>
                <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-heading)', lineHeight: 1.8, fontWeight: 500}}>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Hub integrado reconhecível</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Motor de demanda ativo</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Canais estruturados (In/Out)</li>
                  <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Forecast 3x o melhor ano</li>
                  <li><CheckCircle2 size={16} style={{display: 'inline', marginRight: '8px', color: 'var(--color-primary)'}}/> Sistema em validação</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="lead-text" style={{fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--color-heading)'}}>
            Métrica que importa: De invisível para encontrável. De improviso para método documentado.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: O TRABALHO CONTINUA (NOVA SEÇÃO DE DETALHES EM CARDS)       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container text-center"> {/* CORREÇÃO 1: Centralizado */}
          <h2 className="section-title">Da Fundação Estratégica para Escala Operacional</h2>
          <p className="lead-text" style={{marginBottom: '3rem'}}>
            Com clareza estratégica e plataforma digital validadas, o foco mudou de construir sistema para validar escala.
          </p>

          {/* CORREÇÃO 3: Cards Destacados para as Frentes */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
            
            {/* Frente 1: Card Destacado */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><Target size={28} /></div>
                <h3 className="pillar-card-title">Frente 1: Construção do Motor Comercial</h3>
                <ul className="solution-column-list" style={{gap: '1.5rem', listStyle: 'none', padding: 0, marginTop: '1.5rem'}}>
                  <li>
                    <strong style={{color: 'var(--color-heading)'}}>Pipeline em Expansão</strong>
                    <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>Prospecção ativa semanal com roteiros testados. Pipeline mapeado: Prospecção → Qualificação → Proposta → Negociação.</p>
                  </li>
                  <li>
                    <strong style={{color: 'var(--color-heading)'}}>Estratégia Dual-Channel</strong>
                    <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}><strong>Inbound:</strong> Conteúdo técnico otimizado.<br/><strong>Outbound:</strong> LinkedIn Sales Navigator + sequências.</p>
                  </li>
                  <li>
                    <strong style={{color: 'var(--color-heading)'}}>Ferramentas de IA</strong>
                    <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>Enriquecimento automático de leads, qualificação via chatbot inteligente.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Frente 2: Card Destacado */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{alignItems: 'center', textAlign: 'center'}}>
                <div className="pillar-icon-wrapper"><Layout size={28} /></div>
                <h3 className="pillar-card-title">Frente 2: CRM Proprietário</h3>
                <p className="pillar-card-description" style={{marginBottom: '1.5rem'}}>
                  Sistema desenvolvido pela Synapse B2B especificamente para o segmento industrial.
                </p>
                <ul className="solution-column-list" style={{gap: '1.5rem', listStyle: 'none', padding: 0}}>
                  <li>
                    <strong style={{color: 'var(--color-heading)'}}>Gestão Especializada</strong>
                    <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>Gestão de pipeline por tipo de projeto (civil, elétrica, multidisciplinar). Histórico automático.</p>
                  </li>
                  <li>
                    <strong style={{color: 'var(--color-heading)'}}>Inteligência de Mercado</strong>
                    <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>Alertas de oportunidade (obras anunciadas, licitações, expansões industriais).</p>
                  </li>
                  <li>
                    <strong style={{color: 'var(--color-heading)'}}>Diferencial</strong>
                    <p style={{fontSize: '0.9rem', color: 'var(--color-text)'}}>Não é Salesforce genérico. É sistema moldado ao processo da Exclusiva.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: VOZ DO CLIENTE (ATUALIZADO)                                 */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center"> {/* CORREÇÃO 1: Centralizado */}
          <div className="decision-block" style={{
            maxWidth: '900px', 
            background: 'radial-gradient(circle, rgba(0, 150, 132, 0.05), transparent 80%)',
            textAlign: 'center',
            padding: '3rem',
            margin: '0 auto'
          }}>
            <blockquote style={{border: 0, padding: 0, margin: 0}}>
              <p style={{fontSize: '1.1rem', fontFamily: "'Inter', sans-serif", color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic'}}>
                "Crescíamos ano após ano — 30% em 2023, 31% em 2024 — mas não sabíamos como dar o próximo passo de forma estruturada. A Synapse B2B não trouxe consultoria tradicional. Eles recusaram nosso pedido de site, construíram clareza onde havia fragmentação e agora operam na linha de frente conosco. <br/><br/>
                <strong>Há 7 dias saímos de uma reunião que a Synapse prospectou e conduzimos juntos a negociação mais estruturada que já fizemos: usamos a Plataforma Digital, mapeamos todas as oportunidades e saímos com um pipeline de ~3 MM em projetos.</strong> Nunca havíamos participado de uma reunião de negócios com essa precisão. Não entregaram teoria. Entregaram método funcionando."
              </p>
            </blockquote>

            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                src="/public/cases/Fabricio-Tavares.png"
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

             <div style={{marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                {/* CORREÇÃO 4: Removido "Cliente desde 2024" */}
                <span className="case-card-tag-rev">Forecast 3x o ano histórico</span>
                <span className="case-card-tag-rev">CRO as a Service ativo</span>
             </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: A LIÇÃO DE ENGENHARIA (CTA FINAL)                             */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <Target size={48} style={{color: 'var(--color-primary)', marginBottom: '1.5rem'}} />
          <h2 className="section-title">Sua empresa também cresce por indicação mas sem método claro?</h2>
          
          <div style={{maxWidth: '700px', margin: '2rem auto', textAlign: 'left', display: 'inline-block'}}>
             <ul style={{listStyle: 'none', padding: 0, fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8}}>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Competência técnica excepcional mas narrativa fragmentada</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Time comercial improvisa cada venda sem playbook</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Crescimento acontece mas você não sabe replicar</li>
               <li style={{marginBottom: '0.5rem'}}><CheckCircle2 size={20} style={{display: 'inline', marginRight: '10px', color: 'var(--color-primary)'}}/> Liderança sobrecarregada porque "só ela consegue vender"</li>
             </ul>
          </div>

          <p className="lead-text" style={{fontSize: '1.3rem', color: 'var(--color-heading)', margin: '2rem 0', fontWeight: 600}}>
            Você não precisa de mais esforço. Você precisa de Engenharia de Receita.
          </p>

          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico de Engenharia</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Vamos encontrar sua história real — e o método para escalá-la.<br/>
            Primeira conversa: 21 minutos para mapear seu travamento de receita.
          </p>

          {/* Rodapé técnico do case */}
           <div style={{marginTop: '4rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.7}}>
              <p><strong>NOTA TÉCNICA:</strong> Status do Projeto: Em andamento | Fase Atual: CRO as a Service (50% concluído) | Próximas Entregas: Playbook validado + Autonomia operacional + Meta de expansão 100%</p>
           </div>
        </div>
      </section>

      {/* Estilos específicos desta página (se necessário além do global) */}
      <style jsx>{`
         .case-phases-grid {
            /* Ajustes específicos se necessário */
         }
         .comparison-row:last-child {
            border-bottom: none;
         }
         @media (max-width: 900px) {
            .pillar-grid-revolutionary {
               grid-template-columns: 1fr !important;
            }
         }
      `}</style>
    </>
  );
}