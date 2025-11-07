// components/Footer.js (VERSÃO ATUALIZADA COM NOVA ESTRUTURA DE SOLUÇÕES)

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@synapseb2b.com').then(() => {
      setCopySuccess('Copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('Falhou');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Coluna 1: Institucional (Sem alterações) */}
            <div className="footer-column footer-info">
              <h4 className="footer-title">Synapse B2B</h4>
              <p>Transformando Expertise Técnica em Receita Previsível.</p>
              <div className="footer-contact">
                <button onClick={handleCopyEmail} className="footer-contact-link as-button">
                  <Mail size={16} />
                  <span>contato@synapseb2b.com</span>
                  {copySuccess && <span className="copy-feedback">{copySuccess}</span>}
                </button>
                <a 
                  href="https://wa.me/553139586192" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link"
                >
                  <Phone size={16} />
                  <span>+55 31 3958-6192</span>
                </a>
              </div>
            </div>

            {/* Coluna 2: Navegação (ATUALIZADA) */}
            <div className="footer-column footer-links">
              <h4 className="footer-title">Navegação</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                {/* Link "Soluções" aponta para a âncora na homepage */}
                <li><Link href="/#solucoes">Soluções</Link></li> 
                <li><Link href="/cases">Cases</Link></li>
                <li><Link href="/a-synapse">A Synapse</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </div>

            {/* Coluna 3: Soluções (NOVA - Substituindo "Legal") */}
            <div className="footer-column footer-solucoes">
              <h4 className="footer-title">Soluções</h4>
              <ul>
               <li><Link href="/solucoes/plataformas-digitais">Plataformas Digitais</Link></li>
               <li><Link href="/solucoes/cortex-b2b">Cortex B2B™</Link></li>
               <li><Link href="/solucoes/match-maker">Match-Maker B2B</Link></li>
               <li><Link href="/solucoes/apps">Apps Estratégicos</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom (ATUALIZADO com links Legais) */}
          <div className="footer-bottom">
            <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
            
            <div className="footer-legal-links">
               <Link href="/politica-de-privacidade">Política de Privacidade</Link>
               <span>|</span>
               <Link href="/termos-de-uso">Termos de Uso</Link>
            </div>

            <p className="footer-credits">Desenvolvido por Synapse B2B | Plataformas Digitais arquitetadas em Engenharia de Receita.</p>
          </div>
        </div>
      </footer>

      {/* CSS Adicional para os links legais movidos */}
      <style jsx>{`
        .footer-legal-links {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: var(--color-text);
          opacity: 0.8;
        }
        .footer-legal-links a {
          color: var(--color-text);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-legal-links a:hover {
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
}