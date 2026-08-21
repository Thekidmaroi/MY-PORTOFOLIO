# Portfolio — Marwane Houngnon

Site portfolio personnel, présentant un profil de consultant en IA industrielle (AI Research Engineer).
Construit avec Next.js (App Router), TypeScript et Tailwind CSS v4.

## Pages

- `/` — Accueil
- `/a-propos` — À propos
- `/experiences` — Expériences
- `/projets` — Projets
- `/competences` — Compétences
- `/publications` — Publications
- `/conferences` — Conférences
- `/formations` — Formations
- `/contact` — Contact

## Contenu

Tout le contenu (bio, expériences, projets, publications...) est centralisé dans
`src/lib/data.ts`. C'est le seul fichier à modifier pour mettre à jour les informations du CV.

Quelques liens sont encore en attente (marqués `#TODO` dans `data.ts`) :
- Lien du dépôt GitHub du projet "Predictive Maintenance"
- Lien du dépôt GitHub du projet "Election Chat"
- Profil ORCID
- Profil ResearchGate

## Développement

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Build de production

```bash
npm run build
npm run start
```

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) (recommandé pour Next.js) —
il suffit de connecter le dépôt GitHub. Fonctionne aussi sur tout hébergeur Node.js.
