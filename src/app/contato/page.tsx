import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato | Diego Candido",
  description:
    "Entre em contato para conversar sobre seu projeto. Disponível via WhatsApp, e-mail e LinkedIn.",
  openGraph: {
    title: "Contato | Diego Candido",
    description: "Entre em contato para conversar sobre seu projeto.",
    images: [
      {
        url: new URL("/api/og?title=Contato&description=Vamos conversar sobre seu projeto&category=Comunicação", "https://dscs.com.br").toString(),
        width: 1200,
        height: 630,
        alt: "Contato - Diego Candido",
      },
    ],
  },
};

export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Contato
          </p>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] leading-[1.1]">
              Disponível para novos projetos.
            </h1>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            <p className="text-sm text-[var(--color-text-secondary)]">
              Aceitando projetos — respondo em até 24h
            </p>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Para orçamentos, use o formulário abaixo — fica mais fácil para os dois. Para dúvidas rápidas, o WhatsApp é o caminho mais direto.
          </p>
        </div>
      </section>

      {/* CTA principal — orçamento */}
      <section className="py-10 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-5 uppercase tracking-widest font-mono">
            Iniciar projeto
          </p>
          <div className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-1">
                Formulário de orçamento
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Descreva seu projeto em detalhes e receba uma proposta personalizada em até 48h.
              </p>
            </div>
            <Link
              href="/orcamento"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
            >
              Solicitar orçamento
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Canais diretos */}
      <section className="py-10 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-5 uppercase tracking-widest font-mono">
            Fale diretamente
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {/* WhatsApp — destaque */}
            <a
              href="https://wa.me/5511964197606"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] flex-shrink-0 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-0.5">WhatsApp</p>
                <p className="text-xs text-[var(--color-text-muted)]">Resposta rápida · canal preferido</p>
              </div>
              <svg className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5 group-hover:text-[var(--color-text-dark)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">(abre em nova aba)</span>
            </a>

            {/* Email */}
            <a
              href="mailto:diego.candido.pro@gmail.com"
              className="group flex items-start gap-4 p-5 rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] flex-shrink-0 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-0.5">Email</p>
                <p className="text-xs text-[var(--color-text-muted)]">Resposta em até 24h</p>
              </div>
              <svg className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5 group-hover:text-[var(--color-text-dark)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Networking */}
      <section className="py-10 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-5 uppercase tracking-widest font-mono">
            Networking
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/diego-candido-8b0850222/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-text-muted)]" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium text-[var(--color-text-dark)]">LinkedIn</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a
              href="https://github.com/diegoscs"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-text-muted)]" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="text-sm font-medium text-[var(--color-text-dark)]">GitHub</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a
              href="https://www.instagram.com/dscs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-text-muted)]" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              <span className="text-sm font-medium text-[var(--color-text-dark)]">Instagram</span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
