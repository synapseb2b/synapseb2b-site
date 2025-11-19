// components/Footer.js
// Versão "Smart Footer" Final: Com Créditos e Copyright Ajustados

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';

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
          
          {/* === LINHA SUPERIOR: MARCA vs NAVEGAÇÃO === */}
          <div className="footer-main-split">
            
            {/* LADO ESQUERDO: Identidade & Contato Direto */}
            <div className="footer-brand-section">
              <div className="brand-identity">
                <h3 className="footer-logo-text">Synapse B2B</h3>
                <p className="brand-tagline">
                  Engenharia de Receita para quem cansou de depender da sorte.
                </p>
              </div>

              <div className="footer-direct-contact">
                <button onClick={handleCopyEmail} className="contact-pill" aria-label="Copiar E-mail">
                  <Mail size={18} />
                  <span>contato@synapseb2b.com</span>
                  {copySuccess && <span className="pill-feedback">{copySuccess}</span>}
                </button>
                
                <a 
                  href="https://wa.me/553139586192" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-pill"
                >
                  <Phone size={18} />
                  <span>+55 31 3958-6192</span>
                  <ArrowUpRight size={14} className="arrow-icon"/>
                </a>
              </div>

              {/* Redes Sociais */}
              <div className="social-mini-links">
                <span className="social-icon"><Linkedin size={20} /></span>
                <span className="social-icon"><Instagram size={20} /></span>
              </div>
            </div>

            {/* LADO DIREITO: Grid de Navegação Inteligente */}
            <div className="footer-nav-grid">
              
              {/* Grupo 1: Plataforma */}
              <div className="nav-group">
                <h5 className="nav-group-title">Plataforma</h5>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/a-engenharia">A Engenharia</Link></li>
                  <li><Link href="/contato">Diagnóstico</Link></li>
                </ul>
              </div>

              {/* Grupo 2: Soluções */}
              <div className="nav-group">
                <h5 className="nav-group-title">Soluções</h5>
                <ul>
                  <li><Link href="/solucoes/cortex-b2b">Cortex B2B™</Link></li>
                  <li><Link href="/solucoes/plataformas-digitais">Plataformas Digitais</Link></li>
                  <li><Link href="/solucoes/match-maker">Match-Maker B2B</Link></li>
                </ul>
              </div>

              {/* Grupo 3: Cases */}
              <div className="nav-group">
                <h5 className="nav-group-title">Resultados</h5>
                <ul>
                  <li><Link href="/cases/versao-holistica">Versão Holística</Link></li>
                  <li><Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link></li>
                  <li><Link href="/cases/aorkia">AORKIA</Link></li>
                </ul>
              </div>

            </div>
          </div>

          {/* === LINHA INFERIOR: LEGAL & CRÉDITOS === */}
          <div className="footer-legal-bar">
            
            {/* Linha 1: Copyright e Links Legais */}
            <div className="legal-top-row">
                <div className="legal-left">
                  <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
                </div>

                <div className="legal-links">
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                  <Link href="/termos-de-uso">Termos de Uso</Link>
                  <Link href="/politica-de-cookies">Cookies</Link>
                </div>
            </div>

            {/* Linha 2: Créditos (Inserido conforme solicitado) */}
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

        /* --- ESTRUTURA PRINCIPAL (SPLIT) --- */
        .footer-main-split {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 4rem;
          margin-bottom: 4rem; /* Reduzido levemente para aproximar do legal */
        }

        /* LADO ESQUERDO: MARCA */
        .footer-brand-section {
          flex: 1;
          min-width: 280px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          color: var(--color-heading);
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .brand-tagline {
          opacity: 0.7;
          line-height: 1.6;
          font-size: 1rem;
        }

        .footer-direct-contact {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          align-items: flex-start;
        }

        /* LADO DIREITO: GRID DE NAVEGAÇÃO */
        .footer-nav-grid {
          flex: 1.5;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .nav-group-title {
          color: var(--color-heading);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          opacity: 0.5;
        }

        .nav-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        /* --- LINKS INTELIGENTES (SEM AZUL) --- */
        .smart-footer :global(a) {
          text-decoration: none;
          color: var(--color-text);
          transition: all 0.2s ease;
        }
        
        .nav-group :global(a:hover) {
          color: var(--color-primary);
          transform: translateX(3px);
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

        .contact-pill .arrow-icon {
          opacity: 0.5;
          transition: transform 0.3s;
        }
        .contact-pill:hover .arrow-icon {
          transform: translate(2px, -2px);
          opacity: 1;
        }

        .pill-feedback {
          position: absolute;
          right: -4rem;
          font-size: 0.8rem;
          color: var(--color-primary);
          animation: fadeIn 0.3s ease;
        }

        .social-mini-links {
          display: flex;
          gap: 1rem;
          opacity: 0.6;
        }
        .social-icon:hover {
          opacity: 1;
          color: var(--color-primary);
          cursor: pointer;
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

        /* Linha Superior (Copyright + Links) */
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
        }
        .legal-links :global(a:hover) {
          color: var(--color-primary);
          text-decoration: underline;
        }
        
        /* Linha Inferior (Créditos) */
        .legal-credits-row {
           text-align: right;
           opacity: 0.6;
           font-size: 0.8rem;
        }


        /* --- RESPONSIVIDADE --- */
        @media (max-width: 768px) {
          .footer-main-split {
            flex-direction: column;
            gap: 3rem;
            margin-bottom: 3rem;
          }

          .footer-brand-section {
            max-width: 100%;
            align-items: center;
            text-align: center;
          }

          .footer-direct-contact {
            align-items: center;
          }
          
          .footer-nav-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }

          .legal-top-row {
            flex-direction: column;
            text-align: center;
            justify-content: center;
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