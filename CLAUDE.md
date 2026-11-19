# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bersbo Labs LLC holding page at bersbo.com, served by GitHub Pages (`CNAME`). Single-page static site: no frameworks, no build step.

## Development

Open `index.html` directly in a browser, or serve locally:

```
python3 -m http.server 8000
```

No build, lint, or test commands. Plain HTML/CSS/JS.

## Architecture

- `index.html`: the page. Loads Google Fonts (Bodoni Moda 700, IBM Plex Mono 400), `styles.css`, `main.js`
- `styles.css`: all styling and design tokens as CSS variables; terrain, scan line and fade-in animations; reduced-motion fallback
- `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`, `icon-512.png`: Bodoni B (optical size 6 so it holds at 16px). Links carry ?v=N: bump it when the icon changes, Safari caches favicons hard
- `main.js`: sets the footer year and builds the dot terrain (54x22 desktop, 34x16 mobile)

## Brand (v2, "Ink")

- Ink `#0A0E17` ground · Deep Ink `#121826` surfaces · Frost `#E9EDF3` wordmark, links · Mist `#C5CCD8` body · Slate `#8791A3` metadata · Steel `#9FB4D9` terrain
- Coral `#FF5C39` is reserved for something genuinely live (a new entity, an announcement). Never decoration.
- Wordmark: Bodoni Moda 700, caps, +0.035em, opsz 96, max 184px. Wordmark only.
- Data layer: IBM Plex Mono caps, +0.14em, 11 to 13px. Motto +0.42em.
- Headline/body (future pages): Host Grotesk 500/400.
- One line per corner: BERSBO LABS / X + LinkedIn / coordinates / copyright.
- Motion: one moving system (the terrain). Slow loops, ease-in-out, nothing snaps.

## Design Intent

Mysterious, large, withheld. Scale comes from what we don't say: no numbers, no claims, no logos, no CTAs. The only links are X and LinkedIn. Preserve this restraint.
