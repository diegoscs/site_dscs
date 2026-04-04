import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Diego Candido",
  description:
    "Full Stack Developer & Data Engineer com experiência em Next.js, Node.js, Python e arquitetura de dados. Conheça minha trajetória desde 2019.",
  openGraph: {
    title: "Sobre | Diego Candido",
    description:
      "Full Stack Developer & Data Engineer — trajetória, stack e projetos desde 2019.",
  },
};

const skills = [
  {
    categoria: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "SvelteKit"],
    icone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.25 3L21 3.75V20.25L20.25 21H3.75L3 20.25V3.75L3.75 3H20.25ZM19.5 4.5L4.5 4.5L4.5 19.5H8.25L8.25 9.75H4.5V8.25H8.25H9.75H19.5V4.5ZM19.5 9.75H9.75L9.75 19.5H19.5V9.75Z"/>
      </svg>
    ),
  },
  {
    categoria: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    icone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7"/>
      </svg>
    ),
  },
  {
    categoria: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "GitHub Actions"],
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
    items: ["Python", "dbt", "Airflow", "Snowflake", "BigQuery", "Pandas"],
    icone: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M2.75 2.5A1.75 1.75 0 001 4.25v1C1 6.216 1.784 7 2.75 7h1a1.75 1.75 0 001.732-1.5H6.5a.75.75 0 01.75.75v3.5A2.25 2.25 0 009.5 12h1.018c.121.848.85 1.5 1.732 1.5h1A1.75 1.75 0 0015 11.75v-1A1.75 1.75 0 0013.25 9h-1a1.75 1.75 0 00-1.732 1.5H9.5a.75.75 0 01-.75-.75v-3.5A2.25 2.25 0 006.5 4H5.482A1.75 1.75 0 003.75 2.5h-1zM2.5 4.25A.25.25 0 012.75 4h1a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-1zm9.75 6.25a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25h-1z" clipRule="evenodd"/>
      </svg>
    ),
  },
];

const timeline = [
  {
    ano: "2019",
    titulo: "Primeiros Passos",
    descricao: "Comecei como freelancer desenvolvendo sites com React e Node.js.",
  },
  {
    ano: "2020",
    titulo: "Especialização",
    descricao: "Aprofundamento em arquitetura de microsserviços, Kubernetes e infraestrutura escalável.",
  },
  {
    ano: "2021",
    titulo: "Engenharia de Dados",
    descricao: "Primeiro pipeline ETL em produção com Airflow. Dados passaram a fazer parte do meu stack.",
  },
  {
    ano: "2022",
    titulo: "Produto Próprio",
    descricao: "Lancei AgendaCliente, plataforma SaaS que atingiu 2.5K+ usuários em 18 meses.",
  },
  {
    ano: "2023",
    titulo: "Consultoria",
    descricao: "Passei a oferecer consultoria técnica para startups e empresas — arquitetura e otimizações.",
  },
  {
    ano: "2024",
    titulo: "Nível Seguinte",
    descricao: "Foco em sistemas de alta escala, produtos orientados por dados e mentoria de engenheiros.",
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

          {/* Avatar placeholder + nome */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] flex items-center justify-center text-sm font-semibold text-[var(--color-text-muted)] flex-shrink-0">
              DC
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text-dark)] leading-tight">
                Diego Candido
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Full Stack Developer & Data Engineer
              </p>
            </div>
          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl">
            Desde 2019 trabalho com empresas de todos os tamanhos — de startups a corporações — ajudando-as a escalar suas operações com tecnologia. Meu foco é entregar soluções que não apenas funcionam, mas que geram resultados mensuráveis.
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
          <p className="text-xs text-[var(--color-text-muted)] mb-8 uppercase tracking-widest font-mono">
            Jornada
          </p>
          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8 py-5 border-b border-[var(--color-border-dark)] last:border-b-0">
                <span className="text-xs font-mono text-[var(--color-primary)] w-10 flex-shrink-0 pt-0.5">
                  {item.ano}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-1">
                    {item.titulo}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
