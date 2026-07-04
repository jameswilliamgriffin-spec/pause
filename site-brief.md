# Pause — Website Brief (v2)

## Brand basics
- **Name:** Pause
- **Typeface:** Google Sans
- **Brand colour:** #0000ba
- **Tone of voice:** Warm, friendly, casual
- **Aesthetic:** Clean, minimal, coffee-shop — with a blue duotone/overlay treatment
  applied to photography across the site for brand consistency.
- **Address:** 56 Poplar Rd, King's Heath, Birmingham B14 7AG
- **Owners:** Rory (coffee) & Farah (baking)
- **Positioning:** A neighbourhood speciality coffee shop & bakery in Kings Heath,
  built around the idea of slowing down. Known for its signature bake, the
  Cinnabuffin, and for coffee sourced from some of the UK's best roasters.
- **Hours:**
  - Mon–Thu: 8am–4pm
  - Fri: 8am–4pm
  - Sat: 9am–3pm
  - Sun: 9am–3pm

## Structure
- Single scrolling page.
- Nav: ABOUT / COFFEE / BAKED / VISIT — each an anchor link scrolling to its section.
- Hero already partially built — full viewport height, needs white space added
  beneath it before the next section.

## Real assets available
- **Logo:** `pause_blue.svg` and `pause_white.svg` (real logo files — use these directly,
  no need for a placeholder).
- **Photography (real shop photos):**
  - Storefront with blue awnings and "pause." signage — hero or ABOUT visual.
  - Latte art on a blue surface — strong hero candidate (blue tone already close
    to brand colour).
  - Barista pouring milk, close crop — COFFEE section.
  - Branded "pause." cups (lilac/pink stack) — COFFEE detail shot, or a small
    brand moment elsewhere.
  - Cinnabuffins, close up — BAKED / "Today's Bake" hero shot.
  - Cookies (choc chip + sprinkle) — BAKED.
  - Hand reaching for iced traybake — BAKED, warm/human moment.
- Video footage for the VISIT section background — confirmed ready, not yet
  uploaded.

## Section order (top to bottom)
1. Hero (in progress)
2. Intro paragraph (short line, centered, sits in the white space below the hero)
3. ABOUT
4. COFFEE (carousel)
5. BAKED
6. VISIT
7. Weather + Pause Counter (combined section)
8. Footer (brand blue background, includes a marquee-style playlist)

---

## Section specs & drafted copy

### Hero
- Already built. Add white space below it before the intro paragraph.

### Intro paragraph (below hero)
- Short, centered horizontally on the page.
- Draft copy:
  > *Pause is a speciality coffee shop on Poplar Road in Kings Heath, built around
  > a simple idea — slow down. Whether it's a quiet coffee or a catch-up with
  > friends, it's a place to breathe for a moment.*

