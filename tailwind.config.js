/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other paths where your components reside
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Add all the color classes you plan to use dynamically
    "border-rose-700",
    "bg-rose-700",
    "bg-cyan-300",
    "border-cyan-300",
  ],
};
