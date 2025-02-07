/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        sm: {max:'900px'}, 
        md: {min:'910px'}, 
        lg: {min:'1024px'}, 
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(-180deg, rgba(0,0,0,0.9), rgba(0,0,0,1)), url('https://i.ebayimg.com/images/g/BVMAAOSw1uNhenX7/s-l1600.jpg')",
        'custom-gradient-two': "linear-gradient(-180deg, rgba(0,0,0,0.9), rgba(0,0,0,1)), url('https://w.wallhaven.cc/full/0w/wallhaven-0w2de6.jpg')",
      },
    },
  },
  plugins: [],
}

