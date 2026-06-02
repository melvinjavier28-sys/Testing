import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { pinPads } from '@/src/lib/catalog';

export const metadata = {
  title: 'PIN Pads | National e-Payment',
  description: 'PCI-certified PIN pads from First Data, Ingenico, PAX, and Verifone for secure debit and credit transactions.',
};

export default function PinPadsPage() {
  return (
    <ProductCatalog
      category={pinPads}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    />
  );
}
