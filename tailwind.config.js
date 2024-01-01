/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '0.75rem',
        xl: '12rem',
        '2xl': '16rem',
      },
    },
  },
};
