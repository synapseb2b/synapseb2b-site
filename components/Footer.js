// components/Footer.js
// Versão Final Ajustada: Layout Dividido (Brand Esquerda / Nav Direita) + WhatsApp Icon + Sem Cookies

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Instagram } from 'lucide-react';

// Componente simples para o ícone do WhatsApp (SVG puro para garantir a marca correta)
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382C17.112 14.011 15.451 13.194 15.136 13.086C14.819 12.973 14.596 12.923 14.37 13.244C14.149 13.574 13.503 14.338 13.298 14.569C13.098 14.802 12.894 14.821 12.578 14.664C11.628 14.192 10.334 13.472 9.286 12.132C8.922 11.668 9.619 11.632 10.095 10.679C10.175 10.519 10.135 10.377 10.075 10.256C10.015 10.135 9.339 8.468 9.053 7.789C8.779 7.137 8.499 7.225 8.287 7.225C8.084 7.225 7.851 7.225 7.619 7.225C7.386 7.225 7.003 7.312 6.682 7.663C6.361 8.014 5.449 8.871 5.449 10.616C5.449 12.361 6.719 14.048 6.9 14.294C7.09 14.534 9.402 18.105 12.942 19.634C15.287 20.647 15.897 20.507 16.408 20.458C17.164 20.385 18.153 19.858 18.363 19.268C18.573 18.678 18.573 18.175 18.512 18.072C18.451 17.969 18.231 17.913 17.916 17.756H17.472ZM12.006 24C7.63 24 3.485 22.262 0.5 19.277L0 24L4.832 22.751C7.666 24.297 12.011 24.82 12.016 24.82C18.622 24.82 24 19.442 24 12.836C24 6.23 18.622 0.852 12.016 0.852C5.41 0.852 0.032 6.23 0.032 12.836C0.032 14.855 0.583 16.843 1.644 18.628L12.006 24Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@synapseb2b.com').then(() => {
      setCopySuccess('Copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('Erro');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <>
      <footer className="smart-footer">
        <div className="container">
          
          {/* === ÁREA PRINCIPAL === */}
          <div className="footer-main-layout">
            
            {/* --- LADO ESQUERDO: BRAND & CONTATO --- */}
            <div className="footer-left-col">
              <div className="brand-identity">
                <h3 className="footer-logo-text">Synapse B2B</h3>
                <p className="brand-tagline">
                  Engenharia de Receita para Empresas B2B<br/>
                  que Precisam de Crescimento Previsível
                </p>
              </div>

              <div className="contact-actions">
                {/* Botão E-mail */}
                <button onClick={handleCopyEmail} className="contact-pill" aria-label="Copiar E-mail">
                  <Mail size={18} />
                  <span>contato@synapseb2b.com</span>
                  {copySuccess && <span className="pill-feedback">{copySuccess}</span>}
                </button>
                
                {/* Botão WhatsApp (SVG Personalizado) */}
                <a 
                  href="https://wa.me/553139586192" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-pill"
                >
                  <WhatsAppIcon size={18} />
                  <span>+55 31 3958-6192</span>
                </a>
              </div>

              {/* Redes Sociais */}
              <div className="social-buttons-row">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* --- LADO DIREITO: NAVEGAÇÃO (GRID) --- */}
            <div className="footer-right-col">
              
              {/* Coluna 1: Menu Principal */}
              <div className="nav-column">
                <h5 className="nav-title-hidden">Menu</h5>
                <ul className="nav-list-main">
                  <li><Link href="/" className="nav-link-highlight">Home</Link></li>
                  <li><Link href="/a-engenharia" className="nav-link-highlight">A Engenharia</Link></li>
                </ul>
              </div>

              {/* Coluna 2: Cases (DrillDown Exposto) */}
              <div className="nav-column">
                <h5 className="nav-title">Cases</h5>
                <ul className="nav-list">
                  <li><Link href="/cases/versao-holistica">Versão Holística</Link></li>
                  <li><Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link></li>
                  <li><Link href="/cases/aorkia">AORKIA</Link></li>
                </ul>
              </div>

              {/* Coluna 3: Soluções (DrillDown Exposto) */}
              <div className="nav-column">
                <h5 className="nav-title">Soluções</h5>
                <ul className="nav-list">
                  <li><Link href="/solucoes/cortex-b2b">Cortex B2B™</Link></li>
                  <li><Link href="/solucoes/plataformas-digitais">Plataformas Digitais</Link></li>
                  <li><Link href="/solucoes/match-maker">Match-Maker B2B</Link></li>
                  <li><Link href="/solucoes/apps">Apps Estratégicos</Link></li>
                  <li><Link href="/solucoes/profissionais-de-saude">Health Business Arch.</Link></li>
                </ul>
              </div>

            </div>
          </div>

          {/* === LINHA INFERIOR: LEGAL & CRÉDITOS === */}
          <div className="footer-legal-bar">
            
            {/* Linha 1: Copyright e Links Legais (SEM COOKIES) */}
            <div className="legal-top-row">
                <div className="legal-left">
                  <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
                </div>

                <div className="legal-links">
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                  <Link href="/termos-de-uso">Termos de Uso</Link>
                  {/* Link de Cookies removido conforme solicitado */}
                </div>
            </div>

            {/* Linha 2: Créditos */}
            <div className="legal-credits-row">
                <p>Desenvolvido por Synapse B2B | Plataformas Forjada em Engenharia de Receita.</p>
            </div>

          </div>

        </div>
      </footer>

      <style jsx>{`
        .smart-footer {
          background: #0a0a0a;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 5rem 0 2rem;
          color: var(--color-text);
          font-size: 0.95rem;
        }

        /* --- LAYOUT PRINCIPAL --- */
        .footer-main-layout {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        /* === LADO ESQUERDO === */
        .footer-left-col {
          flex: 1;
          min-width: 280px;
          max-width: 450px; /* Um pouco mais largo para a tagline */
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.6rem;
          color: var(--color-heading);
          margin-bottom: 0.8rem;
          letter-spacing: -0.5px;
        }

        .brand-tagline {
          opacity: 0.8;
          line-height: 1.5;
          font-size: 1rem;
          color: var(--color-text);
          font-weight: 400;
        }

        .contact-actions {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          align-items: flex-start;
        }

        .social-buttons-row {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-heading);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #000;
          transform: translateY(-3px);
        }

        /* === LADO DIREITO (GRID) === */
        .footer-right-col {
          flex: 1.5;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 2rem;
        }

        .nav-column {
          display: flex;
          flex-direction: column;
        }

        .nav-title {
          color: var(--color-heading);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          opacity: 0.6;
        }
        
        .nav-title-hidden {
           /* Mantém o espaço visual alinhado mas invisível para a coluna Home */
           height: 1.2rem; 
           margin-bottom: 1.5rem;
           opacity: 0;
        }

        .nav-list, .nav-list-main {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        /* Links Comuns */
        .nav-list :global(a) {
          text-decoration: none;
          color: var(--color-text);
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .nav-list :global(a:hover) {
          color: var(--color-primary);
          padding-left: 5px;
        }

        /* Links Destaque (Home / A Engenharia) */
        .nav-link-highlight {
           font-family: 'Montserrat', sans-serif;
           font-weight: 600;
           font-size: 1.1rem !important;
           color: var(--color-heading) !important;
           text-decoration: none;
           transition: color 0.3s;
        }
        .nav-link-highlight:hover {
           color: var(--color-primary) !important;
        }


        /* --- BOTÕES DE CONTATO (PILLS) --- */
        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: var(--color-heading);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-decoration: none;
        }

        .contact-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-primary);
        }

        .pill-feedback {
          position: absolute;
          right: -4rem;
          font-size: 0.8rem;
          color: var(--color-primary);
          animation: fadeIn 0.3s ease;
        }


        /* --- BARRA LEGAL (BOTTOM) --- */
        .footer-legal-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .legal-top-row {
           display: flex;
           justify-content: space-between;
           align-items: center;
           flex-wrap: wrap;
           gap: 1rem;
        }

        .legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .legal-links :global(a) {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.3s;
        }
        .legal-links :global(a:hover) {
          color: var(--color-primary);
          text-decoration: underline;
        }
        
        .legal-credits-row {
           text-align: right;
           opacity: 0.6;
           font-size: 0.8rem;
        }


        /* --- RESPONSIVIDADE --- */
        @media (max-width: 768px) {
          .footer-main-layout {
            flex-direction: column;
            gap: 3rem;
          }

          .footer-left-col {
            max-width: 100%;
            align-items: center;
            text-align: center;
          }

          .contact-actions {
            align-items: center;
          }
          
          .footer-right-col {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .nav-title-hidden {
             display: none; /* Remove o espaçador no mobile */
          }

          .legal-top-row {
            flex-direction: column;
            text-align: center;
          }
          
          .legal-links {
             justify-content: center;
             flex-wrap: wrap;
          }
          
          .legal-credits-row {
             text-align: center;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}