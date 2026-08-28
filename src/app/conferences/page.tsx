import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MediaSlot } from "@/components/media-slot";
import { conferencePapers } from "@/lib/data";

export const metadata: Metadata = { title: "Conférences" };

export default function ConferencesPage() {
  return (
    <>
      <PageHeader
        kicker="Communications scientifiques"
        title="Conférences"
        description="Travaux présentés lors de conférences scientifiques au Maroc, sur les villes intelligentes et l'énergie."
      />

      <Section>
        <div className="space-y-6">
          {conferencePapers.map((paper) => (
            <Card key={paper.citation}>
              <MediaSlot
                src={paper.media}
                alt={`Photo — ${paper.location}`}
                variant="cover"
                                className="mb-5 aspect-[4/3] w-full"
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="mono-label text-xs text-accent">Communication</p>
                {paper.status && (
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {paper.status}
                  </span>
                )}
              </div>
              <p className="mt-3 font-medium leading-relaxed">{paper.citation}</p>
              <p className="mt-2 text-sm text-muted">{paper.location}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
