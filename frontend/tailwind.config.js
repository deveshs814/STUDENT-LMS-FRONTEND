/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
  animation: {
    'fade-in': 'fadeIn 0.3s ease-out'
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'scale(0.95)' },
      '100%': { opacity: 1, transform: 'scale(1)' }
    }
  }
}
