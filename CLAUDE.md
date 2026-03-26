# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for [obedur-os](https://github.com/sorubedo/obedur-os), a Linux distribution. Built with Astro Starlight.

## Commands

```bash
pnpm dev      # Start dev server at localhost:4321
pnpm build    # Build production site to ./dist/
pnpm preview  # Preview the built site locally
pnpm astro -- --help  # Get help with Astro CLI
```

## Architecture

- **Content location**: All documentation pages are in `src/content/docs/`
- **Sidebar configuration**: `astro.config.mjs` - sidebar structure is manually defined (not auto-generated except for `/reference` section)
- **Schema**: Content collections use Starlight's `docsSchema()` from `@astrojs/starlight/schema`
- **Site URL**: `https://sorubedo.github.io/obedur-docs`
