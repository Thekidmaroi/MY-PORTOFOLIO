import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MediaSlot } from "@/components/media-slot";
import { education, certifications } from "@/lib/data";

export const metadata: Metadata = { title: "Formations" };

export default function EducationPage() {
  return (
    <>
      <PageHeader
        kicker="Parcours académique"
        title="Formations"
        description="Diplômes et certifications en intelligence artificielle et mathématiques appliquées."
      />

      <Section eyebrow="Diplômes" title="Formation académique">
        <div className="space-y-6">
          {education.map((ed) => (
            <Card key={ed.degree}>
              <div className="flex gap-4">
                <MediaSlot
                  src={ed.photo}
                  alt={`Photo ${ed.school}`}
                  variant="school"
                  className="h-16 w-16 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{ed.degree}</h3>
                    <span className="mono-label text-xs text-muted">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{ed.school}</p>
                  <p className="mt-1 text-sm text-muted">{ed.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Certifications" title="Formations complémentaires">
        <Card>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {cert}
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </>
  );
}
