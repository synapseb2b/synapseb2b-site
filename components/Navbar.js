// components/Navbar.js (VERSÃO COM MENU MOBILE)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, FileText, Briefcase, Mail, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  // Efeito para controlar o fundo da navbar ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para bloquear o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function para garantir que o scroll seja reativado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <video autoPlay loop muted playsInline width={60} height={60} className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
            <span className="nav-logo-text">Synapse B2B</span>
          </Link>
          
          {/* --- Menu Desktop --- */}
          <ul className="nav-menu">
            <li><Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/metodologia" className={`nav-link ${router.pathname === '/metodologia' ? 'active' : ''}`}>Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className={`nav-link ${router.pathname === '/casos-de-uso' ? 'active' : ''}`}>Casos de Uso</Link></li>
            <li>
              <Link href="/contato" legacyBehavior>
                <a className="btn btn-nav-cta">Agendar Diagnóstico</a>
              </Link>
            </li>
          </ul>

          {/* --- Botão Hamburger para Mobile --- */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </button>
        </div>
      </nav>

      {/* --- Menu Overlay para Mobile --- */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navegação</span>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X size={30} />
          </button>
        </div>
        <ul className="mobile-menu-links">
          <li><Link href="/" onClick={handleLinkClick}><Home /><span>Home</span></Link></li>
          <li><Link href="/metodologia" onClick={handleLinkClick}><FileText /><span>Metodologia</span></Link></li>
          <li><Link href="/casos-de-uso" onClick={handleLinkClick}><Briefcase /><span>Casos de Uso</span></Link></li>
        </ul>
        <div className="mobile-menu-footer">
          <Link href="/contato" onClick={handleLinkClick} className="btn btn-primary btn-large">
            <Mail /><span>Agendar Diagnóstico</span>
          </Link>
        </div>
      </div>
    </>
  );
}
