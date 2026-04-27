# National e-Payment Website Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modernized National e-Payment website with Navy + Teal design, unified ecosystem architecture, responsive layout, and all required pages (homepage, industry pages, product pages, and supporting pages).

**Architecture:** This is a Next.js + React application using Tailwind CSS for styling and MDX/JSON for content management. The site consists of reusable components, page templates, and a unified design system. Content is separated from presentation, making updates easy. All pages are statically generated for performance.

**Tech Stack:** 
- Next.js 15 (React framework, static site generation)
- React 19 (component library)
- Tailwind CSS 4 (utility-first styling)
- TypeScript (type safety)
- MDX or JSON (content management)

---

## File Structure

```
nationalepayment-modernization/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── BaseLayout.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Testimonials.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── SignupForm.tsx
│   ├── pages/
│   │   ├── index.tsx (homepage)
│   │   ├── industries/
│   │   │   ├── [slug].tsx (dynamic industry pages)
│   │   │   └── index.tsx
│   │   ├── products/
│   │   │   ├── [slug].tsx (dynamic product pages)
│   │   │   └── index.tsx
│   │   ├── pricing.tsx
│   │   ├── company.tsx
│   │   ├── contact.tsx
│   │   ├── resources.tsx
│   │   └── _app.tsx
│   ├── lib/
│   │   ├── colors.ts (design tokens)
│   │   ├── industries.ts (industry data)
│   │   ├── products.ts (product data)
│   │   └── types.ts (TypeScript interfaces)
│   ├── content/
│   │   ├── industries.json
│   │   ├── products.json
│   │   ├── testimonials.json
│   │   └── company-info.json
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
├── tests/
│   ├── components/
│   └── pages/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Phase 1: Project Initialization

### Task 1: Initialize Next.js Project & Git Repository

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `next.config.js`
- Create: `tsconfig.json`
- Create: `tailwind.config.js`

- [ ] **Step 1: Create new Next.js project**

Run from `C:\Users\melvi\nationalepayment-modernization`:
```bash
npx create-next-app@latest . --typescript --tailwind --app
```

When prompted:
- ESLint: Yes
- App Router: Yes
- Tailwind CSS: Yes
- TypeScript: Yes

- [ ] **Step 2: Verify project structure**

Run:
```bash
ls -la src/
ls -la public/
cat package.json
```

Expected: See `app/`, `components/`, `lib/`, `public/` directories, plus Next.js dependencies in `package.json`.

- [ ] **Step 3: Update Tailwind config for custom colors**

Open `tailwind.config.js` and replace with:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0F3A5F',
        'navy-light': '#1A4F6F',
        'teal': '#00C9A7',
        'teal-dark': '#00B393',
        'dark-text': '#333333',
        'light-bg': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '50px',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Initialize git repository**

Run:
```bash
git init
git add .
git commit -m "init: initialize Next.js project with Tailwind CSS and TypeScript"
```

Expected: Commit created with message.

---

## Phase 2: Design System & Reusable Components

### Task 2: Create Color & Typography Design Tokens

**Files:**
- Create: `src/lib/colors.ts`
- Create: `src/lib/typography.ts`
- Create: `src/styles/globals.css`

- [ ] **Step 1: Create color tokens file**

Create `src/lib/colors.ts`:

```typescript
export const colors = {
  primary: {
    navy: '#0F3A5F',
    'navy-light': '#1A4F6F',
  },
  accent: {
    teal: '#00C9A7',
    'teal-dark': '#00B393',
  },
  text: {
    dark: '#333333',
    light: '#666666',
  },
  background: {
    white: '#FFFFFF',
    light: '#F5F5F5',
  },
};

export const colorClasses = {
  primary: 'bg-navy text-white',
  accent: 'bg-teal text-white',
  light: 'bg-light-bg text-dark-text',
  white: 'bg-white text-dark-text',
};
```

- [ ] **Step 2: Create typography tokens file**

Create `src/lib/typography.ts`:

```typescript
export const typography = {
  h1: 'text-5xl md:text-6xl font-bold leading-tight',
  h2: 'text-4xl md:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl font-semibold leading-snug',
  h4: 'text-lg md:text-xl font-semibold',
  body: 'text-base leading-relaxed',
  small: 'text-sm leading-relaxed',
};
```

- [ ] **Step 3: Update global styles**

Replace `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-navy: #0F3A5F;
  --color-navy-light: #1A4F6F;
  --color-teal: #00C9A7;
  --color-teal-dark: #00B393;
  --color-text-dark: #333333;
  --color-text-light: #666666;
  --color-bg-light: #F5F5F5;
}

