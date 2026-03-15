# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build (also runs TypeScript check)
npm run lint     # ESLint
npm run start    # Start production server (after build)
```

There are no tests configured. TypeScript errors surface during `npm run build`.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript** strict mode — `@/*` maps to `./src/*`
- **Tailwind CSS v4** — configured via `postcss.config.mjs` with `@tailwindcss/postcss`. There is no `tailwind.config.*` file; all theme tokens are CSS custom properties in `src/app/globals.css`. Use `@import "tailwindcss"` (not `@tailwind base/components/utilities`).
- **Framer Motion** for animations and parallax
- **lucide-react** for icons
- **clsx + tailwind-merge** via `cn()` in `src/lib/utils.ts`

## Architecture

### Page routing pattern

App Router pages in `src/app/` are intentionally thin — each only imports and re-exports from `src/featured/`:

```
src/app/page.tsx          → imports src/featured/home/index.tsx
src/app/residential/      → imports src/featured/residential/index.tsx
src/app/commercial/       → imports src/featured/commercial/index.tsx
src/app/contact/          → imports src/featured/contact/index.tsx
```

**All page content and composition lives in `src/featured/`**, not in `src/app/`. App Router pages only add `export const metadata` and re-export the default. This keeps routes clean and page logic testable/movable.

### Component layers

```
src/components/
  layout/   ← Navbar, Footer (used in root layout)
  sections/ ← Full-width page sections (HeroSection, ServicesSection, ParallaxImageSection, GallerySection, ContactSection)
  ui/       ← Primitive components (Button, Input, Textarea)
```

Sections are composed inside `src/featured/` pages. UI primitives are used inside sections. Sections should never import other sections.

### Key component behaviours

- **`HeroSection`** — takes a `HeroSlide[]` prop; handles its own auto-advance timer, parallax via `useScroll`/`useTransform`, and slide animations. All hero content (images, text, CTAs) is passed as props from the featured page — the component itself is generic.
- **`ParallaxImageSection`** — reusable alternating image+text block with scroll-driven parallax on the image. Accepts `reverse` and `dark` boolean props to flip layout and apply the dark navy background.
- **`Navbar`** — fixed position, transitions from transparent to `bg-[#293a4b]/95` on scroll. Uses `usePathname` for active link highlighting.
- **`Button`** — polymorphic: renders `<button>` when no `href`, renders Next.js `<Link>` when `href` is provided.

### Framer Motion typing gotcha

When defining variants with custom `ease` strings, TypeScript requires using the `Easing` type explicitly:

```ts
import { type Easing } from "framer-motion";
const ease: Easing = "easeOut";
```

Passing `ease: "easeOut"` as a plain string literal inside a variant object will cause a type error.

### Global constants

Site-wide data (phone number, nav items, service locations) lives in `src/lib/utils.ts` as named exports — not hardcoded in components.

### Colour palette

All colours are hardcoded as Tailwind arbitrary values (`text-[#293a4b]`, `bg-[#006884]`, etc.) matching the original brand:

| Token | Hex |
|---|---|
| Primary (navy) | `#293a4b` |
| Secondary (sky blue) | `#97bcc7` |
| Accent (teal) | `#006884` |
| Warm (gold) | `#bfa76a` |
| Body text | `#143756` |

### Images

All scraped project images live in `public/images/`. Next.js `<Image>` is used everywhere — add `width` and `height` props or use `fill` with a positioned parent.

### Environment variables

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_` prefix required for any variable accessed in client components.
