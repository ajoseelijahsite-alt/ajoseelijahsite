import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FFFFFF",
        roseMist: "#FFE8E6",
        coral: "#FF2418",
        charcoal: "#1B1A1A",
        slateWarm: "#585151",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(18, 15, 15, 0.08)",
        glow: "0 12px 42px rgba(255, 36, 24, 0.24)",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(255,36,24,0.24), rgba(255,255,255,0) 45%), radial-gradient(circle at 75% 10%, rgba(255,255,255,0.7), rgba(255,255,255,0) 35%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
