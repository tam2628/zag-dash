/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "zag-primary": "#1B59F8",
        "zag-gray-100": "#EFF0F6",
        "zag-gray-200": "#2F2F2F",
        "zag-primary-100": "rgba(27, 89, 248, 0.1)",
        "zag-gray": "rgba(0, 0, 0, 0.3)",
      },
      textColor: {
        "zag-gray-200": "#2F2F2F",
        "zag-primary-200": "#1B59F8",
      },
    },
  },
  plugins: [],
};
