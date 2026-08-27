import type { IconType } from "react-icons";
import {
  SiPython,
  SiDocker,
  SiGithubactions,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiStreamlit,
  SiLangchain,
  SiDuckdb,
  SiGit,
  SiOpencv,
} from "react-icons/si";

const TONES = ["cyan", "purple", "pink", "green"] as const;

const toneStyle: Record<(typeof TONES)[number], { color: string; background: string }> = {
  cyan: { color: "var(--tone-cyan-fg)", background: "var(--tone-cyan-bg)" },
  purple: { color: "var(--tone-purple-fg)", background: "var(--tone-purple-bg)" },
  pink: { color: "var(--tone-pink-fg)", background: "var(--tone-pink-bg)" },
  green: { color: "var(--tone-green-fg)", background: "var(--tone-green-bg)" },
};

// Ne couvre que les technologies nommées ayant un logo reconnaissable —
// les compétences plus abstraites (méthodo, concepts) restent en badge simple.
const techIcons: Record<string, IconType> = {
  "Python (Expert)": SiPython,
  "Scikit-learn": SiScikitlearn,
  "TensorFlow/Keras": SiTensorflow,
  PyTorch: SiPytorch,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Plotly: SiPlotly,
  Streamlit: SiStreamlit,
  LangChain: SiLangchain,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  DuckDB: SiDuckdb,
  Git: SiGit,
  "OpenCV (détection de visages, suivi de mouvement, pipelines de détection d'objets)": SiOpencv,
};

export function SkillChip({ skill, index }: { skill: string; index: number }) {
  const Icon = techIcons[skill];

  if (!Icon) {
    return (
      <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-foreground/80">
        {skill}
      </span>
    );
  }

  const tone = TONES[index % TONES.length];
  const style = toneStyle[tone];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 py-1 pl-1.5 pr-3 text-xs font-medium text-foreground/80">
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: style.background, color: style.color }}
      >
        <Icon className="h-3 w-3" />
      </span>
      {skill}
    </span>
  );
}

