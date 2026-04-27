# National e-Payment Website Modernization — Design Specification

**Date:** April 27, 2026  
**Project:** nationalepayment.com redesign  
**Version:** 1.0  
**Status:** Design approved, ready for implementation planning

---

## Executive Summary

National e-Payment's current website serves its core function but feels outdated in visual design and information architecture. This specification outlines a complete modernization using a **Unified Ecosystem** approach with bold & modern visual direction. The redesign maintains all current functionality while reorganizing how services and products are presented, making the site more approachable for small business merchants while maintaining enterprise credibility.

**Primary Goals:**
- Modernize visual design (visual appearance is the primary focus)
- Reorganize information architecture for clarity and flow
- Maintain all existing services and products
- Appeal to small business merchants (primary) and enterprise customers (secondary)

---

## Visual Design System

### Color Palette

**Primary Colors:**
- Navy Primary: `#0F3A5F` — Used for headers, dark sections, primary text
- Teal Accent: `#00C9A7` — Used for CTAs, borders, highlights, interactive elements
- Neutral White: `#FFFFFF` — Main background
- Light Gray: `#F5F5F5` — Secondary background, section dividers
- Dark Charcoal: `#333333` — Body text, secondary text

**Usage Guidelines:**
- Navy establishes authority and trust
- Teal draws attention to key actions (buttons, links, important calls-to-action)
- White and light gray provide breathing room and hierarchy
- High contrast for readability and accessibility

### Typography

**Font Family:** Modern sans-serif (recommendation: Inter, Poppins, or Rethink Sans)
- Clean, professional appearance
- Excellent readability on all devices
- Modern weight distribution (600-700 for headings, 400-500 for body)

**Size & Weight Hierarchy:**
- H1 (Hero/Page Title): 48-56px, weight 700
- H2 (Section Headers): 32-40px, weight 700
- H3 (Subsection): 24-28px, weight 600
- H4 (Card Titles): 18-20px, weight 600
- Body Text: 16px, weight 400
- Small Text (captions, labels): 14px, weight 500

**Line Height:** 1.6 for body, 1.2 for headings (ensures readability and modern spacing)

### Visual Hierarchy & Spacing

**Spacing System:** 8px base unit
- Buttons: 14px vertical, 32px horizontal padding
- Card padding: 24px
- Section padding: 50px top/bottom, 40px left/right
- Gap between grid items: 20px

**Border Radius:** 
- Buttons: 6px
- Cards: 4px
- Large components: 8px

**Shadows (subtle):**
- Used sparingly for depth on cards and elevated sections
- Light shadow: `0 2px 8px rgba(0,0,0,0.1)`

---

## Site Architecture & Structure

### Pages & Sections

#### 1. **Homepage**

The homepage serves as the unified entry point where services and products flow naturally together.

**Sections (in order):**

**A. Hero Section**
- Bold navy gradient background (`#0F3A5F` to `#1A4F6F`)
- Large headline (H1): "Payment Solutions Built for You"
- Subheading: "From terminals to ATMs, everything your business needs in one place"
- Primary CTA button (teal): "Get Started Free"
- Height: Full-width hero, ~600px on desktop

**B. Services Overview**
- Heading (H2): "Solutions for Your Industry"
- Subtext: "We understand your business. Here's what we offer:"
- Grid layout: 2 columns on desktop, 1 column on mobile
- Cards for each industry vertical:
  - Restaurants & QSR
  - Retail & E-commerce
  - Grocery & Convenience
  - Lodging & Hospitality
  - Gas Stations & Fuel
  - Check Processing
  - Gift Card Services
  - Any others from current site
- Each card includes:
  - Industry title (H4, navy)
  - One-line value prop (small text)
  - Teal left border (4px) for visual accent
  - "Learn More" link or button (teal) that navigates to dedicated industry page
- Background: Light gray (`#F5F5F5`)

