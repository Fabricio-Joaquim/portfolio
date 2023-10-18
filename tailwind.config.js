/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      width: {
        "desktop": "1440px",
        "mobile": "375px",
        "tablet": "768px",
      },
      fontFamily: {
        roboto: ["Roboto"],
        great: ["Great Vibes"],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}

