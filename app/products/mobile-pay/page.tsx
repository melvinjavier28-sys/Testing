import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { mobilePayProducts } from '@/src/lib/catalog';

export const metadata = {
  title: 'Mobile Pay Products | National e-Payment',
  description: 'Mobile card readers for on-the-go payment acceptance. Clover Go and ISOACCESS Mobile Pay.',
};

export default function MobilePayPage() {
  return (
    <ProductCatalog
      category={mobilePayProducts}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
      ]}
    />
  );
}
