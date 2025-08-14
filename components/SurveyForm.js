import { useForm, ValidationError } from '@formspree/react';

export default function SurveyForm() {
  // Conectado ao seu novo formulário do Formspree
  const [state, handleSubmit] = useForm("xwpqzbgg");

  if (state.succeeded) {
    return (
      <div className="blueprint-container text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold mt-6" style={{color: 'white'}}>Obrigado pela sua contribuição!</h2>
        <p className="mt-3 text-lg" style={{color: '#a0aec0'}}>Sua perspectiva é fundamental para nós.</p>
      </div>
    );
  }

  return (
    <div className="blueprint-container">
      <form onSubmit={handleSubmit}>
        
        {/* Questão 1 */}
        <div className="form-section">
          <h2 className="text-2xl font-bold mb-6">1. Escolha uma copy para avaliar:</h2>
          <div className="options-group">
            <label>
              <input type="radio" name="copy_choice" value="A" required />
              <span>
                <strong>Opção A:</strong> Nós tornamos sua empresa B2B técnica fácil de entender e vender. Realizamos uma análise prática para construir uma mensagem certeira e implementar uma estratégia de vendas que encurta o ciclo comercial e aumenta a conversão. Somos a solução para o founder ou CEO cansado de perder negócios porque clientes em potencial não compreendem seu diferencial, pois acreditamos que o mercado só compra quando entende claramente o valor de uma solução.
              </span>
            </label>
            <label>
              <input type="radio" name="copy_choice" value="B" required />
              <span>
                <strong>Opção B:</strong> Nós fazemos sua empresa técnica virar um negócio fácil de explicar e fechar. Entregamos um diagnóstico sem enrolação, criamos uma mensagem que gruda na mente do cliente e estruturamos um site e pitch que trazem leads quentes. Nosso foco é o fundador B2B que não tem tempo a perder e odeia blá-blá-blá. Fazemos isso porque acreditamos que ninguém deveria perder dinheiro só por não se fazer entender.
              </span>
            </label>
            <label>
              <input type="radio" name="copy_choice" value="C" required />
              <span>
                <strong>Opção C:</strong> Oferecemos consultoria focada no crescimento de negócios B2B técnicos. Por meio de nossa metodologia própria, trazemos clareza de comunicação e aceleração comercial para fundadores e gestores de empresas que buscam vender mais. Nosso trabalho resolve o principal desafio do setor: transformar profundo conhecimento técnico em resultados de negócio mensuráveis e uma melhor percepção de valor no mercado.
              </span>
            </label>
          </div>
        </div>

        {/* Questão 2 */}
        <div className="form-section">
          <label htmlFor="feedback_termo" className="question-title">2. Algum termo/frase que incomodou ou brilhou? (Opcional)</label>
          <textarea 
            id="feedback_termo" 
            name="feedback_termo" 
            rows="3" 
            className="textarea-custom"
          ></textarea>
        </div>

        {/* Questão 3 */}
        <div className="form-section">
          <label htmlFor="feedback_adicional" className="question-title">3. Sabemos que a jornada de empreender é cheia de desafios. Se tiver um momento, adoraríamos ouvir qualquer comentário adicional que você queira compartilhar.</label>
          <textarea 
            id="feedback_adicional" 
            name="feedback_adicional" 
            rows="4" 
            className="textarea-custom"
          ></textarea>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Esta pesquisa é anônima.</p>
        </div>

        <div className="mt-4">
          <button type="submit" disabled={state.submitting} className="btn btn-primary w-full">
            {state.submitting ? 'Enviando...' : 'Enviar Avaliação'}
          </button>
        </div>
      </form>
    </div>
  );
}