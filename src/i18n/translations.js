const pt = {
    meta: {
        title: "Maria Clara · Desenvolvedora front-end",
        description: "Maria Clara — desenvolvedora front-end. Engenheira da Computação e pós-graduada em IA pela UTFPR.",
    },
    header: {
        home: "Início",
        language: "Idioma",
        nav: { projects: "Projetos", about: "Sobre", experience: "Experiência", contact: "Contato" },
    },
    hero: {
        before: "Desenvolvedora ",
        highlight: "front-end",
        after: ". Engenheira da Computação e pós-graduada em IA pela UTFPR.",
        resume: "Baixar currículo",
        projects: "Ver projetos",
        avatarAlt: "Ilustração da Maria Clara",
    },
    projects: {
        title: "Projetos",
        badge: "Novo · 2026",
        brasumula: "Site de estatísticas do Campeonato Brasileiro.",
        brasumulaAlt: "Página de estatísticas do BraSumula",
    },
    about: {
        title: "Sobre",
        paragraphs: [
            "Sou desenvolvedora front-end e gosto de transformar protótipos em interfaces bem construídas, do layout aos detalhes de interação.",
            "Também atuo no back-end, dando continuidade a APIs existentes: crio métodos completos, da classe e da inserção no banco até a service e a controller.",
            "Sou formada em Engenharia da Computação e pós-graduada (lato sensu) em Inteligência Artificial pela UTFPR.",
        ],
        hint: "aperte uma tecla",
        commands: ["git pull", "git add .", 'git commit -m "novo portfólio"', "git push"],
        stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "C#", "ASP.NET", "SQL", "Figma", "IA"],
    },
    experience: {
        title: "Experiência",
        jobs: [
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
        ],
        educationTitle: "Formação",
        education: [
            { course: "Pós-graduação Lato Sensu em Inteligência Artificial", school: "UTFPR", period: "Mar 2025 — Set 2026" },
            { course: "Engenharia da Computação", school: "UTFPR", period: "2018 — 2024" },
        ],
    },
    contact: {
        title: "Contato",
        email: "E-mail",
    },
};

const en = {
    meta: {
        title: "Maria Clara · Front-end developer",
        description: "Maria Clara — front-end developer. Computer Engineer with a postgraduate degree in AI from UTFPR.",
    },
    header: {
        home: "Home",
        language: "Language",
        nav: { projects: "Projects", about: "About", experience: "Experience", contact: "Contact" },
    },
    hero: {
        before: "",
        highlight: "Front-end",
        after: " developer. Computer Engineer with a postgraduate degree in AI from UTFPR.",
        resume: "Download CV",
        projects: "See projects",
        avatarAlt: "Illustration of Maria Clara",
    },
    projects: {
        title: "Projects",
        badge: "New · 2026",
        brasumula: "Statistics website for the Brazilian football championship.",
        brasumulaAlt: "BraSumula statistics page",
    },
    about: {
        title: "About",
        paragraphs: [
            "I'm a front-end developer and I enjoy turning prototypes into well-built interfaces, from the layout to the interaction details.",
            "I also work on the back-end, extending existing APIs: I build complete methods, from the class and the database insert to the service and the controller.",
            "I have a degree in Computer Engineering and a postgraduate specialization (lato sensu) in Artificial Intelligence from UTFPR.",
        ],
        hint: "press a key",
        commands: ["git pull", "git add .", 'git commit -m "new portfolio"', "git push"],
        stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "C#", "ASP.NET", "SQL", "Figma", "AI"],
    },
    experience: {
        title: "Experience",
        jobs: [
            {
                company: "Dribion Software",
                role: "Junior Developer",
                period: "Jan 2023 — Present",
                items: [
                    "Web development based on prototypes (Figma).",
                    "Development of web applications in C# and React.js.",
                    "Development and business logic of projects (ASP.NET and C#).",
                    "Refactoring and visual improvements to existing projects.",
                    "Testing and refactoring of legacy code.",
                    "Migration of an on-premises system to the cloud, using C#.",
                ],
            },
            {
                company: "Yankton Technologies",
                role: "Intern",
                period: "Mar 2021 — Dec 2021",
                items: [
                    "Web development based on prototypes (Figma).",
                    "Development of web applications in C# and React.ts.",
                    "SQL queries on the database.",
                ],
            },
        ],
        educationTitle: "Education",
        education: [
            { course: "Postgraduate Specialization (Lato Sensu) in Artificial Intelligence", school: "UTFPR", period: "Mar 2025 — Sep 2026" },
            { course: "Computer Engineering", school: "UTFPR", period: "2018 — 2024" },
        ],
    },
    contact: {
        title: "Contact",
        email: "Email",
    },
};

export const translations = { pt, en };
export const languages = Object.keys(translations);
