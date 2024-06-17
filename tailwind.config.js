/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 12px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};
