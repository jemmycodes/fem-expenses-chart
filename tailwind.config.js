/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    colors: {
      softRed: "hsl(10,79%, 65%)",
      Cyan: "hsl(186, 34%, 60%)",
      darkBrown: "hsl(25, 47%, 15%)",
      mediumBrown: "hsl(28, 10%, 53%)",
      Cream: "hsl(27, 66%, 92%)",
      veryPaleOrange: "hsl(33,100%,98%)",
    },
    extend: {},
  },
  plugins: [],
};
