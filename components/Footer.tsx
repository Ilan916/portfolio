import Link from "next/link";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Ilan. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/projects" className="hover:underline">Projets</Link>
          <Link href="/about" className="hover:underline">À propos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}


