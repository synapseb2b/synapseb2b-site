// components/Navbar.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, FileText, Briefcase, Mail, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  // Efeito para controlar o scroll da navbar e o bloqueio de scroll do body
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Bloqueia o scroll do body quando o menu mobile está aberto
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Garante que o scroll seja liberado
    };
  }, [isMenuOpen]); // Re-executa o efeito quando o estado do menu muda

  const handleLinkClick = () => setIsMenuOpen(false);

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
          
          <ul className="nav-menu">
            <li><Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/metodologia" className={`nav-link ${router.pathname === '/metodologia' ? 'active' : ''}`}>Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className={`nav-link ${router.pathname === '/casos-de-uso' ? 'active' : ''}`}>Casos de Uso</Link></li>
            <li><Link href="/contato" className="btn btn-nav-cta">Agendar Diagnóstico</Link></li>
          </ul>

          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <div className="line line1" />
            <div className="line line2" />
          </button>
        </div>
      </nav>

      {/* Menu Overlay para Mobile */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navegação</span>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Fechar Menu">
            <X size={30} />
          </button>
        </div>
        <ul className="mobile-menu-links">
          <li><Link href="/" onClick={handleLinkClick}><Home /><span>Home</span></Link></li>
          <li><Link href="/metodologia" onClick={handleLinkClick}><FileText /><span>Metodologia</span></Link></li>
          <li><Link href="/casos-de-uso" onClick={handleLinkClick}><Briefcase /><span>Casos de Uso</span></Link></li>
        </ul>
        <div className="mobile-menu-footer">
          <Link href="/contato" onClick={handleLinkClick} className="btn btn-mobile-cta">
            <Mail /><span>Agendar Diagnóstico</span>
          </Link>
        </div>
      </div>
    </>
  );
}
