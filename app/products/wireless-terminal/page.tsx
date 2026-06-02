import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { wirelessTerminals } from '@/src/lib/catalog';

export const metadata = {
  title: 'Wireless Terminals | National e-Payment',
  description: 'Wireless 4G and WiFi payment terminals from Ingenico, PAX, and Verifone.',
};

export default function WirelessTerminalPage() {
  return (
    <ProductCatalog
      category={wirelessTerminals}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    />
  );
}
