import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ArrowRight, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '553139586192';

const TRUST_CLIENTS = [
  'Mr. Job Coworking',
  'Giornata Empresas',
  'JB Soluttions',
  'Controllertech',
  'Versão Holística',
  'Exclusiva Engenharias',
  'TOTTEC',
  'Way Sistemas',
  'Fast Club Run',
];

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', linkedin: '' });
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new URLSearchParams({ 'form-name': 'decodificacao', ...formData });
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (_) { /* Fail silently */ }
    setSubmitted(true);
  };

  const whatsappMessage = `*Interesse — Synapse B2B*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*LinkedIn:* ${formData.linkedin}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const closeModal = () => {
    if (submitted) {
      setSubmitted(false);
      setFormData({ nome: '', email: '', linkedin: '' });
    }
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita</title>
        <meta
          name="description"
          content="Pare de deixar dinheiro na mesa. Engenharia de Receita para empresas B2B de alta complexidade."
        />
      </Head>

      <div className="landing">
        {/* Logo discreto no topo */}
        <img
          src="/image/SYNAPSE_B2B_LOGO_BLUE.webp"
          alt="Synapse B2B"
          className="landing-logo"
          width={120}
          height={120}
        />

        {/* Conteudo central */}
        <div className="landing-content">
          <h1 className="landing-h1">Toda empresa tem receita que não está sendo capturada.</h1>

          <p className="landing-h2">
            Ela não está escondida.{' '}
            <strong>Está desalinhada.</strong>
          </p>

          <p className="ecosystem-text">
            Experiência acumulada nos maiores ecossistemas B2B do mundo:{' '}
            <strong>Google</strong> | <strong>Microsoft</strong> | <strong>Dell</strong> | <strong>TOTVS</strong>
          </p>

          <button
            type="button"
            className="landing-cta"
            onClick={() => setShowModal(true)}
          >
            <span>Iniciar Diagnóstico</span>
            <ArrowRight size={18} />
          </button>

          <p className="cta-support">
            21 minutos, sem compromisso. De Fundador para Fundador.
          </p>
        </div>

        {/* Trust Bar */}
        <div className="trust-bar">
          <p className="trust-label">
            Empresas que decodificaram seu valor com a Synapse B2B
          </p>
          <p className="trust-names">
            {TRUST_CLIENTS.map((name, i) => (
              <span key={name}>
                {name}
                {i < TRUST_CLIENTS.length - 1 && (
                  <span className="trust-separator">&middot;</span>
                )}
              </span>
            ))}
          </p>
        </div>

        <div className="landing-divider" />

        <p className="microcopy">
          Estamos construindo a nova plataforma da Synapse B2B.
        </p>

        {/* WhatsApp Flutuante */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Visitei o site da Synapse B2B.')}`}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="modal-content">
            <button type="button" className="modal-close" onClick={closeModal} aria-label="Fechar">
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h3 className="modal-title">Sua Sessão em 3 passos</h3>
                <form
                  name="decodificacao"
                  method="POST"
                  data-netlify="true"
                  className="modal-form"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="decodificacao" />
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    className="modal-input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="modal-input"
                    required
                  />
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn"
                    className="modal-input"
                    required
                  />
                  <button type="submit" className="modal-submit">
                    <span>Enviar</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <p className="success-message">
                  Pronto. Recebemos seus dados. Vamos entrar em contato para
                  agendar sua sessão de 21 minutos.
                </p>
                <p className="success-fasttrack">
                  Prefere agendar agora?
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp size={18} />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
