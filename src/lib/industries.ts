import industriesData from '@/content/industries.json';
import { Industry } from '@/lib/types';

export const industries: Industry[] = industriesData as Industry[];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((ind) => ind.slug);
}

export function getIndustriesForHomepage() {
  return industries.map((ind) => ({
    id: ind.id,
    title: ind.title,
    description: ind.shortDescription,
    href: `/industries/${ind.slug}`,
  }));
}
