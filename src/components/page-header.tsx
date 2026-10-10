import { Container } from "./container";
export function PageHeader({kicker,title,description}:{kicker:string;title:string;description?:string}) {
 return <header className="editorial border-b border-border bg-surface/40 py-20 sm:py-28"><Container><p className="eyebrow mb-6">{kicker} / MARWANE HOUNGNON</p><h1 className="section-display max-w-4xl">{title}<span className="text-accent">.</span></h1>{description && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}</Container></header>;
}
