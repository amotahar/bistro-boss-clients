/** @type {import('tailwindcss').Config} */
export default {
  ccontent: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  themes: ["light", "dark", "cupcake"],
  plugins: [require("daisyui")],
};
