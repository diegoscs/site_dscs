import Link from "next/link";

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "SvelteKit"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "GitHub Actions"],
  "Data Engineering": ["Python", "dbt", "Airflow", "Snowflake", "BigQuery", "Pandas"],
};

const stats = [
  { numero: "50+", label: "Projetos Entregues", descricao: "em 6 anos de experiência" },
  { numero: "2.5K+", label: "Usuários Impactados", descricao: "em plataformas que construí" },
  { numero: "99.9%", label: "Uptime Médio", descricao: "em projetos em produção" },
  { numero: "6+", label: "Anos de Experiência", descricao: "como desenvolvedor full stack" },
];

const timeline = [
  {
    ano: "2019",
    titulo: "Primeiros Passos",
    descricao: "Comecei como freelancer, desenvolvendo sites com React e Node.js. Crescimento orgânico através de referências.",
  },
  {
    ano: "2020",
    titulo: "Especialização",
    descricao: "Aprofundamento em arquitetura de microsserviços, Kubernetes e infraestrutura escalável.",
  },
  {
    ano: "2021",
    titulo: "Data Engineering",
    descricao: "Adicionei engenharia de dados ao meu skill set. Primeiro pipeline ETL em produção com Airflow.",
  },
  {
    ano: "2022",
    titulo: "Produto Próprio",
    descricao: "Lancei AgendaCliente, uma plataforma SaaS que atingiu 2.5K+ usuários em 18 meses.",
  },
  {
    ano: "2023",
    titulo: "Consultoria",
    descricao: "Passei a oferecer consultoria técnica para startups e empresas, revisão de arquitetura e otimizações.",
  },
  {
    ano: "2024",
    titulo: "Nível Seguinte",
    descricao: "Foco em sistemas de alta escala, data-driven products e mentoria de engenheiros.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
                Sobre Mim
              </p>
              <h1 className="text-5xl font-bold text-[var(--color-text-dark)] mb-6 leading-[1.1]">
                Diego Candido
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Full Stack Developer & Data Engineer especializado em transformar ideias em sistemas escaláveis.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Desde 2019, trabalho com empresas de todos os tamanhos — de startups até corporações — ajudando-as a escalar suas operações através de tecnologia. Meu foco é entregar soluções que não apenas funcionam, mas que geram resultados mensuráveis.
              </p>

              {/* CTAs */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/diegoscs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  Ver GitHub
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-candido-8b0850222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors"
                >
                  Ver LinkedIn
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </div>
            </div>

            {/* Imagem Placeholder */}
            <div className="relative">
              <div className="w-full aspect-square rounded-xl border border-[var(--color-border-dark)] bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-[var(--color-text-muted)]">
                    Foto será adicionada em breve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
                  {stat.numero}
                </p>
                <p className="font-semibold text-[var(--color-text-dark)] mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {stat.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Expertise & Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([categoria, items]) => (
              <div key={categoria} className="rounded-xl border border-[var(--color-border-dark)] p-8 bg-[var(--color-bg-dark)]">
                <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-6">
                  {categoria}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-dark)] text-sm font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
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
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Minha Jornada
          </h2>

          <div className="relative space-y-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-transparent" aria-hidden="true" />

            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-20">
                {/* Dot */}
                <div className="absolute left-0 w-12 h-12 rounded-full border-4 border-[var(--color-bg-dark)] bg-[var(--color-primary)] flex items-center justify-center text-sm font-bold text-white">
                  {idx + 1}
                </div>

                {/* Content */}
                <div className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6">
                  <p className="text-sm font-mono text-[var(--color-primary)] mb-2">
                    {item.ano}
                  </p>
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Como Trabalho
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3">
                Velocidade
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Entregas rápidas sem sacrificar qualidade. Metodologia Agile com sprints de 2 semanas.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3">
                Precisão
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Código limpo, testado e documentado. Code reviews rigorosos e padrões de qualidade altos.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3">
                Resultados
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Foco em ROI. Cada projeto é medido em métricas concretas: performance, escalabilidade, conversão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
            Pronto para trabalhar comigo?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Tenho certeza de que posso ajudar seu projeto a escalar. Vamos conversar!
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Iniciar Conversa
          </Link>
        </div>
      </section>
    </>
  );
}
