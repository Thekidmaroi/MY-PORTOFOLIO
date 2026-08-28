import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MediaSlot } from "@/components/media-slot";
import { publications, profile } from "@/lib/data";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        kicker="Recherche"
        title="Publications"
        description="Travaux publiés sur la modélisation probabiliste et l'IA appliquée aux infrastructures énergétiques."
      />

      <Section>
        <div className="space-y-6">
          {publications.map((pub) => (
            <Card key={pub.citation}>
              {pub.photo && (
                <MediaSlot
                  src={pub.photo}
                  alt={`Photo — ${pub.venue}`}
                  variant="cover"
                  className="mb-5 aspect-video w-full"
                />
              )}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="mono-label text-xs text-accent">{pub.type}</p>
                {pub.status && (
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {pub.status}
                  </span>
                )}
              </div>
              <p className="mt-3 font-medium leading-relaxed">{pub.citation}</p>
              <p className="mt-2 text-sm text-muted">{pub.venue}</p>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                >
                  DOI: {pub.doi} →
                </a>
              )}
            </Card>
          ))}
        </div>

        {profile.links.researchgate.startsWith("#TODO") ? null : (
          <p className="mt-8 text-sm text-muted">
            Retrouve l&apos;ensemble de mes publications sur{" "}
            <a href={profile.links.researchgate} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              ResearchGate
            </a>
            .
          </p>
        )}
      </Section>
    </>
  );
}
