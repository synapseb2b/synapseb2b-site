// components/Navbar.js
// VERSÃO COMPLETA: Verticais Reintegrado (Pós-Cases) + CSS Global Centralizado

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// Adicionei 'Layers' para o ícone de Verticais
import { Menu, X, ChevronDown, Brain, MonitorSmartphone, Box, Mail, Award, Layers } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const [mobileDropdowns, setMobileDropdowns] = useState({
    intel: false,
    ativos: false,
    cases: false,
    verticais: false // NOVO
  });

  const router = useRouter();

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    // Resetar todos os estados ao mudar de rota
    setMobileDropdowns({ intel: false, ativos: false, cases: false, verticais: false });
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileOpen]);

  return (
    <>
      {/* --- NAVBAR DESKTOP --- */}
      <nav className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
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

          <div className="nav-menu-desktop">
            
            {/* 1. INTELIGÊNCIA */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/pilares/inteligencia') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Inteligência e Estratégia</span>
                <ChevronDown size={12} />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link>
                <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link>
                <Link href="/solucoes/cortex-b2b">Cortex B2B™</Link>
              </div>
            </div>

            {/* 2. ATIVOS DIGITAIS */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/pilares/ativos') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Ativos Digitais</span>
                <ChevronDown size={12} />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link>
                <Link href="/pilares/ativos-digitais/apps">Apps Estratégicos</Link>
              </div>
            </div>

            {/* 3. CASES */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/cases') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Cases</span>
                <ChevronDown size={12} />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/cases/versao-holistica">Versão Holística</Link>
                <Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link>
                <Link href="/cases/aorkia">Aorkia</Link>
              </div>
            </div>

            {/* 4. VERTICAIS (NOVO - APÓS CASES) */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/pilares/solucoes-verticais') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Verticais</span>
                <ChevronDown size={12} />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/pilares/solucoes-verticais/cortex-b2b">Cortex B2B™</Link>
                <Link href="/pilares/solucoes-verticais/match-maker">Match Maker B2B</Link>
                <Link href="/pilares/solucoes-verticais/hba">Health Business Arch.™</Link>
              </div>
            </div>

            {/* 5. A ENGENHARIA */}
            <div className={`nav-item-desktop ${router.pathname === '/a-engenharia' ? 'active' : ''}`}>
              <Link href="/a-engenharia" className="nav-link-desktop clickable">
                A Engenharia
              </Link>
            </div>
          </div>

          <div className="nav-actions">
            <div className="desktop-btn-wrapper">
              <Link href="/contato" className="btn-nav-cta">
                Ativar Engenharia
              </Link>
            </div>

            <button className="mobile-hamburger" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Menu">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILE OVERLAY --- */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-content">
          
          {/* 1. INTELIGÊNCIA */}
          <button className={`mobile-btn-expand ${mobileDropdowns.intel ? 'active' : ''}`} onClick={() => toggleMobileDropdown('intel')}>
            <div className="flex-row">
              <Brain size={20} className="text-primary" />
              <span>Inteligência e Estratégia</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.intel ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.intel ? 'show' : ''}`}>
            <Link href="/pilares/inteligencia-e-estrategia/cro-service" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>CRO as a Service</Link>
            <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Sprint de Validação</Link>
            <Link href="/solucoes/cortex-b2b" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Cortex B2B™</Link>
          </div>

          {/* 2. ATIVOS */}
          <button className={`mobile-btn-expand ${mobileDropdowns.ativos ? 'active' : ''}`} onClick={() => toggleMobileDropdown('ativos')}>
            <div className="flex-row">
              <MonitorSmartphone size={20} className="text-primary" />
              <span>Ativos Digitais</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.ativos ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.ativos ? 'show' : ''}`}>
            <Link href="/pilares/ativos-digitais/plataformas-digitais" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Plataformas Digitais</Link>
            <Link href="/pilares/ativos-digitais/apps" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Apps Estratégicos</Link>
          </div>

          {/* 3. CASES */}
          <button className={`mobile-btn-expand ${mobileDropdowns.cases ? 'active' : ''}`} onClick={() => toggleMobileDropdown('cases')}>
            <div className="flex-row">
              <Award size={20} className="text-primary" />
              <span>Cases</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.cases ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.cases ? 'show' : ''}`}>
            <Link href="/cases/versao-holistica" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Versão Holística</Link>
            <Link href="/cases/exclusiva-engenharias" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Exclusiva Engenharias</Link>
            <Link href="/cases/aorkia" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Aorkia</Link>
          </div>

          {/* 4. VERTICAIS (NOVO) */}
          <button className={`mobile-btn-expand ${mobileDropdowns.verticais ? 'active' : ''}`} onClick={() => toggleMobileDropdown('verticais')}>
            <div className="flex-row">
              <Layers size={20} className="text-primary" />
              <span>Verticais</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.verticais ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.verticais ? 'show' : ''}`}>
            <Link href="/pilares/solucoes-verticais/cortex-b2b" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Cortex B2B™</Link>
            <Link href="/pilares/solucoes-verticais/match-maker" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Match Maker B2B</Link>
            <Link href="/pilares/solucoes-verticais/hba" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Health Business Arch.™</Link>
          </div>

          {/* 5. A ENGENHARIA */}
          <Link href="/a-engenharia" className="mobile-link-simple" onClick={() => setIsMobileOpen(false)}>
            <div className="flex-row">
              <Box size={20} className="text-primary" />
              <span>A Engenharia</span>
            </div>
          </Link>

          {/* CTA MOBILE */}
          <div className="mobile-cta-container">
            <Link href="/contato" className="btn btn-primary" onClick={() => setIsMobileOpen(false)}>
              Ativar Engenharia
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}