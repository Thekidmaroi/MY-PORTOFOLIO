import { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="mono-label mb-3 text-xs font-medium text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            )}
            {description && (
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
