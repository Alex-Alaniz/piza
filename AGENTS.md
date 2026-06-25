# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## What This Is

PIZA.GLOBAL — the talent-management company website for Stephanie Piza. Next.js 16 App Router project bootstrapped via v0, deployed on Vercel at **https://piza.bearified.co**. The brief (from the client): a short, exclusive, cinematic "velvet rope" landing — black/near-black base with a single **PIZA red** accent — for an ownership-first creator-representation company.

> `CLAUDE.md` is a byte-for-byte mirror of this file addressed to Claude Code. If you change architecture facts here, update `CLAUDE.md` too so the two don't drift.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build with TypeScript validation enabled
npm run lint     # Runs the live-app TypeScript check
npm run typecheck # Runs tsc --noEmit
npm run start    # Serve production build
```

No test suite. No `.env` files — the site is fully static with no backend. The documented workflow uses **npm** and `package-lock.json` is the single lockfile.

## Architecture

### Routes — four public editorial pages

The current client-approved structure is a four-page editorial flow from Taylor's June 4/June 9 notes: entry page, Foundation, Philosophy, and Stephanie bio/socials. Earlier internal/variant routes (`/options`, `/options/a|b|c`, `/pitch`, `/v2`, `/v3`) and the `public/blueprint/` deck assets were **removed in commit `d765009` ("fix: lock PIZA launch routes")** and must not come back on the client domain.

| Route | File | What it is |
|-------|------|------------|
| `/` | `app/page.tsx` | Page 1 entry: full-viewport cigar/hand image with PIZA logo on top. Logo click enters `/foundation`. |
| `/foundation` | `app/foundation/page.tsx` | Page 2: "A company built for people that hold culture..." plus "The Foundation" positioning. |
| `/philosophy` | `app/philosophy/page.tsx` | Page 3: "The Philosophy" with the exact philosophy terms and "The people we back" line. |
| `/stephanie` | `app/stephanie/page.tsx` | Page 4: Stephanie bio, PIZA/Stephanie socials, and contact. |
| `/robots.txt` | `app/robots.ts` | Indexing rules. Allows `/` + declares the sitemap. Avoid listing `Disallow:` lines for deleted internal paths because `robots.txt` is world-readable. |
| `/sitemap.xml` | `app/sitemap.ts` | Lists the four public routes. |

The page route files are server components that import client components from `app/piza-site.tsx`.

### Animation System

Shared stack, but the live routes deliberately use a compact custom system in `app/piza-site.tsx` rather than a generic animation wrapper.

1. **`lib/gsap.ts`** — Central GSAP + ScrollTrigger registration. Always import GSAP from here, never from `gsap` directly.
2. **`components/smooth-scroll.tsx`** — Lenis smooth-scroll wrapper synced to GSAP's ticker via `ScrollTrigger.update`; respects `prefers-reduced-motion: reduce`. Each page opts in through `SiteShell`.
3. **`components/noise-overlay.tsx`** — Fixed SVG film-grain overlay (`feTurbulence` generator, opacity ~0.04). Used by `SiteShell`.
4. **`app/piza-site.tsx`** — Shared client-side page system: `EntryPage`, `FoundationPage`, `PhilosophyPage`, `StephaniePage`, `Nav`, `CustomCursor`, and private `ReviewOverlay`.

GSAP motion is gated behind `prefers-reduced-motion: no-preference` (`allowsMotion()` in `app/piza-site.tsx`). The custom cursor hides the native pointer (`cursor: none` on `.piza-shell`, ≥900px fine pointer); a `@media (prefers-reduced-motion: reduce)` override in `globals.css` restores `cursor: auto` so reduced-motion users always have a visible pointer.

### Design Tokens

- **Color system:** OKLCH throughout, defined in `app/globals.css` `:root`, and written inline in `className` strings on the page.
  - Background `oklch(0.045 0 0)` (near-black) · Foreground `oklch(0.96 0.015 95)` (warm white)
  - **Accent `oklch(0.63 0.23 28)` — PIZA red, the single accent**, pulled from the logo per the client's brief ("Keep Black & White; accent red comes from the PIZA logo").
- **Fonts:** three Google Fonts loaded in `app/layout.tsx` as CSS variables: `--font-plex` (IBM Plex Sans, body), `--font-mono` (IBM Plex Mono, labels/small-caps), `--font-display` (Oswald, thinner editorial display).
- **CSS utility classes in `app/globals.css`:** `.piza-button` / `.piza-button-primary`, `.piza-shell` (focus + cursor control), and the custom-cursor primitives `.piza-cursor` / `.piza-cursor-dot` (gated to `pointer: fine` >=900px).

### layout.tsx

Root layout sets `<html lang="en" className="dark">`, loads the three fonts, mounts Vercel `<Analytics />`, and defines full SEO metadata: `metadataBase: https://piza.bearified.co`, OpenGraph + Twitter cards (`/piza/piza-og.png`, 1200x630), and the icon set under `/piza/`.

### Stylesheets

- **`app/globals.css`** — the active stylesheet (imported by layout). Tailwind 4 (`@import "tailwindcss"`), PIZA dark-theme tokens, and all utility classes.

### shadcn/ui

`components/ui/` holds the unused v0 shadcn scaffold (new-york style, RSC-compatible, Lucide icons) configured via `components.json`. It is excluded from `tsconfig.json` because the live app uses custom markup and the scaffold references packages that are not installed.

### Static Assets

- **`public/piza/`** — production brand assets: `piza-inflated-transparent.png` (red inflated logo), `cigar-hero.jpg` (1320×1649 landing hero), `onwhite-red-inflated-logo.png`, OG images, favicons/app icons.
- Leftover v0 scaffold (`placeholder-*.{png,svg,jpg}`, `icon-*.svg/png`, `apple-icon.png`) is unused.
- `public/blueprint/` (the 20 partnership-deck PNGs) was **removed in `d765009`** along with the `/pitch` route.

## Key Patterns

- The public route files are intentionally thin and import shared client components from `app/piza-site.tsx`.
- OKLCH values are written inline in `className` strings (e.g. `bg-[oklch(0.045_0_0)]`) rather than via CSS variables — a palette change means find-and-replace across the page, not editing one token.
- `@/*` path alias maps to the project root.
- `next.config.mjs` sets `images.unoptimized: true`; TypeScript build validation is enabled.
- The repo is linked to a v0 project and v0 pushes commits directly to `main`; merges to `main` auto-deploy on Vercel. Hand-edits and v0 edits share the same branch, so pull before working.
