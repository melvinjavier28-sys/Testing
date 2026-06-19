import Container from '@/src/components/common/Container';
import HeroBackdrop from '@/src/components/sections/HeroBackdrop';
import { getHeroBackdrop } from '@/src/content/heroBackdrops';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Named industry/page backdrop set (see heroBackdrops). Omit for the generic collage. */
  backdrop?: string;
}

export default function Hero({
  title,
  subtitle,
  eyebrow,
  ctaText = 'Get Started Free',
  ctaHref = '/signup',
  backdrop,
}: HeroProps) {
  return (
    <section className="premium-hero relative overflow-hidden py-16 text-white md:py-24">
      <HeroBackdrop images={[...getHeroBackdrop(backdrop)]} opacity={0.26} />
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="aurora-blob animate-aurora -left-16 top-2 h-72 w-72"
        style={{ background: 'rgba(159,232,112,0.20)' }}
      />
      <div
        aria-hidden="true"
        className="aurora-blob animate-aurora right-0 top-16 h-80 w-80"
        style={{ background: 'rgba(36,123,184,0.28)', animationDuration: '24s' }}
      />

      <Container>
        <div className="relative max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-lime" />
            {eyebrow ?? 'National e-Payment'}
          </span>

          <h1 className="mb-5 text-[2.4rem] font-bold leading-[1.06] md:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-white/70 md:text-xl">
            {subtitle}
          </p>

          {ctaText && (
            <a
              href={ctaHref}
              className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-full bg-lime px-9 py-4 text-base font-bold text-navy shadow-[0_12px_34px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
