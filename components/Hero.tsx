import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <div className="grid md:grid-cols-2 gap-10 items-center my-auto">
        <div>
          <p className="text-sm uppercase tracking-widest text-foreground/60">Développeur Front-End</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
            Construire des interfaces web rapides, accessibles et élégantes
            TEST du Commit normalement corrigé eze
          </h1>
          <p className="mt-4 text-foreground/70 max-w-prose">

          modif pout un test encore de commit
            Je conçois et développe des expériences utilisateur performantes avec Next.js, TypeScript et Tailwind CSS. Passionné par la qualité, l’accessibilité et les bonnes pratiques.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/projects" className="px-5 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90">
              Voir mes projets
            </Link>
            <Link href="/contact" className="px-5 py-2 rounded-md border border-foreground/20 text-sm font-medium hover:bg-foreground/10">
              Me contacter
            </Link>
            <a
              href="/CV-Ilan-Lallemand.pdf"
              download
              className="px-5 py-2 rounded-md border border-foreground/20 text-sm font-medium hover:bg-foreground/10"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/home-image.jpg"
            alt="Illustration accueil"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}


