/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#1E1E1E",
        "color-secondary": "#292929",
        categories: {
          "color-green": "#28B588",
          "color-red": "#B63E37",
          "color-purple": "#754199",
          "color-dark-yellow": "#E77C10",
          "color-light-blue": "#4A86C0",
          "color-pink": "#C5205E",
        },
      },
    },
  },
  plugins: [],
};
