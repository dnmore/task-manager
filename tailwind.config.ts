import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        sans_grotesque: [
          '"Bricolage Grotesque"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        primary: ".5rem .5rem 0 0 hsl(237, 18%, 23%)",
        secondary: ".2rem .2rem  0 0 hsl(237, 18%, 23%)",
      },
      colors: {
        customGreen: "#6FDCBF",
        customGray: "#F6F4F6",
        customPurple: "#AE8FDB",
        customYellow: "#FEF8B4",
      },
    },
  },
  plugins: [],
} satisfies Config;
