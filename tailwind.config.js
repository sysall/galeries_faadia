/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F7E98E',
          400: '#D4AF37',
          500: '#B8860B',
        },
      },
    },
  },
  plugins: [],
};
