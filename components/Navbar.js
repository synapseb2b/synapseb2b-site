import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Ícones para o novo menu mobile
import { Home, FileText, Briefcase, Mail, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              width={50}  // AUMENTADO para 50
              height={50} // AUMENTADO para 50
              className="nav-logo"
            >
              <source src="/video/Logo_Animada_SynapseB2B_h.mp4" type="video/mp4" />
            </video>
            {/* CORRIGIDO: Cor do texto para branco (#FFFFFF) */}
            <span style={{ color: '#FFFFFF', marginLeft: '12px', fontSize: '1.4rem', fontWeight: 'bold' }}>
              Synapse B2B
            </span>
          </Link>
          
          <ul className="nav-menu">
            <li><Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/metodologia" className={`nav-link ${router.pathname === '/metodologia' ? 'active' : ''}`}>Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className={`nav-link ${router.pathname === '/casos-de-uso' ? 'active' : ''}`}>Casos de Uso</Link></li>
            <li><Link href="/contato" className="btn btn-nav-cta">Contato</Link></li>
          </ul>

          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`line line1 ${isMenuOpen ? 'open' : ''}`} />
            <div className={`line line2 ${isMenuOpen ? 'open' : ''}`} />
            <div className={`line line3 ${isMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* APRIMORADO: Menu Overlay para Mobile */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link href="/" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center' }}>
             <video autoPlay loop muted playsInline width={40} height={40}><source src="/video/Logo_Animada_SynapseB2B_h.mp4" type="video/mp4" /></video>
          </Link>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
            &times;
          </button>
        </div>

        <ul className="mobile-menu-links">
          <li><Link href="/" onClick={handleLinkClick}><Home size={22} /><span>Home</span></Link></li>
          <li><Link href="/metodologia" onClick={handleLinkClick}><FileText size={22} /><span>Metodologia</span></Link></li>
          <li><Link href="/casos-de-uso" onClick={handleLinkClick}><Briefcase size={22} /><span>Casos de Uso</span></Link></li>
        </ul>
        
        <div className="mobile-menu-footer">
          <Link href="/contato" onClick={handleLinkClick} className="btn btn-mobile-cta">
            <Mail size={20} />
            <span>Agendar Diagnóstico</span>
          </Link>
          <div className="mobile-contact-info">
            <Phone size={14} />
            <span>+55 31 3958-6192</span>
          </div>
        </div>
      </div>
    </>
  );
}