**C. Products Section**
- Heading (H2): "Hardware & Software Solutions"
- Subtext: "Everything you need in one ecosystem:"
- Grid layout: 3 columns on desktop, 1 column on mobile
- Product cards (navy background with white text):
  - POS Terminals
  - ATM Machines
  - Mobile Payments
  - Pin Pads / Printers (if separate)
- Each card: Title, short description, optional icon
- Background: White
- CTA: Optional "Explore Products" button to dedicated product pages

**D. Trust & Credibility Section**
- Heading (H2): "Why Merchants Trust Us"
- Content areas:
  - Bank partnerships (logos): Elavon, Wells Fargo, others
  - Certifications: MSP, ISO, PCI compliance badges
  - Key numbers: "X years in business," "X merchants served," "X transactions processed"
  - Testimonials: 2-3 short customer quotes with industry tags
- Background: White or light gray
- Layout: Mixed grid or flexbox depending on content

**E. Call-to-Action Section**
- Heading: "Become PCI Compliant Now"
- Brief copy about compliance and ease
- Primary CTA: "Start Free" or "Get Approved Instantly"
- Background: Navy with teal accent button
- Height: ~400px

**F. Footer**
- Multiple columns: Services, Products, Company, Support
- Contact info prominently displayed
- Social media links
- Copyright

#### 2. **Dedicated Industry Pages**

Each industry vertical (Restaurants, Retail, etc.) has its own full landing page.

**Structure:**
- Hero section tailored to industry (e.g., "Payment Solutions for Restaurants")
- Pain points & solutions relevant to that industry
- Recommended products for that vertical
- Recommended features or use cases
- Customer testimonials from that industry
- CTA specific to that industry
- Link back to other industries or homepage

**URL Pattern:** `/industries/restaurants`, `/industries/retail`, etc.

#### 3. **Product Pages**

Each product category (POS Terminals, ATM Machines, Mobile Payments) gets a detailed page.

**Structure:**
- Hero with product category name
- Overview of what it is and benefits
- Specifications / Features section
- Brands and models (if applicable)
- Pricing (simple, transparent)
- Integration info
- Customer testimonials / case studies
- FAQ section
- CTA: "Get Quote" or "Apply Now"

**URL Pattern:** `/products/pos-terminals`, `/products/atm-machines`, `/products/mobile-payments`

#### 4. **Pricing Page**

Clear, transparent pricing information for each service type.
- Simple table or card layout
- Three tiers: Startup, Standard, Enterprise (or similar)
- Feature comparison
- CTA per tier: "Get Started" or "Contact Sales"

#### 5. **Company / About Page**

- Company mission and story
- Key stats (years in business, merchants served, etc.)
- Team highlights (optional)
- Company certifications and partnerships
- Contact info

#### 6. **Contact Page**

- Contact form (name, email, phone, inquiry type, message)
- Phone number (prominent)
- Email address
- Physical address
- Social media links
- Hours of operation (if applicable)

#### 7. **Resource Center (optional but recommended)**

- Blog or knowledge base
- FAQ section
- Integration docs
- Implementation guides
- Compliance resources

---

## Design Patterns & Components

### Buttons

**Primary Button (Teal):**
- Background: `#00C9A7`
- Text: White, weight 600
- Padding: 14px vertical, 32px horizontal
- Border radius: 6px
- Hover state: Slightly darker teal (`#00B393`)

**Secondary Button (Navy outline):**
- Background: Transparent
- Border: 2px navy (`#0F3A5F`)
- Text: Navy, weight 600
- Padding: 12px vertical, 30px horizontal
- Border radius: 6px
- Hover state: Light navy background

### Cards

**Standard Card (white):**
- Background: `#FFFFFF`
- Border: None (or subtle shadow)
- Border radius: 4px
- Padding: 24px
- Optional: Left border (4px teal) for accent

**Navy Card (dark):**
- Background: `#0F3A5F`
- Text: White
- Border radius: 8px
- Padding: 30px
- Good for product showcases, CTAs

### Navigation

