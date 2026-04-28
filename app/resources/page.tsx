import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';

export const metadata = {
  title: 'Resources | National e-Payment',
  description: 'Guides, documentation, and FAQs for payment processing.',
};

const resources = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Merchant Account Setup Guide', description: 'Step-by-step guide to opening your account' },
      { title: 'POS Terminal Setup', description: 'How to configure and activate your terminal' },
      { title: 'First Transaction', description: 'Processing your first payment' },
    ],
  },
  {
    category: 'Integration',
    items: [
      { title: 'API Documentation', description: 'Complete API reference for developers' },
      { title: 'Integration Guides', description: 'Connect our payment system to yours' },
      { title: 'Webhook Setup', description: 'Real-time transaction notifications' },
    ],
  },
  {
    category: 'Compliance',
    items: [
      { title: 'PCI DSS Compliance', description: 'Security standards and best practices' },
      { title: 'Data Privacy', description: 'How we protect your customer data' },
      { title: 'Fraud Prevention', description: 'Tools to protect your business' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title="Resources & Documentation"
        subtitle="Everything you need to succeed with National e-Payment"
      />

      <Section background="light">
        <Container>
          {resources.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="text-3xl font-bold text-navy mb-8">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Card key={item.title} background="white" border="left" borderColor="teal">
                    <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a href="#" className="text-teal font-semibold hover:text-teal-dark">
                      Read More →
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-white p-12 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">
              Have questions? Check out our FAQ section for answers to common questions.
            </p>
            <a href="#faq" className="text-teal font-semibold hover:text-teal-dark">
              View FAQ →
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
