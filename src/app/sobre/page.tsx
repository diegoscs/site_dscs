import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Diego Candido",
  description:
    "Desenvolvedor Full Stack & Especialista em Dados. Ciência da Computação, Power BI, Python, SQL, Next.js. Atuando desde 2024.",
  openGraph: {
    title: "Sobre | Diego Candido",
    description:
      "Desenvolvedor Full Stack & Especialista em Dados — trajetória, stack e projetos desde 2024.",
  },
};

const skills = [
  {
    categoria: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    icone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.25 3L21 3.75V20.25L20.25 21H3.75L3 20.25V3.75L3.75 3H20.25ZM19.5 4.5L4.5 4.5L4.5 19.5H8.25L8.25 9.75H4.5V8.25H8.25H9.75H19.5V4.5ZM19.5 9.75H9.75L9.75 19.5H19.5V9.75Z"/>
      </svg>
    ),
  },
  {
    categoria: "Backend",
    items: ["Node.js", "PostgreSQL", "APIs REST", "Supabase"],
    icone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7"/>
      </svg>
    ),
  },
  {
    categoria: "Cloud",
    items: ["GCP", "BigQuery", "Cloud Computing", "CI/CD", "Docker"],
    icone: (
      <svg width="16" height="16" viewBox="0 -3 20 20" fill="currentColor" aria-hidden="true">
        <g transform="translate(-84, -3282)">
          <path d="M98.8968326,3293.97071 C88.4628326,3293.97071 87.7908326,3294.27678 86.7908326,3293.53604 C84.6948326,3291.98278 87.1428326,3288.76062 89.2388326,3290.42255 C87.1828326,3283.66917 97.5638326,3281.38814 98.9018326,3287.99895 C102.844833,3287.85838 103.156833,3293.97071 98.8968326,3293.97071 M100.447833,3286.23135 C100.447833,3286.23135 99.7448326,3284.42088 97.8888326,3283.18166 C93.5658326,3280.29647 87.7268326,3282.98725 87.0668326,3288.08569 C86.0858326,3288.35287 85.2678326,3288.92612 84.7218326,3289.70175 C83.6068326,3291.28492 83.7338326,3293.59885 85.4518326,3294.99359 C87.0438326,3296.28564 87.5318326,3295.96462 98.7728326,3295.96462 C100.090833,3295.96462 101.337833,3295.4811 102.282833,3294.67058 C105.282833,3292.09943 104.160833,3287.35591 100.447833,3286.23135"/>
        </g>
      </svg>
    ),
  },
  {
    categoria: "Engenharia de Dados",
    items: ["Power BI", "SQL Server", "Python", "BigQuery", "Apache Airflow", "ETL", "Pandas"],
    icone: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M2.75 2.5A1.75 1.75 0 001 4.25v1C1 6.216 1.784 7 2.75 7h1a1.75 1.75 0 001.732-1.5H6.5a.75.75 0 01.75.75v3.5A2.25 2.25 0 009.5 12h1.018c.121.848.85 1.5 1.732 1.5h1A1.75 1.75 0 0015 11.75v-1A1.75 1.75 0 0013.25 9h-1a1.75 1.75 0 00-1.732 1.5H9.5a.75.75 0 01-.75-.75v-3.5A2.25 2.25 0 006.5 4H5.482A1.75 1.75 0 003.75 2.5h-1zM2.5 4.25A.25.25 0 012.75 4h1a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-1zm9.75 6.25a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25h-1z" clipRule="evenodd"/>
      </svg>
    ),
  },
];

const timeline = [
  {
    ano: "2024",
    titulo: "Primeiros projetos como freelancer",
    descricao: "Comecei a atender clientes como desenvolvedor independente, construindo sites e aplicações com React e Next.js. Foi onde aprendi na prática o que separa um código que funciona de um produto que o cliente realmente usa.",
  },
  {
    ano: "2025",
    titulo: "Dados entram no meu stack",
    descricao: "Comecei a trabalhar com análise de dados para clientes — dashboards no Power BI, consultas SQL e automações em Python. Percebi que a combinação de desenvolvimento web com dados abria um espaço muito mais valioso no mercado.",
  },
  {
    ano: "2026",
    titulo: "Formação, carreira e produto próprio",
    descricao: "Concluí a graduação em Ciência da Computação e ingressei formalmente na área de dados como Assistente de Dados — atuando com ETL, modelagem, BigQuery e Apache Airflow. No mesmo período, lancei o AgendaCliente, plataforma SaaS de agendamento que reúne tudo que aprendi em desenvolvimento e produto.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Sobre
          </p>

          {/* Avatar + nome */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] flex items-center justify-center text-sm font-semibold text-[var(--color-text-muted)] flex-shrink-0">
              DC
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text-dark)] leading-tight">
                Diego Candido
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Desenvolvedor Full Stack & Especialista em Dados
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-[var(--color-border-dark)] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary-dark)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Ciência da Computação
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-[var(--color-border-dark)] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary-dark)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Brasil
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-[var(--color-border-dark)] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary-dark)]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              Disponível para projetos
            </span>
          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl">
            Formado em Ciência da Computação, atuo como desenvolvedor Full Stack e Especialista em Dados. Construo dashboards no Power BI, pipelines ETL, automações em Python e aplicações web — sempre com foco em transformar dados e código em resultados reais para o negócio.
          </p>

          {/* Links sociais */}
          <div className="flex gap-3">
            <a
              href="https://github.com/diegoscs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              GitHub
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/diego-candido-8b0850222/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              LinkedIn
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-8 uppercase tracking-widest font-mono">
            Stack
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.categoria}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--color-text-muted)]">{skill.icone}</span>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest">
                    {skill.categoria}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-0.5 rounded border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary-dark)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-10 uppercase tracking-widest font-mono">
            Jornada
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-border-dark)]" aria-hidden="true" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                      idx === timeline.length - 1
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                        : "border-[var(--color-border-hover)] bg-[var(--color-bg-dark)]"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Year badge */}
                  <span className="inline-block text-xs font-mono text-[var(--color-primary)] mb-1">
                    {item.ano}
                  </span>

                  <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-1">
                    {item.titulo}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-1">
              Quer trabalhar juntos?
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Me conta o seu projeto e eu te envio uma proposta em até 48h.
            </p>
          </div>
          <a
            href="/orcamento"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
          >
            Solicitar orçamento
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
