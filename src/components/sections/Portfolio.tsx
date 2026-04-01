/* Projetos no estilo "Changelog" do Linear — 4 cards em grid horizontal */

const projects = [
  {
    dot: "bg-primary",
    title: "Dashboard Administrativo",
    description: "Painel de vendas em tempo real com gestão de clientes e relatórios automáticos para e-commerce.",
    date: "Mar 2026",
    tag: "Web App",
  },
  {
    dot: "bg-purple-500",
    title: "Pipeline de Dados B2B",
    description: "ETL automatizado processando +1M registros/dia com monitoramento de qualidade e alertas.",
    date: "Jan 2026",
    tag: "Data Engineering",
  },
  {
    dot: "bg-green-500",
    title: "Plataforma SaaS Clínicas",
    description: "Sistema multi-tenant com agendamento, prontuário eletrônico e faturamento integrado via Stripe.",
    date: "Nov 2025",
    tag: "SaaS",
  },
  {
    dot: "bg-accent",
    title: "Bot de Atendimento",
    description: "Automação de suporte via WhatsApp com IA, triagem inteligente e integração com CRM.",
    date: "Set 2025",
    tag: "Automation",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">Projetos</h2>
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {projects.map((p) => (
            <div key={p.title} className="bg-bg p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${p.dot}`} />
                <span className="text-xs text-muted">{p.tag}</span>
              </div>
              <h3 className="font-semibold text-sm mb-3 leading-snug">{p.title}</h3>
              <p className="text-xs text-muted leading-relaxed flex-1">{p.description}</p>
              <p className="text-xs text-muted/50 mt-4 font-mono">{p.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
