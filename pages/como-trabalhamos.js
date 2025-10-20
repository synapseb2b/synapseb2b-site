import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para esta página, combinando existentes e novos
import { 
  ArrowRight, Eye, ChevronDown, Lightbulb, HardHat, CheckCircle2,
  Siren, BarChart, Target, TrendingUp, ThumbsUp, GitBranch, Briefcase, Award
} from 'lucide-react';

// Reutilizando o componente AccordionItem que já existe no seu projeto
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ComoTrabalhamosPage() {
  const [openAccordion, setOpenAccordion] = useState(1); // Inicia com o primeiro desafio aberto

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
        <title>Nosso Método | Synapse B2B</title>
        <meta name="description" content="Entenda como nosso sistema de duas camadas conecta a arquitetura da Engenharia de Receita à construção de ativos que geram resultado." />
      </Head>

      {/* Bloco 1: Hero Section - Limpa e Focada */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Cinco desafios reais. Duas camadas de solução.</h1>
          <p className="lead-text">
            Empresas B2B não falham por falta de produto. Falham porque potencial técnico sem um sistema de receita é oportunidade desperdiçada. Reconheça seu desafio. Encontre sua solução.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Sistema e as Duas Camadas */}
      <section id="sistema" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Um Sistema. Duas Camadas.</h2>
            <p className="lead-text">A Synapse B2B opera como um sistema de duas camadas que conecta estratégia e execução.</p>
            <p className="lead-text" style={{maxWidth: '900px'}}>
              A primeira camada é a <strong>ARQUITETURA</strong>. Aqui aplicamos o <strong>Cortex GTM™</strong>, nosso sistema proprietário de diagnóstico, para decodificar sua genialidade técnica e traduzi-la em uma Engenharia de Receita. A segunda camada é a <strong>EXECUÇÃO TANGÍVEL</strong>, onde transformamos a arquitetura em ativos que geram resultado.
            </p>
            <div className="card-grid-two" style={{marginTop: '3rem'}}>
              <div className="info-card">
                  <span className="info-card-subtitle" style={{fontWeight: 700, color: 'var(--color-primary)'}}>CAMADA 1</span>
                  <h3 className="info-card-title" style={{fontSize: '1.8rem'}}>Inteligência & Estratégia</h3>
                  <p>Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
              </div>
              <div className="info-card">
                  <span className="info-card-subtitle" style={{fontWeight: 700, color: 'var(--color-primary)'}}>CAMADA 2</span>
                  <h3 className="info-card-title" style={{fontSize: '1.8rem'}}>Construção de Ativos Digitais</h3>
                  <p>Onde transformamos estratégia em ferramentas que geram receita 24/7.</p>
              </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Desafios, Diagnósticos e Soluções (Accordion Otimizado) */}
      <section id="desafios" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="text-center">
            <h2 className="section-title">Encontre seu Desafio. Conheça a Solução.</h2>
          </div>
          <div className="accordion-container" style={{marginTop: '3rem'}}>

            {/* Desafio 1 */}
            <AccordionItem 
              title={<><Siren /><span>"Seu produto é superior, mas o mercado não percebe o valor"</span></>}
              isOpen={openAccordion === 1} 
              onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
            >
              <div className="solution-details-grid">
                <div className="diagnosis-column">
                  <h4>Diagnóstico</h4>
                  <p><strong>Sintomas:</strong> Reuniões longas sem decisão, concorrentes inferiores vendendo mais rápido, time explicando tecnologia em vez de resolver problemas de negócio. [cite: 17, 18, 19, 20]</p>
                  <p><strong>Causa Raiz:</strong> Sua narrativa ativa o cérebro racional (lento e exaustivo) em vez do decisivo (rápido e emocional). A complexidade técnica não foi traduzida para a linguagem de dor e resultado do decisor. [cite: 22, 23]</p>
                </div>
                <div className="solution-column">
                  <h4>Solução Aplicada: GTM Completo</h4>
                  <p>Arquitetura estratégica que traduz "o que somos" para "o problema que só nós resolvemos". [cite: 26, 29]</p>
                  <h5 className="deliverables-title">Entregáveis Principais:</h5>
                  <ul>
                    <li><CheckCircle2 size={16} /> <strong>Posicionamento e Proposta de Valor Central</strong> que seu decisor entende em 60 segundos. [cite: 28, 32, 33]</li>
                    <li><CheckCircle2 size={16} /> <strong>Refinamento de ICP</strong> para focar em quem compra, por que compra e quando compra. [cite: 30, 31]</li>
                    <li><CheckCircle2 size={16} /> <strong>Canais de Aquisição e Modelo de Vendas</strong> alinhados à sua nova narrativa. [cite: 34, 36]</li>
                  </ul>
                  <div className="case-proof">
                    <Award size={18}/>
                    <div>
                      <strong>Prova Real:</strong> Versão Holística. Transformamos "Cuidado Farmacêutico" em "Plataforma que reduz custo de paciente crônico em 5.8x". [cite: 44, 45, 46]
                      <Link href="/cases#case-versao-holistica">Ver case completo →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            {/* Desafio 2 */}
            <AccordionItem 
              title={<><TrendingUp /><span>"Seu time comercial depende de esforço heroico e networking"</span></>}
              isOpen={openAccordion === 2} 
              onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
            >
              <div className="solution-details-grid">
                  <div className="diagnosis-column">
                      <h4>Diagnóstico</h4>
                      <p><strong>Sintomas:</strong> Apenas um vendedor "estrela" performa, crescimento depende de indicações, CEO passa mais tempo vendendo do que liderando. [cite: 63, 64, 66]</p>
                      <p><strong>Causa Raiz:</strong> Ausência de sistema replicável. O sucesso depende de talento individual, não de um processo excelente que qualquer profissional mediano possa executar. Heroísmo não escala, sistema escala. [cite: 69, 72]</p>
                  </div>
                  <div className="solution-column">
                      <h4>Solução Aplicada: CRO as a Service</h4>
                      <p>Liderança C-level fracionada que instala o sistema de receita e o valida na linha de frente. [cite: 74]</p>
                      <h5 className="deliverables-title">Entregáveis Principais:</h5>
                      <ul>
                          <li><CheckCircle2 size={16} /> <strong>Arquitetura de Processo Comercial</strong> com funil e cadências validadas. [cite: 78, 79]</li>
                          <li><CheckCircle2 size={16} /> <strong>Execução Pioneira</strong> liderando prospecção e modelando a abordagem. [cite: 80, 81]</li>
                          <li><CheckCircle2 size={16} /> <strong>Playbook de Vendas Validado</strong> e documentado para escalar o time. [cite: 84, 85]</li>
                      </ul>
                      <div className="case-proof">
                          <Award size={18}/>
                          <div>
                              <strong>Prova Real:</strong> Exclusiva Engenharias. Fomos de 100% indicação para um motor de demanda estruturado e previsível. [cite: 91, 92, 94]
                              <Link href="/cases#case-exclusiva-engenharias">Ver case completo →</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </AccordionItem>

            {/* Desafio 3 */}
            <AccordionItem 
              title={<><BarChart /><span>"Seu marketing gera leads que não convertem"</span></>}
              isOpen={openAccordion === 3} 
              onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
            >
              <div className="solution-details-grid">
                  <div className="diagnosis-column">
                      <h4>Diagnóstico</h4>
                      <p><strong>Sintomas:</strong> Site com tráfego e baixa conversão, leads sem contexto, time comercial perdendo tempo com qualificação básica. [cite: 111, 112]</p>
                      <p><strong>Causa Raiz:</strong> Seu site foi projetado como uma brochura online ("presença digital"), não como um motor de receita. Ele não educa, não qualifica e não reduz objeções. [cite: 117, 118]</p>
                  </div>
                  <div className="solution-column">
                      <h4>Solução Aplicada: Plataforma de Aceleração de Receita</h4>
                      <p>Não construímos sites. Construímos ativos digitais estratégicos: 30% Institucional + 70% Engenharia de Receita. [cite: 122, 123]</p>
                      <h5 className="deliverables-title">Entregáveis Principais:</h5>
                      <ul>
                          <li><CheckCircle2 size={16} /> <strong>Arquitetura de Conversão</strong> em cada página. [cite: 125]</li>
                          <li><CheckCircle2 size={16} /> <strong>Copywriting Neurocientífico</strong> que ativa a decisão rápida. [cite: 127, 128]</li>
                          <li><CheckCircle2 size={16} /> <strong>Jornadas por Perfil</strong> para entregar a mensagem certa ao visitante certo. [cite: 129, 130]</li>
                      </ul>
                      <div className="case-proof">
                          <Award size={18}/>
                          <div>
                            <strong>Prova Real:</strong> A própria plataforma da Exclusiva Engenharias, com simulador integrado, qualifica o lead antes mesmo da primeira conversa. [cite: 138, 139]
                            <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer">Ver ativo em ação →</a>
                          </div>
                      </div>
                  </div>
              </div>
            </AccordionItem>

            {/* Desafio 4 */}
            <AccordionItem 
              title={<><Target /><span>"Seu crescimento estagnou e você não sabe qual alavanca puxar"</span></>}
              isOpen={openAccordion === 4} 
              onClick={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
            >
              <div className="solution-details-grid">
                  <div className="diagnosis-column">
                      <h4>Diagnóstico</h4>
                      <p><strong>Sintomas:</strong> Receita estagnada há 2-3 trimestres, múltiplas iniciativas sem resultado claro, decisões baseadas em intuição. [cite: 157, 158, 160]</p>
                      <p><strong>Causa Raiz:</strong> Ausência de inteligência estratégica para priorizar hipóteses. Tentar tudo ao mesmo tempo dispersa recursos e não valida nada. Você precisa de dados de campo antes de comprometer caixa. [cite: 163, 164, 166]</p>
                  </div>
                  <div className="solution-column">
                      <h4>Solução Aplicada: Sprint de Validação Comercial</h4>
                      <p>Testamos sua oferta, ICP e canais em 15 ou 30 dias para gerar dados reais e direcionar a próxima ação. [cite: 168, 169]</p>
                      <h5 className="deliverables-title">Entregáveis Principais:</h5>
                      <ul>
                          <li><CheckCircle2 size={16} /> <strong>Priorização de Hipóteses Críticas</strong> para focar o esforço. [cite: 170, 171]</li>
                          <li><CheckCircle2 size={16} /> <strong>Validação Rápida em Campo</strong> com ICPs reais. [cite: 172, 173]</li>
                          <li><CheckCircle2 size={16} /> <strong>Recomendação Clara e Fundamentada:</strong> escalar, pivotar ou refinar. [cite: 176, 177]</li>
                      </ul>
                  </div>
              </div>
            </AccordionItem>
            
            {/* Desafio 5 */}
            <AccordionItem 
              title={<><ThumbsUp /><span>"Sua venda é complexa e depende de uma apresentação ao vivo"</span></>}
              isOpen={openAccordion === 5} 
              onClick={() => setOpenAccordion(openAccordion === 5 ? null : 5)}
            >
                <div className="solution-details-grid">
                    <div className="diagnosis-column">
                        <h4>Diagnóstico</h4>
                        <p><strong>Sintomas:</strong> Ciclo de vendas longo, dificuldade em tangibilizar o resultado, cada venda exige uma demo personalizada que não escala. [cite: 198, 200]</p>
                        <p><strong>Causa Raiz:</strong> Seu serviço é intangível e o cliente não consegue "sentir" o valor sem experimentar. Você precisa de um ativo que prove sua autoridade e acelere a decisão sem depender de uma reunião. [cite: 204, 205]</p>
                    </div>
                    <div className="solution-column">
                        <h4>Solução Aplicada: Ferramentas Estratégicas de Conversão</h4>
                        <p>Construímos ativos proprietários que se tornam o centro da sua argumentação de valor, tomando decisões cognitivamente caras no lugar do usuário. [cite: 208, 209, 220]</p>
                        <h5 className="deliverables-title">Entregáveis Principais:</h5>
                        <ul>
                            <li><CheckCircle2 size={16} /> <strong>Calculadoras de ROI</strong> que projetam o ganho do cliente em segundos. [cite: 210, 211]</li>
                            <li><CheckCircle2 size={16} /> <strong>Simuladores de Cenário</strong> que permitem ao cliente "brincar" com a solução. [cite: 212]</li>
                            <li><CheckCircle2 size={16} /> <strong>Matchmakers Inteligentes</strong> ou <strong>Diagnósticos de Maturidade</strong>. [cite: 214, 216]</li>
                        </ul>
                         <div className="case-proof">
                            <Award size={18}/>
                            <div>
                                <strong>Prova Real:</strong> Synapse Match Maker. Reduzimos a análise manual exaustiva de conexões a uma sugestão imediata de 3 matches perfeitos em segundos. [cite: 227, 228, 229, 230]
                                <Link href="/cases#case-synapse-matchmaker">Ver case completo →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionItem>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Matriz de Decisão */}
      <section id="matriz-decisao" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Qual solução para qual momento?</h2>
            <p className="lead-text">Use esta matriz para uma recomendação rápida.</p>
            <div className="highlight-box">
                <table className="decision-table">
                    <thead>
                        <tr>
                            <th>Seu Momento</th>
                            <th>Solução Aplicável</th>
                            <th>Camada</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Produto novo no mercado</td><td>Sprint de Validação</td><td>Inteligência & Estratégia</td></tr>
                        <tr><td>Narrativa não converte</td><td>GTM Completo</td><td>Inteligência & Estratégia</td></tr>
                        <tr><td>CEO sobrecarregado</td><td>CRO as a Service</td><td>Inteligência & Estratégia</td></tr>
                        <tr><td>Decisão de alto risco</td><td>Advisory Board</td><td>Inteligência & Estratégia</td></tr>
                        <tr><td>Site não gera leads</td><td>Plataforma Digital</td><td>Ativos Digitais</td></tr>
                        <tr><td>Venda depende de reunião</td><td>Ferramentas Estratégicas</td><td>Ativos Digitais</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
      
      {/* Bloco 5: Modelo de Trabalho */}
       <section id="modelo-trabalho" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>
              Iniciamos com uma Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento vem de <strong>Receita Nova</strong> gerada pelo projeto — dinheiro que você não teria sem nossa intervenção. Seu resultado é nosso resultado. [cite: 247, 248, 249, 250, 251]
            </p>
            <div className="section-cta">
              <Link href="/contato" className="btn btn-secondary">
                <span>Entender o modelo</span><ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <p className="lead-text" style={{marginBottom: '2rem'}}>Vamos traduzir seu desafio em um plano de ação.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Adicionando CSS específico para o novo layout do Accordion */}
      <style jsx>{`
        .solution-details-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
          padding: 1.5rem 1rem;
        }
        .diagnosis-column h4, .solution-column h4 {
          font-family: 'Montserrat', sans-serif;
          color: var(--color-heading);
          font-size: 1.3rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 0.75rem;
        }
        .diagnosis-column p { margin-bottom: 1rem; }
        .deliverables-title {
          font-weight: 600;
          color: var(--color-text);
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        .solution-column ul {
          list-style: none;
          padding: 0;
        }
        .solution-column li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .solution-column li svg {
          color: var(--color-accent);
          margin-top: 4px;
          flex-shrink: 0;
        }
        .case-proof {
          margin-top: 2rem;
          padding: 1.5rem;
          background-color: rgba(0, 150, 132, 0.05);
          border-left: 3px solid var(--color-primary);
          border-radius: 0 8px 8px 0;
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .case-proof svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .case-proof a {
          display: block;
          margin-top: 0.25rem;
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .solution-details-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1rem 0;
          }
        }
      `}</style>
    </>
  );
}