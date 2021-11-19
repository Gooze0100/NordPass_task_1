module.exports = {
  purge: {
    enabled:
      process.env.WEBPACK_DEV_SERVER === "true" &&
      process.argv.join(" ").indexOf("build") !== -1,
    content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  },
  darkMode: false,
  theme: {
    extend: {},
    container: { center: true },
    colors: {
      teal: {
        base: "#43A5A1",
        lightest: "#EDF8F7",
      },
      black: {
        base: "#151922",
        lighter: "#151922",
      },
      grey: {
        base: "#B9BABD",
        dark: "#373B42",
        darkest: "#383C43",
      },
      red: {
        base: "#F64F64",
      },
      backgroundCurrent: "#383C43",
      defaultBorderColor: "#B9BABD",
    },
  },
  variants: {},
  plugins: [],
};
