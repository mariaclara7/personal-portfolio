import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <section id="home" className="h-[95vh] flex flex-col items-center justify-center mb-10">
            <Fade direction="down" delay={1500} duration={2000} triggerOnce>
                <h1 className="font-bold text-[35px] text-purple-800 mb-2 dark:text-slate-100">Maria Clara</h1>
            </Fade>
            <ReactTyped
                strings={[
                    "Desenvolvedora front-end",
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-black dark:text-white"
            >
            </ReactTyped>
            <div className="flex text-[30px] gap-5 text-purple-400 dark:text-purple-500 my-5">
                <a href="mailto:mcadelmonico@gmail.com" target="_blank" className="hover:text-purple-700 duration-500"><FaEnvelope /></a>
                <a href="https://github.com/mariaclara7" target="_blank" className="hover:text-black dark:hover:text-slate-100 duration-500"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mariaclara733/" target="_blank" className="hover:text-blue-800 duration-500"><FaLinkedin /></a>
            </div>

            <button className="bg-purple-400 dark:bg-purple-500 text-white font-bold rounded-full py-2 px-5 hover:bg-purple-600 dark:hover:bg-purple-700 hover:scale-110 duration-500"><a href="/personal-portfolio/curriculum.pdf" target="_blank" rel="noopener noreferrer" className="text-white">
                Curriculum Vitae
            </a></button>

            <a href="#about" className="absolute bottom-5">
                <div>
                    <p className="mb-3 text-purple-500 font-semibold">Ver mais</p>
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    )
}