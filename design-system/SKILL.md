---
name: headway-idea-labs-design
description: Use this skill to generate well-branded interfaces and assets for Headway Idea Labs, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, you can copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design,
ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code,
depending on the need.

## Fast orientation

- `readme.md` — company context, content fundamentals, visual foundations, iconography, caveats.
- `styles.css` — link this one file; it imports every token file in `tokens/`.
- `components/` — React primitives (`Button`, `SectionHeading`, `FeatureCard`, `StepCard`, `Pill`,
  `StatBlock`, `Testimonial`, `Badge`, `Input`, `NewsletterForm`). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full marketing-page recreation to fork as a starting point.
- `assets/README.md` — logo and imagery URLs.

## Non-negotiables

1. Primary buttons use `linear-gradient(95.4deg, #FD7900 63%, #F8B170 100%)` and the gradient
   **never changes on hover** — hover adds the glow `-2px 23px 89.1px 0 rgba(253,123,3,.349)`
   plus a 2px lift.
2. Poppins for headings/labels/buttons, Open Sans for prose. Nothing else.
3. Sections alternate white and `#FFF9F3`. Never two identical backgrounds in a row; never more
   than those two body backgrounds on a page.
4. Headlines are sentences with the payoff phrase in orange, ending in a full stop.
5. The footer is warm dark brown `#281F18`, not navy.
6. No emoji, ever. No invented statistics. No gradient-mesh backgrounds or glassmorphism.
7. Write for the programme operator ("your founders"), not the founder.
