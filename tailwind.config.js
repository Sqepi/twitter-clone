module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  safelist: [
    "bg-red-500", // Example of a class to safelist
    "text-center",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};