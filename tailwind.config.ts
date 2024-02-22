import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-lg": "url('/assets/home/background-home-desktop.jpg')",
        "hero-bg-md": "url('/assets/home/background-home-tablet.jpg')",
        "hero-bg-sm": "url('/assets/home/background-home-mobile.jpg')",
      },
    },
    colors: {
      ...colors,
      blue: "#0B0D17",
      lightBlue: "#D0D6F9",
      cream: "#FFFFFF",
      gray: "#50535A",
    },
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
