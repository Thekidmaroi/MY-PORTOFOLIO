export type Tone = "cyan" | "purple" | "pink" | "green" | "neutral";

const toneStyle: Record<Exclude<Tone, "neutral">, { color: string; background: string; borderColor: string }> = {
  cyan: {
    color: "var(--tone-cyan-fg)",
    background: "var(--tone-cyan-bg)",
    borderColor: "var(--tone-cyan-border)",
  },
  purple: {
    color: "var(--tone-purple-fg)",
    background: "var(--tone-purple-bg)",
    borderColor: "var(--tone-purple-border)",
  },
  pink: {
    color: "var(--tone-pink-fg)",
    background: "var(--tone-pink-bg)",
    borderColor: "var(--tone-pink-border)",
  },
  green: {
    color: "var(--tone-green-fg)",
    background: "var(--tone-green-bg)",
    borderColor: "var(--tone-green-border)",
  },
};

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  if (tone === "neutral") {
    return (
      <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-foreground/80">
        {children}
      </span>
    );
  }

  const style = toneStyle[tone];

  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
      style={{ color: style.color, backgroundColor: style.background, borderColor: style.borderColor }}
    >
      {children}
    </span>
  );
}
