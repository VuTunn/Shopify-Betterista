/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: 'tw-',
  // important: true,
  theme: {
    extend: {},
    padding: {
      '48px': '48px',
      '40px': '40px',
      '32px': '32px',
      '24px': '24px',
      '16px': '16px',
      '8px': '8px',
      '0px': '0px'
    },
    margin: {
      '48px': '48px',
      '40px': '40px',
      '32px': '32px',
      '24px': '24px',
      '16px': '16px',
      '8px': '8px',
      '0px': '0px',
      'auto': 'auto',
      'below-40px': '-40px'
    },
    colors: {
      'primary': '#FFE0E7',
      'secondary': '#FFEEF3',
      'text-color': '#555555',
      'dark-grey': '#464747',
      'white': '#FFFFFF',
      'black': '#000000',
      'yellow': '#FFFF00'
    },
    boxShadow: {
      'normal': '0px 0px 16px rgba(0, 0, 0, 0.08);',
      'none': 'none'
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