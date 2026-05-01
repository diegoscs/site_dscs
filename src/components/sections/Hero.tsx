"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-56px)] text-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(91,106,240,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-dark) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main headline */}
      <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[var(--color-text-dark)]">
        O sistema de desenvolvimento
        <br className="hidden sm:block" />
        <span className="text-[var(--color-text-secondary)]"> que entrega resultados.</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
        Transformo ideias em sistemas escaláveis. Full Stack Developer & Data Engineer
        especializado em Next.js, Node.js e arquitetura de dados robusta.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/orcamento"
          className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
        >
          Solicitar orçamento
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/portfolio"
          className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border-dark)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors duration-150"
        >
          Ver Portfolio
        </Link>
      </div>

      {/* Code block */}
      <div className="mt-20 w-full max-w-4xl" aria-hidden="true">
        <div className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] overflow-hidden shadow-[0_0_80px_-20px_rgba(91,106,240,0.15)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border-dark)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto text-xs text-[var(--color-text-muted)] font-mono">
              candido-digital / portfolio
            </span>
          </div>
          <div className="p-6 text-left overflow-auto">
            <pre className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] leading-relaxed">
              <code>
                <span className="text-[var(--color-text-muted)]">{"// "}</span>
                <span className="text-[var(--color-text-secondary)]">Candido Digital — desenvolvedor full stack</span>
                {"\n\n"}
                <span className="text-[#5b6af0]">const</span>
                <span className="text-[var(--color-text-dark)]"> desenvolvedor</span>
                <span className="text-[var(--color-text-secondary)]"> = {"{"}</span>
                {"\n"}
                {"  "}<span className="text-[#79c0ff]">nome</span>
                <span className="text-[var(--color-text-secondary)]">: </span>
                <span className="text-[#a5d6ff]">&quot;Candido Digital&quot;</span>
                <span className="text-[var(--color-text-secondary)]">,</span>
                {"\n"}
                {"  "}<span className="text-[#79c0ff]">especialidades</span>
                <span className="text-[var(--color-text-secondary)]">: [</span>
                <span className="text-[#a5d6ff]">&quot;Full Stack&quot;</span>
                <span className="text-[var(--color-text-secondary)]">, </span>
                <span className="text-[#a5d6ff]">&quot;Engenharia de Dados&quot;</span>
                <span className="text-[var(--color-text-secondary)]">],</span>
                {"\n"}
                {"  "}<span className="text-[#79c0ff]">tecnologias</span>
                <span className="text-[var(--color-text-secondary)]">: [</span>
                <span className="text-[#a5d6ff]">&quot;Next.js&quot;</span>
                <span className="text-[var(--color-text-secondary)]">, </span>
                <span className="text-[#a5d6ff]">&quot;Node.js&quot;</span>
                <span className="text-[var(--color-text-secondary)]">, </span>
                <span className="text-[#a5d6ff]">&quot;PostgreSQL&quot;</span>
                <span className="text-[var(--color-text-secondary)]">, </span>
                <span className="text-[#a5d6ff]">&quot;Python&quot;</span>
                <span className="text-[var(--color-text-secondary)]">],</span>
                {"\n"}
                {"  "}<span className="text-[#79c0ff]">disponivel</span>
                <span className="text-[var(--color-text-secondary)]">: </span>
                <span className="text-[#7ee787]">true</span>
                <span className="text-[var(--color-text-secondary)]">,</span>
                {"\n"}
                {"  "}<span className="text-[#79c0ff]">foco</span>
                <span className="text-[var(--color-text-secondary)]">: </span>
                <span className="text-[#a5d6ff]">&quot;Sistemas escaláveis e produtos orientados por dados&quot;</span>
                {"\n"}
                <span className="text-[var(--color-text-secondary)]">{"}"}</span>
                {"\n\n"}
                <span className="text-[var(--color-text-muted)]">{"// "}</span>
                <span className="text-[var(--color-text-secondary)]">De MVP a empresa. Vamos construir.</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
