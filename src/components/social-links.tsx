import { profile } from "@/lib/data";

const items: { key: keyof typeof profile.links; label: string; icon: React.ReactNode }[] = [
  {
    key: "github",
    label: "GitHub",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: (
      <>
        <path d="M6.94 8.5H3.56V20.5h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 20.5h-3.37v-6.14c0-1.46-.03-3.35-2.04-3.35-2.04 0-2.36 1.6-2.36 3.24v6.25H9.36V8.5h3.24v1.64h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.07 2.26 4.07 5.21v7.5Z" />
      </>
    ),
  },
  {
    key: "orcid",
    label: "ORCID",
    icon: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <path strokeLinecap="round" d="M9 8h.01M9 11v6M13 11v6M13 11c2 0 3.2 1 3.2 3s-1.2 3-3.2 3" fill="none" stroke="var(--background)" strokeWidth="1.4" />
      </>
    ),
  },
  {
    key: "researchgate",
    label: "ResearchGate",
    icon: (
      <path d="M19.5 4.5c-1.9-1.9-5-1.9-6.9 0l-1.1 1.1 1.4 1.4 1.1-1.1c1.1-1.1 2.9-1.1 4 0 1.1 1.1 1.1 2.9 0 4l-4.2 4.2c-1.1 1.1-2.9 1.1-4 0-.6-.6-.8-1.3-.8-2h-2c0 1.2.5 2.4 1.4 3.4 1.9 1.9 5 1.9 6.9 0l4.2-4.2c1.9-1.9 1.9-5 0-6.8ZM4.5 19.5c1.9 1.9 5 1.9 6.9 0l1.1-1.1-1.4-1.4-1.1 1.1c-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4l4.2-4.2c1.1-1.1 2.9-1.1 4 0 .6.6.8 1.3.8 2h2c0-1.2-.5-2.4-1.4-3.4-1.9-1.9-5-1.9-6.9 0L4.5 12.7c-1.9 1.9-1.9 5 0 6.8Z" />
    ),
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => {
        const href = profile.links[item.key];
        if (!href) return null;
        return (
          <a
            key={item.key}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              {item.icon}
            </svg>
          </a>
        );
      })}
    </div>
  );
}

