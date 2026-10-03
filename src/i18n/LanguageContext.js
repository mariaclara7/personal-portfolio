import { createContext, useContext } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "lang";

export const LanguageContext = createContext({ lang: "pt", setLang: () => {}, t: translations.pt });

export const useLanguage = () => useContext(LanguageContext);

// Escolha salva > idioma do navegador (português ou inglês) > português
export function getInitialLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved in translations) return saved;
    } catch { /* localStorage indisponível */ }
    return navigator.language?.toLowerCase().startsWith("pt") || !navigator.language ? "pt" : "en";
}

export function saveLanguage(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch { /* localStorage indisponível */ }
}
