/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/**/*.liquid',
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '94': '22rem',
      }
    },
  },
  plugins: [],
}

