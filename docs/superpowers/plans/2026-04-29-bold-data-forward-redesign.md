# Bold & Data-Forward Visual Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the homepage from flat stacked rectangles into a bold, data-driven design that uses the company's own numbers as visual decoration.

**Architecture:** Two new shared components (`DiagonalCut`, `SectionHeading`) are created first so all downstream tasks can import them. Then `Testimonials.tsx` is redesigned in isolation. Finally `app/page.tsx` is upgraded in three focused passes: hero enhancements, section heading replacements, and differentiator/stats upgrades.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS v4 (`@theme` tokens), Lucide React, existing `RevealSection` / `AnimatedCounter` components.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/components/common/DiagonalCut.tsx` | **Create** | SVG diagonal transition between section backgrounds |
| `src/components/common/SectionHeading.tsx` | **Create** | h2 + 3 px lime accent bar + optional subtitle |
| `src/components/sections/Testimonials.tsx` | **Rewrite** | White cards, lime top border, oversized quote mark, ghost star |
| `app/page.tsx` | **Modify ×3** | Hero texture/ghost/stats, section headings, differentiator numbers, stats upgrade |

No new npm packages. No changes to `globals.css` (all decoration is inline SVG or Tailwind utilities).

---

## Task 1 — Create `DiagonalCut` component

**Files:**
- Create: `src/components/common/DiagonalCut.tsx`

- [ ] **Create the file with this exact content:**

```tsx
// src/components/common/DiagonalCut.tsx
// Renders a shallow diagonal SVG cut between two section backgrounds.
// Usage: <DiagonalCut from="navy" to="light" />  (place immediately after the upper section)

type ColorToken = 'navy' | 'navy-light' | 'light' | 'white';

const BG: Record<ColorToken, string> = {
  'navy':       '#0F3A5F',
  'navy-light': '#1A4F6F',
  'light':      '#F5F5F5',
  'white':      '#ffffff',
};

interface DiagonalCutProps {
  from?: ColorToken;
  to?:   ColorToken;
}

