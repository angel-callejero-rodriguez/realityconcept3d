import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contacto" className="contact page-container">
      <div className="contact-intro" data-reveal>
        <span className="eyebrow">
          <span className="status-dot" />
          VAMOS CRIAR ALGO COM DIMENSÃO.
        </span>
        <h1>
          O próximo
          <br />
          passo é <em>seu.</em>
        </h1>
        <p>
          Mostre-nos uma peça. Conte-nos uma ideia.
          <br />
          Nós mostramos-lhe o que é possível.
        </p>
        <a
          className="contact-email"
          href="mailto:rodriguez@realityconcept3d.com"
        >
          rodriguez@realityconcept3d.com <ArrowUpRight size={19} />
        </a>
        <div className="contact-note">
          <span>UMA PRIMEIRA CONVERSA, SEM COMPROMISSO.</span>
          <span>Respondemos em até 24 horas úteis.</span>
        </div>
      </div>
      <div className="contact-form-wrap" data-reveal>
        <ContactForm />
      </div>
    </section>
  );
}
