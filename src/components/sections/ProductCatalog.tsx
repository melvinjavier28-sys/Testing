import Container from '@/src/components/common/Container';
import type { CatalogProduct, CatalogCategory } from '@/src/lib/catalog';
import { CreditCard, Wifi, Monitor, Printer, Smartphone, Hash, Banknote } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductCatalogProps {
  category: CatalogCategory;
  breadcrumbs?: BreadcrumbItem[];
  parentCategories?: { name: string; slug: string; href: string }[];
}

function categoryIcon(categoryName: string) {
  const n = categoryName.toLowerCase();
  if (n.includes('atm'))      return Banknote;
  if (n.includes('mobile'))   return Smartphone;
  if (n.includes('wireless')) return Wifi;
  if (n.includes('pin'))      return Hash;
  if (n.includes('printer'))  return Printer;
  if (n.includes('terminal')) return Monitor;
  return CreditCard;
}

function formatPrice(product: CatalogProduct): string {
  if (product.callForPrice) return 'Call for Quote';
  if (product.price) return `$${product.price.toLocaleString()}.00`;
  return 'Contact Us';
}

export default function ProductCatalog({ category, breadcrumbs, parentCategories }: ProductCatalogProps) {
  return (
    <div className="min-h-screen bg-light-bg">
      {/* Page header */}
      <div className="bg-navy text-white py-10">
        <Container>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="text-sm text-gray-400 mb-3 flex flex-wrap gap-1 items-center">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center gap-1">
                  {i > 0 && <span className="text-gray-600">›</span>}
                  <a href={crumb.href} className="hover:text-teal transition-colors">{crumb.label}</a>
                </span>
              ))}
              <span className="text-gray-600">›</span>
              <span className="text-white">{category.name}</span>
            </nav>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-gray-300 max-w-2xl">{category.description}</p>
        </Container>
      </div>

      <Container>
        <div className="py-10">
          {/* Sub-category links (e.g., ATM brands) */}
          {parentCategories && parentCategories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {parentCategories.map((cat) => (
                <a
                  key={cat.slug}
                  href={cat.href}
                  className="px-4 py-2 bg-white border border-gray-200 rounded text-sm font-medium text-navy hover:border-teal hover:text-teal transition-colors"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-500 mb-6">Showing {category.products.length} results</p>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {category.products.map((product) => {
              const DeviceIcon = categoryIcon(category.name);
              return (
              <div
                key={product.name}
                className="card-lift bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-teal group"
              >
                {/* Device icon thumbnail */}
                <div className="bg-navy h-36 flex flex-col items-center justify-center gap-3 border-b border-white/5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <DeviceIcon className="w-7 h-7 text-teal" strokeWidth={1.5} />
                  </div>
                  <div className="text-white/50 text-[10px] uppercase tracking-widest">
                    {category.name}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-navy text-sm mb-2 leading-tight">{product.name}</h3>
                  <p className={`font-bold mb-3 ${product.callForPrice ? 'text-gray-400 text-sm' : 'text-teal'}`}>
                    {formatPrice(product)}
                  </p>
                  <a
                    href="/contact"
                    className="block w-full text-center bg-navy text-white text-xs font-semibold py-2 rounded-lg hover:bg-teal transition-colors"
                  >
                    {product.callForPrice ? 'Get Quote' : 'Inquire'}
                  </a>
                </div>
              </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-navy rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Need help choosing?</h2>
            <p className="text-gray-300 mb-5">Our payment specialists are available 24/7 to help you select the right equipment for your business.</p>
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
