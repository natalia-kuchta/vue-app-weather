/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      colors: {
        "weather-primary": "#06a6b4",
        "weather-second": "#121063",
        transparent: 'transparent',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',


      },
    },
    fontFamily:{
      Roboto:["Roboto, sans-serif"],

    },
    container:{
      padding:"2rem",
      center:true,
    },
    screen:{
      sm:"640px",
      md:"748px",
    },
  },

  plugins: [],
}

