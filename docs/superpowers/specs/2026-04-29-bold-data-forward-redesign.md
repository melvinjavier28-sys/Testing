# Bold & Data-Forward Visual Redesign

**Date:** 2026-04-29  
**Status:** Approved  
**Scope:** Homepage + shared components (Testimonials, Hero inner-page, section headings)

---

## Problem

After removing external image dependencies (randomuser.me avatars), the site feels visually flat. Sections are uniform stacked rectangles with no visual rhythm. The design doesn't communicate the confidence and authority expected of a registered MSP/ISO payment processor.

---

## Design Direction: Bold & Data-Forward

Use the company's own numbers — 95%, 24/7, 30-Day, Free — as the primary visual decoration. Large, low-opacity ghost text and numbers anchor each section, diagonal cuts break the rigid horizontal stacking, and a lime accent bar creates a consistent heading pattern throughout.

Color palette is unchanged: `navy` (#0F3A5F), `navy-light` (#1A4F6F), `teal`/lime (#BDE525), `teal-dark` (#8EAC1C), `light-bg` (#F5F5F5).

---

## Changes by Section

### 1. Hero (`app/page.tsx` — existing hero section)

**Add:**
- Subtle dot-grid SVG texture overlay on the navy background (lime dots, ~6% opacity)
- Ghost word "FREE" — large, very low-opacity (#BDE525 at ~7% opacity), positioned bottom-right behind content
- Diagonal cut at the bottom of the hero (SVG polygon, navy→light-bg transition)
- **4-stat strip** inside the hero, above the diagonal cut:
  - 95% · Approval Rate
  - 24/7 · Live Support  
  - Free · Setup & Terminal
  - 30-Day · Risk-Free Trial
  - Layout: **2×2 grid on mobile** (`grid-cols-2`), **4 columns on `lg`** (`lg:grid-cols-4`), separated by subtle dividers

**Remove:** The separate "By the Numbers" `<section>` (stats now live in the hero strip). The certifications strip stays.

**Keep:** Logo on left, copy on right, existing CTAs.

---

### 2. Section headings — global pattern

Every `h2` section heading gets a lime accent bar above it:

```
[3px × 36px lime bar]
Section Title
Subtitle text
```

This replaces the current plain centered heading style. Applied to: Industries, Why Merchants Switch, Testimonials, Products, Stats (if kept), any other h2 heading sections.

Implementation: a small reusable `SectionHeading` component or a CSS utility class (`section-heading`) — not inline styles.

---

### 3. "Why Merchants Switch" section (`app/page.tsx`)

**Add ghost numbers** behind each differentiator card:
- "01", "02", "03" — large (roughly 48–56px), `color: rgba(189,229,37,0.20)`, positioned above the icon
- The number sits visually above the icon row, creating depth without clutter

---

### 4. Testimonials (`src/components/sections/Testimonials.tsx`)

**Section:** Keep `bg-light-bg` background.

**Cards:** Replace current plain white cards with:
- White background
- **Lime top-border accent** (`border-top: 3px solid #BDE525`)
- **Oversized opening quote mark** (`"`) — `font-size ~56px`, `color: rgba(189,229,37,0.35)`, Georgia/serif font, decorative only
- Stars row (already exists — keep)
- Quote text (already exists — keep)
- Thin `<hr>` divider before attribution
- Attribution row: initials circle + name/role (already exists)
- Initials circles: varied colors — `bg-navy` (CM), `bg-navy-light` (JT), `bg-teal-dark` (DR)

**Card hover:** `translateY(-3px)` + elevated shadow (already has `card-lift` class — keep).

**Add:** A large ghost star (`★`) in the bottom-right corner of the section, `font-size ~160px`, `color: rgba(15,58,95,0.04)`, `aria-hidden`, `position:absolute`. Gives the light section the same textured depth treatment as the dark sections.

---

### 5. Stats section (`app/page.tsx` — "By the Numbers")

Keep the standalone section — it was shown and approved in the full mockup. Upgrade its visual treatment:

- Section background: `bg-light-bg` (was `bg-navy`)
- Heading: use `SectionHeading` component (lime bar + h2 + subtitle), `text-navy`
- Cards: white background, `border border-gray-200 rounded-xl`, centered text
- Each card gets a ghost number via `::before` pseudo or a decorative `<span aria-hidden>` — the card's own stat value rendered at large size and very low opacity in the background
- `AnimatedCounter` stays on the 95% stat
- The `24/7` and `30-Day` stats remain as static text (already the case)

---

### 6. Diagonal section cut

A reusable `DiagonalCut` component (pure SVG, no dependencies):

```tsx
// Props: from (bg color token), to (bg color token)
// Renders an SVG polygon transition between two section background colors
<DiagonalCut from="navy" to="light" />
```

Used after the hero. The cut goes: top-left at 0px, top-right at 0px, bottom-right at 32px, bottom-left at 8px (shallow angle). Height: 32px on mobile, 40px on desktop.

---

## New / Modified Files

| File | Action |
|---|---|
| `src/components/common/DiagonalCut.tsx` | **Create** — SVG diagonal section transition |
| `src/components/common/SectionHeading.tsx` | **Create** — h2 + lime bar + subtitle |
| `src/components/sections/Testimonials.tsx` | **Modify** — new card style |
| `app/page.tsx` | **Modify** — dot grid, ghost word, stat strip, diagonal cut, ghost numbers on differentiators, remove standalone stats section, use SectionHeading |
| `app/globals.css` | **Modify** — add dot-grid background utility if needed |

---

## Out of Scope

- Inner page hero, contact, signup, rates pages — not touched in this pass
- Any new page content or copy changes
- Mobile layout — existing responsive grid is kept; new decorative elements are `hidden` on small screens where needed
- Animation / scroll effects — not added in this pass (RevealSection already handles fade-in)

---

## Acceptance Criteria

- [ ] Hero has dot-grid texture, ghost "FREE", 4-stat strip, diagonal cut
- [ ] Every section h2 has a 36px lime accent bar above it
- [ ] Differentiators show 01/02/03 ghost numbers
- [ ] Testimonials: white cards, lime top border, large quote mark, hr divider, varied initials colors
- [ ] Standalone "By the Numbers" section upgraded to white cards on light-bg (stats also in hero strip)
- [ ] No new external dependencies introduced
- [ ] Site builds without TypeScript errors
- [ ] All interactive elements remain keyboard accessible
