// components/FundacaoEstrategicaForm.js

import React from 'react';

export default function FundacaoEstrategicaForm() {
  return (
    <div className="blueprint-container">
      <h1 className="blueprint-title">Fundação Estratégica Exclusiva Engenharias</h1>
      <p className="blueprint-subtitle mb-8">
        Olá! Este é o nosso portal de alinhamento para o novo site da Exclusiva Engenharias. Com base em nossas conversas e no Blueprint Estratégico, reunimos as informações principais abaixo. Por favor, revise cada tópico para confirmarmos ou ajustarmos os detalhes.
      </p>

      <form action="https://formspree.io/f/movlgbgo" method="POST">
        
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

        {/* Seção 2: Identidade Visual e Branding */}
        <div className="form-section">
            <h2>Seção 2: Identidade Visual e Branding</h2>
            <p className="blueprint-intro">Objetivo: Definir a linha visual do novo site, combinando a identidade existente com uma nova proposta de posicionamento.</p>

            <div className="mb-8">
                <label className="question-title">2.1. Manual da Marca</label>
                [cite_start]<p className="mb-4">Recebemos o manual de marca da "Exclusiva Climatização"[cite: 4]. Com a transição para "Exclusiva Engenharias", surge a oportunidade de refinar o conceito visual. [cite_start]Nossa sugestão é evoluir para uma identidade mais sóbria, técnica e inovadora, com uma paleta de cores focada em tons de azul, cinza e industriais para reforçar a confiança e credibilidade[cite: 2].</p>
                <div className="options-group">
                    <label><input type="radio" name="decisao_visual" value="Seguir nova recomendação" /> <span>Sim, vamos seguir com a nova recomendação visual (sóbrio, técnico, inovador).</span></label>
                    <label><input type="radio" name="decisao_visual" value="Manter identidade atual" /> <span>Não, prefiro manter 100% a identidade visual do manual de marca atual.</span></label>
                    <label><input type="radio" name="decisao_visual" value="Mesclar abordagens" /> <span>Gostaria de mesclar as duas abordagens. Detalhes: <input type="text" name="decisao_visual_detalhes" className="input-inline" /></span></label>
                </div>
            </div>

            <div className="mb-8">
                <label className="question-title">2.2. Logos</label>
                <p className="mb-4">Para a atualização para "Exclusiva Engenharias", sugerimos uma adequação sutil no logo, mantendo a estrutura principal, mas ajustando as cores para a nova paleta, se aprovada. Por favor, faça o upload dos arquivos do logo atual em alta resolução na pasta do Google Drive.</p>
            </div>

            <div className="mb-8">
                <label className="question-title">2.3. Tipografia (Fontes)</label>
                <p className="mb-4">A escolha da fonte é crucial para transmitir a mensagem correta. Qual destas famílias tipográficas você acredita que mais se conecta com a Exclusiva Engenharias?</p>
                <div className="options-group">
                    <label>
                        <input type="radio" name="escolha_fonte" value="Montserrat" /> 
                        <span style={{fontFamily: 'Montserrat, sans-serif'}}><strong>Opção 1: Montserrat</strong> - Moderna, geométrica, excelente para títulos.</span>
                    </label>
                    <label>
                        <input type="radio" name="escolha_fonte" value="Roboto" /> 
                        <span style={{fontFamily: 'Roboto, sans-serif'}}><strong>Opção 2: Roboto</strong> - Versátil, legível, ótima para textos longos e curtos.</span>
                    </label>
                    <label>
                        <input type="radio" name="escolha_fonte" value="Source Sans Pro" /> 
                        <span style={{fontFamily: '"Source Sans Pro", sans-serif'}}><strong>Opção 3: Source Sans Pro</strong> - Elegante, clara, profissional.</span>
                    </label>
                </div>
            </div>

             <div className="mb-8">
                <label htmlFor="references" className="question-title">2.4. Referências Visuais</label>
                [cite_start]<p className="mb-4">Em nossa conversa, mencionamos como referências os sites da **Construtora Terraço** e **Executiva Tecnologia de Conforto**[cite: 2]. O que mais te chama a atenção nesses sites? E você gostaria de adicionar mais alguma referência que considera inspiradora?</p>
                <textarea id="references" name="referencias_visuais" rows="4" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* Seção 3: Conteúdo e Provas Sociais */}
        <div className="form-section">
            <h2>Seção 3: Conteúdo e Provas Sociais</h2>
            <p className="blueprint-intro">Objetivo: Coletar os insumos que darão corpo, credibilidade e autoridade ao site.</p>

            <div className="mb-8">
                <label className="question-title">3.1. Depoimentos de Clientes</label>
                <p className="mb-4">Não se preocupe em ter o texto final aprovado pelo seu cliente ainda. Queremos capturar a *essência* da mensagem. Pense no que você gostaria que seus melhores clientes dissessem sobre o trabalho da Exclusiva. Por favor, crie 2 ou 3 depoimentos ideais.</p>
                <label htmlFor="depoimento_cliente_1" className="font-semibold">Depoimento 1:</label>
                <input type="text" id="depoimento_cliente_1" name="depoimento_1_cliente" className="input-custom mb-2" placeholder="Nome do Cliente / Empresa"/>
                <textarea name="depoimento_1_texto" rows="3" className="textarea-custom"></textarea>
                 <label htmlFor="depoimento_cliente_2" className="font-semibold mt-4">Depoimento 2:</label>
                <input type="text" id="depoimento_cliente_2" name="depoimento_2_cliente" className="input-custom mb-2" placeholder="Nome do Cliente / Empresa"/>
                <textarea name="depoimento_2_texto" rows="3" className="textarea-custom"></textarea>
            </div>

            <div className="mb-8">
                <label htmlFor="clientes_atendidos" className="question-title">3.2. Clientes Atendidos</label>
                <p className="mb-4">Por favor, liste os nomes dos principais clientes que podemos exibir no site.</p>
                <textarea id="clientes_atendidos" name="lista_clientes" rows="4" className="textarea-custom" placeholder="Cliente A, Cliente B, Cliente C..."></textarea>
            </div>

             <div className="mb-8">
                <label className="question-title">3.3. Cases de Sucesso</label>
                <p className="mb-4">Para padronizar a apresentação dos seus cases, por favor, use o esqueleto de storytelling abaixo para 2 ou 3 projetos de destaque.</p>
                <label className="font-semibold">Case de Sucesso 1:</label>
                <input type="text" name="case_1_titulo" className="input-custom mb-2" placeholder="Título do Case (Ex: Climatização de Precisão para o Hospital X)"/>
                <textarea name="case_1_desafio" rows="2" className="textarea-custom mb-2" placeholder="Cenário Inicial (O Desafio): Qual era o problema principal do cliente?"></textarea>
                <textarea name="case_1_solucao" rows="3" className="textarea-custom mb-2" placeholder="O Ponto de Virada (A Solução Exclusiva): Qual foi a abordagem ou tecnologia chave que a Exclusiva trouxe?"></textarea>
                <textarea name="case_1_resultados" rows="2" className="textarea-custom" placeholder="A Nova Realidade (Resultados): Que resultados concretos e mensuráveis o cliente obteve?"></textarea>
            </div>

            <div className="mb-8">
                <label htmlFor="certificacoes" className="question-title">3.4. Certificações, Prêmios e Selos</label>
                <p className="mb-4">Liste os nomes das certificações (ex: ISO 9001), prêmios ou selos que a empresa possui.</p>
                <textarea id="certificacoes" name="lista_certificacoes" rows="3" className="textarea-custom"></textarea>
            </div>
        </div>


        {/* Seção 4: Processos e Jornadas */}
        <div className="form-section">
            <h2>Seção 4: Processos e Jornadas</h2>
            <p className="blueprint-intro">Objetivo: Detalhar os processos chave da Exclusiva para que possamos traduzi-los em conteúdo claro e útil para o cliente final.</p>

            <div className="mb-8">
                <label className="question-title">4.1. Jornada do Cliente - Casos de Uso</label>
                <p className="mb-4">Vamos guiar seu futuro cliente, mostrando como vocês trabalham. Use o esqueleto de storytelling abaixo para descrever a jornada completa, do primeiro contato à entrega final.</p>
                
                <label htmlFor="jornada_refeitorio" className="font-semibold">Caso de Uso A - Construção de Refeitório:</label>
                <textarea id="jornada_refeitorio" name="jornada_construcao_refeitorio" rows="6" className="textarea-custom" placeholder="1. O Diagnóstico: Como vocês entendem a necessidade inicial? (Visita técnica, análise de planta...)&#10;2. A Engenharia da Solução: Qual o processo para desenhar a solução customizada? (Cálculos, planejamento...)&#10;3. A Execução: Como a obra acontece na prática? (Gerenciamento, equipe, segurança...)&#10;4. A Entrega e Suporte: O que acontece quando o projeto termina? (Comissionamento, treinamento...)"></textarea>

                <label htmlFor="jornada_demolicao" className="font-semibold mt-4">Caso de Uso B - Demolição:</label>
                <textarea id="jornada_demolicao" name="jornada_demolicao" rows="6" className="textarea-custom" placeholder="1. O Diagnóstico: Como vocês entendem a necessidade inicial?&#10;2. A Engenharia da Solução: Qual o processo para desenhar a solução?&#10;3. A Execução: Como a demolição acontece na prática?&#10;4. A Entrega e Suporte: O que acontece quando o projeto termina?"></textarea>
            </div>

            <div className="mb-8">
                <label htmlFor="processo_orcamento" className="question-title">4.2. Processo de Orçamento</label>
                <p className="mb-4">Um processo de orçamento claro gera confiança. Use o esqueleto abaixo para descrever como a Exclusiva cria uma proposta de valor, não apenas um preço.</p>
                <textarea id="processo_orcamento" name="processo_orcamento_obra" rows="5" className="textarea-custom" placeholder="1. Análise de Escopo: Quais informações vocês coletam do cliente para iniciar?&#10;2. Detalhamento Técnico: Como vocês quebram o projeto em etapas e custos?&#10;3. Apresentação da Proposta: Como a proposta é apresentada? O que ela inclui além dos valores?"></textarea>
            </div>
        </div>


        {/* Seção de Upload */}
         <div className="form-section">
          <h2>Upload de Arquivos Complementares</h2>
          <p className="blueprint-intro">
            Por favor, use a área abaixo para enviar os arquivos que mencionamos: **Manual da marca** e **Logos em alta resolução**.
          </p>
          
          <div style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', overflow: 'hidden' }}>
            <iframe 
              src="https://drive.google.com/drive/folders/13R4FTDPspGenbsmaD6BdbMKUNHtB21Vr?usp=drive_link" 
              width="100%" 
              height="300" 
              frameBorder="0"
              style={{ borderRadius: '16px' }}
            >
            </iframe>
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="mt-12 text-center">
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Enviar Fundação Estratégica
          </button>
        </div>
      </form>
    </div>
  );
}

 