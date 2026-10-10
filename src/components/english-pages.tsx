"use client";
import Link from "next/link";
import {Container} from "@/components/container";
import {projects,experiences,publications,skills,education,certifications,conferencePapers,interventions,involvements,profile} from "@/lib/data";
type Route="projets"|"experiences"|"publications"|"competences"|"conferences"|"interventions"|"formations"|"associations-et-startups"|"contact";
const heads:Record<Route,[string,string,string]>={
projets:["PROJECT ARCHIVE","Selected projects","Applied AI projects with documented methods, results, limitations, code and live demonstrations where available."],
experiences:["PROFESSIONAL JOURNEY","Experience","Working across research, data science, AI applications and real-world deployment."],
publications:["SCIENTIFIC RESEARCH","Publications","Research in probabilistic modelling, energy systems and applied artificial intelligence."],
competences:["TECHNICAL EXPERTISE","Skills","Methods, tools and technologies across the AI development lifecycle."],
conferences:["SCIENTIFIC EVENTS","Conferences","Research presentations and participation in scientific events across Morocco."],
interventions:["KNOWLEDGE SHARING","Talks and workshops","Sharing applied AI knowledge with communities, students and professionals."],
formations:["ACADEMIC BACKGROUND","Education","Academic degrees and professional certifications."],
"associations-et-startups":["COMMUNITY","Community and startups","Contributing to an inclusive and sustainable AI ecosystem."],
contact:["GET IN TOUCH","Contact","Open to applied AI projects, research collaborations and meaningful conversations."]
};
const projectSummaries=[
"An AI application for learning and interacting with Swahili, designed with accessible language technology.",
"Named entity recognition for Fon using fine-tuned multilingual transformers, with a documented evaluation protocol.",
"Industrial predictive maintenance and anomaly detection using sensor data and machine learning.",
"An election information assistant combining retrieval and structured data for trustworthy responses.",
"An actuarial pricing benchmark comparing statistical and machine learning models.",
"Graph-based detection of suspicious Bitcoin transactions with explainability and chronological evaluation."
];
const expSummaries=["Applied AI and data science work, including forecasting, modelling and decision-support solutions.","AI tools, workflow automation and practical software development.","Applied research on stochastic modelling and intelligent energy systems.","AI-assisted guidance and digital product development.","Language model pipelines and data engineering for operational use.","Data analysis and modelling in an applied professional environment.","Data science and analytical projects.","Public-sector digital transformation and data initiatives."];
const conferenceSummaries=[
"Scientific communication on Markov-optimised resource allocation for sustainable 6G smart cities.",
"Research presentation on smart-city governance transitions using hidden Markov models and public IoT data.",
"Research on stochastic modelling and wind power forecasting.",
"Participation in the Smart Green City Africa Forum at Mohammed VI Polytechnic University.",
"Participation in the ROADEM 2025 operational research conference."
];
const talkSummaries=[
"AI training webinar for the IKHONO community on moving from passive consumption to thoughtful creation.",
"Webinar on generative AI, organisational performance and governance.",
"Panel moderation and a practical prompt-engineering workshop at the first edition of L’Aube de l’IA."
];
const engagementSummaries=[
"Co-founder of Benin AI Community, supporting AI education, mentorship, collaboration and opportunities for talent in Benin and West Africa.",
"Jury member for an AI and migration hackathon in partnership with the International Organization for Migration in Morocco."
];
const englishSkills:Record<string,string>={"MLOps & Cloud":"MLOps & Cloud","Frameworks & Librairies":"Frameworks & Libraries","Domaines IA":"AI Domains","Bases de données & Outils":"Databases & Tools","Computer Vision":"Computer Vision"};
const englishSkill=(s:string)=>({
"Modélisation stochastique":"Stochastic modelling","Optimisation markovienne":"Markov optimisation","Détection d'anomalies industrielles":"Industrial anomaly detection","Maintenance prédictive":"Predictive maintenance","Analyse de séries temporelles":"Time-series analysis","Systèmes RAG":"Retrieval-augmented generation","Agents Text-to-SQL":"Text-to-SQL agents","Routage hybride SQL + RAG":"Hybrid SQL and RAG routing","Désambiguïsation & clarification d'entités":"Entity disambiguation","Modélisation statistique":"Statistical modelling","Systèmes distribués":"Distributed systems","Entraînement de modèles sur mesure":"Custom model training","Extraction de caractéristiques":"Feature extraction","Inférence temps réel":"Real-time inference","OpenCV (détection de visages, suivi de mouvement, pipelines de détection d'objets)":"OpenCV (face detection, motion tracking and object detection)"
} as Record<string,string>)[s]||s;
export function EnglishPage({route}:{route:Route}){
 const [eyebrow,title,description]=heads[route];
 return <main className="editorial"><section className="border-b border-border py-12 sm:py-16"><Container><p className="eyebrow mb-4">{eyebrow}</p><h1 className="section-display">{title}<span className="text-accent">.</span></h1><p className="mt-4 max-w-2xl text-muted">{description}</p></Container></section>
 <section className="py-12 sm:py-16"><Container>
 {route==="projets"&&<div className="grid gap-5 lg:grid-cols-2">{projects.map((p,i)=><article key={p.name} className="overflow-hidden rounded-3xl border border-border bg-surface"><div className={`project-art project-art-${i%4} p-7 text-white`}><p className="text-xs font-semibold uppercase tracking-widest text-white/70">Project / {String(i+1).padStart(2,"0")}</p><h2 className="mt-8 text-2xl font-semibold">{p.name}</h2></div><div className="p-7"><p className="text-sm leading-relaxed text-muted">{projectSummaries[i]||"Applied AI research and development project exploring real-world data and model evaluation."}</p><div className="mt-5 flex flex-wrap gap-2">{p.stack.slice(0,5).map(s=><span key={s} className="rounded-full border border-border px-3 py-1 text-xs">{s}</span>)}</div><div className="mt-6 flex gap-5 text-sm font-semibold"><a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-accent">Source code ↗</a>{p.demoUrl&&<a href={p.demoUrl} target="_blank" rel="noreferrer" className="text-accent">Live demo ↗</a>}</div></div></article>)}</div>}
 {route==="experiences"&&<div className="divide-y divide-border border-t border-border">{experiences.map((e,i)=><article key={i} className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr]"><h2 className="text-lg font-semibold">{e.company}</h2><p className="text-sm leading-relaxed text-muted">{expSummaries[i]||"Professional experience in applied AI, data science and software development."}</p></article>)}</div>}
 {route==="publications"&&<div className="grid gap-5">{publications.map((p,i)=><article key={i} className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">{p.type==="Chapitre de livre"?"BOOK CHAPTER":"JOURNAL ARTICLE"}{p.status?" · ACCEPTED":""}</p><h2 className="mt-3 font-semibold">{p.citation}</h2>{p.doi&&<a href={`https://doi.org/${p.doi}`} className="mt-4 inline-block text-sm text-accent" target="_blank" rel="noreferrer">View publication ↗</a>}</article>)}</div>}
 {route==="competences"&&<div className="grid gap-5 md:grid-cols-2">{Object.entries(skills).map(([category,items])=><article key={category} className="rounded-3xl border border-border bg-surface p-7"><h2 className="font-semibold">{englishSkills[category]||category}</h2><div className="mt-4 flex flex-wrap gap-2">{items.map(s=><span key={s} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">{englishSkill(s)}</span>)}</div></article>)}</div>}
 {route==="conferences"&&<div className="grid gap-5 md:grid-cols-2">{conferencePapers.map((p,i)=><article key={i} className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">EVENT / {i+1}</p><h2 className="mt-4 font-semibold">{conferenceSummaries[i]}</h2></article>)}</div>}
 {route==="interventions"&&<div className="grid gap-5 md:grid-cols-2">{interventions.map((p,i)=><article key={i} className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">TALK / {i+1}</p><h2 className="mt-4 font-semibold">{talkSummaries[i]}</h2></article>)}</div>}
 {route==="formations"&&<div className="space-y-7"><h2 className="text-2xl font-semibold">Academic qualifications</h2>{education.map((e,i)=><article key={i} className="border-b border-border pb-5"><h3 className="font-semibold">{["Master’s degree in Data Science and Artificial Intelligence","Bachelor’s degree in Applied Mathematics and Economics","Statistical programming and analysis with R"][i]}</h3><p className="mt-1 text-sm text-muted">{e.school}</p></article>)}<h2 className="pt-4 text-2xl font-semibold">Additional certifications</h2><div className="flex flex-wrap gap-3">{certifications.map(s=><span key={s} className="rounded-full border border-border px-4 py-2 text-sm">{s}</span>)}</div></div>}
 {route==="associations-et-startups"&&<div className="grid gap-5 md:grid-cols-2">{involvements.map((e,i)=><article key={i} className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">{i===0?"CO-FOUNDER":"JURY MEMBER"}</p><h2 className="mt-4 text-xl font-semibold">{e.organization}</h2><p className="mt-3 text-sm leading-relaxed text-muted">{engagementSummaries[i]}</p>{e.url&&<a href={e.url} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm font-semibold text-accent">Learn more ↗</a>}</article>)}</div>}
 {route==="contact"&&<div className="grid gap-5 md:grid-cols-2"><a href={`mailto:${profile.email}`} className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">EMAIL</p><p className="mt-3 font-semibold">{profile.email}</p></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">LINKEDIN</p><p className="mt-3 font-semibold">Connect on LinkedIn ↗</p></a><a href={profile.links.github} target="_blank" rel="noreferrer" className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">GITHUB</p><p className="mt-3 font-semibold">Explore my code ↗</p></a><a href={`tel:${profile.phone.replace(/[^+\\d]/g,"")}`} className="rounded-3xl border border-border bg-surface p-7"><p className="eyebrow">PHONE</p><p className="mt-3 font-semibold">{profile.phone}</p></a></div>}
 <div className="mt-12 border-t border-border pt-8"><Link href="/contact" className="editorial-button">Let’s collaborate ↗</Link></div>
 </Container></section></main>;
}
