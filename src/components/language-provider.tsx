"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
type Language = "fr" | "en";
const LanguageContext = createContext<{language:Language;setLanguage:(value:Language)=>void}>({language:"fr",setLanguage:()=>{}});
export function LanguageProvider({children}:{children:ReactNode}) {
 const [language,setLanguageState]=useState<Language>("fr");
 useEffect(()=>{const saved=window.localStorage.getItem("portfolio-language");const lang=saved==="en"?"en":"fr";setLanguageState(lang);document.documentElement.lang=lang;},[]);
 const setLanguage=(value:Language)=>{setLanguageState(value);window.localStorage.setItem("portfolio-language",value);document.documentElement.lang=value;};
 return <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>;
}
export const useLanguage=()=>useContext(LanguageContext);
export function T({fr,en}:{fr:ReactNode;en:ReactNode}){const {language}=useLanguage();return <>{language==="fr"?fr:en}</>;}
