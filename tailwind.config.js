/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#E7DBE3',
          500: '#5F0F40',
        },
        maroon: {
          100: '#F0D9DD',
          500: '#9A031E',
        },
        yellow: {
          100: '#FEEEDE',
          500: '#FB8B24',
        },
        orange: {
          100: '#FBE8DC',
          500: '#E36414',
        },
        green: {
          100: '#DBE4E7',
          500: '#0F4C5C',
        },
      },
      screens: {
        'sm': '200px',
        // => @media (min-width: 640px) { ... }

        'md': '650px',
        // => @media (min-width: 768px) { ... }

        'lg': '990px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
