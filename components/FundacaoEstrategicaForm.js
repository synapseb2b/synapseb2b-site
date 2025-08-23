// components/FundacaoEstrategicaForm.js (VERSÃO CORRIGIDA)

import React from 'react';

export default function FundacaoEstrategicaForm() {
  return (
    <div className="blueprint-container">
      <h1 className="blueprint-title">Fundação Estratégica Exclusiva Engenharias</h1>
      <p className="blueprint-subtitle mb-8">
        Olá! Este é o nosso portal de alinhamento. Com base em nossas conversas, reunimos as informações principais abaixo para sua validação e refinamento.
      </p>

      <form action="https://formspree.io/f/movlgbgo" method="POST">
        
        {/* Seção 1: Objetivos e Público-Alvo */}
        <div className="form-section">
          <h2>Seção 1: Objetivos e Público-Alvo</h2>
          
          <div className="mb-8">
            <label className="question-title">1.1. Objetivos de Negócio</label>
            <p className="mb-4">Mapeamos que os objetivos centrais do novo site são gerar autoridade e aumentar a captação de leads qualificados para projetos de maior porte.</p>
            <div className="options-group">
                <label><input type="checkbox" name="objetivos_validacao[]" value="Concordo com os objetivos" /> <span>Concordo com os objetivos mapeados.</span></label>
                <div className="mt-2">
                    <label>
                        <input type="checkbox" name="objetivos_validacao[]" value="Gostaria de refinar" /> 
                        <span>Gostaria de adicionar ou refinar os seguintes pontos:</span>
                    </label>
                    {/* --- CORREÇÃO 2: Campo de texto aumentado --- */}
                    <textarea name="objetivos_refinamento" rows="3" className="input-refinement"></textarea>
                </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="question-title">1.2. Públicos-Alvo (ICPs)</label>
            <p className="mb-4">Identificamos os ICPs principais como **Gestores de Facilities/Manutenção** e **Engenheiros/Arquitetos**. O foco da comunicação será direcionado a eles.</p>
            <div className="options-group">
                <label><input type="checkbox" name="icp_validacao[]" value="Descrição correta" /> <span>A descrição dos ICPs está correta e completa.</span></label>
                <div className="mt-2">
                    <label>
                        <input type="checkbox" name="icp_validacao[]" value="Gostaria de acrescentar" /> 
                        <span>Gostaria de acrescentar detalhes sobre os públicos-alvo:</span>
                    </label>
                    {/* --- CORREÇÃO 2: Campo de texto aumentado --- */}
                    <textarea name="icp_detalhes" rows="3" className="input-refinement"></textarea>
                </div>
            </div>
          </div>
          {/* ... outros campos da Seção 1 ... */}
        </div>

        {/* Seção 2: Identidade Visual e Branding */}
        <div className="form-section">
            <h2>Seção 2: Identidade Visual e Branding</h2>

            <div className="mb-8">
                <label className="question-title">2.3. Tipografia (Fontes)</label>
                <p className="mb-4">Abaixo estão 3 opções de fontes alinhadas com o conceito "sóbrio, técnico e inovador". Qual delas mais se conecta com a Exclusiva Engenharias?</p>
                <div className="options-group">
                    {/* --- CORREÇÃO 4: Fontes pré-visualizadas com estilo inline --- */}
                    <label>
                        <input type="radio" name="escolha_fonte" value="Montserrat" /> 
                        <span style={{fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem'}}><strong>Opção 1: Montserrat</strong> (Moderna e geométrica)</span>
                    </label>
                    <label>
                        <input type="radio" name="escolha_fonte" value="Roboto" /> 
                        <span style={{fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem'}}><strong>Opção 2: Roboto</strong> (Versátil e muito legível)</span>
                    </label>
                    <label>
                        <input type="radio" name="escolha_fonte" value="Source Sans Pro" /> 
                        <span style={{fontFamily: '"Source Sans Pro", sans-serif', fontSize: '1.1rem'}}><strong>Opção 3: Source Sans Pro</strong> (Elegante e profissional)</span>
                    </label>
                </div>
            </div>
             {/* ... outros campos da Seção 2 ... */}
        </div>

        {/* Seção 3: Conteúdo e Provas Sociais */}
        <div className="form-section">
            <h2>Seção 3: Conteúdo e Provas Sociais</h2>
            
            <div className="mb-8">
                <label className="question-title">3.3. Cases de Sucesso</label>
                <p className="mb-4">Para padronizar a apresentação dos seus cases, por favor, use o esqueleto de storytelling abaixo para 2 ou 3 projetos de destaque.</p>
                
                {/* --- CORREÇÃO 6: Instruções fora da caixa de texto --- */}
                <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <p><strong>Esqueleto de Storytelling (Case de Sucesso):</strong></p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li><strong>Título do Case:</strong> Ex: Climatização de Precisão para o Hospital X</li>
                        <li><strong>Cenário Inicial (O Desafio):</strong> Qual era o problema principal do cliente?</li>
                        <li><strong>O Ponto de Virada (A Solução Exclusiva):</strong> Qual foi a abordagem ou tecnologia chave que a Exclusiva trouxe?</li>
                        <li><strong>A Nova Realidade (Resultados):</strong> Que resultados concretos e mensuráveis o cliente obteve?</li>
                    </ul>
                </div>
                <label className="font-semibold">Case de Sucesso 1:</label>
                <textarea name="case_1_completo" rows="6" className="textarea-custom"></textarea>
            </div>
             {/* ... outros campos da Seção 3 ... */}
        </div>

        {/* Seção 4: Processos e Jornadas */}
        <div className="form-section">
            <h2>Seção 4: Processos e Jornadas</h2>

            <div className="mb-8">
                <label className="question-title">4.1. Jornada do Cliente - Casos de Uso</label>
                {/* --- CORREÇÃO 6: Instruções fora da caixa de texto --- */}
                <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <p><strong>Esqueleto de Storytelling (Jornada):</strong></p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li><strong>1. O Diagnóstico:</strong> Como vocês entendem a necessidade inicial do cliente?</li>
                        <li><strong>2. A Engenharia da Solução:</strong> Qual o processo para desenhar a solução customizada?</li>
                        <li><strong>3. A Execução:</strong> Como a obra ou instalação acontece na prática?</li>
                        <li><strong>4. A Entrega e Suporte:</strong> O que acontece quando o projeto termina?</li>
                    </ul>
                </div>
                <label htmlFor="jornada_refeitorio" className="font-semibold">Caso de Uso A - Construção de Refeitório:</label>
                <textarea id="jornada_refeitorio" name="jornada_construcao_refeitorio" rows="6" className="textarea-custom"></textarea>
            </div>

            <div className="mb-8">
                <label className="question-title">4.2. Processo de Orçamento</label>
                {/* --- CORREÇÃO 6: Instruções fora da caixa de texto --- */}
                <div className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                     <p><strong>Esqueleto de Storytelling (Orçamento):</strong></p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li><strong>1. Análise de Escopo:</strong> Quais informações vocês coletam do cliente para iniciar?</li>
                        <li><strong>2. Detalhamento Técnico:</strong> Como vocês quebram o projeto em etapas e custos?</li>
                        <li><strong>3. Apresentação da Proposta:</strong> Como a proposta é apresentada? O que ela inclui além dos valores?</li>
                    </ul>
                </div>
                <label htmlFor="processo_orcamento" className="font-semibold">Processo Completo de Orçamento de Obra:</label>
                <textarea id="processo_orcamento" name="processo_orcamento_obra" rows="5" className="textarea-custom"></textarea>
            </div>
        </div>
        
        {/* ... (Restante do formulário e botão de envio) ... */}
        <div className="mt-12 text-center">
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Enviar Fundação Estratégica
          </button>
        </div>
      </form>
    </div>
  );
}