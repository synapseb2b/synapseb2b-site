import { useEffect } from 'react';

export default function BlueprintForm() {
  // O useEffect para limitar checkboxes pode ser removido por enquanto para simplificar.
  // Se precisar dele de volta, podemos adicioná-lo depois.

  return (
    <div className="blueprint-container">
      <div className="text-center mb-10">
        <h1 className="blueprint-title">Blueprint Estratégico – Exclusiva Engenharias</h1>
        <p className="blueprint-subtitle">Fundação para a Ativação da Autoridade Digital</p>
      </div>
      <p className="blueprint-intro">
        Este não é um questionário, mas a primeira etapa da co-criação do seu mais importante ativo de geração de negócios. Suas respostas irão codificar décadas de experiência em uma marca e plataforma digital que comunicam autoridade e geram valor 24/7. O processo levará cerca de 15 minutos.
      </p>

      <form 
        name="strategic-blueprint" 
        method="POST" 
        action="/formulario-enviado"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="strategic-blueprint" />

        {/* --- Seção 1: DNA da Marca e Visão de Futuro --- */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">1. DNA da Marca e Visão de Futuro</h2>
            <div className="mb-8">
                <p className="question-title">1.1. Qual é o principal objetivo de negócio que este projeto deve resolver? <span>(Escolha a opção primária)</span></p>
                <div className="options-group">
                    <label><input type="radio" name="business_goal" value="autoridade" /><span><strong>Autoridade:</strong> Aumentar a percepção de valor para justificar contratos maiores e reduzir o ciclo de negociação.</span></label>
                    <label><input type="radio" name="business_goal" value="tracao" /><span><strong>Tração:</strong> Gerar um fluxo previsível de leads qualificados para os segmentos industriais que já atendemos.</span></label>
                    <label><input type="radio" name="business_goal" value="expansao" /><span><strong>Expansão:</strong> Criar uma plataforma que nos permita explorar novos segmentos ou geografias com credibilidade.</span></label>
                    <label><input type="radio" name="business_goal" value="unificacao" /><span><strong>Unificação:</strong> Consolidar a imagem de um "hub de competências" (Civil, Elétrica, Automação, Arquitetura) sob uma marca única e forte.</span></label>
                </div>
            </div>
             {/* ... O restante das perguntas do formulário ... */}
        </div>
        
        {/* Adicione as outras seções (2, 3, 4, 5, 6) do formulário aqui, seguindo a mesma estrutura simplificada */}

        <div className="mt-12">
            <button type="submit" className="btn btn-primary w-full">
                Enviar Respostas
            </button>
        </div>
      </form>
    </div>
  );
}