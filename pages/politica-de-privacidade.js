// pages/politica-de-privacidade.js

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PoliticaDePrivacidade() {
  // Hook para animações de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Política de Privacidade | Synapse B2B</title>
        <meta name="description" content="Política de Privacidade da Synapse B2B - Como coletamos, usamos e protegemos suas informações pessoais." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* --- Seção Hero Curta --- */}
      <section className="hero-section short-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center reveal-up">
          <h1 className="hero-headline">Política de Privacidade</h1>
          <p className="hero-subheadline">Última atualização: Outubro de 2025</p>
        </div>
      </section>

      {/* --- Conteúdo da Política --- */}
      <section className="section-solid">
        <div className="legal-content-container reveal-up">
          <div className="legal-section">
            <h2>1. Informações Gerais</h2>
            <p>A Synapse B2B está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
          </div>

          <div className="legal-section">
            <h2>2. Informações que Coletamos</h2>
            <p>Podemos coletar informações de contato (nome, e-mail, empresa) quando você preenche nossos formulários, além de informações de navegação (páginas visitadas, endereço IP) para melhorar sua experiência.</p>
          </div>

          <div className="legal-section">
            <h2>3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para responder às suas solicitações, enviar informações sobre nossos serviços, melhorar nosso site e cumprir obrigações legais.</p>
          </div>

          <div className="legal-section">
            <h2>4. Compartilhamento de Informações</h2>
            <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto com seu consentimento explícito, para cumprir obrigações legais ou com prestadores de serviços que nos auxiliam na operação do site.</p>
          </div>

          <div className="legal-section">
            <h2>5. Seus Direitos</h2>
            <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais, bem como revogar o consentimento para o uso de seus dados. Para exercer seus direitos, entre em contato conosco.</p>
          </div>

          <div className="legal-section">
            <h2>6. Cookies</h2>
            <p>Utilizamos cookies para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador.</p>
          </div>

          <div className="legal-section">
            <h2>7. Contato</h2>
            <p>Para esclarecer dúvidas sobre esta política, entre em contato conosco através do e-mail: <Link href="mailto:contato@synapseb2b.com">contato@synapseb2b.com</Link>.</p>
          </div>

          <div className="legal-section">
            <h2>8. Alterações nesta Política</h2>
            <p>Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.</p>
          </div>
        </div>
      </section>
    </>
  );
}
