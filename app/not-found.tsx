import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-accent-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          404
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
          Pagina nao encontrada
        </h1>
        <p className="text-white/50 text-base mb-8">
          A pagina que voce procura nao existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-accent-600 transition-all duration-300"
        >
          Voltar ao inicio
        </Link>
      </div>
    </section>
  )
}
