import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços | Diego Candido",
  description:
    "Landing pages, sites completos, sistemas web, painéis, automação e engenharia de dados. Soluções que funcionam em produção.",
  openGraph: {
    title: "Serviços | Diego Candido",
    description:
      "Landing pages, sites completos, sistemas web, painéis, automação e engenharia de dados.",
    images: [
      {
        url: new URL("/api/og?title=Serviços&description=Landing pages, sites, painéis, automação&category=Desenvolvimento", "https://dscs.com.br").toString(),
        width: 1200,
        height: 630,
        alt: "Serviços - Diego Candido",
      },
    ],
  },
};

const servicos = [
  {
    id: "landing",
    titulo: "Landing Page",
    descricao: "Página focada em converter visitantes em clientes. Design profissional, carregamento rápido e otimizada para aparecer no Google.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="11" x2="29" y2="11"/>
        <line x1="7" y1="8" x2="7" y2="8"/>
        <line x1="10" y1="8" x2="10" y2="8"/>
        <line x1="13" y1="8" x2="13" y2="8"/>
        <rect x="3" y="5" width="26" height="22"/>
        <rect x="6" y="14" width="10" height="10"/>
        <rect x="19" y="21" width="7" height="3"/>
        <line x1="20" y1="15" x2="26" y2="15"/>
        <line x1="23" y1="18" x2="26" y2="18"/>
        <polyline points="6,22 12,19 16,22"/>
        <line x1="9" y1="17" x2="9" y2="17"/>
      </svg>
    ),
    tecnologias: ["Next.js", "React", "Tailwind CSS", "SEO"],
  },
  {
    id: "site",
    titulo: "Site Completo",
    descricao: "Site institucional com múltiplas páginas, blog editável e tudo que sua empresa precisa para ter presença online profissional.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
      </svg>
    ),
    tecnologias: ["Next.js", "CMS", "SEO", "TypeScript"],
  },
  {
    id: "sistema",
    titulo: "Sistema Web / App",
    descricao: "Aplicações com login, pagamentos, integrações e lógica de negócio. Do MVP ao produto escalável em produção.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8l2 2-2 2M11 10h4"/>
      </svg>
    ),
    tecnologias: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: "painel",
    titulo: "Painel / Dashboard",
    descricao: "Visualize seus dados em tempo real. Gráficos, relatórios, alertas e gestão centralizada para tomar decisões com clareza.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z"/>
        <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z"/>
        <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z"/>
        <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z"/>
      </svg>
    ),
    tecnologias: ["React", "Python", "PostgreSQL", "Power BI"],
  },
  {
    id: "automacao",
    titulo: "Automação",
    descricao: "Elimine tarefas manuais e repetitivas. Integrações entre sistemas, notificações automáticas e fluxos que trabalham por você.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"/>
      </svg>
    ),
    tecnologias: ["Node.js", "Python", "Webhooks", "WhatsApp API"],
  },
  {
    id: "engdados",
    titulo: "Engenharia de Dados",
    descricao: "Pipelines ETL, data warehouses e infraestrutura de dados que transforma informação bruta em decisões estratégicas.",
    icone: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M2.75 2.5A1.75 1.75 0 001 4.25v1C1 6.216 1.784 7 2.75 7h1a1.75 1.75 0 001.732-1.5H6.5a.75.75 0 01.75.75v3.5A2.25 2.25 0 009.5 12h1.018c.121.848.85 1.5 1.732 1.5h1A1.75 1.75 0 0015 11.75v-1A1.75 1.75 0 0013.25 9h-1a1.75 1.75 0 00-1.732 1.5H9.5a.75.75 0 01-.75-.75v-3.5A2.25 2.25 0 006.5 4H5.482A1.75 1.75 0 003.75 2.5h-1zM2.5 4.25A.25.25 0 012.75 4h1a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-1zm9.75 6.25a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25h-1z" clipRule="evenodd"/>
      </svg>
    ),
    tecnologias: ["Python", "dbt", "Airflow", "BigQuery", "Snowflake"],
  },
];

const faq = [
  {
    pergunta: "Qual é o tempo mínimo para um projeto?",
    resposta: "Depende do escopo. Uma landing page pode ser entregue em 1–2 semanas. Sistemas mais complexos levam de 6 a 16 semanas.",
  },
  {
    pergunta: "Posso contratar por hora ou apenas projeto fechado?",
    resposta: "Ambos. Ofereço projetos fechados (escopo definido) ou contratos por hora/mensais para trabalhos contínuos.",
  },
  {
    pergunta: "Como funciona a comunicação durante o projeto?",
    resposta: "Updates frequentes, reuniões de alinhamento e acesso ao repositório com progresso em tempo real.",
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
            Da landing page ao sistema completo — entrego soluções que funcionam em produção e geram resultados reais.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-12 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                className="group rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6 hover:border-[var(--color-border-hover)] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] transition-colors mb-5">
                  {servico.icone}
                </div>
                <h2 className="text-base font-semibold text-[var(--color-text-dark)] mb-2">
                  {servico.titulo}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {servico.descricao}
                </p>
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
