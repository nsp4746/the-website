import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://nikhil-p-03.netlify.app",
  integrations: [preact(), mdx()]
});