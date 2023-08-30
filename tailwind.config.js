/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/page1.html", "./build/page2.html", "./build/js/*.js"],
  theme: {
    screens: {
      '2xs': '230px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

