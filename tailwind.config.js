/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0F3A5F',
        'navy-light': '#1A4F6F',
        'teal': '#00C9A7',
        'teal-dark': '#00B393',
        'dark-text': '#333333',
        'light-bg': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '50px',
      },
    },
  },
  plugins: [],
}
