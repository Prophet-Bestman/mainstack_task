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
          gray: "#505A73",
        },
      },
    },
  },
  plugins: [],
};
