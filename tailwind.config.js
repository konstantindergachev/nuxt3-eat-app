/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        Black: '#0A1902',
        White: '#FFFFFF',
        LightGreen: '#82CD5E',
        Green: '#59BE29',
        Gray: '#ECEFF7',
      },
    },
  },
  plugins: [],
};
