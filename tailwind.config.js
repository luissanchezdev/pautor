/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '599c1f',
        'secondary': '#1b8fc3',
        'white': '#ffffff'
      }
    }
  },
  plugins: [],
}

