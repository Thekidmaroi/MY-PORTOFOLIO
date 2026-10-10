"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const primary = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/experiences", label: "Parcours" },
  { href: "/publications", label: "Recherche" },
];
const more = [
  { href: "/competences", label: "Compétences" },
  { href: "/conferences", label: "Conférences" },
  { href: "/interventions", label: "Interventions" },
  { href: "/formations", label: "Formations" },
  { href: "/associations-et-startups", label: "Associations & startups" },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] w-full max-w-6xl items-center justify-between gap-5 px-6">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3" aria-label="Marwane Houngnon, accueil">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-sm font-black tracking-tighter text-background">MH<span className="text-accent">.</span></span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">Marwane <span className="font-normal text-muted">Houngnon</span></span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {primary.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`rounded-full px-3 py-2 text-sm transition hover:bg-surface-2 ${pathname === link.href ? "font-semibold text-accent" : "text-muted hover:text-foreground"}`}>{link.label}</Link>)}
          <div className="group relative">
            <button type="button" className="rounded-full px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground" aria-label="Autres rubriques">Plus +</button>
            <div className="invisible absolute right-0 top-full w-60 translate-y-2 rounded-2xl border border-border bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {more.map(link => <Link key={link.href} href={link.href} className="block rounded-xl px-4 py-2.5 text-sm text-muted hover:bg-surface-2 hover:text-foreground">{link.label}</Link>)}
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition hover:opacity-85 sm:inline-flex">Contact ↗</Link>
          <button type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden">{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Navigation mobile" className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-6 py-4 lg:hidden"><div className="mx-auto grid max-w-6xl gap-1">{[...primary,...more,{href:"/contact",label:"Contact"}].map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)} className={`rounded-xl px-4 py-3 text-sm ${pathname === link.href ? "bg-surface-2 font-semibold text-accent" : "text-muted hover:bg-surface-2"}`}>{link.label}</Link>)}</div></nav>}
    </header>
  );
}
