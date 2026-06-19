import Image from 'next/image';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import Button from '@/src/components/common/Button';
import CTASection from '@/src/components/sections/CTASection';
import { Fuel } from 'lucide-react';

export const metadata = {
  title: 'Gas Stations & Convenience Stores | National e-Payment',
  description: 'Payment solutions built for gas stations and convenience stores — pay-at-pump, fleet cards, loyalty programs, and 24/7 support.',
};

// Faded people-in-action + scenes for ambient life on this page.
const gasScatter = [
  { src: '/hero/industries/gas-station.jpg', className: '-top-12 right-[6%] h-56 w-72' },
  { src: '/hero/industries/gas-fueling.jpg', className: 'top-[28%] -left-12 h-56 w-72' },
  { src: '/hero/industries/gas-cstore-bright.jpg', className: '-bottom-12 right-[20%] h-52 w-64' },
];

export default function GasStationsPage() {
  return (
    <>
      <Hero
        title="Gas Stations & Convenience Stores"
        subtitle="Speed and customer loyalty are your top concerns — and ours too."
        ctaText="Get Started Free"
        ctaHref="/signup"
        backdrop="gas-stations"
      />

      {/* Fuel-retail feature — visible, people/place-forward */}
      <Section background="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Layered two-photo composition: fuel pump + convenience store */}
            <div className="relative">
              <div className="aspect-[4/5] w-[82%] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,58,95,0.45)]">
                <Image
                  src="/hero/industries/gas-pump.jpg"
                  alt="A modern Sunoco fuel pump at golden hour"
                  width={760}
                  height={950}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-2xl ring-4 ring-white shadow-[0_24px_48px_-16px_rgba(15,58,95,0.5)]">
                <div className="aspect-[4/5]">
                  <Image
                    src="/hero/industries/gas-store.jpg"
                    alt="A customer in a convenience store"
                    width={520}
                    height={650}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              {/* Floating fuel-retail badge */}
              <div className="absolute -top-4 -left-3 hidden items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-xl sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <Fuel className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="text-sm font-bold text-navy">Pump + counter</div>
                  <div className="text-[11px] text-muted">One payments partner</div>
                </div>
              </div>
            </div>

            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-lime" />
                Built for fuel &amp; convenience
              </span>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
                From the pump to the aisle, keep everything moving
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-slate">
                Speed and loyalty are your top concerns — and ours too. Whether customers are paying at the pump
                or grabbing snacks at the counter, your payment tech has to be fast, reliable, and seamless.
              </p>
              <p className="mb-7 text-lg leading-relaxed text-slate">
                We understand fuel and convenience retail — keeping lines moving, reducing fraud, and building
                loyalty, with 24/7 support so you&apos;re never left stranded.
              </p>
              <Button href="/signup">Get Started Free</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pain points & solutions */}
      <Section background="light" scatter={gasScatter} scatterOpacity={0.08}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Challenges We Solve</h2>
              <ul className="space-y-4">
                {[
                  'High-speed transaction demands at the pump and counter',
                  'Fleet card and commercial card acceptance',
                  'Loyalty program and gift card integration',
                  '24/7 operation with zero tolerance for downtime',
                  'PCI compliance for fuel dispenser environments',
                  'Chargeback management for drive-offs',
                ].map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span className="text-teal font-bold text-lg leading-none mt-0.5">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                {[
                  'Pay-at-pump terminal integration',
                  'Inside POS terminal with EMV and contactless',
                  'Fleet card and commercial card programs',
                  'Gift card and loyalty reward programs',
                  'Wireless terminals for outdoor and lot use',
                  'ACH and check processing for business accounts',
                ].map((solution) => (
                  <li key={solution} className="flex gap-3 items-start">
                    <span className="text-teal font-bold text-lg leading-none mt-0.5">★</span>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured products */}
      <Section background="white">
        <Container>
          <h2 className="text-2xl font-bold text-navy mb-8">Recommended Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'POS Terminals',
                description: 'EMV-certified countertop terminals for inside checkout. Contactless, swipe, and chip.',
                href: '/products/pos-terminals',
              },
              {
                title: 'Wireless Terminals',
                description: 'Portable 4G terminals for outdoor transactions, lot attendants, and fleet operations.',
                href: '/products/wireless-terminal',
              },
              {
                title: 'PIN Pads',
                description: 'Encrypted PIN entry devices for debit transactions at the counter.',
                href: '/products/pin-pads',
              },
            ].map((product) => (
              <Card key={product.title} background="navy">
                <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <a href={product.href} className="text-teal font-semibold hover:text-teal-dark text-sm">
                  View Products →
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why NEP */}
      <Section background="light">
        <Container>
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Why Gas Stations Choose National e-Payment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { stat: 'Free', label: 'Merchant Account Setup' },
              { stat: '24/7', label: 'Customer Support' },
              { stat: '95%', label: 'Approval Rate' },
              { stat: '30-Day', label: 'Risk-Free Trial' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-teal mb-1">{item.stat}</div>
                <div className="text-sm text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Ready to Modernize Your Fuel Retail Payments?"
        subheading="Get instant approval and a free merchant account — no setup fees."
        ctaText="Apply Free Today"
        ctaHref="/signup"
      />
    </>
  );
}
