// pages/contato.js (VERSÃO REVISADA E COM PADDING CORRIGIDO)

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ScanLine, GitPullRequest, ShieldCheck } from 'lucide-react';

export default function ContatoPage() {
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
        <title>Contato | Diagnóstico Estratégico - Synapse B2B</title>
        <meta name="description" content="Comece com um diagnóstico estratégico rápido, claro e focado em revelar onde estão as alavancas de crescimento que o mercado ainda não percebe." />
      </Head>

      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        {/* APLICAÇÃO DA CLASSE DE PADDING AQUI */}
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            <h1 className="hero-headline">O próximo passo para tornar sua solução impossível de ignorar.</h1>
            <p className="hero-subheadline">
              Comece com um diagnóstico estratégico rápido, claro e focado em revelar onde estão as alavancas de crescimento que o mercado ainda não percebe.
            </p>
          </div>
        </div>
      </section>

      <section id="conversa" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Em 21 minutos, clareza sobre o que mais importa agora.</h2>
          <div className="card-grid-three">
            <div className="solution-card">
              <ScanLine className="card-icon" />
              <h3 className="solution-title">Raio-X estratégico imediato</h3>
              <p>Análise objetiva dos principais gargalos e oportunidades no seu Go-to-Market.</p>
            </div>
            <div className="solution-card">
              <GitPullRequest className="card-icon" />
              <h3 className="solution-title">2 alavancas prioritárias</h3>
              <p>Pontos que podem gerar impacto direto e mensurável em curto prazo.</p>
            </div>
            <div className="solution-card">
              <ShieldCheck className="card-icon" />
              <h3 className="solution-title">Sem roteiro de venda</h3>
              <p>100% voltado a entregar valor, independente de seguir ou não com a Synapse B2B.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="porque-diagnostico" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
            <div className="highlight-box">
                <p className="lead-text" style={{ marginBottom: 0 }}>
                  A maioria das empresas técnicas investe tempo e recursos tentando corrigir sintomas, não causas. Um diagnóstico estratégico bem conduzido é o atalho para investir energia no que realmente transforma seu resultado — e começar a ser percebido de forma diferente pelo mercado.
                </p>
            </div>
        </div>
      </section>
      
      <section id="agenda" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Reserve seu horário agora</h2>
          <p className="lead-text">
            As vagas para diagnóstico são limitadas semanalmente para garantir atenção total a cada negócio. Escolha um horário disponível no calendário abaixo.
          </p>
          <div className="calendar-container">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XscLHMxtGRcre8_fN-LLjWYyDxLgcm-BUKqXpbdx5eEun7o5mMmrpqo8wj6kvgTSeFpSw-Md-?gv=true"
              style={{ border: 'none', borderRadius: '8px' }}
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
