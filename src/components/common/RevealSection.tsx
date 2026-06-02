'use client';
import { useInView } from '@/src/hooks/useInView';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealSection({ children, className = '', delay = 0 }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
