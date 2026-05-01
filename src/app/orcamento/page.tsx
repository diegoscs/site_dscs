import type { Metadata } from "next";
import OrcamentoForm from "@/components/forms/OrcamentoForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento | Candido Digital",
  description:
    "Solicite um orçamento personalizado para seu projeto. Preencha o formulário e receba uma proposta em até 48h.",
  openGraph: {
    title: "Solicitar Orçamento | Candido Digital",
    description:
      "Preencha o formulário e receba uma proposta personalizada em até 48h.",
    images: [
      {
        url: new URL("/api/og?title=Solicitar Orçamento&description=Proposta personalizada em até 48h&category=Negócios", "https://candidodigital.com.br").toString(),
        width: 1200,
        height: 630,
        alt: "Solicitar Orçamento - Candido Digital",
      },
    ],
  },
};

export default function Orcamento() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Orçamento
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] mb-4 leading-[1.1]">
            Solicitar orçamento.
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Preencha o formulário com detalhes do seu projeto. Enviarei uma proposta personalizada em até 48h.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-12 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-2xl mx-auto">
          <OrcamentoForm />
        </div>
      </section>
    </>
  );
}
