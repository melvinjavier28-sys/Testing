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
    <section className="bg-navy text-white py-14 md:py-20 border-b border-white/10">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {ctaText && (
            <Button variant="primary" href={ctaHref} size="lg">
              {ctaText}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
