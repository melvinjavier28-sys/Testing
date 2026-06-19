import React from 'react';
import SectionDecor from './SectionDecor';
import ScatterBackdrop, { ScatterTile } from './ScatterBackdrop';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'light' | 'navy';
  className?: string;
  id?: string;
  /** Ambient depth (soft glows). On by default for light/white backgrounds; off for navy. */
  decor?: boolean;
  glow?: 'lime' | 'navy' | 'both' | 'none';
  /** Faint dot-grid texture. */
  dots?: boolean;
  /** Optional faded scenes scattered through the section (context-appropriate per page). */
  scatter?: ScatterTile[];
  scatterOpacity?: number;
}

export default function Section({
  children,
  background = 'white',
  className = '',
  id,
  decor,
  glow = 'both',
  dots = false,
  scatter,
  scatterOpacity = 0.08,
}: SectionProps) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-surface',
    navy: 'bg-navy-950 text-white',
  };

  // Default: bring light/white sections to life; leave dark navy bands alone.
  const showDecor = decor ?? background !== 'navy';

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 ${bgClass[background]} ${className}`}
    >
      {showDecor && <SectionDecor glow={glow} dots={dots} />}
      {showDecor && scatter && scatter.length > 0 && (
        <ScatterBackdrop tiles={scatter} opacity={scatterOpacity} />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
