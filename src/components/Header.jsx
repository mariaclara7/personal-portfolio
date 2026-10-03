import { useLanguage } from "../i18n/LanguageContext";
import { languages } from "../i18n/translations";

const links = [
    { href: "#projetos", key: "projects" },
    { href: "#sobre", key: "about" },
    { href: "#experiencia", key: "experience" },
    { href: "#contato", key: "contact" },
];

export default function Header() {
    const { lang, setLang, t } = useLanguage();

    return (
        <header className="flex flex-wrap items-center gap-x-[26px] gap-y-3 px-6 sm:px-14 py-6 text-base">
            <a href="#top" aria-label={t.header.home} className="mr-auto grid place-items-center w-[46px] h-[46px] rounded-[14px] bg-ink text-paper font-extrabold text-lg -rotate-6">
                mc
            </a>
            <nav className="flex flex-wrap gap-x-[26px] gap-y-2">
                {links.map(({ href, key }) => (
                    <a key={href} href={href} className="text-ink hover:text-plum transition-colors">{t.header.nav[key]}</a>
                ))}
            </nav>
            <div role="group" aria-label={t.header.language} className="flex border-2 border-ink rounded-full overflow-hidden font-mono text-xs">
                {languages.map((code) => (
                    <button
                        key={code}
                        type="button"
                        lang={code === "pt" ? "pt-BR" : "en"}
                        aria-pressed={lang === code}
                        onClick={() => setLang(code)}
                        className={`px-[11px] py-1 cursor-pointer transition-colors ${lang === code ? "bg-ink text-paper" : "text-ink hover:bg-tint-rose"}`}
                    >
                        {code.toUpperCase()}
                    </button>
                ))}
            </div>
        </header>
    )
}
