import Image from 'next/image';
import Container from '@/src/components/common/Container';
import CTASection from '@/src/components/sections/CTASection';
import RevealSection from '@/src/components/common/RevealSection';
import AnimatedCounter from '@/src/components/common/AnimatedCounter';
import Testimonials from '@/src/components/sections/Testimonials';
import DiagonalCut from '@/src/components/common/DiagonalCut';
import SectionHeading from '@/src/components/common/SectionHeading';
import Marquee from '@/src/components/common/Marquee';
import PaymentVisual from '@/src/components/sections/PaymentVisual';
import {
  ShoppingCart,
  UtensilsCrossed,
  Globe,
  Store,
  Fuel,
  Hotel,
  Gift,
  FileCheck,
  CreditCard,
  Wifi,
  Printer,
  ArrowRight,
  ChevronDown,
  Check,
  Shield,
  Clock,
  TrendingDown,
  Smartphone,
} from 'lucide-react';

/* ── Data ───────────────────────────────────────────────── */
const industries = [
  { title: 'Grocery & Supermarkets',           href: '/industries/grocery',   Icon: ShoppingCart },
  { title: 'Full-Service Restaurants',          href: '/industries/restaurants', Icon: UtensilsCrossed },
  { title: 'E-Commerce & Internet',             href: '/industries/ecommerce', Icon: Globe },
  { title: 'Retail Stores',                     href: '/industries/retail',    Icon: Store },
  { title: 'Gas Stations & C-Stores',           href: '/gas-stations-convenience-stores', Icon: Fuel },
  { title: 'Quick-Service Restaurants',         href: '/industries/restaurants', Icon: UtensilsCrossed },
  { title: 'Lodging & Hospitality',             href: '/industries/lodging',   Icon: Hotel },
  { title: 'Gift Card Services',                href: '/products/gift-cards',  Icon: Gift },
  { title: 'Check & ACH Processing',            href: '/products/check-processing', Icon: FileCheck },
];

const products = [
  { name: 'Terminals',          href: '/products/terminals',        desc: 'Clover · Ingenico · PAX · Verifone',   Icon: CreditCard },
  { name: 'ATM Machines',       href: '/products/atm-machines',     desc: 'Triton · Nautilus · Genmega · Hantle', Icon: CreditCard },
  { name: 'Mobile Pay',         href: '/products/mobile-pay',       desc: 'Clover Go · ISOACCESS Mobile',         Icon: Smartphone },
  { name: 'Wireless Terminals', href: '/products/wireless-terminal',desc: 'Ingenico · PAX · Verifone',            Icon: Wifi },
  { name: 'PIN Pads',           href: '/products/pin-pads',         desc: 'First Data · Ingenico · PAX',          Icon: CreditCard },
  { name: 'Printers',           href: '/products/printers',         desc: 'Clover · Epson · Star Micronics',      Icon: Printer },
];

const differentiators = [
  {
    Icon: TrendingDown,
    heading: 'Rates that stay low — forever',
    body: 'We don\'t offer teaser rates that jump after 90 days. The rate in your agreement is the rate you pay, full stop.',
  },
  {
    Icon: Clock,
    heading: 'Real humans, 24/7',
    body: 'Not a chatbot. Not a ticketing system. A live specialist picks up the phone any hour you call — including holidays.',
  },
  {
    Icon: Shield,
    heading: '95% of applicants approved',
    body: 'We work with diverse industries and business histories. Our underwriters look for ways to say yes, not no.',
  },
];

const bankPartners = ['Elavon (U.S. Bancorp)', 'Wells Fargo Bank N.A.', 'Esquire Bank N.A.', 'Commercial Bank of CA'];
const certs = ['PCI DSS', 'EMV Level 1 & 2', 'Fiserv Partner', 'Clover Partner', 'AMEX Certified'];
const heroStats = [
  { value: '95%', label: 'Approval Rate' },
  { value: '24/7', label: 'Live Support' },
  { value: 'Free', label: 'Setup & Terminal' },
  { value: '30-Day', label: 'Risk-Free Trial' },
];
const valueProps = [
  'Free merchant account',
  'Free terminal or software',
  '24/7 customer support',
  'Instant approval decision',
];

/* ── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="premium-hero relative overflow-hidden text-white">
        {/* Aurora blobs */}
        <div aria-hidden="true" className="aurora-blob animate-aurora -left-20 top-0 h-80 w-80" style={{ background: 'rgba(159,232,112,0.28)' }} />
        <div aria-hidden="true" className="aurora-blob animate-aurora right-0 top-24 h-96 w-96" style={{ background: 'rgba(36,123,184,0.35)', animationDuration: '24s' }} />
        {/* Grid texture */}
        <div aria-hidden="true" className="hero-grid absolute inset-0" />

        <Container>
          <div className="relative pt-5 pb-7 md:pt-7 md:pb-8">
            {/* Brand crown — centered above the headline */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div aria-hidden="true" className="absolute -inset-6 rounded-[2.25rem] bg-lime/25 blur-2xl" />
                <div className="relative rounded-2xl bg-white/95 px-7 py-5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/60 sm:px-9">
                  <Image
                    src="/logo.png"
                    alt="National e-Payment"
                    width={1184}
                    height={383}
                    className="h-12 w-auto object-contain sm:h-16"
                    priority
                    unoptimized
                  />
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-lime text-lime" />
                Registered MSP/ISO · Serving merchants nationwide
              </span>
            </div>

            {/* Body: copy + animated dashboard side-by-side */}
            <div className="mt-7 grid grid-cols-1 items-center gap-10 lg:mt-8 lg:grid-cols-2">
              <div>
                <h1 className="mb-4 text-[2.3rem] font-bold leading-[1.05] md:text-[2.8rem] lg:text-[3.05rem]">
                  Payment solutions
                  <br />
                  <span className="text-gradient-lime">built for your business</span>
                </h1>

                <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                  From credit card processing to ATMs, gift cards to check processing —
                  everything your business needs in one trusted, registered ecosystem.
                </p>

                <ul className="mb-7 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                  {valueProps.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/85">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20">
                        <Check className="h-3.5 w-3.5 text-lime" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/signup"
                    className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-navy shadow-[0_12px_34px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5"
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                  <a
                    href="tel:+18664369022"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-lime hover:bg-lime/10"
                  >
                    Call (866) 436-9022
                  </a>
                </div>
              </div>

              {/* Right: animated payment dashboard */}
              <div className="hidden lg:block">
                <PaymentVisual />
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="relative z-10 mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="bg-white/[0.06] px-6 py-4 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.1]">
                <div className="font-display text-3xl font-bold text-lime">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/55">{label}</div>
              </div>
            ))}
          </div>

          {/* Banking partners marquee */}
          <div className="relative z-10 mt-6 pb-2">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <p className="shrink-0 text-xs uppercase tracking-wider text-white/40">Registered with</p>
              <Marquee
                className="w-full"
                duration={26}
                items={bankPartners.map((p) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/65">
                    {p}
                  </span>
                ))}
              />
            </div>
          </div>

          {/* Scroll cue */}
          <div className="relative z-10 flex justify-center pb-5">
            <a
              href="#services"
              aria-label="Scroll down to explore"
              className="group flex flex-col items-center gap-1.5 text-white/55 transition-colors hover:text-lime"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Explore</span>
              <ChevronDown className="h-5 w-5 animate-scroll-cue" strokeWidth={2} />
            </a>
          </div>
        </Container>
      </section>

      <DiagonalCut from="navy-light" to="light" />

      {/* ── Industries ───────────────────────────────────── */}
      <section id="services" className="scroll-mt-24 bg-surface py-20 md:py-24">
        <Container>
          <RevealSection>
            <SectionHeading
              eyebrow="Who We Serve"
              title="Solutions for Every Industry"
              subtitle="We understand your business — because we built our platform around it."
              className="mb-12"
            />
          </RevealSection>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3">
            {industries.map(({ title, href, Icon }, i) => (
              <RevealSection key={title + i} delay={i * 50}>
                <a
                  href={href}
                  className="card-lift border-glow group flex items-center gap-4 rounded-card border border-gray-200/70 bg-white px-5 py-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/[0.05] transition-colors group-hover:bg-lime/15">
                    <Icon className="h-5 w-5 text-navy transition-colors group-hover:text-forest" strokeWidth={1.6} />
                  </div>
                  <span className="text-sm font-semibold leading-tight text-navy transition-colors group-hover:text-forest">
                    {title}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-forest" />
                </a>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why we're different ───────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <RevealSection>
            <SectionHeading
              eyebrow="The Difference"
              title="Why Merchants Switch to Us"
              subtitle="Not marketing copy — these are the three things we hear most often from new customers."
              className="mb-14"
            />
          </RevealSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {differentiators.map(({ Icon, heading, body }, i) => (
              <RevealSection key={heading} delay={i * 100}>
                <div className="card-lift relative h-full overflow-hidden rounded-card border border-gray-200/70 bg-surface p-8">
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 right-4 select-none text-[80px] font-black leading-none"
                    style={{ color: 'rgba(159,232,112,0.18)', fontFamily: 'var(--font-display)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-navy text-lime shadow-lg">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <h3 className="mb-2.5 text-xl font-bold text-navy">{heading}</h3>
                    <p className="text-sm leading-relaxed text-slate">{body}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <Testimonials />

      {/* ── Products ─────────────────────────────────────── */}
      <section id="products" className="bg-white py-20 md:py-24">
        <Container>
          <RevealSection>
            <SectionHeading
              eyebrow="Hardware & Software"
              title="Everything You Need to Get Paid"
              subtitle="Certified, supported, and shipped ready to go — terminals, ATMs, mobile, and more."
              className="mb-12"
            />
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ name, href, desc, Icon }, i) => (
              <RevealSection key={name} delay={i * 60}>
                <a
                  href={href}
                  className="card-lift border-glow group flex h-full gap-4 rounded-card border border-gray-200/70 bg-surface p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy transition-colors group-hover:bg-forest">
                    <Icon className="h-5 w-5 text-lime" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-bold text-navy transition-colors group-hover:text-forest">{name}</h3>
                    <p className="text-xs leading-relaxed text-muted">{desc}</p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-forest" />
                </a>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-10 text-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-8 py-3 font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </RevealSection>
        </Container>
      </section>

      {/* ── Stats (dark band) ────────────────────────────── */}
      <section className="premium-hero relative overflow-hidden py-20 text-white md:py-24">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
        <Container>
          <RevealSection>
            <SectionHeading
              dark
              align="center"
              eyebrow="By the Numbers"
              title="Earned, Not Advertised"
              subtitle="Trusted by thousands of merchants who count on us with every transaction."
              className="mb-14"
            />
          </RevealSection>

          <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { node: <AnimatedCounter value={95} suffix="%" />, label: 'Approval Rate' },
              { node: '24/7', label: 'Live Support' },
              { node: '$0', label: 'Setup Cost' },
              { node: <AnimatedCounter value={30} suffix="-Day" />, label: 'Risk-Free Trial' },
            ].map(({ node, label }, i) => (
              <RevealSection key={label} delay={i * 100}>
                <div className="glass-dark rounded-card p-8 text-center">
                  <div className="font-display text-4xl font-bold text-lime md:text-5xl">{node}</div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-white/55">{label}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Certifications marquee ───────────────────────── */}
      <section className="bg-surface py-12">
        <Container>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-muted">Certified &amp; Compliant</p>
          <Marquee
            duration={30}
            items={certs.map((cert) => (
              <span className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm">
                {cert}
              </span>
            ))}
          />
        </Container>
      </section>

      <CTASection
        heading="Become PCI Compliant Today"
        subheading="Instant approval. Free setup. No teaser rates. Start processing in as little as one business day."
        ctaText="Apply Free — Takes 5 Minutes"
        ctaHref="/signup"
      />
    </>
  );
}
