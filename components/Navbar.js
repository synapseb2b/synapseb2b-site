import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
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
          
          {/* Menu Desktop */}
          <ul className="nav-menu">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/metodologia" className="nav-link">Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className="nav-link">Casos de Uso</Link></li>
            <li><Link href="/contato" className="nav-link">Contato</Link></li>
          </ul>

          {/* Botão Sanduíche para Mobile */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
          </button>
        </div>
      </nav>

      {/* Overlay do Menu Mobile */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
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
      )}
    </>
  );
}