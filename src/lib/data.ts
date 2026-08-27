// Contenu structuré du CV — modifie ces objets pour mettre à jour le site.
// TODO(links): remplace les URLs marquées "#TODO" par les liens exacts (GitHub projets, ORCID, ResearchGate).
// TODO(médias): dépose les fichiers dans /public/images/... puis remplace le champ
// placeholder(...) correspondant par le chemin réel (ex: "/images/profil.jpg").
// Le composant <MediaSlot> bascule automatiquement sur l'image dès que le chemin change.
import { placeholder } from "./media";

export const profile = {
  name: "Marwane Houngnon",
  title: "AI Research Engineer",
  subtitle: "Recherche appliquée en intelligence artificielle",
  tagline:
    "Je conçois des systèmes d'IA appliquée fiables — de la détection d'anomalies aux agents RAG en production, nourris par une recherche publiée.",
  location: "Casablanca, Maroc",
  phone: "+212 641-364-029",
  email: "alberichoun.del@gmail.com",
  availability: "Ouvert aux missions de conseil, collaborations R&D et opportunités de doctorat",
  photo: placeholder("avatar", "/images/profil.jpg"),
  links: {
    github: "https://github.com/Thekidmaroi",
    linkedin: "https://linkedin.com/in/marwane-houngnon",
    orcid: "https://orcid.org/0009-0001-1644-7451",
    researchgate: "https://www.researchgate.net/profile/Marwane-Houngnon",
  },
  summary:
    "AI Research Engineer spécialisé en modélisation stochastique, optimisation markovienne et architectures hybrides probabilistes-neuronales. Auteur publié (Springer Nature, indexé Web of Science), j'ai contribué à des travaux de recherche sur les smart grids, les smart cities et la modélisation des systèmes énergétiques. Mes recherches visent à concevoir des systèmes d'IA interprétables et évolutifs, capables d'intégrer la modélisation probabiliste aux approches d'apprentissage profond. Fort d'une expérience à la fois en laboratoire de recherche et en déploiement industriel, je développe des pipelines d'IA de bout en bout — de la formulation théorique et l'optimisation bayésienne jusqu'à l'implémentation en production via des LLMs. Je m'intéresse particulièrement au développement de systèmes d'IA hybrides pour les infrastructures énergétiques et urbaines, dans une perspective de recherche académique approfondie et de collaboration internationale.",
  languages: [
    { name: "Français", level: "Bilingue" },
    { name: "Anglais", level: "Professionnel" },
  ],
};

