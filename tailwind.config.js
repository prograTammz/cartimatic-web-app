const colors = require("tailwindcss/colors");
module.exports = {
  prefix: "",
  important: true,
  purge: {
    enabled: true,
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
      purple: {
        50: "#FEBECFE",
        100: "#EBECFE",
        200: "#BFBEFC",
        300: "#A996FF",
        400: "#9875FF",
        500: "#8B4DFF",
        600: "#610BEF",
        700: "#4700AB",
        800: "#2E036A",
        900: "#2E036A",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
