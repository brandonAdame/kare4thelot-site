// tailwind.config.cjs
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{astro,astro:jsx,astro:jsx-dev-runtime,astro:tsx,astro:tsx-dev-runtime,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      "site-main-font": ["Kotta One", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-site-color": "#F4F1BB",
        "earth-orange": "#ED6A5A",
        "light-blue": "#9BC1BC",
        "dark-blue": "#5CA4A9",
        "site-gray": "#E6EBE0",
      },
    },
  },
  plugins: [heroui()],
};
