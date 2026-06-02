import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface ProductGridProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <Section background="white">
      <Container>
        <div className="w-9 h-[3px] bg-lime mb-3 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-2">{title}</h2>
        <p className="text-base text-slate mb-10">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="card-lift bg-forest text-white p-7 rounded-card flex flex-col gap-3 hover:bg-[#1e4a00] transition-colors group"
            >
              <h4 className="text-lg font-bold">{product.title}</h4>
              <p className="text-white/65 text-sm leading-relaxed flex-1">{product.description}</p>
              <span className="inline-flex items-center gap-1 text-lime text-sm font-semibold">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
