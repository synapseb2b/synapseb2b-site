import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-white/[0.06]">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-white/50 text-sm font-medium">
            {"Synapse B2B — Engenharia de Receita™"}
          </p>
          <p className="text-white/30 text-xs mt-1.5">
            &copy; {new Date().getFullYear()} Synapse B2B. Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { label: 'O que entregamos', href: '/entregas' },
            { label: 'CORTEX B2B', href: '/cortex-b2b' },
            { label: 'Cases', href: '/cases' },
            { label: 'Sobre', href: '/sobre' },
            { label: 'Contato', href: '/contato' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
