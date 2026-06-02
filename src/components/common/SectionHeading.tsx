interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto text-center flex flex-col items-center' : ''} ${className}`}>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-4 ${
            dark ? 'text-lime' : 'text-forest'
          }`}
        >
          <span aria-hidden="true" className="w-6 h-[2px] rounded-full bg-lime" />
          {eyebrow}
        </span>
      ) : (
        <div
          aria-hidden="true"
          className={`w-10 h-[3px] rounded-full bg-gradient-to-r from-lime to-teal-dark mb-4 ${
            centered ? 'mx-auto' : ''
          }`}
        />
      )}

      <h2
        className={`text-[1.9rem] md:text-[2.6rem] font-bold leading-[1.08] mb-4 ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${centered ? 'max-w-2xl' : 'max-w-xl'} ${
            dark ? 'text-white/60' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
