import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary based on #a43971
        primary: {
          DEFAULT: "#a43971",
          dark: "#8a2f5e",
          light: "#d4a5c4",
          soft: "#f5e6ef",
          matte: "#b85a8a",
          muted: "#c97ba3",
        },
        // Secondary
        sage: "#9db5a0",
        slate: "#7c8ba1",
        "warm-gray": "#9a8b8a",
        // Backgrounds
        cream: "#fdfbfa",
        warm: "#f9f6f4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-organic": "float-organic 15s ease-in-out infinite",
        "pulse-soft": "pulse-soft 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
