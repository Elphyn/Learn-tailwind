/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaly: '#23252C',
        secondary: '#1A1B21',
        thrid: '#F47D27',
        forth: '#D5D4D8',
      }
    },
  },
  plugins: [],
}
