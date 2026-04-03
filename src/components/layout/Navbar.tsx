"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/servicos", label: "Serviços" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border-dark)] bg-[var(--color-bg-dark)]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/favicon-32x32.png"
              alt="DSCS Logo"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold tracking-tight text-[var(--color-text-dark)]">
              DSCS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5511964197606"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-sm font-medium bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors duration-150"
            >
              Fale Comigo
              <span className="sr-only">(abre em nova aba)</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] hover:bg-[var(--color-bg-surface)] transition-colors"
              aria-label="Alternar menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-[var(--color-border-dark)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511964197606"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-text-dark)] text-[var(--color-bg-dark)]"
            >
              Fale Comigo
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
