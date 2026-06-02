import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import { Globe, Phone, Store, Wifi, PhoneCall, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata = {
  title: 'Rates & Fees | National e-Payment',
  description: 'Low merchant account rates with no hidden fees. See our rate categories for internet, retail, wireless, phone, and ACH processing.',
};

const rateCategories: { type: string; Icon: LucideIcon; description: string; bestFor: string; href: string }[] = [
  {
    type: 'Internet',
    Icon: Globe,
    description: 'Most transactions will take place via an Internet website and processed in real time.',
    bestFor: 'E-commerce, online retail, subscription businesses',
    href: '/contact',
  },
  {
    type: 'Mail / Phone Order',
    Icon: Phone,
    description: 'Majority of your transactions are done over the phone or through the mail, and transactions will be keyed in.',
    bestFor: 'Call centers, mail-order businesses, MOTO merchants',
    href: '/contact',
  },
  {
    type: 'Retail Storefront',
    Icon: Store,
    description: 'Most credit card transactions are face to face, and swiped through a card reader.',
    bestFor: 'Retail stores, restaurants, grocery, gas stations',
    href: '/contact',
  },
  {
    type: 'Wireless',
    Icon: Wifi,
    description: 'Majority of transactions will be swiped through a wireless terminal.',
    bestFor: 'Food trucks, delivery services, field sales, events',
    href: '/contact',
  },
  {
    type: 'Phone Processing',
    Icon: PhoneCall,
    description: 'Majority of transactions will be phoned in and entered via a touch tone phone.',
    bestFor: 'Small businesses, home-based merchants, service providers',
    href: '/contact',
  },
  {
    type: 'ACH / Checks',
    Icon: FileCheck,
    description: 'You would also like to process checks (ACH) in addition to credit cards.',
    bestFor: 'B2B transactions, high-ticket sales, recurring billing',
    href: '/contact',
  },
];

const documentation = [
  'Credit Card Processing Statements (if applicable)',
  'Business License / Fictitious DBA Name Filing / Sales Tax License',
  'Utility Bill',
  'Phone Bill (with service address matching physical address on application)',
  'Yellow Page Advertisement',
  'Lease Agreement',
  'Certificate of Occupancy',
  'Association Directory',
];

export default function RatesFeesPage() {
  return (
    <>
      <Hero
        title="Our Low Merchant Account Rates Can Save You Thousands"
        subtitle="No hidden fees. No teaser rates that expire. Just transparent, competitive pricing for your business."
        ctaText="30-Day Risk-Free Trial"
        ctaHref="/signup"
      />

      {/* Rate categories */}
      <Section background="light">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Rate Categories</h2>
            <p className="text-gray-600">
              We don&apos;t hit you with hidden fees or raise your rates after you sign up.
              Select the processing type that matches your business and contact us for a custom quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rateCategories.map(({ type, Icon, description, bestFor }) => (
              <Card key={type} background="white" border="left" borderColor="teal">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{type}</h3>
                <p className="text-gray-600 text-sm mb-3">{description}</p>
                <p className="text-xs text-gray-400 mb-4">
                  <span className="font-semibold text-navy">Best for:</span> {bestFor}
                </p>
                <a href="/contact" className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors">
                  Get a Quote &rarr;
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA section */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-3">Do You Have Any Questions?</h2>
            <p className="text-gray-600 mb-6">
              We are simply dedicated to providing you with the best merchant account, equipment, and software
              at the overall lowest cost &mdash; often saving hundreds, even thousands of dollars in the process.
            </p>
            <a
              href="/signup"
              className="inline-block bg-teal text-navy font-semibold px-8 py-3 rounded-lg hover:bg-teal-dark transition-colors"
            >
              Click Here for a 30-Day Risk-Free Trial
            </a>
          </div>
        </Container>
      </Section>

      {/* 95% approval + documentation */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">95% of Applicants Are Approved</h2>
              <p className="text-gray-700 mb-4">
                As an organization with 1,000s of Sales Partners, we&apos;re adept at underwriting a diverse set
                of applicants across numerous industries. We look for ways to say <strong>YES</strong> and pride
                ourselves on our ability to cater to the Sales Partners&apos; needs.
              </p>
              <p className="text-gray-700">
                We&apos;re trained to handle small to medium sized businesses and take the steps to help our partners.
                Just another way National e-Payment makes it easier for you!
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { stat: '95%', label: 'Approval Rate' },
                  { stat: 'Free', label: 'Merchant Account' },
                  { stat: '30-Day', label: 'Risk-Free Trial' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <div className="text-2xl font-bold text-teal">{item.stat}</div>
                    <div className="text-xs text-gray-600 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Accepted Documentation</h2>
              <p className="text-gray-700 mb-4">
                In lieu of a full site survey, you can provide <strong>any one</strong> of the following items
                (in order of effectiveness) to verify your business name and physical address:
              </p>
              <ul className="space-y-2">
                {documentation.map((doc) => (
                  <li key={doc} className="flex gap-2 items-start">
                    <span className="text-teal font-bold mt-0.5">&bull;</span>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section background="navy">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Ready to Lower Your Processing Costs?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Contact our team today for a free rate comparison and see how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="bg-teal text-navy font-semibold px-8 py-3 rounded hover:bg-teal-dark transition-colors">
                Apply Free
              </a>
              <a href="tel:+18664369022" className="border border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-navy transition-colors">
                (866) 436-9022
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
