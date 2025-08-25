// components/FundacaoEstrategicaForm.js

// ANÁLISE E CORREÇÃO:
// 1. Importado o hook 'useForm' para seguir o padrão do BlueprintForm,
//    evitando o recarregamento da página e permitindo uma mensagem de sucesso customizada.
import { useForm } from '@formspree/react';
import React from 'react';

export default function FundacaoEstrategicaForm() {
  // ANÁLISE E CORREÇÃO:
  // 2. O endpoint correto foi utilizado com o hook useForm.
  const [state, handleSubmit] = useForm("movlgbgo");

  // ANÁLISE E CORREÇÃO:
  // 3. Adicionada a mesma lógica de mensagem de sucesso do BlueprintForm para consistência.
  if (state.succeeded) {
    return (
      <div className="blueprint-container text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-3xl font-bold mt-6" style={{color: 'white'}}>Obrigado!</h2>
        <p className="mt-3 text-lg" style={{color: '#a0aec0'}}>Suas respostas foram recebidas com sucesso.</p>
        <p className="mt-2" style={{color: '#a0aec0'}}>Agradecemos a sua colaboração para a fundação do projeto.</p>
      </div>
    );
  }

  return (
    <div className="blueprint-container">
      <h1 className="blueprint-title">Fundação Estratégica Exclusiva Engenharias</h1>
      <p className="blueprint-subtitle mb-8">
        Olá! Este é o nosso portal de alinhamento para o novo site da Exclusiva Engenharias. Com base em nossas conversas e no Blueprint Estratégico, reunimos as informações principais abaixo. Por favor, revise cada tópico para confirmarmos ou ajustarmos os detalhes.
      </p>

      {/* ANÁLISE E CORREÇÃO: 
          4. O <form> foi atualizado para usar onSubmit={handleSubmit} em vez de 'action' e 'method'. */}
      <form onSubmit={handleSubmit}>
        
        {/* Seção 1: Objetivos e Público-Alvo */}
        <div className="form-section">
          <h2>Seção 1: Objetivos e Público-Alvo</h2>
          <p className="blueprint-intro">Objetivo: Validar a direção estratégica do projeto.</p>
          
          <div className="mb-8">
            <label className="question-title">1.1. Objetivos de Negócio</label>
            <p className="mb-4">Mapeamos que os objetivos centrais do novo site são gerar autoridade no mercado de engenharia e aumentar a captação de leads qualificados para projetos de maior porte.</p>
            <div className="options-group">
                <label><input type="checkbox" name="objetivos_validacao[]" value="Concordo com os objetivos" /> <span>Concordo com os objetivos mapeados.</span></label>
                <label><input type="checkbox" name="objetivos_validacao[]" value="Gostaria de refinar" /> <span>Gostaria de adicionar ou refinar os seguintes pontos: <input type="text" name="objetivos_refinamento" className="input-inline" /></span></label>
            </div>
          </div>

          <div className="mb-8">
            <label className="question-title">1.2. Públicos-Alvo (ICPs)</label>
            <p className="mb-4">Identificamos dois perfis de cliente ideal (ICPs) principais: **Gestores de Facilities/Manutenção** e **Engenheiros/Arquitetos** responsáveis por novas obras. O foco da comunicação será direcionado para as dores e necessidades desses dois perfis.</p>
            <div className="options-group">
                <label><input type="checkbox" name="icp_validacao[]" value="Descrição correta" /> <span>A descrição dos ICPs está correta e completa.</span></label>
                <label><input type="checkbox" name="icp_validacao[]" value="Gostaria de acrescentar" /> <span>Gostaria de acrescentar detalhes sobre os públicos-alvo: <input type="text" name="icp_detalhes" className="input-inline" /></span></label>
            </div>
          </div>

          <div className="mb-8">
            <label className="question-title">1.3. Métricas de Sucesso</label>
            <p className="mb-4">Hoje, a aquisição de clientes da Exclusiva vem primariamente por indicação. Um dos nossos maiores objetivos é diversificar esses canais e medir o sucesso de forma clara. Quais das metas abaixo devemos perseguir com o novo site nos primeiros 6 meses? (Marque as mais importantes)</p>
            <div className="options-group">
                <label><input type="checkbox" name="metricas_sucesso[]" value="Aumentar Pedidos de Orçamento" /> <span>**Aumentar Pedidos de Orçamento:** Receber pelo menos 5 novos pedidos de orçamento qualificados por mês através do site.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Gerar Leads via Conteúdo" /> <span>**Gerar Leads via Conteúdo:** Ter materiais (como cases de sucesso em PDF) baixados, gerando uma lista de contatos interessados.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Fortalecer a Marca (Autoridade)" /> <span>**Fortalecer a Marca (Autoridade):** Ser encontrado no Google para termos específicos da engenharia e ter o site usado como referência técnica.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Aumentar o Alcance Geográfico" /> <span>**Aumentar o Alcance Geográfico:** Receber contatos de clientes em novas cidades ou estados.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Diminuir o Ciclo Comercial" /> <span>**Diminuir o Ciclo Comercial:** Usar o site como uma ferramenta que educa o cliente, fazendo com que ele chegue mais preparado para a reunião de vendas.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Outra" /> <span>Outra meta: <input type="text" name="metricas_sucesso_outra" className="input-inline" /></span></label>
            </div>
          </div>
        </div>

        {/* ... (O restante das seções do formulário permanece o mesmo) ... */}

        {/* Seção de Upload */}
         <div className="form-section">
          <h2>Upload de Arquivos Complementares</h2>
          <p className="blueprint-intro">
            Por favor, use o link abaixo para abrir a pasta compartilhada e enviar os arquivos que mencionamos: **Manual da marca** e **Logos em alta resolução**.
          </p>
          
          {/* ANÁLISE E CORREÇÃO:
              5. O iframe foi substituído por um link <a>. É a única forma funcional de
                 direcionar o usuário para fazer o upload. O link abre em uma nova aba. */}
          <div className="text-center mt-6">
            <a 
              href="https://drive.google.com/drive/folders/13R4FTDPspGenbsmaD6BdbMKUNHtB21Vr?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Abrir Pasta para Upload de Arquivos
            </a>
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="mt-12 text-center">
            {/* ANÁLISE E CORREÇÃO: 
                6. O botão agora reflete o estado de 'submitting' para melhor feedback visual. */}
          <button type="submit" disabled={state.submitting} className="btn btn-primary w-full md:w-auto">
            {state.submitting ? 'Enviando...' : 'Enviar Fundação Estratégica'}
          </button>
        </div>
      </form>
    </div>
  );
}