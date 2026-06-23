import Image from 'next/image';
import Container from '@/src/components/common/Container';
import CTASection from '@/src/components/sections/CTASection';
import RevealSection from '@/src/components/common/RevealSection';
import AnimatedCounter from '@/src/components/common/AnimatedCounter';
import Testimonials from '@/src/components/sections/Testimonials';
import DiagonalCut from '@/src/components/common/DiagonalCut';
import SectionDecor from '@/src/components/common/SectionDecor';
import SectionHeading from '@/src/components/common/SectionHeading';
import Marquee from '@/src/components/common/Marquee';
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
  Clock,
  TrendingDown,
  Smartphone,
} from 'lucide-react';

/* ── Data ───────────────────────────────────────────────── */
const industries = [
  { title: 'Grocery & Supermarkets',           href: '/industries/grocery',   Icon: ShoppingCart,   image: '/industries-people/grocery.jpg' },
  { title: 'Full-Service Restaurants',          href: '/industries/restaurants', Icon: UtensilsCrossed, image: '/industries-people/restaurants.jpg' },
  { title: 'E-Commerce & Internet',             href: '/industries/ecommerce', Icon: Globe,          image: '/industries-people/ecommerce.jpg' },
  { title: 'Retail Stores',                     href: '/industries/retail',    Icon: Store,          image: '/industries-people/retail.jpg' },
  { title: 'Gas Stations & C-Stores',           href: '/gas-stations-convenience-stores', Icon: Fuel, image: '/industries-people/gas.jpg' },
  { title: 'Quick-Service Restaurants',         href: '/industries/restaurants', Icon: UtensilsCrossed, image: '/industries-people/qsr.jpg' },
  { title: 'Lodging & Hospitality',             href: '/industries/lodging',   Icon: Hotel,          image: '/industries-people/lodging.jpg' },
  { title: 'Gift Card Services',                href: '/products/gift-cards',  Icon: Gift,           image: '/industries-people/giftcards.jpg' },
  { title: 'Check & ACH Processing',            href: '/products/check-processing', Icon: FileCheck,  image: '/industries-people/check-ach.jpg' },
];

