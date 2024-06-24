import { PiBriefcaseDuotone, PiGraduationCapDuotone } from "react-icons/pi";

export default function Experiences() {
    return (
        <section id="experiences" className="lg:px-10 px-2 py-10">
            <h2 className="font-bold text-[35px] text-pink-500 mb-10">Experiências</h2>
            <div className="flex gap-10">
                <div className='bg-white shadow-lg lg:px-10 px-5 py-5 rounded-lg w-[50%] flex-col flex items-baseline'>
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <PiBriefcaseDuotone className="text-[40px] text-purple-500" />
                            <span className="h-[100%] w-[2px] bg-purple-400"></span>
                        </div>
                        <div className="pb-5">
                            <span className="text-sm text-slate-700">Janeiro 2023 - Presente</span>
                            <h3 className="font-bold text-[25px] text-slate-700">Dribion Software</h3>
                            <h4 className="font-semibold text-[18px] text-slate-700 mb-2">Desenvolvedora Júnior</h4>
                            <ul className="text-slate-700">
                                <li className="mb-1">- Desenvolvimento web a partir de protótipos (Figma).</li>
                                <li className="mb-1">- Desenvolvimento de aplicações web nas linguagens C# e React.js.</li>
                                <li className="mb-1">- Desenvolvimento e codificação lógica dos projetos (ASP.NET e C#).</li>
                                <li className="mb-1">- Refatoração e melhorias gráficas de projetos já existentes.</li>
                                <li className="mb-1">- Realização de testes e refatoração de códigos antigos.</li>
                                <li>- Migração de sistema em servidor local para sistema em nuvem, utilizando C#.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <PiBriefcaseDuotone className="text-[40px] text-purple-500" />
                            <span className="h-[100%] w-[2px] bg-purple-400"></span>
                        </div>
                        <div className="pb-5">
                            <span className="text-sm text-slate-700">Março 2021 - Dezembro 2021</span>
                            <h3 className="font-bold text-[25px] text-slate-700">Yankton Technologies</h3>
                            <h4 className="font-semibold text-[18px] text-slate-700 mb-2">Desenvolvedora Júnior</h4>
                            <ul className="text-slate-700">
                                <li className="mb-1">- Desenvolvimento web a partir de protótipos (Figma).</li>
                                <li className="mb-1">- Desenvolvimento de aplicações web linguagens C# e React.ts.</li>
                                <li>- Consultas SQL no banco de dados.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-lg lg:px-10 px-5 py-5 rounded-lg w-[50%] flex-col flex gap-10'>
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <PiGraduationCapDuotone className="text-[50px] text-orange-400" />
                            <span className="h-[100%] w-[2px] bg-orange-400"></span>
                        </div>
                        <div className="pb-5">
                            <span className="text-sm text-slate-700">2018 - 2024</span>
                            <h3 className="font-bold text-[25px] text-slate-700">Universidade Tecnológica Federal do Paraná</h3>
                            <h4 className="font-semibold text-[18px] text-slate-700">Engenharia da Computação</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}