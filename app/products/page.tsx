import Container from '@/src/components/common/Container';
import SectionHeading from '@/src/components/common/SectionHeading';
import RevealSection from '@/src/components/common/RevealSection';
import CTASection from '@/src/components/sections/CTASection';
import ProductImage from '@/src/components/products/ProductImage';
import { brands } from '@/src/content/equipment';
import { ArrowRight, ArrowUpRight, ShieldCheck, Headphones, BadgeDollarSign, Tag } from 'lucide-react';

export const metadata = {
  title: 'Payment Terminals & Equipment | National e-Payment',
  description:
    'Shop Valor, Clover, PAX, Ingenico, and Verifone payment terminals, PIN pads, and POS systems — sold and supported by National e-Payment.',
};

const totalProducts = brands.reduce((n, b) => n + b.products.length, 0);

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="premium-hero relative overflow-hidden py-16 text-white md:py-20">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="aurora-blob animate-aurora -left-16 top-0 h-72 w-72" style={{ background: 'rgba(159,232,112,0.22)' }} />
        <Container>
          <div className="relative max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-lime">
              <Tag className="h-3.5 w-3.5" /> {totalProducts}+ devices in stock
            </span>
            <h1 className="mb-5 text-[2.4rem] font-bold leading-[1.05] md:text-5xl">
              Payment terminals &amp; <span className="text-gradient-lime">equipment</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/70">
              The hardware we sell and support — Valor, Clover, PAX, Ingenico, and Verifone.
              Certified, configured, and shipped ready to process, with free setup and 24/7 service.
            </p>

            {/* Brand jump nav */}
            <div className="mt-7 flex flex-wrap gap-2">
              {brands.map((b) => (
                <a
                  key={b.slug}
                  href={`#${b.slug}`}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:border-lime hover:text-lime"
                >
                  {b.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Brand sections */}
      {brands.map((brand, bi) => (
        <section
          key={brand.slug}
          id={brand.slug}
          className={`scroll-mt-24 py-16 md:py-20 ${bi % 2 === 0 ? 'bg-surface' : 'bg-white'}`}
        >
          <Container>
            <RevealSection>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeading eyebrow={`${brand.products.length} models`} title={brand.name} subtitle={brand.tagline} />
                <a
                  href={brand.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-navy"
                >
                  Manufacturer site <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {brand.products.map((p, i) => (
                <RevealSection key={p.slug} delay={(i % 4) * 60}>
                  <a
                    href="/contact"
                    className="card-lift border-glow group flex h-full flex-col rounded-card border border-gray-200/70 bg-white p-4"
                  >
                    <ProductImage image={p.image} name={p.name} brand={brand.name} />
                    <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
                      <span className="mb-1.5 inline-flex w-fit rounded-full bg-forest/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-forest">
                        {p.type}
                      </span>
                      <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-forest">{p.name}</h3>
                      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate">{p.blurb}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                        Request pricing
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                </RevealSection>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* Duo Pricer */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <RevealSection>
            <div className="border-glow relative overflow-hidden rounded-card border border-gray-200/70 bg-gradient-to-br from-navy to-navy-900 p-8 text-white md:p-12">
              <div aria-hidden="true" className="aurora-blob animate-aurora -right-10 -top-10 h-60 w-60" style={{ background: 'rgba(159,232,112,0.2)' }} />
              <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-lime">
                    <Tag className="h-3.5 w-3.5" /> Now available for purchase
                  </span>
                  <h2 className="mb-3 text-3xl font-bold md:text-4xl">Duo Pricer</h2>
                  <p className="max-w-lg text-white/70">
                    The digital labeling device that prints dual-priced labels in seconds and does the
                    cash-vs-card math for you — built for retail and convenience stores.
                  </p>
                  <a
                    href="https://duopricer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine relative mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-base font-bold text-navy shadow-[0_12px_34px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5"
                  >
                    Buy at duopricer.com
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-white/[0.06] ring-1 ring-white/15">
                    <Tag className="h-16 w-16 text-lime" strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </Container>
      </section>

      {/* Why buy from us */}
      <section className="bg-surface py-16">
        <Container>
          <RevealSection>
            <SectionHeading
              align="center"
              eyebrow="Why buy from us"
              title="More than hardware"
              subtitle="Every device ships ready to process and is backed by real support."
              className="mb-12"
            />
          </RevealSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { Icon: BadgeDollarSign, title: 'Competitive pricing', body: 'Volume pricing negotiated with manufacturers and passed on to you.' },
              { Icon: Headphones, title: 'Free setup & 24/7 support', body: 'Live help with every purchase — no extra charge for setup.' },
              { Icon: ShieldCheck, title: 'Certified equipment', body: 'Every device is EMV Level 1 & 2 certified and PCI DSS compliant.' },
            ].map(({ Icon, title, body }, i) => (
              <RevealSection key={title} delay={i * 100}>
                <div className="card-lift h-full rounded-card border border-gray-200/70 bg-white p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-navy text-lime">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate">{body}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Not sure which device fits?"
        subheading="Tell us about your business and we'll recommend the right terminal — and get you pricing in minutes."
        ctaText="Request a Recommendation"
        ctaHref="/contact"
      />
    </>
  );
}
