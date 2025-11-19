// pages/contato.js
// Versão Final: Seção removida + Formulário focado em Outcomes

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  User, Mail, Building, ChevronDown, ArrowRight, XCircle, CheckCircle, 
  Linkedin, Send 
} from 'lucide-react';

export default function ContatoPage() {
  const whatsappNumber = "553139586192"; 
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cenario: '', // Inicia vazio para forçar seleção
    desafio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Diagnóstico Estratégico - Synapse B2B*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Empresa:* ${formData.empresa}\n\n*Cenário:* ${formData.cenario}\n\n*Desafio Principal:*\n${formData.desafio}`;
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
        <title>Contato | Agende Seu Diagnóstico Estratégico</title>
        <meta name="description" content="Sessão de diagnóstico de 21 minutos para mapear seu desafio de receita e avaliar fit mútuo. Sem pressão, apenas clareza." />
      </Head>

      {/* ====================================================================== */}
      {/* HERO                                                                 */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">O Ponto de Partida</h1>
          <p className="lead-text">
            Uma sessão de diagnóstico de 21 minutos para mapear seu desafio de receita e avaliar o fit mútuo.
          </p>
          <div className="hero-ctas">
            <a href="#diagnostico" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* SEÇÃO REMOVIDA: "Diagnóstico, Não Vendas" */}

      {/* ====================================================================== */}
      {/* FORMULÁRIO (REFINADO: FOCO EM OUTCOME)                               */}
      {/* ====================================================================== */}
      <section id="diagnostico" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Agende Seu Diagnóstico</h2>
              <p className="lead-text">Preencha o formulário para iniciar a conversa.</p>
              <p>Um de nossos Arquitetos de Receita entrará em contato. Nosso objetivo: clareza imediata sobre qual alavanca acionar para destravar seu crescimento.</p>
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <div className="input-wrapper">
                    <User size={18} className="input-icon" />
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail corporativo</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="nome@empresa.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <div className="input-wrapper">
                    <Building size={18} className="input-icon" />
                    <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da empresa" required />
                  </div>
                </div>
                
                {/* ITEM A: Cenário (Outcome-Driven) */}
                <div className="form-group">
                  <label htmlFor="cenario">Qual objetivo descreve seu momento?</label>
                  <div className="input-wrapper select-wrapper">
                    <select id="cenario" name="cenario" value={formData.cenario} onChange={handleChange} required>
                      <option value="" disabled>Selecione o resultado que você busca</option>
                      <option value="Identificar Gargalos">Quero identificar gargalos e destravar crescimento (Diagnóstico).</option>
                      <option value="Validar Mercado">Quero validar um novo mercado ou produto com segurança (Validação).</option>
                      <option value="Receita Previsível">Quero tornar minha receita previsível e escalável (GTM/CRO).</option>
                      <option value="Ativos Digitais">Quero que meu site gere leads qualificados 24/7 (Plataformas/Apps).</option>
                      <option value="Decisão Estratégica">Quero apoio sênior para decisões críticas (Advisory).</option>
                    </select>
                    <ChevronDown size={18} className="select-arrow-icon" />
                  </div>
                </div>

                {/* ITEM B: Desafio (Provocativo) */}
                <div className="form-group">
                  <label htmlFor="desafio">O que impede esse resultado hoje?</label>
                  <div className="input-wrapper">
                    <textarea 
                      id="desafio" 
                      name="desafio" 
                      value={formData.desafio} 
                      onChange={handleChange} 
                      rows="4" 
                      placeholder="Ex: 'Dependo 100% de indicações', 'Meu ciclo de vendas é longo demais', 'Invisto em marketing mas não vejo retorno'..." 
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <span>Enviar e Agendar</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* OUTRAS FORMAS                                                        */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary" style={{padding: '6rem 0'}}>
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Outras Formas de Contato
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Prefere começar de outro jeito? Escolha o canal.
          </p>
          <div className="contact-channels">
            <a href="mailto:contato@synapseb2b.com" className="channel-card">
              <Mail size={32} />
              <span>E-mail</span>
              <small>contato@synapseb2b.com</small>
            </a>
            <a href="https://www.linkedin.com/in/juliofigueiredo-synapseb2b/" target="_blank" rel="noopener noreferrer" className="channel-card">
              <Linkedin size={32} />
              <span>LinkedIn</span>
              <small>Júlio Figueiredo</small>
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="channel-card">
              <Send size={32} />
              <span>WhatsApp</span>
              <small>Mensagem direta</small>
            </a>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info {
          text-align: left;
        }
        .contact-form-container {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2.5rem;
        }

        /* FORMULÁRIO */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }
        .form-group label {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--color-heading);
          padding-left: 0.25rem;
        }
        .input-wrapper {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text);
          opacity: 0.7;
          pointer-events: none;
        }
        .input-wrapper input,
        .input-wrapper textarea,
        .input-wrapper select {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background-color: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: var(--color-heading);
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .input-wrapper input:focus,
        .input-wrapper textarea:focus,
        .input-wrapper select:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(0, 150, 132, 0.3);
        }
        .input-wrapper textarea {
          padding: 1rem;
        }
        .input-wrapper select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 3rem;
          cursor: pointer;
        }
        .select-wrapper {
          position: relative;
        }
        .select-arrow-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text);
          opacity: 0.7;
          pointer-events: none;
        }
        .contact-form .btn-primary {
          width: 100%;
          margin-top: 1rem;
        }

        /* CANAIS */
        .contact-channels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .channel-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .channel-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-4px);
        }
        .channel-card svg {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .channel-card span {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-heading);
          margin-bottom: 0.5rem;
        }
        .channel-card small {
          color: var(--color-text);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}