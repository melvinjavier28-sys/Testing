import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import ApplicationForm from '@/src/components/forms/ApplicationForm';

export const metadata = {
  title: 'Free Signup | National e-Payment',
  description: 'Apply for your free merchant account. 95% of applicants approved. No setup fees.',
};

const benefits = [
  '95% of applicants approved',
  'No setup fees or hidden charges',
  '30-day risk-free trial',
  '24/7 customer support included',
  'Same-day approval available',
  'PCI compliance assistance',
];

const onboardingScatter = [
  { src: '/hero/industries/retail-pos.jpg', className: '-top-12 right-[6%] h-56 w-72' },
  { src: '/hero/industries/support.jpg', className: 'bottom-[8%] -left-12 h-56 w-72' },
  { src: '/hero/industries/restaurant.jpg', className: '-bottom-12 right-[26%] h-48 w-60' },
];

export default function SignupPage() {
  return (
    <>
      <Hero
        title="Get Started — Free"
        subtitle="Apply for your merchant account in minutes. No setup fees, no hidden costs."
        ctaText="Apply Now"
        ctaHref="#apply"
      />

      <Section background="light" dots scatter={onboardingScatter} scatterOpacity={0.08}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Choose National e-Payment?</h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 items-start">
                    <span className="text-teal font-bold text-xl leading-none mt-0.5">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Card background="navy" className="mt-8">
                <h3 className="text-xl font-bold text-white mb-2">Questions?</h3>
                <p className="text-gray-300 mb-4">Our team is available 24/7 to walk you through the application process.</p>
                <a href="tel:+18664369022" className="text-teal font-semibold hover:text-teal-dark">
                  (866) 436-9022
                </a>
              </Card>
            </div>

            {/* Application Form */}
            <ApplicationForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
