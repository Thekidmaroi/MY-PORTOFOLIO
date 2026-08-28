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
              <div
                className={`mb-5 grid gap-3 ${
                  paper.photos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {paper.photos.map((photo) => (
                  <MediaSlot
                    key={photo}
                    src={photo}
                    alt={`Photo — ${paper.location}`}
                    variant="cover"
                    className="aspect-[4/3] w-full"
                    sizes={
                      paper.photos.length > 1
                        ? "(min-width: 640px) 420px, 100vw"
                        : "(min-width: 1024px) 800px, 100vw"
                    }
                  />
                ))}
              </div>
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
