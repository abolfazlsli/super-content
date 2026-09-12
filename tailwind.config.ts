import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./app/dashboard/**/*.{ts,tsx}" , "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#171B26",
          soft: "#3A4152",
        },
        canvas: "#EEF1F6",
        panel: "#FFFFFF",
        registry: {
          DEFAULT: "#14192B",
          light: "#232A44",
          border: "#39415C",
        },
        seal: {
          DEFAULT: "#C98A2C",
          light: "#F3DDAF",
        },
        okgreen: {
          DEFAULT: "#2F6E52",
          light: "#DCEAE3",
        },
        brick: {
          DEFAULT: "#B23A2E",
          light: "#F4DCD9",
        },
        line: "#D8DEE7",
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "Tahoma", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,27,38,0.06), 0 1px 1px rgba(23,27,38,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
