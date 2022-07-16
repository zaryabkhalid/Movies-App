/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      md: "740px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-color": "#0f171e",
        "secondary-color": "#1a242f",
        "font-primary": "#ffffff",
        "font-secondary": "#79b8f3",
      },
    },
  },
  plugins: [],
}
