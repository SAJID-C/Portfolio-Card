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
        cream: {
          50: "#FAF7F2",  // Main background
          100: "#F4EFEA", // Subtle secondary background
          200: "#ECE5DC", // Cards & hover
          300: "#E3DBD0", // Borders
          400: "#D4CABC",
        },
        terracotta: {
          50: "#FCF6F3",
          100: "#F9ECE6",
          200: "#F3D6C9",
          300: "#E8B5A0",
          400: "#DB8B6D",
          500: "#BA4A29", // The iconic button & accent color
          600: "#A23D20",
          700: "#863018",
          800: "#6B2713",
        },
        charcoal: {
          950: "#141210",
          900: "#1C1917", // Primary dark text
          800: "#292524",
          700: "#44403C",
          600: "#57534E", // Secondary text
          500: "#78716C",
          400: "#A8A29E",
          300: "#D6D3D1",
        },
        dark: {
          950: "#100E0D", // Deep obsidian dark mode
          900: "#161311",
          850: "#1E1A17",
          800: "#27221E", // Card dark
          700: "#36302B",
          600: "#4B433C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(28, 25, 23, 0.06)",
        warm: "0 20px 40px -15px rgba(186, 74, 41, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
