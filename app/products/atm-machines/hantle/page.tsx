import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { hantleATMs, allATMBrands } from '@/src/lib/catalog';

export const metadata = {
  title: 'Hantle ATM Machines | National e-Payment',
  description: 'Shop Hantle ATMs: 1700W, C4000, CoinGoat, and T4000. Competitive pricing with full installation support.',
};

export default function HantleATMPage() {
  return (
    <ProductCatalog
      category={hantleATMs}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'ATM Machines', href: '/products/atm-machines' },
      ]}
      parentCategories={allATMBrands.map(b => ({ name: b.name, slug: b.slug, href: b.href }))}
    />
  );
}
