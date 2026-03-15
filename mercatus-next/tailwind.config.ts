import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070B",
        panel: "#0E1117",
        panelSoft: "#121723",
        line: "rgba(255,255,255,0.07)",
        muted: "#9AA4B2",
        gain: "#00FFA3",
        loss: "#FF5A67",
        accent: "#67D9FF",
        gold: "#E9A93B"
      },
      boxShadow: {
        panel: "0 12px 30px rgba(0,0,0,0.34)"
      },
      borderRadius: {
        card: "24px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
