import Container from '@/src/components/common/Container';
import SectionHeading from '@/src/components/common/SectionHeading';
import RevealSection from '@/src/components/common/RevealSection';
import CTASection from '@/src/components/sections/CTASection';
import HeroBackdrop from '@/src/components/sections/HeroBackdrop';
import { getHeroBackdrop } from '@/src/content/heroBackdrops';
import PartnerForm from '@/src/components/forms/PartnerForm';
import {
  BadgeCheck,
  Users,
  CreditCard,
  GraduationCap,
  BadgeDollarSign,
  SlidersHorizontal,
  LineChart,
  CalendarCheck,
  Headphones,
  Landmark,
  Megaphone,
  Quote,
  Star,
  ArrowRight,
  Phone,
} from 'lucide-react';

export const metadata = {
  title: 'Become an ISO Partner | National e-Payment',
  description:
    "Join National e-Payment's ISO partner program — industry-leading residuals, dedicated support, and multiple bank relationships. Why compete with us when you can join us?",
};

const benefits = [
  { Icon: BadgeCheck, title: 'Trusted Brand Name', description: 'Leverage a recognized name in merchant services to open doors with prospects.' },
  { Icon: Users, title: 'Dedicated Business Consultants', description: 'Your own dedicated rep to help close deals and support your portfolio.' },
  { Icon: CreditCard, title: 'Full Product Suite', description: 'Offer terminals, POS systems, gift cards, and more — a complete payments lineup.' },
  { Icon: GraduationCap, title: 'Professional Training', description: 'Train-the-trainer tools and resources so your team hits the ground running.' },
  { Icon: BadgeDollarSign, title: 'Competitive Compensation', description: 'Industry-leading residuals and upfront bonuses for your sales.' },
  { Icon: SlidersHorizontal, title: 'Flexible Pricing', description: 'Set your own pricing within our program guidelines to stay competitive.' },
  { Icon: LineChart, title: 'Web-Based Reporting', description: 'Real-time access to portfolio performance, residuals, and merchant data.' },
  { Icon: CalendarCheck, title: 'Timely Commissions', description: 'Accurate, on-time residual payments you can count on every month.' },
  { Icon: Headphones, title: '24/7 Technical Support', description: 'Round-the-clock support for you and your merchants — no extra charge.' },
  { Icon: Landmark, title: 'Multiple Bank Relationships', description: 'Processing through Elavon, Wells Fargo, Esquire Bank, and Commercial Bank of CA.' },
  { Icon: Megaphone, title: 'Marketing Materials', description: 'Co-branded collateral, rate sheets, and digital assets ready to use.' },
];

const stats = [
  { value: '24/7', label: 'Live Support' },
  { value: '4', label: 'Bank Partners' },
  { value: '95%', label: 'Approval Rate' },
  { value: 'Monthly', label: 'On-Time Residuals' },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="premium-hero relative overflow-hidden py-20 text-white md:py-28">
        <HeroBackdrop images={[...getHeroBackdrop('partners')]} opacity={0.24} />
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="aurora-blob animate-aurora -left-16 top-4 h-80 w-80" style={{ background: 'rgba(159,232,112,0.25)' }} />
        <div aria-hidden="true" className="aurora-blob animate-aurora right-0 top-24 h-96 w-96" style={{ background: 'rgba(36,123,184,0.32)', animationDuration: '24s' }} />
        <Container>
          <div className="relative max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-lime">
              <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-lime text-lime" />
              ISO Partner Program
            </span>
            <h1 className="mb-5 text-[2.5rem] font-bold leading-[1.05] md:text-[3.25rem]">
              Why compete with us when you can <span className="text-gradient-lime">join us?</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/70">
              Build a recurring income stream as a National e-Payment ISO partner. We bring the brand,
              the bank relationships, and the back-office — you bring the merchants.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#apply"
                className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-navy shadow-[0_12px_34px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5"
              >
                Become a Partner <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="tel:+18664369022"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-lime hover:bg-lime/10"
              >
                <Phone className="h-4 w-4" strokeWidth={2.2} /> (866) 436-9022
              </a>
            </div>
          </div>

          {/* Stat strip */}
          <div className="relative z-10 mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/[0.06] px-6 py-5 text-center backdrop-blur-sm">
                <div className="font-display text-2xl font-bold text-lime md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-20 md:py-24">
        <Container>
          <RevealSection>
            <SectionHeading
              align="center"
              eyebrow="Program Benefits"
              title="Everything you need to win and keep merchants"
              subtitle="Maximum earning potential, backed by the support, tools, and bank relationships to close more deals."
              className="mb-14"
            />
          </RevealSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ Icon, title, description }, i) => (
              <RevealSection key={title} delay={(i % 3) * 80}>
                <div className="card-lift border-glow group h-full rounded-card border border-gray-200/70 bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-navy text-lime">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-1.5 text-lg font-bold text-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate">{description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="premium-hero relative overflow-hidden py-20 text-white md:py-24">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
        <Container>
          <div className="relative mx-auto max-w-4xl">
            <Quote aria-hidden="true" className="mb-6 h-10 w-10 text-lime/50" strokeWidth={1.5} />
            <blockquote className="text-2xl font-light leading-relaxed text-white md:text-[1.7rem]">
              I was doing $40K a month in residuals with my old processor. Six months after moving my
              portfolio to National e-Payment I was at <span className="font-semibold text-lime">$67K</span>.
              The back-office support made the difference — they handle what I used to spend half my week doing.
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime/15 font-bold text-lime">MW</div>
              <div>
                <p className="font-semibold text-white">Marcus Webb</p>
                <p className="text-sm text-white/55">ISO Partner · Atlanta, GA · 12 years in merchant services</p>
              </div>
              <div className="ml-auto hidden gap-0.5 text-lime sm:flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Banking relationships */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <RevealSection>
            <SectionHeading
              align="center"
              eyebrow="Bank Relationships"
              title="Registered with top-tier institutions"
              subtitle="Multiple bank relationships give you and your merchants the most competitive processing rates."
              className="mb-10"
            />
          </RevealSection>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {['Elavon (U.S. Bancorp)', 'Wells Fargo', 'Esquire Bank', 'Commercial Bank of CA'].map((bank) => (
              <div key={bank} className="rounded-card border border-gray-200/70 bg-surface p-6 text-center text-sm font-semibold text-navy">
                {bank}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Apply + form */}
      <section id="apply" className="scroll-mt-24 bg-surface py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <RevealSection>
              <SectionHeading
                eyebrow="Get Started"
                title="Apply to become a partner"
                subtitle="Fill out the form and a dedicated business consultant will contact you within one business day."
                className="mb-8"
              />
              <ul className="space-y-4">
                {[
                  'No cost to join — keep your current book of business',
                  'Industry-leading residual splits and upfront bonuses',
                  'White-glove onboarding and merchant migration',
                  'A real human on your account, available 24/7',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20">
                      <BadgeCheck className="h-3.5 w-3.5 text-forest" strokeWidth={2.5} />
                    </span>
                    <span className="text-slate">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-card border border-gray-200/70 bg-white p-6">
                <p className="text-sm font-semibold text-navy">Already a partner?</p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <a href="https://mi.isoaccess.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light">
                    ISO Login
                  </a>
                  <a href="https://www.youraccessone.com/64_ms_login.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border-2 border-navy/20 px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white">
                    Merchant Login
                  </a>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <PartnerForm />
            </RevealSection>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Questions about the program?"
        subheading="Call (866) 436-9022 or send us a note — a partner consultant will walk you through everything."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
