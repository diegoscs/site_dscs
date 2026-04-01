const features = [
  {
    number: "01",
    title: "Construído para propósito",
    description:
      "Cada linha de código é escrita com intenção clara — arquitetura limpa, escalável e fácil de manter.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Orientado a dados",
    description:
      "Pipelines de dados robustos, dashboards analíticos e decisões embasadas em métricas reais.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Velocidade de entrega",
    description:
      "Do MVP ao sistema corporativo — processos ágeis que reduzem time-to-market sem sacrificar qualidade.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2v4m0 8v4M2 10h4m8 0h4M4.93 4.93l2.83 2.83m4.48 4.48l2.83 2.83M15.07 4.93l-2.83 2.83M7.76 12.24l-2.83 2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6" aria-labelledby="why-hire-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section header — like Linear's "A new species of product tool" */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Por que me contratar
          </p>
          <h2 id="why-hire-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15]">
            Uma nova espécie de desenvolvedor.{" "}
            <span className="text-[var(--color-text-secondary)]">
              Full Stack com visão de dados, construído para equipes modernas.
            </span>
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border-dark)]">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-[var(--color-bg-dark)] p-8 flex flex-col gap-5 group hover:bg-[var(--color-bg-secondary-dark)] transition-colors duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] transition-colors">
                {feature.icon}
              </div>

              {/* Number */}
              <span className="text-xs font-mono text-[var(--color-text-muted)]">
                {feature.number}
              </span>

              <div>
                <h3 className="text-base font-semibold text-[var(--color-text-dark)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
