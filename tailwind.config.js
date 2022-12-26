/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,.25)",
        brown: "rgb(30,30,17)"
      },
      backgroundImage: {
        back: "url(./assets/background.svg)",
      }
    },
  },
  plugins: [],
}