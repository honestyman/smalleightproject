/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    screens:{
      'sp':[
            {'min': '300px', 'max': '640px'},
          ],
      'lg':[
        {'min': '641px', 'max': '1024px'}
      ],
      'md':[
        {'min': '1025px', 'max': '1440px'}
      ]
    }
  },
  plugins: [],
}

