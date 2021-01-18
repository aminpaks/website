module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
