import { useState } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import brasumula from "../assets/images/brasumula.png";
import { useLanguage } from "../i18n/LanguageContext";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Projects() {
    const { t } = useLanguage();
    const [tilt, setTilt] = useState("none");

    const onTilt = (e) => {
        if (prefersReducedMotion()) return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setTilt(`perspective(1200px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`);
    };

    return (
        <section id="projetos" className="flex flex-col gap-7 px-6 sm:px-14 pb-24">
            <h2 className="section-title">{t.projects.title}</h2>
            <a
                href="https://brasumula.com.br"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={onTilt}
                onMouseLeave={() => setTilt("none")}
                style={{ transform: tilt }}
                className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-6 sm:gap-9 p-4 sm:p-6 border-2 border-ink rounded-3xl bg-card shadow-pop-xl text-ink transition-transform duration-150 ease-out"
            >
                <div className="self-start min-w-0 rounded-[14px] border-2 border-ink overflow-hidden bg-screen">
                    <img src={brasumula} alt={t.projects.brasumulaAlt} className="block w-full h-auto aspect-[16/10] object-cover object-left-top" />
                </div>
                <div className="flex flex-col gap-3.5 sm:pr-3">
                    <span className="self-start px-3 py-1 rounded-full bg-lilac border-2 border-ink font-mono text-xs">{t.projects.badge}</span>
                    <span className="text-[40px] sm:text-[52px] font-extrabold tracking-[-0.03em] leading-none">BraSumula</span>
                    <span className="text-lg sm:text-xl leading-[1.45] text-muted">{t.projects.brasumula}</span>
                    <span className="flex items-center gap-2 font-semibold text-[17px]">brasumula.com.br<PiArrowUpRightBold /></span>
                </div>
            </a>
        </section>
    )
}
