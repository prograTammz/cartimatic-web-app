const colors = require("tailwindcss/colors");
module.exports = {
  prefix: "",
  important: true,
  purge: {
    enabled: false,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        50: "#FCFCFC",
        100: "#FCFCFC",
        200: "#F7F7FC",
        300: "#EFF0F6",
        400: "#D9DBE9",
        500: "#A0A3BD",
        600: "#6E7191",
        700: "#4E4B66",
        800: "#262338",
        900: "#14142A",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
