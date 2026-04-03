import Link from "next/link";

const servicos = [
  {
    id: 1,
    titulo: "Web Apps & SaaS",
    descricao: "Aplicações web escaláveis e plataformas SaaS do conceito ao deploy, com arquitetura limpa e UX que converte.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M28 2.25h-24c-1.518 0.002-2.748 1.232-2.75 2.75v16c0.002 1.518 1.232 2.748 2.75 2.75h8.806l-2.167 4.5h-4.64c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h20c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-4.537l-2.25-4.5h8.787c1.518-0.002 2.748-1.232 2.75-2.75v-16c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM19.787 28.25h-7.482l2.166-4.5h3.065zM29.25 21c-0.001 0.69-0.56 1.249-1.25 1.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-16c0.001-0.69 0.56-1.249 1.25-1.25h24c0.69 0.001 1.249 0.56 1.25 1.25v0zM9.026 13.252l3.538-4.044c0.114-0.131 0.184-0.303 0.184-0.492 0-0.414-0.336-0.75-0.75-0.75-0.223 0-0.424 0.098-0.562 0.253l-0.001 0.001-4 4.572c-0.115 0.131-0.185 0.304-0.185 0.494 0 0.207 0.084 0.395 0.22 0.53l4 4c0.135 0.131 0.319 0.212 0.523 0.212 0.414 0 0.75-0.336 0.75-0.75 0-0.203-0.081-0.388-0.212-0.523l0 0zM20.564 8.221c-0.138-0.156-0.339-0.254-0.562-0.254-0.414 0-0.75 0.336-0.75 0.75 0 0.189 0.070 0.361 0.184 0.493l-0.001-0.001 3.537 4.043-3.504 3.504c-0.136 0.136-0.219 0.323-0.219 0.53 0 0.415 0.336 0.751 0.751 0.751 0.208 0 0.395-0.084 0.531-0.22v0l4-4c0.135-0.136 0.218-0.323 0.218-0.53 0-0.19-0.070-0.363-0.186-0.495l0.001 0.001z"/>
      </svg>
    ),
    tecnologias: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: 2,
    titulo: "Engenharia de Dados",
    descricao: "Pipelines ETL robustos, data warehouses e dashboards que transformam dados brutos em decisões estratégicas.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <circle cx="23" cy="23" r="1"/><rect x="8" y="22" width="12" height="2"/><circle cx="23" cy="9" r="1"/><rect x="8" y="8" width="12" height="2"/>
        <path d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z"/>
      </svg>
    ),
    tecnologias: ["Python", "dbt", "Airflow", "Snowflake", "BigQuery"],
  },
  {
    id: 3,
    titulo: "Sistemas & Escala",
    descricao: "Arquitetura de microsserviços, containers e infraestrutura production-ready que cresce com seu negócio.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"/>
      </svg>
    ),
    tecnologias: ["Docker", "Kubernetes", "RabbitMQ", "Redis", "Node.js"],
  },
  {
    id: 4,
    titulo: "Consultoria Técnica",
    descricao: "Auditorias, code reviews, estratégia arquitetural e mentoria para equipes que querem evoluir rápido.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 5.5L3.21429 7L7.5 3"/><path d="M2 12.5L3.21429 14L7.5 10"/><path d="M2 19.5L3.21429 21L7.5 17"/>
        <path d="M22 12H17M12 12H13.5"/><path d="M12 19H17M20.5 19H22"/><path d="M22 5L12 5"/>
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
