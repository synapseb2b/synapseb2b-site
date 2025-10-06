// pages/index.js (VERSÃO FINAL COM NOVA SEÇÃO DE ENGENHARIA E HERO PADRONIZADO)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// Ícones atualizados para a nova seção
import { ArrowRight, Eye, ChevronDown, TrendingDown, Tag, Clock, Filter, Compass, Wrench } from 'lucide-react';
import Hero from '../components/Hero'; // 1. IMPORTAÇÃO DO NOVO COMPONENTE HERO

// --- Componente Acordeão Padrão (Sem alteração) ---
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        <ChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

// 2. AQUI COMEÇA O COMPONENTE DA PÁGINA, QUE VOCÊ DEVE SUBSTITUIR
export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Negócios Complexos</title>
        <meta name="description" content="Nós traduzimos a sua genialidade técnica em uma mensagem clara e construímos a engenharia de receita que transforma essa clareza em crescimento previsível." />
      </Head>

      {/* Bloco 1: Seção Hero (AGORA USANDO O COMPONENTE PADRÃO) */}
      <Hero>
        <h1 className="hero-headline">O mercado não compra o que não entende.</h1>
        <p className="hero-subheadline">Nós traduzimos a sua genialidade técnica em uma mensagem clara e construímos a engenharia de receita que transforma essa clareza em crescimento previsível.</p>
        <div className="hero-ctas">
          <Link href="/contato" className="btn btn-primary btn-large">
            <span>Ativar Engenharia</span>
            <ArrowRight size={20} />
          </Link>
          <Link href="/engenharia" className="btn btn-secondary btn-large">
            <span>Entender a Engenharia</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </Hero>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: Seção de Sintomas */}
      <section id="sintomas" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Sua empresa tem potencial. Nós projetamos a receita.</h2>
          <p className="lead-text">Muitas empresas B2B possuem produtos ou serviços brilhantes, mas não veem isso se traduzir em crescimento previsível. O problema raramente está na sua competência. Está na ausência de uma engenharia que conecte o seu valor à percepção do mercado.</p>
          <div className="symptom-grid">
            <div className="symptom-card">
              <TrendingDown className="card-icon" />
              <h4>Crescimento Estagnado</h4>
              <p>Sua receita não cresce na velocidade que sua tecnologia evolui.</p>
            </div>
            <div className="symptom-card">
              <Tag className="card-icon" />
              <h4>Competição por Preço</h4>
              <p>Você entra em disputas de preço mesmo tendo uma oferta superior.</p>
            </div>
            <div className="symptom-card">
              <Clock className="card-icon" />
              <h4>Ciclos de Venda Longos</h4>
              <p>Clientes demoram a entender o valor e a decisão de compra se arrasta.</p>
            </div>
            <div className="symptom-card">
              <Filter className="card-icon" />
              <h4>Leads Desqualificados</h4>
              <p>Seu time de vendas perde tempo com oportunidades que não avançam.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ... (O restante do seu arquivo index.js continua aqui) ... */}
    </>
  );
}
