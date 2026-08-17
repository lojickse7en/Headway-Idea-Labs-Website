# UI kit — Marketing website

Recreation of the headwayidealabs.io marketing surface, composed **entirely from this
system's primitives** (`Button`, `SectionHeading`, `FeatureCard`, `StepCard`, `Pill`,
`StatBlock`, `Testimonial`, `Badge`, `NewsletterForm`).

## Screens

| File | Screen |
| --- | --- |
| `HomeScreen.jsx` | Homepage — hero, differentiators, journey, who we serve, testimonials, CTA |
| `ProgramScreen.jsx` | Post-Accelerator Program page (the signed-off page) + the hero readiness card |
| `SiteChrome.jsx` | Sticky header with hover dropdowns, dark-brown footer |
| `App.jsx` | Click-through shell; the pill switcher bottom-centre swaps screens |

Open `index.html`. The nav "Programs → Post-Accelerator Program" item also navigates.

## Copy status

- **`ProgramScreen` copy is final** — client-approved, verbatim from the delivered page.
- **`HomeScreen` copy is representative.** It follows the live site's section structure and
  brand voice, but the live homepage wording was not transcribed verbatim. Replace with real
  copy before using it as a source of truth.

## Known simplifications

- Mobile layout relies on the CSS breakpoints in `index.html`; the hamburger menu of the real
  site is not reproduced here (see the delivered page for that implementation).
- Images hot-link from the client's CDN — see `assets/README.md`.
