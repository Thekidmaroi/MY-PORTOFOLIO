import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { MediaSlot } from "@/components/media-slot";
import { DimensionCard } from "@/components/dimension-card";
import { IconTile, type IconName } from "@/components/icon-tile";
import { profile, pillars } from "@/lib/data";
import type { Tone } from "@/components/badge";

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
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
          <div className="space-y-6">
            <MediaSlot
              src={profile.photo}
              alt={`Photo de ${profile.name}`}
              variant="cover"
              className="aspect-[4/5] w-full"
              objectPosition="50% 15%"
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
          <div>
            <p className="mono-label text-xs font-medium text-accent">Biographie</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{profile.name}</h2>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Ingénieur en <strong className="font-semibold text-foreground">Intelligence Artificielle &amp; Big Data</strong>, je
                suis <strong className="font-semibold text-foreground">AI Research Engineer</strong> spécialisé en{" "}
                <strong className="font-semibold text-foreground">modélisation stochastique et optimisation markovienne</strong>, à la
                croisée de la recherche appliquée et de l&apos;ingénierie de production. Auteur publié (Springer Nature, indexé Web
                of Science), mes travaux portent sur les smart grids, les smart cities et la modélisation des systèmes
                énergétiques — retrouvables dans mes{" "}
                <Link href="/publications" className="font-semibold text-accent hover:underline">
                  publications
                </Link>
                .
              </p>

              <p>
                Mon travail se situe à l&apos;intersection de la modélisation probabiliste (chaînes de Markov, filtrage) et de
                l&apos;apprentissage profond, appliquée à des problèmes concrets : anomalies sur données de capteurs, prédiction de
                durée de vie résiduelle, ou agents conversationnels fiables sur des données sensibles.
              </p>

              <p>
                Fort d&apos;une expérience à la fois en laboratoire de recherche et en déploiement industriel, je développe des{" "}
                <strong className="font-semibold text-foreground">pipelines d&apos;IA de bout en bout</strong> — de la formulation
                théorique et l&apos;optimisation bayésienne jusqu&apos;à l&apos;implémentation en production via des LLMs, avec
                Docker, CI/CD et monitoring.
              </p>

              <p>
                Depuis janvier 2025, j&apos;ai co-fondé{" "}
                <Link href="/associations-et-startups" className="font-semibold text-accent hover:underline">
                  Benin AI Community (BAIC)
                </Link>
                , une communauté dédiée à former, fédérer et connecter les talents en intelligence artificielle du Bénin, au
                service d&apos;un écosystème IA durable en Afrique de l&apos;Ouest.
              </p>

              <p className="italic">
                Je m&apos;intéresse particulièrement au développement de systèmes d&apos;IA hybrides pour les infrastructures
                énergétiques et urbaines, dans une perspective de recherche académique approfondie et de collaboration
                internationale.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <DimensionCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Approche" title="Comment je travaille">
        <div className="grid gap-6 sm:grid-cols-3">
          {(
            [
              {
                title: "Données d'abord",
                text: "Chaque modèle démarre par une compréhension fine du signal — capteurs, séries temporelles, corpus texte — avant tout choix d'architecture.",
                tone: "cyan",
                icon: "data",
              },
              {
                title: "Rigueur scientifique",
                text: "Hypothèses testées, métriques rapportées honnêtement (recall, RMSE, biais), résultats reproductibles et publiables.",
                tone: "purple",
                icon: "rigor",
              },
              {
                title: "Prêt pour la production",
                text: "Pipelines conteneurisés, testés, monitorés — pas de notebook isolé. CI/CD, garde-fous, observabilité dès la conception.",
                tone: "green",
                icon: "production",
              },
            ] satisfies { title: string; text: string; tone: Exclude<Tone, "neutral">; icon: IconName }[]
          ).map((item) => (
            <Card key={item.title}>
              <IconTile tone={item.tone} icon={item.icon} />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
