'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-6 md:py-8 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src="/image/logo-synapse.png"
              alt="Synapse B2B"
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation Capsule (Desktop) */}
          <div className={cn(
            'hidden lg:flex items-center gap-1 rounded-full p-1.5 pl-8 shadow-2xl transition-all duration-500',
            isScrolled
              ? 'bg-white/10 backdrop-blur-xl shadow-black/30'
              : 'bg-white/[0.07] backdrop-blur-md shadow-black/20'
          )}>
            <nav className="flex items-center gap-6 mr-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#diagnostico"
              className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              {"Iniciar Diagn\u00f3stico CORTEX B2B\u2122"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="lg:hidden bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            Menu
          </button>

          {/* Spacer */}
          <div className="hidden lg:block w-[140px]" />
        </div>
      </motion.header>

      {/* Mobile Menu Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="absolute top-8 right-8 bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              &times;
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href="#diagnostico"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(74,144,217,0.4)]"
                >
                  {"Iniciar Diagn\u00f3stico CORTEX B2B\u2122"}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