export const pillars = [
  {
    title: "Ingénieur IA",
    text: "Je conçois et déploie des pipelines de machine learning de bout en bout — de la donnée brute aux dashboards de production, avec Docker, CI/CD et monitoring.",
  },
  {
    title: "Chercheur publié",
    text: "Je documente mes travaux de recherche appliquée (Springer Nature, indexé Web of Science) sur la modélisation probabiliste et les architectures hybrides.",
  },
  {
    title: "Bâtisseur de communauté",
    text: "Co-fondateur de Benin AI Community, je contribue à former et fédérer les talents IA au Bénin et en Afrique de l'Ouest.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
  logo: string;
};

export const experiences: Experience[] = [
  {
    role: "Data Scientist",
    company: "Atlantic Smart Technology",
    period: "Mars 2026 – Juillet 2026",
    location: "Kénitra, Maroc",
    logo: "/images/logos/atlantic-smart-technology.png",
    bullets: [
      "Conception et mise en place de modèles de machine learning pour la prédiction des flux de trésorerie, pour un client du secteur financier (OneUp).",
    ],
  },
  {
    role: "AI Developer",
    company: "Namaryk Concept",
    period: "Janvier 2026 – Mai 2026",
    location: "Casablanca, Maroc",
    logo: "/images/logos/namaryk-concept.png",
    bullets: [
      "Conception et intégration de solutions d'IA et d'automatisation pour optimiser les processus internes, améliorer la productivité et développer des outils de visualisation pour les clients.",
      "Développement de générateurs de rendu 3D par IA et de scripts d'automatisation pour la gestion des devis et des stocks.",
      "Exploitation des données clients pour personnaliser les offres et identifier des tendances au service de la stratégie commerciale.",
      "Déploiement, maintenance et formation des équipes à l'usage des outils développés ; veille technologique continue sur l'architecture et le design.",
    ],
  },
  {
    role: "Research Assistant",
    company: "CERMACH (SUP'RH)",
    period: "2025 – Mai 2026",
    location: "Casablanca, Maroc",
    logo: placeholder("logo", "/images/logos/cermach-suprh.png"),
    bullets: [
      "Contribution à des projets de recherche sur la modélisation stochastique et les architectures hybrides probabilistes-neuronales pour les systèmes énergétiques et les infrastructures intelligentes.",
      "Participation au développement de frameworks markoviens hybrides combinés à des algorithmes EM régularisés pour l'optimisation de smart grids en conditions de données manquantes.",
      "Contribution à la modélisation stochastique de l'allocation de ressources pour les villes intelligentes durables et les infrastructures 6G, et à la modélisation des transitions de gouvernance urbaine via HMM et données IoT publiques.",
      "Conception et évaluation de frameworks stochastiques hybrides pour la prévision de production éolienne — travaux publiés (Springer Nature, Taylor & Francis) et présentés en conférences internationales.",
    ],
  },
  {
    role: "AI Developer",
    company: "Web4Jobs",
    period: "Mai – Juillet 2025",
    location: "Casablanca, Maroc",
    logo: placeholder("logo", "/images/logos/web4jobs.png"),
    bullets: [
      "Conception et développement du système SOIPA : un moteur d'orientation piloté par IA prédisant l'adéquation employabilité/entrepreneuriat à partir de réponses psychométriques.",
      "Entraînement d'un modèle Random Forest sur un jeu de données synthétique de plus de 1000 profils d'apprenants, avec validation croisée.",
      "Développement d'une API Flask (servant le modèle) et d'une interface React collectant les données et affichant les résultats dynamiquement.",
      "Intégration de l'API Google Gemini pour des messages de coaching personnalisés ; documentation technique complète et architecture pensée pour la montée en charge.",
    ],
  },
  {
    role: "Data Scientist - AI Engineer",
    company: "Lydec",
    period: "Avril – Juillet 2025",
    location: "Casablanca, Maroc",
    logo: placeholder("logo", "/images/logos/lydec.png"),
    bullets: [
      "Développement et conteneurisation d'un LLM (Docker) et fine-tuning de modèles transformer (Mistral, DeepSeek) pour la génération automatique de texte, réduisant le temps de traitement des requêtes de 25%.",
      "Conception d'un pipeline de classification multi-labels pour l'annotation sémantique de réclamations clients, améliorant la précision du routage de 92%.",
      "Construction d'un dashboard de monitoring temps réel (Power BI) pour suivre la performance et la dérive des modèles.",
    ],
  },
  {
    role: "Analyste données commerciales",
    company: "Laboratoires Pharmaceutiques GALENICA",
    period: "Janvier – Avril 2025",
    location: "Casablanca, Maroc",
    logo: placeholder("logo", "/images/logos/galenica.png"),
    bullets: [
      "Conception de dashboards interactifs et d'analyses de performance avec Power BI et SQL Server pour optimiser la prise de décision stratégique.",
      "Automatisation de processus pour améliorer l'efficacité opérationnelle.",
      "Contribution à l'intégration de solutions d'intelligence artificielle dans les processus décisionnels.",
    ],
  },
  {
    role: "Statisticien (stage)",
    company: "Ministère du Numérique et de la Digitalisation du Bénin",
    period: "Avril – Juillet 2024",
    location: "Cotonou, Bénin",
    logo: placeholder("logo", "/images/logos/ministere-numerique-benin.png"),
    bullets: [
      "Participation à la collecte et au nettoyage de données d'enquêtes économiques nationales.",
      "Rédaction d'un mémoire de fin de licence professionnelle (Statistique Économique et Sectorielle) appliquant la modélisation SVAR (Structural Vector Autoregression) aux chocs économiques dans la zone UEMOA.",
      "Proposition de politiques de synchronisation économique visant à rendre la zone UEMOA plus optimale.",
    ],
  },
];

export type Project = {
  name: string;
  period?: string;
  stack: string[];
  githubUrl: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    name: "Industrial AI — Predictive Maintenance for Energy Systems",
    stack: ["Python", "Scikit-learn", "TensorFlow", "Streamlit", "Docker"],
    githubUrl: "#TODO-github-predictive-maintenance",
    description:
      "Pipeline de bout en bout de détection d'anomalies et de prédiction de durée de vie résiduelle (RUL) sur données de séries temporelles SCADA industrielles (capteurs hydrauliques SKAB + moteurs turbofan NASA CMAPSS), pour le monitoring d'infrastructures énergétiques.",
    bullets: [
      "Isolation Forest (Recall 0.87, ROC-AUC 0.73) et LSTM Autoencoder (Recall 0.96) pour la détection d'anomalies non supervisée sur un jeu de données de 8 capteurs et 37k points.",
      "LSTM à 2 couches pour la prédiction de RUL — RMSE 16.4 cycles, MAE 12.9 cycles sur 100 moteurs de test (NASA CMAPSS FD001). Biais moyen de prédiction : +1.9 cycle.",
      "Dashboard Streamlit interactif avec scoring de santé en temps réel, vue à double onglet (Détection d'anomalies + RUL), seuils d'alerte configurables, visualisations Plotly, déployable via Docker.",
      "Architecture modulaire src/, 12 tests unitaires pytest (100% de réussite), CI/CD via GitHub Actions.",
    ],
    metrics: [
      { label: "Recall (LSTM Autoencoder)", value: "0.96" },
      { label: "RMSE prédiction RUL", value: "16.4 cycles" },
      { label: "Tests unitaires", value: "12/12" },
    ],
  },
  {
    name: "Election Chat — EDAN 2025",
    stack: ["GPT-4o-mini", "FAISS", "DuckDB", "RAG", "Streamlit"],
    githubUrl: "#TODO-github-election-chat",
    description:
      "Agent conversationnel d'IA sur les résultats officiels des élections de l'Assemblée nationale ivoirienne (27 décembre 2025), avec des données sourcées directement auprès de la Commission Électorale Indépendante (CEI).",
    bullets: [
      "Architecture hybride SQL + RAG : agent Text-to-SQL (DuckDB) pour les requêtes structurées + index vectoriel FAISS pour la recherche sémantique, avec un routeur et un désambiguïsateur pilotés par LLM pour les entités ambiguës (rapidfuzz + unidecode).",
      "Jeu de données : 964 candidats, 170 députés élus, 186 circonscriptions, 32 partis politiques répartis sur 31 régions.",
      "Système à 4 niveaux : Text-to-SQL → Routeur hybride → Désambiguïsation → Observabilité & Évaluation. Suite d'évaluation : 11/11 (100%) sur les tests de recherche factuelle, agrégation, hors-périmètre et garde-fous.",
      "Garde-fous de production : SQL en lecture seule (SELECT uniquement), LIMIT 50, mots-clés d'injection bloqués, rejet des requêtes hors-périmètre, clés API via variables d'environnement uniquement.",
    ],
    metrics: [
      { label: "Suite d'évaluation", value: "11/11" },
      { label: "Candidats couverts", value: "964" },
      { label: "Circonscriptions", value: "186" },
    ],
  },
];

