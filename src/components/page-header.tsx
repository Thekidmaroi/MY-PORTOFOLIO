import { Container } from "./container";

export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-surface/50 py-16 sm:py-20">
      <Container>
        <p className="mono-label mb-3 text-xs font-medium text-accent">{kicker}</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
        )}
      </Container>
    </div>
  );
}
