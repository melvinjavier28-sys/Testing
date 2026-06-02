/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Wise design tokens ─────────────────────────────
        'canvas':    '#ffffff',
        'ink':       '#0e0f0c',
        'slate':     '#454745',
        'ash':       '#e8ebe6',
        'muted-gray':'#868685',
        'ghost':     '#6a6c6a',
        'ambient':   '#ecf9f9',
        'forest':    '#163300',
        'lime':      '#9fe870',
        'deep-teal': '#0b4c72',
        // ── Brand (remapped to Wise accent palette) ────────
        'navy':      '#0F3A5F',
        'navy-light':'#1A4F6F',
        'teal':      '#9fe870',   // → Lime Accent
        'teal-dark': '#8fd660',   // → Darker lime
        'dark-text': '#0e0f0c',   // → Ink Black
        'light-bg':  '#e8ebe6',   // → Ash Gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '50px',
      },
      borderRadius: {
        card:    '28px',
        'card-sm': '18px',
        'card-xl': '37px',
      },
      letterSpacing: {
        tighter: '-0.015em',
        tight:   '-0.011em',
        snug:    '-0.008em',
      },
    },
  },
  plugins: [],
}
