/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gon: {
          dark: "#000000",
          darkgreen: "#30522a",
          green: "#004c26",
          orange: "#ca5329",
        },
      },
    },
    fontFamily: {
      Galmuri11: ["Galmuri11"],
      Galmuri11_Bold: ["Galmuri11-Bold"],
      DungGeunMo: ["DungGeunMo"],
      PartialSans: ["PartialSans"],
      Pretendard_Light: ["Pretendard-ExtraLight"],
    },
  },
  plugins: [],
};
