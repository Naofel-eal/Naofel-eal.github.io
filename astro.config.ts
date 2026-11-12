import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { rehypeHeadingIds, unified } from "@astrojs/markdown-remark";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { rehypeTableWrapper } from "./src/utils/rehypeTableWrapper";
import {
  inlineTocDeprecation,
  rehypeInlineToc,
} from "./src/utils/rehypeInlineToc";
import { readdirSync, readFileSync } from "node:fs";
import config from "./astro-paper.config";

// Date de dernière modification de chaque article, pour le <lastmod> du sitemap
const postLastmod = new Map<string, string>();
for (const file of readdirSync("src/content/posts")) {
  if (file.startsWith("_") || !/\.mdx?$/.test(file)) continue;
  const frontmatter =
    readFileSync(`src/content/posts/${file}`, "utf8").match(
      /^---\n([\s\S]*?)\n---/
    )?.[1] ?? "";
  const raw = (frontmatter.match(/^modDatetime:\s*(\S+)/m) ??
    frontmatter.match(/^pubDatetime:\s*(\S+)/m))?.[1];
  const date = raw ? new Date(raw) : null;
  if (date && !Number.isNaN(date.getTime())) {
    postLastmod.set(
      `/posts/${file.replace(/\.mdx?$/, "")}/`,
      date.toISOString()
    );
  }
}
const latestPost = [...postLastmod.values()].sort().at(-1);

export default defineConfig({
  site: config.site.url,
  integrations: [
    mdx(),
    sitemap({
      // Pages utilitaires exclues (elles sont aussi en noindex)
      filter: page => !/\/(search|404)\/?$/.test(page),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod =
          postLastmod.get(path) ??
          (path === "/" || path === "/posts/" ? latestPost : undefined);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
    inlineTocDeprecation(),
  ],
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    // Deprecated: the theme no longer uses remark-toc or remark-collapse. They
    // stay in package.json so a customised config importing them still builds,
    // and are removed in v8.
    processor: unified({
      rehypePlugins: [
        rehypeHeadingIds,
        rehypeInlineToc,
        rehypeCallouts,
        rehypeTableWrapper,
      ],
    }),
    shikiConfig: {
      themes: { light: "github-light-default", dark: "github-dark-default" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      // Police réservée au code : graisses et formats utiles uniquement
      // (woff2 pour le navigateur, ttf pour les images de partage générées)
      weights: [400, 500, 700],
      styles: ["normal"],
      formats: ["woff2", "ttf"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
