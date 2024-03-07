/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youTube: "hsl(348, 97%, 39%)",

        // Dark Theme

        VeryDarkBlueBG: "hsl(230, 17%, 14%)",
        VeryDarkBlueTopBG: "hsl(232, 19%, 15%)",
        DarkDesaturatedBlue: "hsl(228, 28%, 20%)", // Card BG
        DesaturatedBlue: "hsl(228, 34%, 66%)", // Text
        White: "hsl(0, 0%, 100%)", // Text

        // Light Theme

        WhiteBG: "hsl(0, 0%, 100%)", // Light BG
        VeryPaleBlue: "hsl(225, 100%, 98%)", //  (Top BG Pattern)
        LightGrayishBlue: " hsl(227, 47%, 96%)", // Card BG
        DarkGrayishBlue: "hsl(228, 12%, 44%)", // Text
        VeryDarkBlue: "hsl(230, 17%, 14%)", // Text
      },
    },
  },
  plugins: [],
};
