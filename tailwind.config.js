/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-hover': '#FE0650',
        primary: '#CC0540',
        secondary: '#F4F5F7',
        grey: '#C8C8C8',
        'hover-grey': '#414141',
      },
      screens: {
        md: '920px',
      },
    },
  },
  plugins: [],
}
