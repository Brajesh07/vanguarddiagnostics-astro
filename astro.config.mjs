import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://vanguarddiagnostics.com",
  integrations: [mdx(), react(), tailwind({ applyBaseStyles: false }), sitemap()],
  output: "static",
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});

