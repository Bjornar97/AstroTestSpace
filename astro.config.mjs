import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/destinations": "/destinations/moon",
  },
  output: "server",
  adapter: netlify(),
});
