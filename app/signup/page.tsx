import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';

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

export default function SignupPage() {
  return (
    <>
      <Hero
        title="Get Started — Free"
        subtitle="Apply for your merchant account in minutes. No setup fees, no hidden costs."
        ctaText="Apply Now"
        ctaHref="#apply"
      />

      <Section background="light">
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
            <div id="apply" className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">Free Merchant Application</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-1">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-1">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-navy mb-1">Business Name</label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    autoComplete="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-navy mb-1">Business Type</label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                  >
                    <option value="">Select your industry</option>
                    <option value="restaurants">Restaurant / QSR</option>
                    <option value="retail">Retail</option>
                    <option value="grocery">Grocery / Convenience Store</option>
                    <option value="gas-stations">Gas Station</option>
                    <option value="lodging">Hotel / Lodging</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                    placeholder="you@yourbusiness.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-semibold text-navy mb-1">Monthly Processing Volume (estimate)</label>
                  <select
                    id="volume"
                    name="volume"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-25k">$5,000 – $25,000</option>
                    <option value="25k-100k">$25,000 – $100,000</option>
                    <option value="100k-500k">$100,000 – $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal text-navy font-semibold py-3 rounded-lg hover:bg-teal-dark transition-colors text-lg"
                >
                  Submit Application
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting you agree to be contacted by a National e-Payment representative.
                  No charges until you activate your account.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
