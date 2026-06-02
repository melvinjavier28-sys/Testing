import ProductCatalog from '@/src/components/sections/ProductCatalog';
import { tritonATMs, allATMBrands } from '@/src/lib/catalog';

export const metadata = {
  title: 'Triton ATM Machines | National e-Payment',
  description: 'Shop Triton ATM machines. Argo 12S, Argo 7D, Argo 7S, FT5000, and Traverse models available.',
};

export default function TritonATMPage() {
  return (
    <ProductCatalog
      category={tritonATMs}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'ATM Machines', href: '/products/atm-machines' },
      ]}
      parentCategories={allATMBrands.map(b => ({ name: b.name, slug: b.slug, href: b.href }))}
    />
  );
}
