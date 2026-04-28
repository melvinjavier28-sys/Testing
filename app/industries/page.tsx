import type { Metadata } from 'next';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Card from '@/src/components/common/Card';
import Section from '@/src/components/common/Section';
import { getIndustriesForHomepage } from '@/src/lib/industries';

export const metadata: Metadata = {
  title: 'Industries | National e-Payment',
  description: 'Payment solutions tailored for your industry.',
};

export default function IndustriesPage() {
  const industries = getIndustriesForHomepage();

  return (
    <>
      <Hero
        title="Payment Solutions for Every Industry"
        subtitle="Tailored payment processing for your specific business needs"
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Card key={industry.id} border="left" borderColor="teal" background="white">
                <h3 className="text-2xl font-bold text-navy mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <a href={industry.href} className="text-teal font-semibold hover:text-teal-dark">
                  Explore This Industry →
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
