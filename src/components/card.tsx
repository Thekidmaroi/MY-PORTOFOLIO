import { ReactNode } from "react";
export function Card({children,className=""}:{children:ReactNode;className?:string}) {
 return <div className={`rounded-[1.5rem] border border-border bg-surface p-7 shadow-sm transition-all duration-200 hover:border-accent/40 hover:shadow-md sm:p-9 ${className}`}>{children}</div>;
}
