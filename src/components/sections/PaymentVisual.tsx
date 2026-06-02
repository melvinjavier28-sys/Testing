import { ArrowUpRight, Check, CreditCard, ShieldCheck } from 'lucide-react';

/**
 * Decorative animated "payments dashboard" mock for the hero.
 * Pure presentational (no client JS); motion is CSS-only and respects
 * prefers-reduced-motion. Hidden from assistive tech.
 */
export default function PaymentVisual() {
  const bars = [38, 52, 44, 66, 58, 78, 72, 92];

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md select-none">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[40px] bg-lime/20 blur-3xl" />

      {/* Main dashboard card */}
      <div className="glass-dark relative rounded-[28px] p-6">
        {/* Window chrome */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/55">
            <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-lime text-lime" />
            Live
          </span>
        </div>

        {/* Headline figure */}
        <p className="text-xs uppercase tracking-wider text-white/50">Net deposits today</p>
        <div className="mt-1 flex items-end gap-3">
          <span className="font-display text-4xl font-bold text-white">$12,480</span>
          <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-lime/15 px-2 py-0.5 text-xs font-semibold text-lime">
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
            18.2%
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-6 flex h-24 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={{
                height: `${h}%`,
                background:
                  i === bars.length - 1
                    ? 'linear-gradient(180deg, #b6f47f, #9fe870)'
                    : 'rgba(255,255,255,0.14)',
              }}
            />
          ))}
        </div>

        {/* Stat row */}
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
          {[
            { label: 'Volume', value: '1,204' },
            { label: 'Approval', value: '95%' },
            { label: 'Avg ticket', value: '$42' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-lg font-bold text-white">{s.value}</div>
              <div className="text-[10px] uppercase tracking-wide text-white/45">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating: approved transaction */}
      <div className="glass-dark animate-float absolute -right-4 -top-5 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-navy">
          <Check className="h-5 w-5" strokeWidth={3} />
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white">Approved</div>
          <div className="flex items-center gap-1 text-[11px] text-white/55">
            <CreditCard className="h-3 w-3" /> Visa •• 4242 · $84.20
          </div>
        </div>
      </div>

      {/* Floating: PCI badge */}
      <div className="glass-dark animate-float-slow absolute -bottom-6 -left-3 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:-left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lime">
          <ShieldCheck className="h-5 w-5" strokeWidth={2} />
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white">PCI DSS</div>
          <div className="text-[11px] text-white/55">Secured &amp; compliant</div>
        </div>
      </div>
    </div>
  );
}
