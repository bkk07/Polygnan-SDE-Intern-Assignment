# EYFI Reward Ladder — Figma Design Brief (Figma Make / First Draft optimized)

You are a Senior Product Designer at Linear, Stripe, Framer, and Duolingo combined, working directly inside Figma.

Your task: design a production-ready, premium-quality **Reward Ladder** section for the EYFI (Earn Your First Income) Challenge — Campus Ambassador landing page — as a fully structured Figma file (frames, components, variants, auto layout, and a working prototype).

This is NOT a generic UI exercise. It should be polished enough to hand straight to engineering with zero rework.

---

## 1. OUTPUT FORMAT (Figma-specific — read first)

Build this as a real Figma file, not a flat mockup:

- **Page structure:** one page named `Reward Ladder`, with separate frames for `Desktop (1440)`, `Tablet (834)`, and `Mobile (390)`.
- **Auto Layout everywhere:** every card, badge, and the CTA section must use Auto Layout (with proper padding, gap, and resizing set to Hug/Fill) so the section is resilient to content changes.
- **Components + Variants:** build a single `Milestone Card` component with variants for:
  - `state`: default / hover / expanded
  - `tier`: gray / blue / green / purple / orange / gold
  - `layout`: left-aligned / right-aligned (for the alternating desktop layout)
- **Reusable components:** `Status Badge`, `Reward Chip`, `Progress Node`, `Registration Counter`, `Primary Button`, `Secondary Button` — each as its own component with variants, not one-off shapes.
- **Design tokens (Local Styles/Variables):** define color, spacing, radius, and typography as Figma Variables so the gold "legendary" tier and the base tiers pull from the same token set.
- **Prototype the interactions** using Figma's native prototyping (not code):
  - Hover → **While Hovering** trigger, Smart Animate to the "hover" variant (lift + scale 1.03 + glow)
  - Click → **On Click**, Smart Animate to the "expanded" variant (rewards animate into view)
  - Scroll-linked progress bar → simulate with a scroll-triggered Smart Animate frame sequence, or note it as a dev handoff spec if Figma prototyping can't fully replicate scroll-scrubbing
  - Annotate any interaction Figma can't natively prototype (e.g., floating particles, shimmer loop, confetti burst) as a written **dev handoff note** attached to the frame, since these will ultimately be built in React + Tailwind + Framer Motion — describe the intended motion precisely enough for a developer to implement without guessing.

---

## 2. PROJECT CONTEXT

EYFI (Earn Your First Income Challenge) is a nationwide initiative encouraging college students to earn their first income within 30 days. Students become Campus Ambassadors and invite others to join. As ambassadors bring more registrations, they unlock increasingly valuable rewards.

The Reward Ladder is the centerpiece of the motivation system — it should create excitement, encourage progression, and visually communicate achievement. Think **"achievement system,"** not "pricing table."

**Target audience:** college students (18–24), ambitious, competitive, social-media native, drawn to achievements/streaks/badges/progression, interested in internships, startups, entrepreneurship, and AI.

---

## 3. DESIGN STYLE

Blend inspiration from Linear.app, Framer, Stripe, Duolingo's progression system, Discord onboarding, GitHub Achievement Badges, Apple HIG, Notion, and Vercel.

Keywords: **premium, minimal, modern, gamified, elegant, confident, interactive, highly polished, future-ready.**

Avoid: tables, pricing-grid layouts, generic infographics, boring vertical timelines.

---

## 4. DESIGN TOKENS (define these as Figma Variables, not hardcoded hex)

| Token | Value |
|---|---|
| `color/bg/base` | `#09090B` |
| `color/accent/gradient` | Purple → Indigo → Cyan |
| `color/tier/gray` | Scout tier |
| `color/tier/blue` | 25 registrations |
| `color/tier/green` | 50 registrations |
| `color/tier/purple` | 75 registrations |
| `color/tier/orange` | 100 registrations |
| `color/tier/gold` | 200 registrations — legendary |
| `radius/card` | 24px |
| `effect/glass` | translucent fill + background blur |
| `effect/glow` | soft outer glow, tier-colored |
| `type/heading` | large, bold, clean sans-serif, generous letter/line spacing |

Card style: glassmorphism, soft transparency, subtle blur, 24px corner radius, soft glowing tier-colored border, premium layered shadow (depth, not flat drop-shadow).

---

## 5. SECTION HEADER

