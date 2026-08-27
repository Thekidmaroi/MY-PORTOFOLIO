import type { Tone } from "./badge";

const toneStyle: Record<Exclude<Tone, "neutral">, { color: string; background: string }> = {
  cyan: { color: "var(--tone-cyan-fg)", background: "var(--tone-cyan-bg)" },
  purple: { color: "var(--tone-purple-fg)", background: "var(--tone-purple-bg)" },
  pink: { color: "var(--tone-pink-fg)", background: "var(--tone-pink-bg)" },
  green: { color: "var(--tone-green-fg)", background: "var(--tone-green-bg)" },
};

const icons = {
  engineering: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.5 3.5 4 9l1.4 1.4M14.5 3.5 20 9l-1.4 1.4M8 20l8-16"
    />
  ),
  research: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path strokeLinecap="round" d="M20 20l-4.5-4.5" />
    </>
  ),
  community: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path strokeLinecap="round" d="M2.5 19.5c.8-3 3-4.8 5.5-4.8s4.7 1.8 5.5 4.8M12.5 14.9c2.2.3 4 2 4.7 4.6" />
    </>
  ),
  data: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5-3.6 2.5-8 2.5-8-1.1-8-2.5Z" />
      <path strokeLinecap="round" d="M4 6.5V17c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V6.5M4 11.75c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
    </>
  ),
  rigor: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M4.2 7.8l2.6 1.5M17.2 14.7l2.6 1.5M4.2 16.2l2.6-1.5M17.2 9.3l2.6-1.5" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  production: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16V8l8-4 8 4v8l-8 4-8-4Zm8-4V4m0 8-8-4m8 4 8-4"
    />
  ),
} as const;

export type IconName = keyof typeof icons;

export function IconTile({ tone, icon }: { tone: Exclude<Tone, "neutral">; icon: IconName }) {
  const style = toneStyle[tone];
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl"
      style={{ backgroundColor: style.background, color: style.color }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        {icons[icon]}
      </svg>
    </div>
  );
}

