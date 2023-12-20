/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'sans serif'],
      },
      colors: {
        first: "#F2F2F2", // ex gray
        gray_text: "#6D6D6D"
      },
      screens: {
        'px600': '600px',
        'px850': '850px',
        'px1080': '1080px',
        'px1450': '1450px',
        'px1600': '1600px'
      },
    },
  },
  plugins: [],
})

// sm: "540px",
//   md: "720px",
//   lg: "960px",
//   "lg-max": { max: "960px" },
//   xl: "1140px",
//   "2xl": "1320px",
// default screens