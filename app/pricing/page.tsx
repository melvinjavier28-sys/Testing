import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Button from '@/src/components/common/Button';
import Card from '@/src/components/common/Card';

export const metadata = {
  title: 'Pricing | National e-Payment',
  description: 'Transparent, competitive pricing for payment processing.',
};

const pricingTiers = [
  {
    name: 'Startup',
    description: 'Perfect for new businesses',
    price: 'Custom',
    features: [
      'Basic POS Terminal',
      'Standard Support',
      'Monthly Reporting',
      'Up to 500 transactions/month',
    ],
  },
  {
    name: 'Standard',
    description: 'For growing businesses',
    price: 'Custom',
    features: [
      'Advanced POS Terminal',
      'Priority Support',
      'Real-time Reporting',
      'Up to 5,000 transactions/month',
      'Multiple Payment Methods',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    features: [
      'Full Suite of Solutions',
      'Dedicated Account Manager',
      'Advanced Analytics',
      'Unlimited Transactions',
      'Custom Integration',
      'Compliance Support',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Transparent Pricing"
        subtitle="No hidden fees. Get a custom quote based on your needs."
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                background={tier.highlight ? 'white' : 'light'}
                className={tier.highlight ? 'ring-2 ring-teal' : ''}
              >
                <h3 className="text-2xl font-bold text-navy mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                <p className="text-3xl font-bold text-teal mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="text-teal font-bold">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" href="/signup" className="w-full">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg text-center">
            <h3 className="text-2xl font-bold text-navy mb-4">Questions About Pricing?</h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. Contact our sales team for a personalized quote.
            </p>
            <Button variant="secondary" href="/contact">
              Contact Sales
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
