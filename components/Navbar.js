import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Importar o useRouter

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter(); // Hook para obter a rota atual

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Classe 'scrolled' é adicionada dinamicamente */}
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image 
              src="/logo/symbol_logo_synapseb2b_bg_black.png" 
              alt="Synapse B2B Logo" 
              width={40}
              height={40}
              className="nav-logo"
            />
            <span style={{ color: '#009681', marginLeft: '12px', fontSize: '1.4rem', fontWeight: 'bold' }}>
              Synapse B2B
            </span>
          </Link>
          
          <ul className="nav-menu">
            {/* Links agora verificam a rota ativa */}
            <li><Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/metodologia" className={`nav-link ${router.pathname === '/metodologia' ? 'active' : ''}`}>Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className={`nav-link ${router.pathname === '/casos-de-uso' ? 'active' : ''}`}>Casos de Uso</Link></li>
            {/* Link de Contato agora é um botão */}
            <li><Link href="/contato" className="btn btn-nav-cta">Contato</Link></li>
          </ul>

          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
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