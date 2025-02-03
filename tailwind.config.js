/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {

        // Range for medium devices (640px - 1023px)
        'sm': { 'min': '300px', 'max': '1023px' }, 

        // Range for large devices (1024px - 1279px)
        'md': { 'min': '1024px', 'max': '1279px' }, 
      },

    },
  },
  plugins: [],
}

