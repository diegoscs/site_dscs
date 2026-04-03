import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navegação: [
      { label: "Serviços", href: "/servicos", external: false },
      { label: "Portfolio", href: "/portfolio", external: false },
      { label: "Sobre", href: "/sobre", external: false },
      { label: "Contato", href: "/contato", external: false },
    ],
    Sociais: [
      { label: "GitHub", href: "https://github.com/diegoscs", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/diego-candido-8b0850222/", external: true },
      { label: "WhatsApp", href: "https://wa.me/5511964197606", external: true },
    ],
  };

  return (
    <footer className="border-t border-[var(--color-border-dark)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/favicon-32x32.png"
                alt="DSCS Logo"
                className="w-6 h-6"
              />
              <span className="text-sm font-semibold text-[var(--color-text-dark)]">DSCS</span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Full Stack Developer & Data Engineer.<br />
              Transformando ideias em sistemas escaláveis.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] transition-colors"
                      >
                        {link.label}
                        <span className="sr-only">(abre em nova aba)</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-border-dark)] pt-6">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {currentYear} Diego Candido. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
