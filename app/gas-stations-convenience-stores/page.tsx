import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import CTASection from '@/src/components/sections/CTASection';

export const metadata = {
  title: 'Gas Stations & Convenience Stores | National e-Payment',
  description: 'Payment solutions built for gas stations and convenience stores — pay-at-pump, fleet cards, loyalty programs, and 24/7 support.',
};

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

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Gas stations and convenience stores have always been at the forefront of adopting payment technology
              because speed and customer loyalty are among your top concerns. Today, many customers never even
              talk to a cashier or attendant, and point-of-sale technology is becoming increasingly more complex.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              National e-Payment understands the unique demands of fuel retail. We deliver payment solutions
              that keep lines moving, reduce fraud, and build customer loyalty — with 24/7 support so you&apos;re
              never left stranded.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pain points & solutions */}
      <Section background="light">
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
