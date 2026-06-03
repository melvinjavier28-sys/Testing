import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Container from '@/src/components/common/Container';
import { ArrowUpRight, Sparkles, Check, Tag } from 'lucide-react';

// Auto-detects the product photo: drop duopricer.png (or .jpg/.webp) into
// public/products/ and it renders automatically — otherwise a clean fallback.
const CANDIDATES = ['duopricer.png', 'duopricer.jpg', 'duopricer.webp'];
const found = CANDIDATES.find((f) =>
  fs.existsSync(path.join(process.cwd(), 'public', 'products', f)),
);
const IMAGE = found ? `/products/${found}` : null;

const features = [
  'Prints cash & card prices on one label',
  'Calculates both prices automatically',
  'Handheld, rechargeable, ready in seconds',
];

export default function FeaturedDuoPricer() {
  return (
    <section className="premium-hero relative overflow-hidden py-16 text-white md:py-20">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="aurora-blob animate-aurora -left-10 top-6 h-72 w-72"
        style={{ background: 'rgba(159,232,112,0.22)' }}
      />

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-lime">
              <Sparkles className="h-3.5 w-3.5" /> Designed in-house · National e-Payment
            </span>

            <h2 className="mb-3 text-4xl font-bold leading-[1.05] md:text-5xl">
              Duo Pricer{' '}
              <span className="align-middle text-xl font-semibold text-white/45">DP-50</span>
            </h2>

            <p className="mb-6 max-w-lg text-lg leading-relaxed text-white/70">
              Our own dual-pricing label device. Print cash-and-card prices on a single
              label in seconds — it does the math for you, so your shelf prices stay
              accurate and compliant.
            </p>

            <ul className="mb-8 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-white/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20">
                    <Check className="h-3.5 w-3.5 text-lime" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://duopricer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine relative inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-navy shadow-[0_12px_34px_-8px_rgba(159,232,112,0.85)] transition-transform hover:-translate-y-0.5"
              >
                Buy at duopricer.com
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-lime hover:bg-lime/10"
              >
                Ask us about it
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div aria-hidden="true" className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
            {IMAGE ? (
              <Image
                src={IMAGE}
                alt="Duo Pricer DP-50 dual-pricing label device"
                width={560}
                height={780}
                className="relative max-h-[460px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                priority
                unoptimized
              />
            ) : (
              <div className="relative flex h-72 w-full max-w-sm flex-col items-center justify-center gap-3 rounded-3xl border border-white/15 bg-white/[0.04] text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lime">
                  <Tag className="h-7 w-7" strokeWidth={1.4} />
                </span>
                <p className="px-6 text-sm text-white/55">
                  Add <code className="text-lime">public/products/duopricer.png</code> to show the product photo here.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
