// pages/cases/exclusiva-engenharias.js
// Copy Otimizada: "Recusamos Fazer um Site. Entregamos um Sistema."

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, // Para o "Recusamos"
  Target,
  GitBranch, 
  Brain,
  Zap,
  TrendingUp,
  ExternalLink
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
            <XCircle size={48} style={{color: 'var(--color-primary)'}} />
          </div>

          <h1 className="section-title" style={{fontSize: '3rem', lineHeight: '1.2'}}>
            Recusamos Fazer um Site. <br/>Entregamos um Sistema.
          </h1>
          <p className="hero-subheadline">
            Forecast mensal gerado: 3x o melhor ano histórico. <br/>
            Tempo: 128 dias. Método: Engenharia de Receita.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O DIAGNÓSTICO QUE MUDOU TUDO                                  */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <h2 className="section-title text-center">A Engenharia Começa no Diagnóstico</h2>
            
            <p className="lead-text" style={{marginBottom: '2rem', textAlign: 'center'}}>
              O cliente tinha excelência técnica comprovada e atendia gigantes como IVECO e Cimento Nacional. Mas o crescimento sem meta revelava um problema invisível.
            </p>

            <h3 style={{color: 'var(--color-heading)', fontSize: '1.5rem', marginBottom: '1rem'}}>A Reunião de 42 Minutos</h3>
            <p>Em uma sessão estratégica pro bono, identificamos o padrão crítico:</p>

            {/* Box O Padrão Invisível */}
            <div style={{
              background: 'rgba(0, 150, 132, 0.08)', 
              border: '2px solid var(--color-primary)', 
              borderRadius: '12px', 
              padding: '2rem', 
              margin: '2rem 0'
            }}>
              <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem'}}>O Padrão Invisível:</h4>
              <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                <li style={{display: 'flex', gap: '0.8rem'}}><CheckCircle2 size={20} /> Vendas 100% por indicação</li>
                <li style={{display: 'flex', gap: '0.8rem'}}><CheckCircle2 size={20} /> Crescimento sem meta = sem método</li>
                <li style={{display: 'flex', gap: '0.8rem'}}><CheckCircle2 size={20} /> História fragmentada na mente dos sócios</li>
                <li style={{display: 'flex', gap: '0.8rem'}}><CheckCircle2 size={20} /> Zero sistema comercial documentado</li>
              </ul>
            </div>

            <blockquote style={{
              borderLeft: '4px solid var(--color-primary)', 
              paddingLeft: '2rem', 
              margin: '2rem 0', 
              fontStyle: 'italic',
              color: 'var(--color-text)'
            }}>
              "Eles tinham uma bela história, uma metodologia e um nicho claro. Mas tudo estava disperso. Faltava Engenharia de Receita."
            </blockquote>

            <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '2rem'}}>
              O pedido inicial foi "fazer um site". Recusamos. Um site sem clareza estratégica não resolve o gargalo real.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: A ESTRATÉGIA ANTES DA TRAÇÃO (TIMELINE)                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title text-center">Timeline Dinâmica: Da Estratégia à Execução</h2>

          {/* Timeline Visual */}
          <div className="case-timeline-visual" style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            maxWidth: '800px', 
            margin: '3rem auto 5rem', 
            borderTop: '2px solid var(--color-border)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', fontSize: '0.9rem'}}>DIAGNÓSTICO</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem'}}>42 min</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', fontSize: '0.9rem'}}>ESTRATÉGIA</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem'}}>15 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', fontSize: '0.9rem'}}>PLATAFORMA</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem'}}>20 dias</div> 
            </div>
            <div className="case-timeline-phase" style={{textAlign: 'center', position: 'relative', flex: 1}}>
              <span style={{position: 'absolute', top: '-2.8rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--color-accent)', borderRadius: '50%', border: '4px solid var(--color-section-bg)'}}></span>
              <div style={{fontWeight: 'bold', color: 'var(--color-heading)', fontSize: '0.9rem'}}>LIDERANÇA</div>
              <div style={{color: 'var(--color-text)', fontSize: '0.85rem'}}>Em andamento</div> 
            </div>
          </div>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto'}}>
            
            {/* FASE 1 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <h3 className="pillar-card-title" style={{fontSize: '1.6rem'}}>FASE 1: Go-To-Market & Posicionamento</h3>
                <p style={{color: 'var(--color-accent)', fontWeight: '600', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>Duração: 15 dias | Ferramenta: Cortex B2B™</p>
                
                <h4 style={{color: 'var(--color-heading)', marginTop: '1rem'}}>O que fizemos:</h4>
                <p>Aplicamos diagnóstico 360° para extrair o diferencial real:</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', color: 'var(--color-text)', display: 'grid', gap: '0.5rem'}}>
                  <li><strong>Segmento:</strong> Industrial (IVECO, Cimento Nacional, FPT)</li>
                  <li><strong>Nicho:</strong> Áreas de apoio essencial em plantas ativas</li>
                  <li><strong>Promessa:</strong> Zero interrupção de produção</li>
                  <li><strong>Metodologia:</strong> Cobertura total (civil, elétrica, mecânica, automação)</li>
                </ul>
                <p style={{marginTop: '1rem', fontWeight: '600', color: 'var(--color-heading)'}}>Resultado: Transformamos "Engenharia e Climatização" em "Exclusiva Engenharias".</p>

                <div style={{marginTop: '1.5rem', padding: '1.5rem', background: 'var(--color-section-bg)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                  <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem'}}>O Buy-In Absoluto:</strong>
                  <p style={{fontSize: '0.95rem', margin: 0}}>
                    A nova tese fez tanto sentido que a empresa alterou seu CNPJ por iniciativa própria — sem solicitação nossa. A clareza estratégica gerou convicção imediata.
                  </p>
                </div>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <h3 className="pillar-card-title" style={{fontSize: '1.6rem'}}>FASE 2: Plataforma de Aceleração de Receita</h3>
                <p style={{color: 'var(--color-accent)', fontWeight: '600', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>Duração: 20 dias | Entrega: exclusivaengenharias.com</p>
                
                <h4 style={{color: 'var(--color-heading)', marginTop: '1rem'}}>O que fizemos:</h4>
                <p>Construímos motor de receita, não site institucional:</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', color: 'var(--color-text)', display: 'grid', gap: '0.5rem'}}>
                  <li>• <strong>30% credibilidade</strong> (cases, metodologia, certificações)</li>
                  <li>• <strong>70% conversão</strong> (simulador, jornadas por segmento, atendimento inteligente)</li>
                </ul>

                <h4 style={{color: 'var(--color-heading)', marginTop: '1.5rem'}}>Ferramentas Integradas:</h4>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', color: 'var(--color-text)', display: 'grid', gap: '0.5rem'}}>
                  <li>✔ <strong>Simulador de Orçamento:</strong> Cliente insere projeto, recebe faixa em 10 segundos</li>
                  <li>✔ <strong>Atendimento Inteligente:</strong> Novos leads qualificados automaticamente</li>
                  <li>✔ <strong>Narrativa por segmento:</strong> Foco em continuidade operacional, não features técnicos</li>
                </ul>
              </div>
            </div>

            {/* FASE 3 */}
            <div className="pillar-card-revolutionary">
              <div className="pillar-card-content" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <h3 className="pillar-card-title" style={{fontSize: '1.6rem'}}>FASE 3: CRO as a Service (Em Andamento)</h3>
                <p style={{color: 'var(--color-accent)', fontWeight: '600', marginTop: '-0.5rem', marginBottom: '1.5rem'}}>Duração: 90 dias | Status: 50% concluído</p>
                
                <h4 style={{color: 'var(--color-heading)', marginTop: '1rem'}}>O que estamos fazendo:</h4>
                <p>Não entregamos consultoria. Operamos a diretoria comercial:</p>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', color: 'var(--color-text)', display: 'grid', gap: '0.5rem'}}>
                  <li>• Estruturação completa da esteira comercial</li>
                  <li>• Liderança de prospecção ativa com roteiro validado</li>
                  <li>• Execução de reuniões com decisores industriais</li>
                  <li>• Construção do playbook em campo (não em slides)</li>
                </ul>

                <div style={{marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem'}}>
                  <strong style={{color: 'var(--color-primary)', fontSize: '1.2rem', display: 'block'}}>Resultado Parcial (45 dias)</strong>
                  <p style={{fontSize: '1.3rem', margin: '0.5rem 0', fontWeight: 700, color: 'var(--color-heading)'}}>
                    Forecast Mensal Gerado: 3x o melhor resultado anual histórico
                  </p>
                  <p style={{fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem'}}>
                    "Não projetamos crescimento. Estamos gerando pipeline documentado com método replicável."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 3: ANTES VS DEPOIS                                               */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Transformação Sistêmica</h2>

          <div style={{
            display: 'grid', 
            gridTemplateColumns: '1fr auto 1fr', 
            gap: '2rem', 
            alignItems: 'center', 
            margin: '3rem auto',
            maxWidth: '900px'
          }}>
            
            {/* ANTES */}
            <div style={{
              textAlign: 'left', 
              background: 'rgba(255, 0, 0, 0.05)', 
              padding: '2rem', 
              borderRadius: '12px',
              border: '1px solid rgba(255, 0, 0, 0.1)'
            }}>
              <h4 style={{color: '#ff6b6b', marginBottom: '1rem', fontSize: '1.2rem'}}>ANTES:</h4>
              <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem'}}>
                <li>• 3 empresas fragmentadas</li>
                <li>• Zero presença digital</li>
                <li>• 100% crescimento por indicação</li>
                <li>• Receita imprevisível</li>
                <li>• Heroísmo individual</li>
              </ul>
            </div>

            {/* SETA */}
            <div style={{color: 'var(--color-primary)', fontSize: '2rem'}}>→</div>

            {/* DEPOIS */}
            <div style={{
              textAlign: 'left', 
              background: 'rgba(0, 150, 132, 0.08)', 
              padding: '2rem', 
              borderRadius: '12px',
              border: '1px solid var(--color-primary)'
            }}>
              <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem'}}>DEPOIS:</h4>
              <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem'}}>
                <li>• Hub integrado reconhecível</li>
                <li>• Motor de demanda ativo</li>
                <li>• Canais estruturados</li>
                <li>• Forecast 3x o melhor ano</li>
                <li>• Sistema em validação</li>
              </ul>
            </div>
          </div>

          <p style={{fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-heading)', marginTop: '2rem'}}>
            Métrica que importa: De invisível para encontrável. De improviso para método.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: A LIÇÃO & CTA                                                */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">Sua empresa também cresce por indicação mas sem método claro?</h2>
          
          <div style={{maxWidth: '700px', margin: '2rem auto', textAlign: 'left'}}>
            <p style={{marginBottom: '1rem'}}>Se você reconhece estes padrões:</p>
            <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem', marginBottom: '2rem'}}>
              <li style={{display: 'flex', gap: '0.5rem'}}><CheckCircle2 size={20} color="var(--color-text)" /> Competência técnica excepcional mas narrativa fragmentada</li>
              <li style={{display: 'flex', gap: '0.5rem'}}><CheckCircle2 size={20} color="var(--color-text)" /> Time comercial improvisa cada venda sem playbook</li>
              <li style={{display: 'flex', gap: '0.5rem'}}><CheckCircle2 size={20} color="var(--color-text)" /> Crescimento acontece mas você não sabe replicar</li>
              <li style={{display: 'flex', gap: '0.5rem'}}><CheckCircle2 size={20} color="var(--color-text)" /> Liderança sobrecarregada porque "só ela consegue vender"</li>
            </ul>
            <p style={{fontSize: '1.2rem', color: 'var(--color-heading)', textAlign: 'center', fontWeight: 700}}>
              → Você não precisa de mais esforço. Você precisa de Engenharia de Receita.
            </p>
          </div>

          <div style={{marginTop: '3rem'}}>
            <h3 style={{marginBottom: '1.5rem', color: 'var(--color-heading)'}}>Vamos encontrar sua história real — e o método para escalá-la.</h3>
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico de Engenharia</span>
              <ArrowRight size={20} />
            </Link>
            <p style={{marginTop: '1rem', opacity: 0.7, fontSize: '0.9rem'}}>
              Primeira conversa: 21 minutos para mapear seu travamento de receita.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* NOTA TÉCNICA (RODAPÉ)                                                  */}
      {/* ====================================================================== */}
      <section className="section-solid" style={{padding: '2rem 0', borderTop: '1px solid var(--color-border)'}}>
        <div className="container">
          <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            fontSize: '0.9rem',
            color: 'var(--color-text)',
            opacity: 0.8
          }}>
            <div>
              <strong>Status do Projeto:</strong> Em andamento (CRO as a Service: 50% concluído)
            </div>
            <div>
              <strong>Próximas Entregas:</strong> Playbook comercial validado + Autonomia operacional
            </div>
            <div>
              <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                Quer ver a plataforma funcionando? exclusivaengenharias.com <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}