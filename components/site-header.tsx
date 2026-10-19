"use client";

import { useEffect, useRef, useState } from "react";
import { Globe2, Menu, X } from "lucide-react";
import { Logo } from "./logo";
const links = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#introducao", label: "O que fazemos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#modelos", label: "Demo ao vivo" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [open]);
  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <span className="header-language" aria-label="Idioma: Português">
          <Globe2 size={14} /> PT
        </span>
        <a className="button button-primary header-contact" href="/contacto">
          Marcar uma demo
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Navegação móvel"
        inert={!open}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="/contacto" onClick={() => setOpen(false)}>
          Marcar uma demo
        </a>
      </nav>
    </header>
  );
}
