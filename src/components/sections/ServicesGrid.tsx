import Container from '@/src/components/common/Container';
import Section from '@/src/components/common/Section';
import Card from '@/src/components/common/Card';

interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
}

interface ServicesGridProps {
  title: string;
  subtitle: string;
  services: Service[];
  id?: string;
}

export default function ServicesGrid({ title, subtitle, services, id }: ServicesGridProps) {
  return (
    <Section background="light" id={id}>
      <Container>
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.id} border="left" borderColor="teal" background="white">
              <h4 className="text-xl font-semibold text-navy mb-2">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.href} className="text-teal font-semibold hover:text-teal-dark">
                Learn More →
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
