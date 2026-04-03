import Link from "next/link";

const servicos = [
  {
    id: 1,
    titulo: "Web Apps & SaaS",
    descricao: "Aplicações web escaláveis e plataformas SaaS do conceito ao deploy, com arquitetura limpa e UX que converte.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    tecnologias: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: 2,
    titulo: "Engenharia de Dados",
    descricao: "Pipelines ETL robustos, data warehouses e dashboards que transformam dados brutos em decisões estratégicas.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12l4-4 3 3 4-5 3 3 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    tecnologias: ["Python", "dbt", "Airflow", "Snowflake", "BigQuery"],
  },
  {
    id: 3,
    titulo: "Sistemas & Escala",
    descricao: "Arquitetura de microsserviços, containers e infraestrutura production-ready que cresce com seu negócio.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 12h3M14 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tecnologias: ["Docker", "Kubernetes", "RabbitMQ", "Redis", "Node.js"],
  },
  {
    id: 4,
    titulo: "Consultoria Técnica",
    descricao: "Auditorias, code reviews, estratégia arquitetural e mentoria para equipes que querem evoluir rápido.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tecnologias: ["Code Review", "Arquitetura", "Performance", "Segurança"],
  },
];

const faq = [
  {
    pergunta: "Qual é o tempo mínimo para um projeto?",
    resposta: "Depende do escopo. Projetos pequenos podem ser entregues em 2–4 semanas. Sistemas mais complexos levam 8–16 semanas.",
  },
  {
    pergunta: "Posso contratar por hora ou apenas projeto fechado?",
    resposta: "Ambos. Ofereço projetos fechados (escopo definido) ou contratos por hora/mensal para trabalhos contínuos.",
  },
  {
    pergunta: "Como funciona a comunicação durante o projeto?",
    resposta: "Updates diários, reuniões semanais de sync e acesso ao repositório com progresso em tempo real.",
  },
];

export default function Servicos() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Serviços
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] mb-4 leading-[1.1]">
            O que posso construir para você.
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Full Stack, Engenharia de Dados e Infraestrutura — tudo integrado em soluções que funcionam em produção.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-12 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                className="group rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6 hover:border-[var(--color-border-hover)] transition-colors duration-200"
              >
                {/* Ícone */}
                <div className="w-10 h-10 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] transition-colors mb-5">
                  {servico.icone}
                </div>

                {/* Título + Descrição */}
                <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-2">
                  {servico.titulo}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {servico.descricao}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {servico.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded border border-[var(--color-border-dark)] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary-dark)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA único */}
          <div className="mt-10">
            <Link
              href="/orcamento"
              className="flex items-center justify-center gap-2 w-full sm:w-auto sm:inline-flex px-8 py-3 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
            >
              Solicitar orçamento
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm text-[var(--color-text-muted)] uppercase tracking-widest font-mono mb-8">
            Dúvidas frequentes
          </h2>
          <div className="space-y-0">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group border-b border-[var(--color-border-dark)] py-5 cursor-pointer"
              >
                <summary className="flex items-center justify-between text-sm font-semibold text-[var(--color-text-dark)] list-none">
                  {item.pergunta}
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-[var(--color-text-muted)] group-open:rotate-45 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
