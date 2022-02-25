module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#6A110A",
      dark: "#550E08",
      white: "#fff",
      hover: "#FF0019",
    },
    fontFamily: {
      h1: ["Archivo Black"],
      h2: ["Prata"],
      body: ["Quicksand"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
