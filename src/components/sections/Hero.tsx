import Button from '@/src/components/common/Button';
import Container from '@/src/components/common/Container';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Get Started Free',
  ctaHref = '/signup',
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-light text-white py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            {subtitle}
          </p>
          <Button variant="primary" href={ctaHref} size="lg">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
