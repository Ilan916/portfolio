import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export function ContactBar() {
  return (
    <div className="bg-foreground/5 border-b border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-center text-sm">
        <div className="flex items-center gap-6">
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
        </div>
      </div>
    </div>
  );
}


