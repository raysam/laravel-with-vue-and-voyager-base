const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-blue': '#264653',
        'greed': '#2A9D8F',
        'greed-lighter': '#30b2a1',
        'greed-light': '#82F7ED',
        'yellow-dark': '#E9C46A',
        'orange-light': '#F4A261',
        'orange-dark': '#E76F51'
      }
    },
  },

  variants: {
    aspectRatio: ['responsive', 'hover'],
    extend: {
      borderWidth: ['first', 'last'],
      // opacity: ['disabled'],
      padding: ['hover']
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
