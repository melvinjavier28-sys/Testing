import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

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
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-navy text-white p-8 rounded-lg text-center hover:bg-navy-light transition-colors"
            >
              <h4 className="text-2xl font-semibold mb-3">{product.title}</h4>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <a href={product.href} className="text-teal font-semibold hover:text-teal-dark">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