### ABOUT
- Style: large, centered pull-quote treatment (like the "We're really not ones to
  brag..." reference) — big serif/sans statement text, centered, generous white
  space around it. No image.
- Draft copy (adapt into pull-quote form):
  > *Life moves quickly, and it's easy to rush from one thing to the next. Pause
  > exists as a reminder that taking a break isn't time wasted.*
  >
  > *Behind the counter are co-owners Rory and Farah — Rory's knowledge and
  > passion for coffee shine through in every cup, while Farah's baking has
  > become the reason regulars keep coming back.*

### COFFEE (menu / carousel)
- Carousel layout, alternating large/small image tiles, short heading line, body
  copy below each image, small circular arrow (→) button top-right of each image
  (per the carousel reference image).
- **No prices.**
- All carousel text in brand blue (#0000ba).
- Bold typographic product-card style (pink Stigma/Isolation Coffee reference) —
  undecided whether to borrow this anywhere; revisit later.
- Suggested heading line:
  > *Coffee, taken seriously.*
- Suggested intro copy:
  > *We feature beans from some of the UK's best speciality roasters — including
  > Fire & Flow, Hundred House, Crankhouse, Cloud Picker and River City Roasters.
  > Flat white, filter, or something a little different — every cup is carefully
  > prepared, alongside hot chocolates, matcha, teas and seasonal specials.*
- Suggested carousel items:
  - Flat White — *A classic, done properly.*
  - Filter Coffee — *Rotating single-origin beans from our featured roasters.*
  - Matcha — *Smooth, earthy, and a little different.*
  - Seasonal Special — *Something new, worth trying.*

### BAKED
- Layout: undecided — likely reuse the COFFEE carousel component for consistency,
  or a simple grid. Revisit once COFFEE is built.
- Instead of a static "menu" framing, style this as **"☕ Today's Bake"** — gives
  the impression of a rotating daily selection even if the underlying items are
  fixed for now. Small heading treatment: "☕ Today's Bake" above the carousel/grid.
- Suggested heading:
  > *Home of the Cinnabuffin.*
- Suggested intro copy:
  > *Created by co-owner and baker Farah, the Cinnabuffin is exactly what it
  > sounds like — a cross between a cinnamon bun and a muffin. Soft, flaky,
  > sticky, sweet without being overpowering, and twisted into its own shape.
  > It's difficult to describe properly. You really just have to try one.*
  >
  > *The counter doesn't stop there — expect freshly baked cakes, brownies,
  > cookies, traybakes, focaccia, cupcakes and other homemade treats, with
  > something new to discover most days.*
- Suggested items:
  - Cinnabuffin — *Our signature bake. Start here.*
  - Focaccia
  - Traybakes
  - Cookies & Cupcakes

### VISIT
- Style: full-width video background (footage ready to provide) with address and
  hours overlaid in text — similar to the Santa Monica location reference (large
  location name, address, hours, contact links layered over the visual).
- Content:
  > *56 Poplar Rd, King's Heath, Birmingham B14 7AG*
  >
  > Mon–Thu: 8am–4pm · Fri: 8am–4pm · Sat: 9am–3pm · Sun: 9am–3pm

### Weather + Pause Counter (new section, before footer)
- Combined section, sits between VISIT and the footer.

**Weather widget**
- Clean, minimal, custom-built (not a generic embedded widget look).
- Three states — sun, rain, "normal"/cloudy — each with a super minimal custom
  animation, rendered only in brand blue (no other colours).
- Copy changes dynamically with the weather:
  - Sunny → *"Pause for sunshine."*
  - Rainy → *"Pause for rain."*
  - Normal/cloudy → *(needs a third line — e.g. "Pause, either way.")*
- Pulls real local weather data to decide which state to show.

**Pause Counter**
- Playful, lighthearted stats block sitting alongside/near the weather widget.
- Draft format:
  > 🐾 **Pause Counter**
  > Coffees served today — **487 ☕**
  > Sweet treats — **132 🍰**
  > People who stayed longer than planned — **Unknown ❤️**
- Numbers can be illustrative/placeholder for now (not necessarily live data)
  unless a real counter source is set up later — flag as TBD.

### Footer
- Background: brand blue (#0000ba).
- Layout/content structure: borrow the White site's footer layout — multi-column
  blocks (e.g. newsletter signup, a Pause-relevant middle block, and a "playlist"
  block), plus a bottom bar with logo, tagline, and legal links.
- **Playlist:** a real embedded Spotify (or similar) playlist, styled as a
  three-line marquee:
  - Top line of song titles scrolls left → right
  - Middle line scrolls right → left
  - Bottom line scrolls left → right
  - Hovering over a song reveals its album artwork (per the playlist.png
    reference in the inspiration folder).

---

## Build order
1. ~~Hero~~ (in progress) → add spacing + intro paragraph
2. ABOUT
3. COFFEE (carousel)
4. BAKED ("Today's Bake")
5. VISIT
6. Weather + Pause Counter
7. Footer (incl. marquee playlist)

---

## Open items
- Confirm whether the bold pink-card product style gets used anywhere (COFFEE/BAKED).
- Confirm BAKED layout (reuse carousel vs. grid).
- Gather video footage file for VISIT background.
- Decide exact playlist source/embed (Spotify link, playlist ID, etc.).
- Decide weather data source (API) for the Weather widget.
- Decide whether Pause Counter numbers are static/placeholder or wired to a real
  data source.
- Write copy for the "normal/cloudy" weather state (only sun/rain drafted so far).

## Notes for Claude Code
- Copy above is drafted, not final — flag in code comments so it's easy to swap
  once approved.
- Apply a consistent blue duotone/overlay treatment to photography site-wide.
- Reuse components where possible (e.g. carousel for both COFFEE and BAKED) to
  keep the codebase and visual language consistent.
- Inspiration images live in `/inspiration` inside `/source`, plus provided in
  this conversation: About.png, about_text_2.png, carousel.png, footer.png,
  Hero_image.png, Our_Coffee.png, Pause logo (Pause_-_Blue_-_RGB.webp),
  playlist.png, and reference screenshots of "White" (Paris coffee brand),
  Goodboybob, Kaisei Sadatoki, Untitled UI, and a Santa Monica location page.
