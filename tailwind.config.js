/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyanApp: '#2acfcf',
        darkViolet: '#3b3054',
        redApp: '#f46262',
        grayApp: '#bfbfbf',
        grayishViolet: '#9e9aa7',
        veryDarkBlue: '#35323e',
        veryDarkViolet: '#232127',

      },
      fontFamily: {
        'sans': ['Poppins', ...defaultConfig.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

