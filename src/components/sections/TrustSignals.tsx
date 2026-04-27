import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

export default function TrustSignals() {
  return (
    <Section background="white">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">Why Merchants Trust Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partnerships */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Bank Partnerships</h3>
            <p className="text-gray-600 mb-6">Processing through Elavon, Wells Fargo, and major financial institutions</p>
            <div className="flex justify-center gap-4">
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">Elavon</div>
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">WF</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Certifications</h3>
            <p className="text-gray-600 mb-6">MSP, ISO 27001, and PCI DSS Level 1 compliant</p>
            <div className="flex justify-center gap-4">
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">MSP</div>
              <div className="w-20 h-12 bg-light-bg rounded flex items-center justify-center text-sm font-semibold">ISO</div>
            </div>
          </div>

          {/* Metrics */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-navy mb-4">Trusted by Thousands</h3>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-teal">10,000+</p>
              <p className="text-gray-600">Active merchants</p>
              <p className="text-lg font-semibold text-navy mt-4">Billions in annual transactions</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
