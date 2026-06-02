import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { terminals } from '@/src/lib/catalog';

export const metadata = {
  title: 'Credit Card Terminals | National e-Payment',
  description: 'Shop credit card terminals from Clover, Ingenico, PAX, Verifone, and more. EMV-certified, competitive pricing.',
};

export default function TerminalsPage() {
  return (
    <ProductCatalog
      category={terminals}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    />
  );
}
