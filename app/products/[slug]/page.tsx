import type { Metadata } from 'next';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import CTASection from '@/src/components/sections/CTASection';
import { getProduct, getAllProductSlugs } from '@/src/lib/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return {};

  return {
    title: `${product.title} | National e-Payment`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Hero
        title={product.title}
        subtitle={product.description}
        ctaText="Get Quote"
        ctaHref="/contact"
      />

      {/* Features Section */}
      <Section background="light">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, idx) => (
              <Card key={idx} border="left" borderColor="teal" background="white">
                <p className="text-gray-700">{feature}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <Section background="white">
          <Container>
            <h2 className="text-3xl font-bold text-navy mb-8">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-navy mb-2">{key}</h4>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Brands Section */}
      {product.brands && product.brands.length > 0 && (
        <Section background="light">
          <Container>
            <h2 className="text-3xl font-bold text-navy mb-8">Available Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.brands.map((brand, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg text-center font-semibold text-navy border border-gray-200">
                  {brand}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Industries Section */}
      <Section background="white">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.industries.map((industry, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-navy capitalize">{industry}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Ready to Get Started?"
        subheading={`Integrate ${product.title} into your business today.`}
        ctaText="Get a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
