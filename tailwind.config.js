/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.2em', // Adjust this value as needed
      },
    },
  },
  plugins: [require("daisyui")],
}

