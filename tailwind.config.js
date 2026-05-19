/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0908',
        text: '#EAE4D9',
        accent: '#D4A574',
        muted: '#5C5750',
        surface: '#13110F',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
