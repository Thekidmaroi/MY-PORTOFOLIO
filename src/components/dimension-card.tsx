import Link from "next/link";
import { Card } from "./card";
import { Badge, type Tone } from "./badge";
import { IconTile, type IconName } from "./icon-tile";

export function DimensionCard({
  category,
  title,
  text,
  tone,
  icon,
  cta,
}: {
  category: string;
  title: string;
  text: string;
  tone: Exclude<Tone, "neutral">;
  icon: IconName;
  cta?: { label: string; href: string };
}) {
  return (
    <Card className="flex h-full flex-col">
      <IconTile tone={tone} icon={icon} />
      <div className="mt-4">
        <Badge tone={tone}>{category.toUpperCase()}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{text}</p>
      {cta && (
        <Link
          href={cta.href}
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50"
        >
          {cta.label} <span aria-hidden>→</span>
        </Link>
      )}
    </Card>
  );
}

