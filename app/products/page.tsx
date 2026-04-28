import type { Metadata } from 'next';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Card from '@/src/components/common/Card';
import Section from '@/src/components/common/Section';
import { getProductsForHomepage } from '@/src/lib/products';

export const metadata: Metadata = {
  title: 'Products | National e-Payment',
  description: 'Payment processing hardware and software solutions.',
};

export default function ProductsPage() {
  const products = getProductsForHomepage();

  return (
    <>
      <Hero
        title="Our Products"
        subtitle="Everything you need to accept payments and grow your business"
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} border="left" borderColor="teal" background="white">
                <h3 className="text-2xl font-bold text-navy mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <a href={product.href} className="text-teal font-semibold hover:text-teal-dark">
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
