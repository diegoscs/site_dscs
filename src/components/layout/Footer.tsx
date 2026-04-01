import Link from "next/link";

const cols = [
  {
    title: "Serviços",
    links: [
      { label: "Web Apps", href: "#servicos" },
      { label: "Data Engineering", href: "#servicos" },
      { label: "Automações", href: "#servicos" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Processo", href: "#processo" },
      { label: "Contato", href: "https://wa.me/5511964197606" },
    ],
  },
  {
    title: "Conectar",
    links: [
      { label: "GitHub", href: "https://github.com/diegoscs" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/diego-candido-8b0850222/" },
      { label: "WhatsApp", href: "https://wa.me/5511964197606" },
      { label: "Email", href: "mailto:diego.candido.pro@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-[10px] font-bold font-display">DC</span>
              </div>
              <span className="text-sm font-semibold">DSCS</span>
            </Link>
            <p className="text-xs text-muted leading-relaxed">
              Sistemas escaláveis para times modernos.
            </p>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-text mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs text-muted hover:text-text transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-border">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Diego Candido. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted hover:text-text transition-colors">Privacidade</a>
            <a href="#" className="text-xs text-muted hover:text-text transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
