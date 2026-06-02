import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { nautilusATMs, allATMBrands } from '@/src/lib/catalog';

export const metadata = {
  title: 'Nautilus Hyosung ATM Machines | National e-Payment',
  description: 'Shop Nautilus Hyosung ATMs: 2700CE, 2700T, 4000W, 5200, Halo II, and MX5300CE. Competitive pricing.',
};

export default function NautilusHyosungPage() {
  return (
    <ProductCatalog
      category={nautilusATMs}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'ATM Machines', href: '/products/atm-machines' },
      ]}
      parentCategories={allATMBrands.map(b => ({ name: b.name, slug: b.slug, href: b.href }))}
    />
  );
}
