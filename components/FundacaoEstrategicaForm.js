// components/FundacaoEstrategicaForm.js

import { useForm } from '@formspree/react';
import React from 'react';

export default function FundacaoEstrategicaForm() {
  const [state, handleSubmit] = useForm("movlgbgo");

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
      <p className="blueprint-subtitle mb-8">
        Olá! Este é o nosso portal de alinhamento para o novo site da Exclusiva Engenharias. Com base em nossas conversas e no Blueprint Estratégico, reunimos as informações principais abaixo. Por favor, revise cada tópico para confirmarmos ou ajustarmos os detalhes.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Seção 1: Objetivos e Público-Alvo */}
        <div className="form-section">
          <h2 className="text-2xl font-bold mb-6">Seção 1: Objetivos e Público-Alvo</h2>
          <p className="blueprint-intro">Objetivo: Validar a direção estratégica do projeto.</p>
          
          <div className="mb-8">
            <p className="question-title">1.1. Objetivos de Negócio</p>
            <p className="mb-4">Mapeamos que os objetivos centrais do novo site são gerar autoridade no mercado de engenharia e aumentar a captação de leads qualificados para projetos de maior porte.</p>
            <div className="options-group">
                <label><input type="checkbox" name="objetivos_validacao[]" value="Concordo com os objetivos" /> <span>Concordo com os objetivos mapeados.</span></label>
                <div className="mt-2">
                  <label><input type="checkbox" name="objetivos_validacao[]" value="Gostaria de refinar" /> <span>Gostaria de adicionar ou refinar os seguintes pontos:</span></label>
                  <textarea name="objetivos_refinamento" rows="3" className="textarea-custom mt-2"></textarea>
                </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="question-title">1.2. Públicos-Alvo (ICPs)</p>
            <p className="mb-4">Identificamos dois perfis de cliente ideal (ICPs) principais: Gestores de Facilities/Manutenção e Engenheiros/Arquitetos responsáveis por novas obras. O foco da comunicação será direcionado para as dores e necessidades desses dois perfis.</p>
            <div className="options-group">
                <label><input type="checkbox" name="icp_validacao[]" value="Descrição correta" /> <span>A descrição dos ICPs está correta e completa.</span></label>
                <div className="mt-2">
                  <label><input type="checkbox" name="icp_validacao[]" value="Gostaria de acrescentar" /> <span>Gostaria de acrescentar detalhes sobre os públicos-alvo:</span></label>
                  <textarea name="icp_detalhes" rows="3" className="textarea-custom mt-2"></textarea>
                </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="question-title">1.3. Métricas de Sucesso</p>
            <p className="mb-4">Hoje, a aquisição de clientes da Exclusiva vem primariamente por indicação. Um dos nossos maiores objetivos é diversificar esses canais e medir o sucesso de forma clara.</p>
            <p className="question-subtitle">Quais das metas abaixo devemos perseguir com o novo site nos primeiros 6 meses? (Marque as mais importantes)</p>
            <div className="options-group">
                <label><input type="checkbox" name="metricas_sucesso[]" value="Aumentar Pedidos de Orçamento" /> <span>**Aumentar Pedidos de Orçamento:** Receber pelo menos 5 novos pedidos de orçamento qualificados por mês através do site.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Gerar Leads via Conteúdo" /> <span>**Gerar Leads via Conteúdo:** Ter materiais (como cases de sucesso em PDF) baixados, gerando uma lista de contatos interessados.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Fortalecer a Marca (Autoridade)" /> <span>**Fortalecer a Marca (Autoridade):** Ser encontrado no Google para termos específicos da engenharia e ter o site usado como referência técnica.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Aumentar o Alcance Geográfico" /> <span>**Aumentar o Alcance Geográfico:** Receber contatos de clientes em novas cidades ou estados.</span></label>
                <label><input type="checkbox" name="metricas_sucesso[]" value="Diminuir o Ciclo Comercial" /> <span>**Diminuir o Ciclo Comercial:** Usar o site como uma ferramenta que educa o cliente, fazendo com que ele chegue mais preparado para a reunião de vendas.</span></label>
                <div className="mt-2">
                  <label><input type="checkbox" name="metricas_sucesso[]" value="Outra" /> <span>Outra meta:</span></label>
                  <textarea name="metricas_sucesso_outra" rows="3" className="textarea-custom mt-2"></textarea>
                </div>
            </div>
          </div>
        </div>

        {/* Seção 2: Identidade Visual e Branding */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">Seção 2: Identidade Visual e Branding</h2>
            <p className="blueprint-intro">Objetivo: Definir a linha visual do novo site, combinando a identidade existente com uma nova proposta de posicionamento.</p>

            <div className="mb-8">
                <p className="question-title">2.1. Manual da Marca</p>
                <p className="mb-4">Recebemos o manual de marca da "Exclusiva Climatização". Com a transição para "Exclusiva Engenharias", surge a oportunidade de refinar o conceito visual. Nossa sugestão é evoluir para uma identidade mais sóbria, técnica e inovadora, com uma paleta de cores focada em tons de azul, cinza e industriais para reforçar a confiança e credibilidade.</p>
                <div className="options-group">
                    <label><input type="radio" name="decisao_visual" value="Seguir nova recomendação" /> <span>Sim, vamos seguir com a nova recomendação visual (sóbrio, técnico, inovador).</span></label>
                    <label><input type="radio" name="decisao_visual" value="Manter identidade atual" /> <span>Não, prefiro manter 100% a identidade visual do manual de marca atual.</span></label>
                    <div className="mt-2">
                        <label><input type="radio" name="decisao_visual" value="Mesclar abordagens" /> <span>Gostaria de mesclar as duas abordagens. Detalhes:</span></label>
                        <textarea name="decisao_visual_detalhes" rows="3" className="textarea-custom mt-2"></textarea>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <p className="question-title">2.2. Logos</p>
                <p className="mb-4">Para a atualização para "Exclusiva Engenharias", sugerimos uma adequação sutil no logo, mantendo a estrutura principal, mas ajustando as cores para a nova paleta, se aprovada.</p>
                <p className="mb-4"><strong>Ação (Instrução Direta): Por favor, faça o upload dos arquivos do logo atual em alta resolução (vetor .ai, .eps ou .svg, e .png com fundo transparente) na pasta do Google Drive.</strong></p>
            </div>

            <div className="mb-8">
                <p className="question-title">2.3. Tipografia (Fontes)</p>
                <p className="mb-4">A escolha da fonte é crucial para transmitir a mensagem correta. Abaixo estão 3 opções que se alinham com o conceito visual "sóbrio, técnico e inovador".</p>
                <p className="question-subtitle">Qual destas famílias tipográficas você acredita que mais se conecta com a Exclusiva Engenharias?</p>
                <div className="options-group">
                    <label><input type="radio" name="escolha_fonte" value="Montserrat" /> <span style={{fontFamily: 'Montserrat, sans-serif'}}><strong>Opção 1: Montserrat</strong> - Moderna, geométrica, excelente para títulos.</span></label>
                    <label><input type="radio" name="escolha_fonte" value="Roboto" /> <span style={{fontFamily: 'Roboto, sans-serif'}}><strong>Opção 2: Roboto</strong> - Versátil, legível, ótima para textos longos e curtos.</span></label>
                    <label><input type="radio" name="escolha_fonte" value="Source Sans Pro" /> <span style={{fontFamily: '"Source Sans Pro", sans-serif'}}><strong>Opção 3: Source Sans Pro</strong> - Elegante, clara, profissional.</span></label>
                </div>
            </div>

             <div className="mb-8">
                <label htmlFor="references" className="question-title">2.4. Referências Visuais</label>
                <p className="mb-4">Em nossa conversa, mencionamos como referências os sites da Construtora Terraço e Executiva Tecnologia de Conforto.</p>
                <label htmlFor="references" className="question-subtitle">O que mais te chama a atenção nesses sites? E você gostaria de adicionar mais alguma referência que considera inspiradora?</label>
                <textarea id="references" name="referencias_visuais" rows="5" className="textarea-custom"></textarea>
            </div>

             <div className="mb-8">
                <p className="question-title">2.5. Estilo Visual e Fotografia</p>
                <p className="mb-4">A fotografia e os elementos visuais definem a percepção de qualidade do projeto.</p>
                <p className="question-subtitle">Qual estilo de imagem melhor representa os projetos da Exclusiva Engenharias? (Marque as opções desejadas)</p>
                <div className="options-group">
                    <label><input type="checkbox" name="estilo_imagem[]" value="fotos_reais" /> <span>Fotos reais das obras, mostrando a equipe e os processos.</span></label>
                    <label><input type="checkbox" name="estilo_imagem[]" value="tratamento_cinematografico" /> <span>Imagens com tratamento cinematográfico, focando nos detalhes e na grandiosidade da entrega.</span></label>
                    <label><input type="checkbox" name="estilo_imagem[]" value="renders_3d" /> <span>Renders 3D e plantas técnicas para demonstrar a precisão da engenharia.</span></label>
                    <label><input type="checkbox" name="estilo_imagem[]" value="icones_tecnicos" /> <span>Ícones técnicos e infográficos para explicar processos complexos.</span></label>
                    <div className="mt-2">
                        <label><input type="checkbox" name="estilo_imagem[]" value="outro" /> <span>Outro estilo:</span></label>
                        <textarea name="estilo_imagem_outro" rows="3" className="textarea-custom mt-2"></textarea>
                    </div>
                </div>
            </div>
        </div>

        {/* Seção 3: Conteúdo e Provas Sociais */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">Seção 3: Conteúdo e Provas Sociais</h2>
            <p className="blueprint-intro">Objetivo: Coletar os insumos que darão corpo, credibilidade e autoridade ao site.</p>

            <div className="mb-8">
                <p className="question-title">3.1. Depoimentos de Clientes</p>
                <p className="mb-4">Não se preocupe em ter o texto final aprovado pelo seu cliente ainda. Queremos capturar a essência da mensagem. Pense no que você gostaria que seus melhores clientes dissessem sobre o trabalho da Exclusiva.</p>
                <p className="question-subtitle">Instrução: Por favor, crie 2 ou 3 depoimentos ideais.</p>
                <label htmlFor="depoimento_1_cliente" className="font-semibold mt-4">Depoimento 1:</label>
                <input type="text" id="depoimento_1_cliente" name="depoimento_1_cliente" className="input-custom mb-2" placeholder="Nome do Cliente / Empresa"/>
                <textarea name="depoimento_1_texto" rows="5" className="textarea-custom" placeholder="Depoimento Ideal"></textarea>
                <label htmlFor="depoimento_2_cliente" className="font-semibold mt-4">Depoimento 2:</label>
                <input type="text" id="depoimento_2_cliente" name="depoimento_2_cliente" className="input-custom mb-2" placeholder="Nome do Cliente / Empresa"/>
                <textarea name="depoimento_2_texto" rows="5" className="textarea-custom" placeholder="Depoimento Ideal"></textarea>
            </div>

            <div className="mb-8">
                <p className="question-title">3.2. Clientes Atendidos</p>
                <p className="question-subtitle">Instrução: Por favor, liste os nomes dos principais clientes que podemos exibir no site.</p>
                <div className="options-group">
                    <label><input type="checkbox" name="clientes_atendidos[]" value="IVECO e Cimento Nacional" /> <span>IVECO e Cimento Nacional</span></label>
                    <div className="mt-2">
                        <label><input type="checkbox" name="clientes_atendidos[]" value="Outros" /> <span>Outros (Quais?):</span></label>
                        <textarea name="clientes_atendidos_outros" rows="4" className="textarea-custom mt-2" placeholder="Cliente C, Cliente D, Cliente E..."></textarea>
                    </div>
                </div>
            </div>

             <div className="mb-8">
                <p className="question-title">3.3. Cases de Sucesso</p>
                <p className="mb-4">Para padronizar a apresentação dos seus cases, por favor, use o esqueleto de storytelling abaixo para 2 ou 3 projetos de destaque.</p>
                <label className="font-semibold">Case de Sucesso 1:</label>
                <input type="text" name="case_1_titulo" className="input-custom mb-2" placeholder="Título do Case: (Ex: Climatização de Precisão para o Hospital X)"/>
                
                <div className="question-guidance mb-2"><strong>Cenário Inicial (O Desafio):</strong> Qual era a situação ou o problema principal que o cliente enfrentava antes da sua intervenção?</div>
                <textarea name="case_1_desafio" rows="5" className="textarea-custom mb-2"></textarea>
                
                <div className="question-guidance mb-2"><strong>O Ponto de Virada (A Solução Exclusiva):</strong> Qual foi a abordagem ou tecnologia chave que a Exclusiva trouxe para resolver o desafio? Qual foi o diferencial?</div>
                <textarea name="case_1_solucao" rows="6" className="textarea-custom mb-2"></textarea>

                <div className="question-guidance mb-2"><strong>A Nova Realidade (Resultados):</strong> Que resultados concretos e mensuráveis o cliente obteve? (Ex: economia de 20% de energia, obra entregue 15 dias antes do prazo, etc.)</div>
                <textarea name="case_1_resultados" rows="5" className="textarea-custom"></textarea>
            </div>

            <div className="mb-8">
                <label htmlFor="certificacoes" className="question-title">3.4. Certificações, Prêmios e Selos</label>
                <label htmlFor="certificacoes" className="question-subtitle">Instrução: Liste os nomes das certificações (ex: ISO 9001), prêmios ou selos que a empresa possui.</label>
                <textarea id="certificacoes" name="lista_certificacoes" rows="5" className="textarea-custom"></textarea>
            </div>

            <div className="mb-8">
                <label htmlFor="provas_quantitativas" className="question-title">3.5. Provas de Valor Quantitativas</label>
                <p className="mb-4">Números geram confiança e credibilidade instantâneas.</p>
                <label htmlFor="provas_quantitativas" className="question-subtitle">Existem números auditáveis ou métricas de sucesso que podemos usar para provar a eficiência da Exclusiva? (Ex: "96% dos prazos cumpridos", "87 intervenções sem parada de produção", etc.)</label>
                <textarea id="provas_quantitativas" name="provas_quantitativas" rows="5" className="textarea-custom"></textarea>
            </div>
        </div>


        {/* Seção 4: Processos e Jornadas */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">Seção 4: Processos e Jornadas</h2>
            <p className="blueprint-intro">Objetivo: Detalhar os processos chave da Exclusiva para que possamos traduzi-los em conteúdo claro e útil para o cliente final.</p>

            <div className="mb-8">
                <p className="question-title">4.1. Jornada do Cliente - Casos de Uso</p>
                <p className="mb-4">Vamos guiar seu futuro cliente, mostrando como vocês trabalham. Use o esqueleto de storytelling abaixo para descrever a jornada completa, do primeiro contato à entrega final.</p>
                
                <label htmlFor="jornada_refeitorio" className="font-semibold">Caso de Uso A - Construção de Refeitório:</label>
                <div className="question-guidance mb-2">
                    <ol className="list-decimal list-inside">
                        <li><strong>O Diagnóstico:</strong> Como vocês entendem a necessidade inicial do cliente? (Visita técnica, análise de planta, etc.)</li>
                        <li><strong>A Engenharia da Solução:</strong> Qual o processo para desenhar a solução customizada? (Cálculos, escolha de equipamentos, planejamento.)</li>
                        <li><strong>A Execução:</strong> Como a obra ou instalação acontece na prática? (Gerenciamento, equipe, segurança, comunicação com o cliente.)</li>
                        <li><strong>A Entrega e Suporte:</strong> O que acontece quando o projeto termina? (Comissionamento, treinamento, suporte pós-obra.)</li>
                    </ol>
                </div>
                <textarea id="jornada_refeitorio" name="jornada_construcao_refeitorio" rows="7" className="textarea-custom"></textarea>

                <label htmlFor="jornada_demolicao" className="font-semibold mt-4">Caso de Uso B - Demolição:</label>
                 <div className="question-guidance mb-2">
                    <ol className="list-decimal list-inside">
                        <li><strong>O Diagnóstico:</strong> Como vocês entendem a necessidade inicial do cliente?</li>
                        <li><strong>A Engenharia da Solução:</strong> Qual o processo para desenhar a solução?</li>
                        <li><strong>A Execução:</strong> Como a demolição acontece na prática?</li>
                        <li><strong>A Entrega e Suporte:</strong> O que acontece quando o projeto termina?</li>
                    </ol>
                </div>
                <textarea id="jornada_demolicao" name="jornada_demolicao" rows="7" className="textarea-custom"></textarea>
            </div>

            <div className="mb-8">
                <p className="question-title">4.2. Processo de Orçamento</p>
                <p className="mb-4">Um processo de orçamento claro gera confiança. Use o esqueleto abaixo para descrever como a Exclusiva cria uma proposta de valor, não apenas um preço.</p>
                <label htmlFor="processo_orcamento" className="question-subtitle">Processo Completo de Orçamento de Obra:</label>
                <div className="question-guidance mb-2">
                     <ol className="list-decimal list-inside">
                        <li><strong>Análise de Escopo:</strong> Quais informações vocês coletam do cliente para iniciar um orçamento?</li>
                        <li><strong>Detalhamento Técnico:</strong> Como vocês quebram o projeto em etapas e custos? (Planilhas, softwares, etc.)</li>
                        <li><strong>Apresentação da Proposta:</strong> Como a proposta é apresentada ao cliente? O que ela inclui além dos valores? (Cronograma, diferenciais, etc.)</li>
                    </ol>
                </div>
                <textarea id="processo_orcamento" name="processo_orcamento_obra" rows="6" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* Seção 5: Proposta de Valor e Mensagens-Chave */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">Seção 5: Proposta de Valor e Mensagens-Chave</h2>
            <p className="blueprint-intro">Objetivo: Alinhar a narrativa central com copywriting de decisão.</p>
            <div className="mb-8">
                <label htmlFor="frase_definitiva" className="question-title">5.1. A Frase Definitiva</label>
                <label htmlFor="frase_definitiva" className="question-subtitle">Se você tivesse que explicar em uma única frase por que a Exclusiva Engenharias é a escolha inteligente para um grande projeto, qual seria essa frase?</label>
                <textarea id="frase_definitiva" name="frase_definitiva" rows="5" className="textarea-custom"></textarea>
            </div>
            <div className="mb-8">
                <label htmlFor="mapeamento_objecoes" className="question-title">5.2. Mapeamento de Objeções</label>
                <label htmlFor="mapeamento_objecoes" className="question-subtitle">Quais são as 2 ou 3 objeções ou dúvidas mais comuns que os clientes trazem durante a negociação? E como vocês costumam respondê-las para tranquilizar o cliente?</label>
                <textarea id="mapeamento_objecoes" name="mapeamento_objecoes" rows="6" className="textarea-custom"></textarea>
            </div>
            <div className="mb-8">
                <label htmlFor="termos_slogans" className="question-title">5.3. Termos e Slogans</label>
                <label htmlFor="termos_slogans" className="question-subtitle">Existe algum slogan interno, frase de impacto ou termos técnicos específicos que vocês gostariam de reforçar (ou evitar) no site?</label>
                <textarea id="termos_slogans" name="termos_slogans" rows="5" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* Seção 6: Estrutura do Site e Conteúdo */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">Seção 6: Estrutura do Site e Conteúdo</h2>
            <p className="blueprint-intro">Objetivo: Preparar os blocos de conteúdo educativo e definir a arquitetura inicial do site.</p>
            <div className="mb-8">
                <label htmlFor="paginas_servicos" className="question-title">6.1. Páginas de Serviços</label>
                <label htmlFor="paginas_servicos" className="question-subtitle">Quais serviços ou tipos de projeto são importantes o suficiente para terem suas próprias páginas dedicadas já na primeira versão do site?</label>
                <textarea id="paginas_servicos" name="paginas_servicos" rows="5" className="textarea-custom"></textarea>
            </div>
            <div className="mb-8">
                <p className="question-title">6.2. Conteúdo para Geração de Leads (Lead Magnet)</p>
                <p className="question-subtitle">Para capturar o contato de potenciais clientes, que tipo de material rico seria mais valioso?</p>
                <div className="options-group">
                    <label><input type="radio" name="lead_magnet_tipo" value="case_pdf" /> <span>Um Case de Sucesso detalhado em PDF.</span></label>
                    <label><input type="radio" name="lead_magnet_tipo" value="guia_tecnico" /> <span>Um Guia Técnico (ex: "Checklist para Contratação de Obras Industriais").</span></label>
                    <label><input type="radio" name="lead_magnet_tipo" value="infografico_norma" /> <span>Um infográfico sobre uma norma técnica importante.</span></label>
                </div>
                <label htmlFor="lead_magnet_pronto" className="question-subtitle mt-4">Vocês já possuem algum desses materiais pronto ou semi-pronto para ser usado?</label>
                <textarea id="lead_magnet_pronto" name="lead_magnet_pronto" rows="4" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* Seção 7: Requisitos Técnicos e Alcance Digital */}
        <div className="form-section">
            <h2 className="text-2xl font-bold mb-6">Seção 7: Requisitos Técnicos e Alcance Digital</h2>
             <p className="blueprint-intro">Objetivo: Definir integrações, ferramentas e a estratégia inicial de alcance online.</p>
            <div className="mb-8">
                <p className="question-title">7.1. Recebimento de Leads e Integrações</p>
                <p className="question-subtitle">Como vocês preferem receber os contatos (leads) gerados pelo site?</p>
                <div className="options-group">
                    <label><input type="checkbox" name="recebimento_leads[]" value="email" /> <span>Por e-mail, para um ou mais destinatários.</span></label>
                    <label><input type="checkbox" name="recebimento_leads[]" value="planilha_google" /> <span>Em uma Planilha Google, atualizada automaticamente.</span></label>
                    <div className="mt-2">
                        <label><input type="checkbox" name="recebimento_leads[]" value="crm" /> <span>Diretamente em um sistema de CRM. Qual? (Ex: HubSpot, Pipedrive, RD Station)</span></label>
                        <textarea name="recebimento_leads_crm" rows="3" className="textarea-custom mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <label htmlFor="seo_keywords" className="question-title">7.2. SEO: Palavras-Chave e Concorrentes</label>
                <label htmlFor="seo_keywords" className="question-subtitle">Quais termos técnicos ou de mercado vocês acreditam que um cliente ideal digitaria no Google para encontrar uma empresa como a Exclusiva? E quais concorrentes diretos devemos monitorar?</label>
                <textarea id="seo_keywords" name="seo_keywords" rows="6" className="textarea-custom"></textarea>
            </div>
            <div className="mb-8">
                <label htmlFor="seo_geo" className="question-title">7.3. SEO: Alcance Geográfico</label>
                <label htmlFor="seo_geo" className="question-subtitle">Além da sua área de atuação principal, existem outras cidades, estados ou regiões que são estratégicas para a expansão da Exclusiva?</label>
                <textarea id="seo_geo" name="seo_geo" rows="5" className="textarea-custom"></textarea>
            </div>
        </div>

        {/* Seção de Upload */}
         <div className="form-section">
          <h2 className="text-2xl font-bold mb-6">Upload de Arquivos Complementares</h2>
          <p className="blueprint-intro">
            Conforme solicitado na Seção 2, por favor, use o link abaixo para abrir a pasta compartilhada e enviar os arquivos do logo.
          </p>
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
          <button type="submit" disabled={state.submitting} className="btn btn-primary w-full md:w-auto">
            {state.submitting ? 'Enviando...' : 'Enviar Fundação Estratégica'}
          </button>
        </div>
      </form>
    </div>
  );
}