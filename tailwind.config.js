export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
      colors: {
        gold: "#d4af37", // Royal gold
      },
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};
