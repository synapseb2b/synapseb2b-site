'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface ContactSubmission {
  name: string
  email: string
  phone?: string
  company: string
  size: string
  interest: string
  message?: string
}

export async function submitContact(data: ContactSubmission) {
  try {
    const { error } = await supabase.from('contatos').insert({
      nome: data.name,
      email: data.email,
      telefone: data.phone || '',
      empresa: data.company,
      porte: data.size,
      interesse: data.interest,
      mensagem: data.message || '',
      criado_em: new Date().toISOString(),
    })

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Server error:', err)
    return { success: false, error: 'Erro ao salvar.' }
  }
}
