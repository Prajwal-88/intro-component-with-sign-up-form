/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // Primary
        Red: 'hsl(0, 100%, 74%)',
        Green: 'hsl(154, 59%, 51%)',
        // Accent
        Blue: 'hsl(248, 32%, 49%)',
        // Neutral
        Dark_Blue: 'hsl(249, 10%, 26%)',
        Grayish_Blue:' hsl(246, 25%, 77%)',
      },

      fontFamily:{
        pop:"'Poppins', sans-serif"
      },

      backgroundImage:{
        'mobile':"url(../../../assets/images/bg-intro-mobile.png)",
        'dekstop':"url(../../../assets/images/bg-intro-desktop.png)",
        'error':"url(../../../assets/images/icon-error.svg)",
      },
    },
  },
  plugins: [],
}

