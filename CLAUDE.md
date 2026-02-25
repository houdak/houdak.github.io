# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview the production build locally
npx astro add <integration>  # Add an integration (e.g. tailwind, react, mdx)
```

Node.js is installed at `C:\Program Files\nodejs\` and may not be on PATH in the bash shell. If `npm` is not found, prefix commands with `export PATH="/c/Program Files/nodejs:$PATH" &&`.

## Architecture

This is an [Astro](https://astro.build) v5 personal website using the minimal template with strict TypeScript.

- `src/pages/` — File-based routing. Each `.astro` file becomes a route (e.g. `src/pages/index.astro` → `/`)
- `src/layouts/` — Shared page layouts (create as needed)
- `src/components/` — Reusable Astro/UI components (create as needed)
- `public/` — Static assets served as-is (images, fonts, favicon)
- `astro.config.mjs` — Astro configuration (integrations, output mode, etc.)

Astro components use a frontmatter fence (`---`) for server-side JS/TS, followed by HTML-like template syntax. By default all rendering is static (SSG). Use `output: 'server'` or `output: 'hybrid'` in `astro.config.mjs` to enable SSR.
