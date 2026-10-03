import { PiBriefcaseBold, PiGraduationCapBold } from "react-icons/pi";

const experiences = [
    {
        company: "Dribion Software",
        role: "Desenvolvedora Júnior",
        period: "Jan 2023 — Presente",
        items: [
            "Desenvolvimento web a partir de protótipos (Figma).",
            "Desenvolvimento de aplicações web nas linguagens C# e React.js.",
            "Desenvolvimento e codificação lógica dos projetos (ASP.NET e C#).",
            "Refatoração e melhorias gráficas de projetos já existentes.",
            "Realização de testes e refatoração de códigos antigos.",
            "Migração de sistema em servidor local para sistema em nuvem, utilizando C#.",
        ],
    },
    {
        company: "Yankton Technologies",
        role: "Estagiária",
        period: "Mar 2021 — Dez 2021",
        items: [
            "Desenvolvimento web a partir de protótipos (Figma).",
            "Desenvolvimento de aplicações web linguagens C# e React.ts.",
            "Consultas SQL no banco de dados.",
        ],
    },
];

const education = [
    { course: "Pós-graduação Lato Sensu em Inteligência Artificial", school: "UTFPR", period: "Mar 2025 — Set 2026" },
    { course: "Engenharia da Computação", school: "UTFPR", period: "2018 — 2024" },
];

export default function Experiences() {
    return (
        <section id="experiencia" className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-14 px-6 sm:px-14 pb-24">
            <div className="flex flex-col gap-6">
                <h2 className="section-title">Experiência</h2>
                {experiences.map(({ company, role, period, items }) => (
                    <article key={company} className="card">
                        <div className="flex items-center gap-3">
                            <span className="card-icon bg-pink -rotate-[5deg]"><PiBriefcaseBold /></span>
                            <span className="font-mono text-[13px] text-subtle">{period}</span>
                        </div>
                        <h3 className="text-[26px] font-semibold tracking-[-0.01em]">{company}</h3>
                        <span className="text-base font-semibold text-plum">{role}</span>
                        <ul className="mt-1 pl-5 list-disc text-base leading-[1.55] text-muted">
                            {items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="section-title">Formação</h2>
                {education.map(({ course, school, period }) => (
                    <article key={course} className="card">
                        <div className="flex items-center gap-3">
                            <span className="card-icon bg-lilac rotate-[5deg]"><PiGraduationCapBold /></span>
                            <span className="font-mono text-[13px] text-subtle">{period}</span>
                        </div>
                        <h3 className="text-[22px] font-semibold leading-[1.2]">{course}</h3>
                        <span className="text-[15px] text-muted">{school}</span>
                    </article>
                ))}
            </div>
        </section>
    )
}
