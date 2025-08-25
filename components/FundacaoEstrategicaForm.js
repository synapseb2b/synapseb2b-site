// FundacaoEstrategicaForm.js
import React from "react";

/** Utilitário visual curto para caixas de texto confortáveis */
const TA = ({ name, rows = 6, placeholder }) => (
  <textarea
    name={name}
    rows={rows}
    placeholder={placeholder}
    className="w-full mt-2 rounded-md border border-[#233240] bg-[#0B1117] px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
  />
);

const Line = () => <hr className="my-8 border-[#1f2937]" />;

const SectionTitle = ({ k, title, subtitle }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold">
      {k}. {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
    )}
  </div>
);

export default function FundacaoEstrategicaForm() {
  return (
    <form className="space-y-8">
      {/* =============== SEÇÃO 1 =============== */}
      <SectionTitle
        k="Seção 1"
        title="Objetivos e Público‑Alvo"
        subtitle="Objetivo: Validar a direção estratégica do projeto."
      />

      {/* 1.1 Objetivos de Negócio */}
      <div>
        <h3 className="font-medium mb-1">1.1. Objetivos de Negócio</h3>
        <p className="text-slate-400 text-sm mb-3">
          Mapeamos que os objetivos centrais do novo site são gerar autoridade
          e aumentar a captação de leads qualificados para projetos de maior porte.
        </p>

        <label className="flex items-start gap-3">
          <input type="checkbox" name="objetivos_concordo" className="mt-1" />
          <span>Concordo com os objetivos mapeados.</span>
        </label>

        <label className="block mt-4">
          <span>Gostaria de adicionar ou refinar os seguintes pontos:</span>
          <TA name="objetivos_refino" rows={5} placeholder="Escreva aqui..." />
        </label>
      </div>

      {/* 1.2 ICPs */}
      <div>
        <h3 className="font-medium mb-1">1.2. Públicos‑Alvo (ICPs)</h3>
        <p className="text-slate-400 text-sm mb-3">
          Identificamos dois perfis principais: Gestores de Facilities/Manutenção
          e Engenheiros/Arquitetos responsáveis por novas obras.
        </p>

        <label className="flex items-start gap-3">
          <input type="checkbox" name="icps_ok" className="mt-1" />
          <span>A descrição dos ICPs está correta e completa.</span>
        </label>

        <label className="block mt-4">
          <span>Gostaria de acrescentar detalhes sobre os públicos‑alvo:</span>
          <TA name="icps_detalhes" rows={5} placeholder="Escreva aqui..." />
        </label>
      </div>

      {/* 1.3 Métricas */}
      <div>
        <h3 className="font-medium mb-1">1.3. Métricas de Sucesso</h3>
        <p className="text-slate-400 text-sm mb-3">
          Hoje, a aquisição vem muito por indicação. Vamos diversificar canais e
          medir sucesso de forma clara. Marque as metas prioritárias (6 meses):
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          <label className="flex items-start gap-3">
            <input type="checkbox" name="metas[]" value="orcamentos_qualificados" className="mt-1" />
            <span>Aumentar Pedidos de Orçamento (≥5 qualificados/mês via site)</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" name="metas[]" value="leads_conteudo" className="mt-1" />
            <span>Gerar Leads via Conteúdo (downloads de cases, PDFs)</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" name="metas[]" value="autoridade" className="mt-1" />
            <span>Fortalecer a Marca (ranquear termos técnicos, referência)</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" name="metas[]" value="alcance_geografico" className="mt-1" />
            <span>Aumentar Alcance Geográfico (novas cidades/estados)</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" name="metas[]" value="reduzir_ciclo" className="mt-1" />
            <span>Diminuir Ciclo Comercial (educar para reunião mais objetiva)</span>
          </label>
        </div>

        <label className="block mt-4">
          <span>Outra meta:</span>
          <TA name="metas_outra" rows={4} placeholder="Descreva aqui..." />
        </label>
      </div>

      <Line />

      {/* =============== SEÇÃO 2 =============== */}
      <SectionTitle
        k="Seção 2"
        title="Identidade Visual e Branding"
        subtitle="Definir linha visual e tokens de marca."
      />

      {/* 2.1 Manual da marca */}
      <div>
        <h3 className="font-medium mb-1">2.1. Manual da Marca</h3>
        <p className="text-slate-400 text-sm mb-3">
          Sugestão: evoluir para identidade sóbria, técnica e inovadora (tons de azul e cinza).
        </p>
        <div className="space-y-2">
          <label className="flex items-center gap-3">
            <input type="radio" name="branding_direcao" value="nova_recomendacao" />
            <span>Seguir nova recomendação visual</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="branding_direcao" value="manter_atual" />
            <span>Manter 100% a identidade atual</span>
          </label>
          <label className="block">
            <span className="inline-flex items-center gap-3">
              <input type="radio" name="branding_direcao" value="mesclar" />
              Mesclar abordagens — detalhes:
            </span>
            <TA name="branding_mesclar_detalhes" rows={4} placeholder="Explique como mesclar" />
          </label>
        </div>
      </div>

      {/* 2.2 Logos */}
      <div>
        <h3 className="font-medium mb-1">2.2. Logos</h3>
        <p className="text-slate-400 text-sm">
          Por favor, envie arquivos em alta (AI/EPS/SVG + PNG transparente) na pasta compartilhada.
        </p>
      </div>

      {/* 2.3 Tipografia */}
      <div>
        <h3 className="font-medium mb-1">2.3. Tipografia</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3">
            <input type="radio" name="tipografia" value="montserrat" />
            <span>Montserrat — moderna e geométrica (títulos)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="tipografia" value="roboto" />
            <span>Roboto — versátil e legível (corpos)</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="tipografia" value="source_sans_pro" />
            <span>Source Sans Pro — clara e profissional</span>
          </label>
        </div>
      </div>

      {/* 2.4 Referências */}
      <div>
        <h3 className="font-medium mb-1">2.4. Referências Visuais</h3>
        <TA name="referencias_visuais" rows={5} placeholder="O que chamou atenção? Quer adicionar outras referências?" />
      </div>

      <Line />

      {/* =============== SEÇÃO 3 =============== */}
      <SectionTitle
        k="Seção 3"
        title="Conteúdo e Provas Sociais"
        subtitle="Coletar insumos para autoridade e confiança."
      />

      {/* 3.1 Depoimentos */}
      <div>
        <h3 className="font-medium mb-1">3.1. Depoimentos de Clientes</h3>
        <TA name="depoimentos_1" rows={4} placeholder="Depoimento ideal #1 (cliente/empresa + mensagem)" />
        <TA name="depoimentos_2" rows={4} placeholder="Depoimento ideal #2" />
        <TA name="depoimentos_3" rows={4} placeholder="Depoimento ideal #3 (opcional)" />
      </div>

      {/* 3.2 Clientes atendidos */}
      <div>
        <h3 className="font-medium mb-1">3.2. Clientes Atendidos</h3>
        <TA name="clientes_atendidos" rows={5} placeholder="Liste os principais clientes (um por linha)" />
      </div>

      {/* 3.3 Cases */}
      <div>
        <h3 className="font-medium mb-2">3.3. Cases de Sucesso</h3>
        <p className="text-slate-400 text-sm mb-3">Use o esqueleto: Cenário (Desafio) → Solução → Resultados.</p>
        <TA name="case_1" rows={6} placeholder="Case #1 — Título / Cenário / Solução / Resultados" />
        <TA name="case_2" rows={6} placeholder="Case #2 — Título / Cenário / Solução / Resultados" />
        <TA name="case_3" rows={6} placeholder="Case #3 (opcional) — Título / Cenário / Solução / Resultados" />
      </div>

      {/* 3.4 Certificações */}
      <div>
        <h3 className="font-medium mb-1">3.4. Certificações, Prêmios e Selos</h3>
        <TA name="certificacoes" rows={4} placeholder="Ex.: ISO 9001, NR‑35, prêmios, selos" />
      </div>

      <Line />

      {/* =============== SEÇÃO 4 =============== */}
      <SectionTitle
        k="Seção 4"
        title="Processos e Jornadas"
        subtitle="Detalhar processos-chave para traduzir em conteúdo útil."
      />

      {/* 4.1 Jornada do Cliente */}
      <div>
        <h3 className="font-medium mb-1">4.1. Jornada do Cliente — Casos de Uso</h3>
        <p className="text-slate-400 text-sm mb-3">
          Esqueleto: Diagnóstico → Engenharia da Solução → Execução → Entrega e Suporte.
        </p>
        <TA name="jornada_caso_a" rows={6} placeholder="Caso de Uso A — (ex.: Construção de Refeitório) seguindo o esqueleto" />
        <TA name="jornada_caso_b" rows={6} placeholder="Caso de Uso B — (ex.: Demolição) seguindo o esqueleto" />
      </div>

      {/* 4.2 Processo de Orçamento */}
      <div>
        <h3 className="font-medium mb-1">4.2. Processo de Orçamento</h3>
        <p className="text-slate-400 text-sm mb-3">
          Esqueleto: Análise de Escopo → Detalhamento Técnico → Apresentação da Proposta.
        </p>
        <TA name="processo_orcamento" rows={6} placeholder="Descreva o processo completo" />
      </div>

      <Line />

      {/* =============== SEÇÕES ADICIONADAS (conforme combinado) =============== */}

      {/* 5. Diferenciais e Provas de Valor */}
      <SectionTitle
        k="Seção 5"
        title="Diferenciais e Provas de Valor"
        subtitle="O que realmente diferencia e como provar."
      />
      <TA name="diferenciais" rows={5} placeholder="Liste diferenciais técnicos/comerciais que DEVEM aparecer" />
      <TA name="provas_valor" rows={5} placeholder="Números auditáveis, SLAs, indicadores, garantias" />

      {/* 6. Mensagens‑chave e Objeções */}
      <SectionTitle
        k="Seção 6"
        title="Mensagens‑Chave e Objeções"
        subtitle="Copys que convencem e dúvidas que precisamos neutralizar."
      />
      <TA name="mensagem_unica" rows={4} placeholder="Em 1 frase: por que escolher a Exclusiva?" />
      <TA name="objecoes_comuns" rows={5} placeholder="Principais objeções e como respondem hoje" />

      {/* 7. Requisitos Funcionais e Integrações */}
      <SectionTitle
        k="Seção 7"
        title="Requisitos Funcionais e Integrações"
        subtitle="Como querem receber leads? Que ferramentas são obrigatórias?"
      />
      <div className="space-y-2">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="reqs[]" value="lead_email" className="mt-1" />
          <span>Receber leads por e‑mail</span>
        </label>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="reqs[]" value="lead_planilha" className="mt-1" />
          <span>Receber leads em planilha (Google Sheets)</span>
        </label>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="reqs[]" value="crm" className="mt-1" />
          <span>Integração com CRM (HubSpot/Pipedrive/RD)</span>
        </label>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="reqs[]" value="orcamento_guiado" className="mt-1" />
          <span>Formulário de cotação guiada / simulador</span>
        </label>
      </div>
      <TA name="reqs_outros" rows={4} placeholder="Outros requisitos (uploads, área do cliente etc.)" />

      {/* 8. SEO/GPO e Alcance */}
      <SectionTitle
        k="Seção 8"
        title="SEO/GPO e Alcance"
        subtitle="Termos técnicos, regiões e concorrentes de referência."
      />
      <TA name="seo_termos" rows={4} placeholder="Termos/Entidades para ranquear (técnicos e de negócio)" />
      <TA name="seo_regioes" rows={3} placeholder="Cidades/estados prioritários" />
      <TA name="seo_concorrentes" rows={3} placeholder="Sites de concorrentes a observar" />

      <Line />

      {/* Upload instruções */}
      <div className="rounded-lg border border-[#1f2937] p-4">
        <strong>Upload de Arquivos Complementares</strong>
        <p className="text-slate-400 text-sm mt-1">
          Envie <em>manual da marca</em> e <em>logos em alta</em> (AI/EPS/SVG/PNG) na pasta compartilhada.
        </p>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-teal-500 px-5 py-3 text-sm font-medium text-black hover:bg-teal-400"
        >
          Enviar Fundação Estratégica
        </button>
      </div>
    </form>
  );
}
