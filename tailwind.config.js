/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F4EFDB',
        'night': '#242A33'      // Darkest
      }
    },
  },
  plugins: [],
}