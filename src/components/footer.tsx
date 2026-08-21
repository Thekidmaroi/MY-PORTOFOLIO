import Link from "next/link";
import { profile } from "@/lib/data";
import { navLinks } from "@/lib/nav";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="border-t border-border py-6 text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
      </Container>
    </footer>
  );
}
