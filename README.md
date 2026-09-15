# Subhransu Rout — Portfolio (React + TypeScript)

A premium, dark, terminal/security-themed portfolio built with React, TypeScript, Tailwind CSS v4,
and Framer Motion.

## Stack

- **React 19 + TypeScript** — component-based UI
- **Vite** — dev server & build tool
- **Tailwind CSS v4** — utility styling (via `@tailwindcss/vite`, no separate config file needed)
- **Framer Motion** — scroll reveals, 3D tilt on cards, modal transitions, terminal typing animation

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Editing your real content

Everything you'd want to change routinely — email, GitHub/LinkedIn links, resume path, projects,
skills, certifications, timeline, dashboard numbers — lives in **one file**:

```
src/data/config.ts
```

Update the `CONFIG` object there and the whole site updates automatically. You should not need to
touch any component file for normal content edits.

Key things to fill in before deploying:

- `CONFIG.links.email` / `github` / `linkedin` / `resume` — currently placeholders
  (`YOUR_EMAIL`, `YOUR_GITHUB_URL`, etc.)
- `CONFIG.links.hawkProjectUrl` / `hawkGithubUrl` — HAWK AI's real links
- `CONFIG.projects` — add real project objects; each has a `categories` array
  (`"cybersecurity" | "fullstack" | "ai" | "websites"`) that drives the filter buttons automatically
- `CONFIG.certifications.completed` — intentionally left empty; only add certifications here once
  they're actually verified
- Resume file: if you want to serve an actual PDF, drop it in `public/` (e.g. `public/resume.pdf`)
  and set `CONFIG.links.resume = "/resume.pdf"`

## Project structure

```
src/
  components/       Reusable UI primitives (Nav, Footer, Reveal, Tilt, Terminal, Counter)
  sections/         One file per page section (Hero, About, Projects, CyberLab, ...)
  hooks/            useActiveSection (scrollspy for nav highlighting)
  data/config.ts    All editable content lives here
  App.tsx           Assembles sections in order
  index.css         Design tokens (colors, fonts) + global styles
```

## Notes

- Motion respects `prefers-reduced-motion` throughout (reveals, typing animation, tilt).
- The 3D tilt effect (`components/Tilt.tsx`) is pointer-based and does nothing on touch devices.
- No fabricated stats, certifications, or experience are hardcoded — every number/claim comes from
  `config.ts`, so keep it honest as you fill it in.

## Deploying

This is a static Vite build — `npm run build` outputs a `dist/` folder you can deploy to Vercel,
Netlify, GitHub Pages, or any static host.
