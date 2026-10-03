import { PiArrowDownBold, PiDownloadSimpleBold } from "react-icons/pi";
import avatar from "../assets/images/avatar.png";

// A ordem define o ritmo da flutuação (cada chip sobe um pouco mais e mais devagar)
const chips = [
    { label: "</>", position: "left-0 top-[30px]", className: "px-3.5 py-2.5 rounded-xl bg-lilac font-medium text-lg -rotate-[8deg] hover:rotate-[8deg]" },
    { label: "{ }", position: "right-0 top-[70px]", className: "px-3.5 py-2.5 rounded-xl bg-card font-medium text-lg rotate-[7deg] hover:-rotate-[10deg]" },
    { label: "git push", position: "left-2.5 bottom-[70px]", className: "px-3.5 py-2 rounded-full bg-card text-[15px] rotate-[5deg] hover:-rotate-[8deg]" },
    { label: "js", position: "right-5 bottom-10", className: "px-4 py-2.5 rounded-[50%] bg-pink font-medium text-base -rotate-[6deg] hover:rotate-[12deg]" },
    { label: "C#", position: "left-[48%] top-0", className: "px-3 py-2 rounded-[10px] bg-mauve text-[15px] -rotate-[3deg] hover:rotate-[6deg]" },
];

export default function Hero() {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] items-center gap-10 px-6 sm:px-14 pt-10 sm:pt-14 pb-24">
            <div className="flex flex-col gap-[22px]">
                <h1 className="text-[64px] sm:text-[104px] leading-[0.92] font-extrabold tracking-[-0.04em]">
                    Maria<br />Clara<span className="text-pink">.</span>
                </h1>
                <p className="max-w-[520px] text-xl sm:text-2xl leading-[1.4] [text-wrap:pretty]">
                    Desenvolvedora{" "}
                    <span className="relative inline-block">
                        front-end
                        <svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true" className="absolute left-0 -bottom-2 w-full h-3 overflow-visible">
                            <path className="draw" d="M2 7 Q 12 1 22 7 T 42 7 T 62 7 T 82 7 T 102 7 T 118 7" fill="none" stroke="oklch(0.72 0.15 350)" strokeWidth="3" strokeLinecap="round" pathLength="1" />
                        </svg>
                    </span>
                    . Engenheira da Computação e pós-graduada em IA pela UTFPR.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                    <a href={`${import.meta.env.BASE_URL}curriculum.pdf`} target="_blank" rel="noopener noreferrer" className="btn-pop bg-pink">
                        <PiDownloadSimpleBold />Baixar currículo
                    </a>
                    <a href="#projetos" className="btn-pop bg-card">
                        Ver projetos<PiArrowDownBold />
                    </a>
                </div>
            </div>

            <div className="relative justify-self-center w-full max-w-[480px] h-[380px] sm:h-[460px]">
                <div className="absolute left-[50px] right-[50px] top-[70px] bottom-[30px] bg-blob border-2 border-ink shadow-pop-xl" style={{ borderRadius: "44% 56% 52% 48% / 50% 44% 56% 50%" }} />
                <img src={avatar} alt="Ilustração da Maria Clara" className="absolute left-1/2 bottom-[22px] -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain pointer-events-none" />
                {chips.map(({ label, position, className }, i) => (
                    <span
                        key={label}
                        aria-hidden="true"
                        className={`float absolute ${position}`}
                        style={{ "--float-y": `${-10 - i * 2}px`, "--float-dur": `${3200 + i * 500}ms`, "--float-delay": `${i * -700}ms` }}
                    >
                        <span className={`inline-block border-2 border-ink font-mono shadow-pop hover:scale-[1.15] transition-transform duration-[250ms] ease-[cubic-bezier(.3,1.6,.5,1)] ${className}`}>
                            {label}
                        </span>
                    </span>
                ))}
            </div>
        </section>
    )
}
