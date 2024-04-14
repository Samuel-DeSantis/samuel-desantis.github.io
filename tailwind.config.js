/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'snow': '#FFFAFB', //Lightest
        'tiffany_blue': '#7DE2D1',
        'persian_green' :'#339989',
        'jet': '#2B2C28',
        'night': '#131515' //Darkest
      }
    },
  },
  plugins: [],
}