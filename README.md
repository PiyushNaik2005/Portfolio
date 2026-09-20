# Piyush Naik — AI/ML Portfolio

> **A production-ready, single-page developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.**

Dark-mode fintech/cybersecurity aesthetic with glassmorphism cards, animated particle background, command palette, scroll-spy navbar, live GitHub stats, and fully accessible semantic HTML.

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Build for Production

```bash
npm run build      # outputs to dist/
npm run preview    # local preview of production build
```

---

## Deploying

### Vercel (Recommended — zero config)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import the repo.
3. Framework: **Vite** (auto-detected). Click **Deploy**.
4. Done — your site is live on `*.vercel.app`.

### GitHub Pages
```bash
npm install -D gh-pages
# In package.json, add:
#   "homepage": "https://<your-username>.github.io/<repo-name>"
#   "predeploy": "npm run build"
#   "deploy": "gh-pages -d dist"
npm run deploy
```

---

## Customization

All personal data lives in one file: **`src/data/config.ts`**

| Field | Description |
|-------|-------------|
| `name` | Your display name |
| `github` | Your GitHub profile URL |
| `linkedin` | Your LinkedIn profile URL |
| `email` | Your contact email |
| `resumePath` | Path to your PDF (place at `public/resume.pdf`) |
| `formspreeEndpoint` | [Formspree](https://formspree.io) URL for the contact form |
| `taglines` | Rotating typewriter phrases in the hero |
| `elevatorPitch` | 2-3 sentence bio |
| `skillGroups` | Technical skills matrix entries |
| `projects` | Project cards with full detail view data |

### Adding a Project
In `config.ts`, add an entry to the `projects` array:
```ts
{
  id: "my-project",
  flagship: false,          // set true for the large hero card
  title: "My Project Title",
  shortTitle: "Short Title",
  tagline: "Tech · Stack · Buzzwords",
  badges: ["Python", "PyTorch"],
  accentColor: "violet",    // "violet" | "cyan" | "emerald"
  githubUrl: "https://github.com/...",
  demoUrl: "",              // leave empty if no live demo
  // ... rest of fields (see existing entries for reference)
}
```

---

## Assets You Need to Supply

| Asset | Location | Notes |
|-------|----------|-------|
| ✅ **Resume PDF** | `public/resume.pdf` | Required for Download button |
| ⬜ **OG Image** | `public/og-image.png` | 1200×630px for social previews |
| ⬜ **Real email** | `src/data/config.ts` → `email` | Replace placeholder |
| ⬜ **Formspree endpoint** | `src/data/config.ts` → `formspreeEndpoint` | Sign up at formspree.io |
| ⬜ **GitHub repo links** | Each project in `config.ts` → `githubUrl` | Add your real repo URLs |
| ⬜ **Live demo links** | Each project in `config.ts` → `demoUrl` | Only if deployed |

---

## Features

- **Particle neural-network background** — canvas-based, pauses on `prefers-reduced-motion`
- **Typewriter tagline** — cycles through specialties in the hero
- **Scroll-spy navbar** — highlights active section; gains blur/opacity on scroll
- **Command palette** (Ctrl/Cmd+K) — jump menu for quick navigation
- **Live GitHub stats** — fetches real data from GitHub REST API with 30-min localStorage cache
- **Copy-to-clipboard email** — toast confirmation instead of plain mailto
- **Interactive pipeline viz** — click-to-expand step descriptions (Deepfake project)
- **Expandable project cards** — "More detail" reveals objectives, features, challenges, future work
- **Console easter egg** — greets devtools-opening recruiters
- **WCAG AA accessible** — semantic HTML, visible focus rings, aria labels, alt text, sufficient contrast
- **Fully responsive** — hamburger nav on mobile, fluid grids, no horizontal overflow

## Tech Stack

| Layer | Library |
|-------|---------|
| Framework | React 18 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 3 (custom design system) |
| Animation | Framer Motion |
| Icons | Lucide React + custom SVG brand icons |
| Fonts | Inter (body) + JetBrains Mono (code/mono) via Google Fonts |

---

*Built with ❤️ — Piyush Naik, 2025*
