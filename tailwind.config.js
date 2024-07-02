/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...import("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#0d89ec",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [import("daisyui")],
};