**Desktop Navigation:**
- Fixed or sticky top navbar
- Navy background (`#0F3A5F`)
- White text and logo
- Main menu items: Services, Products, Pricing, Company, Resources, Contact
- Dropdown menus for Services (industry verticals) and Products
- Right side: "Sign In" link, "Get Started" button (teal)

**Mobile Navigation:**
- Hamburger menu
- Slides in from left or top
- Same structure as desktop, collapsed
- No dropdowns; tap to expand subsections

### Forms

- Label (navy text, weight 600, 14px)
- Input field: White background, light gray border, 8px border radius, 12px padding
- Focus state: Teal border, subtle glow
- Placeholder text: Light gray
- Submit button: Teal primary button
- Success state: Teal checkmark or confirmation message

---

## Responsive Design

**Breakpoints:**
- Desktop: 1200px and above (3-column grids, full navigation)
- Tablet: 768px to 1199px (2-column grids, simplified nav)
- Mobile: Below 768px (1-column layouts, hamburger menu)

**Key Responsive Behaviors:**
- Hero sections scale down but remain impactful
- Grid layouts shift from 3 columns → 2 columns → 1 column
- Navigation collapses to hamburger on mobile
- Touch-friendly button sizes (minimum 48x48px on mobile)
- Text sizes adjust (H1: 48px desktop → 32px mobile)
- Images scale and use responsive sizing

---

## User Experience Principles

### Clarity & Trust
- Navy primary color establishes authority
- Trust signals (partnerships, certifications) are visible early on homepage
- Industry-specific pages acknowledge merchant pain points
- Transparent pricing and easy contact options

### Simplicity
- Unified ecosystem approach means services and products flow naturally
- No competing visual noise; teal accents draw attention to key actions
- Clear hierarchy ensures users know where to go next
- Minimal use of animations or complex effects (clean and professional)

### Accessibility
- High contrast (navy text on white, white text on navy)
- All images have alt text
- Form labels clearly associated with inputs
- Button text is descriptive ("Get Started Free" not "Click Here")
- Mobile-first responsive design ensures all users can navigate

---

## Information Architecture Summary

```
Homepage
├── Services (expandable)
│   ├── Restaurants & QSR → Dedicated Industry Page
│   ├── Retail & E-commerce → Dedicated Industry Page
│   ├── Grocery & Convenience → Dedicated Industry Page
│   ├── Lodging & Hospitality → Dedicated Industry Page
│   ├── Gas Stations & Fuel → Dedicated Industry Page
│   ├── Check Processing → Dedicated Industry Page
│   └── Gift Card Services → Dedicated Industry Page
├── Products (expandable)
│   ├── POS Terminals → Product Page
│   ├── ATM Machines → Product Page
│   └── Mobile Payments → Product Page
├── Pricing → Pricing Page
├── Company → About/Company Page
├── Resources (expandable)
│   ├── Blog / Knowledge Base
│   └── FAQ / Guides
└── Contact → Contact Page
```

---

## Design Tokens (Quick Reference)

| Element | Value |
|---------|-------|
| Primary Navy | `#0F3A5F` |
| Accent Teal | `#00C9A7` |
| Text Dark | `#333333` |
| Background Light | `#F5F5F5` |
| White | `#FFFFFF` |
| Base Spacing Unit | 8px |
| Button Padding | 14px vertical, 32px horizontal |
| Border Radius (standard) | 6px |
| Border Radius (large) | 8px |
| Font Family | Inter / Poppins / Rethink Sans |
| H1 Size | 48-56px, weight 700 |
| Body Size | 16px, weight 400 |

---

## Next Steps

This design specification is approved and ready for implementation planning. The next phase will involve:

1. **Creating detailed wireframes** for each page template
2. **Building a component library** (buttons, cards, forms, etc.)
3. **Developing a working prototype** or MVP
4. **Testing with users** from target audience (small business merchants)
5. **Implementing the final site** with all content and functionality
6. **Launching and iterating** based on user feedback

---

## Approval

**Approved by:** National e-Payment team  
**Date Approved:** April 27, 2026  
**Spec Version:** 1.0  
**Status:** Ready for implementation planning