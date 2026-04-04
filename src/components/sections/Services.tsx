import Link from "next/link";

const services = [
  {
    id: "landing",
    title: "Landing Page",
    description: "Página focada em converter visitantes em clientes. Design profissional, carregamento rápido e otimizada para buscas.",
    icon: (
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
  },
  {
    id: "site",
    title: "Site Completo",
    description: "Site institucional ou portfólio com blog, múltiplas páginas e tudo que sua empresa precisa para ter presença online.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
      </svg>
    ),
  },
  {
    id: "sistema",
    title: "Sistema Web / App",
    description: "Aplicações complexas com login, pagamentos, integrações e lógica de negócio. Do MVP ao produto escalável.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 52.333 52.333" fill="currentColor" aria-hidden="true">
        <path d="M17.839,46.996h33.494c0.554,0,1-0.447,1-1V6.337c0-0.553-0.446-1-1-1H1c-0.553,0-1,0.447-1,1v22.246v3.943v13.469c0,0.553,0.447,1,1,1h12.843H17.839zM2,32.527v-3.943V7.337h48.333v37.658H17.839h-3.996H2V32.527z"/>
        <path d="M21.13,43.968h27.281c0.553,0,1-0.447,1-1V13.366c0-0.553-0.447-1-1-1H3.921c-0.553,0-1,0.447-1,1v12.041v6.634v10.928c0,0.553,0.447,1,1,1H14.48H21.13zM4.921,32.041v-6.634V14.366h42.49v27.603H21.13h-6.65H4.921V32.041z"/>
        <path d="M20.267,33.884c0.332,0,0.657-0.165,0.848-0.468c0.294-0.468,0.153-1.085-0.314-1.379l-6.189-3.894l6.189-3.893c0.468-0.294,0.608-0.911,0.314-1.379c-0.294-0.468-0.912-0.606-1.379-0.314l-7.5,4.716c-0.259,0.162-0.405,0.426-0.445,0.705c-0.04,0.28,0.187,0.543,0.445,0.705l7.5,4.717C19.901,33.834,20.085,33.884,20.267,33.884z"/>
        <path d="M31.219,33.461c0.19,0.304,0.516,0.468,0.848,0.468c0.183,0,0.367-0.05,0.531-0.152l7.5-4.717c0.26-0.162,0.405-0.426,0.445-0.705c-0.04-0.28-0.188-0.543-0.445-0.705l-7.5-4.717c-0.465-0.293-1.084-0.153-1.379,0.314c-0.293,0.468-0.152,1.085,0.314,1.379l6.189,3.894l-6.189,3.893C31.066,32.376,30.926,32.994,31.219,33.461z"/>
        <path d="M24.478,33.841c0.097,0.029,0.194,0.043,0.29,0.043c0.43,0,0.826-0.277,0.957-0.71l2.875-9.479c0.16-0.528-0.139-1.087-0.667-1.247c-0.529-0.16-1.087,0.139-1.247,0.667l-2.875,9.479C23.651,33.123,23.95,33.681,24.478,33.841z"/>
      </svg>
    ),
  },
  {
    id: "painel",
    title: "Painel / Dashboard",
    description: "Visualize seus dados em tempo real. Gráficos, relatórios, alertas e gestão centralizada para tomar decisões com clareza.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z"/>
        <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z"/>
        <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z"/>
        <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z"/>
      </svg>
    ),
  },
  {
    id: "automacao",
    title: "Automação",
    description: "Elimine tarefas manuais e repetitivas. Integrações entre sistemas, notificações automáticas e fluxos que trabalham por você.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"/>
      </svg>
    ),
  },
  {
    id: "engdados",
    title: "Engenharia de Dados",
    description: "Pipelines ETL, data warehouses e infraestrutura de dados que transforma informação bruta em decisões estratégicas.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M2.75 2.5A1.75 1.75 0 001 4.25v1C1 6.216 1.784 7 2.75 7h1a1.75 1.75 0 001.732-1.5H6.5a.75.75 0 01.75.75v3.5A2.25 2.25 0 009.5 12h1.018c.121.848.85 1.5 1.732 1.5h1A1.75 1.75 0 0015 11.75v-1A1.75 1.75 0 0013.25 9h-1a1.75 1.75 0 00-1.732 1.5H9.5a.75.75 0 01-.75-.75v-3.5A2.25 2.25 0 006.5 4H5.482A1.75 1.75 0 003.75 2.5h-1zM2.5 4.25A.25.25 0 012.75 4h1a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-1zm9.75 6.25a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25h-1z" clipRule="evenodd"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs text-[var(--color-text-muted)] mb-4 uppercase tracking-widest font-mono">
            Serviços
          </p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15] mb-4">
            O que posso construir para você.
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Da landing page ao sistema completo — entrego soluções que funcionam em produção e geram resultados reais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6 hover:border-[var(--color-border-hover)] transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-lg border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-hover)] transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors"
          >
            Ver todos os serviços
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
