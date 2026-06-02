import Container from '@/src/components/common/Container';
import { allCategories, allATMBrands } from '@/src/lib/catalog';

export const metadata = {
  title: 'Products | National e-Payment',
  description: 'Shop credit card terminals, ATM machines, mobile pay, wireless terminals, PIN pads, and printers.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-light-bg">
      <div className="bg-navy text-white py-10">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Credit Card Terminals & Equipment</h1>
          <p className="text-gray-300 max-w-2xl">
            Browse our full catalog of payment hardware — from countertop terminals to ATMs, mobile readers, and printers.
            All products come with free setup support and 24/7 service from National e-Payment.
          </p>
        </Container>
      </div>

      <Container>
        <div className="py-10 space-y-12">
          {/* Product categories */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-6">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {allCategories.map((cat) => (
                <a
                  key={cat.slug}
                  href={cat.href}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:border-teal hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-navy text-lg group-hover:text-teal transition-colors">{cat.name}</h3>
                    <span className="text-xs text-gray-400 bg-light-bg px-2 py-1 rounded">{cat.count} products</span>
                  </div>
                  <span className="text-teal text-sm font-semibold group-hover:text-teal-dark transition-colors">
                    Shop Now →
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* ATM Machines by brand */}
          <section>
            <h2 className="text-2xl font-bold text-navy mb-2">ATM Machines — Shop by Brand</h2>
            <p className="text-gray-600 mb-6">We carry ATMs from the industry&apos;s leading manufacturers with competitive pricing and full service support.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {allATMBrands.map((brand) => (
                <a
                  key={brand.slug}
                  href={brand.href}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:border-teal hover:shadow-md transition-all group text-center"
                >
                  <div className="w-12 h-12 bg-navy rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-teal font-bold text-sm">ATM</span>
                  </div>
                  <h3 className="font-bold text-navy mb-1 group-hover:text-teal transition-colors">{brand.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{brand.count} models</p>
                  <span className="text-teal text-sm font-semibold">View Models →</span>
                </a>
              ))}
            </div>
          </section>

          {/* Why buy from us */}
          <section className="bg-navy rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Buy From National e-Payment?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Competitive Pricing', body: 'We negotiate volume pricing with manufacturers and pass the savings to you.' },
                { title: 'Free Setup & Support', body: '24/7 technical support with every purchase. No extra charges for setup assistance.' },
                { title: 'Certified Equipment', body: 'All equipment is EMV Level 1 & 2 certified and PCI DSS compliant.' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="font-bold text-teal mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="tel:+18664369022" className="bg-teal text-navy font-semibold px-8 py-3 rounded hover:bg-teal-dark transition-colors">
                Call (866) 436-9022 for Pricing
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
