module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

