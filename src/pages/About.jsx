import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

// Digita e apaga os comandos em loop; uma tecla da stack interrompe o comando
// atual, é digitada no lugar dele e depois o loop retoma de onde parou.
function useTerminal(commands) {
    const [text, setText] = useState("");
    const commandsRef = useRef(commands);
    const state = useRef({ index: 0, mode: "type", target: commands[0], wait: 0, custom: false, text: "" });

    // Ao trocar de idioma, o comando em andamento passa para a versão traduzida
    useEffect(() => {
        commandsRef.current = commands;
        const s = state.current;
        if (!s.custom) {
            s.target = commands[s.index];
            s.text = s.target.slice(0, s.text.length);
            setText(s.text);
        }
    }, [commands]);

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
                const list = commandsRef.current;
                if (!s.custom) s.index = (s.index + 1) % list.length;
                Object.assign(s, { custom: false, target: list[s.index], mode: "type", wait: 4 });
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
    const { t } = useLanguage();
    const [text, press] = useTerminal(t.about.commands);

    return (
        <section id="sobre" className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-14 px-6 sm:px-14 pb-24">
            <div className="flex flex-col gap-5">
                <h2 className="section-title">{t.about.title}</h2>
                {t.about.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg sm:text-[19px] leading-[1.65] text-muted [text-wrap:pretty]">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="flex flex-col gap-4 sm:pt-3">
                <div aria-hidden="true" className="flex justify-between items-center gap-3 px-[18px] py-3 border-2 border-ink rounded-xl bg-ink text-paper font-mono text-base">
                    <span className="min-w-0 overflow-hidden whitespace-pre">$ {text}<span className="cursor-blink">▍</span></span>
                    <span className="hidden sm:inline flex-none text-[11px] text-term-muted">{t.about.hint}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                    {t.about.stack.map((key) => (
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
