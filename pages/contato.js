// pages/contato.js (VERSÃO REFINADA)

import { useState } from 'react';
import Head from 'next/head';
import { User, Mail, Building, ChevronDown, CheckCircle, Calendar, Search, ArrowRight } from 'lucide-react';

export default function ContatoPage() {
  const whatsappNumber = "553139586192";

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
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim( ))}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>Ativar Engenharia de Receita | Synapse B2B</title>
        <meta name="description" content="Inicie seu diagnóstico. O primeiro passo para transformar sua genialidade técnica em crescimento previsível." />
      </Head>

      {/* Bloco 1: Seção Hero */}
      <section className="hero-section short-hero">
        <div className="container hero-content text-center page-hero-padding">
          <h1 className="hero-headline">Ative sua Engenharia de Receita.</h1>
          <p className="hero-subheadline">
            O primeiro passo para transformar sua genialidade técnica em crescimento previsível é o diagnóstico. Ele é o ponto de partida da nossa engenharia.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: O Ponto de Partida */}
      <section className="section-solid">
        <div className="container">
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
                  <div className="input-wrapper">
                    <User className="input-icon" />
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail corporativo</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ex: nome@suaempresa.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <div className="input-wrapper">
                    <Building className="input-icon" />
                    <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da sua empresa" required />
                  </div>
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
                  <div className="input-wrapper">
                    <textarea id="desafio" name="desafio" value={formData.desafio} onChange={handleChange} rows="4" placeholder="Ex: 'Nosso ciclo de vendas é muito longo', 'Não conseguimos gerar leads qualificados', etc." required></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-large form-submit-btn">
                  <span>Agendar Sessão de Diagnóstico</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: O Que Acontece Depois? */}
      <section className="section-with-gradient-glow">
        <div className="container text-center">
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
    </>
  );
}
