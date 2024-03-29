/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ui: "#FFFFFF",
        surface: "#EDF4FF",
        primary: {
          default: "#81D4FA",
          light: "#B3E0FF",
          dark: "#4FC3F7",
        },
        secondary: {
          default: "#FFB74D",
          light: "#FFD180",
          dark: "#FFA726",
        },
        danger: {
          default: "#e74c3c", // Red
          light: "#ff6655",
          dark: "#c0392b",
        },
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },

      animation: {
        spin: "spin 1000ms linear infinite",
        gradient: "gradient 1s ease infinite",
      },
    },
  },
  plugins: [],
};
