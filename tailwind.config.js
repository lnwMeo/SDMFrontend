/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundColor: {
        'custom-light': '#fcfcfc',
        // 'custom-light': '#fcfcfc',
      },
      fontFamily:{
        'prompt':['Prompt', 'sans-serif']
      },
      backgroundImage: {
        'hero-Auth': "url('../../assets/image/moon.jpg')",
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

