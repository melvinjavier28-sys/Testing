import type { Metadata } from 'next';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Button from '@/src/components/common/Button';
import ProductGrid from '@/src/components/sections/ProductGrid';
import CTASection from '@/src/components/sections/CTASection';
import { getIndustry, getAllIndustrySlugs } from '@/src/lib/industries';
import { getProductsForHomepage } from '@/src/lib/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = getIndustry(params.slug);
  if (!industry) return {};

  return {
    title: `${industry.title} Payment Solutions | National e-Payment`,
    description: industry.fullDescription,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);

  if (!industry) {
    notFound();
  }

  const recommendedProducts = getProductsForHomepage().filter((prod) =>
    industry.recommendedProducts.includes(prod.id)
  );

  return (
    <>
      <Hero
        title={industry.title}
        subtitle={industry.fullDescription}
        ctaText="Apply Now"
        ctaHref="/signup"
      />

      {/* Pain Points & Solutions */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Common Challenges</h2>
              <ul className="space-y-4">
                {industry.painPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-teal font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-teal font-bold text-xl mt-1">★</span>
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <ProductGrid
          title="Recommended Products"
          subtitle="The tools your business needs"
          products={recommendedProducts}
        />
      )}

      {/* Testimonial */}
      {industry.testimonial && (
        <Section background="navy">
          <Container>
            <div className="max-w-2xl mx-auto text-center text-white">
              <p className="text-xl mb-6 italic">"{industry.testimonial.text}"</p>
              <p className="font-semibold">{industry.testimonial.author}</p>
              <p className="text-teal">{industry.testimonial.company}</p>
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        heading="Ready to Get Started?"
        subheading={`Become PCI compliant and start processing payments for ${industry.title.toLowerCase()}.`}
        ctaText="Apply Now"
        ctaHref="/signup"
      />
    </>
  );
}
