import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://gamihacks.org",
  integrations: [UnoCSS()],
  adapter: vercel({
    analytics: true,
  }),
});
