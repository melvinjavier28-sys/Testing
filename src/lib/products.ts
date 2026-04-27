import productsData from '@/src/content/products.json';
import { Product } from '@/src/lib/types';

export const products: Product[] = productsData as Product[];

export function getProduct(slug: string): Product | undefined {
  return products.find((prod) => prod.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((prod) => prod.slug);
}

export function getProductsForHomepage() {
  return products.map((prod) => ({
    id: prod.id,
    title: prod.title,
    description: prod.description,
    href: `/products/${prod.slug}`,
  }));
}

export function getProductsByIndustry(industryId: string) {
  return products.filter((prod) => prod.industries.includes(industryId));
}
