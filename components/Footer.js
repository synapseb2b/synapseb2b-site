// components/Footer.js (VERSÃO FINAL COM INTERATIVIDADE)

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@synapseb2b.com').then(() => {
      setCopySuccess('Copiado!');
      setTimeout(() => setCopySuccess(''), 2000); // Mensagem some após 2 segundos
    }, () => {
      setCopySuccess('Falhou em copiar');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Coluna 1: Institucional */}
          <div className="footer-column footer-info">
            <h4 className="footer-title">Synapse B2B</h4>
            <p>Transformando Expertise Técnica em Receita Previsível.</p>
            <div className="footer-contact">
              {/* E-mail com função de cópia */}
              <button onClick={handleCopyEmail} className="footer-contact-link as-button">
                <Mail size={16} />
                <span>contato@synapseb2b.com</span>
                {copySuccess && <span className="copy-feedback">{copySuccess}</span>}
              </button>
              {/* Telefone com link para WhatsApp */}
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

          {/* Coluna 2: Navegação */}
          <div className="footer-column footer-links">
            <h4 className="footer-title">Navegação</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/metodologia">Metodologia</Link></li>
              <li><Link href="/casos-de-uso">Casos de Uso</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div className="footer-column footer-legal">
            <h4 className="footer-title">Legal</h4>
            <ul>
             <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
             <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
          <p className="footer-credits">Desenvolvido por Synapse B2B | Plataformas Digitais arquitetadas em Engenharia de Receita.</p>
        </div>
      </div>
    </footer>
  );
}
