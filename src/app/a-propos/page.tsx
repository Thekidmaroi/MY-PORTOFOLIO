import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MediaSlot } from "@/components/media-slot";
import { profile, pillars } from "@/lib/data";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="À propos"
        title="Qui je suis"
        description="Ingénieur R&D en IA, à la croisée de la recherche appliquée et de l'ingénierie de production."
      />

      <Section>
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="text-[15px] leading-relaxed text-muted">{profile.summary}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Mon travail se situe à l&apos;intersection de la modélisation probabiliste (chaînes de Markov,
              filtrage) et de l&apos;apprentissage profond, appliquée à des problèmes concrets : anomalies sur
              données de capteurs, prédiction de durée de vie résiduelle, ou agents conversationnels fiables sur
              des données sensibles. Je documente et publie une partie de cette recherche (Springer Nature, Web
              of Science), tout en gardant un ancrage fort dans le déploiement production — Docker, CI/CD,
              monitoring, garde-fous.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-border bg-surface-2 p-5">
                  <h3 className="text-sm font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <MediaSlot
              src={profile.photo}
              alt={`Photo de ${profile.name}`}
              variant="avatar"
              className="h-40 w-40"
            />

            <Card>
              <p className="mono-label text-xs text-accent">Informations</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted">Localisation</dt>
                  <dd className="mt-0.5 font-medium">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-muted">Disponibilité</dt>
                  <dd className="mt-0.5 font-medium">{profile.availability}</dd>
                </div>
                <div>
                  <dt className="text-muted">Langues</dt>
                  <dd className="mt-0.5 font-medium">
                    {profile.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </div>
      </Section>

      <Section eyebrow="Approche" title="Comment je travaille">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Données d'abord",
              text: "Chaque modèle démarre par une compréhension fine du signal — capteurs, séries temporelles, corpus texte — avant tout choix d'architecture.",
            },
            {
              title: "Rigueur scientifique",
              text: "Hypothèses testées, métriques rapportées honnêtement (recall, RMSE, biais), résultats reproductibles et publiables.",
            },
            {
              title: "Prêt pour la production",
              text: "Pipelines conteneurisés, testés, monitorés — pas de notebook isolé. CI/CD, garde-fous, observabilité dès la conception.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
