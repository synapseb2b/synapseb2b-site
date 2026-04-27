'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface DiagnosticSubmission {
  name: string
  email: string
  phone: string
  company: string
  faturamento: string
  answers: string[]
}

export async function submitDiagnostic(data: DiagnosticSubmission) {
  try {
    const { error } = await supabase.from('diagnosticos').insert({
      nome: data.name,
      email: data.email,
      telefone: data.phone,
      empresa: data.company,
      faturamento: data.faturamento,
      pergunta_1: data.answers[0] || '',
      pergunta_2: data.answers[1] || '',
      pergunta_3: data.answers[2] || '',
      criado_em: new Date().toISOString(),
    })

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Server error:', err)
    return { success: false, error: 'Erro ao salvar. O WhatsApp ainda funciona.' }
  }
}
