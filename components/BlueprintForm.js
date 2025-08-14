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

  // Script para limitar a seleção de checkboxes
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

      <form onSubmit={handleSubmit}>
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
            <div className="mb-8">
                <p className="question-title">1.2. Se a Exclusiva Engenharias fosse um arquétipo, qual a definiria melhor? <span>(Escolha até 2)</span></p>
                <div className="options-group">
                    <label><input type="checkbox" name="archetype" value="mestre" /><span><strong>O Mestre Artesão:</strong> Técnico, preciso, obcecado pela entrega impecável e pela qualidade nos detalhes.</span></label>
                    <label><input type="checkbox" name="archetype" value="conselheiro" /><span><strong>O Conselheiro Estratégico:</strong> Um parceiro de longo prazo que vai além da execução, oferecendo visão e mitigando riscos futuros.</span></label>
                    <label><input type="checkbox" name="archetype" value="solucionador" /><span><strong>O Solucionador de Problemas:</strong> Ágil e criativo, capaz de resolver os desafios de engenharia mais complexos que outros não conseguem.</span></label>
                    <label><input type="checkbox" name="archetype" value="padrao_ouro" /><span><strong>O Padrão Ouro:</strong> Confiável, estável e com a robustez que grandes clientes industriais (como Iveco e Cimento Nacional) exigem.</span></label>
                </div>
            </div>
            <div>
                <p className="question-title">1.3. O que a nova marca NUNCA deve transmitir? Qual é a nossa "linha vermelha"? <span>(Escolha até 2)</span></p>
                <div className="options-group">
                    <label><input type="checkbox" name="never_transmit" value="generalista" /><span>Sermos vistos como uma empresa generalista, que "faz de tudo um pouco".</span></label>
                    <label><input type="checkbox" name="never_transmit" value="executor" /><span>Transmitir a imagem de sermos apenas "executores de obra", sem valor estratégico.</span></label>
                    <label><input type="checkbox" name="never_transmit" value="pequeno_porte" /><span>Parecer uma empresa de pequeno porte ou com pouca estrutura para grandes projetos.</span></label>
                    <label><input type="checkbox" name="never_transmit" value="preco" /><span>Usar o preço como principal argumento de venda.</span></label>
                </div>
            </div>
        </div>

        {/* --- Seção 2: Território de Mercado e Diferenciação --- */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">2. Território de Mercado e Diferenciação</h2>
            <div className="mb-8">
                <p className="question-title">2.1. Qual tese de posicionamento ressoa mais com a visão de futuro da empresa? <span>(Escolha 1)</span></p>
                <div className="options-group">
                    <label><input type="radio" name="positioning" value="qualidade" /><span>"Somos a referência inquestionável na <strong>qualidade técnica</strong> e execução de infraestrutura de apoio para a indústria."</span></label>
                    <label><input type="radio" name="positioning" value="integracao" /><span>"Somos os <strong>especialistas em integração</strong>, o único parceiro que une Civil, Elétrica, Automação e Arquitetura de forma coesa."</span></label>
                    <label><input type="radio" name="positioning" value="consultoria" /><span>"Somos a <strong>consultoria de engenharia</strong> que projeta e executa, garantindo que a solução de hoje otimize a operação de amanhã."</span></label>
                </div>
            </div>
            <div>
                <label htmlFor="brand_references" className="question-title">2.2. Pensando em marcas que transmitem a autoridade e confiança que vocês almejam (mesmo fora da engenharia), quais nomes vêm à mente?</label>
                <textarea id="brand_references" name="brand_references" rows="3" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* --- Seção 3: A Proposta de Valor Irrefutável --- */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">3. A Proposta de Valor Irrefutável</h2>
            <div className="mb-8">
                <p className="question-title">3.1. Qual é o benefício final que o cliente compra ao contratar a Exclusiva? <span>(Escolha 1)</span></p>
                <div className="options-group">
                    <label><input type="radio" name="final_benefit" value="paz" /><span><strong>Paz de Espírito:</strong> A garantia de que o projeto será executado no prazo, no orçamento e sem surpresas.</span></label>
                    <label><input type="radio" name="final_benefit" value="risco" /><span><strong>Mitigação de Risco:</strong> A certeza de que a solução de hoje, validada por certificações como a NR35, não criará um problema de segurança, compliance ou operação amanhã.</span></label>
                    <label><input type="radio" name="final_benefit" value="eficiencia" /><span><strong>Eficiência Operacional:</strong> A convicção de que nossa engenharia integrada resultará em uma operação mais fluida e rentável para a planta industrial.</span></label>
                    <label><input type="radio" name="final_benefit" value="capacidade" /><span><strong>Capacidade Comprovada:</strong> A segurança de contratar uma empresa validada por gigantes da indústria.</span></label>
                </div>
            </div>
            <div>
                <label htmlFor="exclusiva_capability" className="question-title">3.2. Complete a frase: "O que nos torna 'Exclusiva' é a nossa capacidade de..."</label>
                <textarea id="exclusiva_capability" name="exclusiva_capability" rows="3" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* --- Seção 4: O Cliente Ideal (ICP) e a Decisão de Compra --- */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">4. O Cliente Ideal (ICP) e a Decisão de Compra</h2>
            <div className="mb-8">
                <p className="question-title">4.1. Qual é o gatilho principal que leva um cliente ideal a buscar por uma solução como a de vocês?</p>
                <div className="options-group">
                    <label><input type="radio" name="client_trigger" value="necessidade" /><span>Uma necessidade imediata (ex: expansão da planta, necessidade de um novo refeitório).</span></label>
                    <label><input type="radio" name="client_trigger" value="insatisfacao" /><span>Insatisfação com fornecedores atuais (ex: falta de qualidade, atrasos, problemas de segurança).</span></label>
                    <label><input type="radio" name="client_trigger" value="conformidade" /><span>Um requisito de conformidade ou certificação que precisa ser atendido.</span></label>
                    <label><input type="radio" name="client_trigger" value="planejamento" /><span>Um planejamento estratégico de longo prazo para otimizar suas instalações.</span></label>
                </div>
            </div>
            <div>
                <p className="question-title">4.2. Por favor, ordene por prioridade (de 1 a 4) os tomadores de decisão que precisamos convencer:</p>
                <div className="options-group ranking-group">
                    <div><input type="number" min="1" max="4" name="rank_operacoes" /><span>Diretores de Operações / Gerentes de Planta/Facilities</span></div>
                    <div><input type="number" min="1" max="4" name="rank_engenheiros" /><span>Engenheiros-Chefes / Gerentes de Manutenção</span></div>
                    <div><input type="number" min="1" max="4" name="rank_suprimentos" /><span>Gestores de Suprimentos / Compradores</span></div>
                    <div><input type="number" min="1" max="4" name="rank_clevel" /><span>C-Level (Diretores Financeiros/Gerais)</span></div>
                </div>
            </div>
        </div>
        
        {/* --- Seção 5: Estética Visual e Tom de Voz --- */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">5. Estética Visual e Tom de Voz</h2>
            <div className="mb-8">
                <p className="question-title">5.1. Qual destes conceitos visuais melhor traduz a marca "Exclusiva Engenharias"? <span>(Escolha até 2)</span></p>
                <div className="options-group">
                    <label><input type="checkbox" name="visual_concept" value="sobrio" /><span><strong>Sóbrio e Confiável:</strong> Linhas retas, cores neutras, design que transmite robustez e estabilidade.</span></label>
                    <label><input type="checkbox" name="visual_concept" value="tecnico" /><span><strong>Técnico e Preciso:</strong> Foco em detalhes de engenharia, plantas, isométricos. Design limpo e minimalista.</span></label>
                    <label><input type="checkbox" name="visual_concept" value="inovador" /><span><strong>Inovador e Moderno:</strong> Elementos visuais que remetem à tecnologia, automação e futuro da indústria.</span></label>
                    <label><input type="checkbox" name="visual_concept" value="humano" /><span><strong>Humano e Colaborativo:</strong> Imagens que mostram a equipe, a parceria com o cliente e o resultado do trabalho para as pessoas.</span></label>
                </div>
            </div>
            <div className="mb-8">
                <p className="question-title">5.2. A paleta de cores deve transmitir principalmente:</p>
                <div className="options-group">
                    <label><input type="radio" name="color_palette" value="confianca" /><span>Confiança e seriedade (ex: tons de azul, cinza escuro).</span></label>
                    <label><input type="radio" name="color_palette" value="sustentabilidade" /><span>Sustentabilidade e segurança (ex: tons de verde, azul).</span></label>
                    <label><input type="radio" name="color_palette" value="inovacao" /><span>Inovação e tecnologia (ex: cinza, preto, com um ponto de cor vibrante).</span></label>
                </div>
            </div>
            <div>
                <p className="question-title">5.3. O tom de voz da comunicação deve ser: <span>(Escolha 1)</span></p>
                <div className="options-group">
                    <label><input type="radio" name="tone_of_voice" value="direto" /><span><strong>Direto e Confiante:</strong> Focado em resultados, claro e sem rodeios. Fala a língua do C-Level.</span></label>
                    <label><input type="radio" name="tone_of_voice" value="tecnico" /><span><strong>Técnico e Didático:</strong> Preciso, detalhado e educativo. Fala a língua do engenheiro-chefe.</span></label>
                    <label><input type="radio" name="tone_of_voice" value="consultivo" /><span><strong>Consultivo e Estratégico:</strong> Focado no "porquê", em parceria de longo prazo. Fala a língua do diretor de operações.</span></label>
                </div>
            </div>
        </div>

        {/* --- Seção 6: O Ativo Digital: Função e KPIs --- */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">6. O Ativo Digital: Função e KPIs</h2>
            <div className="mb-8">
                <p className="question-title">6.1. Qual é a Métrica Norte (North Star Metric) do novo ativo digital? <span>(Escolha 1)</span></p>
                <div className="options-group">
                    <label><input type="radio" name="north_star_metric" value="oportunidades" /><span><strong>Geração de Oportunidades:</strong> Número de contatos qualificados solicitando proposta via site.</span></label>
                    <label><input type="radio" name="north_star_metric" value="autoridade" /><span><strong>Construção de Autoridade:</strong> Tempo de permanência nas páginas de projetos e artigos, e feedback qualitativo dos clientes ("Encontrei vocês e o site me passou a confiança que eu precisava").</span></label>
                    <label><input type="radio" name="north_star_metric" value="vendas" /><span><strong>Habilitação de Vendas:</strong> Uso do site pela equipe comercial como ferramenta de apresentação para fechar negócios.</span></label>
                </div>
            </div>
            <div className="mb-8">
                <label htmlFor="success_scenario" className="question-title">6.2. Cenário de Sucesso: Em 6 meses, qual o resultado que nos fará dizer "Este projeto foi um sucesso absoluto"?</label>
                <textarea id="success_scenario" name="success_scenario" rows="3" className="textarea-custom"></textarea>
            </div>
            <div>
                <label htmlFor="mandates_vetoes" className="question-title">6.3. Mandamentos e Linhas Vermelhas: Existe alguma frase, termo ou imagem que é obrigatório ou, pelo contrário, absolutamente proibido na nova comunicação?</label>
                <textarea id="mandates_vetoes" name="mandates_vetoes" rows="3" className="textarea-custom"></textarea>
            </div>
        </div>
        
        <div className="mt-12">
            <button type="submit" disabled={state.submitting} className="btn btn-primary w-full">
              {state.submitting ? 'Enviando...' : 'Enviar Respostas'}
            </button>
        </div>
      </form>
    </div>
  );
}
