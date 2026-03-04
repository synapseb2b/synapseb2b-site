import { useState } from 'react';
import Head from 'next/head';
import { ArrowRight } from 'lucide-react';
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
  const [formData, setFormData] = useState({ nome: '', email: '', site: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new URLSearchParams({
      'form-name': 'decodificacao',
      ...formData,
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (_) {
      // Fail silently
    }

    setSubmitted(true);
  };

  const whatsappMessage = `*Interesse — Synapse B2B*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Site/LinkedIn:* ${formData.site}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

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
        <div className="landing-content">
          <img
            src="/image/logo_hero.png"
            alt="Synapse B2B"
            className="landing-logo"
            width={220}
            height={220}
          />

          <h1 className="landing-h1">Pare de deixar dinheiro na mesa.</h1>

          <p className="landing-text">
            Estamos construindo a nova plataforma digital da SYNAPSE B2B para
            mostrar como a Engenharia de Receita traduz competência técnica em
            percepção de mercado. Até o lançamento, deixe seu contato abaixo
            para iniciarmos a decodificação do seu negócio — sem compromisso e
            sem apresentações genéricas.
          </p>

          <div className="form-area">
            {!submitted ? (
              <form
                name="decodificacao"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="decodificacao" />
                <div className="landing-form">
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    className="landing-input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail corporativo"
                    className="landing-input"
                    required
                  />
                  <input
                    type="text"
                    name="site"
                    value={formData.site}
                    onChange={handleChange}
                    placeholder="Site ou LinkedIn"
                    className="landing-input"
                    required
                  />
                </div>
                <button type="submit" className="landing-btn">
                  <span>Solicitar Decodificação</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="success-state">
                <p className="success-message">
                  Recebemos suas informações. Nossa equipe fará uma análise
                  preliminar da sua presença digital e entraremos em contato via
                  e-mail para agendar nossa conversa de fundador para fundador.
                </p>
                <p className="success-fasttrack">
                  Tem urgência em parar de deixar dinheiro na mesa?
                  <br />
                  Acione nosso Fast Track e fale diretamente com um sócio agora
                  mesmo.
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
    </>
  );
}
