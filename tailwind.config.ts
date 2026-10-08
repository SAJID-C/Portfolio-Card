import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#060911",
          900: "#090d16",
          850: "#0d1322",
          800: "#111827",
          700: "#1f2937",
          600: "#374151",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        accent: {
          blue: "#38bdf8",
          cyan: "#06b6d4",
          violet: "#a855f7",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0, 0, 0, 0.4)",
        glow: "0 0 25px -5px rgba(99, 102, 241, 0.25)",
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
