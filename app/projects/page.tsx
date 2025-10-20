import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export const metadata = {
  title: "Projets",
  description: "Découvrez mes projets de développement web et applications.",
};

export default function ProjectsPage() {
  return (
    <div className="font-sans">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Mes Projets</h1>
        <p className="mt-4 text-foreground/70 max-w-prose">
          Découvrez une sélection de mes projets de développement web, applications et outils.
        </p>
      </section>
      
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
