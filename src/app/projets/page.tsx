import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projets" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Réalisations"
        title="Projets"
        description="Pipelines IA de bout en bout, de la donnée brute au dashboard de production."
      />

      <Section>
        <div className="space-y-8">
          {projects.map((project) => {
            const hasLink = !project.githubUrl.startsWith("#TODO");
            return (
              <Card key={project.name}>
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

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
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
