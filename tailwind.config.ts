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
      colors: {
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
    },
  },
  plugins: [],
};

export default config;
