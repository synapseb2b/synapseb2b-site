import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones necessários para esta página
import { 
  ArrowRight, Eye, ChevronDown, Lightbulb, HardHat, CheckCircle2,
  Siren, BarChart, Target, TrendingUp, ThumbsUp
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
  const [openAccordion, setOpenAccordion] = useState(null);

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
        <title>Como Trabalhamos | Synapse B2B</title>
        <meta name="description" content="Reconheça seu desafio de receita e encontre a solução ideal em nossas duas camadas: Inteligência & Estratégia e Construção de Ativos Digitais." />
      </Head>

      {/* Bloco 1: Hero Section */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">"Cinco desafios reais. Duas camadas de solução."</h1>
          <p className="lead-text">
            Empresas B2B não falham por falta de produto. Falham porque potencial técnico sem sistema de receita é oportunidade desperdiçada.
            <br />
            Reconheça seu desafio. Encontre sua solução.
          </p>
          <div className="card-grid-two">
            <div className="info-card">
              <Lightbulb className="info-card-icon" />
              <h3 className="info-card-title">CAMADA 1: INTELIGÊNCIA & ESTRATÉGIA</h3>
              <p>Onde definimos a arquitetura do seu crescimento antes de gastar um real em execução.</p>
            </div>
            <div className="info-card">
              <HardHat className="info-card-icon" />
              <h3 className="info-card-title">CAMADA 2: CONSTRUÇÃO DE ATIVOS DIGITAIS</h3>
              <p>Onde transformamos estratégia em ferramentas que geram receita enquanto você dorme.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: Desafios e Soluções (Accordion) */}
      <section id="desafios" className="section-solid">
        <div className="container reveal-up">
          <div className="accordion-container">

            {/* Desafio 1 */}
            <AccordionItem 
              title={<><Siren /><span>"Seu produto é tecnicamente superior, mas o mercado não percebe o valor dele"</span></>}
              isOpen={openAccordion === 1} 
              onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
            >
              <div className="card-grid-two">
                <div>
                  <h4>Sintomas que você reconhece:</h4>
                  <ul>
                    <li>Você explica features, cliente pergunta "mas como isso resolve meu problema?"</li>
                    <li>Reuniões comerciais longas sem decisão clara (cliente "precisa pensar")</li>
                    <li>Concorrentes inferiores vendem mais rápido com narrativas mais simples</li>
                    <li>Sua equipe vende explicando tecnologia, não resolvendo problemas de negócio</li>
                  </ul>
                  <h4 className="mt-4">Por que isso acontece:</h4>
                  <p>Complexidade técnica não foi traduzida para linguagem de decisor. Sua narrativa ativa o cérebro racional (lento) em vez do decisivo (rápido).</p>
                </div>
                <div className="solution-accordion">
                  <div className="solution-accordion-main">
                    <h5 className="solution-subtitle">SOLUÇÃO: GO-TO-MARKET COMPLETO</h5>
                    <h4 className="solution-title">Arquitetura estratégica do zero.</h4>
                    <p className="solution-description">Entrega: Blueprint que guia cada decisão comercial dos próximos 18 meses</p>
                  </div>
                  <div className="solution-accordion-deliverables">
                    <AccordionItem title="Ver entregáveis" isOpen={openAccordion === 'd1-details'} onClick={() => setOpenAccordion(openAccordion === 'd1-details' ? 1 : 'd1-details')}>
                      <ul className="solution-features">
                        <li><CheckCircle2 size={16} /> Posicionamento</li>
                        <li><CheckCircle2 size={16} /> ICP Refinado</li>
                        <li><CheckCircle2 size={16} /> Proposta de Valor Central</li>
                        <li><CheckCircle2 size={16} /> Canais de Aquisição</li>
                        <li><CheckCircle2 size={16} /> Pricing Estratégico</li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            {/* Desafio 2 */}
            <AccordionItem 
              title={<><TrendingUp /><span>"Seu time comercial depende de esforço heroico para fechar contratos"</span></>}
              isOpen={openAccordion === 2} 
              onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
            >
              <div className="card-grid-two">
                <div>
                  <h4>Sintomas que você reconhece:</h4>
                  <ul>
                    <li>Aquele vendedor excepcional fecha tudo, mas ninguém consegue replicar o método</li>
                    <li>Crescimento depende de quem tem melhor rede de contatos (não de processo)</li>
                    <li>CEO passa mais tempo vendendo do que liderando empresa</li>
                  </ul>
                  <h4 className="mt-4">Por que isso acontece:</h4>
                  <p>Ausência de sistema replicável. Vendas dependem de talento individual, não de processo excelente. Heroísmo comercial não escala. Sistema escala.</p>
                </div>
                <div className="solution-accordion">
                  <div className="solution-accordion-main">
                    <h5 className="solution-subtitle">SOLUÇÃO: DIRETORIA DE RECEITA (CRO as a Service)</h5>
                    <h4 className="solution-title">Liderança C-level fracionada.</h4>
                    <p className="solution-description">Modelo: Investimento mínimo fixo + performance sobre receita nova gerada</p>
                  </div>
                  <div className="solution-accordion-deliverables">
                    <AccordionItem title="Ver entregáveis" isOpen={openAccordion === 'd2-details'} onClick={() => setOpenAccordion(openAccordion === 'd2-details' ? 2 : 'd2-details')}>
                      <ul className="solution-features">
                        <li><CheckCircle2 size={16} /> Inteligência de Mercado</li>
                        <li><CheckCircle2 size={16} /> Arquitetura de Processo</li>
                        <li><CheckCircle2 size={16} /> Execução Pioneira</li>
                        <li><CheckCircle2 size={16} /> Playbook Validado</li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </AccordionItem>

            {/* Desafio 3 */}
            <AccordionItem 
              title={<><BarChart /><span>"Você investe em marketing, mas gera leads que não convertem"</span></>}
              isOpen={openAccordion === 3} 
              onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
            >
              <div className="card-grid-two">
                <div>
                  <h4>Sintomas que você reconhece:</h4>
                  <ul>
                    <li>Site gera tráfego, mas conversão é baixa</li>
                    <li>Leads entram sem contexto, time perde horas qualificando</li>
                    <li>Site institucional bonito, mas não educa nem qualifica</li>
                  </ul>
                  <h4 className="mt-4">Por que isso acontece:</h4>
                  <p>Seu site não foi projetado como motor de receita, mas como uma brochura online. Lead entra cru, time gasta tempo descobrindo se é fit ou não.</p>
                </div>
                <div className="solution-accordion">
                  <div className="solution-accordion-main">
                    <h5 className="solution-subtitle">SOLUÇÃO: PLATAFORMA DE ACELERAÇÃO DE RECEITA</h5>
                    <h4 className="solution-title">30% Institucional + 70% Engenharia de Receita.</h4>
                    <p className="solution-description">Seu ativo digital educa, qualifica e converte 24/7.</p>
                  </div>
                  <div className="solution-accordion-deliverables">
                    <AccordionItem title="Ver entregáveis" isOpen={openAccordion === 'd3-details'} onClick={() => setOpenAccordion(openAccordion === 'd3-details' ? 3 : 'd3-details')}>
                      <ul className="solution-features">
                        <li><CheckCircle2 size={16} /> Arquitetura de Conversão</li>
                        <li><CheckCircle2 size={16} /> Copywriting Neurocientífico</li>
                        <li><CheckCircle2 size={16} /> Jornadas por Perfil</li>
                        <li><CheckCircle2 size={16} /> Integração com CRM</li>
                      </ul>
                    </AccordionItem>
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
              <div className="card-grid-two">
                <div>
                  <h4>Sintomas que você reconhece:</h4>
                  <ul>
                    <li>Receita parou de crescer há 2-3 trimestres</li>
                    <li>Você tenta várias coisas ao mesmo tempo mas nada move a agulha</li>
                    <li>Decisões baseadas em intuição, não em dados de campo</li>
                  </ul>
                  <h4 className="mt-4">Por que isso acontece:</h4>
                  <p>Ausência de inteligência estratégica. Você precisa validar demanda real antes de comprometer recursos grandes.</p>
                </div>
                <div className="solution-accordion">
                  <div className="solution-accordion-main">
                    <h5 className="solution-subtitle">SOLUÇÃO: SPRINT DE VALIDAÇÃO COMERCIAL</h5>
                    <h4 className="solution-title">Testamos oferta, ICP e canais em 15 ou 30 dias.</h4>
                    <p className="solution-description">Você decide escalar baseado em dados de campo, não intuição ou esperança.</p>
                  </div>
                  <div className="solution-accordion-deliverables">
                    <AccordionItem title="Ver entregáveis" isOpen={openAccordion === 'd4-details'} onClick={() => setOpenAccordion(openAccordion === 'd4-details' ? 4 : 'd4-details')}>
                      <ul className="solution-features">
                        <li><CheckCircle2 size={16} /> Hipóteses Priorizadas</li>
                        <li><CheckCircle2 size={16} /> Validação Rápida em Campo</li>
                        <li><CheckCircle2 size={16} /> Coleta de Dados Reais</li>
                        <li><CheckCircle2 size={16} /> Recomendação Clara</li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            {/* Desafio 5 */}
            <AccordionItem 
              title={<><ThumbsUp /><span>"Sua venda depende de apresentação ao vivo e o cliente precisa 'sentir' o valor"</span></>}
              isOpen={openAccordion === 5} 
              onClick={() => setOpenAccordion(openAccordion === 5 ? null : 5)}
            >
              <div className="card-grid-two">
                <div>
                  <h4>Sintomas que você reconhece:</h4>
                  <ul>
                    <li>Ciclo de vendas longo porque cliente não consegue tangibilizar resultado</li>
                    <li>Cada venda exige apresentação personalizada (não escala)</li>
                    <li>Competidores com calculadoras/simuladores convertem mais rápido</li>
                  </ul>
                  <h4 className="mt-4">Por que isso acontece:</h4>
                  <p>Seu produto/serviço é complexo ou intangível. Você precisa de um ativo proprietário que prova autoridade e acelera a decisão SEM depender de reunião.</p>
                </div>
                <div className="solution-accordion">
                  <div className="solution-accordion-main">
                    <h5 className="solution-subtitle">SOLUÇÃO: FERRAMENTAS ESTRATÉGICAS DE CONVERSÃO</h5>
                    <h4 className="solution-title">Construímos ativos que se tornam o centro da sua argumentação de valor.</h4>
                    <p className="solution-description">Ferramenta que toma decisões cognitivamente caras no lugar do usuário.</p>
                  </div>
                  <div className="solution-accordion-deliverables">
                    <AccordionItem title="Ver entregáveis" isOpen={openAccordion === 'd5-details'} onClick={() => setOpenAccordion(openAccordion === 'd5-details' ? 5 : 'd5-details')}>
                      <ul className="solution-features">
                        <li><CheckCircle2 size={16} /> Calculadoras de ROI</li>
                        <li><CheckCircle2 size={16} /> Simuladores de Cenário</li>
                        <li><CheckCircle2 size={16} /> Matchmakers Inteligentes</li>
                        <li><CheckCircle2 size={16} /> Diagnósticos de Maturidade</li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </AccordionItem>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Matriz de Decisão */}
      <section id="matriz-decisao" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
            <h2 className="section-title">"Qual solução para qual momento?"</h2>
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
      
      {/* Bloco 4: Modelo de Trabalho */}
       <section id="modelo-trabalho" className="section-solid">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>NOSSO MODELO DE TRABALHO</h3>
            <p className="decision-highlight">Give First + Skin in the Game</p>
            <p>
              Iniciamos com Ativação Estratégica para formalizar o comprometimento mútuo. O maior volume de investimento em nosso trabalho vem de Receita Nova gerada pelo projeto. Seu resultado é nosso resultado.
            </p>
            <div className="section-cta">
              <Link href="/contato" className="btn btn-secondary">
                <span>Entender o modelo</span><ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Qual desafio você enfrenta agora?</h2>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico em 21min</span><ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text mt-4">
            Ou explore os entregáveis detalhados:
          </p>
          <div className="hero-ctas mt-2">
            <Link href="#desafios" className="btn btn-secondary">
                <span>Ver Inteligência & Estratégia</span><Eye size={20} />
            </Link>
            <Link href="#desafios" className="btn btn-secondary">
                <span>Ver Construção de Ativos Digitais</span><Eye size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}