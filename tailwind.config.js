/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["SpaceMono", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
