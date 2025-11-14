// components/Footer.js (Refatorado para alinhar com o Navbar: Home | Cases | Soluções | A Engenharia)

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
            {/* Coluna 1: Institucional (Mantida) */}
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
                  href="https://wa.me/553139586192" // Atualize se o número estiver incorreto
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link"
                >
                  <Phone size={16} />
                  <span>+55 31 3958-6192</span>
                </a>
              </div>
            </div>

            {/* --- LAYOUT CORRIGIDO: 4 colunas alinhadas ao Navbar --- */}

            {/* Coluna 2: Navegação (Home e Manifesto) */}
            <div className="footer-column footer-links">
              <h4 className="footer-title">Navegação</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/a-engenharia">A Engenharia</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </div>

            {/* Coluna 3: Cases (Prova Social) */}
            <div className="footer-column footer-links">
              <h4 className="footer-title">Cases</h4>
              <ul>
                <li><Link href="/cases/versao-holistica">Versão Holística</Link></li>
                <li><Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link></li>
                <li><Link href="/cases/aorkia">AORKIA</Link></li>
              </ul>
            </div>

            {/* Coluna 4: Soluções (Produtos) */}
            <div className="footer-column footer-links">
              <h4 className="footer-title">Soluções</h4>
              <ul>
                <li><Link href="/solucoes/cortex-b2b">Cortex B2B™</Link></li>
                <li><Link href="/solucoes/plataformas-digitais">Plataformas Digitais</Link></li>
                <li><Link href="/solucoes/apps">Apps Estratégicos</Link></li>
                <li><Link href="/solucoes/match-maker">Match-Maker B2B</Link></li>
                <li><Link href="/solucoes/profissionais-de-saude">Para Profissionais de Saúde</Link></li>
              </ul>
            </div>
            {/* --- FIM DA ATUALIZAÇÃO DE LAYOUT --- */}

          </div>

          {/* Footer Bottom (CSS Corrigido abaixo) */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
              <div className="footer-legal-links">
                {/* Adicione os links corretos se/quando existirem */}
                {/* <Link href="/politica-de-privacidade">Política de Privacidade</Link> */}
                {/* <Link href="/termos-de-uso">Termos de Uso</Link> */}
              </div>
            </div>

            <p className="footer-credits">Desenvolvido por Synapse B2B | Plataformas Digitais arquitetadas em Engenharia de Receita.</p>
          </div>
        </div>
      </footer>

      {/* --- CSS para garantir que os links do Footer não fiquem azuis/roxos --- */}
      <style jsx>{`
        /* --- Regra geral para as colunas de links --- */
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }

        /* --- CORREÇÃO ROBUSTA (Links de Navegação) --- */
        /* Aplica o estilo a todos os links (<a>) dentro de .footer-links */
        .footer-links :global(a) {
          text-decoration: none;
          color: var(--color-text);
          transition: color 0.3s;
        }
        .footer-links :global(a:visited) {
          color: var(--color-text); /* Remove o roxo */
        }
        .footer-links :global(a:hover) {
           color: var(--color-primary);
        }
        /* --- FIM DA CORREÇÃO --- */


        /* --- CSS do Footer Bottom (Baseado no globals.css) --- */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem; /* Espaço entre os blocos */
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }

        .footer-bottom-left {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem; /* Espaço entre copyright e links legais */
        }
        
        .footer-bottom-left p {
           margin: 0;
           font-size: 0.9rem;
           opacity: 0.8;
           color: var(--color-text); /* Garantia de cor */
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--color-text);
          opacity: 0.8;
        }

        /* --- CORREÇÃO ROBUSTA (Links Legais) --- */
        .footer-legal-links :global(a) {
          color: var(--color-text);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-legal-links :global(a:visited) {
          color: var(--color-text); /* Remove o roxo */
        }
        .footer-legal-links :global(a:hover) {
          color: var(--color-primary);
        }
        /* --- FIM DA CORREÇÃO --- */

        .footer-credits {
           font-size: 0.9rem;
           opacity: 0.8;
           text-align: right;
           flex-shrink: 0; /* Impede que quebre a linha desnecessariamente */
           margin: 0;
           color: var(--color-text); /* Garantia de cor */
        }

        @media (max-width: 768px) {
           .footer-bottom {
              flex-direction: column; /* Empilha no mobile */
              justify-content: center;
              text-align: center;
              gap: 1rem;
           }
           .footer-bottom-left {
              flex-direction: column;
              justify-content: center;
              width: 100%;
              gap: 0.5rem;
           }
           .footer-credits {
              text-align: center;
              width: 100%;
           }
        }
      `}</style>
    </>
  );
}