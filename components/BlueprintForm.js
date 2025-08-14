import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function BlueprintForm() {
  // O hook useForm se conecta ao seu formulário no Formspree usando o ID "xpwlnwjd"
  const [state, handleSubmit] = useForm("xpwlnwjd");

  // Se o formulário foi enviado com sucesso, exibe a mensagem de agradecimento.
  if (state.succeeded) {
    return (
      <div className="blueprint-container text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold text-gray-800 mt-6" style={{color: 'white'}}>Obrigado!</h2>
        <p className="text-gray-600 mt-3 text-lg" style={{color: '#a0aec0'}}>Suas respostas foram recebidas com sucesso.</p>
        <p className="text-gray-600 mt-2" style={{color: '#a0aec0'}}>Entraremos em contato em breve para os próximos passos.</p>
      </div>
    );
  }

  // Script para limitar a seleção de checkboxes (continua o mesmo)
  useEffect(() => {
    const setupCheckboxLimit = (name, limit) => {
      if (typeof window === 'undefined') return;
      const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
      
      const handleChange = (event) => {
        const checkedCheckboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        if (checkedCheckboxes.length > limit) {
          event.target.checked = false;
        }
      };
      checkboxes.forEach(checkbox => checkbox.addEventListener('change', handleChange));
      return () => {
        checkboxes.forEach(checkbox => checkbox.removeEventListener('change', handleChange));
      };
    };
    setupCheckboxLimit('archetype', 2);
    setupCheckboxLimit('never_transmit', 2);
    setupCheckboxLimit('visual_concept', 2);
  }, []);

  return (
    <div className="blueprint-container">
      <div className="text-center mb-10">
        <h1 className="blueprint-title">Blueprint Estratégico – Exclusiva Engenharias</h1>
        <p className="blueprint-subtitle">Fundação para a Ativação da Autoridade Digital</p>
      </div>
      <p className="blueprint-intro">
        Este não é um questionário, mas a primeira etapa da co-criação do seu mais importante ativo de geração de negócios. Suas respostas irão codificar décadas de experiência em uma marca e plataforma digital que comunicam autoridade e geram valor 24/7. O processo levará cerca de 15 minutos.
      </p>

      {/* O formulário agora usa o "handleSubmit" do Formspree */}
      <form onSubmit={handleSubmit}>
        {/* Não precisamos mais dos atributos name, method, action ou data-netlify */}
        
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
            {/* ... todo o resto do seu formulário continua aqui, sem alterações ... */}
        </div>

        {/* --- Seção 2, 3, 4, 5, 6 --- */}
        {/* (Cole o restante das seções do seu formulário aqui) */}

        <div className="mt-12">
            <button type="submit" disabled={state.submitting} className="btn btn-primary w-full">
                {state.submitting ? 'Enviando...' : 'Enviar Respostas'}
            </button>
        </div>
      </form>
    </div>
  );
}