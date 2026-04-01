"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Founder & CEO",
    company: "TechVentures",
    content:
      "Trabalhar com Diego foi transformador para nosso produto. Ele não é apenas um desenvolvedor — é um parceiro estratégico. A qualidade do código e a atenção aos detalhes foram impecáveis. Em 6 meses tínhamos um MVP robusto e escalável. Altamente recomendo.",
    rating: 5,
    avatar: "AS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CTO",
    company: "DataFlow Solutions",
    content:
      "Precisávamos de um data engineer que entendesse arquitetura e negócio. Diego entregou um pipeline ETL que reduziu nossos custos de infraestrutura em 40% e aumentou a velocidade das queries em 10x. Resultados mensuráveis.",
    rating: 5,
    avatar: "CM",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Marina Costa",
    role: "Product Manager",
    company: "FinTech Inovadora",
    content:
      "O que mais gostei foi a comunicação clara e transparência total durante o projeto. Diego sempre explicava as decisões técnicas de forma que mesmo não técnicos entendiam. O sistema que ele construiu escala sem problemas. Recomendo muito.",
    rating: 5,
    avatar: "MC",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Roberto Pereira",
    role: "Founder",
    company: "E-commerce Plus",
    content:
      "Começamos com uma ideia simples e Diego transformou em um marketplace robusto, seguro e performático. Agora temos 300+ vendedores na plataforma com crescimento mensal de 25%. Investimento que se pagou rapidamente.",
    rating: 5,
    avatar: "RP",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Juliana Reis",
    role: "Director of Operations",
    company: "Logística Global",
    content:
      "Integrar nossos dados de múltiplos ERP em um dashboard centralizado era complexo. Diego desenhou e implementou uma solução elegante e de fácil manutenção. Agora nossa equipe toma decisões 10x mais rápido baseada em dados reais.",
    rating: 5,
    avatar: "JR",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    name: "Felipe Gomes",
    role: "VP Engineering",
    company: "SaaS Startup",
    content:
      "Muito raro encontrar alguém que domina full stack + data + infraestrutura. Diego é exceção. Ajudou não só a entregar o produto, mas a estruturar a arquitetura para crescimento futuro. Vale muito a pena.",
    rating: 5,
    avatar: "FG",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-32 px-6 border-t border-[var(--color-border-dark)]" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Depoimentos
          </p>
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-dark)] leading-[1.15] mb-6">
            O que clientes dizem sobre trabalhar comigo.
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Testimonial */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-10 blur-3xl rounded-3xl`}
                aria-hidden="true"
              />

              {/* Card */}
              <div className="relative rounded-2xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-8 md:p-12">
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-[var(--color-primary)] mb-6 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C2 0 0 3.75 0 9.972C0 16.5 2.663 21 3 21z" />
                </svg>

                {/* Content */}
                <p className="text-lg md:text-xl text-[var(--color-text-dark)] font-medium leading-relaxed mb-8">
                  "{current.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-text-dark)]">
                      {current.name}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {current.role} @ {current.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Grid + Controls */}
          <div className="order-1 lg:order-2">
            {/* Mini Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                    idx === currentIndex
                      ? `border-[var(--color-primary)] bg-[var(--color-primary)] bg-opacity-10`
                      : "border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] hover:border-[var(--color-border-hover)]"
                  }`}
                  aria-label={`Depoimento de ${testimonial.name}`}
                  aria-current={idx === currentIndex ? "true" : "false"}
                >
                  <p className="font-semibold text-sm text-[var(--color-text-dark)] truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] truncate">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] truncate mt-1">
                    {testimonial.company}
                  </p>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] hover:border-[var(--color-border-hover)] transition-colors"
                aria-label="Depoimento anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-[var(--color-primary)] w-6"
                        : "bg-[var(--color-border-dark)]"
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-dark)] hover:border-[var(--color-border-hover)] transition-colors"
                aria-label="Próximo depoimento"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Counter */}
            <p className="text-xs text-[var(--color-text-muted)] text-center mt-6 font-mono">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-t border-[var(--color-border-dark)] pt-12 text-center">
          <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-4">
            Você pode ser o próximo.
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Dezenas de empresas já cresceram com soluções que desenvolvi. Sua história pode ser a próxima que compartilho aqui.
          </p>
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-blue-600 transition-colors"
          >
            Conversar agora
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
