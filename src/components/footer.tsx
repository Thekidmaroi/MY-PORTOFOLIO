import Link from "next/link";
import { profile } from "@/lib/data";
import { Container } from "./container";
import { Badge } from "./badge";
import { SocialLinks } from "./social-links";

const groups = [
  {
    title: "Profil",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/competences", label: "Compétences" },
      { href: "/formations", label: "Formations" },
    ],
  },
  {
    title: "Travaux",
    links: [
      { href: "/experiences", label: "Expériences" },
      { href: "/projets", label: "Projets" },
      { href: "/publications", label: "Publications" },
    ],
  },
  {
    title: "Contenus",
    links: [
      { href: "/conferences", label: "Conférences" },
      { href: "/associations-et-startups", label: "Associations & Startups" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
          <SocialLinks className="mt-5" />
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <p className="mono-label mb-4 text-xs font-medium text-muted">{group.title}</p>
            <ul className="space-y-2.5 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col gap-4 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge tone="cyan">{profile.location.toUpperCase()}</Badge>
          <Badge tone="purple">IA · RECHERCHE · PRODUCTION</Badge>
        </div>
      </Container>
    </footer>
  );
}
