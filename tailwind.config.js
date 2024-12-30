/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        blue:{
          400:'#01295c',
          700:'#19406b',
          900:'#7f93ac'
        },
        green:{
             400:'#36c6c0'
        }
      }
    },
  },
  plugins: [],
}

