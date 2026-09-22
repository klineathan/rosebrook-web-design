# Rosebrook web design system

Plain **HTML & CSS** for [Rosebrook RPG Goods](https://rosebrookrpggoods.com) — cozy fantasy tavern, parchment and leather.

This repo is the reusable web design hall: tokens, type, components, voice, and logo rules. There is **no React, no Vite, no Storybook, and no build step**. Open the files, or serve the directory as a static site.

## What’s here

| Path | Role |
|------|------|
| `index.html` | Design hall (overview) |
| `color.html` | Color tokens + spacing / radius / gold glow |
| `type.html` | Cinzel, Cinzel Decorative, Crimson Text |
| `components.html` | Buttons, links, cards, badges, inputs, nav, banners, dialog |
| `voice.html` | Voice & content |
| `logo.html` | Logo usage |
| `css/tokens.css` | Custom properties (live-site names: `--parchment`, `--gold`, …) |
| `css/base.css` | Reset + typography primitives |
| `css/components.css` | Component styles + live-site aliases (`.btn-gold`, …) |
| `css/rosebrook.css` | Single import for products (`tokens` + `base` + `components`) |
| `css/docs.css` | Docs-site chrome only — do not ship with a shop |
| `js/docs.js` | Optional: mobile nav, swatch copy, `<dialog>` |
| `assets/logo-300.png` | Brand lockup |
| `assets/tokens.json` | Machine-readable token export |

## Use the CSS in another page

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Cinzel+Decorative:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/rosebrook.css">
```

Then use classes such as `rb-btn rb-btn--gold`, `rb-card`, `rb-nav`. Live-shop names (`btn`, `btn-gold`, `btn-outline`, `btn-sm`) still work.

## Open locally

From the repo root (no install required):

```bash
# Python
python3 -m http.server 8080

# or Node, if you have it
npx --yes serve -l 8080
```

Visit <http://localhost:8080>.

## Deploy on Coolify (static site)

Treat this repository as **static files**. There is nothing to compile.

1. Create a Coolify resource: **Static site** (Nginx) or **Nixpacks** with a static/Nginx start.
2. **Base directory:** `/` (repo root).
3. **Publish directory:** `/` (HTML lives at the root: `index.html`, not `/docs`).
4. **Build command:** leave empty. No `npm run build`.
5. If Coolify asks for an output folder, set it to `.` or `/`.

See [DEPLOY.md](DEPLOY.md) for Nixpacks notes and a checklist.

## Brand

Tokens match the live site (2026-09-21): parchment `#F0E6C8`, leather `#2C1A0E`, gold `#B8860B`, ink `#1A0F08`, and kin. Type is Cinzel / Cinzel Decorative / Crimson Text only.
