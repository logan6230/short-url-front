/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc8d59",
        secondary: {
          100: "#08519c",
          900: "#08306b",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