export default function DiagonalCut({ from = 'navy', to = 'light' }: DiagonalCutProps) {
  return (
    <div aria-hidden="true" style={{ background: BG[from], lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        width="100%"
        height="32"
        className="md:h-10 block"
      >
        {/* The "to" color fills a trapezoid, revealing the "from" color above */}
        <polygon points="0,10 1440,0 1440,40 0,40" fill={BG[to]} />
      </svg>
    </div>
  );
}
```

- [ ] **Verify it builds — run:**
```bash
cd C:\users\melvi\nationalepayment-modernization && npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors mentioning `DiagonalCut.tsx`.

- [ ] **Commit:**
```bash
git add src/components/common/DiagonalCut.tsx
git commit -m "feat: add DiagonalCut SVG section transition component"
```

---

## Task 2 — Create `SectionHeading` component

**Files:**
- Create: `src/components/common/SectionHeading.tsx`

- [ ] **Create the file with this exact content:**

```tsx
// src/components/common/SectionHeading.tsx
// Standard section heading: 3px lime accent bar → h2 → optional subtitle.
// Wrap in <RevealSection> at the call site for scroll animation.

interface SectionHeadingProps {
  title:     string;
  subtitle?: string;
  /** Set true when section background is dark (navy). Switches text to white/gray-400. */
  dark?:     boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  dark      = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {/* Lime accent bar — 36px wide, 3px tall */}
      <div aria-hidden="true" className="w-9 bg-teal mb-3" style={{ height: '3px' }} />
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Verify it builds:**
```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Commit:**
```bash
git add src/components/common/SectionHeading.tsx
git commit -m "feat: add SectionHeading component with lime accent bar"
```

---

## Task 3 — Redesign Testimonials

**Files:**
- Rewrite: `src/components/sections/Testimonials.tsx`

The current file uses plain white cards. Replace it entirely with the new Bold & Data-Forward card style: lime top border, oversized decorative quote mark, stars, quote text, hr divider, attribution.

- [ ] **Replace the entire file with:**

```tsx
import Container from '@/src/components/common/Container';
import RevealSection from '@/src/components/common/RevealSection';
import SectionHeading from '@/src/components/common/SectionHeading';

const testimonials = [
  {
    quote:
      'Switching to National e-Payment cut my monthly processing fees by over 30%. I applied on a Tuesday and was processing cards by end of business the same day. Never had that kind of turnaround before.',
    name:     'Carlos Mendez',
    role:     'Restaurant Owner',
    location: 'Queens, NY',
    initials: 'CM',
    color:    'bg-navy',
  },
  {
    quote:
      "I've gone through three processors in fifteen years. The 24/7 support here is genuinely different — I called at 2am over a terminal issue and someone answered on the second ring. That's unheard of.",
    name:     'Jennifer Torres',
    role:     'Grocery Store Owner',
    location: 'Brooklyn, NY',
    initials: 'JT',
    color:    'bg-navy-light',
  },
  {
    quote:
      'The ATM program alone more than pays for itself. My customers stay longer, spend more at the register, and I keep the surcharge revenue instead of sending it to a third-party operator.',
    name:     'David Rosner',
    role:     'Gas Station Owner',
    location: 'Long Island City, NY',
    initials: 'DR',
    color:    'bg-teal-dark',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-light-bg relative overflow-hidden">
      {/* Ghost star — decorative, bottom-right */}
      <span
        aria-hidden="true"
        className="absolute right-[-20px] bottom-[-20px] text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(15,58,95,0.04)' }}
      >
        ★
      </span>

      <Container>
        <RevealSection>
          <SectionHeading
            title="Merchants Tell It Better Than We Do"
            subtitle="Real business owners. Real results."
            className="mb-12"
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, location, initials, color }, i) => (
            <RevealSection key={name} delay={i * 100}>
              <div
                className="card-lift bg-white rounded-xl border border-gray-200 flex flex-col h-full p-7"
                style={{ borderTop: '3px solid #BDE525' }}
              >
                {/* Decorative opening quote mark */}
                <div
                  aria-hidden="true"
                  className="text-6xl font-black leading-none mb-2 select-none"
                  style={{ color: 'rgba(189,229,37,0.35)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-teal" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote text — no wrapping quotes; the decorative mark above serves that role */}
                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  {quote}
                </blockquote>

                {/* Divider */}
                <hr className="border-gray-100 mb-5" />

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}
                    aria-hidden="true"
                  >
                    <span className="text-white text-xs font-bold">{initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{name}</p>
                    <p className="text-xs text-gray-400">{role} &middot; {location}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Check the dev server at http://localhost:3000** — scroll to the Testimonials section. You should see: white cards, thin lime top border, large muted `"` mark, stars, quote, hr, initials circles. Ghost `★` should be barely visible in the bottom-right of the section.

- [ ] **Verify build:**
```bash
npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Commit:**
```bash
git add src/components/sections/Testimonials.tsx
git commit -m "feat: redesign Testimonials — lime border, quote mark, ghost star"
```

---

## Task 4 — Hero: dot grid, ghost word, stat strip

**Files:**
- Modify: `app/page.tsx`

This task adds three things to the existing hero section: a dot-grid SVG texture, a ghost "FREE" word, and a 4-stat strip at the bottom. It does NOT change the logo/copy layout — only wraps extra elements around it.

- [ ] **In `app/page.tsx`, add `DiagonalCut` to the import block at the top of the file:**

Find the existing imports block and add:
```tsx
import DiagonalCut from '@/src/components/common/DiagonalCut';
```

- [ ] **Change the hero `<section>` opening tag** from:
```tsx
<section className="bg-navy text-white overflow-hidden">
```
to:
```tsx
<section className="bg-navy text-white overflow-hidden relative">
```

- [ ] **Immediately after the `<section>` opening tag (before `<Container>`), add the dot grid and ghost word:**
```tsx
      {/* ── Dot-grid texture ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#BDE525" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* ── Ghost word ── */}
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 text-[9rem] md:text-[13rem] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(189,229,37,0.07)', transform: 'translate(12%, 15%)' }}
      >
        FREE
      </span>
```

- [ ] **Change the inner grid `<div>` padding** from:
```tsx
<div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```
to (removes bottom padding — stat strip will provide it):
```tsx
<div className="pt-16 md:pt-24 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

- [ ] **Immediately after the closing `</div>` of that grid (still inside `<Container>`), add the stat strip:**
```tsx
          {/* ── Stat strip ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-10 md:pb-14 pt-6 border-t border-white/10">
            {(
              [
                { value: '95%',    label: 'Approval Rate'   },
                { value: '24/7',   label: 'Live Support'    },
                { value: 'Free',   label: 'Setup & Terminal'},
                { value: '30-Day', label: 'Risk-Free Trial' },
              ] as const
            ).map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-teal leading-none">{value}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
```

- [ ] **After the closing `</section>` of the hero (before the banking partners bar `<div>`), add:**
```tsx
      <DiagonalCut from="navy" to="navy-light" />
```

> Note: The banking partners bar uses `bg-navy-light`, so the cut goes navy → navy-light. This creates a subtle angled transition that keeps the dark header band while adding visual movement.

- [ ] **Check http://localhost:3000** — the hero should now show: faint dot grid, ghost "FREE" word behind the logo, 4-stat strip above the diagonal cut.

- [ ] **Verify build:**
```bash
npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Commit:**
```bash
git add app/page.tsx
git commit -m "feat: hero dot grid, ghost word, 4-stat strip, diagonal cut"
```

---

## Task 5 — Replace section headings with `SectionHeading` throughout page

**Files:**
- Modify: `app/page.tsx`

Replace every hand-written `<div className="text-center mb-..."><h2>...</h2><p>...</p></div>` block with the `SectionHeading` component. Four sections get this treatment: Industries, Why Merchants Switch, Products, and Stats.

- [ ] **Add `SectionHeading` to the imports in `app/page.tsx`:**
```tsx
import SectionHeading from '@/src/components/common/SectionHeading';
```

- [ ] **Industries section** — replace:
```tsx
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                Solutions for Every Industry
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We understand your business — because we built our platform around it.
              </p>
            </div>
```
with:
```tsx
            <SectionHeading
              title="Solutions for Every Industry"
              subtitle="We understand your business — because we built our platform around it."
              className="mb-10"
            />
```

- [ ] **Why Merchants Switch section** — replace:
```tsx
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                Why Merchants Switch to Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Not marketing copy — these are the three things we hear most often from new customers.
              </p>
            </div>
```
with:
```tsx
            <SectionHeading
              title="Why Merchants Switch to Us"
              subtitle="Not marketing copy — these are the three things we hear most often from new customers."
              className="mb-12"
            />
```

- [ ] **Products section** — replace:
```tsx
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                Hardware &amp; Software Solutions
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Everything you need to accept payments — certified, supported, and shipped ready to go.
              </p>
            </div>
```
with:
```tsx
            <SectionHeading
              title="Hardware & Software Solutions"
              subtitle="Everything you need to accept payments — certified, supported, and shipped ready to go."
              className="mb-10"
            />
```

- [ ] **Stats section** — replace:
```tsx
          <RevealSection className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">By the Numbers</h2>
            <p className="text-gray-400">Earned from thousands of merchants who trust us with their payments.</p>
          </RevealSection>
```
with:
```tsx
          <RevealSection className="mb-10">
            <SectionHeading
              title="By the Numbers"
              subtitle="Earned from thousands of merchants who trust us with their payments."
              dark
            />
          </RevealSection>
```

- [ ] **Check http://localhost:3000** — scroll through all sections. Every h2 should now be preceded by a short lime bar, and text should be left-aligned (not centered). The stats section heading should appear white on the navy background.

- [ ] **Verify build:**
```bash
npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Commit:**
```bash
git add app/page.tsx
git commit -m "feat: replace section headings with SectionHeading component"
```

---

## Task 6 — Differentiators: ghost 01/02/03 numbers

**Files:**
- Modify: `app/page.tsx`

Add ghost ordinal numbers above each differentiator's icon — large, very low opacity, decorative only.

- [ ] **Find the differentiators `.map()` in `app/page.tsx`.** It currently reads:
```tsx
          {differentiators.map(({ Icon, heading, body }, i) => (
            <RevealSection key={heading} delay={i * 100}>
              <div className="relative pl-0">
                <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{heading}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            </RevealSection>
          ))}
```

- [ ] **Replace that entire `.map()` block with:**
```tsx
          {differentiators.map(({ Icon, heading, body }, i) => (
            <RevealSection key={heading} delay={i * 100}>
              <div className="relative pl-0">
                {/* Ghost ordinal number */}
                <div
                  aria-hidden="true"
                  className="text-5xl font-black leading-none mb-1 select-none"
                  style={{ color: 'rgba(189,229,37,0.22)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{heading}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            </RevealSection>
          ))}
```

- [ ] **Check http://localhost:3000** — the "Why Merchants Switch" section should show faint `01` / `02` / `03` above each icon.

- [ ] **Verify build:**
```bash
npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Commit:**
```bash
git add app/page.tsx
git commit -m "feat: add ghost 01/02/03 numbers to differentiators section"
```

---

## Task 7 — Upgrade "By the Numbers" stats section

**Files:**
- Modify: `app/page.tsx`

Change the stats section background from navy to `light-bg`, and wrap each stat in a white card with a ghost number decoration.

- [ ] **Find the stats section** — it starts with:
```tsx
      {/* ── Stats ────────────────────────────────────────── */}
      <section className="py-16 bg-navy text-white">
```

- [ ] **Replace the entire stats section** (from the `{/* ── Stats */}` comment through its closing `</section>`) with:

```tsx
      {/* ── Stats ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-light-bg">
        <Container>
          <RevealSection className="mb-10">
            <SectionHeading
              title="By the Numbers"
              subtitle="Earned from thousands of merchants who trust us with their payments."
            />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

            {/* Stat 1 — animated */}
            <RevealSection delay={0}>
              <div className="bg-white rounded-xl border border-gray-200 p-8 relative overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute right-2 bottom-0 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.05)' }}
                >
                  95
                </span>
                <div className="text-5xl font-bold text-navy mb-2 relative z-10">
                  <AnimatedCounter value={95} suffix="%" />
                </div>
                <p className="text-navy font-semibold mb-1 relative z-10">Approval Rate</p>
                <p className="text-gray-400 text-sm relative z-10">
                  We underwrite across dozens of industries and business histories.
                </p>
              </div>
            </RevealSection>

            {/* Stat 2 */}
            <RevealSection delay={150}>
              <div className="bg-white rounded-xl border border-gray-200 p-8 relative overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute right-2 bottom-0 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.05)' }}
                >
                  24/7
                </span>
                <div className="text-5xl font-bold text-navy mb-2 relative z-10">24/7</div>
                <p className="text-navy font-semibold mb-1 relative z-10">Live Support</p>
                <p className="text-gray-400 text-sm relative z-10">
                  Real specialists answer the phone any hour — including weekends and holidays.
                </p>
              </div>
            </RevealSection>

            {/* Stat 3 */}
            <RevealSection delay={300}>
              <div className="bg-white rounded-xl border border-gray-200 p-8 relative overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute right-2 bottom-0 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.05)' }}
                >
                  30
                </span>
                <div className="text-5xl font-bold text-navy mb-2 relative z-10">30-Day</div>
                <p className="text-navy font-semibold mb-1 relative z-10">Risk-Free Trial</p>
                <p className="text-gray-400 text-sm relative z-10">
                  Cancel within 30 days for any reason — zero penalty, zero question.
                </p>
              </div>
            </RevealSection>

          </div>
        </Container>
      </section>
```

- [ ] **Check http://localhost:3000** — Stats section should now be on a light gray background with three white cards. Each card has a faint ghost number in the bottom-right corner.

- [ ] **Verify build:**
```bash
npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Final visual check** — scroll the entire homepage top to bottom and verify:
  - [ ] Hero: dot grid visible on navy, ghost "FREE" behind logo, 4-stat strip above diagonal cut
  - [ ] Banking partners bar: seamlessly follows diagonal cut
  - [ ] Industries: lime accent bar above heading, left-aligned
  - [ ] Why Merchants Switch: lime bar, ghost 01/02/03 numbers, left-aligned
  - [ ] Testimonials: white cards, lime top border, large `"` mark, stars, hr, initials circles
  - [ ] Products: lime bar, left-aligned
  - [ ] Stats: light gray bg, white cards, ghost numbers inside
  - [ ] Certifications strip and CTA: unchanged

- [ ] **Commit:**
```bash
git add app/page.tsx
git commit -m "feat: upgrade stats section to white cards on light-bg with ghost numbers"
```

---

## Acceptance Checklist

Cross-reference against spec `docs/superpowers/specs/2026-04-29-bold-data-forward-redesign.md`:

- [ ] Hero has dot-grid texture, ghost "FREE", 4-stat strip (2-col mobile / 4-col desktop), diagonal cut
- [ ] Every section h2 preceded by 36px × 3px lime bar (via SectionHeading)
- [ ] Differentiators show 01/02/03 ghost numbers in lime at low opacity
- [ ] Testimonials: white cards, lime top border (3px), large decorative quote mark, hr divider, varied initials colors
- [ ] Stats section: light-bg background, white cards, ghost numbers
- [ ] No new npm packages added (`package.json` unchanged)
- [ ] `npx tsc --noEmit` exits cleanly
- [ ] All links and interactive elements still keyboard-accessible (Tab through the page)
