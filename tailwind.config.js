/** @type {import('tailwindcss').Config} */
module.exports = {
  // Other Tailwind CSS configurations...
  darkMode: "class",
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        dracula: {
          bg: "#282A36",
          card: "#343746",
          cardAlt: "#2F3242",
          line: "#44475A",
          text: "#F8F8F2",
          muted: "#C7C9D9",
          muted2: "#A9ADC1",
          purple: "#BD93F9",
          pink: "#FF79C6",
          green: "#50FA7B",
          cyan: "#8BE9FD",
          yellow: "#F1FA8C",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Noto Sans TC"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
    },
  },
};
