module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heroSize: "52px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Inter", "serif"],
      },
      colors: {
        brand: {
          primary: "#C91C5A",
          primaryTransparent: "#C91C5Af9",
          gray: "#505A73",
          bg: "#F2F5FA",
          darkGradientFrom: "#22252D",
          darkGradienttO: "#0A0C10",
        },
      },
    },
  },
  plugins: [],
};
