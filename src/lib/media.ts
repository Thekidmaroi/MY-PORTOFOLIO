export type MediaVariant = "avatar" | "logo" | "school" | "cover";

// Encode un slot média en attente : "placeholder:<variant>:<chemin suggéré>".
// Dès qu'un vrai fichier existe dans /public et que le champ pointe vers lui
// (ex: "/images/logos/namaryk.png"), le composant MediaSlot bascule automatiquement
// sur l'image réelle — aucune autre modification nécessaire.
export function placeholder(variant: MediaVariant, suggestedPath: string) {
  return `placeholder:${variant}:${suggestedPath}`;
}

export function parsePlaceholder(src: string) {
  if (!src.startsWith("placeholder:")) return null;
  const [, variant, ...rest] = src.split(":");
  return { variant: variant as MediaVariant, suggestedPath: rest.join(":") };
}
