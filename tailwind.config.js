/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')]
}

