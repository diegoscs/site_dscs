"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">DC</span>
          </div>
          <span className="font-semibold text-sm tracking-tight">DSCS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-text transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-1.5 bg-text hover:bg-white text-bg text-sm font-medium rounded-lg transition-colors"
          >
            Fale comigo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1.5 text-muted hover:text-text"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 space-y-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted hover:text-text transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg text-center"
          >
            Fale comigo
          </a>
        </div>
      )}
    </nav>
  );
}
