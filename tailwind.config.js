module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xm: { min: "140px", max: "288px" },
    },
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translate3d(-90px, 0, 0)" },
          "100%": { transform: "translate3d(85px, 0, 0)" },
        },
        otter: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, 10px, 0)" },
        },
      },
      animation: {
        wave: "wave 6s linear -2s infinite",
        otter: "otter 4s ease-in-out 1s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
