/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        white: "rgb(255, 255, 255) ",
        "section-title": "rgb(15, 21, 36) ",
        muted: "rgb(161, 161, 170) ",
        "btn-primary": "rgb(2, 111, 210) ",
        "btn-primary-hover": " rgb(2, 99, 186) ",
        "btn-secondary": "rgb(70, 88, 104) ",
        "btn-secondary-hover": "rgb(59, 75, 88) ",
        blue: "rgb(2, 111, 210) ",
        yellow: "rgb(255, 225, 0) ",
        background: "rgb(23, 29, 43) ",
        backgroundgRA: "rgb(25, 30, 35) ",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
