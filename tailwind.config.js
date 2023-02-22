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
    extend: {
      keyframes,
      animation,
      fontFamily: {
        headings: "'Lora', sans-serif",
        body: "'Inter', sans-serif",
      },
      screens: {
        // hover: { raw: '(hover: hover)' },
        maxmd: { raw: '(max-width: 767px)' },
        // '+1600': { min: '1600px' },
        // '-480': { max: '480px' },
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
  future: {
    hoverOnlyWhenSupported: true,
  },
};
