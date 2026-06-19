import SectionHeading from '@/src/components/common/SectionHeading';
import RevealSection from '@/src/components/common/RevealSection';
import Container from '@/src/components/common/Container';
import SectionDecor from '@/src/components/common/SectionDecor';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Switching to National e-Payment cut my monthly processing fees by over 30%. I applied on a Tuesday and was processing cards by end of business the same day.',
    name: 'Carlos Mendez',
    role: 'Restaurant Owner',
    location: 'Queens, NY',
    photo: '/people/portrait-man-1.jpg',
  },
  {
    quote:
      "I called at 2am over a terminal issue and someone answered on the second ring. That's unheard of after going through three processors in fifteen years.",
    name: 'Jennifer Torres',
    role: 'Grocery Store Owner',
    location: 'Brooklyn, NY',
    photo: '/people/portrait-woman-1.jpg',
  },
  {
    quote:
      'After bouncing between three processors in ten years, National e-Payment is the first to actually lower my rate and keep it there. When my terminal went down before the morning rush, a real person picked up on the second ring.',
    name: 'David Rosner',
    role: 'Gas Station Owner',
    location: 'Long Island City, NY',
    photo: '/people/portrait-man-2.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-surface relative overflow-hidden">
      {/* Soft brand glow for depth */}
      <SectionDecor glow="both" />
      {/* Ghost quote decoration */}
      <Quote
        aria-hidden="true"
        className="absolute -bottom-10 right-0 h-72 w-72 text-navy/[0.03] -scale-x-100 z-[1]"
        strokeWidth={1}
      />

      <Container className="relative z-10">
        <RevealSection>
          <SectionHeading
            eyebrow="Customer Stories"
            title="Merchants Tell It Better Than We Do"
            subtitle="Real business owners. Real results."
            className="mb-12"
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map(({ quote, name, role, location, photo }, i) => (
            <RevealSection key={name} delay={i * 100}>
              <figure className="card-lift border-glow group relative flex h-full flex-col rounded-card border border-gray-200/80 bg-white p-7">
                {/* Stars */}
                <div className="mb-4 flex gap-0.5 text-lime" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="relative flex-1 text-[15px] leading-relaxed text-slate">
                  {quote}
                </blockquote>

                <hr className="my-6 border-0 border-t border-gray-100" />

                {/* Attribution */}
                <figcaption className="flex items-center gap-3">
                  <Image
                    src={photo}
                    alt={name}
                    width={48}
                    height={48}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-top ring-2 ring-lime/30"
                  />
                  <div>
                    <p className="text-sm font-bold text-navy">{name}</p>
                    <p className="mt-0.5 text-xs text-muted">{role} · {location}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
