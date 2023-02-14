/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('./styles/colorTheme');
const keyframes = require('./styles/keyframes');
const animation = require('./styles/animation');
const safelist = require('./styles/safelist');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    // screens: {
    //   '+480': { min: '480px' },
    //   '-480': { max: '480px' },
    // },
    extend: {
      keyframes,
      animation,
      fontFamily: {
        headings: "'Lora', sans-serif",
        body: "'Inter', sans-serif",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('first-child', '& > *:first-child');
      addVariant('last-child', '& > *:last-child');
    },
  ],
  safelist,
};
