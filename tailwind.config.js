/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, 
    theme: {
      extend: {
        screens: {
          'xs': '475px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px', 
        },
        colors: {
          primary: '#8DD67A', 
          secondary: '#FA9F42', 
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'], 
        borderColor: ['focus-visible'], 
        opacity: ['disabled'], 
      },
    },
    plugins: [
      require('@tailwindcss/forms'), 
      require('@tailwindcss/typography'), 
    ],
  };
  