// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves a project repo under /<repo>/, so the site must be built
// with that base path baked in. Cloudflare Pages serves at the root, so the
// base is '/' there. CI sets SITE_BASE; local dev leaves it unset.
const base = process.env.SITE_BASE || '/';
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  base,
  site,
  trailingSlash: 'always',
});
