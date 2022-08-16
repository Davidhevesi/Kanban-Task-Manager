/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: ["0.75rem", { lineHeight: "0.938rem" }],
      lg: ["0.938rem", { lineHeight: "1.188rem" }],
      xl: ["1.5rem", { lineHeight: "1.875rem" }],
    },
    colors: {
      white: "#ffffff",
      Iris: "#635FC7",
      jaguar: "#000112",
      dark: "#20212C",
      zircon: "#F4F7FD",
      "biloba-flower": "#A8A4FF",
      "ebony-clay": "#2B2C37",
      "bright-clay": "#3E3F4E",
      "regent-grey": "#828FA3",
      "lavender-mist": "#E4EBFA",
      "valentine-red": "#EA5555",
      "light-solomn-pink": "#FF9898",
    },
    extend: {},
  },
  plugins: [],
};
