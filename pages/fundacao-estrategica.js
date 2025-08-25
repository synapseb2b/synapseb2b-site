// fundacao-estrategica.js
import React from "react";
import FundacaoEstrategicaForm from "./FundacaoEstrategicaForm";

export default function FundacaoEstrategicaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Fundação <span className="text-teal-300">Estratégica</span>
        </h1>
        {/* 🔻 Parágrafo redundante REMOVIDO a pedido */}
        {/* 🔻 Título duplicado "Fundação Estratégica Exclusiva Engenharias" REMOVIDO */}
      </section>

      {/* INTRO + FORM */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-xl border border-[#1f2937] bg-[#0E141B] p-6 md:p-8">
          <p className="text-slate-300 mb-6">
            Olá! Este é o nosso portal de alinhamento para o novo site da{" "}
            <strong>Exclusiva Engenharias</strong>. Com base em nossas conversas
            e no Blueprint Estratégico, reunimos as informações principais
            abaixo. Por favor, revise cada tópico para confirmarmos ou
            ajustarmos os detalhes.
          </p>

          <FundacaoEstrategicaForm />
        </div>
      </section>
    </main>
  );
}
