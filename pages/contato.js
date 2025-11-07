// pages/contato.js (VERSÃO REVISADA E OTIMIZADA)

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  User, Mail, Building, ChevronDown, ArrowRight, XCircle, CheckCircle, 
  Linkedin, Send // MessageSquare removido
} from 'lucide-react';

export default function ContatoPage() {
  const whatsappNumber = "553139586192"; // Número de WhatsApp para envio
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

  // Envia os dados do formulário para o WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Diagnóstico Estratégico - Synapse B2B*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Empresa:* ${formData.empresa}\n\n*Cenário:*\n${formData.cenario}\n\n*Desafio Principal:*\n${formData.desafio}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // Efeito de animação 'reveal-up'
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

      {/* ====================================================================== */}
      {/* EXPECTATIVAS                                                         */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Diagnóstico, Não Vendas</h2>
          <p className="lead-text">O objetivo desta primeira conversa é gerar clareza para você</p>
          <div className="comparison-matrix">
            <div className="comparison-col bad">
              <h4><XCircle size={20} /> Chamada de Vendas Típica</h4>
              <ul>
                <li>Pressão para fechar</li>
                <li>Diagnóstico superficial</li>
                <li>Promessas genéricas</li>
                <li>Proposta por e-mail</li>
              </ul>
            </div>
            <div className="comparison-col good">
              <h4><CheckCircle size={20} /> Nossa Sessão</h4>
              <ul>
                <li><strong>10min:</strong> Entendemos seu desafio real</li>
                <li><strong>5min:</strong> Avaliamos fit mútuo</li>
                <li><strong>6min:</strong> Mapeamos próximo passo</li>
                <li><strong>Resultado:</strong> Caminho de ação claro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* FORMULÁRIO                                                           */}
      {/* ====================================================================== */}
      <section id="diagnostico" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Agende Seu Diagnóstico</h2>
              <p className="lead-text">Preencha o formulário para iniciar a conversa.</p>
              <p>Um de nossos Arquitetos de Receita entrará em contato para agendar a sessão estratégica. Nosso objetivo: clareza imediata e um caminho de ação claro — com ou sem a Synapse.</p>
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
                <div className="form-group">
                  <label htmlFor="cenario">Cenário de crescimento atual</label>
                  <div className="input-wrapper select-wrapper">
                    <select id="cenario" name="cenario" value={formData.cenario} onChange={handleChange} required>
                      <option>Preciso validar uma nova oferta ou mercado.</option>
                      <option>Preciso escalar um produto já validado.</option>
                      <option>Preciso de liderança estratégica.</option>
                    </select>
                    <ChevronDown size={18} className="select-arrow-icon" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="desafio">Principal desafio de receita</label>
                  <div className="input-wrapper">
                    <textarea id="desafio" name="desafio" value={formData.desafio} onChange={handleChange} rows="4" placeholder="Ex: 'Ciclo de vendas muito longo', 'Dificuldade em gerar leads qualificados', etc." required></textarea>
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
      {/* OUTRAS FORMAS (Refatorado para CTA Padrão)                           */}
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
        .comparison-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 900px;
          margin: 3rem auto 0;
        }
        .comparison-col {
          padding: 2rem;
          border-radius: 12px;
          text-align: left;
        }
        .comparison-col.bad {
          background: var(--color-card-bg); /* AJUSTADO */
          border: 1px solid var(--color-border);
        }
        .comparison-col.good {
          background: rgba(0, 150, 132, 0.1);
          border: 1px solid var(--color-primary);
        }
        .comparison-col h4 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }
        .comparison-col.good h4 {
          color: var(--color-primary);
        }
        .comparison-col ul {
          list-style: none;
          padding: 0;
        }
        .comparison-col li {
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

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
          background: var(--color-card-bg); /* AJUSTADO */
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2.5rem;
        }

        /* --- CSS ADICIONADO PARA O FORMULÁRIO --- */
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
          font-size: 0.9rem;
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
          padding: 1rem 1rem 1rem 3rem; /* Padding esquerdo para ícone */
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
          padding: 1rem; /* Textarea não tem ícone */
        }
        .input-wrapper select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 3rem; /* Espaço para seta */
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
        /* --- FIM DO CSS ADICIONADO --- */

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
          background: var(--color-card-bg); /* AJUSTADO */
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
          .comparison-matrix, .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}