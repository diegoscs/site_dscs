"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AgendaCliente",
    description: "Plataforma de agendamento SaaS com calendário inteligente, automação de lembretes e integração com WhatsApp.",
    category: "Web Apps",
    tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
    link: "https://www.agendaclienteapp.com",
    external: true,
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description: "Data warehouse com ETL pipeline automatizado, dashboards em tempo real e alertas inteligentes baseados em ML.",
    category: "Data Engineering",
    tags: ["Python", "dbt", "Snowflake", "Prefect"],
    link: null,
    external: false,
  },
  {
    id: 3,
    title: "API Gateway Escalável",
    description: "Sistema de microsserviços com load balancing, rate limiting, autenticação OAuth2 e logging distribuído.",
    category: "Sistemas & Escala",
    tags: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"],
    link: null,
    external: false,
  },
  {
    id: 4,
    title: "Plataforma E-Learning",
    description: "LMS completo com streaming de vídeos otimizado, progresso do usuário e gamificação integrada.",
    category: "Web Apps",
    tags: ["Next.js", "PostgreSQL", "AWS S3", "Redis"],
    link: null,
    external: false,
  },
  {
    id: 5,
    title: "Sistema de Recomendação",
    description: "ML pipeline que analisa comportamento do usuário e recomenda produtos com precisão de 94% usando collaborative filtering.",
    category: "Data Engineering",
    tags: ["Python", "TensorFlow", "Airflow", "BigQuery"],
    link: null,
    external: false,
  },
  {
    id: 6,
    title: "Marketplace Multi-Tenant",
    description: "Plataforma marketplace com isolamento de dados por tenant, pagamentos em escrow e suporte a múltiplas moedas.",
    category: "Web Apps",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
    link: null,
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
    <section id="portfolio" className="pt-24 pb-32 px-6" aria-labelledby="portfolio-heading">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Portfolio
          </p>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15]">
            Projetos recentes.
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150 ${
                activeCategory === cat
                  ? "bg-[var(--color-text-dark)] text-[var(--color-bg-dark)]"
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
              className="group rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6 hover:border-[var(--color-border-hover)] transition-colors duration-200 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-base font-semibold text-[var(--color-text-dark)] mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded border border-[var(--color-border-dark)] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary-dark)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link (only if external) */}
              {project.external && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-text-dark)] transition-colors"
                >
                  Ver projeto
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
