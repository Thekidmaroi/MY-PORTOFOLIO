import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { profile, experiences, projects, publications, skills } from "@/lib/data";

const stats = [
  { label: "Projets d'IA appliquée", value: "2+" },
  { label: "Publications indexées", value: "2" },
  { label: "Communications scientifiques", value: "3" },
  { label: "Tests unitaires en production", value: "12/12" },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-border py-20 sm:py-28">
        <Container>
          <div className="animate-fade-up max-w-3xl">
            <p className="mono-label mb-4 text-xs font-medium text-accent">
              {profile.title} · {profile.subtitle}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bonjour, je suis <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projets"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50"
              >
                Me contacter
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              {profile.location} · {profile.availability}
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Résumé"
        title="De la recherche à l'IA appliquée, en production"
        description={profile.summary}
      />

      <Section eyebrow="Projets" title="Projets phares">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name}>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <Link href="/projets" className="mt-8 inline-block text-sm font-medium text-accent hover:underline">
          Tous les projets →
        </Link>
      </Section>

      <Section eyebrow="Parcours" title="Expérience récente">
        <div className="space-y-6">
          {experiences.slice(0, 2).map((exp) => (
            <Card key={exp.role + exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-xs text-muted">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{exp.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{exp.bullets[0]}</p>
            </Card>
          ))}
        </div>
        <Link href="/experiences" className="mt-8 inline-block text-sm font-medium text-accent hover:underline">
          Tout le parcours →
        </Link>
      </Section>

      <Section eyebrow="Recherche" title="Dernière publication">
        <Card>
          <p className="mono-label text-xs text-accent">{publications[0].type}</p>
          <p className="mt-3 font-medium leading-relaxed">{publications[0].citation}</p>
          <p className="mt-2 text-sm text-muted">{publications[0].venue}</p>
        </Card>
        <Link href="/publications" className="mt-8 inline-block text-sm font-medium text-accent hover:underline">
          Toutes les publications →
        </Link>
      </Section>

      <Section eyebrow="Expertise" title="Compétences clés">
        <div className="flex flex-wrap gap-2">
          {Object.values(skills)
            .flat()
            .slice(0, 14)
            .map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
        </div>
        <Link href="/competences" className="mt-8 inline-block text-sm font-medium text-accent hover:underline">
          Voir toutes les compétences →
        </Link>
      </Section>

      <Section>
        <Card className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Un projet d&apos;IA appliquée à concrétiser ?</h3>
            <p className="mt-2 text-sm text-muted">
              Discutons de votre cas d&apos;usage — maintenance prédictive, agents RAG, ou pipelines ML production-ready.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
          >
            Me contacter
          </Link>
        </Card>
      </Section>
    </>
  );
}
