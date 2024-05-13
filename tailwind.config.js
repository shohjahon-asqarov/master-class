/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}" , "./js/app.js"],
  theme: {
    extend: {
      colors: {
        'green': '#A5C926',
        'yellow': '#FFC12C',
        'pink': '#FB416B',
        'gray': '#999999',
        'body-bg': '#F8F8F8'
      },
      boxShadow: {
        'card': '0px 1px 2px 0px #00000026'
      },
      maxWidth: {
        '1200': '1200px'
      },
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
        'story': "url('/images/story-bg.jpg')",
      }
    },
  },
  plugins: [],
}