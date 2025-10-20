type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const defaultItems: TimelineItem[] = [
  {
    period: "2024 - Présent",
    title: "Développeur Front-End Freelance",
    description:
      "Accompagnement de clients sur des projets Next.js/React, optimisation performances et accessibilité.",
  },
  {
    period: "2022 - 2024",
    title: "Front-End Developer",
    description:
      "Développement d'applications web avec React, TypeScript et mise en place de design systems.",
  },
  {
    period: "2019 - 2022",
    title: "Formation & Projets personnels",
    description:
      "Apprentissage approfondi de l'écosystème JavaScript, réalisation de projets open-source.",
  },
];

export function Timeline({ items = defaultItems }: { items?: TimelineItem[] }): JSX.Element {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-base font-semibold text-foreground/80">Parcours</h2>
      <ol className="mt-6 relative border-s border-foreground/10">
        {items.map((item, idx) => (
          <li key={idx} className="ms-6 pb-8">
            <span className="absolute -start-1.5 mt-2 size-3 rounded-full bg-foreground/70" />
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wide text-foreground/60">{item.period}</span>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}


