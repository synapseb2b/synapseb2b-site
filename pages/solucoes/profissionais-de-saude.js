// pages/profissionais-de-saude.js (Refatorado por J.A.R.V.I.S.)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Calendar, DollarSign, Clock, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProfissionaisDeSaudePage() {
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
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Para Profissionais de Saúde | Transforme Expertise em Receita</title>
        <meta name="description" content="Ajudamos médicos, dentistas e profissionais de saúde a transformar conhecimento clínico em receita previsível. Agenda estratégica + novos modelos de receita." />
      </Head>

      {/* ====================================================================== */}
      {/* Bloco 1: Hero Section (AJUSTADO: Padrão "clean")                      */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <h1 className="section-title">Você é Excelente no Que Faz.<br/>Mas o Negócio Não Cresce.</h1>
            <p className="hero-subheadline wider-on-desktop">
              Agenda cheia não significa caixa saudável. Vamos transformar sua expertise clínica em receita previsível.
            </p>
            
            {/* --- AJUSTE J.A.R.V.I.S.: CTA do Hero removido para "clean standard" --- */}

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 2: Sintomas (Equivalente ao "Ponto de Partida")                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Reconhece Algum Destes Sintomas?</h2>
          <div className="symptoms-grid">
            <div className="symptom-card">
              <Calendar size={32} />
              <h3>Agenda Sempre Cheia</h3>
              <p>Você trabalha de segunda a sábado, mas no final do mês o caixa está apertado. Mais horas trabalhadas não significa mais lucro.</p>
            </div>

            <div className="symptom-card">
              <DollarSign size={32} />
              <h3>Procedimentos Errados</h3>
              <p>Você passa horas em procedimentos de baixo valor enquanto consultas rápidas e mais lucrativas ficam de fora da agenda.</p>
            </div>

            <div className="symptom-card">
              <Clock size={32} />
              <h3>Tempo Vale Ouro</h3>
              <p>Seu conhecimento está preso no atendimento 1-para-1. Cada hora sua vale muito, mas você não consegue escalar.</p>
            </div>

            <div className="symptom-card">
              <TrendingUp size={32} />
              <h3>Ativos Parados</h3>
              <p>Sala de procedimentos ociosa à noite? Equipamento parado no fim de semana? Espaço subutilizado = dinheiro perdido.</p>
            </div>
          </div>

          <div className="root-cause">
            <AlertCircle size={24} />
            <div>
              <h3>A Causa Raiz</h3>
              <p>Sua formação te ensinou a ser um excelente profissional. Mas ninguém te ensinou a construir um negócio que funcione sem depender só das suas mãos.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 3: Solução                                                      */}
      {/* ====================================================================== */}
      <section id="solucao" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center">3 Caminhos Para Transformar Expertise em Receita</h2>
          <p className="lead-text text-center">Não mudamos o que você faz. Mudamos como você organiza, precifica e escala.</p>

          <div className="solutions-stack">
            {/* SOLUÇÃO 1 */}
            <div className="solution-block">
              <div className="solution-number">1</div> {/* Mantido "Caminho 1" no visual */}
              <div className="solution-content">
                <h3>Redesenho da Agenda Estratégica</h3>
                <p className="solution-desc">Transformamos sua agenda reativa em agenda estratégica. Você para de trabalhar mais e começa a trabalhar melhor.</p>
                
                <div className="solution-detail">
                  <h4>O que fazemos:</h4>
                  <ul>
                    <li>Mapeamos todos os procedimentos e calculamos o ROI real de cada um</li>
                    <li>Identificamos procedimentos de alto valor que você subestima</li>
                    <li>Reorganizamos a agenda priorizando o que gera mais lucro por hora</li>
                    <li>Criamos blocos de tempo protegidos para procedimentos estratégicos</li>
                  </ul>
                </div>

                <div className="result-box">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Resultado prático:</strong>
                    <p>Você ganha 30-50% mais trabalhando as mesmas horas (ou menos).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOLUÇÃO 2 */}
            <div className="solution-block">
              <div className="solution-number">2</div> {/* Mantido "Caminho 2" no visual */}
              <div className="solution-content">
                <h3>Receita Recorrente com Ativos Ociosos</h3>
                <p className="solution-desc">Transformamos espaços e equipamentos parados em fontes de receita automática.</p>
                
                <div className="solution-detail">
                  <h4>Exemplos práticos:</h4>
                  <div className="examples-grid">
                    <div className="example-card">
                      <h5>Clínica Compartilhada</h5>
                      <p><strong>Antes:</strong> Sala ociosa à noite = R$ 0</p>
                      <p><strong>Depois:</strong> Sala locada 3 noites/semana = R$ 6-12k/mês</p>
                    </div>
                    <div className="example-card">
                      <h5>Equipamento Compartilhado</h5>
                      <p><strong>Antes:</strong> Laser parado fim de semana = R$ 0</p>
                      <p><strong>Depois:</strong> Locação para colegas = R$ 3-5k/mês</p>
                    </div>
                  </div>
                </div>

                <div className="result-box">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Resultado prático:</strong>
                    <p>Receita extra de R$ 5-15k/mês sem trabalhar 1 hora a mais.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOLUÇÃO 3 */}
            <div className="solution-block">
              <div className="solution-number">3</div> {/* Mantido "Caminho 3" no visual */}
              <div className="solution-content">
                <h3>Escala do Conhecimento (sem escalar suas horas)</h3>
                <p className="solution-desc">Criamos formas de monetizar sua expertise sem depender do atendimento 1-para-1.</p>
                
                <div className="solution-detail">
                  <h4>Modelos que funcionam:</h4>
                  <div className="models-list">
                    <div className="model-item">
                      <h5>Clube de Assinatura</h5>
                      <p>Acompanhamento mensal recorrente para pacientes em manutenção. Ex: R$ 200-500/mês por paciente × 30 pacientes = R$ 6-15k mensais fixos.</p>
                    </div>
                    <div className="model-item">
                      <h5>Protocolos Licenciados</h5>
                      <p>Venda seu protocolo de atendimento para outros profissionais. Ex: R$ 2-5k por licença × 10 licenças = R$ 20-50k uma vez.</p>
                    </div>
                    <div className="model-item">
                      <h5>Programas de Grupo</h5>
                      <p>Transforme consultas repetitivas em programas em grupo. Ex: 1 hora sua + 10 pessoas = 10x mais eficiente.</p>
                    </div>
                  </div>
                </div>

                <div className="result-box">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Resultado prático:</strong>
                    <p>Você cria receita que não depende da sua agenda. Trabalha menos, ganha mais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 4: Antes/Depois                                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Antes e Depois</h2>
          <div className="transformation-visual">
            <div className="before-state">
              <h3>Antes</h3>
              <ul>
                <li>Agenda cheia, caixa apertado</li>
                <li>Trabalha 50+ horas/semana</li>
                <li>Ativos parados = desperdício</li>
                <li>Receita depende 100% da sua presença</li>
                <li>Sem previsibilidade financeira</li>
              </ul>
            </div>

            <div className="arrow-transform">
              <ArrowRight size={48} />
            </div>

            <div className="after-state">
              <h3>Depois</h3>
              <ul>
                <li>Agenda estratégica, lucro otimizado</li>
                <li>Trabalha 35-40 horas/semana (ou menos)</li>
                <li>Ativos gerando receita passiva</li>
                <li>Múltiplas fontes de receita ativas</li>
                <li>Caixa previsível mês a mês</li>
              </ul>
            </div>
          </div>

          <p className="transformation-summary">De "mais horas trabalhadas" para "melhores horas investidas"</p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 5: Como Funciona                                                */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Como Funciona na Prática</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Diagnóstico (21 minutos)</h4>
              <p>Conversa rápida para entender sua realidade: agenda, procedimentos, custos, objetivos. Zero enrolação.</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h4>Mapeamento (1 semana)</h4>
              <p>Analisamos seus números reais: ROI por procedimento, tempo por atendimento, ativos ociosos, oportunidades escondidas.</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h4>Implementação (30-60 dias)</h4>
              <p>Aplicamos os 3 caminhos de forma prática: redesenhamos agenda, ativamos ativos ociosos, criamos novos modelos de receita.</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h4>Autonomia</h4>
              <p>Você recebe o sistema pronto para operar sozinho. Não criamos dependência, criamos capacidade.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 6: Investimento                                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Quanto Custa?</h2>
          <div className="investment-block">
            <p className="investment-model">Nosso modelo é simples: <strong>você só paga se gerar resultado</strong>.</p>
            <div className="investment-details">
              <div className="investment-item">
                <h4>Investimento Inicial Mínimo</h4>
                <p>Apenas para cobrir o tempo de diagnóstico e mapeamento. Valor simbólico que demonstra comprometimento mútuo.</p>
              </div>
              <div className="investment-item">
                <h4>Modelo de Performance</h4>
                <p>O investimento principal vem de <strong>receita nova gerada</strong>. Se não gerar receita extra, não ganhamos. Simples assim.</p>
              </div>
            </div>
            <p className="investment-cta">Vamos calcular juntos o potencial de receita nova na sua clínica? 21 minutos são suficientes.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Bloco 7: CTA Final                                                    */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Vamos Começar?</h2>
          <p className="lead-text">Uma conversa de 21 minutos para mapear seu potencial de receita nova.</p>
          <div className="cta-benefits">
            <div className="cta-benefit"><CheckCircle2 size={20} /><span>Sem compromisso</span></div>
            <div className="cta-benefit"><CheckCircle2 size={20} /><span>Zero pressão de vendas</span></div>
            <div className="cta-benefit"><CheckCircle2 size={20} /><span>Resultado claro ao final</span></div>
          </div>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Conversa de 21min</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Específico */}
      <style jsx>{`
        .symptoms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .symptom-card {
          padding: 2rem;
          background: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          text-align: center;
        }
        .symptom-card svg {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }
        .symptom-card h3 {
          font-size: 1.2rem;
          color: var(--color-heading);
          margin-bottom: 1rem;
        }
        .symptom-card p {
          line-height: 1.7;
          color: var(--color-text);
        }

        .root-cause {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          max-width: 800px;
          margin: 4rem auto 0;
          padding: 2rem;
          background: rgba(0, 150, 132, 0.05);
          border-left: 4px solid var(--color-primary);
          border-radius: 8px;
        }
        .root-cause svg {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        .root-cause h3 {
          font-size: 1.2rem;
          color: var(--color-heading);
          margin-bottom: 0.75rem;
        }
        .root-cause p {
          line-height: 1.8;
        }

        .solutions-stack {
          display: grid;
          gap: 3rem;
          margin-top: 4rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .solution-block {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: start;
        }
        .solution-number {
          font-size: 1.5rem; /* Ajustado para "1" "2" "3" */
          font-weight: 700;
          color: var(--color-primary);
          background: rgba(0, 150, 132, 0.1);
          width: 60px; /* Ajustado */
          height: 60px; /* Ajustado */
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .solution-content h3 {
          font-size: 1.5rem;
          color: var(--color-heading);
          margin-bottom: 0.75rem;
        }
        .solution-desc {
          font-size: 1.1rem;
          color: var(--color-text);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        .solution-detail h4 {
          color: var(--color-heading);
          margin-bottom: 1rem;
        }
        .solution-detail ul {
          list-style: none;
          padding: 0;
        }
        .solution-detail li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .solution-detail li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--color-primary);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .example-card {
          padding: 1.5rem;
          background: rgba(0, 150, 132, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 8px;
        }
        .example-card h5 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .example-card p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .models-list {
          display: grid;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .model-item {
          padding: 1.5rem;
          background: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 8px;
        }
        .model-item h5 {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }
        .model-item p {
          line-height: 1.7;
        }

        .result-box {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(0, 150, 132, 0.08);
          border-radius: 8px;
        }
        .result-box svg {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        .result-box strong {
          display: block;
          color: var(--color-heading);
          margin-bottom: 0.5rem;
        }
        .result-box p {
          line-height: 1.7;
        }

        .transformation-visual {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
          max-width: 1000px;
          margin: 3rem auto;
        }
        .before-state, .after-state {
          padding: 2rem;
          border-radius: 12px;
        }
        .before-state {
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid var(--color-border);
        }
        .after-state {
          background: rgba(0, 150, 132, 0.08);
          border: 1px solid var(--color-primary);
        }
        .before-state h3, .after-state h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: var(--color-heading);
        }
        .after-state h3 {
          color: var(--color-primary);
        }
        .before-state ul, .after-state ul {
          list-style: none;
          padding: 0;
        }
        .before-state li, .after-state li {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .arrow-transform {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-transform svg {
          color: var(--color-primary);
        }
        .transformation-summary {
          text-align: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-heading);
          margin-top: 3rem;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .step {
          text-align: center;
          padding: 2rem;
          background: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
        }
        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--color-primary);
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }
        .step h4 {
          font-size: 1.1rem;
          color: var(--color-heading);
          margin-bottom: 1rem;
        }
        .step p {
          line-height: 1.7;
        }

        .investment-block {
          max-width: 800px;
          margin: 3rem auto 0;
          text-align: center;
        }
        .investment-model {
          font-size: 1.3rem;
          color: var(--color-heading);
          margin-bottom: 3rem;
        }
        .investment-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .investment-item {
          padding: 2rem;
          background: var(--color-section-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          text-align: left;
        }
        .investment-item h4 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .investment-item p {
          line-height: 1.7;
        }
        .investment-cta {
          font-size: 1.1rem;
          font-weight: 500;
        }

        .cta-benefits {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0 3rem;
        }
        .cta-benefit {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cta-benefit svg {
          color: var(--color-primary);
        }
        .cta-benefit span {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .solution-block {
            grid-template-columns: 1fr;
            text-align: center; /* Centraliza texto no mobile */
          }
          .solution-number {
            margin: 0 auto 1.5rem;
          }
          .solution-detail ul {
             display: inline-block; /* Centraliza o bloco da lista */
             text-align: left; /* Mantém o texto da lista à esquerda */
          }
          .transformation-visual {
            grid-template-columns: 1fr;
          }
          .arrow-transform {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </>
  );
}