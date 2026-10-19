import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { CookiePreferences } from "./cookie-banner";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Os seus produtos, em 3D.
              <br />
              No espaço de quem os vai escolher.
            </p>
          </div>
          <nav aria-label="Explorar">
            <h2>EXPLORAR</h2>
            <a href="/#como-funciona">Como funciona</a>
            <a href="/#introducao">O que fazemos</a>
            <a href="/#modelos">Demo ao vivo</a>
            <a href="/#simulador">Simulador de impacto</a>
          </nav>
          <nav aria-label="Soluções">
            <h2>SOLUÇÕES</h2>
            <a href="/#como-funciona">Modelação de mobiliário</a>
            <a href="/#modelos">Visualização 3D</a>
            <a href="/#modelos">Realidade Aumentada</a>
            <a href="/#como-funciona">Integração na sua loja</a>
          </nav>
          <nav aria-label="Informação">
            <h2>INFORMAÇÃO</h2>
            <a href="/#faq">Perguntas frequentes</a>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos de serviço</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/creditos">Créditos dos modelos</Link>
          </nav>
          <div className="footer-contact">
            <h2>CONTACTO</h2>
            <a className="footer-demo" href="/contacto">
              Marcar uma demo <ArrowUpRight size={14} />
            </a>
            <a
              className="footer-email"
              href="mailto:rodriguez@realityconcept3d.com"
            >
              rodriguez@
              <br />
              realityconcept3d.com
            </a>
            <p>PORTUGUÊS · PT</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Reality Concept 3D</span>
          <CookiePreferences />
          <a
            href="https://www.livroreclamacoes.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Livro de Reclamações <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
