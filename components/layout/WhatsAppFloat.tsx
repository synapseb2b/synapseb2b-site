'use client'

import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '@/lib/constants'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={getWhatsAppUrl('Ol\u00e1! Visitei o site da Synapse B2B e gostaria de conversar.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_4px_20px_rgba(74,144,217,0.4)] animate-pulse-wa cursor-pointer"
    >
      <WhatsAppIcon size={26} />
    </motion.a>
  )
}
