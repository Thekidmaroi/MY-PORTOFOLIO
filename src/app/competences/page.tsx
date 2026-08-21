import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { skills } from "@/lib/data";

export const metadata: Metadata = { title: "Compétences" };

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        kicker="Expertise technique"
        title="Compétences"
        description="Stack technique et domaines d'expertise, du prototypage à la mise en production."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <h3 className="font-semibold">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
