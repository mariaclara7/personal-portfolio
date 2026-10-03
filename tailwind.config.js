/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#241a2b",
        paper: "#fbf6f9",
        card: "#fffbfd",
        muted: "#4b3f50",
        subtle: "#6e5f72",
        screen: "#f1efe9",
        "term-muted": "#c9b8cf",
        pink: "oklch(0.72 0.15 350)",
        lilac: "oklch(0.72 0.15 300)",
        plum: "oklch(0.52 0.17 320)",
        blob: "oklch(0.88 0.07 300)",
        mauve: "oklch(0.88 0.07 320)",
        "tint-pink": "oklch(0.93 0.05 350)",
        "tint-lilac": "oklch(0.93 0.05 300)",
        "tint-rose": "oklch(0.93 0.05 330)",
      },
      fontFamily: {
        sans: ["'Bricolage Grotesque'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      boxShadow: {
        "pop-sm": "0 3px 0 #241a2b",
        pop: "0 4px 0 #241a2b",
        "pop-md": "0 5px 0 #241a2b",
        "pop-lg": "0 6px 0 #241a2b",
        "pop-xl": "0 8px 0 #241a2b",
      },
    },
  },
  plugins: [],
}
