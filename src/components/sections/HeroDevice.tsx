export default function HeroDevice() {
  return (
    <div className="relative flex justify-center items-center py-12 lg:py-0">
      {/* Ambient glow */}
      <div className="absolute w-80 h-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative animate-float">
        {/* ── Terminal body ── */}
        <div className="relative bg-navy-light rounded-3xl p-5 shadow-2xl border border-white/10 w-56">
          {/* Screen */}
          <div className="bg-[#091e35] rounded-2xl p-4 mb-4 border border-white/5">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1.5">
              Amount Due
            </p>
            <p className="text-teal text-[2rem] font-bold leading-none">$127.50</p>
            <p className="text-gray-500 text-[11px] mt-1.5">Tap · Swipe · Insert</p>

            {/* Progress bar */}
            <div className="flex gap-1 mt-3">
              <div className="h-1 w-8 bg-teal rounded-full" />
              <div className="h-1 flex-1 bg-white/10 rounded-full" />
              <div className="h-1 flex-1 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '✓'].map((k) => (
              <div
                key={k}
                className={`h-8 flex items-center justify-center rounded-lg text-sm font-medium select-none ${
                  k === '✓'
                    ? 'bg-teal text-navy'
                    : 'bg-[#091e35] text-gray-400'
                }`}
              >
                {k}
              </div>
            ))}
          </div>

          {/* Card slot */}
          <div className="h-2 bg-[#091e35] rounded border border-teal/20" />
        </div>

        {/* ── Floating credit card ── */}
        <div
          className="absolute -right-14 top-6 rotate-12 w-36 h-[88px] rounded-xl shadow-xl border border-white/20 p-3 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #00C9A7 0%, #00B393 100%)' }}
          aria-hidden="true"
        >
          {/* Chip */}
          <div className="w-6 h-5 bg-navy/40 rounded mb-2 grid grid-cols-2 grid-rows-2 gap-px p-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-navy/30 rounded-sm" />
            ))}
          </div>
          {/* Dots */}
          <div className="flex gap-1 mb-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
            ))}
          </div>
          <p className="text-white/60 text-[9px] tracking-wider">•••• 4242</p>
        </div>

        {/* ── Approved badge ── */}
        <div
          className="animate-badge-pop absolute -left-10 bottom-10 bg-teal text-navy text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap"
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 14 14">
            <path
              d="M2 7l3.5 3.5 6.5-7"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Payment Approved
        </div>

        {/* ── NFC tap indicator ── */}
        <div
          className="absolute -right-2 -top-3 bg-navy border border-teal/30 text-teal text-[10px] font-semibold px-2 py-1 rounded-full shadow-md whitespace-nowrap"
          aria-hidden="true"
        >
          ))) NFC
        </div>
      </div>
    </div>
  );
}
