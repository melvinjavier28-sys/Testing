interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div aria-hidden="true" className="w-9 h-[3px] bg-teal mb-3" />
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
