import Image from 'next/image';
import { CreditCard } from 'lucide-react';

interface ProductImageProps {
  image?: string;
  name: string;
  brand: string;
}

/**
 * Renders the product photo when one is available, otherwise a clean,
 * intentional branded placeholder (so the catalog never looks broken).
 * Swap a placeholder for a real photo by adding the file to /public/products
 * and setting `image` on the product in src/content/equipment.ts.
 */
export default function ProductImage({ image, name, brand }: ProductImageProps) {
  if (image) {
    return (
      <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-surface">
        <Image
          src={image}
          alt={`${brand} ${name}`}
          width={300}
          height={300}
          className="h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-44 w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #9fe870 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lime">
        <CreditCard className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <span className="relative text-xs font-semibold uppercase tracking-widest text-white/55">
        {brand}
      </span>
    </div>
  );
}
