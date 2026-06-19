import Image from 'next/image';
import Container from '@/src/components/common/Container';
import CTASection from '@/src/components/sections/CTASection';
import RevealSection from '@/src/components/common/RevealSection';
import AnimatedCounter from '@/src/components/common/AnimatedCounter';
import Testimonials from '@/src/components/sections/Testimonials';
import DiagonalCut from '@/src/components/common/DiagonalCut';
import SectionDecor from '@/src/components/common/SectionDecor';
import ScatterBackdrop from '@/src/components/common/ScatterBackdrop';
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
  ArrowRight,
  ChevronDown,
  Check,
  Shield,
  Tag,
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
  { name: 'Smart Terminals',    href: '/products#valor',    desc: 'Valor · Clover · PAX · Ingenico',   Icon: CreditCard },
  { name: 'POS Systems',        href: '/products#clover',   desc: 'Clover Station, Mini, Flex & more', Icon: Store },
  { name: 'Mobile Pay',         href: '/products#pax',      desc: 'PAX A920 · Clover Go · Valor RCKT', Icon: Smartphone },
  { name: 'Wireless Terminals', href: '/products#pax',      desc: 'PAX · Ingenico · Verifone',         Icon: Wifi },
  { name: 'PIN Pads',           href: '/products#verifone', desc: 'Valor · PAX A35 · Verifone M400',   Icon: CreditCard },
  { name: 'Duo Pricer',         href: '/products',          desc: 'New dual-pricing labeler available', Icon: Tag },
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

// Ambient location scenes drifting through the Industries section (faded soft blobs).
const industryScatter = [
  { src: '/hero/industries/grocery.jpg', className: '-top-12 left-[6%] h-56 w-72' },
  { src: '/hero/industries/gas-station.jpg', className: 'top-[22%] -right-12 h-60 w-80' },
  { src: '/hero/industries/restaurant.jpg', className: '-bottom-12 left-[2%] h-56 w-72' },
  { src: '/hero/industries/hotel.jpg', className: 'bottom-[6%] right-[10%] h-52 w-64' },
  { src: '/hero/industries/retail.jpg', className: 'top-[14%] left-[40%] h-48 w-60' },
  { src: '/hero/industries/ecommerce.jpg', className: '-top-10 right-[26%] h-44 w-56' },
  // faded people transacting, mixed among the locations
  { src: '/hero/industries/restaurant-pos.jpg', className: 'top-[46%] left-[20%] h-44 w-56' },
  { src: '/hero/industries/hotel-pos.jpg', className: 'bottom-[4%] right-[34%] h-44 w-56' },
];

// Floating hardware silhouettes for the Products / "Hardware & Software" section.
const productScatter = [
  { src: '/products/pax/a920-max.png', className: '-top-8 right-[22%] h-48 w-48', fit: 'contain' as const },
  { src: '/products/clover/go.png', className: 'top-[30%] -right-10 h-52 w-52', fit: 'contain' as const },
  { src: '/products/valor/vp550.png', className: '-bottom-8 right-[12%] h-48 w-48', fit: 'contain' as const },
  { src: '/products/pax/a80.png', className: 'bottom-[2%] left-[6%] h-44 w-44', fit: 'contain' as const },
  { src: '/products/valor/rckt.png', className: 'top-[18%] left-[2%] h-40 w-40', fit: 'contain' as const },
  { src: '/products/pax/a800.png', className: 'top-[52%] right-[34%] h-40 w-40', fit: 'contain' as const },
  { src: '/products/valor/vp300.png', className: '-bottom-6 left-[36%] h-44 w-44', fit: 'contain' as const },
  // a faded person actually using a terminal, among the hardware
  { src: '/hero/industries/retail-pos.jpg', className: 'top-[60%] left-[22%] h-44 w-56', fit: 'cover' as const },
];

/* ── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="premium-hero relative overflow-hidden text-white">
        {/* Faded transaction collage — English scenes, VP800 behind the logo */}
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.32]">
          <div className="grid h-full grid-cols-1 sm:grid-cols-3">
            <div className="relative hidden sm:block">
              <Image src="/hero/transaction.jpg" alt="" fill sizes="34vw" className="object-cover grayscale" />
            </div>
            <div className="relative">
              <Image src="/hero/valor-vp800.png" alt="" fill sizes="34vw" className="object-contain object-center grayscale" priority />
            </div>
            <div className="relative hidden sm:block">
              <Image src="/hero/store-en.jpg" alt="" fill sizes="34vw" className="object-cover grayscale" />
            </div>
          </div>
        </div>
        {/* Navy scrim keeps the copy crisp over the photos */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy-950/55 via-navy-900/55 to-navy-950/85" />
        {/* Aurora blobs */}
        <div aria-hidden="true" className="aurora-blob animate-aurora -left-20 top-0 h-80 w-80" style={{ background: 'rgba(159,232,112,0.28)' }} />
        <div aria-hidden="true" className="aurora-blob animate-aurora right-0 top-24 h-96 w-96" style={{ background: 'rgba(36,123,184,0.35)', animationDuration: '24s' }} />
        {/* Grid texture */}
        <div aria-hidden="true" className="hero-grid absolute inset-0" />

        <Container>
          <div className="relative pt-8 pb-7 md:pt-10 md:pb-8">
            {/* Brand crown — centered above the headline */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                {/* Soft spotlight blends the logo into the hero — no hard plate */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-28 -inset-y-16"
                  style={{
                    background:
                      'radial-gradient(60% 72% at 50% 50%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.55) 46%, rgba(255,255,255,0.22) 68%, rgba(255,255,255,0) 86%)',
                  }}
                />
                <div aria-hidden="true" className="absolute -inset-20 rounded-full bg-lime/12 blur-3xl" />
                <Image
                  src="/logo.png"
                  alt="National e-Payment"
                  width={1184}
                  height={383}
                  className="relative h-40 w-auto max-w-full object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.5)] sm:h-56 md:h-64"
                  priority
                  unoptimized
                />
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
                  From credit card processing to gift cards and check processing —
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
      <section id="services" className="scroll-mt-24 relative overflow-hidden bg-surface py-20 md:py-24">
        <SectionDecor dots glow="both" />
        <ScatterBackdrop tiles={industryScatter} opacity={0.1} />
        <Container className="relative z-10">
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
      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        <SectionDecor dots glow="lime" />
        <Container className="relative z-10">
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

      {/* ── Real people behind it ─────────────────────────── */}
      <section className="relative overflow-hidden bg-surface py-20 md:py-24">
        <SectionDecor glow="both" />
        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <RevealSection className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,58,95,0.45)]">
                <Image
                  src="/people/hero-lifestyle.jpg"
                  alt="A small-business owner in their shop"
                  width={900}
                  height={760}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-xl sm:block">
                <div className="font-display text-2xl font-bold text-forest">10,000+</div>
                <div className="text-[11px] font-medium uppercase tracking-wide text-muted">Merchants served</div>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-lime" />
                People, not call centers
              </span>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
                Real people who actually pick up the phone
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate">
                Behind every account is a dedicated team that knows your business by name. When a
                terminal goes down or a question comes up, you reach a real person — not a ticket
                queue — any time, day or night.
              </p>
              <a
                href="/company"
                className="inline-flex items-center gap-2 rounded-full border-2 border-forest px-8 py-3 font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
              >
                Meet National e-Payment
                <ArrowRight className="h-4 w-4" />
              </a>
            </RevealSection>
          </div>
        </Container>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <Testimonials />

      {/* ── Products ─────────────────────────────────────── */}
      <section id="products" className="relative overflow-hidden bg-white py-20 md:py-24">
        <SectionDecor glow="navy" />
        <ScatterBackdrop tiles={productScatter} opacity={0.14} />
        <Container className="relative z-10">
          <RevealSection>
            <SectionHeading
              eyebrow="Hardware & Software"
              title="Everything You Need to Get Paid"
              subtitle="Certified, supported, and shipped ready to go — terminals, POS systems, mobile, and more."
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
        {/* Faded Valor VP800 brand terminal (in hand) */}
        <div aria-hidden="true" className="absolute -right-4 top-0 hidden h-full w-1/2 opacity-[0.18] sm:block lg:w-1/3">
          <Image src="/hero/valor-vp800.png" alt="" fill sizes="40vw" className="object-contain object-right" />
        </div>
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
