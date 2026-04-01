export default function CTA() {
  return (
    <section className="py-32 px-6 text-center" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.08] mb-10">
          Pronto para construir.
          <br />
          Disponível agora.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
          >
            Iniciar projeto
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <a
            href="https://github.com/diegoscs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border-dark)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors duration-150"
          >
            Ver GitHub
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
