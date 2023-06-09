/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: 'tw-',
  // important: true,
  theme: {
    extend: {},
    colors: {
      'primary': '#FFE0E7',
      'secondary': '#FFEEF3',
      'text-color': '#555555',
      'dark-grey': '#464747',
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'tal': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  content: [
    "./**/*.liquid"
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}