import Hero from '@/src/components/sections/Hero';
import ServicesGrid from '@/src/components/sections/ServicesGrid';
import ProductGrid from '@/src/components/sections/ProductGrid';
import TrustSignals from '@/src/components/sections/TrustSignals';
import CTASection from '@/src/components/sections/CTASection';
import { getIndustriesForHomepage } from '@/src/lib/industries';
import { getProductsForHomepage } from '@/src/lib/products';

export default function Home() {
  const industries = getIndustriesForHomepage();
  const productsForHome = getProductsForHomepage();

  return (
    <>
      <Hero
        title="Payment Solutions Built for You"
        subtitle="From terminals to ATMs, everything your business needs in one place"
        ctaText="Get Started Free"
        ctaHref="/signup"
      />

      <ServicesGrid
        title="Solutions for Your Industry"
        subtitle="We understand your business. Here's what we offer:"
        services={industries}
      />

      <ProductGrid
        title="Hardware & Software Solutions"
        subtitle="Everything you need in one ecosystem:"
        products={productsForHome}
      />

      <TrustSignals />

      <CTASection
        heading="Become PCI Compliant Now"
        subheading="Get approved instantly and start processing payments securely."
        ctaText="Start Your Free Trial"
        ctaHref="/signup"
      />
    </>
  );
}
