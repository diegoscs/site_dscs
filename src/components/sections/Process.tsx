"use client";

const steps = [
  {
    number: "01",
    title: "Descoberta & Estratégia",
    description:
      "Entendemos seus objetivos, mercado e desafios. Definimos a estratégia técnica e roadmap do projeto com base em dados reais.",
    activities: [
      "Kickoff meeting com stakeholders",
      "Análise de requisitos detalhada",
      "Arquitetura técnica design",
      "Estimativa de timeline e recursos",
    ],
    duration: "1-2 semanas",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Design & Prototipagem",
    description:
      "Criamos protótipos interativos e wireframes. Validamos fluxos de usuário com feedback iterativo antes de qualquer linha de código.",
    activities: [
      "UX/UI design com Figma",
      "Protótipos interativos",
      "Design system criação",
      "Validação com usuários",
    ],
    duration: "2-3 semanas",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Desenvolvimento Iterativo",
    description:
      "Implementação usando metodologia Agile com sprints de 2 semanas. Código revisado, testado e integrado continuamente.",
    activities: [
      "Backend + Frontend em paralelo",
      "Code review rigoroso",
      "Testes automatizados (Unit, E2E)",
      "Deploy em staging a cada sprint",
    ],
    duration: "6-12 semanas",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "QA & Performance",
    description:
      "Testes completos em todos os cenários. Otimização de performance, segurança e preparação para produção.",
    activities: [
      "Testes de regressão completos",
      "Testes de carga e stress",
      "Auditoria de segurança",
      "Otimização de performance",
    ],
    duration: "2-3 semanas",
    icon: "✅",
  },
  {
    number: "05",
    title: "Deploy & Monitoramento",
    description:
      "Deploy em produção com zero downtime. Monitoramento contínuo, alertas e suporte 24/7 nos primeiros meses.",
    activities: [
      "Setup de CI/CD pipeline",
      "Database migration strategy",
      "Monitoramento e logging",
      "Documentação e handoff",
    ],
    duration: "1 semana",
    icon: "🚀",
  },
  {
    number: "06",
    title: "Suporte & Evolução",
    description:
      "Suporte técnico contínuo, bug fixes, melhorias baseadas em métricas e roadmap de features futuras.",
    activities: [
      "Suporte técnico SLA",
      "Análise de métricas",
      "Otimizações baseadas em dados",
      "Roadmap de novas features",
    ],
    duration: "Ongoing",
    icon: "💪",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Processo
          </p>
          <h2 id="process-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15] mb-6">
            Do conceito ao <span className="text-[var(--color-primary)]">launch</span>.
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Metodologia testada que transforma ideias em produtos reais. Cada etapa otimizada para máxima qualidade e entrega no tempo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-border-dark)] md:translate-x-[-50%]" aria-hidden="true" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                  index % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div className="md:pr-8">
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg-dark)] text-2xl">
                        {step.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      {/* Number */}
                      <span className="text-xs font-mono text-[var(--color-primary)] mb-2 block">
                        Etapa {step.number}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Duration */}
                      <p className="text-xs text-[var(--color-text-muted)] font-mono mb-4">
                        Duração: <span className="text-[var(--color-primary)]">{step.duration}</span>
                      </p>

                      {/* Activities */}
                      <ul className="space-y-2">
                        {step.activities.map((activity, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]"
                          >
                            <svg
                              className="w-3 h-3 mt-1 flex-shrink-0 text-[var(--color-primary)]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline marker for desktop */}
                <div className="hidden md:block h-24" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-t border-[var(--color-border-dark)] pt-12 text-center">
          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
            Pronto para começar?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Cada projeto é único. Adapto o processo conforme suas necessidades específicas. Vamos conversar sobre como posso ajudar.
          </p>
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-blue-600 transition-colors"
          >
            Agendar reunião
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
