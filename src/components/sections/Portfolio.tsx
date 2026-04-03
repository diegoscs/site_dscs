"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AgendaCliente",
    description: "Plataforma de agendamento SaaS com calendário inteligente, automação de lembretes e integração com WhatsApp.",
    category: "Web Apps",
    tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
    metrics: {
      users: "2.5K+",
      uptime: "99.9%",
      load: "<100ms",
    },
    gradient: "from-blue-600 to-blue-900",
    link: "https://www.agendaclienteapp.com",
    external: true,
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description: "Data warehouse com ETL pipeline automatizado, dashboards em tempo real e alertas inteligentes baseados em ML.",
    category: "Data Engineering",
    tags: ["Python", "dbt", "Snowflake", "Prefect"],
    metrics: {
      queries: "50K+/dia",
      latency: "<2s",
      accuracy: "99.8%",
    },
    gradient: "from-purple-600 to-purple-900",
    link: "#",
    external: false,
  },
  {
    id: 3,
    title: "API Gateway Escalável",
    description: "Sistema de microsserviços com load balancing, rate limiting, autenticação OAuth2 e logging distribuído.",
    category: "Sistemas & Escala",
    tags: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"],
    metrics: {
      throughput: "100K req/s",
      latency: "<50ms",
      services: "12+",
    },
    gradient: "from-orange-600 to-red-900",
    link: "#",
    external: false,
  },
  {
    id: 4,
    title: "Plataforma E-Learning",
    description: "LMS completo com streaming de vídeos otimizado, progresso do usuário e gamificação integrada.",
    category: "Web Apps",
    tags: ["Next.js", "PostgreSQL", "AWS S3", "Redis"],
    metrics: {
      students: "5K+",
      courses: "50+",
      completion: "87%",
    },
    gradient: "from-green-600 to-emerald-900",
    link: "#",
    external: false,
  },
  {
    id: 5,
    title: "Sistema de Recomendação",
    description: "ML pipeline que analisa comportamento do usuário e recomenda produtos com precisão de 94% usando collaborative filtering.",
    category: "Data Engineering",
    tags: ["Python", "TensorFlow", "Airflow", "BigQuery"],
    metrics: {
      recommendations: "1M+/dia",
      ctr: "4.2%",
      revenue: "+28%",
    },
    gradient: "from-pink-600 to-rose-900",
    link: "#",
    external: false,
  },
  {
    id: 6,
    title: "Marketplace Multi-Tenant",
    description: "Plataforma marketplace com isolamento de dados por tenant, pagamentos em escrow e suporte a múltiplas moedas.",
    category: "Web Apps",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
    metrics: {
      vendors: "300+",
      transactions: "50K+/mês",
      gmv: "$2M+",
    },
    gradient: "from-indigo-600 to-blue-900",
    link: "#",
    external: false,
  },
];

const categories = ["Todos", "Web Apps", "Data Engineering", "Sistemas & Escala"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="portfolio-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Portfolio
          </p>
          <h2 id="portfolio-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15] mb-6">
            Projetos que <span className="text-[var(--color-primary)]">entregam resultados</span>.
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Trabalhos recentes em diferentes domínios: desde SaaS escalável até pipelines de dados complexos e sistemas distribuídos em produção.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] overflow-hidden hover:border-[var(--color-border-hover)] transition-all duration-300"
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-dark)] text-xs font-mono text-[var(--color-text-muted)] mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-[var(--color-bg-surface)] rounded-lg">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs text-[var(--color-text-muted)] capitalize mb-1">{key}</p>
                      <p className="text-sm font-semibold text-[var(--color-primary)]">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary-dark)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-text-dark)] transition-colors"
                  >
                    Ver projeto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)] cursor-default"
                  >
                    Case study em progresso
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
            Tem um projeto em mente?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre suas ideias e transformá-las em realidade. Cada projeto é uma oportunidade de criar algo extraordinário.
          </p>
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-blue-600 transition-colors"
          >
            Iniciar conversa
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
