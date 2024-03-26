/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    screens:{
      'sp':[
            {'min': '300px', 'max': '640px'},
          ]
    }
  },
  plugins: [],
}

