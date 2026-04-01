"use client";

const services = [
  {
    number: "01",
    title: "Web Apps",
    subtitle: "Next.js • React • Node.js",
    description:
      "Aplicações web modernas, escaláveis e de alta performance. Do conceito ao deploy em produção com arquitetura limpa e UX que converte.",
    features: [
      "Next.js 14+ com Server Components",
      "React 18+ com padrões avançados",
      "TypeScript end-to-end",
      "Autenticação e autorização",
      "Pagamentos e SaaS",
      "CI/CD automatizado",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "02",
    title: "Data Engineering",
    subtitle: "ETL • Pipelines • Analytics",
    description:
      "Transforme dados brutos em decisões estratégicas. Pipelines robustos, data warehouses otimizados e dashboards que contam a história dos seus dados.",
    features: [
      "ETL pipelines com Airflow/Prefect",
      "Transformação com dbt + SQL",
      "Data warehouses (Snowflake, BigQuery)",
      "Dashboards interativos",
      "Monitoramento de dados",
      "Orquestração de jobs",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12l4-4 3 3 4-5 3 3 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    number: "03",
    title: "Sistemas & Escala",
    subtitle: "Arquitetura • DevOps • Cloud",
    description:
      "Sistemas que crescem com você. Microsserviços, containers, orquestração e observabilidade para infraestrutura production-ready.",
    features: [
      "Arquitetura de microsserviços",
      "Docker + Kubernetes",
      "APIs REST/GraphQL",
      "Message queues (RabbitMQ, Kafka)",
      "Monitoring e logging",
      "Disaster recovery",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-24">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Serviços
          </p>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15] mb-6">
            Expertise em <span className="text-[var(--color-primary)]">full stack</span> e <span className="text-[var(--color-primary)]">dados</span>.
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Combinamos desenvolvimento web robusto, engenharia de dados e infraestrutura escalável. Tudo integrado em soluções que funcionam.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-8 hover:border-[var(--color-border-hover)] transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-br ${service.color}`}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] transition-colors mb-6">
                {service.icon}
              </div>

              {/* Number */}
              <span className="text-xs font-mono text-[var(--color-text-muted)] mb-4 block">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-2">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-[var(--color-primary)] font-mono mb-4">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                    <svg
                      className="w-3 h-3 mt-1 flex-shrink-0 text-[var(--color-primary)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View More */}
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-text-dark)] transition-colors mt-6"
              >
                Ver exemplos
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
            Cada projeto é customizado para seus objetivos específicos. Independentemente do tamanho, garantimos qualidade, escalabilidade e suporte contínuo.
          </p>
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-blue-600 transition-colors"
          >
            Conversar sobre seu projeto
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
