import Link from "next/link";

const servicos = [
  {
    id: 1,
    titulo: "Web Apps & SaaS",
    descricao: "Aplicações web escaláveis e plataformas SaaS que crescem com seu negócio",
    icone: "🌐",
    tecnologias: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
    beneficios: [
      "Performance otimizada (FCP < 1s)",
      "Autenticação e autorização seguras",
      "Escalabilidade automática",
      "Backups e disaster recovery",
      "Monitoramento 24/7",
    ],
    casoUso: "Plataformas de agendamento, dashboards administrativos, marketplaces, redes sociais, aplicações internas",
    preco: "R$ 15.000 - R$ 100.000+",
    prazo: "6-16 semanas",
    destaque: true,
  },
  {
    id: 2,
    titulo: "Engenharia de Dados",
    descricao: "Pipelines ETL robustos, data warehouses e analytics que transformam dados em decisões",
    icone: "📊",
    tecnologias: ["Python", "dbt", "Airflow", "Snowflake", "BigQuery"],
    beneficios: [
      "Pipelines automatizados e confiáveis",
      "Redução de 40-60% em custos de infra",
      "Dados em tempo real",
      "Dashboards inteligentes",
      "Governança de dados",
    ],
    casoUso: "Data warehouses, dashboards analíticos, BI, sistemas de recomendação, detecção de fraude",
    preco: "R$ 10.000 - R$ 50.000",
    prazo: "4-12 semanas",
    destaque: false,
  },
  {
    id: 3,
    titulo: "Sistemas & Escala",
    descricao: "Arquitetura de microsserviços, orquestração e infraestrutura production-ready",
    icone: "⚙️",
    tecnologias: ["Docker", "Kubernetes", "RabbitMQ", "Redis", "Node.js"],
    beneficios: [
      "Arquitetura escalável e resiliente",
      "Suporte a 100K+ requisições/segundo",
      "Latência < 50ms",
      "Recuperação automática de falhas",
      "Observabilidade completa",
    ],
    casoUso: "Plataformas de alta disponibilidade, processamento em tempo real, message queues, APIs escaláveis",
    preco: "R$ 20.000 - R$ 80.000",
    prazo: "8-16 semanas",
    destaque: false,
  },
  {
    id: 4,
    titulo: "Consultoria Técnica",
    descricao: "Auditorias, code reviews, estratégia arquitetural e mentoria de equipes",
    icone: "💡",
    tecnologias: ["Análise de código", "Arquitetura", "Performance", "Segurança"],
    beneficios: [
      "Identificação de gargalos",
      "Melhorias de performance (até 10x)",
      "Redução de debt técnico",
      "Mentoria especializada",
      "Documentação técnica",
    ],
    casoUso: "Auditorias de código, otimização de performance, refatorações, planejamento técnico",
    preco: "R$ 5.000 - R$ 30.000",
    prazo: "2-8 semanas",
    destaque: false,
  },
];

const processoServico = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao: "Análise profunda do projeto, desafios, tecnologias atuais e objetivos",
  },
  {
    numero: "02",
    titulo: "Proposta",
    descricao: "Plano detalhado com timeline, recursos, tecnologias e estimativa de custo",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento",
    descricao: "Sprints de 2 semanas com daily updates, code reviews e testes contínuos",
  },
  {
    numero: "04",
    titulo: "QA & Deploy",
    descricao: "Testes completos, otimização de performance e deploy seguro em produção",
  },
  {
    numero: "05",
    titulo: "Suporte",
    descricao: "Suporte técnico, monitoramento e melhorias baseadas em dados reais",
  },
];

export default function Servicos() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Serviços
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color-text-dark)] mb-6 leading-[1.1]">
            Expertise em <span className="text-[var(--color-primary)]">full stack</span>, <span className="text-[var(--color-primary)]">dados</span> e <span className="text-[var(--color-primary)]">escala</span>.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Oferço uma gama completa de serviços para transformar suas ideias em soluções reais, escaláveis e de impacto mensurável.
          </p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                className={`rounded-xl border transition-all p-8 ${
                  servico.destaque
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                    : "border-[var(--color-border-dark)] bg-[var(--color-bg-dark)]"
                }`}
              >
                {/* Badge Destaque */}
                {servico.destaque && (
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)]/20 border border-[var(--color-primary)] text-xs font-mono text-[var(--color-primary)] mb-4">
                    ⭐ Mais Popular
                  </span>
                )}

                {/* Ícone + Título */}
                <div className="text-4xl mb-4">{servico.icone}</div>
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {servico.descricao}
                </p>

                {/* Tecnologias */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                    Tecnologias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {servico.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary-dark)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefícios */}
                <div className="mb-6 p-4 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-dark)]">
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                    Benefícios
                  </p>
                  <ul className="space-y-2">
                    {servico.beneficios.slice(0, 3).map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Caso de Uso */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-2">
                    Ideal para
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {servico.casoUso}
                  </p>
                </div>

                {/* Preço e Prazo */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-[var(--color-bg-secondary-dark)] border border-[var(--color-border-dark)]">
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Investimento</p>
                    <p className="font-bold text-[var(--color-primary)]">{servico.preco}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Prazo</p>
                    <p className="font-bold text-[var(--color-primary)]">{servico.prazo}</p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/orcamento"
                  className="w-full block text-center py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
              Como funciona
            </p>
            <h2 className="text-4xl font-bold text-[var(--color-text-dark)]">
              Meu processo com você
            </h2>
          </div>

          <div className="space-y-8">
            {processoServico.map((passo, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg border-2 border-[var(--color-primary)] bg-[var(--color-bg-dark)] flex items-center justify-center font-bold text-[var(--color-primary)]">
                    {passo.numero}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-2">
                    {passo.titulo}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {passo.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Dúvidas frequentes
          </h2>

          <div className="space-y-6">
            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Qual é o tempo mínimo para um projeto?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Depende do escopo. Projetos pequenos podem ser entregues em 2-4 semanas. Sistemas mais complexos levam 8-16 semanas.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Vocês fazem manutenção após o launch?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Sim! Ofereço planos de suporte com SLA garantido. Monitoramento 24/7, bug fixes e melhorias contínuas.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Posso contratar por hora ou é apenas projeto fechado?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Ambos! Ofereço projetos fechados (mais comum) ou contratos por hora/mensal para trabalhos contínuos.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Como é a comunicação durante o projeto?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Comunicação diária via email/Slack. Reuniões semanais para sync, code reviews biweekly, e updates contínuos no GitHub.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
            Vamos começar seu projeto?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Estou pronto para transformar suas ideias em realidade. Faça uma consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orcamento"
              className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5511964197606"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              Chamar no WhatsApp
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
