import { PiArrowUpRightBold, PiEnvelopeSimpleBold, PiGithubLogoBold, PiLinkedinLogoBold } from "react-icons/pi";

const contacts = [
    { label: "E-mail", handle: "mcadelmonico@gmail.com", href: "mailto:mcadelmonico@gmail.com", icon: PiEnvelopeSimpleBold, hover: "hover:bg-tint-pink" },
    { label: "GitHub", handle: "@mariaclara7", href: "https://github.com/mariaclara7", icon: PiGithubLogoBold, hover: "hover:bg-tint-lilac" },
    { label: "LinkedIn", handle: "/in/mariaclara733", href: "https://www.linkedin.com/in/mariaclara733/", icon: PiLinkedinLogoBold, hover: "hover:bg-tint-rose" },
];

export default function Contact() {
    return (
        <section id="contato" className="flex flex-col gap-6 px-6 sm:px-14 pb-[72px]">
            <h2 className="section-title">Contato</h2>
            <div className="flex flex-col border-t-2 border-ink">
                {contacts.map(({ label, handle, href, icon: Icon, hover }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`grid grid-cols-[36px_1fr_auto] sm:grid-cols-[48px_1fr_auto] items-center gap-4 px-3 py-[22px] border-b-2 border-ink text-ink transition-[background-color,padding] duration-200 hover:pl-6 ${hover}`}
                    >
                        <Icon className="text-[26px] sm:text-[30px]" />
                        <span className="text-[28px] sm:text-4xl font-extrabold tracking-[-0.02em]">{label}</span>
                        <span className="flex items-center gap-3 font-mono text-[15px] text-muted">
                            <span className="hidden sm:inline">{handle}</span>
                            <PiArrowUpRightBold className="text-[22px] text-ink" />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}
