/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#00B87C",
      secondary: "#00B87C",
      accent: "#00B87C",
      neutral: "#3D4451",
    },
  },
  plugins: [],
}
