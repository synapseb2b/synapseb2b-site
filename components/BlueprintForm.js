import { useState } from 'react';

export default function BlueprintForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Script para limitar a seleção de checkboxes
  const setupCheckboxLimit = (name, limit) => {
    if (typeof window === 'undefined') return; // Garante que o código só rode no navegador
    const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const checkedCheckboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        if (checkedCheckboxes.length > limit) {
          checkbox.checked = false;
        }
      });
    });
  };
  
  // Ativa os limites quando o componente é montado
  useEffect(() => {
    setupCheckboxLimit('archetype', 2);
    setupCheckboxLimit('never_transmit', 2);
    setupCheckboxLimit('visual_concept', 2);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Lógica para enviar os dados para uma API ou e-mail pode ser adicionada aqui
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto p-10 bg-white rounded-xl shadow-lg my-10 text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold text-gray-800 mt-6">Obrigado!</h2>
        <p className="text-gray-600 mt-3 text-lg">Suas respostas foram recebidas com sucesso. Elas são a base para construirmos uma marca e uma plataforma de autoridade para a Exclusiva Engenharias.</p>
        <p className="text-gray-600 mt-2">Entraremos em contato em breve para os próximos passos.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-xl shadow-lg my-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Blueprint Estratégico – Exclusiva Engenharias</h1>
        <p className="text-gray-600 mt-3">Fundação para a Ativação da Autoridade Digital</p>
      </div>
      <p className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md mb-10 text-sm">
        Este não é um questionário, mas a primeira etapa da co-criação do seu mais importante ativo de geração de negócios. Suas respostas irão codificar décadas de experiência em uma marca e plataforma digital que comunicam autoridade e geram valor 24/7. O processo levará cerca de 15 minutos.
      </p>

      <form onSubmit={handleSubmit}>
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
            {/* O restante do seu formulário HTML vai aqui, sem alterações na estrutura interna */}
            {/* ... cole o restante das seções 1, 2, 3, 4, 5 e 6 aqui ... */}
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

// É necessário importar o useEffect no topo do arquivo
import { useEffect } from 'react';