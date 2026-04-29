import SectionHeading from '@/src/components/common/SectionHeading';

const testimonials = [
  {
    quote:
      'Switching to National e-Payment cut my monthly processing fees by over 30%. I applied on a Tuesday and was processing cards by end of business the same day.',
    name: 'Carlos Mendez',
    role: 'Restaurant Owner',
    location: 'Queens, NY',
    initials: 'CM',
    color: 'bg-navy',
  },
  {
    quote:
      "I called at 2am over a terminal issue and someone answered on the second ring. That's unheard of after going through three processors in fifteen years.",
    name: 'Jennifer Torres',
    role: 'Grocery Store Owner',
    location: 'Brooklyn, NY',
    initials: 'JT',
    color: 'bg-navy-light',
  },
  {
    quote:
      'The ATM program alone more than pays for itself. My customers stay longer and I keep the surcharge revenue instead of sending it to a third-party operator.',
    name: 'David Rosner',
    role: 'Gas Station Owner',
    location: 'Long Island City, NY',
    initials: 'DR',
    color: 'bg-teal-dark',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light-bg relative overflow-hidden">
      {/* Ghost star decoration */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 translate-x-4 translate-y-4 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(15,58,95,0.04)' }}
      >
        ★
      </span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Merchants Tell It Better Than We Do"
          subtitle="Real business owners. Real results."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map(({ quote, name, role, location, initials, color }) => (
            <div
              key={name}
              className="bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg p-6 flex flex-col"
              style={{ borderTop: '3px solid #BDE525' }}
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="select-none mb-2 block"
                style={{
                  fontSize: '56px',
                  lineHeight: 0.8,
                  fontFamily: 'Georgia, serif',
                  color: 'rgba(189,229,37,0.35)',
                }}
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="text-teal text-sm mb-3" aria-label="5 out of 5 stars">
                <span aria-hidden="true">★★★★★</span>
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-gray-700 leading-relaxed flex-1 mb-5">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <hr className="border-0 border-t border-gray-100 mb-5" />

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {role} · {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
