// components/Footer.js
// ESTRUTURA LIMPA: 3 Colunas de Drill Down à Direita

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

// Componente Ícone WhatsApp
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
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
          
          <div className="footer-main-layout">
            
            {/* --- LADO ESQUERDO: Mantido Intacto --- */}
            <div className="footer-left-col">
              <div className="brand-identity">
                <h3 className="footer-logo-text">Synapse B2B</h3>
                <p className="brand-tagline">
                  Engenharia de Receita para Empresas B2B<br/>
                  que Precisam de Crescimento Previsível
                </p>
              </div>

              <div className="contact-actions">
                <button onClick={handleCopyEmail} className="contact-pill" aria-label="Copiar E-mail">
                  <Mail size={18} />
                  <span>contato@synapseb2b.com</span>
                  {copySuccess && <span className="pill-feedback">{copySuccess}</span>}
                </button>
                
                <a href="https://wa.me/553139586192" target="_blank" rel="noopener noreferrer" className="contact-pill">
                  <WhatsAppIcon size={18} />
                  <span>+55 31 3958-6192</span>
                </a>
              </div>

              <div className="social-buttons-row">
                <a href="#" className="social-btn"><Linkedin size={20} /></a>
                <a href="#" className="social-btn"><Instagram size={20} /></a>
              </div>
            </div>

            {/* --- LADO DIREITO: 3 Colunas Limpas --- */}
            <div className="footer-right-col">
              
              {/* Coluna 1: Inteligência */}
              <div className="nav-column">
                <h5 className="nav-title">Inteligência e Estratégia</h5>
                <ul className="nav-list">
                  <li><Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link></li>
                  <li><Link href="/pilares/inteligencia-e-estrategia/gtm-completo">GTM Completo</Link></li>
                  <li><Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link></li>
                  <li><Link href="/pilares/inteligencia-e-estrategia/advisory-board">Advisory Board</Link></li>
                </ul>
              </div>

              {/* Coluna 2: Ativos Digitais */}
              <div className="nav-column">
                <h5 className="nav-title">Ativos Digitais</h5>
                <ul className="nav-list">
                  <li><Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link></li>
                  <li><Link href="/pilares/ativos-digitais/apps">Ferramentas de Aceleração</Link></li>
                </ul>
              </div>

              {/* Coluna 3: Soluções Verticais */}
              <div className="nav-column">
                <h5 className="nav-title">Soluções Verticais</h5>
                <ul className="nav-list">
                  <li><Link href="/pilares/solucoes-verticais/cortex-b2b">Cortex B2B™</Link></li>
                  <li><Link href="/pilares/solucoes-verticais/match-maker">Match Maker B2B</Link></li>
                  <li><Link href="/pilares/solucoes-verticais/hba">Health Business Arch.™</Link></li>
                </ul>
              </div>

            </div>
          </div>

          {/* --- RODAPÉ LEGAL: Mantido Intacto --- */}
          <div className="footer-legal-bar">
            <div className="legal-top-row">
                <div className="legal-left">
                  <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
                </div>
                <div className="legal-links">
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                  <Link href="/termos-de-uso">Termos de Uso</Link>
                </div>
            </div>
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

        .footer-main-layout {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        /* ESQUERDA */
        .footer-left-col {
          flex: 1;
          min-width: 280px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .footer-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.6rem;
          color: var(--color-heading);
          margin-bottom: 0.8rem;
        }
        .brand-tagline { opacity: 0.8; line-height: 1.5; font-size: 1rem; }
        .contact-actions { display: flex; flex-direction: column; gap: 0.8rem; align-items: flex-start; }
        .social-buttons-row { display: flex; gap: 1rem; margin-top: 0.5rem; }
        .social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex; align-items: center; justify-content: center;
          color: var(--color-heading); border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .social-btn:hover { background: var(--color-primary); color: #000; transform: translateY(-3px); }

        /* DIREITA (GRID LIMPO) */
        .footer-right-col {
          flex: 1.5;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Colunas responsivas */
          gap: 3rem;
        }

        .nav-column { display: flex; flex-direction: column; }
        .nav-title {
          color: var(--color-heading);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          opacity: 0.6;
          border-bottom: 1px solid rgba(255,255,255,0.1); /* Detalhe visual sutil */
          padding-bottom: 0.5rem;
          display: inline-block;
        }

        .nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; }
        .nav-list :global(a) { text-decoration: none; color: var(--color-text); transition: all 0.2s; font-size: 0.95rem; }
        .nav-list :global(a:hover) { color: var(--color-primary); padding-left: 5px; }

        /* PILLS Contato */
        .contact-pill {
          display: inline-flex; align-items: center; gap: 0.75rem;
          padding: 0.6rem 1.2rem; background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 50px;
          color: var(--color-heading); text-decoration: none;
          transition: all 0.3s ease; position: relative;
        }
        .contact-pill:hover { background: rgba(255, 255, 255, 0.08); border-color: var(--color-primary); }
        .pill-feedback { position: absolute; right: -4rem; font-size: 0.8rem; color: var(--color-primary); }

        /* LEGAL */
        .footer-legal-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem; display: flex; flex-direction: column;
          gap: 1rem; font-size: 0.85rem; color: rgba(255, 255, 255, 0.4);
        }
        .legal-top-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .legal-links { display: flex; gap: 1.5rem; }
        .legal-links :global(a) { color: rgba(255, 255, 255, 0.4); text-decoration: none; }
        .legal-links :global(a:hover) { color: var(--color-primary); text-decoration: underline; }
        .legal-credits-row { text-align: right; opacity: 0.6; font-size: 0.8rem; }

        @media (max-width: 900px) {
          .footer-main-layout { flex-direction: column; gap: 3rem; }
          .footer-left-col { align-items: center; text-align: center; max-width: 100%; }
          .footer-right-col { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
          .nav-title { border-bottom: none; } /* Remove borda no mobile para limpar */
          .legal-top-row { flex-direction: column; text-align: center; }
          .legal-links { justify-content: center; flex-wrap: wrap; }
          .legal-credits-row { text-align: center; }
        }
      `}</style>
    </>
  );
}