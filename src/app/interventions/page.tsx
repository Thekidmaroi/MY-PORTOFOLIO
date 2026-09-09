import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MediaSlot } from "@/components/media-slot";
import { interventions } from "@/lib/data";

export const metadata: Metadata = { title: "Interventions" };

export default function InterventionsPage() {
  return (
    <>
      <PageHeader
        kicker="Partage de savoir"
        title="Interventions"
        description="Webinaires et formations animés pour des communautés et clubs autour de l'IA."
      />

      <Section>
        <div className="space-y-6">
          {interventions.map((item) => (
            <Card key={item.citation}>
              <div
                className={`mb-5 grid gap-3 ${
                  item.photos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {item.photos.map((photo) => (
                  <MediaSlot
                    key={photo}
                    src={photo}
                    alt={`Photo — ${item.location}`}
                    variant="cover"
                    className="aspect-[4/3] w-full"
                    sizes={
                      item.photos.length > 1
                        ? "(min-width: 640px) 420px, 100vw"
                        : "(min-width: 1024px) 800px, 100vw"
                    }
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="mono-label text-xs text-accent">Intervention</p>
                {item.status && (
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {item.status}
                  </span>
                )}
              </div>
              <p className="mt-3 font-medium leading-relaxed">{item.citation}</p>
              <p className="mt-2 text-sm text-muted">{item.location}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

