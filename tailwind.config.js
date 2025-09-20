/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ], 
   theme: {
    extend: {
      colors: {
        navy: {
          900: '#1E3A8A',  // Navy Blue for headings and main sections
          800: '#25428F',  // Slightly lighter navy for secondary text/backgrounds
        },
        sky: {
          100: '#DBEAFE',  // Light Sky Blue (for light backgrounds and headings)
          200: '#BFDBFE',  // Soft sky blue (for accents)
          300: '#93C5FD',  // Medium Sky Blue (links and hover effects)
          500: '#3B82F6',  // Sky Blue (used for highlights, buttons)
        },
        coolgray: {
          100: '#F3F4F6',  // Light gray for subtle background or card designs
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], // Use serif font for a more professional feel
      },
      boxShadow: {
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for elements
      },
    },
  },
  plugins: [],
}

