import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import TrustSignals from '@/src/components/sections/TrustSignals';

export const metadata = {
  title: 'About Us | National e-Payment',
  description: 'Learn about National e-Payment and our mission to serve businesses.',
};

export default function CompanyPage() {
  return (
    <>
      <Hero
        title="About National e-Payment"
        subtitle="Trusted payment solutions for businesses of all sizes"
      />

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At National e-Payment, we believe payment processing should be simple, reliable, and affordable.
              We're committed to providing businesses with payment solutions that grow with them.
            </p>
            <p className="text-lg text-gray-600">
              Since our founding, we've processed billions in transactions for thousands of merchants across
              every industry. We're trusted by startups and enterprises alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card background="light">
              <h4 className="text-2xl font-bold text-navy mb-2">10,000+</h4>
              <p className="text-gray-600">Active merchants</p>
            </Card>
            <Card background="light">
              <h4 className="text-2xl font-bold text-navy mb-2">$B+</h4>
              <p className="text-gray-600">Annual transactions</p>
            </Card>
            <Card background="light">
              <h4 className="text-2xl font-bold text-navy mb-2">24/7</h4>
              <p className="text-gray-600">Customer support</p>
            </Card>
          </div>
        </Container>
      </Section>

      <TrustSignals />

      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Reliability',
                description: 'We ensure your payments process, every single time.',
              },
              {
                title: 'Simplicity',
                description: 'Easy setup, easy management, easy growth.',
              },
              {
                title: 'Security',
                description: 'Enterprise-grade protection for your customer data.',
              },
            ].map((value) => (
              <Card key={value.title} background="white" border="left" borderColor="teal">
                <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