const products = [
  { name: 'Smart Terminals',    href: '/products#valor',    desc: 'Valor · Clover · PAX · Ingenico',   Icon: CreditCard, image: '/products/valor/vp800.png' },
  { name: 'POS Systems',        href: '/products#clover',   desc: 'Clover Station, Mini, Flex & more', Icon: Store,      image: '/products/clover/station-duo.webp' },
  { name: 'Mobile Pay',         href: '/products#pax',      desc: 'PAX A920 · Clover Go · Valor RCKT', Icon: Smartphone, image: '/products/pax/a920-max.png' },
  { name: 'Wireless Terminals', href: '/products#pax',      desc: 'PAX · Ingenico · Verifone',         Icon: Wifi,       image: '/products/valor/vl110.png' },
  { name: 'PIN Pads',           href: '/products#verifone', desc: 'Valor · PAX A35 · Verifone M400',   Icon: CreditCard, image: '/products/pax/a35.png' },
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
        <style>{`
          @keyframes nepRoll {
            0%,12% { transform: translateY(0); }
            16.6%,28% { transform: translateY(-1.2em); }
            33.3%,45% { transform: translateY(-2.4em); }
            50%,62% { transform: translateY(-3.6em); }
            66.6%,78% { transform: translateY(-4.8em); }
            83.3%,96% { transform: translateY(-6em); }
            100% { transform: translateY(0); }
          }
          .nep-roll { animation: nepRoll 12s infinite; }
          @media (prefers-reduced-motion: reduce) { .nep-roll { animation: none; transform: translateY(-6em); } }
        `}</style>
        {/* Faded transaction collage — restores the original photo depth behind the type */}
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.30]">
          <div className="grid h-full grid-cols-1 sm:grid-cols-3">
            <div className="relative hidden sm:block">
              <Image src="/hero/merchant-payment.jpg" alt="" fill sizes="(max-width: 768px) 50vw, 34vw" className="object-cover grayscale" />
            </div>
            <div className="relative">
              <Image src="/hero/valor-vp800.png" alt="" fill sizes="(max-width: 768px) 100vw, 34vw" className="object-contain object-center grayscale" priority />
            </div>
            <div className="relative hidden sm:block">
              <Image src="/hero/store-en.jpg" alt="" fill sizes="(max-width: 768px) 50vw, 34vw" className="object-cover grayscale" />
            </div>
          </div>
        </div>
        {/* Navy scrim keeps the copy crisp over the photos */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-900/58 to-navy-950/88" />

        {/* Layered aurora + grid over the photo */}
        <div aria-hidden="true" className="aurora-blob animate-aurora -left-20 top-0 h-80 w-80" style={{ background: 'rgba(159,232,112,0.22)' }} />
        <div aria-hidden="true" className="aurora-blob animate-aurora right-0 top-24 h-96 w-96" style={{ background: 'rgba(36,123,184,0.30)', animationDuration: '24s' }} />
        <div aria-hidden="true" className="aurora-blob animate-aurora bottom-0 left-1/3 h-72 w-72" style={{ background: 'rgba(159,232,112,0.13)', animationDuration: '30s' }} />
        <div aria-hidden="true" className="hero-grid absolute inset-0" />

        {/* Ambient live-payment chips floating in the side gutters (desktop only) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <div className="animate-float absolute right-[4%] top-[20%] flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-2.5 shadow-xl backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime text-navy"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
            <span className="text-sm font-semibold text-white/85">Payment approved</span>
            <span className="font-display text-sm font-bold text-lime">$128.40</span>
          </div>
          <div className="animate-float-slow absolute left-[4%] top-[40%] flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-2.5 shadow-xl backdrop-blur-sm">
            <span className="pulse-dot relative inline-block h-2.5 w-2.5 rounded-full bg-lime" />
            <span className="text-sm font-semibold text-white/85">Funds depositing next day</span>
          </div>
          <div className="animate-float absolute right-[7%] top-[62%] flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-2.5 shadow-xl backdrop-blur-sm" style={{ animationDelay: '1.2s' }}>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime text-navy"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
            <span className="text-sm font-semibold text-white/85">Sale approved</span>
            <span className="font-display text-sm font-bold text-lime">$42.10</span>
          </div>
        </div>

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

            {/* Body: kinetic headline — type-led, centered, no side graphic */}
            <div className="relative mx-auto mt-8 max-w-3xl text-center">
              {/* Soft lime spotlight lights the rotating word */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[58%] h-56 w-[36rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(159,232,112,0.20) 0%, rgba(159,232,112,0) 70%)', filter: 'blur(24px)' }}
              />
              <h1 className="relative text-[2.3rem] font-bold leading-[1.08] md:text-[2.8rem] lg:text-[3.05rem]">
                <span className="block">Payment solutions built for</span>
                <span aria-hidden="true" className="mt-1 flex h-[1.2em] justify-center overflow-hidden">
                  <span className="nep-roll">
                    {['restaurants', 'retail', 'gas stations', 'salons', 'e-commerce', 'your business'].map((w) => (
                      <span key={w} className="block h-[1.2em] leading-[1.2] text-gradient-lime">{w}</span>
                    ))}
                  </span>
                </span>
                <span className="sr-only">restaurants, retail, gas stations, salons, e-commerce, and your business</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                From credit card processing to gift cards and check processing —
                everything your business needs in one trusted, registered ecosystem.
              </p>

              <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2.5 text-sm">
                {valueProps.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20">
                      <Check className="h-3.5 w-3.5 text-lime" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/signup"
                  className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-navy shadow-[0_12px_34px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
                <a
                  href="/partners#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-lime hover:bg-white/15"
                >
                  Become a Partner
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
        <SectionDecor glow="both" />
        <Container className="relative z-10">
          <RevealSection>
            <SectionHeading
              eyebrow="Who We Serve"
              title="Solutions for Every Industry"
              subtitle="We understand your business — because we built our platform around it."
              className="mb-12"
            />
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {industries.map(({ title, href, Icon, image }, i) => (
              <RevealSection key={title + i} delay={i * 50}>
                <a
                  href={href}
                  className="card-lift group relative block overflow-hidden rounded-card border border-gray-200/70 bg-navy shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${title} — a National e-Payment merchant`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Navy gradient anchors the label */}
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-navy shadow">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                      </span>
                      <span className="text-[15px] font-bold leading-tight text-white">{title}</span>
                      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
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
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,58,95,0.45)]">
                <Image
                  src="/people/owner-foodtruck.jpg"
                  alt="A food truck owner standing in front of his business"
                  width={1000}
                  height={750}
                  className="h-full w-full object-cover object-center"
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
        <Container className="relative z-10">
          <RevealSection>
            <SectionHeading
              eyebrow="Hardware & Software"
              title="Everything You Need to Get Paid"
              subtitle="Certified, supported, and shipped ready to go — terminals, POS systems, mobile, and more."
              className="mb-12"
            />
          </RevealSection>

          {/* Editorial cards — device thumbnail + copy, two side by side */}
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5">
            {products.map(({ name, href, desc, Icon, image }, i) => (
              <RevealSection key={name} delay={i * 60} className="w-full sm:w-[calc(50%-0.625rem)]">
                <a
                  href={href}
                  className="card-lift group flex h-full items-center gap-4 rounded-card border border-white/10 bg-gradient-to-t from-navy-950 via-navy to-navy-light p-4 shadow-sm sm:gap-5 sm:p-5"
                >
                  {/* Thumbnail stage — spotlit device on a light inset tile */}
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-b from-white to-surface ring-1 ring-white/10 sm:h-28 sm:w-36">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{ background: 'radial-gradient(62% 62% at 50% 45%, rgba(159,232,112,0.18) 0%, rgba(159,232,112,0) 62%)' }}
                    />
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="144px"
                      className="object-contain p-3 drop-shadow-[0_10px_14px_rgba(15,58,95,0.20)] transition-transform duration-500 group-hover:scale-[1.07]"
                    />
                  </div>

                  {/* Copy */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-navy shadow">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                      </span>
                      <h3 className="text-base font-bold text-white sm:text-lg">{name}</h3>
                    </div>
                    <p className="mt-1.5 text-sm text-white/60">{desc}</p>
                  </div>

                  {/* Action */}
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5" />
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
