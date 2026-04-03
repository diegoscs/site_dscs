"use client";

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "SvelteKit"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "GitHub Actions"],
  "Engenharia de Dados": ["Python", "dbt", "Airflow", "Snowflake", "BigQuery", "Pandas"],
};

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
            {Object.entries(skills).map(([categoria, items]) => (
              <div key={categoria}>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                  {categoria}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary-dark)]"
                    >
                      {skill}
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
