import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { MediaSlot } from "@/components/media-slot";
import { involvements } from "@/lib/data";

export const metadata: Metadata = { title: "Associations & Startups" };

// Certaines photos (captures d'écran de posts Instagram) ont le sujet cadré
// plus haut que le centre de l'image — sans ce recadrage, le crop par défaut
// (centré) coupe les têtes. On force ici le point de focus vertical pour ces
// photos précises.
const PHOTO_FOCUS: Record<string, string> = {
  "/OIM%20X%20BAIC.PNG": "50% 28%",
  "/OIM%20X%20BAIC%20(2).PNG": "50% 28%",
};

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
              {item.photos && item.photos.length > 0 ? (
                <div
                  className={`mb-5 grid gap-3 ${
                    item.photos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {item.photos.map((photo) => (
                    <MediaSlot
                      key={photo}
                      src={photo}
                      alt={`Photo — ${item.organization}`}
                      variant="cover"
                      className="aspect-[4/3] w-full"
                      objectPosition={PHOTO_FOCUS[photo]}
                      sizes={
                        item.photos!.length > 1
                          ? "(min-width: 640px) 420px, 100vw"
                          : "(min-width: 1024px) 800px, 100vw"
                      }
                    />
                  ))}
                </div>
              ) : (
                item.photo && (
                  <MediaSlot
                    src={item.photo}
                    alt={`Photo — ${item.organization}`}
                    variant="cover"
                    className="mb-5 aspect-[4/3] w-full"
                  />
                )
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
