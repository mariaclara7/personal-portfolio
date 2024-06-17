import { ReactTyped } from "react-typed";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <section id="home" className="h-[95vh] flex flex-col items-center justify-center mb-10">
            <h1 className="font-bold text-[35px] text-pink-500 mb-2">Maria Clara</h1>
            <ReactTyped
                strings={[
                    "Desenvolvedora front-end",
                    "Amante dos games",
                    "Apaixonada por código",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            >
            </ReactTyped>
            <div className="flex text-[30px] gap-5 text-pink-400 my-5">
                <a href="mailto:mcadelmonico@gmail.com" target="_blank" className="hover:text-pink-600 duration-500"><FaEnvelope /></a>
                <a href="https://github.com/MariaClara7" target="_blank" className="hover:text-black duration-500"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mariaclara733/" target="_blank" className="hover:text-blue-800 duration-500"><FaLinkedin /></a>
            </div>

            <button className="bg-pink-400 text-white font-bold rounded-full py-2 px-5 hover:bg-pink-600 hover:scale-110 duration-500">Curriculum Vitae</button>

            <a href="#about" className="absolute bottom-5">
                <div>
                    <p className="mb-3 text-pink-500 font-semibold">Ver mais</p>
                    <div class="scroll-downs">
                        <div class="mousey">
                            <div class="scroller"></div>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    )
}