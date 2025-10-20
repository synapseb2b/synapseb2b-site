import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Ícones otimizados para a nova estrutura, garantindo consistência
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
  const [openAccordion, setOpenAccordion] = useState('faq1'); // Inicia com o primeiro FAQ aberto

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
        <title>Ative Sua Engenharia de Receita | Synapse B2B</title>
        <meta name="description" content="Tudo começa com uma sessão de diagnóstico de 21 minutos para mapear seu principal desafio de receita. Sem pressão, apenas clareza." />
      </Head>

      {/* Bloco 1: Hero Section (REFINADA) */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">O Ponto de Partida da Sua Engenharia de Receita</h1>
          <p className="lead-text">
            Tudo começa com uma sessão de diagnóstico de 21 minutos para mapear seu principal desafio de receita e avaliar o fit mútuo.
          </p>
          <div className="hero-ctas">
            <Link href="#diagnostico" className="btn btn-primary btn-large">
              <span>Agendar Sessão de Diagnóstico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: Alinhamento de Expectativas (NOVA ESTRUTURA) */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Uma Sessão Estratégica, Não Uma Chamada de Vendas</h2>
          <p className="lead-text">Nós não vendemos. Nós diagnosticamos. O objetivo desta primeira conversa é gerar clareza para você.</p>
          <div className="transformation-matrix">
            <div className="matrix-column before">
              <h4><XCircle /> Chamada de Vendas Típica</h4>
              <ul>
                <li>Pressão para fechar contrato</li>
                <li>Diagnóstico superficial</li>
                <li>Promessas sem contexto</li>
                <li>Proposta genérica por e-mail</li>
              </ul>
            </div>
            <div className="matrix-column after">
              <h4><CheckCircle /> Nossa Sessão de Diagnóstico</h4>
              <ul>
                <li><strong>Contexto:</strong> Entendemos seu desafio real (10 min)</li>
                <li><strong>Fit Mútuo:</strong> Avaliamos se somos a melhor ajuda (5 min)</li>
                <li><strong>Clareza:</strong> Mapeamos o próximo passo lógico (6 min)</li>
                <li><strong>Resultado:</strong> Você sai com um caminho de ação claro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: A Sessão de Diagnóstico + Formulário (INTOCADO, COMO SOLICITADO) */}
      <section id="diagnostico" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="contact-grid">
            <div className="contact-column-text">
              <h2 className="contact-title">A Sessão de Diagnóstico.</h2>
              <p className="contact-lead">
                Esta não é uma conversa de vendas. É a primeira fase da nossa engenharia.
              </p>
              <p className="contact-support-text">
                Ao preencher o formulário, você agendará uma sessão estratégica com um de nossos Arquitetos de Receita para mapearmos juntos o seu principal desafio de crescimento. Nosso objetivo é fornecer clareza imediata e um caminho de ação claro – com ou sem a Synapse.
              </p>
            </div>
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

      {/* Bloco 4: Perguntas Frequentes (REFINADO) */}
      <section id="faq" className="section-solid">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Dúvidas Comuns</h2>
            <div className="accordion-container">
                <AccordionItem title="Para quem a Synapse B2B é o fit ideal?" isOpen={openAccordion === 'faq1'} onClick={() => setOpenAccordion(openAccordion === 'faq1' ? null : 'faq1')}>
                    <p>Para empresas B2B que têm produto validado mas receita imprevisível. Nossos melhores parceiros são founders técnicos, CEOs sobrecarregados com o comercial e times que vendem features, não problemas.</p>
                </AccordionItem>
                <AccordionItem title="Qual o investimento?" isOpen={openAccordion === 'faq2'} onClick={() => setOpenAccordion(openAccordion === 'faq2' ? null : 'faq2')}>
                    <p>Nosso modelo é <strong>Give First + Skin in the Game</strong>. Começamos com uma Ativação Estratégica para provar valor rápido. O investimento principal vem de Receita Nova gerada pelo projeto. Seu resultado é o nosso.</p>
                </AccordionItem>
                <AccordionItem title="Qual a diferença entre vocês e uma agência?" isOpen={openAccordion === 'faq4'} onClick={() => setOpenAccordion(openAccordion === 'faq4' ? null : 'faq4')}>
                    <p>Agências executam táticas (ads, conteúdo). Nós instalamos o sistema de receita. Questionamos a estratégia antes de gastar com canais, construímos a arquitetura, executamos na linha de frente e entregamos o playbook para você operar sozinho. Agência é braço. Synapse é cérebro + braço até você ter os dois.</p>
                </AccordionItem>
            </div>
        </div>
      </section>
      
      {/* Bloco 5: Outras Formas de Contato (REFINADO E FINAL) */}
       <section id="outras-formas" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
            <h2 className="section-title">Prefere Outro Caminho?</h2>
            <p className="lead-text">Se você ainda não está pronto para o diagnóstico, sem problemas. Conecte-se conosco.</p>
            <div className="contact-methods-grid">
                <a href="mailto:contato@synapseb2b.com" className="contact-method-card">
                    <Mail />
                    <span>Enviar um E-mail</span>
                </a>
                <a href="https://www.linkedin.com/in/juliofigueiredo-synapseb2b/" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                    <Linkedin />
                    <span>Conectar no LinkedIn</span>
                </a>
                 <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-method-card">
                    <Send />
                    <span>Mensagem Rápida</span>
                </a>
            </div>
        </div>
      </section>

      {/* CSS específico para a nova Matriz de Alinhamento */}
      <style jsx>{`
        .transformation-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
        .matrix-column {
          padding: 2.5rem;
          border-radius: 12px;
          text-align: left;
        }
        .matrix-column.before {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid var(--color-border);
        }
        .matrix-column.after {
          background-color: rgba(0, 150, 132, 0.1);
          border: 1px solid var(--color-primary);
        }
        .matrix-column h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }
        .matrix-column.after h4 {
          color: var(--color-primary);
        }
        .matrix-column ul {
          list-style: none;
          padding: 0;
        }
        .matrix-column li {
          margin-bottom: 0.75rem;
        }
        @media (max-width: 768px) {
          .transformation-matrix {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}