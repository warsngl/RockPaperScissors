module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow:{
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
