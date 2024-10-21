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
        'tiktok-gradient': 'linear-gradient(45deg, #69C9D0, #000000 40%, #000000 60%, #EE1D52)',
      },
      colors: {
        'variable': "var(--custom-color)"
      },
    },
  },
  plugins: [require('tailwindcss-primeui')]
}

