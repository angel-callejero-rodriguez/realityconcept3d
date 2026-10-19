"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const STORAGE_KEY = "rc3d-cookie-consent";
export function CookieBanner() {
  const [choice, setChoice] = useState<string | null>("loading");
  const consent = useRef(false);
  consent.current = choice === "accepted";
  useEffect(() => {
    try {
      setChoice(localStorage.getItem(STORAGE_KEY));
    } catch {
      setChoice(null);
    }
    const reopen = () => setChoice(null);
    window.addEventListener("rc3d:cookie-preferences", reopen);
    return () => window.removeEventListener("rc3d:cookie-preferences", reopen);
  }, []);
  const choose = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* The current-page choice still applies when storage is unavailable. */
    }
    setChoice(value);
  };
  return (
    <>
      {choice === null && (
        <div
          className="cookie-banner"
          role="region"
          aria-label="Preferências de privacidade"
        >
          <span className="eyebrow">UM PEQUENO DETALHE.</span>
          <p>
            Usamos armazenamento essencial e, se aceitar, análise de navegação
            para melhorar o site. <Link href="/cookies">Saber mais</Link>
          </p>
          <div>
            <button onClick={() => choose("essential")}>Só essenciais</button>
            <button onClick={() => choose("accepted")}>Aceitar todos</button>
          </div>
        </div>
      )}
      {choice === "accepted" && process.env.NODE_ENV === "production" && (
        <Analytics beforeSend={(event) => (consent.current ? event : null)} />
      )}
    </>
  );
}

export function CookiePreferences() {
  return (
    <button
      className="cookie-preferences"
      onClick={() => window.dispatchEvent(new Event("rc3d:cookie-preferences"))}
    >
      Preferências de cookies
    </button>
  );
}
