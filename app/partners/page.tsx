import Image from 'next/image';
import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import CTASection from '@/src/components/sections/CTASection';

export const metadata = {
  title: 'ISO Partner Program | National e-Payment',
  description: "Join National e-Payment's ISO partner program. Why compete with us when you can join us?",
};

const benefits = [
  {
    title: 'Trusted Brand Name',
    description: 'Leverage a recognized name in merchant services to open doors with prospects.',
  },
  {
    title: 'Dedicated Business Consultants',
    description: 'Your own dedicated rep to help close deals and support your portfolio.',
  },
  {
    title: 'Leader in Payment Processing & Gift Cards',
    description: 'Offer a complete suite of products — terminals, ATMs, gift cards, and more.',
  },
  {
    title: 'Professional Training Program',
    description: 'Train-the-trainer tools and resources so your team hits the ground running.',
  },
  {
    title: 'Competitive Compensation',
    description: 'Industry-leading residuals and upfront bonuses for your sales.',
  },
  {
    title: 'Flexible Pricing Options',
    description: 'Set your own pricing within our program guidelines to stay competitive.',
  },
  {
    title: 'Web-Based Reporting',
    description: 'Real-time access to your portfolio performance, residuals, and merchant data.',
  },
  {
    title: 'Timely Commission Payments',
    description: 'Accurate and on-time residual payments you can count on every month.',
  },
  {
    title: '24/7 Technical Support',
    description: 'Round-the-clock support for you and your merchants — no extra charge.',
  },
  {
    title: 'Multiple Bank Relationships',
    description: 'Processing through Elavon, Wells Fargo, Esquire Bank, and Commercial Bank of California.',
  },
  {
    title: 'Marketing Materials',
    description: 'Co-branded collateral, rate sheets, and digital assets ready to use.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Why Compete With Us When You Can Join Us?"
        subtitle="Build a recurring income stream as a National e-Payment ISO partner. We provide everything you need to succeed."
        ctaText="Become a Partner"
        ctaHref="#apply"
      />

      <Section background="light">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">ISO Program Benefits</h2>
            <p className="text-gray-600">
              Our ISO program is designed to give you maximum earning potential with the support, tools,
              and bank relationships to close more deals and retain more merchants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} background="white" border="left" borderColor="teal">
                <h4 className="text-lg font-bold text-navy mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Partner Story */}
      <Section background="navy">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Photo */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-teal/30 blur-xl scale-110" />
                  <Image
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Marcus Webb, ISO Partner"
                    width={140}
                    height={140}
                    className="relative rounded-full object-cover ring-4 ring-teal/40"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">Marcus Webb</p>
                  <p className="text-teal text-xs">ISO Partner · Atlanta, GA</p>
                  <p className="text-gray-400 text-xs mt-0.5">12 years in merchant services</p>
                </div>
              </div>

              {/* Quote */}
              <div>
                <svg className="w-8 h-8 text-teal/40 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
                  I was doing $40K a month in residuals with my old processor. Six months after moving my portfolio to National e-Payment I was at $67K. The back-office support made the difference — they handle what I used to spend half my week doing.
                </blockquote>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-teal" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bank Partners */}
      <Section background="white">
        <Container>
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">Our Banking Relationships</h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            National e-Payment is a registered MSP/ISO with multiple top-tier financial institutions,
            giving you and your merchants access to the most competitive processing rates.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Elavon (U.S. Bancorp)', 'Wells Fargo', 'Esquire Bank', 'Commercial Bank of CA'].map((bank) => (
              <div key={bank} className="bg-light-bg rounded-lg p-6 text-center font-semibold text-navy text-sm">
                {bank}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ISO Login */}
      <Section background="light">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Already a Partner?</h2>
            <p className="text-gray-600 mb-8">
              Access your portfolio reporting, residuals, and merchant management tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mi.isoaccess.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy-light transition-colors"
              >
                ISO Login
              </a>
              <a
                href="https://www.youraccessone.com/64_ms_login.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-navy font-semibold px-8 py-3 rounded-lg hover:bg-teal-dark transition-colors"
              >
                Merchant Login
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Apply Section */}
      <Section background="white" id="apply">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-2 text-center">Apply to Become a Partner</h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and a dedicated business consultant will contact you within one business day.
            </p>

            <div className="bg-light-bg p-8 rounded-lg">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">Company / Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">Current Book of Business (merchants)</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white">
                    <option value="">Select range</option>
                    <option value="0">Just starting out</option>
                    <option value="1-10">1 – 10 merchants</option>
                    <option value="10-50">10 – 50 merchants</option>
                    <option value="50-200">50 – 200 merchants</option>
                    <option value="200+">200+ merchants</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1">Tell us about your business</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white h-28"
                    placeholder="What markets or industries do you serve?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal text-navy font-semibold py-3 rounded-lg hover:bg-teal-dark transition-colors text-lg"
                >
                  Submit Partner Application
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Questions About the Program?"
        subheading="Call us at (866) 436-9022 or email sales@nationalepayment.com"
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
