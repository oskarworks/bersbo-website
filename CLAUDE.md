# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bersbo Industries LLC holding page at bersbo.com. Single-page, static site — no frameworks, no build step.

## Development

Open `index.html` directly in a browser, or serve locally:

```
python3 -m http.server 8000
```

No build, lint, or test commands — this is plain HTML/CSS/JS.

## Architecture

- `index.html` — single page, loads Google Fonts (Libre Baskerville + Inter), links `styles.css` and `main.js`
- `styles.css` — all styling; uses CSS `clamp()` for responsive typography, CSS animation for hero fade-in, inline SVG noise overlay via `body::after`
- `main.js` — sets the current year in the footer copyright

## Design Tokens

- Background: `#F4F2EE` (stone/off-white)
- Primary text: `#0F0F0F` (near-black)
- Secondary text (footer): `#2B2B2B` (iron grey)
- Hero font: Libre Baskerville 700, all caps, `letter-spacing: 0.06em`
- Footer font: Inter 400, 13px
- Desktop padding: 96px; mobile: 32px (breakpoint at 768px)

## Design Intent

The site should feel quiet, permanent, editorial, and industrial — like a private industrial house. No marketing language, no CTAs, no links, no extra UI. Changes should preserve this restraint.
