import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.vue",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./stories/**/*.js",
    "./nuxt.config.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    container: {
      center: true,
    },
  },
  safelist: [
    {
      pattern:
      /(text|bg|border|shadow)-(red|green|blue|purple|slate|black|white|yellow|gray|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|fuchsia|pink|rose|)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [],
} satisfies Config;
