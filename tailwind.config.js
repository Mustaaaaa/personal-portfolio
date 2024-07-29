/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)',  opacity: '1'  },
          '50%': { transform: 'scale(1.3)', opacity: '1'  },
        },
      },
      animation: {
        pulse: 'pulse 1.5s infinite',
       },
    },
  },
  plugins: [],
};