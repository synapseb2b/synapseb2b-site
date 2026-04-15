-- =============================================================
-- SYNAPSE B2B — Tabelas Supabase
-- Execute este SQL no Supabase Dashboard > SQL Editor
-- =============================================================

-- Tabela: Diagnósticos (5 perguntas do CORTEX B2B)
CREATE TABLE IF NOT EXISTS diagnosticos (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  pergunta_1 TEXT DEFAULT '',
  pergunta_2 TEXT DEFAULT '',
  pergunta_3 TEXT DEFAULT '',
  pergunta_4 TEXT DEFAULT '',
  pergunta_5 TEXT DEFAULT '',
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

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

-- Habilitar RLS (Row Level Security)
ALTER TABLE diagnosticos ENABLE ROW LEVEL SECURITY;
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;

-- Política: permitir INSERT público (anon) — visitantes do site podem enviar
CREATE POLICY "Permitir insert público em diagnosticos"
  ON diagnosticos
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Permitir insert público em contatos"
  ON contatos
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: apenas authenticated pode ler (você no dashboard)
CREATE POLICY "Leitura apenas autenticado - diagnosticos"
  ON diagnosticos
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Leitura apenas autenticado - contatos"
  ON contatos
  FOR SELECT
  TO authenticated
  USING (true);
