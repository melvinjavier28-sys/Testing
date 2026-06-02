import React from 'react';

interface MarqueeProps {
  items: React.ReactNode[];
  className?: string;
  /** Seconds per loop — higher is slower. */
  duration?: number;
}

/**
 * Infinite horizontal marquee. Renders the item set twice and translates
 * the track by -50% so the loop is seamless. Pauses on hover; respects
 * prefers-reduced-motion (animation disabled in globals.css).
 */
export default function Marquee({ items, className = '', duration = 32 }: MarqueeProps) {
  return (
    <div className={`marquee-mask marquee-pause overflow-hidden ${className}`}>
      <div className="marquee-track gap-3" style={{ animationDuration: `${duration}s` }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