@layer base {
  body {
    @apply bg-white text-dark-text font-sans;
  }

  h1 {
    @apply text-5xl font-bold leading-tight;
  }

  h2 {
    @apply text-4xl font-bold leading-tight;
  }

  h3 {
    @apply text-2xl font-semibold;
  }

  h4 {
    @apply text-lg font-semibold;
  }
}

@layer components {
  .container-wide {
    @apply max-w-7xl mx-auto px-4 md:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-12 md:py-16 lg:py-20;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/colors.ts src/lib/typography.ts src/styles/globals.css
git commit -m "feat: add design tokens for colors and typography"
```

---

### Task 3: Create Core Reusable Components

**Files:**
- Create: `src/components/common/Button.tsx`
- Create: `src/components/common/Card.tsx`
- Create: `src/components/common/Container.tsx`
- Create: `src/components/common/Section.tsx`
- Create: `src/components/common/Grid.tsx`

- [ ] **Step 1: Create Button component**

Create `src/components/common/Button.tsx`:

```typescript
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-teal text-white hover:bg-teal-dark',
    secondary: 'bg-navy text-white hover:bg-navy-light',
    outline: 'bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create Card component**

Create `src/components/common/Card.tsx`:

```typescript
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  border?: 'left' | 'none';
  borderColor?: 'teal' | 'navy';
  background?: 'white' | 'light' | 'navy';
}

export default function Card({
  children,
  className = '',
  border = 'none',
  borderColor = 'teal',
  background = 'white',
}: CardProps) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-light-bg',
    navy: 'bg-navy text-white',
  };

  const borderClass = border === 'left' ? `border-l-4 border-${borderColor}` : '';

  return (
    <div className={`p-6 rounded-lg ${bgClass[background]} ${borderClass} ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Create Container component**

Create `src/components/common/Container.tsx`:

```typescript
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Create Section component**

Create `src/components/common/Section.tsx`:

```typescript
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'light' | 'navy';
  className?: string;
}

export default function Section({
  children,
  background = 'white',
  className = '',
}: SectionProps) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-light-bg',
    navy: 'bg-navy text-white',
  };

  return (
    <section className={`py-16 md:py-24 ${bgClass[background]} ${className}`}>
      {children}
    </section>
  );
}
```

- [ ] **Step 5: Create Grid component**

Create `src/components/common/Grid.tsx`:

```typescript
import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Grid({
  children,
  cols = 3,
  gap = 'md',
  className = '',
}: GridProps) {
  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const colClass = `grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols}`;

  return (
    <div className={`grid ${colClass} ${gapClass[gap]} ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/common/
git commit -m "feat: create core reusable components (Button, Card, Container, Section, Grid)"
```

---

### Task 4: Create Layout Components

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/BaseLayout.tsx`

- [ ] **Step 1: Create Header component**

Create `src/components/layout/Header.tsx`:

```typescript
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/#services' },
    { label: 'Products', href: '/#products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Company', href: '/company' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <header className="bg-navy sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl">
            National e-Payment
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white hover:text-teal transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <Button variant="outline" href="/contact">
              Sign In
            </Button>
            <Button variant="primary" href="/signup">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white hover:text-teal transition-colors block py-2">
                {item.label}
              </a>
            ))}
            <Button variant="primary" href="/signup" className="w-full">
              Get Started
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
```

- [ ] **Step 2: Create Footer component**

Create `src/components/layout/Footer.tsx`:

```typescript
import Container from '@/components/common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">National e-Payment</h4>
            <p className="text-sm text-gray-300">Payment solutions built for your business.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries/restaurants" className="hover:text-teal">Restaurants</a></li>
              <li><a href="/industries/retail" className="hover:text-teal">Retail</a></li>
              <li><a href="/industries/grocery" className="hover:text-teal">Grocery</a></li>
              <li><a href="/industries/lodging" className="hover:text-teal">Lodging</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products/pos-terminals" className="hover:text-teal">POS Terminals</a></li>
              <li><a href="/products/atm-machines" className="hover:text-teal">ATM Machines</a></li>
              <li><a href="/products/mobile-payments" className="hover:text-teal">Mobile Payments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+1234567890" className="hover:text-teal">(123) 456-7890</a></li>
              <li><a href="mailto:support@nationalepayment.com" className="hover:text-teal">support@nationalepayment.com</a></li>
              <li>123 Business Ave, Suite 100</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© {currentYear} National e-Payment. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-teal">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-teal">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-teal">Facebook</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 3: Create BaseLayout component**

Create `src/components/layout/BaseLayout.tsx`:

```typescript
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseLayout({ children, className = '' }: BaseLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/
git commit -m "feat: create layout components (Header, Footer, BaseLayout)"
```

---

## Phase 3: Page Sections & Components

### Task 5: Create Section Components for Homepage

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/ServicesGrid.tsx`
- Create: `src/components/sections/ProductGrid.tsx`
- Create: `src/components/sections/TrustSignals.tsx`
- Create: `src/components/sections/CTASection.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/sections/Hero.tsx`:

```typescript
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Get Started Free',
  ctaHref = '/signup',
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-light text-white py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            {subtitle}
          </p>
          <Button variant="primary" href={ctaHref} size="lg">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Create ServicesGrid component**

Create `src/components/sections/ServicesGrid.tsx`:

```typescript
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface ServicesGridProps {
  title: string;
  subtitle: string;
  services: Service[];
}

export default function ServicesGrid({ title, subtitle, services }: ServicesGridProps) {
  return (
    <Section background="light">
      <Container>
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.id} border="left" borderColor="teal" background="white">
              <h4 className="text-xl font-semibold text-navy mb-2">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.href} className="text-teal font-semibold hover:text-teal-dark">
                Learn More →
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 3: Create ProductGrid component**

Create `src/components/sections/ProductGrid.tsx`:

```typescript
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

interface Product {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface ProductGridProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <Section background="white">
      <Container>
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-navy text-white p-8 rounded-lg text-center hover:bg-navy-light transition-colors"
            >
              <h4 className="text-2xl font-semibold mb-3">{product.title}</h4>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <a href={product.href} className="text-teal font-semibold hover:text-teal-dark">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 4: Create TrustSignals component**

Create `src/components/sections/TrustSignals.tsx`:

```typescript
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

export default function TrustSignals() {
  return (
    <Section background="white">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">Why Merchants Trust Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partnerships */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Bank Partnerships</h3>
            <p className="text-gray-600 mb-6">Processing through Elavon, Wells Fargo, and major financial institutions</p>
            <div className="flex justify-center gap-4">
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">Elavon</div>
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">WF</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Certifications</h3>
            <p className="text-gray-600 mb-6">MSP, ISO 27001, and PCI DSS Level 1 compliant</p>
            <div className="flex justify-center gap-4">
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">MSP</div>
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">ISO</div>
            </div>
          </div>

          {/* Metrics */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Trusted by Thousands</h3>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-teal">10,000+</p>
              <p className="text-gray-600">Active merchants</p>
              <p className="text-lg font-semibold text-navy mt-4">Billions in annual transactions</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 5: Create CTASection component**

Create `src/components/sections/CTASection.tsx`:

```typescript
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

interface CTASectionProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  heading,
  subheading,
  ctaText = 'Get Started Free',
  ctaHref = '/signup',
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h2>
          {subheading && <p className="text-xl mb-8 opacity-90">{subheading}</p>}
          <Button variant="primary" href={ctaHref} size="lg">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/
git commit -m "feat: create section components for homepage content"
```

---

## Phase 4: Data & Content Structure

### Task 6: Create Content Data Files

**Files:**
- Create: `src/lib/industries.ts`
- Create: `src/lib/products.ts`
- Create: `src/lib/types.ts`
- Create: `src/content/industries.json`
- Create: `src/content/products.json`

- [ ] **Step 1: Create TypeScript types**

Create `src/lib/types.ts`:

```typescript
export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  painPoints: string[];
  solutions: string[];
  recommendedProducts: string[];
  testimonial?: {
    text: string;
    author: string;
    company: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  specifications?: Record<string, string>;
  pricing?: string;
  brands?: string[];
  industries: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  company: string;
  industry: string;
}
```

- [ ] **Step 2: Create industries data**

Create `src/content/industries.json`:

```json
[
  {
    "id": "restaurants",
    "slug": "restaurants",
    "title": "Restaurants & QSR",
    "shortDescription": "Fast processing. Zero setup fees. Instant approval.",
    "fullDescription": "Whether you're a fine dining establishment, quick-service restaurant, or food truck, we have payment solutions that keep transactions fast and secure.",
    "painPoints": [
      "Need fast payment processing during peak hours",
      "Multiple payment methods required (cards, digital wallets)",
      "PCI compliance concerns"
    ],
    "solutions": [
      "High-speed POS terminals",
      "Support for contactless payments",
      "Integrated EMV technology"
    ],
    "recommendedProducts": ["pos-terminals", "mobile-payments"],
    "testimonial": {
      "text": "We switched to National e-Payment and cut payment processing time in half. Our customers are happier, and so are we.",
      "author": "Sarah Chen",
      "company": "The Hungry Fork Restaurant"
    }
  },
  {
    "id": "retail",
    "slug": "retail",
    "title": "Retail & E-commerce",
    "shortDescription": "Omnichannel. Secure. Flexible payment options.",
    "fullDescription": "From brick-and-mortar to online stores, our payment solutions support all your retail channels seamlessly.",
    "painPoints": [
      "Managing payments across multiple channels",
      "Inventory integration needs",
      "Customer data security"
    ],
    "solutions": [
      "Omnichannel payment processing",
      "Inventory management integration",
      "Advanced fraud detection"
    ],
    "recommendedProducts": ["pos-terminals", "mobile-payments"]
  },
  {
    "id": "grocery",
    "slug": "grocery",
    "title": "Grocery & Convenience",
    "shortDescription": "High transaction volume. Competitive rates. 24/7 support.",
    "fullDescription": "Handle high-volume transactions with confidence. We support grocery stores and convenience stores of all sizes.",
    "painPoints": [
      "High volume of daily transactions",
      "Need for self-checkout solutions",
      "Extended hours of operation"
    ],
    "solutions": [
      "Scalable transaction processing",
      "Self-checkout terminal support",
      "24/7 dedicated support"
    ],
    "recommendedProducts": ["pos-terminals", "atm-machines"]
  },
  {
    "id": "lodging",
    "slug": "lodging",
    "title": "Lodging & Hospitality",
    "shortDescription": "Integrated. Reliable. Enterprise-grade.",
    "fullDescription": "Hotels, motels, and hospitality businesses need reliable payment solutions. We deliver enterprise-grade processing.",
    "painPoints": [
      "Need for room charges and deposits",
      "Guest folio integration",
      "Security for stored payment methods"
    ],
    "solutions": [
      "Integrated hospitality payment systems",
      "Secure guest folio management",
      "EMV and tokenization support"
    ],
    "recommendedProducts": ["pos-terminals"]
  }
]
```

- [ ] **Step 3: Create products data**

Create `src/content/products.json`:

```json
[
  {
    "id": "pos-terminals",
    "slug": "pos-terminals",
    "title": "POS Terminals",
    "category": "hardware",
    "description": "Modern, reliable point-of-sale terminals for every business size.",
    "features": [
      "EMV chip card processing",
      "Contactless payment support",
      "Built-in receipt printer",
      "Multiple connectivity options",
      "Touchscreen interface"
    ],
    "specifications": {
      "Display": "5-inch color touchscreen",
      "Connectivity": "Ethernet, WiFi, 4G",
      "Certifications": "EMV Level 1, PCI DSS",
      "Languages": "Multiple language support"
    },
    "pricing": "Custom quotes available",
    "industries": ["restaurants", "retail", "grocery", "lodging"]
  },
  {
    "id": "atm-machines",
    "slug": "atm-machines",
    "title": "ATM Machines",
    "category": "hardware",
    "description": "ATM solutions from leading manufacturers: Triton, Nautilus Hyosung, Genmega, and more.",
    "features": [
      "Multiple brand options",
      "Cash dispensing",
      "Balance inquiry",
      "Withdrawal functionality",
      "Vault monitoring"
    ],
    "brands": ["Triton", "Nautilus Hyosung", "Genmega", "Hantle"],
    "industries": ["grocery", "retail", "restaurants"]
  },
  {
    "id": "mobile-payments",
    "slug": "mobile-payments",
    "title": "Mobile Payments",
    "category": "software",
    "description": "Accept payments anywhere, anytime with our mobile payment solutions.",
    "features": [
      "Accept anywhere",
      "Instant settlement",
      "Multiple payment methods",
      "Real-time reporting",
      "Mobile-optimized interface"
    ],
    "industries": ["restaurants", "retail", "lodging"]
  }
]
```

- [ ] **Step 4: Create industries library**

Create `src/lib/industries.ts`:

```typescript
import industriesData from '@/content/industries.json';
import { Industry } from '@/lib/types';

export const industries: Industry[] = industriesData as Industry[];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((ind) => ind.slug);
}

export function getIndustriesForHomepage() {
  return industries.map((ind) => ({
    id: ind.id,
    title: ind.title,
    description: ind.shortDescription,
    href: `/industries/${ind.slug}`,
  }));
}
```

- [ ] **Step 5: Create products library**

Create `src/lib/products.ts`:

```typescript
import productsData from '@/content/products.json';
import { Product } from '@/lib/types';

export const products: Product[] = productsData as Product[];

export function getProduct(slug: string): Product | undefined {
  return products.find((prod) => prod.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((prod) => prod.slug);
}

export function getProductsForHomepage() {
  return products.map((prod) => ({
    id: prod.id,
    title: prod.title,
    description: prod.description,
    href: `/products/${prod.slug}`,
  }));
}

export function getProductsByIndustry(industryId: string) {
  return products.filter((prod) => prod.industries.includes(industryId));
}
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/types.ts src/lib/industries.ts src/lib/products.ts src/content/
git commit -m "feat: create content data structures and libraries for industries and products"
```

---

## Phase 5: Homepage Implementation

### Task 7: Build Homepage

**Files:**
- Create: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update root layout**

Edit `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import './globals.css';
import BaseLayout from '@/components/layout/BaseLayout';

export const metadata: Metadata = {
  title: 'National e-Payment | Payment Solutions for Your Business',
  description: 'Fast, easy payment processing solutions for restaurants, retail, grocery, and more. Zero setup fees, instant approval.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create homepage**

Create `src/app/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProductGrid from '@/components/sections/ProductGrid';
import TrustSignals from '@/components/sections/TrustSignals';
import CTASection from '@/components/sections/CTASection';
import { getIndustriesForHomepage } from '@/lib/industries';
import { getProductsForHomepage } from '@/lib/products';

export default function Home() {
  const industries = getIndustriesForHomepage();
  const productsForHome = getProductsForHomepage();

  return (
    <>
      <Hero
        title="Payment Solutions Built for You"
        subtitle="From terminals to ATMs, everything your business needs in one place"
        ctaText="Get Started Free"
        ctaHref="/signup"
      />

      <ServicesGrid
        title="Solutions for Your Industry"
        subtitle="We understand your business. Here's what we offer:"
        services={industries}
      />

      <ProductGrid
        title="Hardware & Software Solutions"
        subtitle="Everything you need in one ecosystem:"
        products={productsForHome}
      />

      <TrustSignals />

      <CTASection
        heading="Become PCI Compliant Now"
        subheading="Get approved instantly and start processing payments securely."
        ctaText="Start Your Free Trial"
        ctaHref="/signup"
      />
    </>
  );
}
```

- [ ] **Step 3: Test homepage locally**

Run:
```bash
npm run dev
```

Open browser to `http://localhost:3000` and verify:
- Hero section displays correctly
- Services grid shows industry tiles
- Products section displays
- Trust signals section visible
- CTA section at bottom
- Responsive on mobile

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/layout.tsx
git commit -m "feat: build homepage with all sections"
```

---

## Phase 6: Industry Pages

### Task 8: Create Dynamic Industry Pages

**Files:**
- Create: `src/app/industries/[slug]/page.tsx`
- Create: `src/app/industries/index.tsx`

- [ ] **Step 1: Create industries listing page**

Create `src/app/industries/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import Section from '@/components/common/Section';
import { getIndustriesForHomepage } from '@/lib/industries';

export const metadata = {
  title: 'Industries | National e-Payment',
  description: 'Payment solutions tailored for your industry.',
};

export default function IndustriesPage() {
  const industries = getIndustriesForHomepage();

  return (
    <>
      <Hero
        title="Payment Solutions for Every Industry"
        subtitle="Tailored payment processing for your specific business needs"
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Card key={industry.id} border="left" borderColor="teal" background="white">
                <h3 className="text-2xl font-bold text-navy mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <a href={industry.href} className="text-teal font-semibold hover:text-teal-dark">
                  Explore This Industry →
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Create dynamic industry page template**

Create `src/app/industries/[slug]/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ProductGrid from '@/components/sections/ProductGrid';
import CTASection from '@/components/sections/CTASection';
import { getIndustry, getAllIndustrySlugs, getIndustriesForHomepage } from '@/lib/industries';
import { getProductsByIndustry, getProductsForHomepage } from '@/lib/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) return {};

  return {
    title: `${industry.title} Payment Solutions | National e-Payment`,
    description: industry.fullDescription,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);

  if (!industry) {
    notFound();
  }

  const recommendedProducts = getProductsForHomepage().filter((prod) =>
    industry.recommendedProducts.includes(prod.id)
  );

  return (
    <>
      <Hero
        title={industry.title}
        subtitle={industry.fullDescription}
        ctaText="Apply Now"
        ctaHref="/signup"
      />

      {/* Pain Points & Solutions */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Common Challenges</h2>
              <ul className="space-y-4">
                {industry.painPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-teal font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-teal font-bold text-xl mt-1">★</span>
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <ProductGrid
          title="Recommended Products"
          subtitle="The tools your business needs"
          products={recommendedProducts}
        />
      )}

      {/* Testimonial */}
      {industry.testimonial && (
        <Section background="navy">
          <Container>
            <div className="max-w-2xl mx-auto text-center text-white">
              <p className="text-xl mb-6 italic">"{industry.testimonial.text}"</p>
              <p className="font-semibold">{industry.testimonial.author}</p>
              <p className="text-teal">{industry.testimonial.company}</p>
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        heading="Ready to Get Started?"
        subheading={`Become PCI compliant and start processing payments for ${industry.title.toLowerCase()}.`}
        ctaText="Apply Now"
        ctaHref="/signup"
      />
    </>
  );
}
```

- [ ] **Step 3: Test industry pages locally**

Run:
```bash
npm run dev
```

Visit `http://localhost:3000/industries` and test:
- Industries listing page loads
- Click on a specific industry (e.g., `/industries/restaurants`)
- Verify all sections render correctly
- Check responsive design

- [ ] **Step 4: Commit**

```bash
git add src/app/industries/
git commit -m "feat: create dynamic industry pages with solutions and recommendations"
```

---

## Phase 7: Product Pages

### Task 9: Create Dynamic Product Pages

**Files:**
- Create: `src/app/products/[slug]/page.tsx`
- Create: `src/app/products/page.tsx`

- [ ] **Step 1: Create products listing page**

Create `src/app/products/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import { getProductsForHomepage } from '@/lib/products';

export const metadata = {
  title: 'Products | National e-Payment',
  description: 'Payment processing hardware and software solutions.',
};

export default function ProductsPage() {
  const products = getProductsForHomepage();

  return (
    <>
      <Hero
        title="Our Products"
        subtitle="Everything you need to accept payments and grow your business"
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} background="navy">
                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <a href={product.href} className="text-teal font-semibold hover:text-white transition-colors">
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Create dynamic product page template**

Create `src/app/products/[slug]/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import CTASection from '@/components/sections/CTASection';
import { getProduct, getAllProductSlugs } from '@/lib/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return {};

  return {
    title: `${product.title} | National e-Payment`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Hero
        title={product.title}
        subtitle={product.description}
        ctaText="Get Quote"
        ctaHref="/contact"
      />

      {/* Features Section */}
      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, idx) => (
              <Card key={idx} border="left" borderColor="teal" background="white">
                <p className="text-gray-700">{feature}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <Section background="white">
          <Container>
            <h2 className="text-3xl font-bold text-navy mb-8">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-6 bg-light-bg rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">{key}</h4>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Brands Section */}
      {product.brands && product.brands.length > 0 && (
        <Section background="light">
          <Container>
            <h2 className="text-3xl font-bold text-navy mb-8">Available Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.brands.map((brand, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg text-center font-semibold text-navy">
                  {brand}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Industries Section */}
      <Section background="white">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.industries.map((industry, idx) => (
              <div key={idx} className="text-center p-6 bg-light-bg rounded-lg">
                <p className="font-semibold text-navy">{industry}</p>
                <a href={`/industries/${industry.toLowerCase().replace(/ & /g, '-')}`} className="text-teal text-sm mt-2 inline-block">
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Ready to Get Started?"
        subheading={`Integrate ${product.title} into your business today.`}
        ctaText="Get a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
```

- [ ] **Step 3: Test product pages locally**

Run:
```bash
npm run dev
```

Visit `http://localhost:3000/products` and test:
- Products listing page loads
- Click on a specific product (e.g., `/products/pos-terminals`)
- Verify all sections (features, specs, industries) render
- Test responsive design

- [ ] **Step 4: Commit**

```bash
git add src/app/products/
git commit -m "feat: create dynamic product pages with features, specs, and industries"
```

---

## Phase 8: Supporting Pages

### Task 10: Create Remaining Pages

**Files:**
- Create: `src/app/pricing/page.tsx`
- Create: `src/app/company/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/resources/page.tsx`

- [ ] **Step 1: Create pricing page**

Create `src/app/pricing/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

export const metadata = {
  title: 'Pricing | National e-Payment',
  description: 'Transparent, competitive pricing for payment processing.',
};

const pricingTiers = [
  {
    name: 'Startup',
    description: 'Perfect for new businesses',
    price: 'Custom',
    features: [
      'Basic POS Terminal',
      'Standard Support',
      'Monthly Reporting',
      'Up to 500 transactions/month',
    ],
  },
  {
    name: 'Standard',
    description: 'For growing businesses',
    price: 'Custom',
    features: [
      'Advanced POS Terminal',
      'Priority Support',
      'Real-time Reporting',
      'Up to 5,000 transactions/month',
      'Multiple Payment Methods',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    features: [
      'Full Suite of Solutions',
      'Dedicated Account Manager',
      'Advanced Analytics',
      'Unlimited Transactions',
      'Custom Integration',
      'Compliance Support',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Transparent Pricing"
        subtitle="No hidden fees. Get a custom quote based on your needs."
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                background={tier.highlight ? 'white' : 'light'}
                className={tier.highlight ? 'ring-2 ring-teal' : ''}
              >
                <h3 className="text-2xl font-bold text-navy mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                <p className="text-3xl font-bold text-teal mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="text-teal font-bold">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" href="/signup" className="w-full">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg text-center">
            <h3 className="text-2xl font-bold text-navy mb-4">Questions About Pricing?</h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. Contact our sales team for a personalized quote.
            </p>
            <Button variant="secondary" href="/contact">
              Contact Sales
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Create company page**

Create `src/app/company/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import TrustSignals from '@/components/sections/TrustSignals';

export const metadata = {
  title: 'About Us | National e-Payment',
  description: 'Learn about National e-Payment and our mission to serve businesses.',
};

export default function CompanyPage() {
  return (
    <>
      <Hero
        title="About National e-Payment"
        subtitle="Trusted payment solutions for businesses of all sizes"
      />

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At National e-Payment, we believe payment processing should be simple, reliable, and affordable.
              We're committed to providing businesses with payment solutions that grow with them.
            </p>
            <p className="text-lg text-gray-600">
              Since our founding, we've processed billions in transactions for thousands of merchants across
              every industry. We're trusted by startups and enterprises alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card background="light">
              <h4 className="text-2xl font-bold text-navy mb-2">10,000+</h4>
              <p className="text-gray-600">Active merchants</p>
            </Card>
            <Card background="light">
              <h4 className="text-2xl font-bold text-navy mb-2">$B+</h4>
              <p className="text-gray-600">Annual transactions</p>
            </Card>
            <Card background="light">
              <h4 className="text-2xl font-bold text-navy mb-2">24/7</h4>
              <p className="text-gray-600">Customer support</p>
            </Card>
          </div>
        </Container>
      </Section>

      <TrustSignals />

      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Reliability',
                description: 'We ensure your payments process, every single time.',
              },
              {
                title: 'Simplicity',
                description: 'Easy setup, easy management, easy growth.',
              },
              {
                title: 'Security',
                description: 'Enterprise-grade protection for your customer data.',
              },
            ].map((value) => (
              <Card key={value.title} background="white" border="left" borderColor="teal">
                <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 3: Create contact page**

Create `src/app/contact/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

export const metadata = {
  title: 'Contact Us | National e-Payment',
  description: 'Get in touch with National e-Payment sales and support teams.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We're here to help. Reach out to our sales or support team."
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card background="white" border="left" borderColor="teal">
              <h4 className="text-xl font-bold text-navy mb-3">Phone</h4>
              <a href="tel:+1-800-123-4567" className="text-lg text-teal font-semibold hover:text-teal-dark">
                +1 (800) 123-4567
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
            </Card>

            <Card background="white" border="left" borderColor="teal">
              <h4 className="text-xl font-bold text-navy mb-3">Email</h4>
              <a href="mailto:support@nationalepayment.com" className="text-lg text-teal font-semibold hover:text-teal-dark">
                support@nationalepayment.com
              </a>
              <p className="text-sm text-gray-600 mt-2">Response within 1 hour</p>
            </Card>

            <Card background="white" border="left" borderColor="teal">
              <h4 className="text-xl font-bold text-navy mb-3">Address</h4>
              <p className="text-gray-600">
                123 Business Avenue<br />
                Suite 100<br />
                City, State 12345
              </p>
            </Card>
          </div>

          <div className="bg-white p-12 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-white font-semibold py-3 rounded-lg hover:bg-teal-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 4: Create resources page**

Create `src/app/resources/page.tsx`:

```typescript
import Hero from '@/components/sections/Hero';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

export const metadata = {
  title: 'Resources | National e-Payment',
  description: 'Guides, documentation, and FAQs for payment processing.',
};

const resources = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Merchant Account Setup Guide', description: 'Step-by-step guide to opening your account' },
      { title: 'POS Terminal Setup', description: 'How to configure and activate your terminal' },
      { title: 'First Transaction', description: 'Processing your first payment' },
    ],
  },
  {
    category: 'Integration',
    items: [
      { title: 'API Documentation', description: 'Complete API reference for developers' },
      { title: 'Integration Guides', description: 'Connect our payment system to yours' },
      { title: 'Webhook Setup', description: 'Real-time transaction notifications' },
    ],
  },
  {
    category: 'Compliance',
    items: [
      { title: 'PCI DSS Compliance', description: 'Security standards and best practices' },
      { title: 'Data Privacy', description: 'How we protect your customer data' },
      { title: 'Fraud Prevention', description: 'Tools to protect your business' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Resources & Documentation"
        subtitle="Everything you need to succeed with National e-Payment"
      />

      <Section background="light">
        <Container>
          {resources.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="text-3xl font-bold text-navy mb-8">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Card key={item.title} background="white" border="left" borderColor="teal">
                    <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a href="#" className="text-teal font-semibold hover:text-teal-dark">
                      Read More →
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-white p-12 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">
              Have questions? Check out our FAQ section for answers to common questions.
            </p>
            <a href="#faq" className="text-teal font-semibold hover:text-teal-dark">
              View FAQ →
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 5: Test all pages locally**

Run:
```bash
npm run dev
```

Visit and verify:
- `http://localhost:3000/pricing`
- `http://localhost:3000/company`
- `http://localhost:3000/contact`
- `http://localhost:3000/resources`

- [ ] **Step 6: Commit**

```bash
git add src/app/pricing/ src/app/company/ src/app/contact/ src/app/resources/
git commit -m "feat: create pricing, company, contact, and resources pages"
```

---

## Phase 9: Responsive Design & Polish

### Task 11: Test Responsive Design & Optimize

- [ ] **Step 1: Test on different breakpoints**

Run:
```bash
npm run dev
```

Open browser DevTools and test:
- Mobile (375px): All content stacks, hamburger menu works, text readable
- Tablet (768px): 2-column grids activate
- Desktop (1200px): 3-column grids, full navigation visible
- Test on actual mobile device via `http://<your-ip>:3000`

- [ ] **Step 2: Verify all links work**

Manually click and verify navigation:
- Header navigation items link correctly
- Footer links work
- Industry tiles navigate to industry pages
- Product tiles navigate to product pages
- CTAs navigate to signup/contact

- [ ] **Step 3: Optimize performance**

Run:
```bash
npm run build
npm run start
```

Verify build completes without errors and site works in production mode.

- [ ] **Step 4: Add error page**

Create `src/app/not-found.tsx`:

```typescript
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-light-bg">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-3xl font-bold text-navy mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you're looking for doesn't exist.
          </p>
          <Button href="/" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
```

- [ ] **Step 5: Commit polish changes**

```bash
git add src/app/not-found.tsx
git commit -m "fix: add 404 error page and verify responsive design"
```

---

## Phase 10: Final Testing & Deployment Prep

### Task 12: Final QA & Deployment Preparation

- [ ] **Step 1: Create README**

Create `README.md`:

```markdown
# National e-Payment Website

A modernized website for National e-Payment built with Next.js, React, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Features

- Unified ecosystem design
- Dynamic industry pages
- Dynamic product pages
- Responsive design
- Dark theme with Navy + Teal colors
- Optimized performance with Next.js static generation

## File Structure

- `src/components/` — Reusable React components
- `src/pages/` — Page routes
- `src/content/` — JSON content data
- `src/lib/` — Utility functions and data loaders
- `public/` — Static assets

## Design System

- Colors: Navy (#0F3A5F), Teal (#00C9A7)
- Font: Inter, Poppins
- Tailwind CSS with custom color tokens
```

- [ ] **Step 2: Verify build works**

Run:
```bash
npm run build
```

Expected output:
```
Loaded relational config from next.config.js
...
✓ Compiled successfully
```

- [ ] **Step 3: Test static export (if needed)**

If deploying to static hosting, add to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
```

Run:
```bash
npm run build
```

Verify `out/` directory contains static HTML files.

- [ ] **Step 4: Final commit**

```bash
git add README.md .next/ package.json
git commit -m "docs: add README and prepare for deployment"
```

- [ ] **Step 5: Create deployment checklist**

Create `DEPLOYMENT.md`:

```markdown
# Deployment Checklist

## Pre-Deployment

- [ ] All pages tested locally
- [ ] Responsive design verified on mobile/tablet/desktop
- [ ] All links working
- [ ] Build completes without errors
- [ ] Performance optimized

## Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_SITE_URL=https://nationalepayment.com
NEXT_PUBLIC_CONTACT_EMAIL=support@nationalepayment.com
```

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Self-Hosted

```bash
npm run build
npm run start
```

### Option 3: Static Export

Enable `output: 'export'` in `next.config.js` and deploy the `out/` directory to any static host (Netlify, GitHub Pages, etc.).

## Post-Deployment

- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Performance monitoring enabled
- [ ] Analytics configured
```

- [ ] **Step 6: Final commit**

```bash
git add DEPLOYMENT.md
git commit -m "docs: add deployment guide"
```

---

## Summary

**Total Tasks:** 12  
**Total Commits:** 12+  
**Estimated Time:** 6-8 hours for a team of developers  
**Key Deliverables:**
- ✅ Homepage with unified ecosystem design
- ✅ Dynamic industry pages (4+ industries)
- ✅ Dynamic product pages (3 main products)
- ✅ Supporting pages (Pricing, Company, Contact, Resources)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navy + Teal design system
- ✅ Reusable component library
- ✅ Static site generation for performance
- ✅ Production-ready deployment setup

---

## Next Steps

Once this plan is approved, choose your execution approach:

**Option 1: Subagent-Driven (Recommended)**
- Fresh subagent assigned per task
- Two-stage review between tasks
- Fast iteration with quality gates

**Option 2: Inline Execution**
- Execute tasks in this session
- Batch work with checkpoints
- Direct collaboration

Which execution approach would you prefer?