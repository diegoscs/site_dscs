"use client";

import { useState } from "react";

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

type FormErrors = Partial<FormState>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido";
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = "Assunto é obrigatório";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter no mínimo 10 caracteres";
    }

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
    // Limpar erro ao usuário começar a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Aqui você poderia enviar para uma API
      // Por enquanto, simulamos um delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simular sucesso
      setSubmitStatus("success");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });

      // Reset mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
          ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          ✗ Erro ao enviar mensagem. Tente novamente ou envie via WhatsApp.
        </div>
      )}

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
          placeholder="Seu nome completo"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none ${
            errors.nome
              ? "border-red-500/50 focus:border-red-500"
              : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
          }`}
        />
        {errors.nome && (
          <p className="text-red-400 text-xs mt-1">{errors.nome}</p>
        )}
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
          placeholder="seu.email@exemplo.com"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none ${
            errors.email
              ? "border-red-500/50 focus:border-red-500"
              : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
          }`}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
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
        {errors.telefone && (
          <p className="text-red-400 text-xs mt-1">{errors.telefone}</p>
        )}
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="assunto" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
          Assunto *
        </label>
        <select
          id="assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] focus:outline-none ${
            errors.assunto
              ? "border-red-500/50 focus:border-red-500"
              : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
          }`}
        >
          <option value="">Selecione um assunto</option>
          <option value="web-app">Desenvolvimento Web</option>
          <option value="data-engineering">Engenharia de Dados</option>
          <option value="consultoria">Consultoria Técnica</option>
          <option value="outro">Outro</option>
        </select>
        {errors.assunto && (
          <p className="text-red-400 text-xs mt-1">{errors.assunto}</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Conte-me sobre seu projeto..."
          rows={5}
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none resize-none ${
            errors.mensagem
              ? "border-red-500/50 focus:border-red-500"
              : "border-[var(--color-border-dark)] focus:border-[var(--color-primary)]"
          }`}
        />
        {errors.mensagem && (
          <p className="text-red-400 text-xs mt-1">{errors.mensagem}</p>
        )}
      </div>

      {/* Submit Button */}
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
          "Enviar Mensagem"
        )}
      </button>

      {/* Footer Note */}
      <p className="text-xs text-[var(--color-text-muted)] text-center">
        Também pode me chamar no{" "}
        <a
          href="https://wa.me/5511964197606"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] hover:underline"
        >
          WhatsApp
          <span className="sr-only">(abre em nova aba)</span>
        </a>
        {" "}para uma resposta mais rápida.
      </p>
    </form>
  );
}
