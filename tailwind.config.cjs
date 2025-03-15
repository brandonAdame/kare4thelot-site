// tailwind.config.cjs
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,astro:jsx,astro:jsx-dev-runtime,astro:tsx,astro:tsx-dev-runtime,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        "primary-site-color": "#F4F1BB",
        "off-white": "#FBFBEB",
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
      },
    },
  },
  plugins: [heroui()],
};
