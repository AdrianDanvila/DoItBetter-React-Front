/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        screens: {
          md: '768px',
        },
        fontFamily: {
          verbatim: ['"verbatim"', "sans-serif"],
          // Add more custom font families as needed
        }
      },
    },
    plugins: [],
  }
  