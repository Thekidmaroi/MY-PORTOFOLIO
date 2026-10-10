import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Badge } from "@/components/badge";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { SocialLinks } from "@/components/social-links";
import { MediaSlot } from "@/components/media-slot";
import { DimensionCard } from "@/components/dimension-card";
import { profile, experiences, projects, publications, skills, pillars } from "@/lib/data";

const stats = [
  { label: "Projets d'IA appliquée", value: "10+" },
  { label: "Publications indexées", value: "2" },
  { label: "Communications scientifiques", value: "3" },
  { label: "Tests unitaires en production", value: "12/12" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-20 sm:py-28 lg:py-32">
        <HeroBackdrop />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="animate-fade-up max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge tone="cyan">{profile.title.toUpperCase()}</Badge>
              <Badge tone="purple">RECHERCHE APPLIQUÉE</Badge>
              <Badge tone="pink">CO-FONDATEUR BAIC</Badge>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Je transforme la <span className="gradient-text">recherche IA</span> en solutions concrètes.
            </h1>
            <p className="mt-5 text-sm font-medium text-accent">{profile.name} · AI Research Engineer & Applied ML Engineer</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projets"
                className="gradient-btn rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                Explorer mes projets
              </Link>
              <Link
                href="/publications"
                className="rounded-full border border-border bg-surface/80 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:bg-surface-2"
              >
                Mes publications
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              {profile.location} · {profile.availability}
            </p>
            <SocialLinks className="mt-6" />
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl" aria-hidden="true" />
            <MediaSlot src={profile.photo} alt={`Portrait de ${profile.name}`} variant="cover" className="aspect-[4/5] w-full rounded-[2rem] shadow-2xl" sizes="(min-width: 1024px) 360px, 80vw" />
          </div>
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
        description="Recherche appliquée, modèles de machine learning et systèmes déployés : une approche qui relie rigueur scientifique et impact concret."
      />

      <Section eyebrow="Mes 3 dimensions" title="Ce que je fais">
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <DimensionCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Projets" title="Projets phares">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <Card key={project.name} className="group flex h-full flex-col overflow-hidden">
              {project.photo && <MediaSlot src={project.photo} alt={`Aperçu du projet ${project.name}`} variant="cover" className="mb-5 aspect-[16/9] w-full" sizes="(min-width: 640px) 460px, 100vw" />}
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-auto pt-6"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-accent/40 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10">Explorer le projet ↗</a></div>
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
            className="gradient-btn shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Me contacter
          </Link>
        </Card>
      </Section>
    </>
  );
}
