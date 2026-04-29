// src/components/common/DiagonalCut.tsx
// Renders a shallow diagonal SVG cut between two section backgrounds.
// Usage: <DiagonalCut from="navy" to="light" />  (place immediately after the upper section)

type ColorToken = 'navy' | 'navy-light' | 'light' | 'white';

const BG: Record<ColorToken, string> = {
  'navy':       '#0F3A5F',
  'navy-light': '#1A4F6F',
  'light':      '#F5F5F5',
  'white':      '#ffffff',
};

interface DiagonalCutProps {
  from?: ColorToken;
  to?:   ColorToken;
}

export default function DiagonalCut({ from = 'navy', to = 'light' }: DiagonalCutProps) {
  return (
    <div aria-hidden="true" style={{ background: BG[from], lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        width="100%"
        height="32"
        className="md:h-10 block"
      >
        {/* The "to" color fills a trapezoid, revealing the "from" color above */}
        <polygon points="0,10 1440,0 1440,40 0,40" fill={BG[to]} />
      </svg>
    </div>
  );
}
