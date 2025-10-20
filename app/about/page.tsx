// Remplissage détaillé du À propos: expériences, compétences et formation

export const metadata = {
  title: "À propos",
  description: "À propos du développeur front-end Ilan.",
};

export default function AboutPage() {
  return (
    <div className="font-sans">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">À propos</h1>
        <p className="mt-4 max-w-prose text-foreground/70">
          Je suis Ilan, développeur Front-End passionné, spécialisé en Next.js, TypeScript et Tailwind.
          J’aime concevoir des interfaces centrées sur l’utilisateur, performantes et accessibles.
        </p>
        <div className="mt-6">
          <a
            href="/CV-Ilan-Lallemand.pdf"
            download
            className="inline-block px-5 py-2 rounded-md border border-foreground/20 text-sm font-medium hover:bg-foreground/10"
          >
            Télécharger mon CV
          </a>
        </div>
      </section>

      {/* Expériences */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl font-semibold">Expérience</h2>
        <div className="mt-6 space-y-8">
          <article>
            <h3 className="text-base font-semibold">Groupama, Nanterre — Développeur Front End (Alternance)</h3>
            <p className="text-sm text-foreground/60">Septembre 2021 → Août 2025</p>
            <ul className="mt-3 list-disc ps-5 space-y-2 text-sm text-foreground/80">
              <li>Composants React/Next.js réutilisables intégrés au design system interne.</li>
              <li>Intégration de maquettes UX/UI en composants accessibles (a11y).</li>
              <li>Optimisation UX/UI via tests A/B (Adobe Target) pour améliorer navigation et engagement.</li>
              <li>Participation aux sprints Agile Scrum (planification, priorisation, revues).</li>
              <li>Prototype automatisé de déclaration de sinistre intégrant l’API GPT.</li>
              <li>Qualité logicielle: validation fonctionnelle, suivi d’anomalies, mise en production.</li>
            </ul>
            <p className="mt-2 text-sm"><span className="font-medium">Compétences utilisées:</span> React, Next.js, Tailwind CSS, JavaScript, TypeScript, Adobe Target, OpenAI API, Jira, Git, Agile/Scrum, accessibilité.</p>
          </article>

          <article>
            <h3 className="text-base font-semibold">Freelance, Paris — Développeur Full Stack</h3>
            <p className="text-sm text-foreground/60">Septembre 2021 → Aujourd’hui</p>
            <ul className="mt-3 list-disc ps-5 space-y-2 text-sm text-foreground/80">
              <li>Sites vitrines et applications sur‑mesure (TPE/PME) avec optimisation mobile et performance.</li>
              <li>Accompagnement client: UX/UI, accessibilité (WCAG), SEO.</li>
              <li>Gestion de projet: recueil besoin, développement, déploiement, maintenance.</li>
            </ul>
            <p className="mt-2 text-sm"><span className="font-medium">Compétences utilisées:</span> React, Next.js, Astro.js, Tailwind CSS, HTML5, CSS3, JavaScript, TypeScript, Node.js, SEO, accessibilité, conseil.</p>
          </article>

          <article>
            <h3 className="text-base font-semibold">Sc2 consulting, Neuilly‑sur‑Seine — Développeur Front End (Alternance)</h3>
            <p className="text-sm text-foreground/60">Septembre 2020 → Juillet 2021</p>
            <ul className="mt-3 list-disc ps-5 space-y-2 text-sm text-foreground/80">
              <li>Développement d’interfaces web dynamiques et responsives (HTML, CSS, PHP).</li>
              <li>Création de boutiques Shopify (thèmes, paiements, catalogue).</li>
              <li>Campagnes emailing (Mailchimp) et optimisation SEO.</li>
              <li>Optimisation technique et sémantique pour améliorer le référencement.</li>
            </ul>
            <p className="mt-2 text-sm"><span className="font-medium">Compétences utilisées:</span> HTML5, CSS3, PHP, Shopify, Mailchimp, SEO.</p>
          </article>
        </div>
      </section>

      {/* Compétences */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl font-semibold">Compétences</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-medium">Langages</h3>
            <p className="text-foreground/80 mt-1">Python, SQL, Go, JavaScript, TypeScript</p>
          </div>
          <div>
            <h3 className="font-medium">Frontend</h3>
            <p className="text-foreground/80 mt-1">React, Next.js, Vue</p>
          </div>
          <div>
            <h3 className="font-medium">Backend</h3>
            <p className="text-foreground/80 mt-1">Node.js, Express, NestJS</p>
          </div>
          <div>
            <h3 className="font-medium">Bases de données</h3>
            <p className="text-foreground/80 mt-1">PostgreSQL, MySQL, Prisma ORM</p>
          </div>
          <div>
            <h3 className="font-medium">DevOps & CI/CD</h3>
            <p className="text-foreground/80 mt-1">Docker, GitHub Actions, Ansible, Kubernetes, pipelines CI/CD</p>
          </div>
          <div>
            <h3 className="font-medium">Outils & APIs</h3>
            <p className="text-foreground/80 mt-1">Git, Jira, OpenAI API, Mistral API, Adobe Target, REST API, GraphQL, Figma</p>
          </div>
          <div>
            <h3 className="font-medium">Langues</h3>
            <p className="text-foreground/80 mt-1">Français (natif), Anglais (professionnel)</p>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl font-semibold">Formation</h2>
        <ul className="mt-4 space-y-3 text-sm text-foreground/80">
          <li>
            <span className="font-medium">EEMI, Paris — Master – Lead Développeur Full Stack</span> (2023 – 2025)
          </li>
          <li>
            <span className="font-medium">EEMI, Paris — Bachelor – Chef de Projet Digital</span> (2020 – 2023)
          </li>
        </ul>
      </section>
    </div>
  );
}


