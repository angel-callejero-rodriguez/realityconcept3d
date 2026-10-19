"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submitting = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("pending");
    setErrorMessage("");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1db4675d-8922-474e-ba38-f2c1c5ce8e49");
    formData.append(
      "subject",
      `Novo Pedido de Demo: ${formData.get("company")}`,
    );
    formData.append("from_name", "Reality Concept 3D");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("submission-failed");
      setStatus("success");
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch {
      setStatus("error");
      setErrorMessage(
        "Não foi possível enviar o pedido. Tente novamente ou escreva-nos diretamente por email.",
      );
    } finally {
      submitting.current = false;
    }
  }
  if (status === "success")
    return (
      <div
        className="contact-success"
        role="status"
        tabIndex={-1}
        ref={resultRef}
      >
        <span className="success-icon">
          <Check size={28} />
        </span>
        <span className="eyebrow">O PRIMEIRO PASSO ESTÁ DADO.</span>
        <h3>
          Vamos dar vida
          <br />à sua <em>ideia.</em>
        </h3>
        <p>
          Recebemos o seu pedido. Entraremos em contacto em até 24 horas úteis.
        </p>
        <button className="text-link" onClick={() => setStatus("idle")}>
          Enviar outro pedido <ArrowUpRight size={17} />
        </button>
      </div>
    );
  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="contact-form"
      aria-label="Pedido de demonstração"
      aria-busy={status === "pending"}
    >
      <input
        type="checkbox"
        name="botcheck"
        hidden
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">
            O seu nome <span>*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Como se chama?"
          />
        </div>
        <div className="form-field">
          <label htmlFor="company">
            Marca / Empresa <span>*</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            minLength={2}
            maxLength={120}
            placeholder="A sua marca"
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="email">
          Email profissional <span>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          placeholder="nome@empresa.com"
        />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="store">
            Website <span>opcional</span>
          </label>
          <input
            id="store"
            name="store"
            type="url"
            autoComplete="url"
            maxLength={300}
            placeholder="https://"
          />
        </div>
        <div className="form-field">
          <label htmlFor="catalog">
            Dimensão do catálogo <span>*</span>
          </label>
          <select id="catalog" name="catalog" required defaultValue="">
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="1-50">1 – 50 produtos</option>
            <option value="51-200">51 – 200 produtos</option>
            <option value="201-1000">201 – 1000 produtos</option>
            <option value="1000+">Mais de 1000 produtos</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">
          O que tem em mente? <span>opcional</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          maxLength={2000}
          placeholder="Um produto, um catálogo, uma ideia…"
        />
      </div>
      <label className="consent-label">
        <input type="checkbox" name="consent" required />
        <span>
          Li e aceito a <Link href="/privacidade">Política de Privacidade</Link>{" "}
          e os <Link href="/termos">Termos de Serviço</Link>.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="form-error">
          {errorMessage}
        </p>
      )}
      <button
        className="submit-button"
        type="submit"
        disabled={status === "pending"}
      >
        {status === "pending" ? (
          <>
            <span>A enviar o seu pedido</span>
            <Loader2 className="spinner" size={20} />
          </>
        ) : (
          <>
            <span>Vamos dar o primeiro passo</span>
            <ArrowUpRight size={23} strokeWidth={1.5} />
          </>
        )}
      </button>
      <p className="form-footnote">
        Demonstração gratuita. Uma proposta à medida da sua marca.
      </p>
    </form>
  );
}
