import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import TrustSignals from '@/src/components/sections/TrustSignals';
import { Landmark } from 'lucide-react';

export const metadata = {
  title: 'About Us | National e-Payment',
  description: 'Learn about National e-Payment and our mission to serve businesses.',
};

const bankPartners = ['Elavon (U.S. Bancorp)', 'Wells Fargo Bank N.A.', 'Esquire Bank N.A.', 'Commercial Bank of CA'];

export default function CompanyPage() {
  return (
    <>
      <Hero
        title="About National e-Payment"
        subtitle="Trusted payment solutions for businesses of all sizes"
        backdrop="company"
      />

      <Section background="white" dots glow="both">
        <Container>
          <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
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
            <div className="premium-hero relative overflow-hidden rounded-3xl border border-white/10 p-8 text-white shadow-[0_30px_60px_-20px_rgba(15,58,95,0.4)] md:p-10">
              <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                  <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-lime" />
                  Registered MSP / ISO
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-snug md:text-[1.7rem]">
                  Built on <span className="text-gradient-lime">trusted banking</span> relationships
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  We&apos;re a registered MSP/ISO sponsored by some of the most established acquiring
                  banks in the country — the foundation behind every merchant account we open.
                </p>
                <ul className="mt-6 space-y-3">
                  {bankPartners.map((partner) => (
                    <li
                      key={partner}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lime/15 text-lime">
                        <Landmark className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-white/85">{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
