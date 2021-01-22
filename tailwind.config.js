module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: '"Heebo", sans-serif',
    },
    extend: {
      colors: {
        primary: '#492dd4',
        'primary-tone': {
          50: '#f6f5fe',
          100: '#eeebfd',
          200: '#d4ccfa',
          300: '#b9adf7',
          400: '#8570f2',
          500: '#5132ec',
          600: '#492dd4',
          700: '#3d26b1',
          800: '#311e8e',
          900: '#281974',
        },
        secondary: '#aa284f',
        'secondary-tone': {
          50: '#fef5f8',
          100: '#fcebf0',
          200: '#f8cdda',
          300: '#f4aec3',
          400: '#eb7296',
          500: '#e33569',
          600: '#cc305f',
          700: '#aa284f',
          800: '#88203f',
          900: '#6f1a33',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
