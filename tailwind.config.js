/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: ['Rubik', 'sans-serif'], // Correct syntax for custom font family
        font2:["Playwrite GB S", 'cursive']
      },
    },
  },
  plugins: [],
}