**Heading:** 🚀 Climb the Reward Ladder
**Subtitle:** Every student you inspire brings you closer to exclusive rewards, recognition and opportunities.

Below the heading, place an animated progress path component that visually anchors the whole ladder.

---

## 6. LAYOUT

- Vertical progression journey; each milestone connected by a glowing animated path (represent as a vector path component, with a "filled" and "unfilled" state to simulate progress).
- Cards alternate left/right on desktop to create movement; center-aligned on tablet; single-column stacked on mobile.
- Generous spacing between milestones — space should feel intentional and premium, not cramped.
- Final milestone (gold, 200 registrations) is dramatically highlighted — larger card, stronger glow, sparkle details.

---

## 7. MILESTONES (build as 6 instances of the `Milestone Card` component)

**1️⃣ Selected as Scout** — Icon: Compass — Reward: Private Community, Starter Kit — Badge: "Journey Begins" — Tier: Gray

**2️⃣ 25 Registrations** — Icon: Badge — Reward: Official Campus Ambassador, First Swag Drop, Prize Challenge — Tier: Blue

**3️⃣ 50 Registrations** — Icon: Gift Box — Reward: Exclusive Merchandise, Campus Event Grants — Tier: Green

**4️⃣ 75 Registrations** — Icon: Rocket — Reward: Mentorship Access, Campus Event Grants — Tier: Purple

**5️⃣ 100 Registrations** — Icon: Trophy — Reward: Paid Internship Opportunities, Exclusive Ambassador Events — Tier: Orange

**6️⃣ 200 Registrations** — Icon: Golden Crown — Reward: Founding Team Consideration, Elite Recognition, Top Performer Badge — Tier: Gold
This card should feel legendary: premium gold gradient, subtle sparkle details, glowing aura. Give it its own slightly larger size within the component's variant sizing.

---

## 8. INTERACTIONS (prototype natively where possible; annotate the rest)

**Hover (While Hovering → Smart Animate):** card lifts, glow intensifies, scale to 1.03, shadow deepens.

**Click (On Click → Smart Animate):** card expands, rewards animate into view.

**Timeline:** glowing connector line between milestones, progress fill, gently pulsing icons, final milestone with a soft shimmer loop.

**Note in dev handoff:** micro-interactions should feel satisfying, never distracting — keep durations short (150–300ms) and easing consistent with the rest of the token set.

---

## 9. EXTRA UI ELEMENTS

Animated progress indicator · small achievement badges · registration counters · XP-style level indicators · floating particles · modern icon set (use a consistent icon library, e.g. Phosphor or Lucide, imported as components) · celebration stars · subtle gradients · confetti effect around the final milestone (annotate for dev; approximate visually with static sparkle assets in Figma).

---

## 10. BOTTOM CTA SECTION

Large, premium standalone section.

**Headline:** Ready to Start Your Journey?
**Primary button:** Become a Campus Ambassador
**Secondary button:** Learn More

Should feel exciting and prompt immediate action — strong contrast, generous padding, consistent with the token set above.

---

## 11. RESPONSIVENESS

Build all three as real, separate frames with consistent components (not just resized copies):

- **Desktop (1440):** full alternating timeline
- **Tablet (834):** centered single-column cards
- **Mobile (390):** stacked single-column timeline, condensed spacing but still premium — never cramped

---

## 12. DESIGN GOAL

When someone sees this section, they should immediately think: *"I want to reach the next milestone."*

The design should communicate achievement, ambition, exclusivity, progression, and momentum — Dribbble-quality, production-ready, with exceptional hierarchy, spacing, typography, interaction, and visual polish. Avoid generic templates, boring timelines, and simple tables.

---

## Why these changes vs. the original prompt

- Swapped "React + Tailwind + Framer Motion" framing for **native Figma primitives** (Auto Layout, Components/Variants, Variables, Smart Animate) so the AI/designer actually builds the file correctly instead of describing code it can't run in Figma.
- Added explicit **file/page/frame structure** — without this, Figma AI tools tend to output one flat, unstructured frame.
- Called out which interactions **can't be natively prototyped in Figma** (scroll-scrubbing, particles, confetti) and asked for **dev handoff annotations** instead of pretending Figma can fully simulate them — keeps expectations realistic.
- Added a **design tokens table** so colors/radii/effects are defined once and reused, which is how Figma Variables are meant to work and prevents six inconsistent hand-built cards.