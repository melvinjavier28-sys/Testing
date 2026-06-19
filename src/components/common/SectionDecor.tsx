import Image from 'next/image';

interface SectionDecorProps {
  /** Optional faded photo bled in from one edge (grayscale, masked toward the content). */
  image?: string;
  imageSide?: 'left' | 'right';
  imageFit?: 'cover' | 'contain';
  /** 0–1; kept low so copy stays crisp on light backgrounds. */
  imageOpacity?: number;
  /** Faint dot-grid texture for rhythm. */
  dots?: boolean;
  /** Tone of the soft corner glows. */
  glow?: 'lime' | 'navy' | 'both' | 'none';
}

/**
 * Decorative layer for light content sections — adds subtle depth so white space
 * reads as "alive" rather than flat, without competing with the hero.
 * Render as the first child of a `relative overflow-hidden` section; keep the
 * section's real content in a sibling with `relative z-10`.
 */
export default function SectionDecor({
  image,
  imageSide = 'right',
  imageFit = 'cover',
  imageOpacity = 0.08,
  dots = false,
  glow = 'both',
}: SectionDecorProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {(glow === 'lime' || glow === 'both') && (
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-lime/20 blur-[110px]" />
      )}
      {(glow === 'navy' || glow === 'both') && (
        <div className="absolute -right-28 -bottom-24 h-96 w-96 rounded-full bg-navy/10 blur-[130px]" />
      )}

      {dots && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(15,58,95,0.05) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            WebkitMaskImage: 'radial-gradient(110% 80% at 50% 0%, #000 28%, transparent 78%)',
            maskImage: 'radial-gradient(110% 80% at 50% 0%, #000 28%, transparent 78%)',
          }}
        />
      )}

      {image && (
        <div
          className={`absolute inset-y-0 ${imageSide === 'right' ? 'right-0' : 'left-0'} w-2/3 sm:w-1/2 lg:w-2/5`}
          style={{
            opacity: imageOpacity,
            WebkitMaskImage: `linear-gradient(to ${imageSide === 'right' ? 'left' : 'right'}, #000 30%, transparent 92%)`,
            maskImage: `linear-gradient(to ${imageSide === 'right' ? 'left' : 'right'}, #000 30%, transparent 92%)`,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="50vw"
            className={`grayscale object-${imageFit} ${imageSide === 'right' ? 'object-right' : 'object-left'}`}
          />
        </div>
      )}
    </div>
  );
}
