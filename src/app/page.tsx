import Link from "next/link";
import { Container } from "@/components/container";
import { MediaSlot } from "@/components/media-slot";
import { profile, projects, experiences, publications, skills } from "@/lib/data";

const feature = projects.slice(0, 4);
const domains = [
  { number: "01", title: "Applied AI & Machine Learning", text: "Modéliser, expérimenter et déployer des systèmes qui répondent à des contraintes réelles.", tags: "Time series · Predictive maintenance · MLOps" },
  { number: "02", title: "Natural Language Processing", text: "Faire passer les modèles de langue du notebook à des expériences accessibles et utilisables.", tags: "Transformers · NER · African NLP" },
  { number: "03", title: "Research & Probabilistic Systems", text: "Relier méthodes probabilistes, validation scientifique et ingénierie reproductible.", tags: "Markov models · Hybrid AI · Publications" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <div className="editorial">
      <section className="relative overflow-hidden border-b border-border">
        <Container className="relative grid min-h-[530px] items-center gap-8 py-12 lg:grid-cols-[1.15fr_.85fr] lg:py-16">
          <div className="relative z-10">
            <p className="eyebrow mb-5"><span className="signal-dot" /> AVAILABLE FOR RESEARCH & COLLABORATION <span className="text-muted">/ CASABLANCA</span></p>
            <h1 className="display-title max-w-[860px]">Building AI<br />that goes <em>beyond</em><br />the lab<span className="text-accent">.</span></h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">Je suis <strong className="text-foreground">{profile.name}</strong>, ingénieur et chercheur en intelligence artificielle. J’explore, je construis et je déploie des systèmes d’IA — du NLP pour les langues africaines aux modèles prédictifs industriels.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/projets" className="editorial-button">Découvrir mon travail <Arrow diagonal /></Link>
              <Link href="/contact" className="editorial-button-secondary">Parlons d’un projet <Arrow /></Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs font-medium uppercase tracking-[.12em] text-muted">
              <span>AI / ML ENGINEERING</span><span className="text-accent">✳</span><span>RESEARCH</span><span className="text-accent">✳</span><span>OPEN SOURCE</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[350px] lg:max-w-[390px]">
            <div className="absolute -inset-8 rounded-full bg-accent/10 blur-[80px]" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl">
              <MediaSlot src={profile.photo} alt={`Portrait de ${profile.name}`} variant="cover" className="aspect-[5/5] w-full !rounded-none !border-0" sizes="(min-width: 1024px) 480px, 90vw" objectPosition="50% 18%" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/65 p-4 text-white backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold">Marwane Houngnon</span><span className="text-xs text-white/70">AI Research Engineer</span></div>
              </div>
            </div>
            <span className="absolute -right-5 top-12 hidden rounded-full border border-accent/30 bg-background px-5 py-3 text-xs font-semibold uppercase tracking-widest text-accent shadow-xl sm:block">Research ↗ Production</span>
          </div>
        </Container>
      </section>

      <div className="border-b border-border bg-surface/40">
        <Container className="grid grid-cols-2 gap-5 py-5 md:grid-cols-4">
          {[["IA + Data", "Ingénierie appliquée"],["2", "Chapitres Springer Nature"],["NLP", "Langues africaines"],["R&D", "Recherche et industrie"]].map(([value,label]) => (
            <div key={label} className="border-l-2 border-accent/40 pl-4"><p className="text-3xl font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted">{label}</p></div>
          ))}
        </Container>
      </div>

      <section className="py-14 sm:py-20" id="work">
        <Container>
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="eyebrow mb-4">01 / SELECTED WORK</p><h2 className="section-display">Selected <em>projects.</em></h2><p className="mt-4 max-w-xl text-muted">Des expériences concrètes, des résultats documentés et du code à explorer.</p></div>
            <Link href="/projets" className="inline-flex items-center gap-3 text-sm font-semibold text-accent hover:underline">Tous les projets <Arrow diagonal /></Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {feature.map((project, index) => (
              <article key={project.name} className="project-editorial group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                <div className={`relative flex min-h-40 flex-col justify-between overflow-hidden p-7 sm:min-h-44 sm:p-7 project-art project-art-${index % 4}`}>
                  <div className="relative z-10 flex justify-between gap-3"><span className="eyebrow !text-white/75">PROJECT / {String(index + 1).padStart(2,"0")}</span><span className="text-2xl text-white/75">↗</span></div>
                  <div className="relative z-10"><span className="block max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name.split(" — ")[0]}</span><span className="mt-2 block text-xs uppercase tracking-[.2em] text-white/65">{project.stack.slice(0,3).join("  /  ")}</span></div>
                  <div className="project-orb" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.metrics.slice(0,2).map(metric => <span key={metric.label} className="rounded-lg border border-border px-3 py-2 text-xs"><strong className="text-foreground">{metric.value}</strong> <span className="text-muted">{metric.label}</span></span>)}</div>
                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-7 text-sm font-semibold"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub ↗</a>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live demo ↗</a>}</div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface/50 py-14 sm:py-20">
        <Container>
          <p className="eyebrow mb-4">02 / WHAT I DO</p>
          <h2 className="section-display mb-8">At the intersection of <em>ideas & impact.</em></h2>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
            {domains.map(domain => <div key={domain.number} className="bg-background p-8 sm:p-10"><span className="eyebrow text-accent">{domain.number} / EXPERTISE</span><h3 className="mt-6 text-2xl font-semibold tracking-tight">{domain.title}</h3><p className="mt-4 min-h-16 text-sm leading-relaxed text-muted">{domain.text}</p><p className="mt-5 border-t border-border pt-5 text-xs font-medium text-accent">{domain.tags}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="eyebrow mb-4">03 / EXPERIENCE</p><h2 className="section-display">From research<br />to <em>real-world.</em></h2><p className="mt-6 max-w-sm text-muted">Une expérience entre laboratoires, industrie et déploiement de produits IA.</p><Link href="/experiences" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:underline">Explorer mon parcours <Arrow diagonal /></Link></div>
          <div className="divide-y divide-border border-t border-border">
            {experiences.slice(0,4).map(exp => <div key={exp.company + exp.period} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto]"><div><h3 className="text-lg font-semibold">{exp.role}</h3><p className="mt-1 text-sm text-muted">{exp.company} · {exp.location}</p></div><span className="text-xs font-medium text-accent">{exp.period}</span></div>)}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface/50 py-14">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div><p className="eyebrow mb-4">04 / RESEARCH</p><h2 className="section-display">Curiosity,<br /><em>published.</em></h2><p className="mt-5 max-w-md text-muted">La recherche n’est pas un chapitre à part : elle façonne ma manière de construire des systèmes fiables.</p><Link href="/publications" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:underline">Voir mes publications <Arrow diagonal /></Link></div>
          <div className="rounded-3xl border border-border bg-background p-8 sm:p-10"><p className="eyebrow mb-6">FEATURED PUBLICATION</p><h3 className="text-xl font-semibold leading-snug">{publications[0].citation}</h3><p className="mt-5 text-sm text-muted">{publications[0].venue}</p><div className="mt-7 flex flex-wrap gap-2">{Object.values(skills).flat().slice(0,6).map(skill=><span key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{skill}</span>)}</div></div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container><div className="relative overflow-hidden rounded-[2rem] bg-[#152c29] p-8 text-white sm:p-11"><div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[65px] border-[#2dd4bf]/15" aria-hidden="true" /><p className="eyebrow mb-6 !text-[#9de8dc]">05 / LET'S CONNECT</p><h2 className="relative max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Have a complex problem?<br /><em className="font-serif text-[#9de8dc]">Let's build something meaningful.</em></h2><p className="relative mt-6 max-w-xl text-white/70">Ouvert aux collaborations R&D, aux projets d’IA appliquée et aux opportunités de recherche.</p><div className="relative mt-9 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#baf5e9] px-6 py-3 font-semibold text-[#102d29] transition hover:bg-white">Me contacter ↗</Link><a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">GitHub ↗</a></div></div></Container>
      </section>
    </div>
  );
}
