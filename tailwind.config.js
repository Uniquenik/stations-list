/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      lightgray: '#EEEEEE',
      orange: '#F97537',
      white: '#FFFFFF',
    },
    extend: {
      boxShadow: {
        'station-tile': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderRadius:{
        '11px':'11px'
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      spacing: {
        '15px': '15px',
        '50px': '50px',
        '60px': '60px',
        '90px': '90px'
      },
    },
  },
  plugins: [],
}
