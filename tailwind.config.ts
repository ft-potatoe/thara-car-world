import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#0A0A0C",
        panel: "#17171A",
        panel2: "#1D1D21",
        chrome: {
          light: "#F2F3F5",
          DEFAULT: "#C7CBD1",
          dark: "#8B8F96",
        },
        ceramic: {
          DEFAULT: "#2FD2FF",
          soft: "#7CE4FF",
          dim: "#1596B8",
        },
        racing: {
          DEFAULT: "#E1121B",
          dim: "#8C0D14",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      backgroundImage: {
        "carbon-weave":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
        "chrome-gradient":
          "linear-gradient(135deg, #F2F3F5 0%, #C7CBD1 45%, #8B8F96 55%, #F2F3F5 100%)",
        "ceramic-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(47,210,255,0.25) 0%, rgba(47,210,255,0) 70%)",
      },
      boxShadow: {
        "glow-ceramic": "0 0 40px rgba(47,210,255,0.35)",
        "glow-ceramic-sm": "0 0 20px rgba(47,210,255,0.25)",
        "inner-panel": "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      keyframes: {
        "light-sweep": {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(150%) skewX(-20deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "light-sweep": "light-sweep 3.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
