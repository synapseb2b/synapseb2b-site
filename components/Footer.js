// components/Footer.js
// ATUALIZADO: Barra de Créditos Segregada e Estilizada

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Instagram, Phone, Cookie, X, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('synapse-cookie-consent');
    if (!consent) {
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
          
          {/* GRID PRINCIPAL (3 COLUNAS) */}
          <div className="footer-grid">
            
            {/* COLUNA 1: MARCA & CONTATO */}
            <div className="footer-brand">
              <h3>Synapse B2B</h3>
              <p>Engenharia de Receita para Empresas que buscam crescimento previsível e governança comercial.</p>
              
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

            {/* COLUNA 3: ATIVOS DIGITAIS */}
            <div className="footer-col">
              <h4>Ativos Digitais</h4>
              <ul className="footer-links">
                <li><Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link></li>
                <li><Link href="/pilares/ativos-digitais/apps">Apps Estratégicos</Link></li>
              </ul>
            </div>

          </div>

          {/* BARRA INFERIOR (Copyright + Legal) */}
          <div className="footer-bottom">
            <div className="copyright-legal">
              <span>© {currentYear} Synapse B2B. Todos os direitos reservados.</span>
              <span className="separator">|</span>
              <div className="legal-links-row">
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                  <Link href="/termos-de-uso">Termos de Uso</Link>
              </div>
            </div>
          </div>

          {/* BARRA DE CRÉDITOS (Segregada) */}
          <div className="footer-credits-bar">
            <p>
              Desenvolvido por <span className="brand-highlight">Synapse B2B</span> 
              <span className="divider-dot">•</span> 
              Plataformas Forjadas em Engenharia de Receita.
            </p>
          </div>

        </div>
      </footer>

      {/* BANNER DE COOKIES */}
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
    </>
  );
}