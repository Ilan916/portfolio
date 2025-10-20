import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez-moi pour discuter de votre projet.",
};

export default function ContactPage() {
  return (
    <div className="font-sans">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-foreground/70">Parlez-moi de votre projet. Je vous répondrai rapidement.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <aside className="md:col-span-1 sticky top-20">
            <div className="rounded-lg border border-foreground/10 p-4 space-y-3 text-sm">
              <a href="mailto:ilan.lallemand91@gmail.com" className="flex items-center gap-2 hover:underline" aria-label="Envoyer un email à Ilan">
                <MdEmail aria-hidden />
                <span>ilan.lallemand91@gmail.com</span>
              </a>
              <a href="tel:+33695767084" className="flex items-center gap-2 hover:underline" aria-label="Appeler Ilan">
                <FaPhone aria-hidden />
                <span>06 95 76 70 84</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ilan-lallemand/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
                aria-label="Profil LinkedIn d'Ilan"
              >
                <FaLinkedin aria-hidden />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Ilan916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
                aria-label="Profil GitHub d'Ilan"
              >
                <FaGithub aria-hidden />
                <span>GitHub</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
