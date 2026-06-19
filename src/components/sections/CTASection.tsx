import Image from 'next/image';
import Button from '@/src/components/common/Button';
import Container from '@/src/components/common/Container';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  heading,
  subheading,
  ctaText = 'Apply Now',
  ctaHref = '/signup',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white py-24">
      {/* Aurora + grid backdrop */}
      <div aria-hidden="true" className="absolute inset-0 premium-hero opacity-95" />
      <div aria-hidden="true" className="absolute inset-0">
        <Image src="/hero/transaction.jpg" alt="" fill sizes="100vw" className="object-cover object-center opacity-[0.14]" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950/85" />
      <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-60" />
      <div
        aria-hidden="true"
        className="aurora-blob animate-aurora -top-24 left-1/4 h-72 w-72"
        style={{ background: 'rgba(159,232,112,0.30)' }}
      />

      <Container>
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime mb-6">
            <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-lime" />
            Approved in minutes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-[1.06]">{heading}</h2>

          {subheading && (
            <p className="text-lg mb-9 text-white/70 leading-relaxed">{subheading}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={ctaHref} size="lg">
              {ctaText}
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Button>
            <a
              href="tel:+18664369022"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-9 py-[14px] text-base font-semibold text-white transition-colors hover:border-lime hover:bg-lime/10"
            >
              <Phone className="w-4 h-4" strokeWidth={2.2} />
              (866) 436-9022
            </a>
          </div>

          <p className="mt-7 text-xs uppercase tracking-wider text-white/40">
            No teaser rates · Free setup · Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  );
}
