/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ critical!
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
