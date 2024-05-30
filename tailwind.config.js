/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // atau 'media' atau 'class'
  theme: {
      extend: {},
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
