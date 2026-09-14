/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF1C9",
        "cream-deep": "#FCE8A8",
        offwhite: "#FFFAF0",
        ink: "#1B1200",
        "ink-soft": "#4A3E20",
        tangerine: "#FF5B1F",
        violet: "#7B5CFF",
        "brand-pink": "#FFB8C6",
      },
      fontFamily: {
        display: ["Sentient", "Georgia", "serif"],
        body: ["General Sans", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
