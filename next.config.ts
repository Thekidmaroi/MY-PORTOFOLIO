import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    // Les illustrations de projets (public/*.svg) sont générées par nous-mêmes
    // (contenu de confiance, aucun SVG externe/utilisateur) — activer le rendu
    // SVG via next/image en gardant la CSP stricte recommandée par Next.js.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
