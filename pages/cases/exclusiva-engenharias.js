// pages/cases/exclusiva-engenharias.js
// REFATORADO: Alinhamento Central + Estética Plataformas + Browser Window Images

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Target,
  GitBranch, 
  Brain,
  Zap,
  TrendingUp,
  Layout,
  MessageSquare
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
      {/* HERO (Padronizado)                                                     */}
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
            <GitBranch size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          </div>

          <h1 className="hero-headline">
            Recusamos Fazer um Site.<br/>
            Entregamos uma Plataforma.
          </h1>
          <p className="hero-subheadline lead-text">
            Forecast mensal gerado: 3x o melhor ano histórico. Tempo: 128 dias. Método: Engenharia de Receita.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 1: O DIAGNÓSTICO (Centralizado)                                  */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          
          <h2 className="section-title">Do Improviso à Engenharia de Receita</h2>
          
          <p className="lead-text">
            O cliente tinha excelência técnica comprovada e atendia gigantes como IVECO e Cimento Nacional. Mas o crescimento sem meta revelava um problema invisível.
          </p>

          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>A Reunião de 42 Minutos</h3>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>Em uma sessão estratégica pro bono, decodificamos o padrão crítico:</p>

            <div style={{
              background: 'rgba(0,0,0,0.2)', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '1px solid var(--color-border)', 
              width: '100%', 
              maxWidth: '600px', 
              margin: '0 auto 2rem'
            }}>
              <h4 style={{color: 'var(--color-heading)', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px'}}>O Padrão Invisível</h4>
              <ul style={{padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Vendas 100% por indicação</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Crescimento sem meta = sem método</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> História fragmentada na mente dos sócios</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Zero sistema comercial documentado</li>
              </ul>
            </div>
            
            <p style={{fontStyle: 'italic', fontSize: '1.1rem', opacity: 0.8, maxWidth: '700px', marginInline: 'auto'}}>
              "Eles tinham uma bela história, uma metodologia e um nicho claro. Mas tudo estava disperso. Faltava Engenharia de Receita."
            </p>
          </div>

          <p style={{fontWeight: 600, color: 'var(--color-heading)', marginTop: '3rem', fontSize: '1.2rem', textAlign: 'center'}}>
            O pedido inicial foi "fazer um site". Recusamos. Um site sem clareza estratégica não resolve o gargalo real.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 2: A ESTRATÉGIA (TIMELINE)                                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container">
          <h2 className="section-title">Arquitetura Comercial: A Estratégia Antes da Escala</h2>
          
          {/* Timeline Visual */}
          <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '90%', 
            maxWidth: '800px',
            margin: '4rem auto 6rem', 
            borderTop: '1px solid rgba(255,255,255,0.2)', 
            position: 'relative',
            paddingTop: '2rem'
          }}>
            {[
                { title: 'Diagnóstico', time: '42 min' },
                { title: 'Estratégia', time: '15 dias' },
                { title: 'Plataforma', time: '20 dias' },
                { title: 'Liderança', time: 'Em andamento' }
            ].map((item, index) => (
                <div key={index} style={{textAlign: 'center', position: 'relative', flex: 1}}>
                    <span style={{position: 'absolute', top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)'}}></span>
                    <div style={{fontWeight: 'bold', color: 'var(--color-heading)', marginBottom: '0.25rem'}}>{item.title}</div>
                    <div style={{color: 'var(--color-text-muted)', fontSize: '0.85rem'}}>{item.time}</div> 
                </div>
            ))}
          </div>

          {/* GRID DE FASES (Centralizado com Molduras de Browser) */}
          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '4rem'}}>
            
            {/* FASE 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Brain size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 1: Go-To-Market & Posicionamento</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 15 dias | Ferramenta: Cortex B2B™</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto'}}>
                Aplicamos diagnóstico 360° para decodificar o diferencial real.
              </p>

              <div style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '1.5rem', 
                marginBottom: '2rem'
              }}>
                 <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}><strong>Segmento:</strong> Industrial</span>
                 <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}><strong>Nicho:</strong> Áreas essenciais</span>
                 <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}><strong>Promessa:</strong> Zero interrupção</span>
                 <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}><strong>Metodologia:</strong> Cobertura total</span>
              </div>

              <div style={{background: 'rgba(0, 150, 132, 0.1)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)', maxWidth: '700px', margin: '0 auto'}}>
                <strong style={{color: 'var(--color-heading)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>O Buy-In Absoluto:</strong>
                <p style={{fontSize: '1rem', margin: 0}}>
                  Transformamos "Engenharia e Climatização" em <strong>"Exclusiva Engenharias"</strong>. A nova tese fez tanto sentido que a empresa alterou seu CNPJ por iniciativa própria.
                </p>
              </div>
            </div>

            {/* FASE 2 - Browser Window */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Zap size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 2: Plataforma de Aceleração</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 20 dias | Entrega: exclusivaengenharias.com</p>
              
              <p className="pillar-card-description" style={{marginBottom: '2rem'}}>
                Construímos plataforma de conversão, não site institucional.
              </p>
              
              <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem'}}>
                <div style={{textAlign: 'center'}}>
                   <span style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)', display: 'block'}}>30%</span>
                   <span style={{fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7}}>Credibilidade</span>
                </div>
                <div style={{textAlign: 'center'}}>
                   <span style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)', display: 'block'}}>70%</span>
                   <span style={{fontSize: '0.9rem', textTransform: 'uppercase', opacity: 0.7}}>Conversão</span>
                </div>
              </div>

               <h4 style={{color: 'var(--color-heading)', fontSize: '1.1rem', marginTop: '1rem', marginBottom: '1rem'}}>Ferramentas Integradas:</h4>
               <ul style={{padding: 0, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '2.5rem'}}>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Simulador de Orçamento</li>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Atendimento Inteligente</li>
                 <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Narrativa por segmento</li>
               </ul>

               {/* Imagem estilo Browser */}
               <div style={{
                 width: '100%', maxWidth: '800px', marginInline: 'auto',
                 borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                 boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.2)',
                 overflow: 'hidden', background: '#111'
               }}>
                  <div style={{
                    height: '30px', background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', padding: '0 1rem', gap: '6px'
                  }}>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ff5f56'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#009684'}}></div>
                  </div>
                  <Image 
                    src="/cases/exclusiva-home.png"
                    alt="Homepage Exclusiva Engenharias"
                    width={1000}
                    height={500}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
               
               <div style={{marginTop: '2rem'}}>
                 <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer" className="btn" style={{fontSize: '1rem'}}>
                   Ver plataforma <ArrowRight size={18} />
                 </a>
               </div>
            </div>

            {/* FASE 3 - Browser Window */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Target size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 3: Ferramenta de Conversão</h3>
               <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 3 dias | Entrega: Simulador Integrado</p>

               <p className="pillar-card-description" style={{marginBottom: '2rem'}}>
                Mecanismo de qualificação e comprometimento.
               </p>

               {/* Imagem estilo Browser */}
               <div style={{
                 width: '100%', maxWidth: '800px', margin: '0 auto 2.5rem',
                 borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                 boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.2)',
                 overflow: 'hidden', background: '#111'
               }}>
                  <div style={{
                    height: '30px', background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', padding: '0 1rem', gap: '6px'
                  }}>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ff5f56'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#009684'}}></div>
                  </div>
                  <Image 
                    src="/cases/simulador_exclusiva.png"
                    alt="Simulador de Orçamento"
                    width={1000}
                    height={500}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

               <ul style={{padding: 0, margin: '0', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Filtra leads fora de perfil</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Calibra expectativa de preço</li>
               </ul>
            </div>

            {/* FASE 4 - Browser Window */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><TrendingUp size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>FASE 4: CRO as a Service</h3>
              <p style={{color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Duração: 90 dias | Status: 50% concluído</p>
              
              <p className="pillar-card-description" style={{fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-heading)', maxWidth: '700px', marginInline: 'auto'}}>
                Lideramos a execução comercial na linha de frente, validando o método em tempo real.
              </p>

               {/* Imagem estilo Browser */}
               <div style={{
                 width: '100%', maxWidth: '800px', margin: '2.5rem auto',
                 borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                 boxShadow: '0 20px 50px -10px rgba(0, 150, 132, 0.2)',
                 overflow: 'hidden', background: '#111'
               }}>
                  <div style={{
                    height: '30px', background: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', padding: '0 1rem', gap: '6px'
                  }}>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ff5f56'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#ffbd2e'}}></div>
                     <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#009684'}}></div>
                  </div>
                  <Image 
                    src="/cases/playbook-exclusiva.jpg"
                    alt="Playbook Exclusiva"
                    width={1000}
                    height={500}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

               <ul style={{padding: 0, margin: '0 0 2rem', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Estrutura de prospecção</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Validação de Playbook</li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={16} color="var(--color-primary)"/> Liderança de reuniões</li>
               </ul>

               <div style={{background: 'rgba(0, 150, 132, 0.15)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)', maxWidth: '600px', margin: '0 auto'}}>
                    <h4 style={{color: 'var(--color-heading)', marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Resultado Parcial (45 dias)</h4>
                    <p style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0}}>Forecast Mensal &gt; Melhor faturamento anual histórico.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 3: ANTES / DEPOIS                                              */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">O Resultado da Profissionalização</h2>

          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '3rem auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center', width: '100%'}}>
              <div style={{textAlign: 'center'}}>
                <h4 style={{color: 'var(--color-text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Antes</h4>
                <ul style={{padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                  <li style={{opacity: 0.7}}>3 empresas fragmentadas</li>
                  <li style={{opacity: 0.7}}>Zero presença digital</li>
                  <li style={{opacity: 0.7}}>100% crescimento por indicação</li>
                  <li style={{opacity: 0.7}}>Receita imprevisível</li>
                  <li style={{opacity: 0.7}}>Heroísmo individual</li>
                </ul>
              </div>

              <div style={{color: 'var(--color-primary)', opacity: 0.5}}>
                <ArrowRight size={32} />
              </div>

              <div style={{textAlign: 'center'}}>
                <h4 style={{color: 'var(--color-heading)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem'}}>Depois</h4>
                <ul style={{padding: 0, fontWeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                  <li>Hub integrado reconhecível</li>
                  <li>Motor de demanda ativo</li>
                  <li>Canais estruturados (In/Out)</li>
                  <li>Forecast 3x o melhor ano</li>
                  <li>Sistema em validação</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="lead-text" style={{fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--color-heading)', marginTop: '3rem'}}>
            Métrica que importa: De invisível para encontrável. De improviso para método documentado.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 4: O TRABALHO CONTINUA (Grid Centralizado)                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow reveal-up">
        <div className="container text-center">
          <h2 className="section-title">Da Fundação Estratégica para Escala Operacional</h2>
          <p className="lead-text" style={{marginBottom: '4rem'}}>
            Com clareza estratégica e plataforma digital validadas, o foco mudou de construir sistema para validar escala.
          </p>

          <div className="pillar-grid-revolutionary" style={{gridTemplateColumns: '1fr', gap: '3rem'}}>
            
            {/* Frente 1 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Target size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>Frente 1: Construção do Motor Comercial</h3>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '700px', margin: '2rem auto 0', alignItems: 'center'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Pipeline em Expansão</strong>
                      <p style={{fontSize: '1rem', margin: 0}}>Prospecção ativa semanal com roteiros testados. Pipeline mapeado: Prospecção → Qualificação → Proposta → Negociação.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--color-accent)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Estratégia Dual-Channel</strong>
                      <p style={{fontSize: '1rem', margin: 0}}><strong>Inbound:</strong> Conteúdo técnico otimizado.<br/><strong>Outbound:</strong> LinkedIn Sales Navigator + sequências.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Ferramentas de IA</strong>
                      <p style={{fontSize: '1rem', margin: 0}}>Enriquecimento automático de leads, qualificação via chatbot inteligente.</p>
                  </div>
              </div>
            </div>

            {/* Frente 2 */}
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper"><Layout size={32} /></div>
              <h3 className="pillar-card-title" style={{fontSize: '1.8rem'}}>Frente 2: CRM Proprietário</h3>
              <p className="pillar-card-description" style={{marginBottom: '2rem'}}>
                Sistema desenvolvido pela Synapse B2B especificamente para o segmento industrial.
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '700px', margin: '0 auto', alignItems: 'center'}}>
                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Gestão Especializada</strong>
                      <p style={{fontSize: '1rem', margin: 0}}>Gestão de pipeline por tipo de projeto (civil, elétrica, multidisciplinar). Histórico automático.</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--color-accent)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Inteligência de Mercado</strong>
                      <p style={{fontSize: '1rem', margin: 0}}>Alertas de oportunidade (obras anunciadas, licitações, expansões industriais).</p>
                  </div>

                  <div style={{background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderTop: '3px solid var(--color-primary)', width: '100%'}}>
                      <strong style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-heading)', fontSize: '1.1rem'}}>Diferencial</strong>
                      <p style={{fontSize: '1rem', margin: 0}}>Não é Salesforce genérico. É sistema moldado ao processo da Exclusiva.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 5: VOZ DO CLIENTE                                                */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container text-center">
          <h2 className="section-title">VOZ DO CLIENTE</h2>
          <div className="glass-card-premium" style={{maxWidth: '900px', margin: '0 auto'}}>
            <blockquote>
              <p style={{fontSize: '1.35rem', fontFamily: "'Inter', sans-serif", color: '#e0e0e0', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300, fontStyle: 'italic'}}>
                "Crescíamos ano após ano — 30% em 2023, 31% em 2024 — mas não sabíamos como dar o próximo passo de forma estruturada. A Synapse B2B não trouxe consultoria tradicional. Eles recusaram nosso pedido de site, construíram clareza onde havia fragmentação e agora operam na linha de frente conosco. <br/><br/>
                <strong>Há 7 dias saímos de uma reunião que a Synapse prospectou e conduzimos juntos a negociação mais estruturada que já fizemos: usamos a Plataforma Digital, mapeamos todas as oportunidades e saímos com um pipeline de ~3 MM em projetos.</strong> Nunca havíamos participado de uma reunião de negócios com essa precisão. Não entregaram teoria. Entregaram método funcionando."
              </p>
            </blockquote>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem'}}>
              <Image
                src="/cases/Fabricio-Tavares.png"
                alt="Fabrício Tavares"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)', background: 'var(--color-section-bg)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Fabrício Tavares 
                </h4>
                <p style={{margin: 0, fontSize: '0.9rem'}}>CEO - Exclusiva Engenharias</p> 
              </div>
            </div>

             <div style={{marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', border: '1px solid var(--color-primary)'}}>Forecast 3x o ano histórico</span>
                <span style={{background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', border: '1px solid var(--color-primary)'}}>CRO as a Service ativo</span>
             </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SEÇÃO 6: CTA FINAL + PDF                                               */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <Target size={64} style={{color: 'var(--color-primary)', marginBottom: '2rem', filter: 'drop-shadow(0 0 10px var(--color-primary))'}} />
          <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Sua empresa também cresce por indicação mas sem método claro?</h2>
          
          <div style={{maxWidth: '800px', margin: '0 auto 3rem', display: 'inline-block'}}>
             <ul style={{padding: 0, fontSize: '1.2rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Competência técnica excepcional mas narrativa fragmentada</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Time comercial improvisa cada venda sem playbook</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Crescimento acontece mas você não sabe replicar</li>
               <li style={{marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px'}}><CheckCircle2 size={20} color="var(--color-primary)"/> Liderança sobrecarregada porque "só ela consegue vender"</li>
             </ul>
          </div>

          <p className="lead-text" style={{fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '3rem', fontWeight: 600}}>
            Você não precisa de mais esforço. Você precisa de Engenharia de Receita.
          </p>

          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico de Engenharia</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p style={{opacity: 0.7, marginTop: '2rem', fontSize: '0.9rem'}}>
            Vamos encontrar sua história real — e o método para escalá-la.<br/>
            Primeira conversa: 21 minutos para mapear seu travamento de receita.
          </p>

          {/* Rodapé técnico */}
           <div style={{marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.9rem', opacity: 0.6}}>
              <p><strong>NOTA TÉCNICA:</strong> Status do Projeto: Em andamento | Fase Atual: CRO as a Service (50% concluído) | Próximas Entregas: Playbook validado + Autonomia operacional + Meta de expansão 100%</p>
           </div>
           
           {/* Link de Download PDF Corrigido */}
           <div id="download-pdf" style={{marginTop: '2rem'}}>
            <a 
              href="/pdf/synapse-case-exclusiva.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn" 
              style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}
            >
              <span>Download PDF Completo do Case</span> 
              <Download size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}