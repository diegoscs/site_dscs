"use client";

import { useState } from "react";

type FormState = {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  tipoServico: string;
  descricaoProjeto: string;
  orcamento: string;
  prazo: string;
  tecnologias: string[];
  extras: string[];
};

type FormErrors = Partial<FormState>;

const tecnologiasDisponiveis = [
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "TypeScript",
  "Docker",
];

const extrasDisponiveis = [
  "Implementar testes",
  "Configurar CI/CD",
  "Suporte pós-launch",
  "Mentoria da equipe",
  "Code review",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormState>({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    tipoServico: "",
    descricaoProjeto: "",
    orcamento: "",
    prazo: "",
    tecnologias: [],
    extras: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.empresa.trim()) newErrors.empresa = "Empresa é obrigatória";
    if (!formData.telefone.trim()) newErrors.telefone = "Telefone é obrigatório";
    if (!formData.tipoServico) newErrors.tipoServico = "Selecione um tipo de serviço";
    if (!formData.descricaoProjeto.trim() || formData.descricaoProjeto.trim().length < 20) {
      newErrors.descricaoProjeto = "Descrição deve ter no mínimo 20 caracteres";
    }
    if (!formData.orcamento) newErrors.orcamento = "Selecione um orçamento estimado";
    if (!formData.prazo) newErrors.prazo = "Selecione um prazo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleTecnologiaChange = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      tecnologias: prev.tecnologias.includes(tech)
        ? prev.tecnologias.filter((t) => t !== tech)
        : [...prev.tecnologias, tech],
    }));
  };

  const handleExtraChange = (extra: string) => {
    setFormData((prev) => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter((e) => e !== extra)
        : [...prev.extras, extra],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        tipoServico: "",
        descricaoProjeto: "",
        orcamento: "",
        prazo: "",
        tecnologias: [],
        extras: [],
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
          ✓ Solicitação de orçamento enviada! Entrarei em contato em breve com uma proposta personalizada.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          ✗ Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.
        </div>
      )}

      {/* Seção 1: Informações Pessoais */}
      <div>
        <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-6">
          1. Informações Pessoais
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
              Nome *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none ${
                errors.nome
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
              }`}
            />
            {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
              }`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Empresa */}
          <div>
            <label htmlFor="empresa" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
              Empresa *
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nome da empresa"
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none ${
                errors.empresa
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
              }`}
            />
            {errors.empresa && <p className="text-red-400 text-xs mt-1">{errors.empresa}</p>}
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="telefone" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none ${
                errors.telefone
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
              }`}
            />
            {errors.telefone && <p className="text-red-400 text-xs mt-1">{errors.telefone}</p>}
          </div>
        </div>
      </div>

      {/* Seção 2: Detalhes do Projeto */}
      <div className="border-t border-[var(--color-border-dark)] pt-8">
        <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-6">
          2. Detalhes do Projeto
        </h3>
        <div className="space-y-6">
          {/* Tipo de Serviço */}
          <div>
            <label htmlFor="tipoServico" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
              Tipo de Serviço *
            </label>
            <select
              id="tipoServico"
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] focus:outline-none ${
                errors.tipoServico
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
              }`}
            >
              <option value="">Selecione um serviço</option>
              <option value="web-app">Web App / SaaS</option>
              <option value="data-engineering">Engenharia de Dados</option>
              <option value="sistemas-escala">Sistemas & Escala</option>
              <option value="consultoria">Consultoria Técnica</option>
              <option value="refatoracao">Refatoração / Otimização</option>
            </select>
            {errors.tipoServico && <p className="text-red-400 text-xs mt-1">{errors.tipoServico}</p>}
          </div>

          {/* Descrição do Projeto */}
          <div>
            <label htmlFor="descricaoProjeto" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
              Descrição do Projeto *
            </label>
            <textarea
              id="descricaoProjeto"
              name="descricaoProjeto"
              value={formData.descricaoProjeto}
              onChange={handleChange}
              placeholder="Descreva seu projeto, objetivos, desafios principais..."
              rows={5}
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none resize-none ${
                errors.descricaoProjeto
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
              }`}
            />
            {errors.descricaoProjeto && <p className="text-red-400 text-xs mt-1">{errors.descricaoProjeto}</p>}
          </div>

          {/* Grid com Orçamento e Prazo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Orçamento Estimado */}
            <div>
              <label htmlFor="orcamento" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                Orçamento Estimado *
              </label>
              <select
                id="orcamento"
                name="orcamento"
                value={formData.orcamento}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] focus:outline-none ${
                  errors.orcamento
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
                }`}
              >
                <option value="">Selecione uma faixa</option>
                <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
                <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                <option value="100k+">R$ 100.000+</option>
              </select>
              {errors.orcamento && <p className="text-red-400 text-xs mt-1">{errors.orcamento}</p>}
            </div>

            {/* Prazo */}
            <div>
              <label htmlFor="prazo" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                Prazo Desejado *
              </label>
              <select
                id="prazo"
                name="prazo"
                value={formData.prazo}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] focus:outline-none ${
                  errors.prazo
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
                }`}
              >
                <option value="">Selecione um prazo</option>
                <option value="1-2-meses">1-2 meses</option>
                <option value="2-4-meses">2-4 meses</option>
                <option value="4-6-meses">4-6 meses</option>
                <option value="6-meses">6+ meses</option>
              </select>
              {errors.prazo && <p className="text-red-400 text-xs mt-1">{errors.prazo}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Seção 3: Tecnologias & Extras */}
      <div className="border-t border-[var(--color-border-dark)] pt-8">
        <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-6">
          3. Tecnologias & Adicionais
        </h3>

        {/* Tecnologias */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-4">
            Tecnologias de interesse:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tecnologiasDisponiveis.map((tech) => (
              <label
                key={tech}
                className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-[var(--color-border-dark)] hover:border-[var(--color-primary)] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.tecnologias.includes(tech)}
                  onChange={() => handleTecnologiaChange(tech)}
                  className="w-4 h-4 accent-[var(--color-primary)]"
                />
                <span className="text-sm text-[var(--color-text-secondary)]">{tech}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-4">
            Serviços Adicionais:
          </p>
          <div className="space-y-3">
            {extrasDisponiveis.map((extra) => (
              <label
                key={extra}
                className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-[var(--color-border-dark)] hover:border-[var(--color-primary)] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.extras.includes(extra)}
                  onChange={() => handleExtraChange(extra)}
                  className="w-4 h-4 accent-[var(--color-primary)]"
                />
                <span className="text-sm text-[var(--color-text-secondary)]">{extra}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="border-t border-[var(--color-border-dark)] pt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path stroke="currentColor" strokeWidth="2" d="M12 2a10 10 0 0 1 0 20" />
              </svg>
              Enviando...
            </>
          ) : (
            "Solicitar Orçamento"
          )}
        </button>

        <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">
          Ou chame direto no{" "}
          <a
            href="https://wa.me/5511964197606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            WhatsApp
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </p>
      </div>
    </form>
  );
}
