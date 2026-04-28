# National e-Payment Website

A modernized website for National e-Payment built with Next.js, React, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Features

- Unified ecosystem design with Navy + Teal color system
- Dynamic industry pages (Restaurants, Retail, Grocery, Lodging)
- Dynamic product pages (POS Terminals, ATM Machines, Mobile Payments)
- Responsive design (mobile-first)
- Optimized performance with Next.js static generation
- TypeScript for type safety
- Tailwind CSS for styling

## File Structure

- `src/components/` — React components
- `src/app/` — Page routes (Next.js App Router)
- `src/lib/` — Utility functions and data loaders
- `src/content/` — JSON content (industries, products)
- `public/` — Static assets

## Design System

- Colors: Navy (#0F3A5F), Teal (#00C9A7)
- Typography: Inter, Poppins
- Spacing: 8px base unit
- Component library: Button, Card, Container, Section, Grid

## Pages

- `/` — Homepage
- `/industries` — Industry listing
- `/industries/[slug]` — Individual industry pages
- `/products` — Products listing
- `/products/[slug]` — Individual product pages
- `/pricing` — Pricing tiers
- `/company` — Company info
- `/contact` — Contact page
- `/resources` — Resources & FAQ

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Self-Hosted

```bash
npm run build
npm run start
```

### Static Export

Update `next.config.ts` to use `output: 'export'` and deploy the `out/` directory.

## Development

### TypeScript Compilation

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## License

Proprietary — National e-Payment, Inc.
