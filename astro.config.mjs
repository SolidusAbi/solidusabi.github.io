// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

import { remarkAlert } from "remark-github-blockquote-alert";
import { unified } from "@astrojs/markdown-remark"

// https://astro.build/config
export default defineConfig({
    integrations: [react(), sitemap()],
    markdown: {
        processor: unified({
            remarkPlugins: [[remarkAlert, { legacyTitle: true }]],
        }),
    },
    vite: {
        plugins: [tailwindcss()],
    },
    site: template.website_url,
    base: template.base,
    redirects: {
        [`${template.base}/papers`]: `${template.base}/papers/1`,
    },
});
