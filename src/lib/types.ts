export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  painPoints: string[];
  solutions: string[];
  recommendedProducts: string[];
  testimonial?: {
    text: string;
    author: string;
    company: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  specifications?: Record<string, string>;
  pricing?: string;
  brands?: string[];
  industries: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  company: string;
  industry: string;
}
