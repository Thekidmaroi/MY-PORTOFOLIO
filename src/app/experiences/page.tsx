import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { MediaSlot } from "@/components/media-slot";
import { experiences } from "@/lib/data";

export const metadata: Metadata = { title: "Expériences" };

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        kicker="Parcours professionnel"
        title="Expériences"
        description="Du prototypage de recommandation à la mise en production de LLM conteneurisés."
      />

      <Section>
        <ol className="relative space-y-10 border-l border-border pl-8">
          {experiences.map((exp) => (
            <li key={exp.role + exp.company} className="relative">
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                  exp.current ? "bg-accent" : "bg-border"
                }`}
              />
              <div className="flex gap-4">
                <MediaSlot
                  src={exp.logo}
                  alt={`Logo ${exp.company}`}
                  variant="logo"
                  className="h-12 w-12 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="mono-label text-xs text-muted">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {exp.company} · {exp.location}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
