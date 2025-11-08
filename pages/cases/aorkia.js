// pages/cases/aorkia.js (Corrigido e Refatorado por J.A.R.V.I.S.)

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
  ShieldCheck, // Insight 1 (Credibilidade) E HERO
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

  // REMOVIDO: const heroStyle

  return (
    <>
      <Head>
        <title>Case AORKIA | Synapse B2B</title>
        <meta name="description" content="Como uma startup sem histórico entrou em mercado técnico dominado por gigantes e fechou 1.200+ usuários na primeira venda." /> 
      </Head>

      {/* ====================================================================== */}
      {/* Bloco 1: Hero Section (AJUSTADO: Padrão "clean" Soluções)             */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero"> {/* Classe e estilo atualizados */}
        
        {/* --- VÍDEO DE FUNDO ADICIONADO --- */}
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          {/* --- ÍCONE ADICIONADO --- */}
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
            <ShieldCheck size={48} style={{color: 'var(--color-primary)'}} />
          </div>

          <h1 className="section-title"> {/* Classe atualizada */}
            DE ZERO A PARCEIRO OFICIAL EM 45 DIAS 
          </h1>
          <p className="hero-subheadline"> {/* Classe atualizada */}
            Como uma startup sem histórico entrou em mercado técnico dominado
            por gigantes e fechou 1.200+ usuários na primeira venda. 
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 2: Overview Card (REMOVIDO POR J.A.R.V.I.S.)                     */}
      {/* Bloco de sumário executivo quebrava a narrativa. Eliminado.            */}
      {/* ====================================================================== */}


      {/* ====================================================================== */}
      {/* Bloco 3: O Contexto (AJUSTADO: Promovido e reescrito)                 */}
      {/* ====================================================================== */}
      <section className="section-solid reveal-up">
        <div className="container" style={{maxWidth: '800px', textAlign: 'left'}}>
          
          {/* COPY AJUSTADA: Foco no problema de negócio, remoção de excessos */}
          <h2 className="section-title text-center">O PONTO DE PARTIDA: SKIN IN THE GAME TOTAL</h2> 
          
          <p>Este case é a prova definitiva do método. A AORKIA foi criada para aplicar Engenharia de Receita no próprio negócio, sob pressão máxima.</p>
          
          <p>O cenário: zero clientes, zero marca, zero budget e um mercado dominado por gigantes (Veeam, Acronis). A única vantagem: uma parceria estratégica com a Keepit (líder global). Mas parceria sem tração é irrelevante.</p>

          <p>Não era consultoria. Era validação com pele no jogo. Se o método não funcionasse sob condições adversas, ele não funcionava.</p>
          
          <blockquote style={{
            borderLeft: '4px solid var(--color-primary)', 
            paddingLeft: '2rem', 
            margin: '3rem 0', 
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-heading)'
          }}>
            <p>"Como competir sem track record?"</p> 
            <p style={{marginTop: '1rem', fontStyle: 'normal'}}>E a resposta que apliquei: <strong>Não compete. Transfere credibilidade.</strong></p>
          </blockquote>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 4: O Desafio Real (REMOVIDO POR J.A.R.V.I.S.)                    */}
      {/* Redundante. O novo "Ponto de Partida" já cobre o desafio e as          */}
      {/* consequências.                                                       */}
      {/* ====================================================================== */}


      {/* ====================================================================== */}
      {/* Bloco 5: A Solução (Timeline) (MANTIDO)                              */}
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
                <li>└─ Reposicionamento estratégico: De: "Revendemos backup Keepit" Para: "Parceiro Oficial Keepit — Líder Global em Backup SaaS".</li>
                <li>└─ Transferência de credibilidade: "Se o líder global escolheu a AORKIA como parceiro oficial no Brasil, você pode confiar".</li>
                <li>└─ Foco em caso de uso crítico: Compliance (LGPD) + Proteção contra ransomware.</li>
              </ul>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>A AORKIA não tinha histórico. Mas a Keepit tinha. E a Keepit escolheu a AORKIA. Mudamos a conversa de "confie na AORKIA" para "confie na escolha da Keepit". Decisores B2B não compram da startup desconhecida. Mas compram da startup que o líder global validou.</p>
            </div>

            {/* --- FASE 2 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 2: ATIVAÇÃO DE URGÊNCIA</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Entrega: Narrativa de risco tangível</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Eliminamos jargão técnico: De: "Backup imutável..." Para: "Seu Google Workspace não faz backup dos seus dados. Quanto custa cada hora de parada?".</li>
                <li>└─ Ativamos medo da perda ANTES de apresentar solução.</li>
                <li>└─ Criamos narrativa de risco invisível: "Você acha que seus dados estão seguros no Google. O Google acha que você faz backup... você está desprotegido."</li>
                <li>└─ Objeção neutralizada proativamente.</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/aorkia-home-urgencia.png"
                  alt="Homepage AORKIA com headline de urgência"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '400px', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>O problema do backup: ele só importa quando é tarde demais. Ninguém acorda pensando "preciso de backup hoje". Nossa estratégia: fazer o cliente sentir a dor antes de sofrer a perda. A narrativa mudou de "recurso técnico" para "quanto custa sua empresa parada por 48 horas?". Financeiro. Tangível. Urgente.</p>
            </div>

            {/* --- FASE 3 --- */}
            <div className="truth-card-revolutionary text-left reveal-up">
              <h3 className="truth-card-title" style={{fontSize: '1.8rem'}}>● FASE 3: PLATAFORMA + CANAL</h3>
              <p style={{color: 'var(--color-accent)', fontWeight: '600'}}>Duração: 15 dias | Entrega: aorkia.com + Roteiro comercial validado</p> 
              
              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>O que fizemos:</h4>
              <ul style={{listStyle: 'none', paddingLeft: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <li>└─ Construímos aorkia.com com arquitetura de urgência (risco, prova social, ROI).</li>
                <li>└─ Estruturamos prospecção ativa B2B (ICP, roteiros, proposta).</li>
                <li style={{color: 'var(--color-primary)', fontWeight: 'bold', marginTop: '0.5rem'}}>└─ Resultado imediato: Primeira venda em empresa nacional: 1.200+ usuários.</li>
              </ul>

              <div className="case-image-wrapper" style={{margin: '2rem 0'}}>
                <Image 
                  src="/cases/aorkia-solucoes.png"
                  alt="Página de soluções por vertical AORKIA"
                  width={1000}
                  height={500}
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}
                />
              </div>

              <h4 style={{color: 'var(--color-heading)', marginTop: '2rem'}}>Por que funcionou:</h4>
              <p>A plataforma não tentou competir em feature list. Competiu em <strong>clareza de risco</strong>. Enquanto gigantes mostravam especificações, AORKIA mostrava "quanto você perde se seus dados sumirem amanhã?". O primeiro cliente de 1.200 usuários não comprou backup. Comprou <strong>paz de espírito regulatória</strong> (LGPD) e <strong>seguro contra ransomware</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 6: Resultados (MANTIDO)                                        */}
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
            De zero para receita em 45 dias. Prova de que método funciona sob pressão máxima.
          </p>
          <p className="lead-text" style={{fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 600}}>
            É sobre ter provado que funciona quando eu mesmo executo, com minha própria empresa, sob as condições mais adversas possíveis.
          </p>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 7: A Prova Definitiva (MANTIDO)                                */}
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
                "Qualquer consultor pode vender método. Eu apliquei o meu no meu próprio negócio, sob condições extremas: zero histórico, mercado dominado por gigantes, 45 dias de prazo. Resultado: Parceiro Oficial Keepit + primeira venda de 1.200+ usuários. Não é teoria. É Engenharia de Receita validada com pele no jogo."
              </p>
            </blockquote>
            
            <div className="testimonial-author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem'}}>
              <Image
                src="/cases/julio_figueiredo.png"
                alt="Júlio Figueiredo"
                width={80}
                height={80}
                style={{ borderRadius: '50%', border: '2px solid var(--color-primary)' }}
              />
              <div style={{textAlign: 'left'}}>
                <h4 style={{color: 'var(--color-heading)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', margin: 0}}>
                  Júlio Figueiredo 
                </h4>
                <p style={{color: 'var(--color-text)', margin: 0}}>Founder & CRO - Synapse B2B<br/>Founder & CRO - AORKIA</p> 
              </div>
            </div>

            <ul style={{listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem', flexWrap: 'wrap'}}>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                AORKIA criada em 2024
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Primeira venda validada em 45 dias
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)'}}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                Método Synapse aplicado sob fogo real
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 8: Learnings Estratégicos (MANTIDO)                             */}
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
              <p>AORKIA tinha zero clientes, zero marca. Mas tinha parceria com líder global.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Quando você não tem credibilidade própria, transfira credibilidade de quem tem. "Se o líder global escolheu a AORKIA, você pode confiar."</p>
            </div>
            
            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Zap size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 2: ATIVE A DOR ANTES DE MOSTRAR SOLUÇÃO</h3> 
              <p>Backup é produto invisível até ser crítico. Cliente não acorda pensando "preciso de backup".</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Estratégia:</strong> Fazer sentir a dor ANTES da perda. "Quanto custa sua empresa parada 48h esperando recuperação de dados?". Urgência não existe naturalmente. É criada.</p>
            </div>

            <div className="truth-card-revolutionary text-left">
              <div className="pillar-icon-wrapper" style={{marginBottom: '1.5rem'}}>
                <Gem size={28} />
              </div>
              <h3 className="truth-card-title">INSIGHT 3: MÉTODO SÓ É VÁLIDO COM SKIN IN THE GAME</h3> 
              <p>Este case não foi consultoria. Foi laboratório pessoal. Zero histórico + mercado competitivo + 45 dias = condições extremas. Funcionou.</p>
              <p style={{color: 'var(--color-heading)', marginTop: '1rem'}}><strong>Lição:</strong> Metodologia não testada no próprio negócio do criador é teoria. Este case prova que funciona quando há pele no jogo total.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Bloco 9: CTA Final (MANTIDO)                                         */}
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
            Zero track record não é sentença de morte.
            É oportunidade de fazer diferente desde o início.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico</span> 
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9}}>
            Primeira conversa: 21 minutos para estruturar tração acelerada no seu negócio.
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