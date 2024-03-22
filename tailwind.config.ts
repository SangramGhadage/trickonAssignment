/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'leaf': '#00dd00',
        'leaf-400': '#00dd00',
        '4adede': '#4adede',
        'blood': '#ff0000',
        '00022e': '#00022e'
      },
      textColor: {
        'leaf': '#00dd00',
        '4adede': '#4adede',
        'blood': '#ff0000',
        '00022e': '#00022e'
      },
      fontFamily: {
        'sans': 'ibm-plex-sans, sans-serif',
        'gothic': 'Pathway Gothic One, Arial, sans-serif',
      },
      fontSize: {
        '2xs': ['10px', 1.1],

      }
    },
  },
  plugins: [],
}

