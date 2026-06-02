import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { genmegaATMs, allATMBrands } from '@/src/lib/catalog';

export const metadata = {
  title: 'Genmega ATM Machines | National e-Payment',
  description: 'Shop Genmega ATMs: C6000, G2500, GT3000, GT5000, Onyx, Onyx W, and GK1000 Bill Payment Kiosk.',
};

export default function GenmegaATMPage() {
  return (
    <ProductCatalog
      category={genmegaATMs}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'ATM Machines', href: '/products/atm-machines' },
      ]}
      parentCategories={allATMBrands.map(b => ({ name: b.name, slug: b.slug, href: b.href }))}
    />
  );
}
