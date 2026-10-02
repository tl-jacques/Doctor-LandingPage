import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#F3FBFE",
        },
        color: {
          1: "#F3FBFE",
          2: "#34302B",
          3: "#35312C",
          4: "#EDF5F7",
          5: "#36312C",
          6: "#2B201A",
          secondary: "#B0906A",
          dark: "#191925",
        },
        // Paleta do redesign (porcelana · espresso · bronze)
        porcelain: "#F4F0EA",
        ivory: "#FBF9F6",
        cream: "#EFE8DE",
        sand: "#E4D8C9",
        stone: "#EAE3D9",
        line: {
          DEFAULT: "#DDD4C8",
          strong: "#CFC4B6",
        },
        taupe: "#5E554C",
        mist: "#B9AD9E",
        bronze: {
          DEFAULT: "#7D5E3C",
          light: "#C9A77D",
        },
        espresso: {
          DEFAULT: "#1E1915",
          line: "#3A322B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
