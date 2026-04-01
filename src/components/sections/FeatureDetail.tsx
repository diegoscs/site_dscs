const sections = [
  {
    tag: "1.0  Web Apps",
    heading: "Defina a direção do produto",
    description:
      "Do levantamento de requisitos ao deploy em produção — aplicações web escaláveis, performáticas e com UX que converte.",
    links: [
      { label: "Next.js + React", sub: "1.1  Frontend" },
      { label: "Node.js + APIs", sub: "1.2  Backend" },
      { label: "PostgreSQL", sub: "1.3  Banco de dados" },
      { label: "CI/CD + Deploy", sub: "1.4  Infraestrutura" },
    ],
    mockup: (
      <div className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] p-5 font-mono text-xs leading-relaxed text-[var(--color-text-secondary)]">
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-70" />
          <span className="text-[var(--color-text-muted)]">projeto-dashboard / src / app</span>
        </div>
        <div className="space-y-1">
          <p><span className="text-[#7ee787]">✓</span> <span className="text-[var(--color-text-muted)]">build</span> <span className="text-[var(--color-text-secondary)]">completed in 4.2s</span></p>
          <p><span className="text-[#7ee787]">✓</span> <span className="text-[var(--color-text-muted)]">tests</span> <span className="text-[var(--color-text-secondary)]">passed (47/47)</span></p>
          <p><span className="text-[#7ee787]">✓</span> <span className="text-[var(--color-text-muted)]">deploy</span> <span className="text-[var(--color-text-secondary)]">→ production</span></p>
          <p className="pt-2 text-[var(--color-text-muted)]">Ready on https://app.exemplo.com.br</p>
        </div>
      </div>
    ),
  },
  {
    tag: "2.0  Data Engineering",
    heading: "Mova dados. Gere valor.",
    description:
      "Pipelines ETL robustos, data warehouses e dashboards que transformam dados brutos em decisões estratégicas.",
    links: [
      { label: "ETL Pipelines", sub: "2.1  Ingestão" },
      { label: "Airflow / Prefect", sub: "2.2  Orquestração" },
      { label: "dbt + SQL", sub: "2.3  Transformação" },
      { label: "Dashboards", sub: "2.4  Visualização" },
    ],
    mockup: (
      <div className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] p-5 font-mono text-xs leading-relaxed">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[var(--color-text-muted)]">pipeline / daily_sync</span>
          <span className="text-[#7ee787] text-[10px]">● running</span>
        </div>
        {[
          { label: "Extrair do banco OLTP", pct: 100, color: "#5b6af0" },
          { label: "Transformar via dbt", pct: 78, color: "#5b6af0" },
          { label: "Carregar no DW", pct: 0, color: "var(--color-text-muted)" },
        ].map((step) => (
          <div key={step.label} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-[var(--color-text-secondary)]">{step.label}</span>
              <span className="text-[var(--color-text-muted)]">{step.pct}%</span>
            </div>
            <div className="h-1 bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${step.pct}%`, backgroundColor: step.color }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "3.0  Sistemas & Escala",
    heading: "Entenda o progresso em escala",
    description:
      "Arquitetura de microsserviços, integrações de terceiros, automações e sistemas que crescem com o seu negócio.",
    links: [
      { label: "Microserviços", sub: "3.1  Arquitetura" },
      { label: "Docker + K8s", sub: "3.2  Containers" },
      { label: "APIs REST/GraphQL", sub: "3.3  Integrações" },
      { label: "Monitoramento", sub: "3.4  Observabilidade" },
    ],
    mockup: (
      <div className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] p-5 text-xs leading-relaxed">
        <div className="text-[var(--color-text-muted)] mb-4 font-mono">sistema / health-check</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { service: "API Gateway", status: "healthy", latency: "12ms" },
            { service: "Auth Service", status: "healthy", latency: "8ms" },
            { service: "Data Pipeline", status: "healthy", latency: "245ms" },
            { service: "Cache (Redis)", status: "healthy", latency: "1ms" },
          ].map((svc) => (
            <div key={svc.service} className="rounded border border-[var(--color-border-dark)] p-2.5 bg-[var(--color-bg-dark)]">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ee787]" aria-hidden="true" />
                <span className="text-[var(--color-text-secondary)] font-medium">{svc.service}</span>
              </div>
              <span className="text-[var(--color-text-muted)] font-mono">{svc.latency}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function FeatureDetail() {
  return (
    <div className="border-t border-[var(--color-border-dark)]">
      {sections.map((section, i) => (
        <section
          key={section.tag}
          className="border-b border-[var(--color-border-dark)] py-24 px-6"
          aria-labelledby={`feature-heading-${i}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-xs text-[var(--color-primary)] font-mono mb-6 uppercase tracking-widest">
                {section.tag}
              </p>
              <h2 id={`feature-heading-${i}`} className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15] mb-5">
                {section.heading}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-md">
                {section.description}
              </p>

              {/* Sub-links grid */}
              <div className="grid grid-cols-2 gap-3">
                {section.links.map((link) => (
                  <div
                    key={link.label}
                    className="flex items-start gap-2 group cursor-default"
                  >
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] font-mono">{link.sub}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-dark)] transition-colors">
                        {link.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup side */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              {section.mockup}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
