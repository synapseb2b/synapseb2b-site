// pages/cases/exclusiva-engenharias.js
// Versão Final Otimizada - Foco em Sistema, Execução e Resultados Reais
// Correção de Build: Substituição de ">" por "&gt;" no JSX

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
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <h2 className="section-title text-center">A Engenharia Começa no Diagnóstico</h2>
            
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
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Vendas 100% por indicação</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Crescimento sem meta = sem método</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> História fragmentada na mente dos sócios</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckCircle2 size={18} color="var(--color-primary)"/> Zero sistema comercial documentado</li>
              </ul>
            </div>
            
            <p style={{color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem', margin: '2rem 0'}}>
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
        <div className="container">
          <h2 className="section-title text-center">A Estratégia Antes da Tração</h2>
          
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

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
            
            {/* FASE 1: Go-To-Market & Posicionamento */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Brain size={28} /></div>
                <h3 className="pillar-card-title">FASE 1: Go-To-Market & Posicionamento</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 15 dias | Ferramenta: Cortex B2B™</p>
                
                <p className="pillar-card-description">
                  Aplicamos diagnóstico 360° para extrair o diferencial real:
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Segmento:</strong> Industrial (IVECO, Cimento Nacional, FPT)</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Nicho:</strong> Áreas de apoio essencial em plantas ativas</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Promessa:</strong> Zero interrupção de produção</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>Metodologia:</strong> Cobertura total (civil, elétrica, mecânica)</li>
                </ul>

                <div style={{marginTop: '1.5rem', padding: '1.5rem', background: 'var(--color-card-bg-hover)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>O Buy-In Absoluto:</strong>
                  <p style={{fontSize: '0.9rem', margin: 0}}>
                    Transformamos "Engenharia e Climatização" em <strong>"Exclusiva Engenharias"</strong>. A nova tese fez tanto sentido que a empresa alterou seu CNPJ por iniciativa própria — sem solicitação nossa. A clareza estratégica gerou convicção imediata.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2: Plataforma de Aceleração */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><Zap size={28} /></div>
                <h3 className="pillar-card-title">FASE 2: Plataforma de Aceleração</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 20 dias | Entrega: exclusivaengenharias.com</p>
                
                <p className="pillar-card-description">
                  Construímos motor de receita, não site institucional:
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0', color: 'var(--color-text)', fontSize: '0.95rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>30%</strong> credibilidade (cases, metodologia)</li>
                  <li style={{marginBottom: '0.5rem'}}>• <strong>70%</strong> conversão (simulador, jornadas, atendimento)</li>
                </ul>

                 <h4 style={{color: 'var(--color-heading)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem'}}>Ferramentas Integradas:</h4>
                 <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.9rem'}}>
                   <li style={{marginBottom: '0.5rem'}}>✔ Simulador de Orçamento: Cliente recebe faixa em 10s</li>
                   <li style={{marginBottom: '0.5rem'}}>✔ Atendimento Inteligente: Qualificação automática</li>
                   <li>✔ Narrativa por segmento: Foco em continuidade operacional</li>
                 </ul>
                 
                 <div style={{marginTop: '1.5rem'}}>
                   <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer" className="btn-case-revolutionary" style={{fontSize: '0.9rem'}}>
                     Ver plataforma funcionando <ArrowRight size={16} />
                   </a>
                 </div>
              </div>
            </div>

            {/* FASE 3: CRO as a Service */}
            <div className="pillar-card-revolutionary" style={{gridColumn: '1 / -1'}}> {/* Ocupa largura total se possível */}
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <div className="pillar-icon-wrapper"><TrendingUp size={28} /></div>
                <h3 className="pillar-card-title">FASE 3: CRO as a Service (Em Andamento)</h3>
                <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem'}}>Duração: 90 dias | Status: 50% concluído</p>
                
                <p className="pillar-card-description" style={{fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-heading)'}}>
                  Não entregamos consultoria. Operamos a diretoria comercial.
                </p>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem', width: '100%'}}>
                  
                  {/* Estrutura */}
                  <div>
                    <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>Estrutura Implementada (Primeiros 45 dias):</h4>
                    {/* CORREÇÃO DE SINTAXE JSX AQUI */}
                    <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '0.95rem'}}>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Pipeline em Expansão:</strong> Prospecção ativa estruturada com roteiros validados</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Estratégia Dual-Channel:</strong> Inbound + Outbound</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Ferramentas de IA:</strong> Automação de qualificação e enriquecimento de leads</li>
                      <li style={{marginBottom: '0.5rem'}}>• <strong>CRM Proprietário:</strong> Desenvolvido pela Synapse para gestão industrial</li>
                      {/* CORREÇÃO DE SINTAXE JSX NA PRÓXIMA LINHA: usar &gt; para maior que */}
                      <li style={{marginBottom: '0.5rem'}}>• <strong>Conversão:</strong> Taxa de resposta documentada (LinkedIn &gt; Email &gt; Cold call)</li>
                    </ul>
                  </div>

                  {/* Resultados e Próximos Passos */}
                  <div>
                    <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--color-primary)'}}>
                      <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem'}}>Resultado Parcial (45 dias):</h4>
                      <p style={{fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)'}}>Forecast Mensal Gerado: 3x o melhor resultado anual histórico.</p>
                      <p style={{fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.5rem'}}>"Não projetamos crescimento. Estamos gerando pipeline documentado com método replicável."</p>
                    </div>

                    <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem'}}>Objetivo Final (Abril/2025):</h4>
                    <p style={{fontSize: '0.95rem'}}>Expansão de 100% sobre 2024, com sistema operando independente da Synapse B2B.</p>
                  </div>

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
      {/* SEÇÃO 4: O TRABALHO CONTINUA (NOVA SEÇÃO DE DETALHES)                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title text-center">Da Fundação Estratégica para Escala Operacional</h2>
          <p className="lead-text text-center" style={{marginBottom: '3rem'}}>
            Com clareza estratégica e plataforma digital validadas, o foco mudou de construir sistema para validar escala.
          </p>

          <div className="solutions-2col-grid"> {/* Reutilizando grid de 2 colunas */}
            
            {/* Frente 1 */}
            <div className="solution-column-card">
              <h3 className="solution-column-title" style={{textAlign: 'left'}}>Frente 1: Construção do Motor Comercial</h3>
              <ul className="solution-column-list" style={{gap: '1.5rem'}}>
                <li>
                  <strong>Pipeline em Expansão</strong>
                  <span>Prospecção ativa semanal com roteiros testados. Pipeline mapeado: Prospecção → Qualificação → Proposta → Negociação.</span>
                </li>
                <li>
                  <strong>Estratégia Dual-Channel</strong>
                  <span><strong>Inbound:</strong> Conteúdo técnico otimizado para SEO (cases + guias).<br/><strong>Outbound:</strong> LinkedIn Sales Navigator + sequências personalizadas.</span>
                </li>
                <li>
                  <strong>Ferramentas de IA</strong>
                  <span>Enriquecimento automático de leads, qualificação via chatbot inteligente e follow-up automatizado com gatilhos.</span>
                </li>
              </ul>
            </div>

            {/* Frente 2 */}
            <div className="solution-column-card">
              <h3 className="solution-column-title" style={{textAlign: 'left'}}>Frente 2: CRM Proprietário</h3>
              <p className="solution-column-desc" style={{textAlign: 'left', minHeight: 'auto', marginBottom: '1.5rem'}}>
                Sistema desenvolvido pela Synapse B2B especificamente para o segmento industrial.
              </p>
              <ul className="solution-column-list" style={{gap: '1.5rem'}}>
                <li>
                  <strong>Gestão Especializada</strong>
                  <span>Gestão de pipeline por tipo de projeto (civil, elétrica, multidisciplinar). Histórico de interações documentado automaticamente.</span>
                </li>
                <li>
                  <strong>Inteligência de Mercado</strong>
                  <span>Alertas de oportunidade (obras anunciadas, licitações, expansões industriais).</span>
                </li>
                <li>
                  <strong>Diferencial</strong>
                  <span>Não é Salesforce genérico. É sistema moldado ao processo da Exclusiva.</span>
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
                <span className="case-card-tag-rev">Cliente desde 2024</span>
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
      `}</style>
    </>
  );
}