# Vishakh Portfolio (Svelte + TS + Vite)

Resume-driven portfolio website built with Svelte (no SvelteKit), TypeScript, Vite, and Tailwind CSS.
All rendered page content is sourced from a single JSON file.

## Stack

- Svelte 5 + TypeScript
- Vite
- Tailwind CSS
- pnpm

## Development

```bash
pnpm install
pnpm dev
```

## Build and Type Check

```bash
pnpm check
pnpm build
```

## Content Management (`data.json` only)

Edit this file to update portfolio content:

- `src/data/data.json`

The app renders sections directly from this schema:

- `basics`
- `about`
- `experience`
- `technicalSkills`
- `coreSkills`
- `personalInfo`
- `projects` (optional, currently empty)
- `certifications` (optional, currently empty)
- `socialLinks` (optional)

## Design-Tuning Workflow

To adjust visuals while keeping maintenance simple:

1. Update shared style tokens in `tailwind.config.js` (colors, spacing, radii, shadows).
2. Apply per-section refinements in component classes under `src/components/`.
3. Keep structure/content logic inside `src/data/data.json` and `src/types/portfolio.ts`.

## Reference Inputs Used

- Repo inspiration: <https://github.com/shahsagarm/sagarshah.dev>
- Figma pages: <https://www.figma.com/design/F6dMkIukgnKvakI7U1AFqk/Personal-Portfolio-Website-Template-%7C-Mobile---Desktop--Community-?node-id=0-1&p=f&t=DCEy3fHLZB9qpdBF-0>
- Figma components/style guide: <https://www.figma.com/design/F6dMkIukgnKvakI7U1AFqk/Personal-Portfolio-Website-Template-%7C-Mobile---Desktop--Community-?node-id=114-2&p=f&t=DCEy3fHLZB9qpdBF-0>
