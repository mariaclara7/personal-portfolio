const links = [
    { href: "#projetos", label: "Projetos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#contato", label: "Contato" },
];

export default function Header() {
    return (
        <header className="flex flex-wrap items-center gap-x-[26px] gap-y-3 px-6 sm:px-14 py-6 text-base">
            <a href="#top" aria-label="Início" className="mr-auto grid place-items-center w-[46px] h-[46px] rounded-[14px] bg-ink text-paper font-extrabold text-lg -rotate-6">
                mc
            </a>
            <nav className="flex flex-wrap gap-x-[26px] gap-y-2">
                {links.map(({ href, label }) => (
                    <a key={href} href={href} className="text-ink hover:text-plum transition-colors">{label}</a>
                ))}
            </nav>
            <div className="flex border-2 border-ink rounded-full overflow-hidden font-mono text-xs">
                <span className="px-[11px] py-1 bg-ink text-paper">PT</span>
                <span className="px-[11px] py-1">EN</span>
            </div>
        </header>
    )
}
