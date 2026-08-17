# Headway Idea Labs — Design System

Design system for headwayidealabs.io (WordPress / Elementor). Encodes the **new** visual
direction established by the Post-Accelerator Program page — not the legacy live-site styling.

Start with **`readme.md`** — it is the design guide (company context, content voice, visual
foundations, iconography, caveats).

## Structure

```
design-system/
├── readme.md            ← the design guide. read this first
├── SKILL.md             ← Agent Skills wrapper (works as a skill in Claude Code)
├── styles.css           ← entry point; @imports every token file
├── tokens/              ← colors, typography, spacing, effects, fonts
├── components/          ← React primitives (.jsx + .d.ts + .prompt.md)
│   ├── actions/         ← Button, LinkArrow
│   ├── content/         ← SectionHeading, FeatureCard, StepCard, Pill,
│   │                      StatBlock, Testimonial, Badge
│   └── forms/           ← Input, NewsletterForm
├── guidelines/          ← 17 foundation specimen cards (colors, type, spacing, brand)
├── ui_kits/website/     ← click-through marketing-site recreation
├── assets/README.md     ← logo + imagery URLs (CDN-referenced, not bundled)
└── reference/
    ├── Post Accelerator Page.html              ← the approved page (source of truth)
    ├── Post Accelerator Page (standalone).html ← same page, self-contained/offline
    └── Build Spec.html                         ← developer spec sheet
```

## Quick facts

- **Fonts:** Poppins (headings, labels, buttons), Open Sans (prose) — Google Fonts.
- **Core colors:** navy `#0E2A4D`, orange `#F5841F`, teal `#40A9C9`, footer brown `#281F18`.
- **Button gradient:** `linear-gradient(95.4deg, #FD7900 63%, #F8B170 100%)` — fixed; it does
  **not** change on hover. Hover adds glow `-2px 23px 89.1px 0 rgba(253,123,3,.349)` + 2px lift.
- **Layout:** 1180px container, 84px section padding, 26px grid gap; breakpoints 980px / 620px.
- **Sections** alternate white and warm `#FFF9F3`.

Full rules, including content voice and the non-negotiables, are in `readme.md` and `SKILL.md`.

## Caveats

1. Assets are referenced from the client's `i0.wp.com` CDN, not bundled — see `assets/README.md`.
2. Fonts load from Google Fonts; no self-hosted `@font-face` binaries.
3. Icons are a Lucide-equivalent substitution (the client's own icons are raster PNGs).
4. Homepage copy in the UI kit is representative; only the Post-Accelerator screen is verbatim.
