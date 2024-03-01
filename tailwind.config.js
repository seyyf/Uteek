/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#5B5C2C",
      secondary: "#93931A",
      lowOpactiy: "#D4D4BB",
      oily: "#D6DA21",
      snowWhite: "#F1F2E0",
      black: "#000",
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
