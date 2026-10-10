import { ReactNode } from "react";
import { Container } from "./container";
export function Section({eyebrow,title,description,children,className=""}:{eyebrow?:string;title?:string;description?:string;children?:ReactNode;className?:string}) {
 return <section className={`editorial py-20 sm:py-24 ${className}`}><Container>{(eyebrow || title) && <div className="mb-12 max-w-3xl">{eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}{title && <h2 className="section-display">{title}<span className="text-accent">.</span></h2>}{description && <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>}</div>}{children}</Container></section>;
}
