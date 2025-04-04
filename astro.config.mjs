// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwindcss()],

  experimental: {
    svg: true,
  },

  adapter: node({
    mode: "standalone",
  }),
});
