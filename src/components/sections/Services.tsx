/* Seções de funcionalidades — texto à esquerda, mockup à direita (estilo Linear) */

const services = [
  {
    id: "web",
    index: "1.0",
    sectionLabel: "Web →",
    heading: "Transforme sua ideia em produto digital",
    description:
      "Aplicações web completas construídas com Next.js e TypeScript. Do MVP ao sistema enterprise com foco em performance e escalabilidade.",
    links: ["Landing pages", "Sistemas web", "Dashboards", "E-commerce"],
    mockup: (
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-hover" />
          <span className="ml-2 text-xs text-muted font-mono">dashboard.tsx</span>
        </div>
        <div className="p-4 space-y-2 font-mono text-xs">
          <p><span className="text-primary">const</span> <span className="text-text">Dashboard</span> = () =&gt; {"{"}</p>
          <p className="pl-4"><span className="text-primary">const</span> <span className="text-text">{"{ data }"}</span> = <span className="text-muted">useSWR</span>(<span className="text-accent">'/api/metrics'</span>)</p>
          <p className="pl-4 text-muted">return (</p>
          <p className="pl-8"><span className="text-muted">&lt;</span><span className="text-primary">MetricsGrid</span> <span className="text-text">data</span>=<span className="text-accent">{"{ data }"}</span> <span className="text-muted">/&gt;</span></p>
          <p className="pl-4 text-muted">)</p>
          <p className="text-muted">{"}"}</p>
        </div>
        <div className="border-t border-border p-4 grid grid-cols-3 gap-3">
          {["Receita", "Usuários", "Conversão"].map((label, i) => (
            <div key={label} className="bg-bg rounded-lg p-3">
              <p className="text-xs text-muted mb-1">{label}</p>
              <p className="text-sm font-semibold text-text">{["R$ 48k", "2.4k", "12.3%"][i]}</p>
              <p className="text-xs text-primary mt-0.5">{["↑ 18%", "↑ 7%", "↑ 2%"][i]}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "data",
    index: "2.0",
    sectionLabel: "Data →",
    heading: "Defina a direção com dados concretos",
    description:
      "Pipelines ETL robustos, data warehouses e dashboards que transformam dados brutos em decisões estratégicas acionáveis.",
    links: ["Pipelines ETL/ELT", "Data Warehouse", "Power BI / Metabase", "Integrações API"],
    mockup: (
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <span className="text-xs font-medium">Pipeline Status</span>
          <span className="text-xs text-primary px-2 py-0.5 bg-primary/10 rounded-full">Ativo</span>
        </div>
        <div className="p-4 space-y-2">
          {[
            { name: "ingestion", status: "✓", color: "text-primary", rows: "1.2M rows" },
            { name: "transform", status: "✓", color: "text-primary", rows: "980K rows" },
            { name: "validate", status: "✓", color: "text-primary", rows: "980K rows" },
            { name: "load_dw", status: "↺", color: "text-accent", rows: "running..." },
          ].map((step) => (
            <div key={step.name} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
              <span className={`text-xs font-mono font-bold ${step.color}`}>{step.status}</span>
              <span className="text-xs font-mono text-text flex-1">{step.name}</span>
              <span className="text-xs text-muted">{step.rows}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "auto",
    index: "3.0",
    sectionLabel: "Automação →",
    heading: "Mova operações com agentes e automações",
    description:
      "Elimine tarefas manuais com automações inteligentes que conectam seus sistemas, reduzem erros e multiplicam a produtividade.",
    links: ["RPA & bots", "WhatsApp API", "n8n / Make", "Integrações webhook"],
    mockup: (
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <span className="text-xs font-medium">Workflow — Suporte automático</span>
        </div>
        <div className="p-4 space-y-3">
          {[
            { from: "WhatsApp", to: "Triagem IA", time: "0ms" },
            { from: "Triagem IA", to: "CRM Update", time: "120ms" },
            { from: "CRM Update", to: "Resposta auto", time: "340ms" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-bg border border-border rounded text-muted font-mono">{step.from}</span>
              <svg className="w-4 h-4 text-border-hover shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="px-2 py-1 bg-bg border border-border rounded text-muted font-mono">{step.to}</span>
              <span className="ml-auto text-muted/60">{step.time}</span>
            </div>
          ))}
          <div className="mt-2 px-3 py-2 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-xs text-primary">70% dos tickets resolvidos automaticamente</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos">
      {services.map((service, idx) => (
        <div key={service.id} className="border-t border-border py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section label */}
            <p className="text-xs text-muted font-mono mb-12">
              {service.index} {service.sectionLabel}
            </p>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Text */}
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-4">
                  {service.heading}
                </h2>
                <p className="text-muted leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-2">
                  {service.links.map((link) => (
                    <li key={link} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div>{service.mockup}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
