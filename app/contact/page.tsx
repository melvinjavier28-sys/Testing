import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';

export const metadata = {
  title: 'Contact Us | National e-Payment',
  description: 'Get in touch with National e-Payment sales and support teams.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We're here to help. Reach out to our sales or support team."
      />

      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card background="white" border="left" borderColor="teal">
              <h4 className="text-xl font-bold text-navy mb-3">Phone</h4>
              <a href="tel:+1234567890" className="text-lg text-teal font-semibold hover:text-teal-dark">
                +1 (800) 123-4567
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
            </Card>

            <Card background="white" border="left" borderColor="teal">
              <h4 className="text-xl font-bold text-navy mb-3">Email</h4>
              <a href="mailto:support@nationalepayment.com" className="text-lg text-teal font-semibold hover:text-teal-dark">
                support@nationalepayment.com
              </a>
              <p className="text-sm text-gray-600 mt-2">Response within 1 hour</p>
            </Card>

            <Card background="white" border="left" borderColor="teal">
              <h4 className="text-xl font-bold text-navy mb-3">Address</h4>
              <p className="text-gray-600">
                123 Business Avenue<br />
                Suite 100<br />
                City, State 12345
              </p>
            </Card>
          </div>

          <div className="bg-white p-12 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-white font-semibold py-3 rounded-lg hover:bg-teal-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
