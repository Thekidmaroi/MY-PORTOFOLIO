import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { MediaSlot } from "@/components/media-slot";
import { involvements } from "@/lib/data";

export const metadata: Metadata = { title: "Associations & Startups" };

export default function InvolvementsPage() {
  return (
    <>
      <PageHeader
        kicker="Engagement"
        title="Associations & Startups"
        description="Mon implication au-delà des missions et de la recherche — dans la construction d'un écosystème IA local."
      />

      <Section>
        <div className="space-y-6">
          {involvements.map((item) => (
            <Card key={item.organization}>
              {item.photo && (
                <MediaSlot
                  src={item.photo}
                  alt={`Photo — ${item.organization}`}
                  variant="cover"
                  className="mb-5 aspect-video w-full"
                />
              )}
              <div className="flex flex-col gap-6 sm:flex-row">
                {item.logo && (
                  <MediaSlot
                    src={item.logo}
                    alt={`Logo ${item.organization}`}
                    variant="logo"
                    className="h-16 w-16 shrink-0"
                  />
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {item.role} — {item.organization}
                    </h3>
                    <span className="mono-label text-xs text-muted">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{item.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                    >
                      En savoir plus →
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
