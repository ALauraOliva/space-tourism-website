import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: "#0B0D17",
      lightBlue: "#D0D6F9",
      cream: "#FFFFFF",
    },
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
