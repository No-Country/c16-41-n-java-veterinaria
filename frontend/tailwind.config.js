/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'buttons': ['Luckiest Guy', 'cursive'],
      'body': ['Sora', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#0D3B66',
        'secondary': '#FAF0CA',
        'tertiary': '#F4D35E',
        'quaternary': '#EE964B',
        'quinary': '#F95738'
      },
    },
  },
  plugins: [],
}

