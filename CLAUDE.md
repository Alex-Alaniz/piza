# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

PIZA.GLOBAL — a talent management company website for Stephanie Piza. Next.js 16 App Router project bootstrapped via v0, deployed on Vercel. The site is a dark, cinematic landing with GSAP scroll animations and Lenis smooth scrolling.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build (TypeScript errors are ignored via next.config.mjs)
npm run lint     # ESLint
npm run start    # Serve production build
```

No test suite exists. No `.env` files are needed — the site is fully static with no backend.

## Architecture

### Routes

- `/` — Main landing page (Nav, Hero, Pillars, Contact)
- `/pitch` — Full pitch deck for PIZA x Bearified partnership (12-slide scroll deck with blueprint diagrams)
- `/v2` — Editorial variant of the landing (Cover, Pull, Editorial, Roster, End)
- `/v3` — Ultra-minimal single-screen variant (just wordmark + contact)

All pages are `"use client"` — no server components in page files.

### Animation System

Every page uses a shared animation stack:

1. **`lib/gsap.ts`** — Central GSAP + ScrollTrigger registration. Always import from here, not from `gsap` directly.
2. **`components/smooth-scroll.tsx`** — Lenis smooth scroll wrapper that syncs with GSAP's ticker via `ScrollTrigger.update`. Wraps page content on `/`, `/pitch`, and `/v2`.
3. **`components/animated-section.tsx`** — Scroll-triggered section wrapper. Elements with `data-animate` attribute get staggered entrance animations. Also applies parallax to `.section-inner` children.
4. **`components/noise-overlay.tsx`** — Fixed SVG noise texture overlay (opacity 0.04).
5. **`components/scramble-text.tsx`** — Mouse-hover text scramble effect.

### Design Tokens

- **Color system:** OKLCH throughout. Accent is `oklch(0.7 0.2 45)` (warm amber/gold). Background is `oklch(0.08 0 0)`.
- **Fonts:** Three Google Fonts loaded in `app/layout.tsx` via CSS variables:
  - `--font-plex` (IBM Plex Sans) — body text
  - `--font-mono` (IBM Plex Mono) — labels, small caps
  - `--font-display` (Bebas Neue) — headlines, uppercase display
- **CSS classes defined in `app/globals.css`:** `.font-display`, `.section-label`, `.label-badge`, `.accent-line`, `.stat-glow`, `.card-hover`, `.cta-primary`, `.cta-outline`, `.vertical-label`, `.slide-divider`, `.grid-bg-fixed`, `.scanlines`

### Two globals.css Files

- **`app/globals.css`** — The active stylesheet (imported by layout). Contains PIZA-specific dark theme tokens and utility classes.
- **`styles/globals.css`** — Unused shadcn default with light/dark theme tokens from the v0 scaffold. Not imported anywhere.

### shadcn/ui

57 components in `components/ui/` (new-york style, RSC-compatible, Lucide icons). Configured via `components.json`. Most are unused scaffold from v0 — the actual pages use custom markup with the animation components above.

### Static Assets

`public/blueprint/` contains 20 PNG diagrams (business model, funnel, org chart, etc.) used exclusively in the `/pitch` deck.

## Key Patterns

- Pages define all their section components inline (Nav, Hero, etc.) rather than in separate files
- Inline OKLCH color values are used directly in className strings rather than referencing CSS variables
- The `@/*` path alias maps to the project root
- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- The site is linked to a v0 project — v0 pushes commits directly to this repo
