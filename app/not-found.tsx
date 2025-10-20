import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Page introuvable</h1>
      <p className="mt-3 text-foreground/70">La page que vous cherchez n&apos;existe pas.</p>
      <div className="mt-6">
        <Link href="/" className="px-5 py-2 rounded-md bg-foreground text-background text-sm font-medium">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}


