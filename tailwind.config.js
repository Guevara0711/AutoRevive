/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#f97316',
        accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
}
