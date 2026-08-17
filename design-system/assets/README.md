# Assets

Real brand files, imported from the `lojickse7en/Headway-Idea-Labs-Website` repository
(from the saved-page asset dump). These are local — prefer them over CDN URLs.

## Logo — `assets/logo/`

| File | Use |
| --- | --- |
| `headway-logo.png` | Primary logo — navy HEADWAY + orange IDEA LABS. Header, light backgrounds. Render at 46px tall. |
| `headway-logo-white.svg` | White/on-dark variant (the live site's footer mark). Use on the brown footer and navy panels. |

Prefer the SVG on dark surfaces rather than filtering the PNG. There is no icon-only mark —
where a square mark is needed, set the brand name in Poppins 800.

## Imagery — `assets/images/`

| File | Use |
| --- | --- |
| `hero-founder.webp` | Founder-with-laptop hero cut-out (882×738). Sits over the warm hero background. |

## Still CDN-only

These exist in the client's WordPress media library but were not in the repo dump. They
hot-link reliably from `https://i0.wp.com/headwayidealabs.io/wp-content/uploads/`:

| Use | Path fragment |
| --- | --- |
| Wide hero banner background | `2025/09/banner.webp?fit=1920%2C814&ssl=1` |
| Programme collage 1–3 | `2025/08/img1.png`, `img2.png`, `img3.png` |
| Compass / journey diagram | `2025/09/Group-1577708477-1.png` |
| Meeting-room + tags diagram | `2025/08/Group-1577707690.png` |
| Testimonial headshots | `2025/08/ismael-el-amin.jpg`, `heathbutler.jpg`, `patricia-vega.jpg` |
| Process / values / audience icon PNGs | `2025/08/1.png`–`4.png`, `1-1.png`–`6.png`, `1-2.png`–`5-1.png` |

To make the system fully self-contained, add those files to the repo dump (or drop them
into `assets/images/`) and I will swap the references.

## Icons

No vector icon source exists — the live site uses flat raster PNGs. Components use a
Lucide-equivalent line style (26px, `stroke-width:2`, round caps). See `readme.md` →
Iconography. `submit-spin.svg` in the repo dump is a WooCommerce spinner, not brand iconography.
