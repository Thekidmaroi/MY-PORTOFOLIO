import Image from "next/image";
import { parsePlaceholder, type MediaVariant } from "@/lib/media";

const shapeClasses: Record<MediaVariant, string> = {
  avatar: "rounded-full",
  logo: "rounded-xl",
  school: "rounded-xl",
  cover: "rounded-xl",
};
const icons: Record<MediaVariant, React.ReactNode> = {
  avatar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M5 20c1.5-4 4.2-6 7-6s5.5 2 7 6" />
    </svg>
  ),
  logo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path strokeLinecap="round" d="M8 20V9M8 9V4l4-1 4 1v5" />
    </svg>
  ),
  school: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path strokeLinecap="round" d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
    </svg>
  ),
  cover: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 16-5.5-5-9.5 8" />
    </svg>
  ),
};
// Tailles CSS reelles par defaut selon le variant (utilisees pour generer un
// srcset next/image adapte, evite de servir une image minuscule et floue
// dans un conteneur beaucoup plus grand, ex: les photos "cover").
const defaultSizes: Record<MediaVariant, string> = {
  avatar: "200px",
  logo: "200px",
  school: "200px",
  cover: "(min-width: 1024px) 800px, 100vw",
};
export function MediaSlot({
  src,
  alt,
  variant,
  className = "",
  sizes,
  quality = 90,
  objectPosition,
}: {
  src: string;
  alt: string;
  variant: MediaVariant;
  className?: string;
  sizes?: string;
  quality?: number;
  objectPosition?: string;
}) {
  const parsed = parsePlaceholder(src);

  if (parsed) {
    return (
      <div
        title={`Chemin suggéré : ${parsed.suggestedPath}`}
        className={`relative flex flex-col items-center justify-center gap-1.5 overflow-hidden border border-dashed border-border bg-surface-2 p-2 text-center text-muted ${shapeClasses[variant]} ${className}`}
      >
        {icons[variant]}
        <p className="text-[9px] leading-tight">Média à ajouter</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden border border-border ${shapeClasses[variant]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        sizes={sizes ?? defaultSizes[variant]}
        quality={quality}
      />
    </div>
  );
}
