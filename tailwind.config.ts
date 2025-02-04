import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A3E5D",
        complimentary: "#FFE5D4",
        light: "#F7F9F9",
        white: "#FFFFFF",
        black: "#1E1E1E",
      },
    },
  },
  plugins: [],
} satisfies Config;
