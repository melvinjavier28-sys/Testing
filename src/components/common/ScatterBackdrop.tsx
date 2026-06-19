import Image from 'next/image';

export interface ScatterTile {
  src: string;
  /** Tailwind position + size classes, e.g. "-top-10 -left-12 h-52 w-64". */
  className: string;
  fit?: 'cover' | 'contain';
}

interface ScatterBackdropProps {
  tiles: ScatterTile[];
  /** Overall opacity of the whole scattered layer. Keep low so it reads as ambient texture. */
  opacity?: number;
}

/**
 * Scatters several grayscale photos across a section background, each feathered to a
 * soft blob via a radial mask (no hard rectangle edges) so they blend into the white
 * instead of looking like one pasted image. Decorative only (aria-hidden); section
 * content should sit in a sibling with `relative z-10` and solid card backgrounds.
 */
export default function ScatterBackdrop({ tiles, opacity = 0.07 }: ScatterBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
    >
      {tiles.map((t, i) => (
        <div
          key={t.src + i}
          className={`absolute hidden sm:block ${t.className}`}
          style={{
            WebkitMaskImage: 'radial-gradient(closest-side, #000 35%, transparent 100%)',
            maskImage: 'radial-gradient(closest-side, #000 35%, transparent 100%)',
          }}
        >
          <Image
            src={t.src}
            alt=""
            fill
            sizes="30vw"
            className={`grayscale ${t.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
          />
        </div>
      ))}
    </div>
  );
}
