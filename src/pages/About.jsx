import { useCallback, useEffect, useRef, useState } from "react";

const STACK = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "C#", "ASP.NET", "SQL", "Figma", "IA"];
const COMMANDS = ["git pull", "git add .", 'git commit -m "novo portfólio"', "git push"];

// Digita e apaga os comandos em loop; uma tecla da stack interrompe o comando
// atual, é digitada no lugar dele e depois o loop retoma de onde parou.
function useTerminal() {
    const [text, setText] = useState("");
    const state = useRef({ index: 0, mode: "type", target: COMMANDS[0], wait: 0, custom: false, text: "" });

    useEffect(() => {
        const id = setInterval(() => {
            const s = state.current;
            if (s.wait > 0) { s.wait--; return; }
            if (s.mode === "type") {
                if (s.text.length < s.target.length) s.text = s.target.slice(0, s.text.length + 1);
                else { s.mode = "delete"; s.wait = 22; }
            } else if (s.text.length > 0) {
                s.text = s.text.slice(0, -1);
            } else {
                if (!s.custom) s.index = (s.index + 1) % COMMANDS.length;
                Object.assign(s, { custom: false, target: COMMANDS[s.index], mode: "type", wait: 4 });
            }
            setText(s.text);
        }, 75);
        return () => clearInterval(id);
    }, []);

    const press = useCallback((key) => {
        Object.assign(state.current, { target: key, mode: "type", wait: 0, custom: true, text: "" });
        setText("");
    }, []);

    return [text, press];
}

export default function About() {
    const [text, press] = useTerminal();

    return (
        <section id="sobre" className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-14 px-6 sm:px-14 pb-24">
            <div className="flex flex-col gap-5">
                <h2 className="section-title">Sobre</h2>
                <p className="text-lg sm:text-[19px] leading-[1.65] text-muted [text-wrap:pretty]">
                    Sou desenvolvedora front-end e gosto de transformar protótipos em interfaces bem construídas, do layout aos detalhes de interação.
                </p>
                <p className="text-lg sm:text-[19px] leading-[1.65] text-muted [text-wrap:pretty]">
                    Também atuo no back-end, dando continuidade a APIs existentes: crio métodos completos, da classe e da inserção no banco até a service e a controller.
                </p>
                <p className="text-lg sm:text-[19px] leading-[1.65] text-muted [text-wrap:pretty]">
                    Sou formada em Engenharia da Computação e pós-graduada (lato sensu) em Inteligência Artificial pela UTFPR.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:pt-3">
                <div aria-hidden="true" className="flex justify-between items-center gap-3 px-[18px] py-3 border-2 border-ink rounded-xl bg-ink text-paper font-mono text-base">
                    <span className="min-w-0 overflow-hidden whitespace-pre">$ {text}<span className="cursor-blink">▍</span></span>
                    <span className="hidden sm:inline flex-none text-[11px] text-term-muted">aperte uma tecla</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                    {STACK.map((key) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => press(key)}
                            className="min-w-16 px-4 py-3 border-2 border-ink rounded-[10px] bg-card hover:bg-tint-rose text-ink font-mono text-[15px] cursor-pointer shadow-pop-md transition-[transform,box-shadow] duration-[60ms] active:translate-y-[5px] active:shadow-none"
                        >
                            {key}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
