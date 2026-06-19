import Image from 'next/image';

interface HeroBackdropProps {
  /** Ordered list of image paths (public/). Renders as an even, faded grayscale collage. */
  images: string[];
  /** Overall opacity of the photo layer. Hero copy stays crisp via the navy scrim on top. */
  opacity?: number;
  /** Lower the scrim a touch on tall homepage-style heroes; default suits the shorter inner heroes. */
  priority?: boolean;
}

/**
 * Faded, grayscale photo collage used behind premium-hero sections.
 * Each page supplies an industry-matched set of images via the heroBackdrops registry,
 * so a gas-station page shows pumps + a c-store terminal, a restaurant shows dining + POS, etc.
 * Images are decorative (alt=""); the navy scrim keeps headline copy legible.
 */
export default function HeroBackdrop({ images, opacity = 0.3, priority = false }: HeroBackdropProps) {
  const tiles = images.filter(Boolean);
  if (tiles.length === 0) return null;

  const cols =
    tiles.length >= 3 ? 'sm:grid-cols-3' : tiles.length === 2 ? 'sm:grid-cols-2' : 'grid-cols-1';

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0" style={{ opacity }}>
        <div className={`grid h-full grid-cols-1 ${cols}`}>
          {tiles.map((src, i) => (
            <div
              key={src}
              // On narrow screens only the first tile shows, to avoid a cramped collage.
              className={i === 0 ? 'relative' : 'relative hidden sm:block'}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 34vw"
                className="object-cover grayscale"
                priority={priority}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navy scrim keeps the copy crisp over the photos */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/65 to-navy-950/90"
      />
    </>
  );
}
