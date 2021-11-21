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
      nordTeal: {
        base: "#43A5A1",
        lightest: "#EDF8F7",
      },
      nordBlack: {
        base: "#151922",
        lighter: "#151922",
      },
      nordGrey: {
        lightest: "#F8F8F8",
        light: "#E8E8E9",
        base: "#B9BABD",
        dark: "#373B42",
        darkest: "#383C43",
      },
      nordRed: {
        base: "#F64F64",
      },
      nordWhite: {
        base: "#fff",
      },
      currentBackground: "#383C43",
      defaultBorderColor: "#B9BABD",
    },
    borderRadius: {
      nordSmallest: "2px",
      nordSmall: "3px",
    },
    padding: {
      baseX: "105px",
      nordButtonX: "15px",
      nordButtonY: "6px",
      nordSButtonY: "12px",
      nordSButtonX: "24px",
      nordTButtonY: "9px",
      nordTButtonX: "20px",
      nordSelectY: "7px",
      nordSelectL: "15px",
      nordSelectR: "180px",
      nordFooter: "75px",
      nordInputL: "16px",
      nordBaseX: "200px",
    },
    lineHeight: {
      nordHeight: "64px",
      nordSHeight: "30px",
      nordSHeading: "53px",
      nordSelect: "28px",
      nordTable: "24px",
      nordFooter: "20px",
      nordFooterCopy: "13px",
      nordInput: "19px",
      nordLButton: "30px",
    },
    letterSpacing: {
      nordSpacing: "-0.35px",
      nordSHeading: "-0.15px",
    },
    width: {
      nordWidth: "485px",
      nordFImg: "691px",
      nordSImg: "832px",
      nordInput: "455px",
      nordInfo: "406px",
    },
    height: {
      nordFImg: "485px",
      nordSImg: "532px",
      nordWhite: "30px",
      nordInput: "43px",
      nordTextArea: "129px",
      nordInfo: "40px",
    },
    left: {
      nordLeft: "393px",
      nordFImg: "929px",
    },
    top: {
      nordTop: "230px",
      nordFImg: "144px",
    },
    fontSize: {
      nordSmaller: "12px",
      nordSsmall: "14px",
      nordSmall: "16px",
      nordXSmall: "18px",
      base: "20px",
      nordFHeading: "48px",
      nordSHeading: "40px",
      nordFooterCopy: "10px",
    },
  },
  variants: {},
  plugins: [],
};
