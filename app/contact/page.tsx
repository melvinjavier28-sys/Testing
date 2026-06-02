import Hero from '@/src/components/sections/Hero';
import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';
import ContactForm from '@/src/components/forms/ContactForm';

const supportTeam = [
  { name: 'Angela R.',  role: 'Sales',             initials: 'AR', color: 'bg-navy' },
  { name: 'James T.',   role: 'Support',            initials: 'JT', color: 'bg-teal-dark' },
  { name: 'Sandra M.',  role: 'Merchant Services',  initials: 'SM', color: 'bg-navy-light' },
  { name: 'Kevin L.',   role: 'Technical',          initials: 'KL', color: 'bg-navy' },
];

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
              <a href="tel:+18664369022" className="text-lg text-teal font-semibold hover:text-teal-dark">
                (866) 436-9022
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
                36-36 33rd Street, Suite 209<br />
                Long Island City, NY 11106
              </p>
            </Card>
          </div>

          {/* Support team strip */}
          <div className="bg-white rounded-2xl border border-gray-100 px-8 py-6 max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex -space-x-3">
              {supportTeam.map((person) => (
                <div
                  key={person.name}
                  className={`w-12 h-12 rounded-full ${person.color} flex items-center justify-center ring-2 ring-white shrink-0`}
                  title={person.name}
                  aria-label={`${person.name}, ${person.role}`}
                >
                  <span className="text-white text-xs font-bold">{person.initials}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-navy text-sm">When you call, you reach one of us.</p>
              <p className="text-gray-500 text-sm mt-0.5">
                {supportTeam.map(p => p.name).join(', ')} — and the full team — are available 24/7.
                No menus. No hold music.
              </p>
            </div>
          </div>

          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
