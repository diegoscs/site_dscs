"use client";

import QuoteForm from "@/components/forms/QuoteForm";
import Link from "next/link";

const etapasOrcamento = [
  {
    numero: "01",
    titulo: "Análise",
    descricao: "Recebo sua solicitação e analiso o escopo do projeto em detalhes.",
  },
  {
    numero: "02",
    titulo: "Diagnóstico",
    descricao: "Faço perguntas estratégicas para entender desafios e objetivos.",
  },
  {
    numero: "03",
    titulo: "Proposta",
    descricao: "Envio plano detalhado com timeline, tecnologias e investimento.",
  },
  {
    numero: "04",
    titulo: "Decisão",
    descricao: "Você revisa e decide. Posso ajustar conforme necessário.",
  },
];

const fatoresPreco = [
  {
    icone: "📏",
    titulo: "Escopo",
    descricao: "Funcionalidades, complexidade técnica, integrações externas",
  },
  {
    icone: "⏰",
    titulo: "Timeline",
    descricao: "Projetos mais rápidos custam mais. Prazos maiores = economia",
  },
  {
    icone: "👥",
    titulo: "Equipe",
    descricao: "1 developer vs time completo. Depende das suas necessidades",
  },
  {
    icone: "🔧",
    titulo: "Tecnologias",
    descricao: "Stack recomendado vs preferência pessoal. Impacta complexidade",
  },
  {
    icone: "🧪",
    titulo: "Testes & QA",
    descricao: "Coverage completo, testes E2E, staging. Garantia de qualidade",
  },
  {
    icone: "📊",
    titulo: "Suporte",
    descricao: "Incluir manutenção pós-launch, monitoring, bug fixes",
  },
];

export default function Orcamento() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-widest">
            Orçamento
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color-text-dark)] mb-6 leading-[1.1]">
            Solicitar Orçamento
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Preencha o formulário abaixo com detalhes do seu projeto. Farei uma análise completa e enviarei uma proposta personalizada em até 48h.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Como funciona o processo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapasOrcamento.map((etapa) => (
              <div
                key={etapa.numero}
                className="rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)] p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-[var(--color-primary)] flex items-center justify-center font-bold text-[var(--color-primary)] mx-auto mb-4">
                  {etapa.numero}
                </div>
                <h3 className="font-bold text-[var(--color-text-dark)] mb-2">
                  {etapa.titulo}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {etapa.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fatores de Preço */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            O que afeta o preço
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fatoresPreco.map((fator, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-4xl flex-shrink-0">
                  {fator.icone}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text-dark)] mb-2">
                    {fator.titulo}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {fator.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-12 text-center">
            Perguntas sobre orçamento
          </h2>

          <div className="space-y-4">
            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Qual é o orçamento mínimo?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Projetos pequenos começam em <strong>R$ 5.000</strong>. Mas recomendo investir pelo menos <strong>R$ 15.000</strong> para um MVP sólido com qualidade.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Posso pagar em parcelas?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Sim! Geralmente estruturo assim: 30% no início, 40% na metade, 30% na entrega. Posso ajustar conforme a situação.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Quanto custa manter o projeto em produção?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Ofereço pacotes de suporte: <strong>Bronze (R$ 500/mês)</strong> para bug fixes, <strong>Silver (R$ 1.500/mês)</strong> com monitoring, <strong>Gold (R$ 3.000+/mês)</strong> com features novas.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Se sair mais caro que o esperado, como resolvemos?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Trabalho com projetos de escopo fixo. Se surgirem mudanças, documentamos como <strong>change requests</strong> e avaliamos impacto junto. Transparência total durante o desenvolvimento.
              </p>
            </details>

            <details className="group border border-[var(--color-border-dark)] rounded-lg p-6 bg-[var(--color-bg-dark)] cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text-dark)]">
                Tem desconto para projetos longos?
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Sim! Projetos 6+ meses têm desconto de 15-20%. Contratos de retainer (mensal) também têm valores mais favoráveis.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="py-20 px-6 text-center border-t border-[var(--color-border-dark)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">
            Próximos passos
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Depois de enviar o formulário, você receberá:
          </p>
          <ul className="text-left space-y-3 mb-10 max-w-lg mx-auto">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 text-[var(--color-primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">
                Confirmação de recebimento em até 2h
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 text-[var(--color-primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">
                Proposta detalhada em até 48h
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 text-[var(--color-primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">
                Reunião para tirar dúvidas (sem compromisso)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 text-[var(--color-primary)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[var(--color-text-secondary)]">
                Ajustes na proposta se necessário
              </span>
            </li>
          </ul>

          <div className="inline-flex gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              Voltar ao Formulário
            </button>
            <Link
              href="/contato"
              className="px-6 py-3 rounded-lg border border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              Prefiro Conversar Primeiro
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
