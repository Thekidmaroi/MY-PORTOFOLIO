import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { MediaSlot } from "@/components/media-slot";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projets" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Réalisations"
        title="Projets"
        description="Applications déployées, recherche NLP et systèmes de machine learning : découvrez les réalisations, les technologies et les résultats vérifiables."
      />

      <Section>
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => {
            const hasLink = !project.githubUrl.startsWith("#TODO");
            return (
              <Card key={project.name} className="flex h-full flex-col">
                {project.photo && (
                  <MediaSlot
                    src={project.photo}
                    alt={`Illustration — ${project.name}`}
                    variant="cover"
                    className="mb-5 aspect-[16/9] w-full"
                    sizes="(min-width: 1024px) 800px, 100vw"
                  />
                )}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {hasLink ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mono-label shrink-0 text-xs font-medium text-accent hover:underline"
                    >
                      Voir sur GitHub →
                    </a>
                  ) : (
                    <span className="mono-label shrink-0 text-xs text-muted">Repo bientôt public</span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-lg font-semibold text-accent sm:text-xl">{metric.value}</p>
                      <p className="mt-1 text-xs text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
