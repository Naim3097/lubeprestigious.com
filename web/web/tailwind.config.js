/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#2d3488",
        lightBlue: "#55a8dd",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Helvetica Neue", "sans-serif"],
      }
    },
  },
  plugins: [],
}
