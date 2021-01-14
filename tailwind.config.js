module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "screen-1/2": "50vh",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
