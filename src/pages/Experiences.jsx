import { PiBriefcaseBold, PiGraduationCapBold } from "react-icons/pi";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experiences() {
    const { t } = useLanguage();

    return (
        <section id="experiencia" className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-14 px-6 sm:px-14 pb-24">
            <div className="flex flex-col gap-6">
                <h2 className="section-title">{t.experience.title}</h2>
                {t.experience.jobs.map(({ company, role, period, items }) => (
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
                <h2 className="section-title">{t.experience.educationTitle}</h2>
                {t.experience.education.map(({ course, school, period }) => (
                    <article key={period} className="card">
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
