import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { printers } from '@/src/lib/catalog';

export const metadata = {
  title: 'Printers | National e-Payment',
  description: 'Receipt printers from Clover, Epson, and Star Micronics compatible with major POS systems.',
};

export default function PrintersPage() {
  return (
    <ProductCatalog
      category={printers}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    />
  );
}
