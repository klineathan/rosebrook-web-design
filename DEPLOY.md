# Deploy Rosebrook design system as a static site

The docs **are** the site. HTML lives at the repository root. No bundler, no `dist/`, no Storybook.

## Coolify — Static / Nginx (preferred)

| Field | Value |
|-------|--------|
| Resource type | Static site (Nginx) or “Static” |
| Repository | `klineathan/rosebrook-web-design` |
| Branch | `main` (or this feature branch until merged) |
| Base directory | `/` |
| Publish directory | `/` (or `.`) |
| Build command | *(empty)* |
| Install command | *(empty)* |
| Output / public folder | `/` |

Coolify should serve `index.html` at `/`, `color.html` at `/color.html`, and so on. CSS, JS, and `assets/` are sibling paths.

If the UI offers **Nixpacks** instead of a dedicated Static pack, keep the same publish directory and leave the build empty. A starter `nixpacks.toml` is in the repo so Nixpacks does not look for a Node app.

## Coolify — Nixpacks static

`nixpacks.toml` pins a static file server. It does not run `npm install` or a compile step.

If you override start commands in the Coolify UI:

```text
# not needed — nixpacks.toml already starts Caddy
```

Port: whatever Coolify injects (`PORT`). Caddy in the toml listens on `$PORT` defaulting to `80`.

## GitHub Pages (optional)

If you ever publish there, the site still needs **no build**. Source = `/` (root). Add a Pages workflow only if you want one; it is not required for Coolify.

## Health check

After deploy, open:

- `/` — design hall
- `/color.html` — pigments
- `/css/rosebrook.css` — stylesheet (plain text)
- `/assets/logo-300.png` — lockup

If CSS 404s, the publish directory is wrong (often set to `/docs` or `/dist` by habit). Point it at `/`.