export type Publication = {
  type: "Chapitre de livre" | "Article de revue";
  citation: string;
  venue: string;
  status?: string;
  doi?: string;
};

export const publications: Publication[] = [
  {
    type: "Chapitre de livre",
    citation:
      "Bounnite, M. Y., & Houngnon, M. (2026). Missing-Data Robust EM for Incentive-Aware Markovian Smart Grid Optimization.",
    venue: "Artificial Intelligence and Cognitive Sciences for Emerging Technologies, Springer Nature (indexé Web of Science) — Marrakech, Maroc",
    doi: "10.1007/978-3-032-14430-0_42",
  },
  {
    type: "Article de revue",
    citation:
      "Houngnon, M., & Bounnite, M. Y. Dynamic Fusion of Hidden Markov Models and Neural Networks for Adaptive Pattern Recognition in Multimodal Environments.",
    venue: "Taylor & Francis Journal",
    status: "Accepté",
  },
];

export type ConferencePaper = {
  citation: string;
  location: string;
  status?: string;
  media: string;
};

export const conferencePapers: ConferencePaper[] = [
  {
    citation:
      "Houngnon, M., & Bounnite, M. Y. Markov-Optimized Resource Allocation for Sustainable 6G Mediterranean Smart Cities.",
    location: "Tétouan, Maroc",
    media: placeholder("cover", "/images/conferences/tetouan-6g.jpg"),
  },
  {
    citation:
      "Houngnon, M., & Bounnite, M. Y. Modeling Smart City Governance Transitions with HMM and Public IoT Data.",
    location: "Dakhla, Maroc",
    media: placeholder("cover", "/images/conferences/dakhla-smart-city.jpg"),
  },
  {
    citation:
      "Houngnon, M., & Bounnite, M. Y. AI-Enhanced Reliable Stochastic Modeling for Wind Power Forecasting: Addressing Practical Challenges in Hybrid Framework Deployment.",
    location: "Ifrane, Maroc",
    status: "Accepté",
    media: placeholder("cover", "/images/conferences/ifrane-wind-power.jpg"),
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  photo: string;
};

export const education: Education[] = [
  {
    degree: "Master's Degree — Data Science & Intelligence Artificielle",
    school: "SUP'RH — School of Management and Artificial Intelligence",
    period: "Octobre 2024 – Août 2026",
    location: "Casablanca, Maroc",
    photo: "/images/schools/suprh.png",
  },
  {
    degree: "B.Sc. en Mathématiques Appliquées, Économie",
    school: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    period: "Novembre 2021 – Juillet 2024",
    location: "Cotonou, Bénin",
    photo: "/images/schools/eneam.png",
  },
  {
    degree: "Programmation et analyse statistique avec R (RStudio)",
    school: "Chaire Internationale de Physique et Mathématiques UNESCO — Université d'Abomey-Calavi (UAC)",
    period: "Juillet – Septembre 2023",
    location: "Cotonou, Bénin",
    photo: placeholder("school", "/images/schools/unesco-uac.jpg"),
  },
];

export const certifications: string[] = [
  "Learning AI Through Visualization",
  "Computer Vision for Data Scientists",
  "Introducing SAP Business Data Cloud — Course Completion",
  "OpenCV Bootcamp (OpenCV University)",
  "Introducing Generative AI with AWS",
  "Africatechup Tour — Bourse Data Analyst",
];

export const skills = {
  "MLOps & Cloud": [
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "AWS ML Foundations",
    "Generative AI on AWS",
    "Power BI",
    "Model Deployment & Monitoring",
  ],
  "Frameworks & Librairies": [
    "Python (Expert)",
    "Scikit-learn",
    "TensorFlow/Keras",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Plotly",
    "Streamlit",
    "FAISS",
    "LangChain",
  ],
  "Domaines IA": [
    "Modélisation stochastique",
    "Optimisation markovienne",
    "Détection d'anomalies industrielles",
    "Maintenance prédictive",
    "Analyse de séries temporelles",
    "Systèmes RAG",
    "Agents Text-to-SQL",
    "Routage hybride SQL + RAG",
    "Désambiguïsation & clarification d'entités",
    "LLMs (GPT-4o, Mistral, DeepSeek)",
    "NLP",
    "Computer Vision",
    "Modèles de Markov",
  ],
  "Bases de données & Outils": [
    "DuckDB",
    "SQL",
    "Git",
    "Systèmes distribués",
    "Modélisation statistique",
    "pdfplumber",
  ],
  "Computer Vision": [
    "OpenCV (détection de visages, suivi de mouvement, pipelines de détection d'objets)",
    "Entraînement de modèles sur mesure",
    "Extraction de caractéristiques",
    "Inférence temps réel",
  ],
};

export type Involvement = {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  logo: string;
  url?: string;
};

export const involvements: Involvement[] = [
  {
    role: "Co-fondateur",
    organization: "Benin AI Community (BAIC)",
    period: "Depuis janvier 2025",
    location: "Cotonou, Bénin",
    logo: placeholder("logo", "/images/logos/benin-ai-community.png"),
    url: "https://beninaicommunity.com/",
    description:
      "Benin AI Community (BAIC) est un hub IA basé à Cotonou dont la mission est de former, fédérer, valoriser et connecter les talents en intelligence artificielle du Bénin, au service d'un écosystème IA durable en Afrique de l'Ouest. La communauté s'articule autour de quatre piliers : la formation (parcours intensifs et ateliers pratiques), la fédération (un réseau inclusif reliant talents, chercheurs et entreprises), la valorisation (mise en avant des projets et succès locaux) et la connexion (passerelles vers l'emploi et l'entrepreneuriat) — le tout porté par des meetups, challenges et sessions de mentorat réguliers. En tant que co-fondateur, je contribue à structurer ces initiatives et à créer des ponts entre les talents IA béninois et les opportunités de recherche et de collaboration à l'international.",
    tags: ["Communauté IA", "Afrique de l'Ouest", "Formation & mentorat", "Écosystème tech"],
  },
];
