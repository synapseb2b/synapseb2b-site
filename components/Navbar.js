// components/Navbar.js
// VERSÃO SIMPLIFICADA: 5 páginas, sem dropdowns

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/inteligencia-e-estrategia', label: 'Inteligência e Estratégia' },
    { href: '/ativos-de-performance', label: 'Ativos de Performance' },
    { href: '/cases', label: 'Cases' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <>
      {/* --- NAVBAR DESKTOP --- */}
      <nav className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* LOGO */}
          <Link href="/" className="nav-logo-link">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="nav-logo-video"
            >
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </Link>

          {/* MENU DESKTOP */}
          <div className="nav-menu-desktop">
            {navLinks.map((link) => (
              <div 
                key={link.href} 
                className={`nav-item-desktop ${isActive(link.href) ? 'active' : ''}`}
              >
                <Link href={link.href} className="nav-link-desktop clickable">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="nav-actions">
            <div className="desktop-btn-wrapper">
              <Link href="/contato" className="btn-nav-cta">
                Agendar Diagnóstico
              </Link>
            </div>

            <button 
              className="mobile-hamburger" 
              onClick={() => setIsMobileOpen(!isMobileOpen)} 
              aria-label="Menu"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILE --- */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-content">
          
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`mobile-link-simple ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              <span>{link.label}</span>
            </Link>
          ))}

          {/* CTA MOBILE */}
          <div className="mobile-cta-container">
            <Link 
              href="/contato" 
              className="btn btn-primary" 
              onClick={() => setIsMobileOpen(false)}
            >
              Agendar Diagnóstico
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}