import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FFF6F5",
        roseMist: "#FFE8E6",
        coral: "#E4574E",
        charcoal: "#1B1A1A",
        slateWarm: "#585151",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(18, 15, 15, 0.08)",
        glow: "0 12px 40px rgba(228, 87, 78, 0.16)",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(228,87,78,0.22), rgba(255,246,245,0) 45%), radial-gradient(circle at 75% 10%, rgba(255,255,255,0.65), rgba(255,255,255,0) 35%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
