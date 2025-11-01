// tailwind.config.cjs
const { heroui } = require("@heroui/react");
const { mtConfig } = require("@material-tailwind/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,astro:jsx,astro:jsx-dev-runtime,astro:tsx,astro:tsx-dev-runtime,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      "hopeless-romantic-society": ["hopeless-romantic-society", "sans-serif"],
      "klimaks-bold-italic": ["klimaks-bold-italic", "sans-serif"],
      "klimaks-bold": ["klimaks-bold", "sans-serif"],
      "monteilga-regular": ["monteilga-regular", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "our-story": "url('/src/assets/images/edited-photos/our-story-background.png')",
      },
      colors: {
        "primary-site-color": "#F4F1BB",
        "off-white": "#FBFBEB",
        "highlight-blue": "hsla(182, 75%, 36%, 1)",
        "highlight-red": "#FF8A7A",
        "half-baked": "#98C8CA",
        "footer-green": "hsla(125, 25%, 90%, 1)",
        "gifting-pink": "hsla(7, 100%, 74%, 0.48)",
        "gifting-pink-dark": "hsla(7, 100%, 74%, 1)",
        "bible-verse-signature": "hsla(26, 90%, 66%, 1)",
        ivory: {
          50: "#fbfbeb",
          100: "#f6f6cb",
          200: "#eeec9a",
          300: "#e4db60",
          400: "#dbc834",
          500: "#cbb227",
          600: "#af8d1f",
          700: "#8c681c",
          800: "#75541e",
          900: "#64461f",
          950: "#3a250e",
        },
        "earth-orange": "#ED6A5A",
        terracotta: {
          50: "#fef3f2",
          100: "#fde6e3",
          200: "#fdd0cb",
          300: "#fab0a7",
          400: "#f58274",
          500: "#ed6a5a",
          600: "#d83d2a",
          700: "#b53020",
          800: "#962b1e",
          900: "#7d291f",
          950: "#44110b",
        },
        "light-blue": "#9BC1BC",
        "breaker-bay": {
          50: "#f2f9f9",
          100: "#deefef",
          200: "#c1dfe0",
          300: "#96c8ca",
          400: "#5ca4a9",
          500: "#488c92",
          600: "#3e747c",
          700: "#385f66",
          800: "#345056",
          900: "#2f454a",
          950: "#1b2c31",
        },
        "site-gray": "#E6EBE0",
        "green-white": {
          50: "#f7f8f5",
          100: "#e6ebe0",
          200: "#d9e1d1",
          300: "#bbc8ad",
          400: "#95a781",
          500: "#74885f",
          600: "#5d6f4a",
          700: "#4b583d",
          800: "#3e4833",
          900: "#333c2b",
          950: "#191f14",
        },
      },
      animation: {
        "scroll-left": "scroll-left linear infinite",
        "scroll-right": "scroll-right linear infinite",
        "flip-words": "flip-words 8s infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "scroll-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "flip-words": {
          "10%": { transform: "translateY(-112%)" },
          "25%": { transform: "translateY(-100%)" },
          "35%": { transform: "translateY(-212%)" },
          "50%": { transform: "translateY(-200%)" },
          "60%": { transform: "translateY(-312%)" },
          "75%": { transform: "translateY(-300%)" },
          "85%": { transform: "translateY(-412%)" },
          "100%": { transform: "translateY(-400%)" },
        },
      },
    },
  },
  plugins: [heroui(), mtConfig()],
};
