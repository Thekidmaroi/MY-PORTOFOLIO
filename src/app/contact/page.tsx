import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}?subject=Mission%20de%20conseil%20IA`,
  },
  {
    label: "Téléphone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/Thekidmaroi",
    href: profile.links.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marwane-houngnon",
    href: profile.links.linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Travaillons ensemble"
        title="Contact"
        description="Disponible pour des missions de conseil en IA appliquée, des collaborations de recherche, ou toute discussion autour d'un projet de machine learning."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {channels.map((channel) => (
            <a key={channel.label} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Card className="h-full">
                <p className="mono-label text-xs text-accent">{channel.label}</p>
                <p className="mt-2 font-medium">{channel.value}</p>
              </Card>
            </a>
          ))}
        </div>

        <Card className="mt-6">
          <p className="mono-label text-xs text-accent">Localisation</p>
          <p className="mt-2 font-medium">{profile.location}</p>
          <p className="mt-1 text-sm text-muted">{profile.availability}</p>
        </Card>
      </Section>
    </>
  );
}
