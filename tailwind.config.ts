import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,ts,js,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "768px",
      desktop: "1024px"
    },
    extend: {
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)"
      }
    }
  },
  plugins: []
} satisfies Config;
