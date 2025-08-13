// Remova o useState e o useEffect se não forem mais usados para outra coisa.
// import { useState, useEffect } from 'react';

export default function BlueprintForm() {
  // A lógica de "isSubmitted" não é mais necessária, pois a Netlify cuidará do redirecionamento.

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-xl shadow-lg my-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Blueprint Estratégico – Exclusiva Engenharias</h1>
        <p className="text-gray-600 mt-3">Fundação para a Ativação da Autoridade Digital</p>
      </div>
      <p className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md mb-10 text-sm">
        Este não é um questionário, mas a primeira etapa da co-criação do seu mais importante ativo de geração de negócios. Suas respostas irão codificar décadas de experiência em uma marca e plataforma digital que comunicam autoridade e geram valor 24/7. O processo levará cerca de 15 minutos.
      </p>

      {/* AJUSTES NO FORMULÁRIO PARA NETLIFY */}
      <form 
        name="strategic-blueprint" 
        method="POST" 
        action="/formulario-enviado" /* Página de sucesso para onde o usuário será levado */
        data-netlify="true"
      >
        {/* Campo oculto obrigatório para o Netlify Forms funcionar com Next.js */}
        <input type="hidden" name="form-name" value="strategic-blueprint" />

        {/* Seção 1: DNA da Marca e Visão de Futuro */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6 question-title">1. DNA da Marca e Visão de Futuro</h2>
            
            <div className="mb-8">
                <p className="text-lg font-semibold mb-4 question-title">1.1. Qual é o principal objetivo de negócio que este projeto deve resolver? <span className="text-sm font-normal text-gray-500">(Escolha a opção primária)</span></p>
                <div className="space-y-3">
                    <label className="flex items-center p-3 rounded-lg cursor-pointer transition-colors"><input type="radio" name="business_goal" value="autoridade" className="h-5 w-5 mr-3 text-blue-600 focus:ring-blue-500" /><span className="text-gray-700"><strong>Autoridade:</strong> Aumentar a percepção de valor para justificar contratos maiores e reduzir o ciclo de negociação.</span></label>
                    <label className="flex items-center p-3 rounded-lg cursor-pointer transition-colors"><input type="radio" name="business_goal" value="tracao" className="h-5 w-5 mr-3 text-blue-600 focus:ring-blue-500" /><span className="text-gray-700"><strong>Tração:</strong> Gerar um fluxo previsível de leads qualificados para os segmentos industriais que já atendemos.</span></label>
                    <label className="flex items-center p-3 rounded-lg cursor-pointer transition-colors"><input type="radio" name="business_goal" value="expansao" className="h-5 w-5 mr-3 text-blue-600 focus:ring-blue-500" /><span className="text-gray-700"><strong>Expansão:</strong> Criar uma plataforma que nos permita explorar novos segmentos ou geografias com credibilidade.</span></label>
                    <label className="flex items-center p-3 rounded-lg cursor-pointer transition-colors"><input type="radio" name="business_goal" value="unificacao" className="h-5 w-5 mr-3 text-blue-600 focus:ring-blue-500" /><span className="text-gray-700"><strong>Unificação:</strong> Consolidar a imagem de um "hub de competências" (Civil, Elétrica, Automação, Arquitetura) sob uma marca única e forte.</span></label>
                </div>
            </div>
            {/* ... cole o restante das seções 1, 2, 3, 4, 5 e 6 do seu formulário aqui ... */}
        </div>
        
        <div className="mt-12">
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg">
                Enviar Respostas
            </button>
        </div>
      </form>
    </div>
  );
}