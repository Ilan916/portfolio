const technologies = [
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Zustand" },
  { name: "React Query" },
  { name: "Jest" },
  { name: "Playwright" },
];

export function TechGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
      <h2 className="text-base font-semibold text-foreground/80">Compétences & Outils</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="rounded-md border border-foreground/10 px-3 py-2 text-sm text-foreground/80 bg-background/60"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
}


