/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'task': "url('https://drive.google.com/file/d/1jl_LMN3RGHhNMgLuxMIPqhdVr1XE8w9R/view?usp=drive_link')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    screens: {
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
