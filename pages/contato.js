import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Ícones necessários para esta página, combinando os existentes e os novos
import { User, Mail, Building, ChevronDown, CheckCircle, Calendar, Search, ArrowRight, MessageSquare, Users, Map, ThumbsUp, XCircle, Linkedin, Send } from 'lucide-react';

// Reutilizando o componente AccordionItem que já usamos em outras páginas
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


export default function ContatoPage() {
  const whatsappNumber = "553139586192";
  const [openAccordion, setOpenAccordion] = useState(null);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cenario: 'Preciso validar uma nova oferta ou mercado.',
    desafio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Diagnóstico - Ativação de Engenharia*\n\n*Nome:* ${formData.nome}\n*E-mail Corporativo:* ${formData.email}\n*Empresa:* ${formData.empresa}\n\n*Cenário de Crescimento:*\n${formData.cenario}\n\n*Principal Desafio de Receita:*\n${formData.desafio}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`;
    window.open(whatsappUrl, '_blank');
  };
  
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
        <title>Vamos Conversar | Synapse B2B</title>
        <meta name="description" content="Primeira conversa de 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão, só clareza sobre como podemos gerar valor real para você." />
      </Head>

      {/* Bloco 1: Hero Section (NOVA COPY) */}
      <section className="hero-section short-hero">
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="hero-headline">Vamos Conversar Sobre Seu Crescimento</h1>
          <p className="hero-subheadline">
            Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo.
            <br />
            Sem pressão. Sem proposta genérica. Só clareza.
          </p>
          <div className="hero-ctas">
            <Link href="#diagnostico" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Que Acontece na Primeira Conversa (NOVO) */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Que Acontece na Primeira Conversa</h2>
          <div className="card-grid-three">
            <div className="info-card">
              <MessageSquare className="info-card-icon" />
              <h3 className="info-card-title">1. ENTENDEMOS SEU CONTEXTO (10 min)</h3>
              <p>Qual seu principal desafio de crescimento agora? Onde está travando: narrativa, sistema, execução ou ativos? O que já tentou e não funcionou?</p>
            </div>
            <div className="info-card">
              <Users className="info-card-icon" />
              <h3 className="info-card-title">2. AVALIAMOS FIT MÚTUO (5 min)</h3>
              <p>Nem toda empresa está no momento certo para Engenharia de Receita. Somos transparentes sobre isso. Se não formos o fit ideal, indicamos alternativas.</p>
            </div>
            <div className="info-card">
              <Map className="info-card-icon" />
              <h3 className="info-card-title">3. MAPEAMOS PRÓXIMO PASSO (6 min)</h3>
              <p>Se houver fit, sugerimos qual frente operacional faz mais sentido para seu contexto (Sprint, GTM, CRO, etc.) e explicamos o porquê.</p>
            </div>
          </div>
          <div className="highlight-box negative-highlight">
            <h4>O que NÃO fazemos na primeira conversa:</h4>
            <div className="negative-list">
                <p><XCircle /> Não enviamos proposta genérica por e-mail</p>
                <p><XCircle /> Não fazemos diagnóstico superficial de 40 slides</p>
                <p><XCircle /> Não pressionamos para fechar contrato</p>
                <p><XCircle /> Não prometemos resultado sem entender contexto</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: A Sessão de Diagnóstico + Formulário (MANTIDO) */}
      <section id="diagnostico" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="contact-grid">
            {/* Coluna Esquerda: Contexto */}
            <div className="contact-column-text">
              <h2 className="contact-title">A Sessão de Diagnóstico.</h2>
              <p className="contact-lead">
                Esta não é uma conversa de vendas. É a primeira fase da nossa engenharia.
              </p>
              <p className="contact-support-text">
                Ao preencher o formulário, você agendará uma sessão estratégica com um de nossos Arquitetos de Receita para mapearmos juntos o seu principal desafio de crescimento. Nosso objetivo é fornecer clareza imediata e um caminho de ação claro – com ou sem a Synapse.
              </p>
            </div>
            {/* Coluna Direita: Formulário */}
            <div className="contact-column-form">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Inicie o Diagnóstico</h3>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <div className="input-wrapper"><User className="input-icon" /><input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" required /></div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail corporativo</label>
                  <div className="input-wrapper"><Mail className="input-icon" /><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ex: nome@suaempresa.com" required /></div>
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <div className="input-wrapper"><Building className="input-icon" /><input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da sua empresa" required /></div>
                </div>
                <div className="form-group">
                  <label htmlFor="cenario">Qual cenário de crescimento melhor descreve seu momento?</label>
                  <div className="input-wrapper select-wrapper">
                    <select id="cenario" name="cenario" value={formData.cenario} onChange={handleChange} required>
                      <option>Preciso validar uma nova oferta ou mercado.</option>
                      <option>Preciso escalar um produto já validado.</option>
                      <option>Preciso de liderança estratégica para a próxima fase.</option>
                    </select>
                    <ChevronDown className="select-arrow-icon" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="desafio">Descreva brevemente seu principal desafio de receita.</label>
                  <div className="input-wrapper"><textarea id="desafio" name="desafio" value={formData.desafio} onChange={handleChange} rows="4" placeholder="Ex: 'Nosso ciclo de vendas é muito longo', 'Não conseguimos gerar leads qualificados', etc." required></textarea></div>
                </div>
                <button type="submit" className="btn btn-primary btn-large form-submit-btn"><span>Agendar Sessão de Diagnóstico</span><ArrowRight size={20} /></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Perguntas Frequentes (NOVO) */}
      <section id="faq" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <div className="accordion-container">
                <AccordionItem title="Para quem a Synapse B2B é o fit ideal?" isOpen={openAccordion === 'faq1'} onClick={() => setOpenAccordion(openAccordion === 'faq1' ? null : 'faq1')}>
                    <p>Empresas B2B que têm produto validado mas receita imprevisível. Especificamente: founders técnicos, empresas que crescem via networking sem sistema, CEOs sobrecarregados com o comercial e times que vendem features, não problemas.</p>
                </AccordionItem>
                <AccordionItem title="Qual o investimento típico?" isOpen={openAccordion === 'faq2'} onClick={() => setOpenAccordion(openAccordion === 'faq2' ? null : 'faq2')}>
                    <p>Nosso modelo é <strong>Give First + Skin in the Game</strong>: uma Ativação Estratégica simbólica para iniciar, com o investimento principal vindo de Receita Nova gerada pelo projeto. Seu resultado é nosso resultado.</p>
                </AccordionItem>
                <AccordionItem title="Quanto tempo dura um projeto típico?" isOpen={openAccordion === 'faq3'} onClick={() => setOpenAccordion(openAccordion === 'faq3' ? null : 'faq3')}>
                    <p>Varia conforme a frente: Sprints (15-30 dias), GTM Completo (30-45 dias), CRO as a Service (mínimo 60-120 dias), Plataformas e Ferramentas (30-45 dias). O objetivo é sempre o mesmo: você operar sem depender de nós.</p>
                </AccordionItem>
                 <AccordionItem title="Qual a diferença entre vocês e uma agência?" isOpen={openAccordion === 'faq4'} onClick={() => setOpenAccordion(openAccordion === 'faq4' ? null : 'faq4')}>
                    <p>Agências executam táticas (ads, conteúdo). Nós instalamos o sistema de receita. Questionamos a estratégia antes de gastar com canais, construímos a arquitetura completa, executamos na linha de frente até validar e entregamos a capacidade para você operar sozinho. Agência é braço. Synapse é cérebro + braço até você ter os dois.</p>
                </AccordionItem>
            </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: O Que Acontece Depois (MANTIDO) */}
      <section className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nosso Processo de Ativação</h2>
          <div className="process-steps-container">
            <div className="process-step">
              <div className="process-step-icon-wrapper"><CheckCircle className="process-step-icon" /></div>
              <h3>Passo 1: Submissão e Análise</h3>
              <p>Após receber suas informações, nosso time fará uma análise preliminar para entender o contexto do seu desafio.</p>
            </div>
            <div className="process-step">
              <div className="process-step-icon-wrapper"><Calendar className="process-step-icon" /></div>
              <h3>Passo 2: Agendamento</h3>
              <p>Um de nossos Arquitetos de Receita entrará em contato por e-mail para agendar a Sessão de Diagnóstico em um horário conveniente.</p>
            </div>
            <div className="process-step">
              <div className="process-step-icon-wrapper"><Search className="process-step-icon" /></div>
              <h3>Passo 3: A Sessão</h3>
              <p>Uma reunião de 45 minutos, focada e sem compromisso, para aprofundar no seu desafio e apresentar uma tese inicial de solução.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bloco 6: Outras Formas de Contato (NOVO) */}
       <section id="outras-formas" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Outras Formas de Contato</h2>
            <p className="lead-text">Prefere escrever antes de agendar?</p>
            <div className="contact-methods-grid">
                <a href="mailto:contato@synapseb2b.com" className="contact-method-card">
                    <Mail />
                    <span>contato@synapseb2b.com</span>
                </a>
                <a href="https://www.linkedin.com/in/juliofigueiredo-synapseb2b/" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                    <Linkedin />
                    <span>LinkedIn</span>
                </a>
                 <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-method-card">
                    <Send />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
      </section>
    </>
  );
}