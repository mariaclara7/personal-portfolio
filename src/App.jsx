import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import { LanguageContext, getInitialLanguage, saveLanguage } from "./i18n/LanguageContext";
import { translations } from "./i18n/translations";

export default function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    saveLanguage(lang);
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      <div id="top" className="max-w-[1280px] mx-auto bg-paper text-ink overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Experiences />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}
