import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* Logo como um link para a Home */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              width={40}
              height={40}
              className="nav-logo"
            >
              <source src="/video/Logo_Animada_SynapseB2B_h.mp4" type="video/mp4" />
            </video>
            <span style={{ color: '#009681', marginLeft: '12px', fontSize: '1.4rem', fontWeight: 'bold' }}>
              Synapse B2B
            </span>
          </Link>
          
          {/* Menu de Navegação para Desktop */}
          <ul className="nav-menu">
            <li><Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/metodologia" className={`nav-link ${router.pathname === '/metodologia' ? 'active' : ''}`}>Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className={`nav-link ${router.pathname === '/casos-de-uso' ? 'active' : ''}`}>Casos de Uso</Link></li>
            <li><Link href="/contato" className="btn btn-nav-cta">Contato</Link></li>
          </ul>

          {/* Botão Sanduíche para Mobile */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
          </button>
        </div>
      </nav>

      {/* Menu Overlay para Mobile */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
          &times;
        </button>
        <ul>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/metodologia" onClick={() => setIsMenuOpen(false)}>Metodologia</Link></li>
          <li><Link href="/casos-de-uso" onClick={() => setIsMenuOpen(false)}>Casos de Uso</Link></li>
          <li><Link href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
        </ul>
      </div>
    </>
  );
}