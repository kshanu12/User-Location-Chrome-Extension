/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        '2293b0': '#2293b0',
        'd9d9d9': '#d9d9d9'
      },
    },
  },
}