"use client";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-card text-xs text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        Disponível para novos projetos
      </div>

      {/* Heading */}
      <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mb-6">
        O sistema de desenvolvimento
        <br />
        <span className="text-muted">para o seu negócio</span>
      </h1>

      <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
        Construo aplicações web, pipelines de dados e automações que escalam.
        Do MVP ao sistema corporativo — com Next.js, Node.js e arquitetura robusta.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <a
          href="https://wa.me/5511964197606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          Iniciar projeto
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-border-hover text-sm font-medium rounded-xl transition-colors text-muted hover:text-text"
        >
          Ver portfolio
        </a>
      </div>

      {/* Product mockup — like Linear's app screenshot */}
      <div className="mt-16 w-full rounded-xl border border-border overflow-hidden shadow-[0_0_80px_-20px_rgba(59,130,246,0.12)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-bg-card border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          <span className="ml-2 text-xs text-muted font-mono">dashboard — Diego Candido</span>
        </div>
        {/* Layout */}
        <div className="bg-bg grid grid-cols-[200px_1fr] min-h-56 text-xs divide-x divide-border">
          {/* Sidebar */}
          <div className="p-4 space-y-4 hidden sm:block">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px]">D</span>
              <span className="text-text font-medium">Diego Candido</span>
            </div>
            {["Projetos", "Serviços", "Clientes", "Métricas"].map((item, i) => (
              <div key={item} className={`flex items-center gap-2 py-1 px-2 rounded ${i === 0 ? "bg-primary/10 text-primary" : "text-muted"}`}>
                <span className="w-1 h-1 rounded-full bg-current" />
                {item}
              </div>
            ))}
          </div>
          {/* Main area */}
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text font-medium">Visão geral</span>
              <span className="text-[10px] text-primary px-2 py-0.5 bg-primary/10 rounded-full">Disponível</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Projetos entregues", value: "30+", delta: "↑ 100%" },
                { label: "Avaliação média", value: "5.0 ★", delta: "perfeito" },
                { label: "Anos de exp.", value: "5+", delta: "Full Stack" },
              ].map((metric) => (
                <div key={metric.label} className="bg-bg-card border border-border rounded-lg p-3">
                  <p className="text-muted mb-1">{metric.label}</p>
                  <p className="text-text font-semibold text-sm">{metric.value}</p>
                  <p className="text-primary mt-0.5 text-[10px]">{metric.delta}</p>
                </div>
              ))}
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-muted">Pipeline de dados — processando 1.2M registros</span>
                <span className="ml-auto text-muted/50 font-mono">agora</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with tagline */}
      <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
        <p className="text-xs text-muted uppercase tracking-widest shrink-0">Tecnologias</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "AWS"].map((t) => (
            <span key={t} className="text-sm text-muted/60 font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
