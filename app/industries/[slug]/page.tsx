import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Button from '@/src/components/common/Button';
import ProductGrid from '@/src/components/sections/ProductGrid';
import CTASection from '@/src/components/sections/CTASection';
import { getIndustry, getAllIndustrySlugs } from '@/src/lib/industries';
import { getProductsForHomepage } from '@/src/lib/products';
import { notFound } from 'next/navigation';

// Real business-owner photo per industry — shown as a visible feature, not a backdrop.
const ownerPhotos: Record<string, string> = {
  restaurants: '/people/owner-restaurant.jpg',
  retail: '/people/owner-retail.jpg',
  grocery: '/people/owner-grocery.jpg',
  'gas-stations': '/people/owner-gas.jpg',
  lodging: '/people/owner-lodging.jpg',
  ecommerce: '/people/owner-ecommerce.jpg',
};

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: `${industry.title} Payment Solutions | National e-Payment`,
    description: industry.fullDescription,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const recommendedProducts = getProductsForHomepage().filter((prod) =>
    industry.recommendedProducts.includes(prod.id)
  );

  const ownerPhoto = ownerPhotos[slug];

  return (
    <>
      <Hero
        title={industry.title}
        subtitle={industry.fullDescription}
        ctaText="Apply Now"
        ctaHref="/signup"
        backdrop={slug}
      />

      {/* Real business owner — people-first feature */}
      {ownerPhoto && (
        <Section background="white">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(15,58,95,0.4)]">
                  <Image
                    src={ownerPhoto}
                    alt={`A ${industry.title.toLowerCase()} business owner`}
                    width={900}
                    height={680}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Floating support badge for polish */}
                <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-xl sm:block">
                  <div className="font-display text-2xl font-bold text-forest">24/7</div>
                  <div className="text-[11px] font-medium uppercase tracking-wide text-muted">Live support</div>
                </div>
              </div>

              <div>
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                  <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-lime" />
                  Built around your business
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
                  Payments that keep up with how you actually run
                </h2>
                <p className="mb-7 text-lg leading-relaxed text-slate">
                  From the first sale to the busiest rush, we keep your payments fast, reliable,
                  and affordable — backed by real people you can reach any time, day or night.
                </p>
                <Button href="/signup">Get Started Free</Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

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
