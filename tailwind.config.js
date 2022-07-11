/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkgray': '#636d83',
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
