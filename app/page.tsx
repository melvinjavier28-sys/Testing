import Image from 'next/image';
import Container from '@/src/components/common/Container';
import CTASection from '@/src/components/sections/CTASection';
import RevealSection from '@/src/components/common/RevealSection';
import AnimatedCounter from '@/src/components/common/AnimatedCounter';
import Testimonials from '@/src/components/sections/Testimonials';
import DiagonalCut from '@/src/components/common/DiagonalCut';
import SectionHeading from '@/src/components/common/SectionHeading';
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

/* ── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Dot-grid texture */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#BDE525" fillOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Ghost word */}
        <span
          aria-hidden="true"
          className="absolute bottom-16 right-8 text-[180px] font-black leading-none select-none pointer-events-none hidden lg:block"
          style={{ color: 'rgba(189,229,37,0.07)' }}
        >
          FREE
        </span>

        <Container>
          <div className="pt-16 md:pt-24 pb-10 md:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: logo showcase */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative flex items-center justify-center p-10">
                {/* Lime glow behind the logo */}
                <div className="absolute inset-0 rounded-full bg-teal/20 blur-3xl" />
                <Image
                  src="/logo.png"
                  alt="National e-Payment"
                  width={1184}
                  height={383}
                  className="relative h-96 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 4px 24px rgba(189,229,37,0.45)) drop-shadow(0 1px 6px rgba(255,255,255,0.25))' }}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-4">
                Registered MSP/ISO · Serving merchants nationwide
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] mb-5">
                Payment Solutions<br />
                <span className="text-teal">Built for Your Business</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                From credit card processing to ATMs, gift cards to check processing —
                National e-Payment delivers everything your business needs in one
                trusted, registered ecosystem.
              </p>

              {/* Value props */}
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-9 text-sm">
                {[
                  'Free merchant account',
                  'Free terminal or software',
                  '24/7 customer support',
                  'Instant approval decision',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-200">
                    <Check className="w-4 h-4 text-teal shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="bg-teal text-navy font-bold px-8 py-4 rounded-lg hover:bg-teal-dark transition-colors text-center text-base"
                >
                  Get Started Free
                </a>
                <a
                  href="tel:+18664369022"
                  className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:border-white hover:bg-white/5 transition-colors text-center text-base"
                >
                  Call (866) 436-9022
                </a>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="relative z-10 mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
            {[
              { value: '95%', label: 'Approval Rate' },
              { value: '24/7', label: 'Live Support' },
              { value: 'Free', label: 'Setup & Terminal' },
              { value: '30-Day', label: 'Risk-Free Trial' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-navy-light/80 px-6 py-5 text-center">
                <div className="text-2xl font-black text-teal">{value}</div>
                <div className="text-xs text-gray-300 mt-1 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Banking partners bar ──────────────────────────── */}
      <div className="bg-navy-light border-t border-white/10 py-4">
        <Container>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wider shrink-0">
              Registered with
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {bankPartners.map((p) => (
                <span
                  key={p}
                  className="bg-navy/60 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <DiagonalCut from="navy-light" to="light" />

      {/* ── Industries ───────────────────────────────────── */}
      <section id="services" className="py-16 md:py-20 bg-light-bg">
        <Container>
          <RevealSection>
            <SectionHeading
              title="Solutions for Every Industry"
              subtitle="We understand your business — because we built our platform around it."
              className="mb-10"
            />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {industries.map(({ title, href, Icon }, i) => (
              <RevealSection key={title} delay={i * 60}>
                <a
                  href={href}
                  className="card-lift flex items-center gap-4 bg-white px-5 py-4 rounded-xl border border-gray-200 hover:border-teal group"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-teal/10 transition-colors">
                    <Icon className="w-5 h-5 text-navy group-hover:text-teal transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-navy group-hover:text-teal transition-colors text-sm leading-tight">
                    {title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-teal ml-auto shrink-0 transition-colors" />
                </a>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why we're different ───────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <RevealSection>
            <SectionHeading
              title="Why Merchants Switch to Us"
              subtitle="Not marketing copy — these are the three things we hear most often from new customers."
              className="mb-12"
            />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(({ Icon, heading, body }, i) => (
              <RevealSection key={heading} delay={i * 100}>
                <div className="relative overflow-hidden pl-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 text-[56px] font-black leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(189,229,37,0.22)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-[1]">
                    <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{heading}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
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
      <section id="products" className="py-16 md:py-20 bg-light-bg">
        <Container>
          <RevealSection>
            <SectionHeading
              title="Hardware & Software Solutions"
              subtitle="Everything you need to accept payments — certified, supported, and shipped ready to go."
              className="mb-10"
            />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(({ name, href, desc, Icon }, i) => (
              <RevealSection key={name} delay={i * 70}>
                <a
                  href={href}
                  className="card-lift flex gap-4 bg-white p-5 rounded-xl border border-gray-200 hover:border-teal group"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-navy group-hover:text-teal transition-colors text-sm mb-0.5">
                      {name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-teal mt-0.5 ml-auto shrink-0 transition-colors" />
                </a>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-8">
            <a
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </a>
          </RevealSection>
        </Container>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="py-16 bg-light-bg">
        <Container>
          <RevealSection>
            <SectionHeading
              title="By the Numbers"
              subtitle="Earned from thousands of merchants who trust us with their payments."
              className="mb-10"
            />
          </RevealSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <RevealSection delay={0}>
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.04)' }}
                >
                  95%
                </span>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-navy mb-2">
                    <AnimatedCounter value={95} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Approval Rate</div>
                </div>
              </div>
            </RevealSection>

            {/* Stat 2 */}
            <RevealSection delay={100}>
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.04)' }}
                >
                  24/7
                </span>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-navy mb-2">24/7</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Live Support</div>
                </div>
              </div>
            </RevealSection>

            {/* Stat 3 */}
            <RevealSection delay={200}>
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.04)' }}
                >
                  $0
                </span>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-navy mb-2">$0</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Setup Cost</div>
                </div>
              </div>
            </RevealSection>

            {/* Stat 4 */}
            <RevealSection delay={300}>
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(15,58,95,0.04)' }}
                >
                  30
                </span>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-navy mb-2">30</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Day Risk-Free Trial</div>
                </div>
              </div>
            </RevealSection>
          </div>
        </Container>
      </section>

      {/* ── Certifications strip ─────────────────────────── */}
      <section className="py-10 bg-white border-y border-gray-100">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-gray-400 text-xs uppercase tracking-wider mr-2">Certified &amp; Compliant</p>
            {['PCI DSS', 'EMV Level 1 & 2', 'Fiserv Partner', 'Clover Partner', 'AMEX Certified'].map((cert) => (
              <span
                key={cert}
                className="bg-light-bg border border-gray-200 text-navy text-xs font-semibold px-3 py-1.5 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
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
