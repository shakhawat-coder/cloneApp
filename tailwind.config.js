/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ["Nunito", "sans-serif"],
      'opensans':["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        'primary-text': '#11175D',
        'blue' : '#5F35F5',
        'orange' : "#EA6C00"
      },
    },
  },
  plugins: [],
}

