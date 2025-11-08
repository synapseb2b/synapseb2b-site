// components/Footer.js (Refatorado por J.A.R.V.I.S. com correção de rota)

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

            {/* Coluna 2: Navegação (ATUALIZADA: Agora com 2 colunas internas) */}
            <div className="footer-column footer-links">
              <h4 className="footer-title">Navegação</h4>
              <ul>
                {/* Coluna 1 (Auto) */}
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cases">Cases</Link></li>
                <li><Link href="/a-synapse">A Synapse</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                
                {/* Coluna 2 (Auto) */}
                <li><Link href="/solucoes/plataformas-digitais">Plataformas Digitais</Link></li>
                <li><Link href="/solucoes/cortex-b2b">Cortex B2B™</Link></li>
                <li><Link href="/solucoes/match-maker">Match-Maker B2B</Link></li>
                <li><Link href="/solucoes/apps">Apps Estratégicos</Link></li>
                {/* CORREÇÃO DE ROTA */}
                <li><Link href="/solucoes/profissionais-de-saude">Para Profissionais de Saúde</Link></li>
              </ul>
            </div>
            
          </div>
          
          {/* Footer Bottom (ATUALIZADO: Estrutura e CSS corrigidos) */}
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
              <div className="footer-legal-links">
                <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                <Link href="/termos-de-uso">Termos de Uso</Link>
              </div>
            </div>

            <p className="footer-credits">Desenvolvido por Synapse B2B | Plataformas Digitais arquitetadas em Engenharia de Receita.</p>
          </div>
        </div>
      </footer>

      {/* CSS Adicional para os links legais movidos e colunas de navegação */}
      <style jsx>{`
        /* --- ATUALIZAÇÃO 1: Coluna de navegação única com 2 colunas internas --- */
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          column-count: 2;
          column-gap: 2rem;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          text-decoration: none;
          color: var(--color-text);
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
           color: var(--color-primary);
        }

        /* --- ATUALIZAÇÃO 2: Correção do layout do footer-bottom --- */
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
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem; /* Remove a necessidade do '|' */
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

        .footer-credits {
           font-size: 0.9rem;
           opacity: 0.8;
           text-align: right;
           flex-shrink: 0; /* Impede que quebre a linha desnecessariamente */
           margin: 0;
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