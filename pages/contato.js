// pages/contato.js
// Versão Final: Estilos limpos e centralizados no globals.css

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  User, Mail, Building, ChevronDown, ArrowRight, Linkedin, Send, MessageSquare 
} from 'lucide-react';

export default function ContatoPage() {
  const whatsappNumber = "553139586192"; 
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cenario: '', 
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
        <meta name="description" content="Sessão de diagnóstico de 21 minutos para mapear seu desafio de receita e avaliar fit mútuo." />
      </Head>

      {/* HERO */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content page-hero-padding reveal-up">
          <div style={{marginBottom: '2rem'}}>
            <MessageSquare size={64} style={{color: 'var(--color-primary)', filter: 'drop-shadow(0 0 15px var(--color-primary))'}} />
          </div>
          <h1 className="hero-headline">O Ponto de Partida</h1>
          <p className="hero-subheadline lead-text">
            Uma sessão de diagnóstico de 21 minutos para mapear seu desafio de receita e avaliar o fit mútuo.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="diagnostico" className="section-solid">
        <div className="container reveal-up">
          
          {/* Grid Layout */}
          <div className="pillar-grid-revolutionary" style={{marginTop: 0, alignItems: 'start'}}>
            
            {/* Coluna Esquerda: Texto de Apoio */}
            <div style={{textAlign: 'center', padding: '1rem'}}>
              <h2 className="section-title" style={{textAlign: 'center'}}>Agende Seu Diagnóstico</h2>
              <p className="lead-text">Preencha o formulário para iniciar a conversa.</p>
              
              <div className="glass-card-premium" style={{marginTop: '2rem'}}>
                 <p>
                   Um de nossos Arquitetos de Receita analisará seus dados antes da reunião. 
                   Nosso objetivo: clareza imediata sobre qual alavanca acionar para destravar seu crescimento.
                 </p>
              </div>
            </div>

            {/* Coluna Direita: Formulário */}
            <div className="glass-card-premium" style={{textAlign: 'left'}}>
              <form onSubmit={handleSubmit} style={{width: '100%'}}>
                
                <div className="form-group">
                  <label htmlFor="nome" className="form-label">Nome completo</label>
                  <div className="input-wrapper">
                    <User size={18} className="field-icon" />
                    <input 
                      type="text" id="nome" name="nome" 
                      value={formData.nome} onChange={handleChange} 
                      placeholder="Seu nome" required 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail corporativo</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="field-icon" />
                    <input 
                      type="email" id="email" name="email" 
                      value={formData.email} onChange={handleChange} 
                      placeholder="nome@empresa.com" required 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="empresa" className="form-label">Empresa</label>
                  <div className="input-wrapper">
                    <Building size={18} className="field-icon" />
                    <input 
                      type="text" id="empresa" name="empresa" 
                      value={formData.empresa} onChange={handleChange} 
                      placeholder="Nome da empresa" required 
                      className="form-input" 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="cenario" className="form-label">Qual objetivo descreve seu momento?</label>
                  <div className="input-wrapper">
                    <select 
                      id="cenario" name="cenario" 
                      value={formData.cenario} onChange={handleChange} 
                      required 
                      className="form-select"
                    >
                      <option value="" disabled style={{color: '#000'}}>Selecione o resultado que você busca</option>
                      <option value="Identificar Gargalos" style={{color: '#000'}}>Quero identificar gargalos e destravar crescimento (Diagnóstico).</option>
                      <option value="Validar Mercado" style={{color: '#000'}}>Quero validar um novo mercado ou produto com segurança (Validação).</option>
                      <option value="Receita Previsível" style={{color: '#000'}}>Quero tornar minha receita previsível e escalável (GTM/CRO).</option>
                      <option value="Ativos Digitais" style={{color: '#000'}}>Quero que meu site gere leads qualificados 24/7 (Plataformas/Apps).</option>
                      <option value="Decisão Estratégica" style={{color: '#000'}}>Quero apoio sênior para decisões críticas (Advisory).</option>
                    </select>
                    <ChevronDown size={18} className="select-chevron" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="desafio" className="form-label">O que impede esse resultado hoje?</label>
                  <div className="input-wrapper">
                    <textarea 
                      id="desafio" name="desafio" 
                      value={formData.desafio} onChange={handleChange} 
                      rows="4" 
                      placeholder="Ex: 'Dependo 100% de indicações', 'Meu ciclo de vendas é longo demais'..." 
                      required
                      className="form-textarea"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-large" style={{width: '100%', marginTop: '1rem'}}>
                  <span>Enviar e Agendar</span>
                  <ArrowRight size={20} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OUTRAS FORMAS */}
      <section className="final-cta-section">
        <div className="pulsating-core-background"></div>
        <div className="container reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title">Outras Formas de Contato</h2>
          <p className="lead-text">Prefere começar de outro jeito? Escolha o canal.</p>
          
          <div className="pillar-grid-revolutionary">
            
            <Link href="mailto:contato@synapseb2b.com" className="glass-card-premium" style={{textDecoration: 'none'}}>
              <div className="pillar-icon-wrapper"><Mail size={32} /></div>
              <h3 className="pillar-card-title">E-mail</h3>
              <p style={{color: 'var(--color-text)'}}>contato@synapseb2b.com</p>
            </Link>

            <Link href="https://www.linkedin.com/in/juliofigueiredo-synapseb2b/" target="_blank" className="glass-card-premium" style={{textDecoration: 'none'}}>
              <div className="pillar-icon-wrapper"><Linkedin size={32} /></div>
              <h3 className="pillar-card-title">LinkedIn</h3>
              <p style={{color: 'var(--color-text)'}}>Júlio Figueiredo</p>
            </Link>

            <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" className="glass-card-premium" style={{textDecoration: 'none'}}>
              <div className="pillar-icon-wrapper"><Send size={32} /></div>
              <h3 className="pillar-card-title">WhatsApp</h3>
              <p style={{color: 'var(--color-text)'}}>Mensagem direta</p>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}