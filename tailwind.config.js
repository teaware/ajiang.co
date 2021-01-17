module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xm: { min: "140px", max: "288px" },
    },
    extend: {
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translate3d(-90px, 0, 0)" },
          "100%": { transform: "translate3d(85px, 0, 0)" },
        },
        otter: {
          "0%, 100%": { transform: "translate3d(0, -4px, 0)" },
          "50%": { transform: "translate3d(0, 4px, 0)" },
        },
      },
      animation: {
        wave: "wave 6s linear -2s infinite",
        otter: "otter 4s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
