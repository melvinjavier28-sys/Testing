import Button from '@/src/components/common/Button';
import Container from '@/src/components/common/Container';

interface CTASectionProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  heading,
  subheading,
  ctaText = 'Get Started Free',
  ctaHref = '/signup',
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h2>
          {subheading && <p className="text-xl mb-8 opacity-90">{subheading}</p>}
          <Button variant="primary" href={ctaHref} size="lg">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
