import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-6 text-center">
      <p className="text-xs text-[var(--color-text-muted)] mb-4 uppercase tracking-widest font-mono">
        404
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] mb-4 leading-tight">
        Página não encontrada.
      </h1>
      <p className="text-[var(--color-text-secondary)] max-w-sm mb-10">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
      >
        ← Voltar para o início
      </Link>
    </section>
  );
}
