-- =============================================================
-- SYNAPSE B2B — Tabelas Supabase (v2 - 3 perguntas + faturamento)
-- Execute este SQL no Supabase Dashboard > SQL Editor
-- =============================================================

-- Drop antigo se existir (cuidado em produção!)
-- DROP TABLE IF EXISTS diagnosticos;

-- Tabela: Diagnósticos (3 perguntas v6 + identificação completa)
CREATE TABLE IF NOT EXISTS diagnosticos (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT DEFAULT '',
  empresa TEXT DEFAULT '',
  faturamento TEXT DEFAULT '',
  pergunta_1 TEXT DEFAULT '',
  pergunta_2 TEXT DEFAULT '',
  pergunta_3 TEXT DEFAULT '',
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Se a tabela já existe, adicionar colunas novas (idempotente)
ALTER TABLE diagnosticos
  ADD COLUMN IF NOT EXISTS telefone TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS empresa TEXT DEFAULT '',
  ADD COLUMN IF NOT EXISTS faturamento TEXT DEFAULT '';

-- Tabela: Contatos (formulário da página de contato)
CREATE TABLE IF NOT EXISTS contatos (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT DEFAULT '',
  empresa TEXT NOT NULL,
  porte TEXT DEFAULT '',
  interesse TEXT DEFAULT '',
  mensagem TEXT DEFAULT '',
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE diagnosticos ENABLE ROW LEVEL SECURITY;
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;

-- Políticas: INSERT público (anon)
DROP POLICY IF EXISTS "Permitir insert público em diagnosticos" ON diagnosticos;
CREATE POLICY "Permitir insert público em diagnosticos"
  ON diagnosticos FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir insert público em contatos" ON contatos;
CREATE POLICY "Permitir insert público em contatos"
  ON contatos FOR INSERT TO anon WITH CHECK (true);

-- Políticas: SELECT apenas authenticated
DROP POLICY IF EXISTS "Leitura apenas autenticado - diagnosticos" ON diagnosticos;
CREATE POLICY "Leitura apenas autenticado - diagnosticos"
  ON diagnosticos FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Leitura apenas autenticado - contatos" ON contatos;
CREATE POLICY "Leitura apenas autenticado - contatos"
  ON contatos FOR SELECT TO authenticated USING (true);
