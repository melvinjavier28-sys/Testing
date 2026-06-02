import Container from '@/src/components/common/Container';
import { allATMBrands, tritonATMs, nautilusATMs, genmegaATMs, hantleATMs } from '@/src/lib/catalog';

export const metadata = {
  title: 'ATM Machines | National e-Payment',
  description: 'Shop ATM machines from Triton, Nautilus Hyosung, Genmega, and Hantle. Competitive pricing and full service support.',
};

const allATMs = [
  ...tritonATMs.products.map(p => ({ ...p, brand: 'Triton' })),
  ...nautilusATMs.products.map(p => ({ ...p, brand: 'Nautilus Hyosung' })),
  ...genmegaATMs.products.map(p => ({ ...p, brand: 'Genmega' })),
  ...hantleATMs.products.map(p => ({ ...p, brand: 'Hantle' })),
];

function formatPrice(price?: number, callForPrice?: boolean): string {
  if (callForPrice) return 'Call for Quote';
  if (price) return `$${price.toLocaleString()}.00`;
  return 'Contact Us';
}

export default function ATMMachinesPage() {
  return (
    <div className="min-h-screen bg-light-bg">
      <div className="bg-navy text-white py-10">
        <Container>
          <nav className="text-sm text-gray-400 mb-3 flex flex-wrap gap-1 items-center">
            <a href="/" className="hover:text-teal transition-colors">Home</a>
            <span className="text-gray-600">›</span>
            <a href="/products" className="hover:text-teal transition-colors">Products</a>
            <span className="text-gray-600">›</span>
            <span className="text-white">ATM Machines</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">ATM Machines</h1>
          <p className="text-gray-300 max-w-2xl">
            Shop our full catalog of ATMs from the industry&apos;s leading manufacturers. All models
            include full installation support, vault setup, and 24/7 service from National e-Payment.
          </p>
        </Container>
      </div>

      <Container>
        <div className="py-10">
          {/* Brand filters */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Shop by Brand</h2>
            <div className="flex flex-wrap gap-3">
              {allATMBrands.map((brand) => (
                <a
                  key={brand.slug}
                  href={brand.href}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded font-medium text-navy hover:border-teal hover:text-teal transition-colors text-sm"
                >
                  {brand.name} <span className="text-gray-400 ml-1">({brand.count})</span>
                </a>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-6">Showing {allATMs.length} results</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allATMs.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md hover:border-teal transition-all"
              >
                <div className="bg-light-bg h-40 flex items-center justify-center border-b border-gray-100">
                  <div className="text-center px-4">
                    <div className="text-xs text-teal font-semibold mb-1">{product.brand}</div>
                    <div className="text-navy font-semibold text-sm leading-tight">{product.name}</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-navy text-sm mb-1 leading-tight">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">{product.brand}</p>
                  <p className={`font-bold mb-3 ${product.callForPrice ? 'text-gray-500 text-sm' : 'text-teal'}`}>
                    {formatPrice(product.price, product.callForPrice)}
                  </p>
                  <a
                    href="/contact"
                    className="block w-full text-center bg-navy text-white text-xs font-semibold py-2 rounded hover:bg-teal transition-colors"
                  >
                    {product.callForPrice ? 'Get Quote' : 'Add to Cart'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Need help choosing an ATM?</h2>
            <p className="text-gray-300 mb-5">Our ATM specialists can help you select, place, and service the right machine for your location.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+18664369022" className="bg-teal text-navy font-semibold px-6 py-2.5 rounded hover:bg-teal-dark transition-colors">
                Call (866) 436-9022
              </a>
              <a href="/contact" className="border border-white text-white font-semibold px-6 py-2.5 rounded hover:bg-white hover:text-navy transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
