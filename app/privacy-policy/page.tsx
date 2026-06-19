import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';

export const metadata = {
  title: 'Privacy Policy | National e-Payment',
  description: 'National e-Payment privacy policy — how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <Section background="white">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-headings:text-navy prose-a:text-teal">
          <h1 className="text-4xl font-bold text-navy mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            National e-Payment NY, LLC (&ldquo;National e-Payment&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects information you
            provide directly to us, such as when you apply for a merchant account, contact our support team,
            or sign up for our partner program. This may include your name, business name, email address,
            phone number, mailing address, and financial information necessary to process your application.
          </p>
          <p className="text-gray-700 mb-4">
            We also collect information automatically when you use our website, including IP address,
            browser type, pages visited, and referring URLs.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Process and fulfill your merchant account application</li>
            <li>Communicate with you about your account, transactions, and services</li>
            <li>Provide 24/7 customer and technical support</li>
            <li>Send you information about products, services, and promotions (with your consent)</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Detect and prevent fraud or unauthorized activity</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Banking partners</strong> — Elavon (U.S. Bancorp), Wells Fargo Bank N.A., Esquire Bank,
              and Commercial Bank of California — as required to process payments and maintain your merchant account.
            </li>
            <li>
              <strong>Service providers</strong> who assist us in operating our business, subject to confidentiality agreements.
            </li>
            <li>
              <strong>Law enforcement or regulatory agencies</strong> when required by applicable law.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement industry-standard security measures to protect your personal and financial information,
            including PCI DSS compliance protocols. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">5. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Our website uses cookies to improve your browsing experience, analyze site traffic, and understand
            user behavior. You may disable cookies through your browser settings, but doing so may affect
            certain functionality of the site.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or request deletion of your personal information.
            To exercise these rights, contact us at{' '}
            <a href="mailto:support@nationalepayment.com" className="text-teal hover:text-teal-dark">
              support@nationalepayment.com
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-2">If you have questions about this policy, contact us:</p>
          <address className="not-italic text-gray-700 space-y-1">
            <p><strong>National e-Payment NY, LLC</strong></p>
            <p>36-36 33rd Street, Suite 209</p>
            <p>Long Island City, NY 11106</p>
            <p>
              Phone:{' '}
              <a href="tel:+18664369022" className="text-teal hover:text-teal-dark">(866) 436-9022</a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:support@nationalepayment.com" className="text-teal hover:text-teal-dark">
                support@nationalepayment.com
              </a>
            </p>
          </address>
        </div>
      </Container>
    </Section>
  );
}
