/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xxs': '375px'

      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#9A1C1D',
        'light': '#F8D2E1',
        'dark': '#430000'
      },
      fontFamily: {
        'bitter': ['Bitter', 'serif'], 
      },
    },
  },

  plugins: [],
}
