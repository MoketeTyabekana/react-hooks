/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        // sm: 250px to 599px
        sm: { raw: "(min-width: 250px) and (max-width: 599px)" },

        // md: 600px to 999px
        md: { raw: "(min-width: 600px) and (max-width: 999px)" },

        // lg: 1000px and above
        lg: { min: "1000px" },
      },
    },
  },
  plugins: [],
};
