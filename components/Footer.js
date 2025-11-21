// components/Footer.js
// REFATORADO: Links Corretos + Menu Ativos Ajustado + Banner de Cookies Premium

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Instagram, Phone, Cookie, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Estado do Banner de Cookies
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    // Verifica se já aceitou os cookies
    const consent = localStorage.getItem('synapse-cookie-consent');
    if (!consent) {
      // Pequeno delay para animação de entrada suave
      const timer = setTimeout(() => setShowCookies(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('synapse-cookie-consent', 'true');
    setShowCookies(false);
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          
          {/* ESTRUTURA: 3 COLUNAS (Marca Larga + 2 Menus) */}
          <div className="footer-grid">
            
            {/* COLUNA 1: MARCA & CONTATO */}
            <div className="footer-brand">
              <h3>Synapse B2B</h3>
              <p>Engenharia de Receita para Empresas que buscam crescimento previsível e governança comercial.</p>
              
              {/* Contatos */}
              <div className="contact-info">
                <a href="mailto:contato@synapseb2b.com" className="contact-link">
                  <Mail size={18} />
                  <span>contato@synapseb2b.com</span>
                </a>
                <a href="https://wa.me/553139586192" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Phone size={18} />
                  <span>+55 31 3958-6192</span>
                </a>
              </div>

              {/* Ícones Sociais (Links Corrigidos) */}
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/synapse-b2b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/synapseb2b/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* COLUNA 2: INTELIGÊNCIA */}
            <div className="footer-col">
              <h4>Inteligência & Estratégia</h4>
              <ul className="footer-links">
                <li><Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link></li>
                <li><Link href="/pilares/inteligencia-e-estrategia/gtm-completo">GTM Completo</Link></li>
                <li><Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link></li>
                <li><Link href="/pilares/inteligencia-e-estrategia/advisory-board">Advisory Board</Link></li>
              </ul>
            </div>

            {/* COLUNA 3: ATIVOS DIGITAIS (Ajustado) */}
            <div className="footer-col">
              <h4>Ativos Digitais</h4>
              <ul className="footer-links">
                <li><Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link></li>
                <li><Link href="/pilares/ativos-digitais/apps">Apps Estratégicos</Link></li>
              </ul>
            </div>

          </div>

          {/* BARRA INFERIOR */}
          <div className="footer-bottom">
            <div className="copyright-legal">
              <span>© {currentYear} Synapse B2B. Todos os direitos reservados.</span>
              <span className="separator">|</span>
              <div className="legal-links-row">
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                  <Link href="/termos-de-uso">Termos de Uso</Link>
              </div>
            </div>
            
            <div className="developer-credit">
              <p>Desenvolvido por Synapse B2B | Plataformas Forjada em Engenharia de Receita.</p>
            </div>
          </div>

        </div>
      </footer>

      {/* BANNER DE COOKIES FLUTUANTE */}
      <div className={`cookie-banner ${showCookies ? 'visible' : ''}`}>
        <div className="cookie-content">
          <div className="cookie-icon">
            <Cookie size={24} />
          </div>
          <div className="cookie-text">
            <h4>Privacidade & Dados</h4>
            <p>
              Utilizamos cookies para calibrar nossa Engenharia de Receita e entregar uma experiência digital de alta performance. 
              Ao continuar, você concorda com nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button onClick={() => setShowCookies(false)} className="btn-cookie-close" aria-label="Fechar">
            <X size={20} />
          </button>
          <button onClick={handleAcceptCookies} className="btn-cookie-accept">
            Aceitar e Continuar
          </button>
        </div>
      </div>

      {/* ESTILOS LOCAIS (Footer + Cookie Banner) */}
      <style jsx>{`
        /* --- FOOTER STYLES --- */
        .contact-info {
          display: flex; flex-direction: column; gap: 0.8rem; margin: 1.5rem 0; width: 100%;
        }
        .contact-link {
          display: flex; align-items: center; gap: 10px; color: var(--color-text-muted);
          text-decoration: none; font-size: 0.9rem; justify-content: center; transition: color 0.2s;
        }
        .contact-link:hover { color: var(--color-primary); }
        
        .social-icons {
          display: flex; gap: 1.5rem; justify-content: center; margin-top: 0.5rem;
        }
        .social-icons a { color: var(--color-text-muted); transition: color 0.2s; }
        .social-icons a:hover { color: var(--color-primary); }

        .copyright-legal {
            display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem;
        }
        .separator { opacity: 0.3; }
        .legal-links-row { display: flex; gap: 1.5rem; }
        .developer-credit { margin-top: 0.5rem; font-size: 0.75rem; opacity: 0.6; }

        /* --- COOKIE BANNER STYLES (PREMIUM GLASS) --- */
        .cookie-banner {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 100%;
          max-width: 420px;
          background: rgba(10, 15, 13, 0.85); /* Fundo escuro translúcido */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid var(--color-primary);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.8);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          
          /* Animação de Entrada */
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .cookie-banner.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .cookie-content { display: flex; gap: 1rem; align-items: flex-start; }
        
        .cookie-icon {
          color: var(--color-primary);
          background: rgba(0, 150, 132, 0.1);
          padding: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cookie-text h4 {
          color: #fff; font-size: 0.95rem; margin: 0 0 0.3rem 0; font-weight: 600; text-align: left;
        }
        .cookie-text p {
          color: #a0a0a0; font-size: 0.8rem; margin: 0; line-height: 1.5; text-align: left;
        }
        .cookie-text a { color: var(--color-primary); text-decoration: none; border-bottom: 1px solid transparent; }
        .cookie-text a:hover { border-bottom-color: var(--color-primary); }

        .cookie-actions {
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
        }

        .btn-cookie-close {
          background: transparent; border: none; color: #666; cursor: pointer; padding: 5px;
          transition: color 0.2s;
        }
        .btn-cookie-close:hover { color: #fff; }

        .btn-cookie-accept {
          background: var(--color-primary);
          color: #fff;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(0, 150, 132, 0.3);
          flex-grow: 1;
        }
        .btn-cookie-accept:hover {
          background: #00bca5; /* Tom levemente mais claro */
          transform: translateY(-2px);
        }

        /* Responsividade Footer & Banner */
        @media (max-width: 768px) {
            .separator { display: none; }
            .copyright-legal { flex-direction: column; gap: 0.5rem; }
            
            .cookie-banner {
              bottom: 0; right: 0; max-width: 100%; border-radius: 12px 12px 0 0; border-left: none; border-top: 4px solid var(--color-primary);
            }
        }
      `}</style>
    </>
  );
}